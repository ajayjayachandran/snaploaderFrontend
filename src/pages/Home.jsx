import React from 'react'
import titleImage from '../Assets/rm234-binn-11.svg'
import PhotoCard from '../components/PhotoCard'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

function Home() {
  return (
    <>
      <div style={{ width: "100%", height: '100vh', background: '#BFDCFD' }} className='mb-5'>
        <div className="container-fluid rounded ">
          <Row className='align-items-center p-5'>
            <Col sm={12} md={6}>
              <h1 className='text-light mb-4' style={{ fontSize: '115px' }}>Snaploader</h1>
              <p>Discovering beauty in simplicity</p>
              <Link to={'/login'} className='btn btn-success rounded'>Let's Move<i class="fa-solid fa-arrow-right ms-3"></i></Link>
            </Col>
            <Col sm={12} md={6} style={{ marginTop: '100px' }}>
              <img className='w-75' src={titleImage} alt="no image" />
            </Col>
          </Row>
        </div>
      </div>

      {/* section for all projects */}

      <div className='all-project mt-5 mb-5'>
        <div className='text-center'>
          <h1 >View Our Snaps </h1>

          <marquee scrollAmount={20} className="mt-5">

          <div className='d-flex'>


              <div className='mt-5' style={{ width: '500px' }}>
                <PhotoCard />
              </div>

              <div className='mt-5' style={{ width: '500px' }}>
                <PhotoCard />
              </div>

              <div className='mt-5' style={{ width: '500px' }}>
                <PhotoCard />
              </div>
           

          </div>
          </marquee>
          <div className='text-center mt-5'>
            <h6><Link to={'/photos'}>See More Snaps</Link></h6>
          </div>
        </div>
      </div>
    </>

  )
}

export default Home