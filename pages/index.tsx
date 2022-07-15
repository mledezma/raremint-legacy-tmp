import type { NextPage } from "next";
import Main from "../components/main";
import { styled } from "~/styles/stitches.config";

const Title = styled('h1', {
  color: '$navbar-submenu-bg'
})

const Home: NextPage = () => (
  <div>
    <Title>RareMint</Title>
    <h2>Pepe</h2>
    <Main />
  </div>
);

export default Home;