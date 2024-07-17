import React from 'react'
import Table from '../components/Tables';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import Feedback from "../components/Feedback"
import GetInTouch from '../components/GetInTouch';
const Home = () => {
  return (
    <>
    <Header />
    <GetStarted />
    <Table />
    <Feedback />
    <GetInTouch />
    </>

  )
}

export default Home