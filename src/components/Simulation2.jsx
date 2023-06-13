// import { Card, CardContent, Typography } from '@mui/material';
import React, { useState } from 'react'
import Plot from 'react-plotly.js';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Simulation2 = () => {
  const dice = document.querySelector('.dice');
  // const rollBtn = document.querySelector('.roll');

  // const randomDice = () => {

  //   const random = Math.floor(Math.random() * 10);

  //   if (random >= 1 && random <= 6) {
  //     rollDice(random);
  //   }
  //   else {
  //     randomDice();
  //   }
  // }

  const rollDice = (random) => {

    dice.style.animation = 'rolling 4s';

    setTimeout(() => {

      switch (random) {
        case 1:
          dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
          break;

        case 6:
          dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
          break;

        case 2:
          dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
          break;

        case 5:
          dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
          break;

        case 3:
          dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
          break;

        case 4:
          dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
          break;

        default:
          break;
      }

      dice.style.animation = 'none';

    }, 3000);

  }


  const randomDice = () => {

    const random = Math.floor(Math.random() * 10);

    if (random >= 1 && random <= 6) {
      rollDice(random);
    }
    else {
      randomDice();
    }
  }


  const [numRolls, setNumRolls] = useState(0);
  const [userProbabilities, setUserProbabilities] = useState([]);
  const [theoreticalProbabilities, setTheoreticalProbabilities] = useState([]);
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = () => {
    const outcomes = [];
    const outcomeCounts = Array(6).fill(0);

    for (let i = 0; i < numRolls; i++) {
      const outcome = Math.floor(Math.random() * 6) + 1;
      outcomes.push(outcome);
      outcomeCounts[outcome - 1]++;
    }

    const userProbabilities = outcomeCounts.map(count => (count / numRolls).toFixed(2));

    console.log('Roll outcomes:', outcomes);
    console.log('Outcome counts:', outcomeCounts);
    console.log('User probabilities:', userProbabilities);

    setTheoreticalProbabilities(Array(6).fill((1 / 6).toFixed(2)));
    setUserProbabilities(userProbabilities);
    setIsGenerated(true);
  };

  // rollBtn.addEventListener('click', randomDice);
  return (
    // <div style={{backgroundColor: '#F0F8FF', backdropFilter: 'blur(20px)'}}>
    <div >
      <Card sx={{
        maxWidth: 345,
        marginTop: '100px',
        marginLeft: '30px',
        border: 'none',
        borderBottomColor:'white',
        marginBottom:'15px'
      }}
      >
        <CardContent sx={{marginTop:'20px', marginLeft:'20px'}}>
          <Typography variant="body2">
            {/* <div className='container'> */}
            <div className='dicdediv'>
            <div className="dice">
              <div className="face front"></div>
              <div className="face back"></div>
              <div className="face top"></div>
              <div className="face bottom"></div>
              <div className="face right"></div>
              <div className="face left"></div>
            </div>
            </div>
            {/* </div> */}
          </Typography>
        </CardContent>
        <CardActions sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: "center",
          marginBottom: '12px'
        }}>

          <button className="roll" onClick={randomDice}>
            Roll Dice
          </button>
        </CardActions>
      </Card>
      {/* <div class="container"> */}

        {/* <div class="dice">
          <div class="face front"></div>
          <div class="face back"></div>
          <div class="face top"></div>
          <div class="face bottom"></div>
          <div class="face right"></div>
          <div class="face left"></div>
        </div>

        <button class="roll" onClick={randomDice}>
          Roll Dice
        </button> */}

      {/* </div> */}
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
        <button className="generate-btn" onClick={handleGenerate}>
          Generate Graph
        </button>

        {isGenerated && (
          <div className="plot-container">
            <Plot
              data={[
                { x: ['1', '2', '3', '4', '5', '6'], y: userProbabilities, type: 'bar', name: 'User Probabilities' },
                { x: ['1', '2', '3', '4', '5', '6'], y: theoreticalProbabilities, type: 'bar', name: 'Theoretical Probabilities' },
              ]}
              layout={{ title: 'Dice Roll Probabilities' }}
            />
          </div>
        )}
      </div>
    </div>

  )
}

export default Simulation2;
