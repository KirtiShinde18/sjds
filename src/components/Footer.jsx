import React from 'react'

const Footer = () => {
  return (
    <div className="mt-5 bg-light p-5">
      <div className="row">

        {/* address */}
        <div className="col-sm-4">
          <h3>Address</h3>
          <p>
            G-63, RICCO Industrial Area, Old Kekri Road, <br />
            Deoli City, Dist. Tonk (Raj.) INDIA 304804
          </p>
        </div>

        {/* contact */}
        <div className="col-sm-4">
          <h3>Contact</h3>

          <div className="d-flex flex-column gap-2">

            <a href="tel:+919414226377" className="phone-link text-decoration-none">
              <i className="bi bi-telephone me-1"></i> +91 9414226377
            </a>

            <a href="mailto:Contact@sjdsindia.com" className="mail-link text-decoration-none">
              <i className="bi bi-envelope-at me-1"></i> Contact@sjdsindia.com
            </a>

            <a href="mailto:pcshreejaldevistone@gmail.com" className="mail-link text-decoration-none">
              <i className="bi bi-envelope-at me-1"></i> pcshreejaldevistone@gmail.com
            </a>

          </div>
        </div>

        {/* link */}
        <div className="col-sm-4">
          <h3>Link</h3>

          <div className="d-flex gap-3 mt-2">

            <a href="https://www.facebook.com/sjdsindia" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="bi bi-facebook fs-5"></i>
            </a>

            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="bi bi-google fs-5"></i>
            </a>

            <a href="https://x.com/sjdsindia" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="bi bi-twitter-x fs-5"></i>
            </a>

          </div>
        </div>

      </div>

      <p className="text-center my-5">
        © 2026 Shree Jal Devi Stone. All Rights Reserved Site by
        <a href="https://www.kdwebsoft.com/" className="brand-link ms-2 text-decoration-none fw-bold">
          Kuldeep Websoft Pvt. Ltd.
        </a>
      </p>
    </div>
  )
}

export default Footer