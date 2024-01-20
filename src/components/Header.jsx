import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header({Dashboard}) {
  return (

    <Navbar className=" p-3" style={{background:'#bbdefe'}}>
      <Container>
        <Navbar.Brand className='text-light'>
          <Link to={'/'} style={{textDecoration:'none'}}  className='text-light'>
            <i class="fa-solid fa-camera fa-2x"></i>{' '}
            <span className='fs-3 ms-3'>Snaploader</span>
          </Link>
        </Navbar.Brand>
        {
          Dashboard &&
          <button className='btn btn-warning rounded'>Logout <i class="fa-solid fa-power-off"></i></button>
        }
      </Container>
    </Navbar>
  )
}

export default Header