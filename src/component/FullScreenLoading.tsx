import React from "react";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

const FullScreenLoading = () => {
  return (
    <Box
      display="flex"
      style={{ minHeight: "100vh", width: "100%" }}
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  );
};

export default FullScreenLoading;
