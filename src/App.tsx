import React, { useEffect } from "react";
import "./Style/App.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

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
  }, []);
  return (
    <div
      style={{
        height: "100%",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Lets goo</h1>
    </div>
  );
}

export default App;