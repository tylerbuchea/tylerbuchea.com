import Head from "next/head";

import Layout from "../components/Layout";

export const config = { amp: true };

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Tyler Buchea | Story 1</title>
      </Head>
      <amp-story
        standalone=""
        title="Hello Story"
        publisher="The AMP Team"
        publisher-logo-src="https://example.com/logo/1x1.png"
        poster-portrait-src="https://example.com/my-story/poster/3x4.jpg"
      >
        <amp-story-page id="my-first-page">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://example.ampproject.org/helloworld/bg1.jpg"
              width="900"
              height="1600"
            ></amp-img>
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
            <h1>Hello, amp-story!</h1>
          </amp-story-grid-layer>
        </amp-story-page>
        <amp-story-page id="my-second-page">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://example.ampproject.org/helloworld/bg2.gif"
              width="900"
              height="1600"
            ></amp-img>
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
            <h1>The End</h1>
          </amp-story-grid-layer>
        </amp-story-page>
        <amp-story-bookend
          src="bookendv1.json"
          layout="nodisplay"
        ></amp-story-bookend>
      </amp-story>
    </Layout>
  );
}
