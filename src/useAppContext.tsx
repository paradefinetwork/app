import { useState, useEffect, useRef, useCallback } from "react";
import MetaMaskOnboarding from "@metamask/onboarding";
import { ConnectingStatus } from "./AppContext";
import { roundNumberDown } from "./utils/format-number";
import { useNavigate } from "@reach/router";

const defaultConnectingStatus: ConnectingStatus = {
  status: "none",
};

export default function useAppContext() {
  const onboarding = useRef<MetaMaskOnboarding>();
  const [isInitializing, setIsInitializing] = useState(true);
  const [isMMInstalled, setIsMMInstalled] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [accounts, setEthAccounts] = useState<string[]>([]);
  const [connectingStatus, setConnectingStatus] = useState<ConnectingStatus>(
    defaultConnectingStatus
  );
  const [balance, setBalance] = useState<number>(0);
  const navigate = useNavigate();

  const handleNewAccounts = useCallback(
    (accounts: string[]) => {
      (async () => {
        setIsInitializing(true);

        // @ts-ignore
        if (window.ethereum.chainId !== "0x1") {
          setConnectingStatus({
            status: "failed",
            error: {
              code: 501,
              message: "Network not supported",
            },
          });
          setIsConnected(false);
          navigate("/").then();
        } else {
          if (accounts.length > 0) {
            setEthAccounts(accounts);
            setIsConnected(true);
            navigate("/home").then();
          } else {
            setIsConnected(false);
            navigate("/welcome").then();
          }
        }
        
        setIsInitializing(false);
      })();
    },
    [navigate]
  );

  useEffect(() => {
    (async () => {
      if (!onboarding.current) {
        onboarding.current = new MetaMaskOnboarding();
      }
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        setIsMMInstalled(true);
        // @ts-ignore
        const ethereum = window.ethereum;
        ethereum.request({ method: "eth_accounts" }).then(handleNewAccounts);
        ethereum.on("accountsChanged", handleNewAccounts);
      } else {
        setIsInitializing(false);
      }
    })();
  }, [handleNewAccounts]);

  // Get ETH balance when accounts change
  useEffect(() => {
    if (accounts.length) {
      const params = [accounts[0], "latest"];
      // @ts-ignore
      window.ethereum
        .request({ method: "eth_getBalance", params })
        .then((_balance: string) => {
          const toIntBalance = parseInt(_balance) / 1e18;
          const roundBalance = roundNumberDown(toIntBalance);
          setBalance(roundBalance);
        });
    }
  }, [accounts]);

  const onConnect = useCallback(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      // @ts-ignore
      const ethereum = window.ethereum;
      setConnectingStatus({ status: "connecting" });
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then((a: string[]) => {
          handleNewAccounts(a);
        })
        .catch((error: any) => {
          setConnectingStatus({
            status: "failed",
            error: {
              code: error.code,
              message: error.message,
            },
          });
        });
    } else {
      onboarding.current!.startOnboarding();
    }
  }, [handleNewAccounts]);

  const onDisconnect = useCallback(() => {
    setIsConnected(false);
    navigate("/home").then();
  }, [navigate]);

  return {
    isInitializing,
    isMMInstalled,
    isConnected,
    accounts,
    balance,
    connectingStatus,
    onConnect,
    onDisconnect,
  };
}
