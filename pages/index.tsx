import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Main from "../components/main";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => (
    <div>
      <h1>RareMint</h1>

      <Main />
    </div>
);

export default Home;
