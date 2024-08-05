import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { fetchTableData } from "../api/mockAPI";
import Loader from "./Loader";

const columns = [
  {
    id: "item",
    label: "Item",
    minWidth: 200,
  },
  {
    id: "delivery",
    label: "Delivery",
    minWidth: 50,
  },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 100,
    align: "center",
  },
  {
    id: "price",
    label: "Price",
    minWidth: 170,
    align: "center",
  },
];

export default function StickyHeadTable() {
  const [tableData, setTableData] = React.useState(null);
  const [loadingTableData, setLoadingTableData] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetchTableData();
      setTableData(response);
      setLoadingTableData(false);
    };

    fetchData();
  }, []);

  const rows = tableData;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (loadingTableData) {
    return <Loader className="h-[40vh]" size="w-12 h-12" />;
  }

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
                    backgroundColor: "#111327",
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
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{
                            border: "none",
                            backgroundColor: "#151a2d",
                          }}
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
        sx={{
          backgroundColor: "#111327",
        }}
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
