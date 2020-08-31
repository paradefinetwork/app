import React from "react";

export type ConnectingStatus = {
  status: "connecting" | "success" | "failed" | "none";
  error?: {
    code: number;
    message: string;
  };
};

type AppContextType = {
  isInitializing: boolean;
  isConnected: boolean;
  isMMInstalled: boolean;
  accounts: string[];
  balance: number;
  connectingStatus: ConnectingStatus;
  onConnect: () => void;
  onDisconnect: () => void;
};

const AppContext = React.createContext<AppContextType | undefined>(undefined);

const { Provider: AppProvider } = AppContext;

export { AppProvider };
export default AppContext;
