import React, { useEffect, useState ,useRef} from "react";
import "./plan.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Plan() {

  const card1 =useRef(null)
  const card2 =useRef(null)
  const bt1 =useRef(null)
  const bt2 =useRef(null)

  useEffect(()=>{
    gsap.from('.top',{duration:5, opacity:0, scrollTrigger: {
      trigger:"cards",
      start:"top 30%"
  }},{duration:2,opacity:1});

    gsap.from(card1.current,{x:-800 , scrollTrigger: {
      trigger: card1.current,
      scrub:true,
      end: '-=300px'
  }});
    gsap.from(card2.current,{x:800 ,scrollTrigger: {
      trigger: card2.current,
      scrub:true,
      end: '-=300px'
  }}); 
  gsap.from(bt1.current,{x:800 ,scrollTrigger: {
      trigger: card2.current,
      scrub:true,
      end: '-=300px'
  }}); 
  gsap.from(bt2.current,{x:-800 ,scrollTrigger: {
      trigger: card2.current,
      scrub:true,
      end: '-=300px'
  }});
  },[])

  const [data, setData] = useState(0)
  const [data2, setData2] = useState(30)
  const [btn1, setBtn1] = useState("lightBlue")
  const [btn2, setBtn2] = useState("lightGrey")

  return (
    <div className=" main container d-flex justify-content-center">
      <div className="container2 ">
        <div className="top">
          <h1 className="mt-5">Get awesome features,without extra charges</h1>
          <p className="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ducimus
            modi deserunt repudiandae similique! Laudantium eum ipsa mollitia,
            rerum eligendi soluta facere odit provident incidunt deleniti,
            voluptates magnam non! Reprehenderit.
          </p>
        </div>

        <div  className="bottom">
          <div ref={bt1} className="btn btn-light mt-5 me-3" onClick={() => {
            setData(0);
            setData2(30);
            setBtn1("lightBlue");
            setBtn2("lightGrey");
          }}
          style={{backgroundColor:btn1}}> Monthly</div>

          <div ref={bt2} className="btn  btn-light mt-5" onClick={() => {
            setData(20);
            setData2(100);
            setBtn1("lightGrey");
            setBtn2("lightBlue");
          }} 
          style={{backgroundColor:btn2}}> Anually</div>

          <div className="cards row">
            <div className="plancard" ref={card1}>
              <div className="content">
                <h1>${data}<sub>/month</sub></h1>
                <h2>Business Class</h2>
                <span>for small length of office</span>
              </div>
              <p>
                Drag and drop builder
                1000,'s Templates
                Blog Support Tools
                Ecommerce store</p>
              <div className="try">start free trial</div>
            </div>
            <div className="plancard " ref={card2}>
              <div className="content">
                <h1>${data2}<sub>/month</sub></h1>
                <h2>Business Class</h2>
                <span>for small length of office</span>
              </div>
              <p>
                Drag and drop builder
                1000,'s Templates
                Blog Support Tools
                Ecommerce store</p>

              <div className="try text-center">
                start free trial
              </div>

            </div>
          </div>
        </div>




      </div>
    </div>
  );
}


