import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from 'next-auth'
import type { AppUser } from '~/types'
import { ethers } from 'ethers';

const getEthereumCredentialsProvider = () => {
  const user: AppUser = {
    login_strategy: 'ethereum',
    address: '',
    network: '',
    eth_balance: '',
    usd_balance: '',
    chain_id: '',
    avatar:  '',
  }

  const authorize = async (credentials: any, f) => {
    const { address, signature, message, eth_balance, chain_id } = credentials
    if (!address || !signature || !message)
      throw new Error('Invalid Ethereum request');
    const signerAddr = ethers.utils.verifyMessage(message, signature)
    if (signerAddr !== address) throw new Error('Invalid signature')

    return {
      id: 1,
      name: "J Smith",
      email: "jsmith@example.com",
      image: "https://i.pravatar.cc/150?u=jsmith@example.com",
    }
  }

  return {
    name: 'Ethereum',
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