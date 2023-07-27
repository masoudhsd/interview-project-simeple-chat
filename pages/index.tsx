import Head from "next/head";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Splash from "./splash";
import Intro from "./intro";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);
  return (
    <>
      <Head>
        <title>chat bot</title>
        <meta name="description" content="Interview Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        {loading && <Splash />}
        <Intro />
      </main>
    </>
  );
}
