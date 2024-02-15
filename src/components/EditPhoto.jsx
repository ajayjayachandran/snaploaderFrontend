import { useContext, useEffect, useState } from 'react';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../services/baseurl';
import { editPhotosAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editPhotosResponseContext } from '../Contexts/ContextShare';

function EditPhoto({ photos }) {
    const { editPhotosResponse, setEditPhotoResponse } = useContext(editPhotosResponseContext)
    const [show, setShow] = useState(false);
    const [preview, setPreview] = useState("")
    const [snapDetails, setSnapDetails] = useState({
        id: photos._id,
        title: photos.title,
        type: photos.type,
        pinterest: photos.pinterest,
        website: photos.website,
        overview: photos.overview,
        snapImage: ""
    })
    const handleClose = () => {
        setShow(false);
        handleClose1()
    }
    const handleShow = () => setShow(true);
    console.log(photos);
    useEffect(() => {
        if (snapDetails.snapImage) {
            setPreview(URL.createObjectURL(snapDetails.snapImage))
        }
    }, [snapDetails.snapImage])

    //to remove only the editted content
    const handleClose1 = () => {
        setSnapDetails({
            title: photos.title,
            type: photos.type,
            pinterest: photos.pinterest,
            website: photos.website,
            overview: photos.overview,
            snapImage: ""
        })
        setPreview("")
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        const { id, title, type, pinterest, website, overview, snapImage } = snapDetails

        if (!title || !type || !pinterest || !website || !overview) {
            toast.info('Please fill the form completely')
        }
        else {
            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("type", type)
            reqBody.append("pinterest", pinterest)
            reqBody.append("website", website)
            reqBody.append("overview", overview)
            preview ? reqBody.append("snapImage", snapImage) : reqBody.append("snapImage", photos.snapImage)

            const token = sessionStorage.getItem("token")

            if (preview) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                const result = await editPhotosAPI(id, reqBody, reqHeader)
                console.log(result);

                if (result.status === 200) {
                    console.log(result.data);
                    toast.success('Updated Successfully')
                    handleClose()
                    setEditPhotoResponse(result.data)
                }
                else {
                    console.log(result.response.data);
                }
            }
            else {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                const result = await editPhotosAPI(id, reqBody, reqHeader)
                console.log(result);
                if (result.status === 200) {
                    console.log(result.data);
                    toast.success('Updated Successfully')
                    handleClose()
                    setEditPhotoResponse(result.data)
                }
                else {
                    console.log(result.response.data);
                }
            }
        }
    }

    return (
        <>
            <button onClick={handleShow} className='btn'><i class="fa-solid fa-pen-to-square text-info"></i></button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title >Edit Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-6">
                            <label>
                                <input type="file" style={{ display: 'none' }} onChange={e => setSnapDetails({ ...snapDetails, snapImage: e.target.files[0] })} />
                                <img className='img-fluid' src={preview ? preview : `${BASE_URL}/uploads/${photos.snapImage}`} alt="no image" /></label>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column">
                            <div className='mb-3 mt-3 w-100'>
                                <input type="text" className="form-control" placeholder='project Title' value={snapDetails.title} onChange={(e) => setSnapDetails({ ...snapDetails, title: e.target.value })} />

                            </div>
                            <div className='mb-3 w-100'>
                                <input type="text" className="form-control" placeholder='Type used' value={snapDetails.type} onChange={(e) => setSnapDetails({ ...snapDetails, type: e.target.value })} />

                            </div>

                            <div className='mb-3 w-100'>
                                <input type="text" className="form-control" placeholder='Pinterest Link' value={snapDetails.pinterest} onChange={(e) => setSnapDetails({ ...snapDetails, pinterest: e.target.value })} />
                            </div>
                            <div className='mb-3 w-100'>
                                <input type="text" className="form-control" placeholder='Website Link' value={snapDetails.website} onChange={(e) => setSnapDetails({ ...snapDetails, website: e.target.value })} />

                            </div>
                            <div className='mb-3 w-100'>
                                <textarea type="text" className="form-control" placeholder='Snap OverView' value={snapDetails.overview} onChange={(e) => setSnapDetails({ ...snapDetails, overview: e.target.value })} />

                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose1}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleUpdate}>Update</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer autoClose={2000} theme='colored' position='top-center' />
        </>
    )
}

export default EditPhoto