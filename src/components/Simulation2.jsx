import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CardActions,
} from "@mui/material";
import Plot from "react-plotly.js";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

const Simulation2 = () => {
  let navigate = useNavigate();
  const diceRef = useRef(null);
  const [step, setStep] = useState(1);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    if (step === 5) {
      setShowAlert(false);
    }
  }, [step]);


  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const rollDice = (random) => {
    return new Promise((resolve) => {
      diceRef.current.style.animation = "rolling 4s";

      setTimeout(() => {
        switch (random) {
          case 1:
            diceRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
            break;
          case 6:
            diceRef.current.style.transform = "rotateX(180deg) rotateY(0deg)";
            break;
          case 2:
            diceRef.current.style.transform = "rotateX(-90deg) rotateY(0deg)";
            break;
          case 5:
            diceRef.current.style.transform = "rotateX(90deg) rotateY(0deg)";
            break;
          case 3:
            diceRef.current.style.transform = "rotateX(0deg) rotateY(90deg)";
            break;
          case 4:
            diceRef.current.style.transform = "rotateX(0deg) rotateY(-90deg)";
            break;
          default:
            break;
        }

        diceRef.current.style.animation = "none";
        resolve();
      }, 1800);
    });
  };

const gotosimulation3 = () =>{
    navigate('/simulation3');
}

  const [numRolls, setNumRolls] = useState(0);
  const [outcomes, setOutcomes] = useState([]);
  const [cumulativeCounts, setCumulativeCounts] = useState(Array(6).fill(0));
  const [isGenerated, setIsGenerated] = useState(false);
  const [isSimulationComplete, setIsSimulationComplete] = useState(false);

  const handleGenerate = async (rollCount) => {
    const rolls = numRolls + rollCount;

    const outcomeCounts = [...cumulativeCounts];
    const rolledOutcomes = [];

    for (let i = numRolls + 1; i <= rolls; i++) {
      const outcome = Math.floor(Math.random() * 6) + 1;
      rolledOutcomes.push(outcome);
      outcomeCounts[outcome - 1]++;

      if (rollCount !== 50 && rollCount !== 500) {
        await rollDice(outcome);
        await new Promise((resolve) => setTimeout(resolve, 325));
      } else if (rollCount === 1 && rollCount === 5) {
        await new Promise((resolve) => setTimeout(resolve, 200));
      }
      setOutcomes((prevOutcomes) => [...prevOutcomes, outcome]);
      setNumRolls(i);
      setCumulativeCounts(outcomeCounts);
      setIsGenerated(true);

      if (rollCount !== 50 && rollCount !== 500) {
        await new Promise((resolve) => setTimeout(resolve, 200));
      }
    }

    if (step === 4) {
      setIsSimulationComplete(true);
    }

    setStep(step + 1); // Move to the next step
  };

  const resetSimulation = () => {
    setNumRolls(0);
    setOutcomes([]);
    setCumulativeCounts(Array(6).fill(0));
    setIsGenerated(false);
    setIsSimulationComplete(false);
    setStep(1);
    setShowAlert(true);
  };

  const theoreticalProbabilities = Array(6).fill(1 / 6);

  const cumulativeProbabilities = cumulativeCounts.map((count) =>
    (count / numRolls).toFixed(3)
  );

  const plotData = [
    {
      x: ["1", "2", "3", "4", "5", "6"],
      y: cumulativeProbabilities,
      type: "bar",
      name: "Cumulative Probabilities",
    },
    {
      x: ["1", "2", "3", "4", "5", "6"],
      y: theoreticalProbabilities,
      type: "bar",
      name: "Theoretical Probabilities",
    },
  ];

  const plotLayout = {
    title: "Dice Roll Probabilities",
    barmode: "group",
    xaxis: { title: "Outcome" },
    yaxis: { title: "Probability" },
  };

  return (
    <div>
      {showAlert && (
        <Card
          variant="outlined"
          style={{
            margin: "20px",
            backgroundColor: "#F3F7FA",
          }}
        >
          <CardContent>
            {/* <Typography variant="subtitle1" color="textSecondary">
              Step {step}: Roll{" "}
              {step === 1
                ? "1 time"
                : step === 2
                ? "5 times"
                : step === 3
                ? "50 times"
                : "500 times"}
            </Typography> */}
            <Typography variant="subtitle1" color="black" style={{fontWeight:'bold',fontSize:'20px'}}>
              Step {step}: {" "}
              {step === 1
                ? "Click on the Roll Dice button to initiate the simulation for one dice roll."
                : step === 2
                ? "Roll 5 times.Notice how the experimental probabilities in the graph and table change with each additional dice roll."
                : step === 3
                ? "Roll 50 times.Compare the experimental probabilities in the graph and table with the theoretical probabilities."
                : "Roll 500 times.Observe how the experimental probabilities tend to approach the theoretical probabilities."}
            </Typography>
          </CardContent>
        </Card>
      )}
      <Card
        sx={{
          maxWidth: 345,
          marginTop: "30px",
          marginLeft: "30px",
          borderBottomColor: "white",
          marginBottom: "15px",
        }}
      >
        <CardContent sx={{ marginTop: "20px", marginLeft: "25px" }}>
          <Typography variant="body2">
            <div className="dicdediv">
              <div className="dice" ref={diceRef}>
                <div className="face front"></div>
                <div className="face back"></div>
                <div className="face top"></div>
                <div className="face bottom"></div>
                <div className="face right"></div>
                <div className="face left"></div>
              </div>
            </div>
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "12px",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#DC4C64",
              "&:hover": { backgroundColor: "rgb(85, 33, 138)" },
              marginTop: "35px",
            }}
            variant="contained"
            onClick={resetSimulation}
          >
            Reset
          </Button>
        </CardActions>
      </Card>

      <div className="dice-simulation">
        <div className="input-container">
          <label
            style={{
              margin: "10px 10px 10px 85px",
              border: "1px solid black",
              padding: "15px",
              fontFamily: "Baloo Bhai 2",
              fontWeight: "bold",
            }}
          >
            Number of Rolls: {numRolls}
          </label>
        </div>
        <div className="roll-buttons">
          {isSimulationComplete ? (
            <>
              <div>
                <Button
                  sx={{ margin: "10px" }}
                  variant="contained"
                  color="secondary"
                  onClick={() => handleGenerate(1)}
                >
                  Roll 1 Time
                </Button>
                <Button
                  sx={{ margin: "10px" }}
                  variant="contained"
                  color="secondary"
                  onClick={() => handleGenerate(5)}
                >
                  Roll 5 Times
                </Button>
             
                <Button
                  sx={{ margin: "10px" }}
                  variant="contained"
                  color="secondary"
                  onClick={() => handleGenerate(50)}
                >
                  Roll 50 Times
                </Button>
                </div>
                <div>
                <Button
                  sx={{ marginLeft: "145px" }}
                  variant="contained"
                  color="secondary"
                  onClick={() => handleGenerate(500)}
                >
                  Roll 500 Times
                </Button>
              </div>
            </>
          ) : (
            <>
              {step === 1 && (
                 
                <Button
                  sx={{ marginLeft:'145px',marginTop:'-15px' }}
                  variant="contained"
                  color="secondary"
                  onClick={() => handleGenerate(1)}
                >
                  Roll 1 Time
                </Button>
                
              )}
              {step === 2 && (
                <Button
                  // sx={{ margin: "10px" }}
                  sx={{ marginLeft:'145px',marginTop:'-15px' }}
                  variant="contained"
                  color="secondary"
                  onClick={() => handleGenerate(5)}
                >
                  Roll 5 Times
                </Button>
              )}
              {step === 3 && (
                <Button
                  // sx={{ margin: "10px" }}
                  sx={{ marginLeft:'145px',marginTop:'-15px' }}
                  variant="contained"
                  color="secondary"
                  onClick={() => handleGenerate(50)}
                >
                  Roll 50 Times
                </Button>
              )}
              {step === 4 && (
                <Button
                  // sx={{ margin: "10px" }}
                  sx={{ marginLeft:'145px',marginTop:'-15px' }}
                  variant="contained"
                  color="secondary"
                  onClick={() => handleGenerate(500)}
                >
                  Roll 500 Times
                </Button>
              )}
            </>
          )}
          {step> 1 && (
    <div
      className="scroll-down-button"
      onClick={handleScrollDown}
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        background: "#DC4C64",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        cursor: "pointer",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
      }}
    >
      <ArrowDownwardOutlinedIcon />
    </div>
  )}
        </div>
        {isGenerated && (
          <div className="result-container">
            <div className="plot-container">
              <Plot data={plotData} layout={plotLayout} />
            </div>
            <br />
            <br />
            <br />
            <br />
            <Typography
              variant="h4"
              sx={{
                margin: "auto",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              Data In Tabular Form
            </Typography>
            <div
              className="table-container"
              style={{
                width: "600px",
                height: "400px",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <TableContainer sx={{ border: "1px solid black" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ borderRight: "1px solid black" }}>
                        Outcome
                      </TableCell>
                      <TableCell sx={{ borderRight: "1px solid black" }}>
                        Count
                      </TableCell>
                      <TableCell sx={{ borderRight: "1px solid black" }}>
                        Probability
                      </TableCell>
                      <TableCell>Theoretical Probability</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cumulativeCounts.map((count, index) => (
                      <TableRow
                        key={index}
                        sx={{ borderBottom: "1px solid black" }}
                      >
                        <TableCell sx={{ borderRight: "1px solid black" }}>
                          {index + 1}
                        </TableCell>
                        <TableCell sx={{ borderRight: "1px solid black" }}>
                          {count}
                        </TableCell>
                        <TableCell sx={{ borderRight: "1px solid black" }}>
                          {(count / numRolls).toFixed(2)}
                        </TableCell>
                        <TableCell>
                          {theoreticalProbabilities[index].toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        )}
      </div>
      <br />
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      {isSimulationComplete && (
        <Button
          sx={{ margin: "10px" }}
          variant="contained"
          color="secondary"
          onClick={gotosimulation3} 
        >
          Conclusion
        </Button>
      )}
      </div>
    </div>
  );
};

export default Simulation2;



