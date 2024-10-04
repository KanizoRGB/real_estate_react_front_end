import React from 'react'

function Footer() {
  return (
    <div className='mt-4 container-fluid bg-primary bg-gradient text-white' style={{minHeight:'12rem'}}>
        <div className='row pt-4 text-center'>
            {/* Create 3 sections each of four lg and md device but for small device, create 1 section of 12 cols */}
            <div className='col-lg-4 col-md-4 col-sm-12'>
                <h4>Quick Links</h4>
                <div className='d-flex flex-column mb-2'>
                    <a href='#' className='text-white p-1'>About us</a>
                    <a href='#'className='text-white p-1'>Our Posts</a>
                    <a href='#'className='text-white p-1'>Our team</a>
                    <a href='#'className='text-white p-1'>Contact-us</a>
                </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 mb-2'>
                <h4>News Letter</h4>
                <div style={{minHeight:"7rem"}}className='d-flex flex-column justify-content-around'>
                    <input type='text' className='form-control' placeholder='Subscribe to the newsletter'></input>
                    <buttton className="btn btn-warning">Subscribe</buttton>
                </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
                <h4>Contact Address</h4>
                <div className='d-flex flex-column'>
                    <p><i className="px-1 fa-solid fa-location-arrow"></i>45982 Lenana</p>
                    <p>Nairobi City</p>
                    <p>Kenya 00100</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer