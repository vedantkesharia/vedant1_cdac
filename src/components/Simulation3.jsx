import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import {Tilt} from 'react-tilt';
import { Flip } from "react-reveal";
function Simulation3() {
  let navigate = useNavigate();

  const handleTest = () => {
    navigate("/test");
  };
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    // Wait for the component to mount before showing the card
    setTimeout(() => {
      setCardVisible(true);
    }, 500);
  }, []);

  return (
    <div
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
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(5px)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            borderRadius: "16px",
            padding: "32px",
            maxWidth: "600px",
            height: "450px",
            width: "100%",
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
            Conclusion
          </h1>

          <p
            style={{
              textIndent: "15px",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "Baloo Bhai 2",
            }}
          >
            The study showed that as the number of dice rolls increased, the
            experimental probability closely matched the theoretical
            probability, supporting the law of large numbers. This validates the
            fundamental principles of probability theory and its relevance in
            real-world scenarios with significant trial sizes. ....
          </p>
          <button
            className="start_button"
            onClick={handleTest}
            style={{
              backgroundColor: "#cb55e0",
              position: "absolute",
              marginBottom: "4px",
              marginLeft: "160px",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              borderRadius: "8px",
              padding: "15px",
              fontSize: "18px",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
              fontFamily: "Baloo Bhai 2",
            }}
          >
            Test Your Knowledge
          </button>
        </div>
        {/* </Tilt> */}
      </Flip>
    </div>
  );
}

export default Simulation3;
