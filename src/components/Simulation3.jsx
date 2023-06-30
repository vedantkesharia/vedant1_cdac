import React, { useState, useRef } from 'react';
import { Card, CardContent, CardActions, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Plot from 'react-plotly.js';

const Simulation3 = () => {
  const diceRef = useRef(null);

  const rollDice = (random) => {
    return new Promise((resolve) => {
      diceRef.current.style.animation = 'rolling 4s';

      setTimeout(() => {
        switch (random) {
          case 1:
            diceRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
            break;
          case 6:
            diceRef.current.style.transform = 'rotateX(180deg) rotateY(0deg)';
            break;
          case 2:
            diceRef.current.style.transform = 'rotateX(-90deg) rotateY(0deg)';
            break;
          case 5:
            diceRef.current.style.transform = 'rotateX(90deg) rotateY(0deg)';
            break;
          case 3:
            diceRef.current.style.transform = 'rotateX(0deg) rotateY(90deg)';
            break;
          case 4:
            diceRef.current.style.transform = 'rotateX(0deg) rotateY(-90deg)';
            break;
          default:
            break;
        }

        diceRef.current.style.animation = 'none';
        resolve();
      }, 1800); // Keep the dice rolling time at 4 seconds
    });
  };

  const [numRolls, setNumRolls] = useState(0);
  const [outcomes, setOutcomes] = useState([]);
  const [cumulativeCounts, setCumulativeCounts] = useState(Array(6).fill(0));
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = async (rollCount) => {
    const rolls = numRolls + rollCount;

    const outcomeCounts = [...cumulativeCounts];
    const rolledOutcomes = [];

    for (let i = numRolls + 1; i <= rolls; i++) {
      const outcome = Math.floor(Math.random() * 6) + 1;
      rolledOutcomes.push(outcome);
      outcomeCounts[outcome - 1]++;
    }

    setOutcomes((prevOutcomes) => [...prevOutcomes, ...rolledOutcomes]);
    setNumRolls(rolls);
    setCumulativeCounts(outcomeCounts);
    setIsGenerated(true);

    if (rollCount !== 50 && rollCount !== 500) {
      for (let i = 0; i < rolledOutcomes.length; i++) {
        await rollDice(rolledOutcomes[i]);
        await new Promise((resolve) => setTimeout(resolve, 500)); // Adjust the timeout duration here (in milliseconds)
      }
    }
  };

  const resetSimulation = () => {
    setNumRolls(0);
    setOutcomes([]);
    setCumulativeCounts(Array(6).fill(0));
    setIsGenerated(false);
  };

  const theoreticalProbabilities = Array(6).fill(1 / 6);

  const cumulativeProbabilities = cumulativeCounts.map((count) => count / numRolls);

  const plotData = [
    { x: ['1', '2', '3', '4', '5', '6'], y: cumulativeProbabilities, type: 'bar', name: 'Cumulative Probabilities' },
    { x: ['1', '2', '3', '4', '5', '6'], y: theoreticalProbabilities, type: 'bar', name: 'Theoretical Probabilities' },
  ];

  const plotLayout = {
    title: 'Dice Roll Probabilities',
    barmode: 'group',
    xaxis: { title: 'Outcome' },
    yaxis: { title: 'Probability' },
  };

  return (
    <div>
      <Card
        sx={{
          maxWidth: 345,
          marginTop: '46px',
          marginLeft: '30px',
          border: 'none',
          borderBottomColor: 'white',
          marginBottom: '15px',
        }}
      >
        <CardContent sx={{ marginTop: '20px', marginLeft: '25px' }}>
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '12px',
          }}
        >
          {/* <br />
          <br />
          <br /> */}
          <Button sx={{ backgroundColor: '#DC4C64', '&:hover': {
      backgroundColor: 'rgb(85, 33, 138)',
    },marginTop:'35px' }} variant="contained" onClick={resetSimulation}>
            Reset
          </Button>
        </CardActions>
      </Card>

      <div className="dice-simulation">
        <div className="input-container">
          <label
            style={{
              margin: '10px 10px 10px 85px',
              border: '1px solid black',
              padding: '15px',
              fontFamily: 'Baloo Bhai 2',
              fontWeight: 'bold',
            }}
          >
            Number of Rolls: {numRolls}
          </label>
        </div>
        <div className="roll-buttons">
          <Button sx={{ margin: '10px' }} variant="contained" color="secondary" onClick={() => handleGenerate(1)}>
            Roll 1 Time
          </Button>
          <Button sx={{ margin: '10px' }} variant="contained" color="secondary" onClick={() => handleGenerate(5)}>
            Roll 5 Times
          </Button>
          <Button sx={{ margin: '10px' }} variant="contained" color="secondary" onClick={() => handleGenerate(50)}>
            Roll 50 Times
          </Button>
          <br />
          <Button
            sx={{ margin: '10px 10px 10px 140px' }}
            variant="contained"
            color="secondary"
            onClick={() => handleGenerate(500)}
          >
            Roll 500 Times
          </Button>
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
            <Typography variant="h4" sx={{ margin: 'auto', textAlign: 'center', justifyContent: 'center' }}>
              Data In Tabular Form
            </Typography>
            <div
              className="table-container"
              style={{ width: '600px', height: '400px', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}
            >
              <TableContainer sx={{ border: '1px solid black' }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ borderRight: '1px solid black' }}>Outcome</TableCell>
                      <TableCell sx={{ borderLeft: '1px solid black', borderRight: '1px solid black' }}>Count</TableCell>
                      <TableCell>Probability</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cumulativeCounts.map((count, index) => (
                      <TableRow key={index} sx={{ borderBottom: '1px solid black' }}>
                        <TableCell sx={{ borderRight: '1px solid black' }}>{index + 1}</TableCell>
                        <TableCell sx={{ borderLeft: '1px solid black', borderRight: '1px solid black' }}>{count}</TableCell>
                        <TableCell>{(count / numRolls).toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default Simulation3;



















// import React, { useState, useRef } from 'react';
// import { Card, CardContent, CardActions, Typography } from '@mui/material';
// import Plot from 'react-plotly.js';

// const Simulation3 = () => {
//   const diceRef = useRef(null);

//   const rollDice = (random) => {
//     diceRef.current.style.animation = 'rolling 4s';

//     setTimeout(() => {
//       switch (random) {
//         case 1:
//           diceRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
//           break;
//         case 6:
//           diceRef.current.style.transform = 'rotateX(180deg) rotateY(0deg)';
//           break;
//         case 2:
//           diceRef.current.style.transform = 'rotateX(-90deg) rotateY(0deg)';
//           break;
//         case 5:
//           diceRef.current.style.transform = 'rotateX(90deg) rotateY(0deg)';
//           break;
//         case 3:
//           diceRef.current.style.transform = 'rotateX(0deg) rotateY(90deg)';
//           break;
//         case 4:
//           diceRef.current.style.transform = 'rotateX(0deg) rotateY(-90deg)';
//           break;
//         default:
//           break;
//       }

//       diceRef.current.style.animation = 'none';
//     }, 4000); // Keep the dice rolling time at 4 seconds
//   };

//   const [numRolls, setNumRolls] = useState(0);
//   const [outcomes, setOutcomes] = useState([]);
//   const [cumulativeCounts, setCumulativeCounts] = useState(Array(6).fill(0));
//   const [isGenerated, setIsGenerated] = useState(false);

//   const handleGenerate = (rollCount) => {
//     const rolls = numRolls + rollCount;

//     const outcomeCounts = [...cumulativeCounts];
//     const rolledOutcomes = [];

//     for (let i = numRolls + 1; i <= rolls; i++) {
//       const outcome = Math.floor(Math.random() * 6) + 1;
//       rolledOutcomes.push(outcome);
//       outcomeCounts[outcome - 1]++;
//     }

//     setOutcomes((prevOutcomes) => [...prevOutcomes, ...rolledOutcomes]);
//     setNumRolls(rolls);
//     setCumulativeCounts(outcomeCounts);
//     setIsGenerated(true);

//     rolledOutcomes.forEach((outcome, index) => {
//       setTimeout(() => {
//         rollDice(outcome);
//       }, 1000 * (index + 1)); // Reduced timeout duration to 1000 milliseconds (1 second)
//     });
//   };

//   return (
//     <div>
//       <Card
//         sx={{
//           maxWidth: 345,
//           marginTop: '100px',
//           marginLeft: '30px',
//           border: 'none',
//           borderBottomColor: 'white',
//           marginBottom: '15px',
//         }}
//       >
//         <CardContent sx={{ marginTop: '20px', marginLeft: '20px' }}>
//           <Typography variant="body2">
//             <div className="dicdediv">
//               <div className="dice" ref={diceRef}>
//                 <div className="face front"></div>
//                 <div className="face back"></div>
//                 <div className="face top"></div>
//                 <div className="face bottom"></div>
//                 <div className="face right"></div>
//                 <div className="face left"></div>
//               </div>
//             </div>
//           </Typography>
//         </CardContent>
//         <CardActions
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginBottom: '12px',
//           }}
//         >
//           <button className="roll" onClick={() => handleGenerate(1)}>
//             Roll Dice
//           </button>
//         </CardActions>
//       </Card>

//       <div className="dice-simulation">
//         <div className="input-container">
//           <label>Number of Rolls:</label>
//           <input
//             type="number"
//             value={numRolls}
//             onChange={(e) => setNumRolls(parseInt(e.target.value, 10))}
//             placeholder="Enter number of rolls"
//           />
//         </div>
//         <div className="roll-buttons">
//           <button onClick={() => handleGenerate(1)}>Roll 1 Time</button>
//           <button onClick={() => handleGenerate(5)}>Roll 5 Times</button>
//         </div>
//         {isGenerated && (
//           <div className="plot-container">
//             <Plot
//               data={[
//                 { x: ['1', '2', '3', '4', '5', '6'], y: cumulativeCounts, type: 'bar', name: 'Cumulative Counts' },
//               ]}
//               layout={{ title: 'Dice Roll Probabilities' }}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Simulation3;


// import React, { useState, useRef } from 'react';
// import { Card, CardContent, CardActions, Typography } from '@mui/material';
// import Plot from 'react-plotly.js';

// const Simulation3 = () => {
//   const diceRef = useRef(null);

//   const rollDice = (random) => {
//     diceRef.current.style.animation = 'rolling 4s';

//     setTimeout(() => {
//       switch (random) {
//         case 1:
//           diceRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
//           break;
//         case 6:
//           diceRef.current.style.transform = 'rotateX(180deg) rotateY(0deg)';
//           break;
//         case 2:
//           diceRef.current.style.transform = 'rotateX(-90deg) rotateY(0deg)';
//           break;
//         case 5:
//           diceRef.current.style.transform = 'rotateX(90deg) rotateY(0deg)';
//           break;
//         case 3:
//           diceRef.current.style.transform = 'rotateX(0deg) rotateY(90deg)';
//           break;
//         case 4:
//           diceRef.current.style.transform = 'rotateX(0deg) rotateY(-90deg)';
//           break;
//         default:
//           break;
//       }

//       diceRef.current.style.animation = 'none';
//     }, 3000);
//   };

//   const [numRolls, setNumRolls] = useState(0);
//   const [outcomes, setOutcomes] = useState([]);
//   const [cumulativeCounts, setCumulativeCounts] = useState(Array(6).fill(0));
//   const [isGenerated, setIsGenerated] = useState(false);

//   const handleGenerate = (rollCount) => {
//     const rolls = numRolls + rollCount;

//     const outcomeCounts = [...cumulativeCounts];
//     const rolledOutcomes = [];

//     for (let i = numRolls + 1; i <= rolls; i++) {
//       const outcome = Math.floor(Math.random() * 6) + 1;
//       rolledOutcomes.push(outcome);
//       outcomeCounts[outcome - 1]++;
//     }

//     setOutcomes((prevOutcomes) => [...prevOutcomes, ...rolledOutcomes]);
//     setNumRolls(rolls);
//     setCumulativeCounts(outcomeCounts);
//     setIsGenerated(true);

//     rolledOutcomes.forEach((outcome, index) => {
//       setTimeout(() => {
//         rollDice(outcome);
//       }, 3000 * (index + 1));
//     });
//   };

//   return (
//     <div>
//       <Card
//         sx={{
//           maxWidth: 345,
//           marginTop: '100px',
//           marginLeft: '30px',
//           border: 'none',
//           borderBottomColor: 'white',
//           marginBottom: '15px',
//         }}
//       >
//         <CardContent sx={{ marginTop: '20px', marginLeft: '20px' }}>
//           <Typography variant="body2">
//             <div className="dicdediv">
//               <div className="dice" ref={diceRef}>
//                 <div className="face front"></div>
//                 <div className="face back"></div>
//                 <div className="face top"></div>
//                 <div className="face bottom"></div>
//                 <div className="face right"></div>
//                 <div className="face left"></div>
//               </div>
//             </div>
//           </Typography>
//         </CardContent>
//         <CardActions
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginBottom: '12px',
//           }}
//         >
//           <button className="roll" onClick={() => handleGenerate(1)}>
//             Roll Dice
//           </button>
//         </CardActions>
//       </Card>

//       <div className="dice-simulation">
//         <div className="input-container">
//           <label>Number of Rolls:</label>
//           <input
//             type="number"
//             value={numRolls}
//             onChange={(e) => setNumRolls(parseInt(e.target.value, 10))}
//             placeholder="Enter number of rolls"
//           />
//         </div>
//         <div className="roll-buttons">
//           <button onClick={() => handleGenerate(1)}>Roll 1 Time</button>
//           <button onClick={() => handleGenerate(5)}>Roll 5 Times</button>
//         </div>
//         {isGenerated && (
//           <div className="plot-container">
//             <Plot
//               data={[
//                 { x: ['1', '2', '3', '4', '5', '6'], y: cumulativeCounts, type: 'bar', name: 'Cumulative Counts' },
//               ]}
//               layout={{ title: 'Dice Roll Probabilities' }}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Simulation3;
