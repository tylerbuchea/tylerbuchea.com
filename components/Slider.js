import React from "react";

export default function Slider({ children }) {
  return (
    <div className="slider">
      <amp-base-carousel
        snap="true"
        loop="true"
        height="380"
        layout="fixed-height"
        visible-count="(min-width: 1150px) 4, (min-width: 800px) 3, (min-width: 600px) 2, 1"
        advance-count="(min-width: 1150px) 4, (min-width: 800px) 3, (min-width: 600px) 2, 1"
      >
        {children}
        <button slot="next-arrow" className="carousel-next" aria-label="Next">
          <i className="fa fa-chevron-circle-right"></i>
        </button>
        <button
          slot="prev-arrow"
          className="carousel-prev"
          aria-label="Previous"
        >
          <i className="fa fa-chevron-circle-left"></i>
        </button>
      </amp-base-carousel>
      <style jsx>{`
        .slider {
          padding: 0 3vw;
        }

        .carousel-prev,
        .carousel-next {
          filter: drop-shadow(0px 1px 2px #000);
          width: 40px;
          height: 40px;
          padding: 20px;
          background-color: transparent;
          border: none;
          outline: none;
          font-size: 24px;
          display: flex;
          margin-top: 60px;
        }

        .carousel-prev .fa,
        .carousel-next .fa {
          color: #fff;
        }

        .carousel-prev {
          justify-content: flex-start;
        }

        .carousel-next {
          justify-content: flex-end;
        }
      `}</style>
    </div>
  );
}
