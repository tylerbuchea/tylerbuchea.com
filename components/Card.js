import React from "react";
import { useAmp } from "next/amp";

export default function Card({ title, sub, img, color, href }) {
  const isAmp = useAmp();
  const hrefAmp = isAmp ? `${href}?amp=1` : `${href}`;

  return (
    <div className="spacer">
      <div className="card" style={{ background: color }}>
        <div className="image">
          <amp-img alt="story" layout="fill" src={img}></amp-img>
        </div>
        <a href={hrefAmp} target="_blank" rel="noreferrer">
          <h5>
            {title} <i className="fa fa-link" />
          </h5>
        </a>
        <p>{sub}</p>

        <style jsx global>{`
          amp-img img {
            object-fit: contain;
            margin: 0px auto;
          }
          // .i-amphtml-loader-background {
          //   background: rgba(0, 0, 0, 0.3);
          // }
          // .i-amphtml-new-loader {
          //   color: #fff;
          // }
        `}</style>
        <style jsx>{`
          .spacer {
            width: 300px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .card {
            padding: 2vw;
            height: calc(100% - 10px);
            width: calc(100% - 10px);
            justify-content: flex-end;
            flex-direction: column;
            display: flex;
            border-radius: 2vw;
          }

          .image {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
          }

          h5 {
            font-size: 1.2rem;
            font-weight: bold;
            color: #fff;
            padding-top: 1vh;
            padding-bottom: 0;
            display: inline-block;
            transition: border-bottom 0.3s ease-in-out;
            font-family: "Roboto", sans-serif;
            border-bottom: 2px solid transparent;
          }

          a:hover h5 {
            border-bottom: 2px solid #fff;
          }

          a:active h5 {
            border-bottom: 2px solid #fff;
            transition: none;
          }

          p {
            margin: 0;
            padding-top: 2vh;
            padding-bottom: 3vh;
            color: #fff;
            z-index: 1;
            font-size: 1rem;
            height: 90px;
            font-family: "Roboto", sans-serif;
          }
        `}</style>
      </div>
    </div>
  );
}
