
import { useStore } from '~/store'


export const Web3AuthActions = () => {
  const { web3authLogin, web3authLogout, web3authGetUserInfo, web3authGetAccounts, web3authGetBalance, web3authSignMessage, web3authSignTransaction, web3authSignAndSendTransaction, web3auth } = useStore();

  const loggedInView = (
    <>
      <button onClick={web3authGetUserInfo}>
        Get User Info
      </button>
      <button onClick={web3authGetAccounts}>
        Get Accounts
      </button>
      <button onClick={web3authGetBalance}>
        Get Balance
      </button>
      <button onClick={web3authSignMessage}>
        Sign Message
      </button>
      <button onClick={web3authSignTransaction}>
          Sign Transaction
      </button>

      <button onClick={web3authSignAndSendTransaction}>
        Sign and Send Transaction
      </button>
      <button onClick={web3authLogout}>
        Log Out
      </button>
    </>
  );

  const unloggedInView = (
    <button onClick={web3authLogin}>
      Login
    </button>
  );

  return <div>{web3auth?.provider ? loggedInView : unloggedInView}</div>;
};

