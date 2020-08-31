import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Box } from "@material-ui/core";

type Props = {
  ethWallet: string;
  onDisconnect: () => void;
};

export default function Profile({ ethWallet, onDisconnect }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const shorten = ethWallet
    ? ethWallet.slice(0, 11) + "..." + ethWallet.substr(-11)
    : "Connect wallet";

  return (
    <Box display="flex" justifyContent="flex-end" px={2}>
      <div style={{ width: 200 }}>
        <List component="nav" aria-label="Wallet Address">
          <ListItem button aria-label={shorten} onClick={handleClickListItem}>
            <ListItemText primary={shorten} />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={onDisconnect}>Disconnect</MenuItem>
        </Menu>
      </div>
    </Box>
  );
}
