import { Button, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { measureDiceSimulationPerformance } from "./simulationMetrics";

const Simulation3 = () => {
  let navigate = useNavigate();
  const [benchmark, setBenchmark] = useState(null);

  const runBenchmark = () => {
    setBenchmark(measureDiceSimulationPerformance({ rollsPerRun: 10000, runs: 5 }));
  };

  useEffect(() => {
    runBenchmark();
  }, []);

  const gototest = () => {
    navigate("/test");
  };

  return (
    <div>
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

      <Card
        sx={{
          margin: "50px",
          border: "1px solid #DC4C64",
          boxShadow: "2px 5px 10px 2px rgba(0, 0, 0, 0.12)",
          borderRadius: "20px",
        }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "12px" }}>
            Simulation Performance Snapshot
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "8px" }}>
            This benchmark measures pure computation for 10,000 dice simulations over 5 runs.
          </Typography>
          {benchmark && (
            <div>
              <Typography variant="body1">Average time per 10,000 simulations: {benchmark.averageMs.toFixed(2)} ms</Typography>
              <Typography variant="body1">Best run: {benchmark.bestMs.toFixed(2)} ms</Typography>
              <Typography variant="body1">Worst run: {benchmark.worstMs.toFixed(2)} ms</Typography>
              <Typography variant="body1">Estimated throughput: {benchmark.simulationsPerSecond.toLocaleString()} simulations/second</Typography>
            </div>
          )}
          <Button
            sx={{ marginTop: "16px" }}
            variant="contained"
            color="primary"
            onClick={runBenchmark}
          >
            Re-run 10k Benchmark
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Simulation3;


