import React from 'react'
import Card from 'react-bootstrap/Card';
import photoImage from '../Assets/andrew-ridley-Kt5hRENuotI-unsplash.jpg'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap'


function PhotoCard() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card className='shadow text-center btn' onClick={handleShow}>
                <Card.Img variant="top" src={photoImage} className='w-2 h-2' />
                <Card.Body>
                    <Card.Title>Nature</Card.Title>

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
                    <Modal.Title>Nature Snaps</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <img width={'100%'} height={'250px'} src={photoImage} alt="no image" />
                        </Col>
                        <Col md={6}>
                            <h1>Discription</h1>
                            <p>Nature photography is a genre of photography focused on elements of the outdoors. Specific subjects may include sky, water, and land, or the flora and fauna that inhabit these spaces or both. The world is an amazing place, and it's the job of the nature photographer to capture that in their work.</p>
                            <p><span className='fw-bolder'>Device</span> : Digital Camera</p>
                        </Col>
                    </Row>
                    <div className='d-flex  mb-3'>
                        <a href="https://drive.google.com/drive/my-drive" target='_blank' style={{ color: 'black' }}><i class="fa-brands fa-google-drive fa-1x  ms-2"></i></a>
                        <a href="https://unsplash.com/photos/concrete-road-between-mountains-Kt5hRENuotI" target='_blank' style={{ color: 'black' }}><i class="fa-solid fa-link fa-1x ms-2"></i></a>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}


export default PhotoCard