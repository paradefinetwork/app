import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Divider, Drawer } from "@material-ui/core";

import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import RestoreOutlinedIcon from "@material-ui/icons/RestoreOutlined";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";

import AppContext from "../../../AppContext";
import Profile from "./Profile";
import SidebarNav from "./SidebarNav";
import UpgradePlan from "./UpgradePlan";

import EqualizerIcon from "@material-ui/icons/Equalizer";
import InputIcon from "@material-ui/icons/Input";
import YoutubeSearchedForIcon from "@material-ui/icons/YoutubeSearchedFor";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.down("sm")]: {
      marginTop: 64,
      height: "calc(100% - 64px)",
    },
  },
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(2),
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

const Sidebar = (props) => {
  const { open, variant, onClose, className, ...rest } = props;
  const { accounts, onDisconnect } = React.useContext(AppContext);

  const classes = useStyles();
  // Home, Buy Crypto, Sell Crypto, Statistic, Lend, Borrow, FAQ, History
  const mainPages = [
    {
      title: "Home",
      href: "/home",
      icon: <HomeIcon />,
    },
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <DashboardOutlinedIcon />,
    },
    {
      title: "Buy Cripto",
      href: "/buy-crypto",
      icon: <ShoppingBasketOutlinedIcon />,
    },
    {
      title: "Sell Cripto",
      href: "/sell-crypto",
      icon: <RestoreOutlinedIcon />,
    },
    {
      title: "Statistic",
      href: "/statistic",
      icon: <EqualizerIcon />,
    },
    {
      title: "Lend",
      href: "/lends",
      icon: <InputIcon />,
    },
    {
      title: "Borrow",
      href: "/borrows",
      icon: <YoutubeSearchedForIcon />,
    },
  ];
  const secondPages = [
    {
      title: "History",
      href: "/history",
      icon: <RestoreOutlinedIcon />,
    },
    {
      title: "FAQ",
      href: "https://google.com",
      icon: <HelpOutlineIcon />,
    },
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className, "sidebar")}>
        <div>
          <Profile accounts={accounts} onDisconnect={onDisconnect} />
          <Divider className={classes.divider} />
          <SidebarNav className={classes.nav} pages={mainPages} />
          <Divider className={classes.divider} />
          <SidebarNav className={classes.nav} pages={secondPages} />
        </div>
        <UpgradePlan />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;
