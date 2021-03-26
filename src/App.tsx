import React, { useEffect } from "react";
import "./App.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.to(".box2", {
      scrollTrigger: {
        // what div is the trigger for starting
        trigger: ".box2",
        // what div is the trigger for ending
        // endTrigger: ".box3",

        // entering - leaving - entering again backwards -when scrolling all the way back past the beginning
        toggleActions: "restart pause reverse reverse",
        // precising when to start the animation, or at which point, its a couple (position in the box, position in the viewpage), in our exemple : when the (top of the box, hits the center of page)
        start: "top center",
        // precising when to end the animation, same thing as the start
        end: "center top",
        // visual indicator
        markers: true,
        // the animation follows the cursor progression over the box, it doesn't just autoplay, true means without delay, a number is the delay in seconds
        scrub: 1,
      },
      duration: 3,
      opacity: 1,
      x: 400,
    });
  }, []);
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <div
        className="box1"
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: 300,
            width: 300,
            backgroundColor: "red",
          }}
        ></div>
      </div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="box2"
          style={{
            height: 300,
            width: 300,
            backgroundColor: "green",
            opacity: 0,
          }}
        ></div>
      </div>
      <div
        className="box3"
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: 300,
            width: 300,
            backgroundColor: "blue",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
