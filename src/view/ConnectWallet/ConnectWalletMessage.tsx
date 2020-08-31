import { Box } from "@material-ui/core";
import React from "react";

const ConnectWalletMessage = () => (
  <Box textAlign="center" mt={6} style={{ fontSize: 14, color: "#333" }}>
    By unlocking Your wallet You agree to our{" "}
    <span className="text-medium">Terms of Service</span>,{" "}
    <span className="text-medium">Privacy</span> and{" "}
    <span className="text-medium">Cookie Policy</span>.
    <br />
    <br />
    Disclaimer: Wallets are provided by External Providers and by selecting you
    agree to Terms of those Providers.
    <br />
    Your access to the wallet might be reliant on the External Provider being
    operational.
  </Box>
);

export default ConnectWalletMessage;
