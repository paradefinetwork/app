import React from "react";
import { RouteComponentProps } from "@reach/router";
import Box from "@material-ui/core/Box";

import AppContext from "../../AppContext";
import ConnectWalletMessage from "./ConnectWalletMessage";
import Header from "./ConnectWalletHeader";
import ConnectWalletButton from "./ConnectWalletButton";
import Alert from "@material-ui/lab/Alert";

const ConnectWallet: React.FC<RouteComponentProps> = () => {
  const appContextValues = React.useContext(AppContext);
  if (appContextValues === undefined) {
    throw new Error("Context is not initiated");
  }
  const { onConnect, isMMInstalled, connectingStatus } = appContextValues;

  return (
    <div className="awesome-background">
      <div className="connect-wallet-container">
        <Box p={3} textAlign="center">
          <Header />
          <ConnectWalletButton
            onClick={onConnect}
            isMMInstalled={isMMInstalled}
            isConnecting={connectingStatus.status === "connecting"}
          />
          {connectingStatus.status === "failed" && (
            <Box style={{ width: "fit-content" }} mx="auto" mt={2}>
              <Alert severity="error">{connectingStatus.error!.message}</Alert>
            </Box>
          )}
          <ConnectWalletMessage />
        </Box>
      </div>
    </div>
  );
};

export default ConnectWallet;
