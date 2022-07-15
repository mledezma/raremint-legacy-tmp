import type { NextPage } from "next";
import { Web3AuthActions } from "~/components/pages/web3auth/Web3AuthActions";

const AuthTest: NextPage = () => (
    <div>
      <h1>RareMint Web3Auth Test</h1>

      <Web3AuthActions />
    </div>
);

export default AuthTest;