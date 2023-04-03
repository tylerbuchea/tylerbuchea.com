import Head from "next/head";
import { useAmp } from "next/amp";

import Layout from "../components/Layout";

export const config = { amp: true };

export default function ExamplePage() {
  const isAmp = useAmp();

  return (
    <Layout>
      <Head>
        <title>Tyler Buchea | Example</title>
      </Head>
      <amp-img
        alt="Mountains"
        width="550"
        height="368"
        layout="responsive"
        src="https://amp.dev/static/inline-examples/images/mountains.webp"
      >
        <amp-img
          alt="Mountains"
          fallback=""
          width="550"
          height="368"
          layout="responsive"
          src="https://amp.dev/static/inline-examples/images/mountains.jpg"
        ></amp-img>
      </amp-img>
      <p>
        Cat ipsum dolor <a href={isAmp ? "/dog?amp=1" : "/dog"}>sit amet</a>,
        eat grass, throw it back up but refuse to leave cardboard.
      </p>
      <style jsx>{`
        p {
          font-size: 18px;
          line-height: 30px;
          margin-top: 30px;
        }
      `}</style>
    </Layout>
  );
}
