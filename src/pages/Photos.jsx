import React from 'react'
import Header from '../components/Header'
import { Row, Col } from 'react-bootstrap'
import PhotoCard from '../components/PhotoCard'

function Photos() {
  return (
    <>
      <Header />
      <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
        <h1>All Snaps</h1>
        <div className='d-flex mt-5 w-25'>
          <input type="text" className='form-control' placeholder='Search the snaps by categories' />
          <i style={{marginLeft:'-45px', color:'lightgrey'}} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
        </div>
      </div>

      <Row className='mt-5 mb-5 container-fluid'>
        <Col sm={12} md={6} lg={4}>
          <PhotoCard/>
        </Col>
      </Row>

    </>
  )
}

export default Photos 