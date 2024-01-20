import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'



function Auth({ register }) {
    const registerForm = register ? true : false
    return (
        <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
            <div className="w-75 container ">
                <Link style={{ textDecoderation: 'none', color: 'Blue' }} to={'/'}><i class="fa-solid fa-arrow-right fa-rotate-180 me-2"></i>Back to Home</Link>
                <div style={{ background: '#bbdefe' }} className='card p-5 rounded'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <img src="https://t4.ftcdn.net/jpg/02/96/12/07/360_F_296120748_FRpOVJJPRvHzfNnd57cMdWbCVAWBVG2a.jpg" alt="no image" width={'100%'} />
                        </div>
                        <div className='col-lg-6 p-5'>
                            <div className='d-flex align-items-center flex-column'>
                                <h1 className='text-center text-light'> <i class="fa-solid fa-camera fa-1x"></i>Snaploader</h1>
                                <h5 className='text-light mt-3 ms-5'>
                                    {
                                        registerForm ? "Sign up to your Account" : "Sign In to your Account"
                                    }
                                </h5>
                                <Form className='mt-5 w-100'>
                                    {
                                        registerForm &&
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="Username" />
                                        </Form.Group>
                                    }

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Email Id" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    {
                                        registerForm ?
                                            <div>
                                                <button className='btn btn-warning round mt-3'>Register</button>
                                                <p>Already a User? Click here to <Link to={'/login'} style={{ color: 'blue' }}>Login</Link></p>
                                            </div> :
                                            <div>
                                                <button className='btn btn-warning round mt-3'>Login</button>
                                                <p>New User? Click here to <Link to={'/register'} style={{ color: 'blue' }}>Register</Link></p>
                                            </div>
                                    }


                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth