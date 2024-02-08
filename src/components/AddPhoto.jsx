import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addPhotoAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addPhotoResponseContext } from '../Contexts/ContextShare'; 


function AddProject() {
  const {addPhotoResponse, setAddPhotoResponse} = useContext(addPhotoResponseContext)
  //state to hold the value from the input box
  const [snapDetails, setSnapDetails] = useState({
    title: "",
    type: "",
    pinterest: "",
    website: "",
    overview: "",
    snapImage: ""
  })

  const [token, setToken] = useState("")
  
  const [show, setShow] = useState(false);

  //hold the url of image
  const [preview, setPreview] = useState("")

  console.log(snapDetails);

  useEffect(() => {
    if (snapDetails.snapImage) {
      //javasript predefined method - url -createObjectURL - files will be converted into url
      setPreview(URL.createObjectURL(snapDetails.snapImage))
    }
  }, [snapDetails.snapImage])
       
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
    else{
      setToken("")
    }
  })
  console.log(preview);
  console.log(token);

  const handleClose = () => {
    setShow(false);
    handleClose1()
  }
  const handleShow = () => setShow(true);

  const handleClose1 = () => {
    setSnapDetails({
      title: "",
      type: "",
      pinterest: "",
      website: "",
      overview: "",
      snapImage: ""
    })
    setPreview("")
  }

  const handleAdd =  async(e)=>{
    e.preventDefault()
    const { title, type, pinterest, website, overview, snapImage } = snapDetails

    if (!title || !type || !pinterest || !website || !overview || !snapImage) {
      toast.info('Please fill the form completely')
    }
    else {
      //reqBody
      //if there is any uploading content from the system, we should send the body in the form of formdata
      //1)create object for the formdata
      const reqBody = new FormData()
      //2) add value to the formData - append()
      reqBody.append("title", title)
      reqBody.append("type", type)
      reqBody.append("pinterest", pinterest)
      reqBody.append("website", website)
      reqBody.append("overview", overview)
      reqBody.append("snapImage", snapImage)

      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }

        const result = await addPhotoAPI(reqBody, reqHeader)
        console.log(result);
        if(result.status===200){
          toast.success('Snap Successfully Added')
          handleClose()
          setAddPhotoResponse(result.data)
        }
        else{
          console.log(result);
          toast.error(result.response.data)
        }
      }}
  }

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add photos
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <label>
                <input type="file" style={{ display: 'none' }} onChange={(e) => setSnapDetails({ ...snapDetails, snapImage: e.target.files[0] })} />
                <img className='img-fluid' src={preview ? preview : "https://m.media-amazon.com/images/I/71sKzRQtXtL.png"} alt="no image" /></label>
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
          <Button variant="success" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer autoClose={2000} theme='colored' position='top-center' />
    </>
  )
}

export default AddProject