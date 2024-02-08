import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className="footer p-4 " style={{ background: '#bbdefeng', position: 'relative', bottom: '0', width: '100%' }}>
      <div className="row">
        <div className="row ">
          <div className="col-md-12 text-center d-flex justify-content-between">
            <p>Get connected with us on social network</p>
            <div className="icons d-flex gap-3">
              <i className="bi bi-github"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-instagram"></i>
            </div>
          </div>
          <hr />
        </div>
        <div className="col-md-3">
          <div className="logo">
            <img width={130}  alt="" />
          </div>
          <h4>Our Thought</h4>
          <div className="text">Creating a good picture quote is actually quite simple, with just two important things to keep in mind. The first is to use a photo with a lot of clean space.</div>
        </div>
        <div className="col-md-3 mt-4">
          <h4 style={{paddingLeft:'150px'}}>Types</h4>
          <ul style={{ listStyleType: 'none', paddingLeft: '150px' }}>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'black' }}>Fasion</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'black' }}>Sports</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'black' }}>Nature</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'black' }}>Portait</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'black' }}>Wedding</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'black' }}>Landscape</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'black' }}>Architectural</Link></li>
          </ul>
        </div>
        <div className="col-md-3 mt-4">
          <h4 style={{paddingLeft:'120px'}}>Useful Links</h4>
          <ul style={{ listStyleType: 'none', paddingLeft: '120px' }}>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'black' }}>Pricing</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'black' }}>Settings</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'black' }}>Order</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'black' }}>Help</Link></li>
          </ul>
        </div>
        <div className="col-md-3 mt-4">
          <h4 style={{paddingLeft:'100px'}}>Contact</h4>
          <ul style={{ listStyleType: 'none', paddingLeft: '100px' }}>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'black' }}> <i className="bi bi-geo-alt"></i>  123 Street, City</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'black' }}> <i className="bi bi-telephone"></i>  123-456-7890</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'black' }}> <i className="bi bi-envelope"></i>  snaploader@gmail.com</Link></li>
            <li><Link to="#" style={{ textDecoration: 'none', color: 'black' }}> <i className="bi bi-printer"></i>  123-456-7890</Link></li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12 text-center">
           Copyright &copy; 2024 Snaploader. Built with React
        </div>
      </div>
    </div>
  );
}

export default Footer;


