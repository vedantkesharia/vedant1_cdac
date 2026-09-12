const DEFAULT_FACE_COUNT = 6;

export const createDiceOutcomes = (
  rollCount,
  rng = Math.random,
  faceCount = DEFAULT_FACE_COUNT
) => {
  return Array.from({ length: rollCount }, () => Math.floor(rng() * faceCount) + 1);
};

export const summarizeDiceOutcomes = (
  outcomes,
  initialCounts = Array(DEFAULT_FACE_COUNT).fill(0),
  totalRollsOverride
) => {
  const counts = [...initialCounts];

  outcomes.forEach((outcome) => {
    counts[outcome - 1] += 1;
  });

  const totalRolls = totalRollsOverride ?? counts.reduce((sum, count) => sum + count, 0);
  const probabilities = counts.map((count) => (totalRolls === 0 ? 0 : count / totalRolls));

  return {
    counts,
    totalRolls,
    probabilities,
  };
};

export const measureDiceSimulationPerformance = ({
  rollsPerRun = 10000,
  runs = 5,
  rng = Math.random,
  now = () => performance.now(),
} = {}) => {
  const timingsMs = [];

  for (let runIndex = 0; runIndex < runs; runIndex += 1) {
    const start = now();
    const outcomes = createDiceOutcomes(rollsPerRun, rng);
    summarizeDiceOutcomes(outcomes);
    const durationMs = Math.max(now() - start, 0);
    timingsMs.push(durationMs);
  }

  const averageMs = timingsMs.reduce((sum, timing) => sum + timing, 0) / timingsMs.length;
  const bestMs = Math.min(...timingsMs);
  const worstMs = Math.max(...timingsMs);
  const simulationsPerSecond = averageMs === 0 ? Infinity : Math.round((rollsPerRun / averageMs) * 1000);

  return {
    rollsPerRun,
    runs,
    timingsMs,
    averageMs,
    bestMs,
    worstMs,
    simulationsPerSecond,
  };
};