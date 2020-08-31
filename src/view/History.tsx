import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Box, Card, CardContent } from "@material-ui/core";

const Dashboard: React.FC<RouteComponentProps> = () => {
  return (
    <div className="root-container">
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box textAlign="center" p={5}>
              <h3>No history yet.</h3>
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
