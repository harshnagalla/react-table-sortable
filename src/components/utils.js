export const reformatDataForTable = (simulations, scenarios) => {
  const mappedSimulations = simulations.map((simulation) => {
    const {
      scenarioId,
      carBuild,
      startTime,
      endTime,
      result,
      simulationId,
    } = simulation;
    const { numberOfStops, hasCollision } = result;

    const scenario = scenarios.find((item) => item.scenarioId === scenarioId);

    const { maxNumberOfStops, maxRunningTime } = scenario ?? {};

    const runningTime = endTime - startTime;
    return {
      simulationId: simulationId,
      scenarioId: scenarioId,
      carBuild: carBuild,
      startTime: startTime,
      endTime: endTime,
      runningTime: runningTime,
      maxRunningTime: maxRunningTime,
      numberOfStops: numberOfStops,
      maxNumberOfStops: maxNumberOfStops,
      hasCollision: hasCollision,
      doesScenarioPass: checkIfScenarioPasses(
        numberOfStops,
        maxNumberOfStops,
        runningTime,
        maxRunningTime,
        hasCollision
      ),
    };
  });

  return mappedSimulations;
};

export const checkIfScenarioPasses = (
  numberOfStops,
  maxNumberOfStops,
  runningTime,
  maxRunningTime,
  hasCollision
) => {
  if (
    numberOfStops <= maxNumberOfStops &&
    runningTime <= maxRunningTime &&
    !hasCollision
  ) {
    return true;
  } else return false;
};

export const searchData = (searchValue, tableData, searchType) => {
  if (searchType === "1") {
    return tableData.filter((item) => item.scenarioId === searchValue);
  } else if (searchType === "2") {
    return tableData.filter((item) => item.carBuild === searchValue);
  } else return [];
};

export const percentageCalc = (runs, totalRuns) => {
  const calculatedPercentage = (runs / totalRuns) * 100;
  return `${calculatedPercentage.toFixed(2)}%`;
};

export const getStatistics = (tableData) => {
  let numberOfRunsExceedingMaxStops = 0;
  let numberOfRunsExceedingMaxTime = 0;
  let numberOfRunsWithCollision = 0;
  let numberofRunsThatFailed = 0;

  tableData.forEach((tableItem) => {
    if (tableItem.numberOfStops > tableItem.maxNumberOfStops) {
      numberOfRunsExceedingMaxStops++;
    }
    if (tableItem.runningTime > tableItem.maxRunningTime) {
      numberOfRunsExceedingMaxTime++;
    }
    if (tableItem.hasCollision) {
      numberOfRunsWithCollision++;
    }
    if (!tableItem.doesScenarioPass) {
      numberofRunsThatFailed++;
    }
  });

  return {
    percentageRunsExceedingMaxStops: percentageCalc(
      numberOfRunsExceedingMaxStops,
      tableData.length
    ),
    percentageRunsExceedingMaxTime: percentageCalc(
      numberOfRunsExceedingMaxTime,
      tableData.length
    ),
    percentageRunsWithCollision: percentageCalc(
      numberOfRunsWithCollision,
      tableData.length
    ),
    percentageRunsThatFailed: percentageCalc(
      numberofRunsThatFailed,
      tableData.length
    ),
  };
};
