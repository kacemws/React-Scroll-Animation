import React, { useEffect } from "react";
import "./Style/App.scss";
import gsap from "gsap";
import { Expo, Power1, ScrollTrigger } from "gsap/all";
import { PageTitle } from "./Components/Typographie";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // gsap.to(".box2", {
    //   scrollTrigger: {
    //     // what div is the trigger for starting
    //     trigger: ".box2",
    //     // what div is the trigger for ending
    //     // endTrigger: ".box3",
    //     // entering - leaving - entering again backwards -when scrolling all the way back past the beginning
    //     toggleActions: "restart pause reverse reverse",
    //     // precising when to start the animation, or at which point, its a couple (position in the box, position in the viewpage), in our exemple : when the (top of the box, hits the center of page)
    //     start: "top center",
    //     // precising when to end the animation, same thing as the start
    //     end: "center top",
    //     // visual indicator
    //     markers: true,
    //     // the animation follows the cursor progression over the box, it doesn't just autoplay, true means without delay, a number is the delay in seconds
    //     scrub: 1,
    //   },
    //   duration: 3,
    //   opacity: 1,
    //   x: 400,
    // });

    const tl = gsap.timeline();

    tl.from(".intro-title", {
      opacity: 0,
      duration: 1.25,
      ease: Power1.easeOut,
      y: 50,
      skewX: -5,
      delay: 1,
    })
      .to(".intro-animation-inner", {
        height: 0,
        duration: 1.75,
        ease: Expo.easeInOut,
      })
      .to(".intro-title .page-title", {
        css: {
          "mix-blend-mode": "normal",
          color: "var(--text)",
        },
        duration: 1,
        delay: -0.79,
      })
      .to(".landing-page", {
        css: {
          overflowY: "auto",
        },
        duration: 0,
      });
  }, []);
  return (
    <div className="landing-page">
      <div className="intro">
        {/*********************************************************/}

        {/* the black screen covering the screen */}
        <div className="intro-animation-wrapper">
          <div className="intro-animation-inner"></div>
        </div>
        {/* the black screen covering the screen */}

        {/*********************************************************/}

        {/* the intro section */}
        <div className="intro-container">
          <div className="intro-content-wrapper">
            <div className="intro-title">
              <PageTitle>Your next big step</PageTitle>
            </div>
          </div>
        </div>
        {/* the intro section */}

        {/*********************************************************/}
      </div>
      <div
        className="newsletter"
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "red",
        }}
      ></div>
    </div>
  );
}

export default App;
