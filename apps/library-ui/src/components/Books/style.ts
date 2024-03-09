import styled from "styled-components";

const BookTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableCell = styled.td`
  font-family: monospace;
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
`;

const TableHeaderCell = styled.th`
  font-family: monospace;
  border: 1px solid #dddddd;
  padding: 8px;
  background-color: #f2f2f2;
  text-align: left;
`;

const TableRow = styled.tr`
  font-family: monospace;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #ddd;
  }
`;

export { BookTable, TableCell, TableHeaderCell, TableRow };
