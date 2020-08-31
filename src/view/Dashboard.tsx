import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Box, Button, Card, CardContent } from "@material-ui/core";

const Dashboard: React.FC<RouteComponentProps> = () => {
  const [state, setState] = React.useState("lend");

  return (
    <div className="root-container">
      <Box py={2} display="flex" justifyContent="center">
        <Button
          variant={state === "lend" ? "contained" : "outlined"}
          color={state === "lend" ? "primary" : "default"}
          onClick={() => setState("lend")}
          disableElevation
        >
          Lends
        </Button>
        <div style={{ width: 20 }}></div>
        <Button
          variant={state === "borrow" ? "contained" : "outlined"}
          color={state === "borrow" ? "primary" : "default"}
          onClick={() => setState("borrow")}
          disableElevation
        >
          Borrows
        </Button>
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box textAlign="center" p={5}>
              <h3>No {state} yet.</h3>
              <h5>
                This is the beta version, be careful with your assets.
                <br />
                Only starts when it is official launched.
              </h5>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Dashboard;
