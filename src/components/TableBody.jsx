const TableBody = ({ items }) => {
  return (
    <tbody>
      {items.map((item) => {
        const {
          startTime,
          simulationId,
          scenarioId,
          carBuild,
          runningTime,
          maxRunningTime,
          numberOfStops,
          maxNumberOfStops,
          hasCollision,
          doesScenarioPass,
        } = item;

        const startDate = new Date(startTime);
        const startDateString = startDate.toUTCString();

        return (
          <tr key={simulationId}>
            <td>{scenarioId}</td>
            <td>{carBuild}</td>
            <td>{startDateString}</td>
            <td>{`${runningTime / 1000} / ${maxRunningTime / 1000}`}</td>
            <td>{`${numberOfStops} / ${maxNumberOfStops}`}</td>
            <td>{hasCollision ? "Yes" : "No"}</td>
            <td>{doesScenarioPass ? "Yes" : "No"}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
