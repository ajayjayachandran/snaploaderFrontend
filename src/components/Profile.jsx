import React, { useEffect } from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { BASE_URL } from '../services/baseurl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfileAPI } from '../services/allAPI'

function Profile() {
    const [open, setOpen] = useState(false);

    const [userProfile, setUserProfile] = useState({
        username: "",
        email: "",
        password: "",
        drive: "",
        pinterest: "",
        profile: ""
    })

    const [ isUpdate, setIsUpdate ] = useState(false)
    //once an image is uploaded that image will be stored in existing image 
    const [existingImage, setExistingImage] = useState("")
    //to hold the url of the new image
    const [preview, setPreview] = useState("")

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("existingUser"))

        setUserProfile({ ...userProfile, username: user.username, email: user.email, password: user.password, drive: user.drive, pinterest: user.pinterest, profile: "" })

        setExistingImage(user.profile)

    }, [isUpdate])

    useEffect(() => {
        if (userProfile.profile) {
            setPreview(URL.createObjectURL(userProfile.profile))
        }
        else {
            setPreview("")
        }
    }, [userProfile.profile])

    const handleProfileUpdate = async () => {
        const { username, email, password, drive, pinterest, profile } = userProfile

        if (!drive || !pinterest) {
            toast.info('Please fill the form completely')
        }
        else {
            const reqBody = new FormData()
            reqBody.append("username", username)
            reqBody.append("email", email)
            reqBody.append("password", password)
            reqBody.append("drive", drive)
            reqBody.append("pinterest", pinterest)
            preview ? reqBody.append("profile", profile) : reqBody.append("profile", existingImage)
       
        const token = sessionStorage.getItem("token")

        if (preview) {
            const reqHeader = {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            }
            const result = await updateProfileAPI(reqBody,reqHeader)
            console.log(result);
            if(result.status ==200){
                toast.success('Profile updated successfully')
                sessionStorage.setItem("existingUser", JSON.stringify(result.data))
                setIsUpdate(true)
            }
            else{
                console.log(result.response.data);
            }
        }
        else {
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const result = await updateProfileAPI(reqBody,reqHeader)
            console.log(result);
            if(result.status ==200){
                toast.success('Profile updated successfully')
                sessionStorage.setItem("existingUser", JSON.stringify(result.data))
                setIsUpdate(true)
            }
            else{
                console.log(result.response.data);
            }
        }
    }
}
    return (
        <div style={{ backgroundImage: `url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00OTQtYmctMDE4Yy14LmpwZw.jpg")` }} className='card shadow p-5 mb-5'>
            <div className='d-flex justify-content-between'>
                <h1>Profile</h1>
                <button onClick={() => setOpen(!open)} className='btn btn-outline-info'><i class="fa-solid fa-angle-down"></i></button>
            </div>
            <Collapse in={open}>
                <div className='row justify-content-center mt-4'>
                    <label htmlFor="profile" className='mb-5 text-center'>
                        <input id='profile' type="file" style={{ display: 'none' }} onChange={(e) => setUserProfile({ ...userProfile, profile: e.target.files[0] })} />
                        {existingImage == "" ?
                            <img width={'200px'} height={'200px'} src={preview ? preview : "https://cdn4.vectorstock.com/i/1000x1000/06/18/male-avatar-profile-picture-vector-10210618.jpg"} alt="no image" className='rounded-circle' /> : <img width={'200px'} height={'200px'} src={preview ? preview : `${BASE_URL}/uploads/${existingImage}`} alt="no image" className='rounded-circle' />}
                    </label>
                    <div className='mb-3'>
                        <input type="text" className='form-control' placeholder='Drive' value={userProfile.drive} onChange={(e) => setUserProfile({ ...userProfile, drive: e.target.value })} />
                    </div>
                    <div className='mb-3'>
                        <input type="text" className='form-control' placeholder='Pinterest' value={userProfile.pinterest} onChange={(e) => setUserProfile({ ...userProfile, pinterest: e.target.value })} />
                    </div>
                    <div className='mb-3'>
                        <button onClick={handleProfileUpdate} className='btn btn-success rounded w-100'>Update</button>
                    </div>
                </div>
            </Collapse>
            <ToastContainer autoClose={2000} theme='colored' position='top-center' />
        </div>
    )
}

export default Profile