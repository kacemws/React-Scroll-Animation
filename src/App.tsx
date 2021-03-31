import React, { useEffect } from "react";
import "./Style/App.scss";
import gsap from "gsap";
import { Header } from "./Components/Header";
import { Expo, Power1, ScrollTrigger } from "gsap/all";
import {
  Body,
  Caption,
  Heading,
  PageSubtitle,
  PageTitle,
  Title,
} from "./Components/Typographie";

import board from "./Assets/Images/icon-board.svg";
import speaker from "./Assets/Images/icon-speaker.svg";
import report from "./Assets/Images/icon-report.svg";
import lamp from "./Assets/Images/icon-lamp.svg";
import mobileIcon from "./Assets/Images/icon-mobile.svg";
import desktopIcon from "./Assets/Images/icon-desktop.svg";
import hand from "./Assets/Images/person-hand.png";
import handshake from "./Assets/Images/person-handshake.png";

import mobile from "./Assets/Images/person-mobile.svg";
import web from "./Assets/Images/person-desktop.svg";
import dash from "./Assets/Images/Editable-site.svg";

import women1 from "./Assets/Images/women-1.png";
import women2 from "./Assets/Images/women-2.png";
import women3 from "./Assets/Images/women-3.png";
import men1 from "./Assets/Images/men-1.png";
import men2 from "./Assets/Images/men-2.png";
import men3 from "./Assets/Images/men-3.png";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.from(".signup-inner", {
      scrollTrigger: {
        // what div is the trigger for starting
        trigger: ".intro-description",
        // what div is the trigger for ending
        endTrigger: ".intro-description",
        // entering - leaving - entering again backwards -when scrolling all the way back past the beginning
        toggleActions: "restart pause reverse reverse",
        // precising when to start the animation, or at which point, its a couple (position in the box, position in the viewpage), in our exemple : when the (top of the box, hits the center of page)
        start: "center center",
        // precising when to end the animation, same thing as the start
        end: "center top",
        // visual indicator
        // markers: true,
        // the animation follows the cursor progression over the box, it doesn't just autoplay, true means without delay, a number is the delay in seconds
        scrub: 1,
        id: "form-container",
      },
      duration: 3,
      opacity: 0,
      // ease: Expo.easeInOut,
      x: -200,
    });

    gsap.from(".signup-illustration", {
      scrollTrigger: {
        // what div is the trigger for starting
        trigger: ".intro-description",
        // what div is the trigger for ending
        endTrigger: ".intro-description",
        // entering - leaving - entering again backwards -when scrolling all the way back past the beginning
        toggleActions: "restart pause reverse reverse",
        // precising when to start the animation, or at which point, its a couple (position in the box, position in the viewpage), in our exemple : when the (top of the box, hits the center of page)
        start: "center center",
        // precising when to end the animation, same thing as the start
        end: "center top",
        // visual indicator
        // markers: true,
        // the animation follows the cursor progression over the box, it doesn't just autoplay, true means without delay, a number is the delay in seconds
        scrub: 1,
        id: "form-illustration",
      },
      duration: 3,
      opacity: 0,
      // ease: Power1.easeInOut,
      x: 200,
    });

    gsap.from(".pricing-showcase-title", {
      scrollTrigger: {
        // what div is the trigger for starting
        trigger: ".signup",
        // what div is the trigger for ending
        // endTrigger: ".intro-description",
        // entering - leaving - entering again backwards -when scrolling all the way back past the beginning
        toggleActions: "restart pause reverse reverse",
        // precising when to start the animation, or at which point, its a couple (position in the box, position in the viewpage), in our exemple : when the (top of the box, hits the center of page)
        start: "bottom center",
        // precising when to end the animation, same thing as the start
        end: "center top",
        // visual indicator
        // markers: true,
        // the animation follows the cursor progression over the box, it doesn't just autoplay, true means without delay, a number is the delay in seconds
        scrub: 1,
        id: "pricing-title-animation",
      },
      duration: 3,
      opacity: 0,
      // ease: Power1.easeInOut,
      x: -200,
    });

    gsap.from([".pricing-showcase-section"], {
      scrollTrigger: {
        // what div is the trigger for starting
        trigger: ".signup",
        // what div is the trigger for ending
        // endTrigger: ".intro-description",
        // entering - leaving - entering again backwards -when scrolling all the way back past the beginning
        toggleActions: "restart pause reverse reverse",
        // precising when to start the animation, or at which point, its a couple (position in the box, position in the viewpage), in our exemple : when the (top of the box, hits the center of page)
        start: "bottom center",
        // precising when to end the animation, same thing as the start
        end: "center top",
        // visual indicator
        // markers: true,
        // the animation follows the cursor progression over the box, it doesn't just autoplay, true means without delay, a number is the delay in seconds
        scrub: 1,
        id: "pricing-section-animation",
      },
      duration: 6,
      stagger: 3,
      opacity: 0,
      delay: 0.5,
      y: -100,
    });

    gsap.from([".pos"], {
      scrollTrigger: {
        // what div is the trigger for starting
        trigger: ".pricing",
        // what div is the trigger for ending
        // endTrigger: ".intro-description",
        // entering - leaving - entering again backwards -when scrolling all the way back past the beginning
        toggleActions: "restart pause reverse reverse",
        // precising when to start the animation, or at which point, its a couple (position in the box, position in the viewpage), in our exemple : when the (top of the box, hits the center of page)
        start: "bottom center",
        // precising when to end the animation, same thing as the start
        // end: "center top",
        // visual indicator
        // markers: true,
        // the animation follows the cursor progression over the box, it doesn't just autoplay, true means without delay, a number is the delay in seconds
        scrub: 1,
        id: "mobile-section-animation",
      },
      duration: 3,
      stagger: 2,
      opacity: 0,
      delay: 0.5,
      y: 50,
    });

    gsap.from([".web"], {
      scrollTrigger: {
        // what div is the trigger for starting
        trigger: ".product-description.pos.web-marker",
        // what div is the trigger for ending
        endTrigger: ".web-section",
        // entering - leaving - entering again backwards -when scrolling all the way back past the beginning
        toggleActions: "restart pause reverse reverse",
        // precising when to start the animation, or at which point, its a couple (position in the box, position in the viewpage), in our exemple : when the (top of the box, hits the center of page)
        start: "top top+=20%",
        // precising when to end the animation, same thing as the start
        end: "top top",
        // visual indicator
        // markers: true,
        // the animation follows the cursor progression over the box, it doesn't just autoplay, true means without delay, a number is the delay in seconds
        scrub: 1,
        id: "web-section-animation",
      },
      duration: 3,
      stagger: 2,
      opacity: 0,
      delay: 0.5,
      y: 50,
    });

    gsap.from([".dash"], {
      scrollTrigger: {
        // what div is the trigger for starting
        trigger: ".product-description.web",
        // what div is the trigger for ending
        // endTrigger: ".pos-section",
        // entering - leaving - entering again backwards -when scrolling all the way back past the beginning
        toggleActions: "restart pause reverse reverse",
        // precising when to start the animation, or at which point, its a couple (position in the box, position in the viewpage), in our exemple : when the (top of the box, hits the center of page)
        start: "bottom center",
        // precising when to end the animation, same thing as the start
        // end: "bottom top",
        // visual indicator
        // markers: true,
        // the animation follows the cursor progression over the box, it doesn't just autoplay, true means without delay, a number is the delay in seconds
        scrub: 1,
        id: "dash-section-animation",
      },
      duration: 3,
      stagger: 2,
      opacity: 0,
      delay: 0.5,
      y: 50,
    });

    gsap.from(".newsletter-form-title", {
      scrollTrigger: {
        // what div is the trigger for starting
        trigger: ".product-description.dash",
        // what div is the trigger for ending
        // endTrigger: ".pos-section",
        // entering - leaving - entering again backwards -when scrolling all the way back past the beginning
        toggleActions: "restart pause reverse reverse",
        // precising when to start the animation, or at which point, its a couple (position in the box, position in the viewpage), in our exemple : when the (top of the box, hits the center of page)
        start: "bottom top",
        // precising when to end the animation, same thing as the start
        // end: "bottom top",
        // visual indicator
        // markers: true,
        // the animation follows the cursor progression over the box, it doesn't just autoplay, true means without delay, a number is the delay in seconds
        scrub: 1,
        id: "newsletter-title-animation",
      },
      duration: 3,
      opacity: 0,
      delay: 0.5,
      y: 50,
    });

    gsap.from(".newsletter-form-input", {
      scrollTrigger: {
        // what div is the trigger for starting
        trigger: ".product-description.dash",
        // what div is the trigger for ending
        // endTrigger: ".pos-section",
        // entering - leaving - entering again backwards -when scrolling all the way back past the beginning
        toggleActions: "restart pause reverse reverse",
        // precising when to start the animation, or at which point, its a couple (position in the box, position in the viewpage), in our exemple : when the (top of the box, hits the center of page)
        start: "bottom top",
        // precising when to end the animation, same thing as the start
        // end: "bottom top",
        // visual indicator
        // markers: true,
        // the animation follows the cursor progression over the box, it doesn't just autoplay, true means without delay, a number is the delay in seconds
        scrub: 1,
        id: "newsletter-title-animation",
      },
      duration: 3,
      opacity: 0,
      delay: 0.5,
      x: -50,
    });

    gsap.from(".newsletter-form-submit", {
      scrollTrigger: {
        // what div is the trigger for starting
        trigger: ".product-description.dash",
        // what div is the trigger for ending
        // endTrigger: ".pos-section",
        // entering - leaving - entering again backwards -when scrolling all the way back past the beginning
        toggleActions: "restart pause reverse reverse",
        // precising when to start the animation, or at which point, its a couple (position in the box, position in the viewpage), in our exemple : when the (top of the box, hits the center of page)
        start: "bottom top",
        // precising when to end the animation, same thing as the start
        // end: "bottom top",
        // visual indicator
        // markers: true,
        // the animation follows the cursor progression over the box, it doesn't just autoplay, true means without delay, a number is the delay in seconds
        scrub: 1,
        id: "newsletter-title-animation",
      },
      duration: 3,
      opacity: 0,
      delay: 0.5,
      x: 50,
    });

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
          height: "fit-content",
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
        <div className="signup-illustration">
          <img src={hand} alt="hand" className="signup-illustration-inner" />
        </div>
      </div>

      <div className="pricing">
        <div className="pricing-inner">
          <div className="pricing-showcase">
            <div className="pricing-showcase-title">
              <PageTitle>Start free, then pay as you go</PageTitle>
            </div>
            <div className="pricing-showcase-content">
              <div className="pricing-showcase-section">
                <div className="pricing-showcase-section-title">
                  <Heading>Starter</Heading>
                </div>
                <div className="pricing-showcase-section-features">
                  <Title>Handle products</Title>
                  <Title>Handle orders</Title>
                  <Title>Track reports</Title>
                  <Title>Handle discounts</Title>
                  <Title>Handle customers</Title>
                  <Title>Online store</Title>
                  <Title>Point of sale</Title>
                </div>
                <div className="pricing-showcase-section-button">
                  <div className="pricing-showcase-section-button-inner">
                    <Title>Free</Title>
                  </div>
                </div>
              </div>
              <div className="pricing-showcase-section">
                <div className="pricing-showcase-section-title">
                  <Heading>Pro</Heading>
                </div>
                <div className="pricing-showcase-section-features">
                  <Title>All free features +</Title>
                  <Title>Marketing tool</Title>
                  <Title>Social media</Title>
                </div>
                <div className="pricing-showcase-section-button">
                  <div className="pricing-showcase-section-button-inner">
                    <Title>4.99$ / month</Title>
                  </div>
                </div>
              </div>
              <div className="pricing-showcase-section">
                <div className="pricing-showcase-section-title">
                  <Heading>Entreprise</Heading>
                </div>
                <div className="pricing-showcase-section-features">
                  <Title>All pro features +</Title>
                  <Title>custom support</Title>
                </div>
                <div className="pricing-showcase-section-button">
                  <div className="pricing-showcase-section-button-inner">
                    <Title>Custom</Title>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing-illustrations">
          <div className="pricing-illustrations-inner">
            <img src={mobileIcon} alt="icon" className="info-icon" />
            <img src={desktopIcon} alt="icon" className="info-icon" />
          </div>
        </div>
      </div>

      <div className="products mobile-section">
        <div className="product-illustration">
          <img
            src={mobile}
            alt="product illustration"
            className="product-illustration-img center"
          />
        </div>
        <div className="product-details">
          <div className="product-title pos">
            <PageTitle>Designed to save your time.</PageTitle>
          </div>
          <div className="product-description pos">
            <Body>
              Use Kiosk and take your physical store to the next level.
            </Body>
          </div>
          <div className="product-description pos web-marker">
            <Body>
              Offline. Online. Kiosk offers you multiple functionnalities
            </Body>
          </div>
        </div>
      </div>
      <div className="products web-section">
        <div className="product-details">
          <div className="product-title web">
            <PageTitle>
              Boost your sales and elevate to the next level.
            </PageTitle>
          </div>
          <div className="product-description web">
            <Body>
              With our dashboard, kio offers you all what you need to start your
              journey
            </Body>
          </div>
        </div>

        <div className="product-illustration">
          <img
            src={web}
            alt="product illustration"
            className="product-illustration-img top"
          />
        </div>
      </div>
      <div className="products vertical">
        <div className="product-details vertical">
          <div className="product-title dash">
            <PageTitle>Free. Highly customisable. Simple to use.</PageTitle>
          </div>
          <div className="product-description dash">
            <Body>
              A modern. Customisable. Free forever online store where you can
              sell and promote all your products
            </Body>
          </div>
        </div>
        <div className="product-illustration vertical">
          <img
            src={dash}
            alt="product illustration"
            className="product-illustration-img"
          />
        </div>
      </div>

      <div className="newsletter">
        <div className="newsletter-inner">
          <div className="newsletter-form-title">
            <PageSubtitle>
              Get updated about products, news, tips and offers from Kio,
              <br /> we ensure you, quality over quantity
            </PageSubtitle>
          </div>
          <div className="newsletter-form-content">
            <input className="newsletter-form-input" placeholder="Your email" />
            <input
              className="newsletter-form-submit"
              value="Subscribe"
              type="submit"
            />
          </div>
          <div className="newsletter-illustration">
            <img
              src={handshake}
              alt="handshake"
              className="newsletter-illustration-inner"
            />
          </div>
        </div>
      </div>

      <div className="community">
        <div className="community-title">
          <PageTitle>
            What are you waiting for?
            <br />
            Join our community
          </PageTitle>
        </div>
        <div className="community-people">
          <div className="community-person">
            <img src={women1} alt="person" />
          </div>
          <div className="community-person">
            <img src={men1} alt="person" />
          </div>
          <div className="community-person">
            <img src={women2} alt="person" />
          </div>
          <div className="community-person">
            <img src={men2} alt="person" />
          </div>
          <div className="community-person">
            <img src={women3} alt="person" />
          </div>
          <div className="community-person">
            <img src={men3} alt="person" />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <img
              src="https://cdn.kiostore.net/file/kiostore/KIO+.svg"
              alt="logo"
            />
            <Title>Copyright © 2021 KIO</Title>

            <Title>All rights Reserved</Title>
          </div>
          <div className="footer-sections">
            <div className="footer-section">
              <Heading>Follow us</Heading>
              <Title>Twitter</Title>
              <Title>Github</Title>
              <Title>Medium</Title>
              <Title>Instagram</Title>
              <Title>Facebook</Title>
            </div>
            <div className="footer-section">
              <Heading>Join</Heading>
              <Title>Sign in</Title>
              <Title>Get started</Title>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
