import React, { useState, useRef } from 'react';
import { Card, CardContent, CardActions, Typography,Button } from '@mui/material';
import Plot from 'react-plotly.js';

const Simulation3 = () => {
  const diceRef = useRef(null);

  const rollDice = (random) => {
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
    }, 4000); // Keep the dice rolling time at 4 seconds
  };

  const [numRolls, setNumRolls] = useState(0);
  const [outcomes, setOutcomes] = useState([]);
  const [cumulativeCounts, setCumulativeCounts] = useState(Array(6).fill(0));
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = (rollCount) => {
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

    rolledOutcomes.forEach((outcome, index) => {
      setTimeout(() => {
        rollDice(outcome);
      }, 1000* (index + 1)); // Reduced timeout duration to 1000 milliseconds (1 second)
    });
  };

  return (
    <div>
      <Card
        sx={{
          maxWidth: 345,
          marginTop: '100px',
          marginLeft: '30px',
          border: 'none',
          borderBottomColor: 'white',
          marginBottom: '15px',
        }}
      >
        <CardContent sx={{ marginTop: '20px', marginLeft: '20px' }}>
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
          <button className="roll" onClick={() => handleGenerate(1)}>
            Roll Dice
          </button>
        </CardActions>
      </Card>

      <div className="dice-simulation">
        <div className="input-container">
          <label>Number of Rolls:</label>
          <input
            type="number"
            value={numRolls}
            onChange={(e) => setNumRolls(parseInt(e.target.value, 10))}
            placeholder="Enter number of rolls"
          />
        </div>
        <div className="roll-buttons">
          <Button variant="contained" color="secondary" onClick={() => handleGenerate(1)}>Roll 1 Time</Button>
          <Button variant="contained" color="secondary" onClick={() => handleGenerate(5)}>Roll 5 Times</Button>
          <Button variant="contained" color="secondary" onClick={() => handleGenerate(50)}>Roll 50 Times</Button>
          <Button variant="contained" color="secondary" onClick={() => handleGenerate(500)}>Roll 500 Times</Button>
        </div>
        {isGenerated && (
          <div className="plot-container">
            <Plot
              data={[
                { x: ['1', '2', '3', '4', '5', '6'], y: cumulativeCounts, type: 'bar', name: 'Cumulative Counts' },
              ]}
              layout={{ title: 'Dice Roll Probabilities' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Simulation3;