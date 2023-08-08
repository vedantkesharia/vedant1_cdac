import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import {Tilt} from 'react-tilt';
import { Card } from "@mui/material";
import { Flip } from "react-reveal";
function Simulation1() {
  let navigate = useNavigate();

  const handleStartSimulation = () => {
    navigate("/simulation2");
  };
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    // Wait for the component to mount before showing the card
    setTimeout(() => {
      setCardVisible(true);
    }, 500);
  }, []);

  return (
    <Card
      style={{
        backgroundColor: "#F0F8FF",
        backdropFilter: "blur(20px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Flip left>
        {/* <Tilt options={{ max: 25, scale: 1.1 }}> */}
        <div
          className={`simulation-card ${cardVisible ? "slide-in" : ""}`}
          style={{
            // backgroundColor: "rgba(255, 255, 255, 0.25)",
            backgroundColor: "white",
            backdropFilter: "blur(5px)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            borderRadius: "16px",
            padding: "32px",
            maxWidth: "600px",
            maxHeight:'80%',
            // height: "450px",
            width: "90%",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "32px",
              fontFamily: "Baloo Bhai 2",
            }}
          >
            Start Simulation
          </h1>
          <p
            style={{
              fontSize: "25px",
              textAlign: "center",
              fontWeight: "bold",
              fontFamily: "Poppins",
            }}
          >
            Enough Of "Theoretical Knowledge",Now Lets Learn Using Simulation!
          </p>
          <br />
          <p
            style={{
              textIndent: "15px",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "Baloo Bhai 2",
            }}
          >
            We will expand our understanding on topic of probability using dice
            simulation where we will be comparing the theoretical and
            experimental outputs of a dice rolled 500 times...
          </p>
          <button
            className="start_button"
            onClick={handleStartSimulation}
            style={{
              backgroundColor: "#cb55e0",
              // position: "fixed",
              // marginBottom: "100px",
              marginLeft: "238px",
              alignItems: "center",
              marginTop:'20px',
              justifyContent: "center",
              color: "white",
              borderRadius: "8px",
              padding: "16px",
              fontSize: "18px",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
              fontFamily: "Baloo Bhai 2",
            }}
          >
            Start
          </button>
        </div>
        {/* </Tilt> */}
      </Flip>
    </Card>
  );
}

export default Simulation1;
