import React from 'react'
import Intro from './components/intro/Intro'
import Navb from './components/navbar/Navb'
import Work from './components/work/Work'
import Plan from './components/plans/Plan'
import './App.css'

export default function App() {
  return (
    <>
    <Navb/>
    <Intro/>
    <Work/>
    <Plan/>
    </>
  )
}
