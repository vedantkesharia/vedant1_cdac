import {
  createDiceOutcomes,
  summarizeDiceOutcomes,
  measureDiceSimulationPerformance,
} from './simulationMetrics';

test('createDiceOutcomes generates the requested number of rolls', () => {
  const rngValues = [0.0, 0.24, 0.5, 0.74, 0.9];
  let index = 0;

  const outcomes = createDiceOutcomes(5, () => rngValues[index++]);

  expect(outcomes).toEqual([1, 2, 4, 5, 6]);
});

test('summarizeDiceOutcomes aggregates counts and probabilities', () => {
  const summary = summarizeDiceOutcomes([1, 6, 6, 2], [1, 0, 0, 0, 0, 0], 5);

  expect(summary.counts).toEqual([2, 1, 0, 0, 0, 2]);
  expect(summary.totalRolls).toBe(5);
  expect(summary.probabilities).toEqual([0.4, 0.2, 0, 0, 0, 0.4]);
});

test('measureDiceSimulationPerformance reports timing stats for 10k runs', () => {
  const nowValues = [0, 4, 10, 15, 20, 26];
  let nowIndex = 0;

  const benchmark = measureDiceSimulationPerformance({
    rollsPerRun: 10000,
    runs: 3,
    rng: () => 0.49,
    now: () => nowValues[nowIndex++],
  });

  expect(benchmark.rollsPerRun).toBe(10000);
  expect(benchmark.runs).toBe(3);
  expect(benchmark.timingsMs).toEqual([4, 5, 6]);
  expect(benchmark.averageMs).toBe(5);
  expect(benchmark.bestMs).toBe(4);
  expect(benchmark.worstMs).toBe(6);
  expect(benchmark.simulationsPerSecond).toBe(2000000);
});