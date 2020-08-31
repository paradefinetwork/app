import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const TableLoading = () => {
  return (
    <TableRow>
      <TableCell colSpan={6} align="center">
        <CircularProgress />
      </TableCell>
    </TableRow>
  );
};

export default TableLoading;
