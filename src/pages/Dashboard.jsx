import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Row, Col } from 'react-bootstrap'
import Myphotos from '../components/Myphotos'
import Profile from '../components/Profile'

function Dashboard() {

  const [username,setUsername]= useState("")
  useEffect(()=>{
    setUsername(JSON.parse(sessionStorage.getItem('existingUser')).username)
  },[])
  console.log(username);
  return (
    <>
      <Header Dashboard />

      <h1 className='mt-3 ms-3'>Welcome <span style={{ color: 'orange' }}>{username}</span></h1>
     
      <Row className='container-fluid mt-5'>
        {/* my photos */}
        <Col sm={12} md={8}>
          <Myphotos/>
        </Col>
        {/* profile */}
        <Col sm={12} md={4}>
          <Profile/>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard