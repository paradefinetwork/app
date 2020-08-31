import "react-perfect-scrollbar/dist/css/styles.css";
import "./assets/scss/index.scss";

import React from "react";
import { Router, RouteComponentProps } from "@reach/router";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

import MainLayout from "./layout/Main";
import ConnectWallet from "./view/ConnectWallet";
import Dashboard from "./view/Dashboard";
import FullScreenLoading from "./component/FullScreenLoading";

import { AppProvider } from "./AppContext";
import useAppContext from "./useAppContext";
import History from "./view/History";

const App: React.FC<RouteComponentProps> = () => {
  const value = useAppContext();
  const { isInitializing } = value;

  return isInitializing ? (
    <FullScreenLoading />
  ) : (
    <ThemeProvider theme={theme}>
      <AppProvider value={value}>
        <Router>
          <ConnectWallet path="/welcome" />
          <MainLayout path="/">
            <Dashboard path="/dashboard" />
            <Dashboard path="/statistic" />
            <History path="/history" />
          </MainLayout>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
};

const RApp = () => (
  <Router>
    <App path="/*" />
  </Router>
);

export default RApp;
