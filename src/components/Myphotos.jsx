import React, { useContext, useEffect, useState } from 'react'
import AddPhoto from './AddPhoto'
import { allUserPhotos, deletePhotoAPI } from '../services/allAPI'
import { addPhotoResponseContext, editPhotosResponseContext } from '../Contexts/ContextShare'
import EditPhoto from './EditPhoto'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Myphotos() {

  const {addPhotoResponse,setAddPhotoResponse} = useContext(addPhotoResponseContext)
  const {editPhotosResponse,setEditPhotoResponse} = useContext(editPhotosResponseContext)


  const [userPhotos,setUserPhotos]= useState([])

  const getUserPhotos = async()=>{

    const token = sessionStorage.getItem("token")

    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }

    const result = await allUserPhotos(reqHeader)
    console.log(result.data);
    setUserPhotos(result.data)
  }

  useEffect(()=>{
    getUserPhotos()
  },[addPhotoResponse,editPhotosResponse])

  const handleDelete = async(id)=>{

    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }

    const result = await deletePhotoAPI(id,reqHeader)
    console.log(result);
    if(result.status===200){
      getUserPhotos()
    }
    else{
      toast.error(result.response.data)
    }

  }

  return (
    <div className='card shadow p-5 ms-3 me-3 mb-5'>
      <div className='d-flex'>
        <h3 className='text-success ms-3'>My Snaps</h3>
        <div className='ms-auto'>
          <AddPhoto />
        </div>
      </div>

      <div className='mt-5'>
        {userPhotos?.length>0?
        userPhotos?.map((item)=>(<div className='border d-flex align-items-center rounded p-2 mb-3 '>
        <h5>{item.title}</h5>
        <div className='ms-auto d-flex'>
          <EditPhoto photos={item}/>
          <a href={item.pinterest} target='_blank' className='btn'><i class="fa-brands fa-google-drive text-success"></i></a>
          <button onClick={()=>handleDelete(item._id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
        </div>
      </div>))
          :
        <p className='text-danger fw-bolder fs-4'>No snaps uploaded yet !! </p>}
      </div>
      <ToastContainer autoClose={2000} theme='colored' position='top-center' />
    </div>
  )
}

export default Myphotos

