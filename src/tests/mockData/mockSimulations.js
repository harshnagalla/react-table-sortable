export const mockSimulations = {
  simulationRun: [
    {
      simulationId: 1,
      startTime: 1614594322000,
      endTime: 1614594442000,
      scenarioId: "1",
      carBuild: "1",
      result: {
        numberOfStops: 2,
        hasCollision: false,
      },
    },
    {
      simulationId: 2,
      startTime: 1612520842000,
      endTime: 1612520875000,
      scenarioId: "2",
      carBuild: "1",
      result: {
        numberOfStops: 5,
        hasCollision: false,
      },
    },
    {
      simulationId: 3,
      startTime: 1612527000000,
      endTime: 1612527300000,
      scenarioId: "3",
      carBuild: "1",
      result: {
        numberOfStops: 3,
        hasCollision: true,
      },
    },
    {
      simulationId: 4,
      startTime: 1612519920000,
      endTime: 1612519980000,
      scenarioId: "1",
      carBuild: "2",
      result: {
        numberOfStops: 4,
        hasCollision: false,
      },
    },
    {
      simulationId: 5,
      startTime: 1612520220000,
      endTime: 1612521000000,
      scenarioId: "2",
      carBuild: "2",
      result: {
        numberOfStops: 9,
        hasCollision: false,
      },
    },
    {
      simulationId: 6,
      startTime: 1612366200000,
      endTime: 1612366740000,
      scenarioId: "3",
      carBuild: "2",
      result: {
        numberOfStops: 0,
        hasCollision: false,
      },
    },
    {
      simulationId: 7,
      startTime: 1612372800000,
      endTime: 1612373160000,
      scenarioId: "3",
      carBuild: "1",
      result: {
        numberOfStops: 1,
        hasCollision: false,
      },
    },
    {
      simulationId: 9,
      startTime: 1612204800000,
      endTime: 1612208880000,
      scenarioId: "3",
      carBuild: "3",
      result: {
        numberOfStops: 2,
        hasCollision: false,
      },
    },
    {
      simulationId: 8,
      startTime: 1614470400000,
      endTime: 1614556800000,
      scenarioId: "3",
      carBuild: "2",
      result: {
        numberOfStops: 8,
        hasCollision: false,
      },
    },
  ],
  scenarios: [
    {
      scenarioId: "1",
      maxNumberOfStops: 4,
      maxRunningTime: 7000000,
    },
    {
      scenarioId: "2",
      maxNumberOfStops: 5,
      maxRunningTime: 400000,
    },
    {
      scenarioId: "3",
      maxNumberOfStops: 6,
      maxRunningTime: 1000000,
    },
  ],
};
