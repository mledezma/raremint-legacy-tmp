import type { NextPage } from "next";
import { styled } from "~/styles/stitches.config";

const Title = styled('h1', {
  color: '$navbar-submenu-bg'
})

const Home: NextPage = () => (
  <div>
    <Title>RareMint</Title>
    <h2>Pepe</h2>
  </div>
);

export default Home;