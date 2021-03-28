import {
  reformatDataForTable,
  checkIfScenarioPasses,
  percentageCalc,
  getStatistics,
} from "../components/utils";
import { mockSimulations } from "./mockData/mockSimulations";
import { mockReformatedData } from "./mockData/mockReformatedData";
import { mockStatisticsResponse } from "./mockData/mockStatisticsResponse";

describe("Utils testing", () => {
  test("reformatDataForTable should return an array of formatted data", () => {
    expect(
      reformatDataForTable(
        mockSimulations.simulationRun,
        mockSimulations.scenarios
      )
    ).toEqual(mockReformatedData);
  });

  test("CheckIfScenarioPasses to pass", () => {
    expect(checkIfScenarioPasses(3, 4, 50000, 100000, false)).toBeTruthy();
  });

  test("percentageCalc should return a correct percentage", () => {
    expect(percentageCalc(5, 10)).toEqual("50.00%");
  });

  test("getStatistics should return statistics", () => {
    expect(getStatistics(mockReformatedData)).toEqual(mockStatisticsResponse);
  });
});
