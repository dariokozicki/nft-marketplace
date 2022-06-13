import { createContext, useContext, useState } from "react";

const Web3Context = createContext<any>(null);

type Web3ProviderProps = {
  children: React.ReactNode;
};

const Web3Provider = ({ children }: Web3ProviderProps) => {
  const [web3Api, setWeb3Api] = useState({ test: "hello provider" });

  return (
    <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
  );
};

export function useWeb3() {
  return useContext(Web3Context);
}

export default Web3Provider;
