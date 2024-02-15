import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthTokenContext } from '../Contexts/ContextShare';


function Header({ Dashboard }) {
  const { isAuthToken, setIsAuthToken } = useContext(isAuthTokenContext)
  const navigate = useNavigate()
  const handleLogout = () => {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("existingUser")
    setIsAuthToken(false)
    //navigate to home page
    navigate('/')

  }
  return (

    <Navbar className=" p-3" style={{ backgroundImage: `url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGRmbG93ZXJzZXQxNmJhdGNoMi1hZGotMjFiLWxlYXZlc18xLmpwZw.jpg")` }}>
      <Container>
        <Navbar.Brand className='text-light'>
          <Link to={'/'} style={{ textDecoration: 'none' }} className='text-light'>
            <i class="fa-solid fa-camera fa-2x"></i>{' '}
            <span className='fs-3 ms-3'>Snaploader</span>
          </Link>
        </Navbar.Brand>
        {
          Dashboard &&
          <button onClick={handleLogout} className='btn btn-warning rounded'>Logout <i class="fa-solid fa-power-off"></i></button>
        }
      </Container>
    </Navbar>
  )
}

export default Header