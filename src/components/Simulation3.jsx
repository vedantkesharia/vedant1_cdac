import { Button, Card } from "@mui/material";
import React from "react";
import Plot from "react-plotly.js";
import { useNavigate } from "react-router-dom";

const Simulation3 = () => {
 let navigate = useNavigate();
const gototest = () =>{
  navigate("/test")
}

  return (
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
      <h1
            style={{
              marginTop:'20px',
              fontSize: "36px",
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "32px",
              fontFamily: "Baloo Bhai 2",
            }}
          > 
          Conclusion
          </h1>
        <br />
        <div className="answer_theory">
          The study showed that as the number of dice rolls increased, the
          experimental probability closely matched the theoretical probability,
          supporting the law of large numbers. This validates the fundamental
          principles of probability theory and its relevance in real-world
          scenarios with significant trial sizes. .... 
        </div>
        <Button
          sx={{ margin: "10px" }}
          variant="contained"
          color="secondary"
          onClick={gototest}
        >
          Test Your Knowledge!
        </Button>
        </div>
    </Card>
  );
};

export default Simulation3;


