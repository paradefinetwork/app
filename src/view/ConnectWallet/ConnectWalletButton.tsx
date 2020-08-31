import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  Button,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "@reach/router";

type Props = {
  onClick: () => void;
  isMMInstalled: boolean;
  isConnecting: boolean;
};

export default function (props: Props) {
  return (
    <Box style={{ width: 200 }} mx="auto">
      <Card style={{ minHeight: 161 }}>
        <CardActionArea>
          <CardContent onClick={props.onClick}>
            <img src="/metamask-fox.svg" alt="MetaMask.io" width={80} />
            <p style={{ fontWeight: 600, fontSize: 14 }}>Browser Wallet</p>
            {props.isMMInstalled ? (
              <p>Use browser wallet to connect to ParaDefi</p>
            ) : (
              <p style={{ color: "#e53935" }}>
                No Browser wallet detected. Click here to install
              </p>
            )}
          </CardContent>
          {props.isConnecting && (
            <div className="card-overlay">
              <CircularProgress />
            </div>
          )}
        </CardActionArea>
      </Card>
      <Box textAlign="center" mt={1}>
        <Link to="/home" className="nohover-effect">
          <Button size="small" endIcon={<ArrowForwardIcon />}>
            Connect later
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
