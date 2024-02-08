import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';


function Profile() {
    const [open, setOpen] = useState(false);
    return (
        <div className='card shadow p-5 mb-5'>
            <div className='d-flex justify-content-between'>
                <h1>Profile</h1>
                <button onClick={() => setOpen(!open)} className='btn btn-outline-info'><i class="fa-solid fa-angle-down"></i></button>
            </div>
            <Collapse  in={open}>
                <div className='row justify-content-center mt-4'>
                    <label htmlFor="profile" className='mb-5 text-center'>
                        <input id='profile' type="file" style={{ display: 'none' }} />
                        <img width={'200px'} height={'200px'} src="https://cdn4.vectorstock.com/i/1000x1000/06/18/male-avatar-profile-picture-vector-10210618.jpg" alt="no image" className='rounded-circle' />
                    </label>
                    <div className='mb-3'>
                        <input type="text" className='form-control' placeholder='Drive' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" className='form-control' placeholder='Pinterest' />
                    </div>
                    <div className='mb-3'>
                        <button className='btn btn-success rounded w-100'>Update</button>
                    </div>
                </div>
            </Collapse>
        </div>
    )
}

export default Profile