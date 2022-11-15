import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Grid from "../components/Grid";
import GridButton from "../components/GridButton";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <h1>Cruciverbalife</h1> */}

      <Grid />

      <GridButton />
    </div>
  );
};

export default Home;
