import React, { useEffect } from "react";
import "./Style/App.scss";
import gsap from "gsap";
import { Header } from "./Components/Header";
import { Expo, Power1, ScrollTrigger } from "gsap/all";
import {
  Body,
  Caption,
  PageSubtitle,
  PageTitle,
} from "./Components/Typographie";

import board from "./Assets/Images/icon-board.svg";
import speaker from "./Assets/Images/icon-speaker.svg";
import report from "./Assets/Images/icon-report.svg";
import lamp from "./Assets/Images/icon-lamp.svg";
import hand from "./Assets/Images/person-hand.png";

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
      y: 40,
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
        delay: -0.9,
      })
      .to(".intro-content-wrapper", {
        position: "relative",
        duration: 0,
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
          <div className="intro-animation-inner" />
        </div>
        {/* the black screen covering the screen */}

        {/*********************************************************/}

        {/* the intro section */}
        <div className="intro-container">
          <div className="info-right-part">
            <div className="info-right-part-wrapper">
              <div className="info-right-part-inner">
                <img src={board} alt="icon" className="info-icon" />
                <img src={speaker} alt="icon" className="info-icon" />
              </div>
            </div>
          </div>

          <div className="info-left-part">
            <div className="info-left-part-wrapper">
              <div className="info-left-part-inner">
                <img src={report} alt="icon" className="info-icon" />
                <img src={lamp} alt="icon" className="info-icon" />
              </div>
            </div>
          </div>

          <div className="intro-content-wrapper">
            <Header />
            <div className="intro-title">
              <PageTitle>
                Use KIO and gain advantage over your competitors
              </PageTitle>
            </div>
            <div className="intro-description">
              <Body>
                KIO is an ecommerce ecosystem that helps both merchants and
                their customers by providing top tier solutions
              </Body>
            </div>
          </div>
        </div>
        {/* the intro section */}

        {/*********************************************************/}
      </div>

      <div className="signup">
        <div className="signup-inner">
          <div className="signup-form">
            <div className="signup-form-title">
              <PageSubtitle>
                Sign up and setup your store for free, forever !
              </PageSubtitle>
            </div>
            <div className="signup-form-content">
              <input className="signup-form-input" placeholder="Your email" />
              <input
                className="signup-form-submit"
                value="Start now"
                type="submit"
              />
            </div>
            <div className="signup-form-caption">
              <Caption>No billing information needed</Caption>
            </div>
          </div>
        </div>
        <div className="singup-illustration">
          <img src={hand} alt="hand" className="signup-illustration-inner" />
        </div>
      </div>
    </div>
  );
}

export default App;
