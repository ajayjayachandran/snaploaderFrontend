import React from 'react'
import Card from 'react-bootstrap/Card';
import photoimage from '../Assets/andrew-ridley-Kt5hRENuotI-unsplash.jpg'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap'
import { BASE_URL } from '../services/baseurl';


function PhotoCard({photos}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(photos.snapImage);

    return (
        <>
            <Card className='shadow text-center btn' onClick={handleShow}>
                <Card.Img style={{height:'500px'}} variant="top" src={photos?`${BASE_URL}/uploads/${photos.snapImage}`:photoimage} />
                <Card.Body>
                    <Card.Title className='text-info'>{photos.title}</Card.Title>

                </Card.Body>
            </Card>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title className='text-info'>{photos.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <img width={'100%'} height={'250px'} src={photos?`${BASE_URL}/uploads/${photos.snapImage}`:photoimage}  alt="no image" />
                        </Col>
                        <Col md={6}>
                            <h1 className='text-decoration-underline'>Discription</h1>
                            <p>{photos.overview}</p>
                            <p><span className='fw-bolder'>Device :</span> {photos.type}</p>
                        </Col>
                    </Row>
                    <div className='d-flex  mb-3'>
                        <a href={photos.pinterest} target='_blank' style={{ color: 'black' }}><i class="fa-brands fa-google-drive fa-1x  ms-2 me-3"></i></a>
                        <a href={photos.website} target='_blank' style={{ color: 'black' }}><i class="fa-solid fa-magnifying-glass-plus"></i></a>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}


export default PhotoCard