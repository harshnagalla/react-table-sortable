import { getStatistics } from "./utils";
import "./Statistics.css";
import { useEffect, useState } from "react";

const Statistics = ({ tableData }) => {
  const [stats, setStats] = useState({});
  useEffect(() => {
    setStats(getStatistics(tableData));
  }, [tableData, tableData.length]);

  const {
    percentageRunsExceedingMaxStops,
    percentageRunsExceedingMaxTime,
    percentageRunsThatFailed,
    percentageRunsWithCollision,
  } = stats ?? {};

  
  return (
    <div className="statistics">
      <label>{`Percentage of runs that exceed the maximum number of stops - ${percentageRunsExceedingMaxStops}`}</label>
      <label>{`Percentage of runs that exceed the maximum running time - ${percentageRunsExceedingMaxTime}`}</label>
      <label>{`Percentage of runs that have a collision - ${percentageRunsWithCollision}`}</label>
      <label>{`Percentage of runs that do not pass - ${percentageRunsThatFailed}`}</label>
      <label></label>
    </div>
  );
};

export default Statistics;
