import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className="footer p-4 opacity-75" style={{ background: 'black', position: 'relative', bottom: '0', width: '100%' }}>
      <div className="row">
        <div className="row ">
          <div className="col-md-12 text-center d-flex justify-content-between">
            <p style={{color:'white'}}>Get connected with us on social network</p>
            <div className="icons d-flex gap-3">
              <i className="bi bi-github" style={{color:'white'}}></i>
              <i className="bi bi-linkedin" style={{color:'white'}}></i>
              <i className="bi bi-facebook" style={{color:'white'}}></i>
              <i className="bi bi-twitter" style={{color:'white'}}></i>
              <i className="bi bi-instagram" style={{color:'white'}}></i>
            </div>
          </div>
          <hr />
        </div>
        <div className="col-md-3">
          <div className="logo">
            <img width={130}  alt="" />
          </div>
          <h4 style={{color:'white'}}>Our Thought</h4>
          <div className="text" style={{color:'white'}}>Creating a good picture quote is actually quite simple, with just two important things to keep in mind. The first is to use a photo with a lot of clean space.</div>
        </div>
        <div className="col-md-3 mt-4">
          <h4 style={{paddingLeft:'150px', color:'white'}}>Types</h4>
          <ul style={{ listStyleType: 'none', paddingLeft: '150px' }}>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'white' }}>Fasion</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'white' }}>Sports</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'white' }}>Nature</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'white' }}>Portait</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'white' }}>Wedding</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'white' }}>Landscape</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'white' }}>Architectural</Link></li>
          </ul>
        </div>
        <div className="col-md-3 mt-4">
          <h4 style={{paddingLeft:'120px' , color:'white'}}>Useful Links</h4>
          <ul style={{ listStyleType: 'none', paddingLeft: '120px' }}>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'white' }}>Pricing</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'white' }}>Settings</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'white' }}>Order</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'white' }}>Help</Link></li>
          </ul>
        </div>
        <div className="col-md-3 mt-4">
          <h4 style={{paddingLeft:'100px', color:'white'}}>Contact</h4>
          <ul style={{ listStyleType: 'none', paddingLeft: '100px' }}>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'white' }}> <i className="bi bi-geo-alt" style={{color:'white'}}></i>  123 Street, City</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'white' }}> <i className="bi bi-telephone" style={{color:'white'}}></i>  123-456-7890</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'white' }}> <i className="bi bi-envelope" style={{color:'white'}}></i>  snaploader@gmail.com</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'white' }}> <i className="bi bi-printer" style={{color:'white'}}></i>  123-456-7890</Link></li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12 text-center" style={{color:'white'}}>
           Copyright &copy; 2024 Snaploader. Built with React
        </div>
      </div>
    </div>
  );
}

export default Footer;


