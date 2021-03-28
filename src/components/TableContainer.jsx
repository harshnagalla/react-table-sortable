import Table from "./Table";
import { useState, useEffect } from "react";
import "./Table.css";
import { reformatDataForTable, searchData } from "./utils";
import * as data from "../mockData/scenarios.json";
import { useSortableData } from "../hooks/useSortableData";
import Statistics from "./Statistics";

const TableContainer = () => {
  const [tableData, setTableData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("1");

  useEffect(() => {
    try {
      const reformattedData = reformatDataForTable(
        data.simulationRun,
        data.scenarios
      );
      if (search && search.length > 0) {
        const searchedData = searchData(search, reformattedData, searchType);
        setSearchedData(searchedData);
      } else {
        setSearchedData(reformattedData);
      }
    } catch (e) {
      console.log("Error in table data");
    }
  }, [search]);

  const { items, requestSort, sortConfig } = useSortableData(tableData);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const setSearchedData = (searchedData) => {
    setTableData(searchedData);
  };
  return (
    <>
      <div>
        <input
          type="text"
          className="searchInput"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search...."
          title="Type in a name"
        ></input>
        <select
          name="cars"
          id="cars"
          onChange={(event) => {
            setSearchType(event.target.value);
          }}
        >
          <option value="1">Scenario Id</option>
          <option value="2">Car Build</option>
        </select>
      </div>
      <Table
        getClassNamesFor={getClassNamesFor}
        sortConfig={sortConfig}
        requestSort={requestSort}
        items={items}
      />
      <Statistics tableData={items} />
    </>
  );
};

export default TableContainer;
