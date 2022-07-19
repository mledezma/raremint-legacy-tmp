import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from 'next-auth'
import type { AppUser } from '~/types'
import { utils } from 'ethers';
import Decimal from 'decimal.js';

const getEthereumCredentialsProvider = () => {
  const authorize = async (credentials: any) => {
    const { address, signature, message, eth_balance, chain_id } = credentials

    console.log('credentials', credentials)
    console.log('address', address)
    console.log('signature', signature)
    console.log('message', message)
    console.log('eth_balance', eth_balance)
    console.log('chain_id', chain_id)
    // const nonce = '0x' + credentials.csrfToken;
    // const address = utils.verifyMessage(nonce, credentials.signature);
    // if (address.toLowerCase() !== credentials.address?.toLowerCase()) return null;
    // //  create newUser or return existent user
    // const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com', ...credentials };
    const user: AppUser = {
      login_strategy: 'metamask',
      address: 'test adress',
      chain_id: 0,
      network: '',
      eth_balance: new Decimal(0),
      usd_balance: new Decimal(0),
      avatar: 'img',
    }

    return user;
  }

  return {
    name: 'ethereum',
    authorize,
    type: 'credentials',
    credentials: {},
  }
}

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider(getEthereumCredentialsProvider())
  ],
}

export default NextAuth(authOptions);

// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";
// import Services from "../../../server/services";

// import Web3 from "web3";
// import { bufferToHex } from 'ethereumjs-util';
// import { recoverPersonalSignature } from 'eth-sig-util';
// import crypto from 'crypto';

// export default NextAuth({
  // providers: [
  //   CredentialsProvider({
  //     authorize: async (credentials, f) => {
  //       let { address, signature } = credentials;
  //       if (!address || !signature) throw new Error("Missing address or signature");
  //       if (!Web3.utils.isAddress(address)) throw new Error("Invalid address");

  //       /**
  //        * Step 1: Verify digital signature
  //        * */
  //       let user = await Services.user.retriveUserBasic(address);
  //       let nonce = user.nonce.trim();

  //       const msg = `${process.env.REACT_APP_AUTH_TEXT}${nonce}`;
  //       // We now are in possession of msg, publicAddress and signature. We
  //       // will use a helper from eth-sig-util to extract the address from the signature
  //       const msgBufferHex = bufferToHex(Buffer.from(msg, 'utf8'));
  //       const reconstructedAddress = recoverPersonalSignature({
  //         data: msgBufferHex,
  //         sig: signature.trim(),
  //       });

  //       // The signature verification is successful if the address found with
  //       // sigUtil.recoverPersonalSignature matches the initial publicAddress
  //       if (reconstructedAddress.toLowerCase() !== address.toLowerCase()) throw new Error("Signature verification failed");

  //       /**
  //        * Step 2: Generate a new nonce for the user
  //        * */
  //       let newNonce = crypto.randomBytes(16).toString('base64');
  //       await Services.user.updateNonce(address, newNonce);

  //       delete user.nonce;
  //       return user;
  //     },
  //     type: 'credentials'
  //   })
  // ],
//   session: {
//     jwt: true,
//     maxAge: 30 * 24 * 60 * 60,
//   },
//   jwt: {
//     signingKey: process.env.NEXTAUTH_SECRET,
//   },
//   callbacks: {
//     async session({ session, token }) {
//       session.user = token.user;
//       return session;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.user = user;
//       }
//       return token;
//     },
//   },
// });