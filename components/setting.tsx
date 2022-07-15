import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { CHAIN_CONFIG, CHAIN_CONFIG_TYPE } from "../config/chainConfig";
import { WEB3AUTH_NETWORK, WEB3AUTH_NETWORK_TYPE } from "../config/web3AuthNetwork";
import { useStore } from "../store";

interface IProps {
  setNetwork: Dispatch<SetStateAction<WEB3AUTH_NETWORK_TYPE>>;
  setChain: Dispatch<SetStateAction<CHAIN_CONFIG_TYPE>>;
}

const Setting = ({ setNetwork, setChain }: IProps) => {
  const {web3auth} = useStore()
  const networkChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log("Settings", e.target.value);
    setNetwork(e.target.value as WEB3AUTH_NETWORK_TYPE);
  };

  const chainChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log("Settings", e.target.value);
    setChain(e.target.value as CHAIN_CONFIG_TYPE);
  };
  const { provider } = web3auth
  const isLoggedIn = provider !== null;

  return (
    <div>
      <div>
        <label htmlFor="network">Web3Auth Network</label>
        <select id="network" onChange={networkChangeHandler} disabled={isLoggedIn}>
          {Object.keys(WEB3AUTH_NETWORK).map((x: string) => {
            return (
              <option key={x} value={x}>
                {WEB3AUTH_NETWORK[x as WEB3AUTH_NETWORK_TYPE].displayName}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="network">Blockchain</label>
        <select onChange={chainChangeHandler} disabled={isLoggedIn}>
          {Object.keys(CHAIN_CONFIG).map((x: string) => {
            return (
              <option key={x} value={x}>
                {CHAIN_CONFIG[x as CHAIN_CONFIG_TYPE].displayName}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Setting;
