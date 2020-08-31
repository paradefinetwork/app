import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Typography, Chip, Box, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "fit-content",
  },
  name: {
    marginTop: theme.spacing(1),
  },
}));

type Props = {
  className?: string;
  accounts: string[];
  onDisconnect: () => void;
};

const Profile: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { className, accounts, onDisconnect, ...rest } = props;
  const address = accounts[0];
  const shorten = address
    ? address.slice(0, 11) + "..." + address.substr(-11)
    : "Connect wallet";
  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Chip
        label={shorten.toUpperCase()}
        color="primary"
        variant="outlined"
        clickable
        onClick={() => onDisconnect()}
      />
      <Box mt={1}>
        <Typography variant="body1">MetaMask</Typography>
      </Box>
    </div>
  );
};

export default Profile;
