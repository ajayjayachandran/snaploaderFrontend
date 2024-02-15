import React, { useEffect, useState } from 'react'
// import titleImage from '../Assets/rm234-binn-11.svg'
import PhotoCard from '../components/PhotoCard'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { homephotoAPI } from '../services/allAPI'

function Home() {
  //state to store token
  const [isLogin, setIsLogin] = useState(false)

  const [homePhotos, setHomePhotos] = useState([])

  const getHomePhotos = async()=>{
    const result = await homephotoAPI()
    console.log(result);
    setHomePhotos(result.data)
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsLogin(sessionStorage.getItem("token"))
    }
    else{
      setIsLogin("")
    }
  }, [])

  useEffect(()=>{
    getHomePhotos()
  },[])
  console.log(isLogin);

  return (
    <>
      <div style={{width:'100%', height:'100vh',backgroundImage: `url("https://png.pngtree.com/background/20230611/original/pngtree-fleeting-moments-picture-image_3167419.jpg")`  }} className='mb-5'>
        <div className="container-fluid rounded ">
          <Row className='align-items-center p-5'>
            <Col sm={12} md={6}>
              <h1 className='text-light mb-4 mt-5 ms-4' style={{ fontSize: '115px' }}>Snaploader</h1>
              <p className='mb- ms-4' style={{color:'white'}}>Discovering beauty in simplicity</p>
              { isLogin?
              <Link to={'/dashboard'} className='btn btn-success rounded ms-4'>Manage Snaps<i class="fa-solid fa-arrow-right ms-3"></i></Link>:
              <Link to={'/login'} className='btn btn-success rounded ms-4'>Let's Move<i class="fa-solid fa-arrow-right ms-3"></i></Link> }
            </Col>
            <Col sm={12} md={6} style={{ marginTop: '100px' }}>
              {/* <img className='w-75' src={titleImage} alt="no image" /> */}
            </Col>
          </Row>  
        </div>
      </div>

      {/* section for all projects */}

      <div  style={{backgroundImage: `url("https://www.shutterstock.com/image-photo/luxury-golden-color-abstract-wave-600nw-2316110935.jpgpm")`}}  className='all-project mt-5 mb-5'>
        <div className='text-center'>
          <h1 >View Our Snaps </h1>

          <marquee scrollamount={20} className="mt-5">

            <div className='d-flex'>

        {homePhotos?.length>0?
           homePhotos.map((item)=>(<div className='mt-5' style={{ width: '500px' }}>
                <PhotoCard photos={item}/>
              </div>))
              : null
            }

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