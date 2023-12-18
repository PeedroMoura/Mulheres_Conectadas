import React from 'react'
import Header from '../components/Home/Header';
import GetStarted from '../components/Home/GetStarted'
import GetInTouch from '../components/Home/GetInTouch';
import Sidebar from '../components/SideBar';
import { useState } from 'react'

import { FaBars } from 'react-icons/fa'


const Home = () => {

  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)


  return (
    <>
    <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    <Header />
    <GetStarted />
    <GetInTouch />
    </>

  )
}

export default Home;