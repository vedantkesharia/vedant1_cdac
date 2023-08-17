import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Fade from 'react-reveal/Fade';
import { useNavigate } from "react-router-dom";
import solution1 from "../img/solution_example1.jpeg";
import solution2 from "../img/solution_example2.jpeg";
import solution3 from "../img/solution_example3.jpeg";
import solution4 from "../img/solution_example4.jpeg";
import solution5 from "../img/solution_example5.jpeg";
import solution6_1 from "../img/solution_example6.1.jpeg";
import solution6_2 from "../img/solution_example6.2.jpeg";
const Theory2 = () => {
  let navigate = useNavigate();
  const handleSimulation1 = () => {
    navigate("/simulation1");
  };
  return (
    <div>
        <Fade left>
      <Card
        sx={{
          border: "1px solid #0C2D48",
          margin: "50px",
          backgroundColor: "#fff",
          boxShadow: "2px 5px 10px 2px grey",
          borderBottomLeftRadius: "20px",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >

        <div className="container1 ">
          <div className="question_theory">
            Example 1: What is the probability of getting a number greater than 5
            ,when a fair six-sided die is rolled.
          </div>
          <br />
          <div className="sol_text">Solution: </div>

          <br />
          <div className="answer_theory">
            We can write the sample space as S=1,2,3,4,5,6. Let be the event
            that number is greater than 4 , then E = 5,6. Hence,
            <br />
            <img className="solution1" src={solution2} alt="" />
          </div>
        </div>

      </Card>
      </Fade>

      <Fade right>
      <Card
        sx={{
          border: "1px solid #0C2D48",
          margin: "50px",
          backgroundColor: "#fff",
          boxShadow: "2px 5px 10px 2px grey",
          borderBottomLeftRadius: "20px",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <div className="container1 ">
          <div className="question_theory">
            Example 2: What is the probability of getting a prime number when a
            fair six-sided die is rolled.
          </div>
          <br />
          <div className="sol_text">Solution: </div>

          <br />
          <div className="answer_theory">
            We can write the sample space as S=1,2,3,4,5,6. Let E be the event
            that the number is prime, then E = 1,3,5 . Hence,
            <br />
            <img className="solution1" src={solution1} alt="" />
          </div>
        </div>
      </Card>
      </Fade>

      <Fade left>
      <Card
        sx={{
          border: "1px solid #0C2D48",
          margin: "50px",
          backgroundColor: "#fff",
          boxShadow: "2px 5px 10px 2px grey",
          borderBottomLeftRadius: "20px",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <div className="container1 ">
          <div className="question_theory">
            Example 3: Two six-sided, fair dice are rolled. What is the
            probability that the sum of their outcomes is greater than 10 ?
          </div>
          <br />
          <div className="sol_text">Solution: </div>

          <br />
          <div className="answer_theory">
            Out of the 36 possible outcomes shown in the sample space above,
            there are only three outcomes for which the sum is greater than 10,
            i.e., E=(5,6),(6,5),(6,6). So,
            <br />
            <img className="solution1" src={solution3} alt="" />
          </div>
        </div>
      </Card>
      </Fade>

      <Fade right>
      <Card
        sx={{
          border: "1px solid #0C2D48",
          margin: "50px",
          backgroundColor: "#fff",
          boxShadow: "2px 5px 10px 2px grey",
          borderBottomLeftRadius: "20px",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <div className="container1 ">
          <div className="question_theory">
            Example 4: Two six-sided, fair dice are rolled. What are the
            probabilities of getting one even and one odd number?
          </div>
          <br />
          <div className="sol_text">Solution: </div>

          <br />
          <div className="answer_theory">
            Let us collect all outcomes that contain one even and one odd number
            number from the sample space given above,i.e.,E =
            (2,1),(4,1),(6,1),(1,2),(3,2),(5,2),(2,3),(4,3),(6,3),(1,4),(3,4),(5,4),(2,5),(4,5),(6,5),(1,6),(3,6),(5,6).
            There are 18 elements in E, so the probability is calculated as
            <br />
            <img className="solution1" src={solution4} alt="" />
          </div>
        </div>
      </Card>
      </Fade>

      <Fade left>
      <Card
        sx={{
          border: "1px solid #0C2D48",
          margin: "50px",
          backgroundColor: "#fff",
          boxShadow: "2px 5px 10px 2px grey",
          borderBottomLeftRadius: "20px",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <div className="container1 ">
          <div className="question_theory">
            Example 5: Two six-sided dice are rolled, which is more likely to
            happen: the sum is equal to 10, or the sum is equal to 11?
          </div>
          <br />
          <div className="sol_text">Solution: </div>

          <br />
          <div className="answer_theory">
            Let us collect all outcomes that sum to 10 and call it E1, i.e.,
            (4,6),(5,5),(6,4). Let us collect all outcomes that sum 11 to and
            call it E2, i.e., (5,6),(6,5). Hence,
            <br />
            <img className="solution1" src={solution5} alt="" />
            So, the probability that the sum is equal 10 to is more likely to
            happen than a sum equal to 11.
          </div>
        </div>
      </Card>
      </Fade>
      
      <Fade right>
      <Card
        sx={{
          border: "1px solid #0C2D48",
          margin: "50px",
          backgroundColor: "#fff",
          boxShadow: "2px 5px 10px 2px grey",
          borderBottomLeftRadius: "20px",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <div className="container1 ">
          <div className="question_theory">
            Example 6: We roll two dice simultaneously. Find the probability of
            the following events: 1. Getting a multiple of 5 as the sum. 2.
            Getting a multiple of 2 on one die and a multiple of 3 on the other
            die.
          </div>
          <br />
          <div className="sol_text">Solution: </div>

          <br />
          <div className="answer_theory">
            1.Let us collect all outcomes that are sum into multiples of , from
            the sample space given above, i.e.,E=
            (1,4),(2,3),(3,2),(4,1),(4,6),(5,5),(6,4) There are 7 elements in E,
            so the probability is calculated as
            <br />
            <img className="solution1" src={solution6_1} alt="" />
            2.Writing all the outcomes that are a multiple of 2 on one die and a
            multiple of 3 on the other from the sample space shown above gives
            E=(2,3),(2,6),(3,2),(3,4)(3,6),(4,3),(4,6),(6,2)(6,3),(6,4),(6,6)
            There are 11 elements in E, so the probability is calculated as:
            <img className="solution1" src={solution6_2} alt="" />
          </div>
        </div>
      </Card>
      </Fade>

      <div className="flex justify-center mb-3">
        <a className="next" onClick={handleSimulation1}>
          Simulation &raquo;
        </a>
      </div>
    </div>
  );
};

export default Theory2;
