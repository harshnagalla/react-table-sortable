import "./Table.css";

const TableHead = ({ requestSort, getClassNamesFor }) => {
  return (
    <thead>
      <tr>
        <th onClick={() => requestSort("scenarioId")}>
          <span>Scenario Id</span>
          <HeaderIcon type={getClassNamesFor("scenarioId")} />
        </th>
        <th onClick={() => requestSort("carBuild")}>
          <span>Car Build</span>
          <HeaderIcon type={getClassNamesFor("carBuild")} />
        </th>
        <th onClick={() => requestSort("startTime")}>
          <span>Start Time</span>
          <HeaderIcon type={getClassNamesFor("startTime")} />
        </th>
        <th onClick={() => requestSort("runningTime")}>
          <span>Running Time / Max Running Time in secs</span>
          <HeaderIcon type={getClassNamesFor("runningTime")} />
        </th>
        <th onClick={() => requestSort("numberOfStops")}>
          <span> Number Of Stops/Max Number Of Stops</span>
          <HeaderIcon type={getClassNamesFor("numberOfStops")} />
        </th>
        <th onClick={() => requestSort("hasCollision")}>
          <span> Has Collision ? </span>
          <HeaderIcon type={getClassNamesFor("hasCollision")} />
        </th>
        <th onClick={() => requestSort("doesScenarioPass")}>
          <span> Does Scenario Pass ? </span>
          <HeaderIcon type={getClassNamesFor("doesScenarioPass")} />
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;

const HeaderIcon = ({ type }) => {
  return type === "ascending" ? (
    <i className="arrow up" />
  ) : type === "descending" ? (
    <i className="arrow down" />
  ) : (
    <></>
  );
};
