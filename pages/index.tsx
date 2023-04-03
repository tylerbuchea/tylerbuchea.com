import Head from "next/head";

import Layout from "@/components/Layout";
import Header from "@/components/Header";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Nav from "@/components/Nav";

export const config = { amp: true };

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Tyler Buchea | Dev + Founder</title>
      </Head>

      <div className="container">
        <Header />
        <About />
      </div>

      <div className="bleed">
        <Portfolio />
      </div>

      <div className="container">
        <Nav />
      </div>

      <style jsx>{`
        .container {
          padding: 0 3vw;
          margin: 0 auto;
          max-width: 800px;
          display: block;
        }
        .bleed {
          margin: 0 auto;
          max-width: 1200px;
          display: block;
        }
      `}</style>
    </Layout>
  );
}
