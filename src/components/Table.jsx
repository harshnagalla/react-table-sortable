import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ getClassNamesFor, requestSort, items }) => {
  return (
    <table>
      <TableHead
        getClassNamesFor={getClassNamesFor}
        requestSort={requestSort}
      />
      <TableBody items={items} />
    </table>
  );
};

export default Table;
