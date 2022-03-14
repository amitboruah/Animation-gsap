import React,{useRef, useEffect} from 'react'
import './navbar.css'
import {Navbar, Container ,Nav } from "react-bootstrap"
import { gsap } from 'gsap'

export default function Navb() {

  const navAni =useRef()

  useEffect(()=>{
    gsap.from(navAni.current ,{duration:3,opacity:0,delay:0.5})
  })

  return (

    <>
  <Navbar    className='navb' ref={navAni}>
    <Container>
    <Navbar.Brand className="title"> <h1>App<span>Web</span></h1></Navbar.Brand>
    <Nav className="mx-auto">
    <Nav.Link  className='links'>ABOUT</Nav.Link>
    <Nav.Link className='links'>RENTAILS</Nav.Link>
    <Nav.Link  className='links'>BOOK</Nav.Link>
    <Nav.Link  className='links'>CONTACT</Nav.Link>
    <Nav.Link  className='links'>SERVICES</Nav.Link>
    </Nav>
    <Nav className="ms-auto">
    <Nav.Link  className='links'>GET IN TOUCH</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>

  )
}
