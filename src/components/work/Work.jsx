import React, { useEffect , useRef } from "react";
import "./work.css";
import { Container, Col, Row } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Work() {
  const rightImg = useRef(null)
  const workT = useRef(null)

  useEffect(() => {
    
      gsap.from(".card", {
        duration:1,
        x: -800,
        stagger:0.2,
        delay:2
        ,scrollTrigger: {
          trigger:".cards",
          start:"top 80%"
      }
      });
    
    gsap.from(
      workT.current,
      { duration: 4, opacity: 0 ,scrollTrigger: {
        trigger:".cards",
        start:"top 80%"
    }},
      { duration: 4, delay: 2, opacity:0.5},
      {duration:4, opacity:1}
    );
    gsap.from(rightImg.current, {duration:2,delay:2,x: 800,scrollTrigger: {
      trigger:".cards",
      start:"top 80%"
  }
  })
  }, []);
  return (
    <>
      <div className="work">
        <div className="leftwork">
          <div className="worktitle" ref={workT}>
            <h1>Ultimate features That we built</h1>
            <p>
              the rise of mobile device transform the way consume information
              entirely.
            </p>
          </div>
          <div className="cards">
            <Container>
              <Row>
                <Col>
                  <div className="card">
                    <div className="top">
                      <img src="image/smartphone.png" alt="" />
                    </div>
                    <div className="center">App development</div>
                    <div className="bottom">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sint odit maiores placeat velit at natus.
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="card">
                    <div className="top">
                      <img src="image/pc.png" alt="" />
                    </div>
                    <div className="center">Web development</div>
                    <div className="bottom">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sint odit maiores placeat velit at natus.
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="card">
                    <div className="top">
                      <img src="image/cloud-data.png" alt="" />
                    </div>
                    <div className="center">Cloud Storage</div>
                    <div className="bottom">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sint odit maiores placeat velit at natus.
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="card">
                    <div className="top">
                      <img src="image/handshake.png" alt="" />
                    </div>
                    <div className="center">Customer Support</div>
                    <div className="bottom">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sint odit maiores placeat velit at natus.
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="rightwork">
          <img className="rightImg" src="image/work.svg" alt="work img" ref={rightImg} />
        </div>
      </div>
    </>
  );
}
