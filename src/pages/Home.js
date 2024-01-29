import React from 'react'
import Header from '../components/Home/Header';
import GetStarted from '../components/Home/GetStarted'
import GetInTouch from '../components/Home/GetInTouch';
import Sidebar from '../components/SideBar';
import { useState } from 'react'

import { FaBars } from 'react-icons/fa'
import { Typography } from '@mui/material';


const Home = () => {

  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)


  return (
    <>
    <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    <Header />
    <GetStarted />
    <div
        style={{
          position: "fixed",
          bottom: 20,
          right: 50,
          backgroundColor: "#990099",
          borderRadius: "90%",
          width: "3%",
          height: "5%",
          padding: 10,
          cursor: "pointer",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => window.open("https://mulheres-ai.web.app/", "_blank")}
      >
        <Typography
          variant="h4"
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "50px",
          }}
        >
          ?
        </Typography>
      </div>
    <GetInTouch />
    </>

  )
}

export default Home;