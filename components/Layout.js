import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head htmlAttributes={{ lang: "en" }}>
        <title>Tyler Buchea | Founder & Engineer</title>
        <meta charSet="utf-8" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta name="description" content="Founder & Engineer" />
        <meta property="og:site_name" content="Tyler Buchea" />
        <meta property="og:title" content="Tyler Buchea" />
        <meta property="og:description" content="Founder & Engineer" />
        <meta property="og:url" content="https://tylerbuchea.com/" />
        <meta property="og:image" content="https://tylerbuchea.com/monke.png" />
        <meta name="twitter:image:alt" content="Tyler Buchea" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@tylerbuchea" />
        <meta name="twitter:site" content="@tylerbuchea" />
        <meta name="monetization" content="$ilp.uphold.com/wnXZWApZzyZd" />
        <meta name="color-scheme" content="dark light" />
        {/* <link rel="canonical" href="https://tylerbuchea.com/" /> */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&family=Roboto:wght@400&family=Rock+Salt&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        :root {
          --background: #000000;
          --midground-1: #222222;
          --foreground: #ffffff;

          --accent: #3c89d0;
          --accent-active: #3c89d0aa;
          --error: red;
          --success: green;
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --foreground: #ffffff;
            --background: #000000;
            --accent: #1ac4fc;
          }
        }

        html,
        body {
          background: var(--background);
          font-family: 'Roboto', sans-serif;
          color: var(--foreground);
          padding: 1.5vh 0;
          font-smooth: always;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0px;
          font-weight: normal;
          padding-bottom: 7vh;
          font-family: font-family: 'DM Serif Text', serif;
        }

        h1 {
          color: var(--accent);
          font-weight: 100;
          padding-bottom: 1vh;
          font-family: 'Rock Salt', cursive;
          font-size: 2rem;
        }

        h2 {
          font-size: 2rem;
        }

        h4 {
          font-size: 2rem;
        }

        .amp-carousel-button {
          background: var(--background);
          color: var(--foreground);
          border: 2px solid var(--foreground);
          border-radius: 50%;
          outline: none;
        }

        .amp-carousel-button-prev {
          background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="%23fff"%3E%3Cpath d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"/%3E%3C/svg%3E');
        }
      `}</style>
    </>
  );
}
