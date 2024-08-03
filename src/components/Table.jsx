import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import QuantityInput from "./QuantityInput";

const columns = [
  { id: "server", label: "Server", minWidth: 100 },
  { id: "rating", label: "Rating", minWidth: 170 },
  {
    id: "delivery",
    label: "Delivery",
    minWidth: 100,
  },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 170,
    align: "center",
  },
  {
    id: "price",
    label: "Price",
    minWidth: 170,
    align: "center",
  },
];

function createData(server, rating, delivery, quantity, price) {
  // const density = delivery / size;
  return { server, rating, delivery, quantity, price };
}

const rows = [
  createData("India", "IN", 1324171354, <QuantityInput />, 49.99),
  createData("China", "CN", 1403500365, <QuantityInput />, 49.99),
  createData("Italy", "IT", 60483973, <QuantityInput />, 49.99),
  createData("United States", "US", 327167434, <QuantityInput />, 49.99),
  createData("Canada", "CA", 37602103, <QuantityInput />, 49.99),
  createData("Australia", "AU", 25475400, <QuantityInput />, 49.99),
  createData("India", "IN", 1324171354, <QuantityInput />, 49.99),
  createData("China", "CN", 1403500365, <QuantityInput />, 49.99),
  createData("Italy", "IT", 60483973, <QuantityInput />, 49.99),
  createData("United States", "US", 327167434, <QuantityInput />, 49.99),
  createData("Canada", "CA", 37602103, <QuantityInput />, 49.99),
  createData("Australia", "AU", 25475400, <QuantityInput />, 49.99),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        background: "none",
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    borderTop: "1px solid rgba(255,255,255,0.3)",
                    borderBottom: "none",
                    backgroundColor: "#10152b",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{ border: "none" }}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
