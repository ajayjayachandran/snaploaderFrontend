import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Row, Col } from 'react-bootstrap'
import PhotoCard from '../components/PhotoCard'
import { allPhotosAPI } from '../services/allAPI'
import { Link } from 'react-router-dom'

function Photos() {
  const [allPhotos, setAllPhotos] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const [isToken, setIsToken] = useState(false)


  const getAllPhotos = async () => {

    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")

      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await allPhotosAPI(searchKey, reqHeader)
      console.log(result.data);
      setAllPhotos(result.data)
    }

  }
  console.log(searchKey);


  useEffect(() => {
    getAllPhotos()
  }, [searchKey])

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsToken(true)
    }
  }, [])

  console.log(isToken);

  return (
    <>
      <Header />
      <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
        <h1>All Snaps</h1>
        <div className='d-flex mt-5 w-25'>
          <input type="text" className='form-control' value={searchKey} onChange={e => setSearchKey(e.target.value)} placeholder='Search the snaps by categories' />
          <i style={{ marginLeft: '-45px', color: 'lightgrey' }} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
        </div>
      </div>

      <Row className='mt-5 mb-5 container-fluid'>
        {allPhotos?.length > 0 ?
          allPhotos.map((item) => (<Col className='mb-5' sm={12} md={6} lg={4}>
            <PhotoCard photos={item} />
          </Col>))
          : <div>
            {isToken?<p className='text-danger fs-3 text-center'>Sorry No Such Snaps Currently Available</p>:
            <div className='d-flex justify-content-center align-items-center flex-column'>
              <img src="https://www.shahucollegelatur.org.in/Activity%20portal/img/login.gif" alt="no image" height={'250'} width={'300px'} />
              <p className='text-danger fs-3 mt-4'>Please <Link style={{ textDecoration: 'none', color: 'blue' }} to={'/login'}>login</Link> to view more Snaps</p>
            </div>}
          </div>
        }
      </Row>

    </>
  )
}

export default Photos 