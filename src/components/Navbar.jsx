import React from 'react'

const products = [
    { name: "Stone Jali", link: "/products/stone-jali" },
    { name: "Stacking Stone", link: "/products/stacking-stone" },
    { name: "Murals", link: "/products/murals" },
    { name: "Stone fire place", link: "/products/stone-fire-place" },
    { name: "Stones tiles", link: "/products/stone-tiles" },
    { name: "Granite Articles", link: "/products/granite-articles" },
    { name: "Stone Figure", link: "/products/stone-figure" },
    { name: "Stone Base", link: "/products/stone-base" },
    { name: "Stone handcrafts", link: "/products/stone-handcrafts" },
    { name: "Stone pillars", link: "/products/stone-pillars" },
    { name: "Stone fountain", link: "/products/stone-fountain" },
    { name: "Stone planter", link: "/products/stone-planter" },
];

const Navbar = () => {
  return <>
    <div className='text-center bg-light p-2'>
        <a href="contact" className='text-decoration-none text-black'>
            Click here to fill the form to submit your Enquiry .
        </a>
    </div>

    <div className="d-none d-md-flex justify-content-between align-items-center container">
        {/* contact  */}
        <div className="d-flex justify-content-end align-items-center gap-3 p-2">
          
          <a href="tel:+919414226377" className="phone-link text-decoration-none ">
            <i className="bi bi-telephone me-1"></i> +91 9414226377
          </a>
    
          <a href="mailto:Contact@sjdsindia.com" className="mail-link text-decoration-none ">
            <i class="bi bi-envelope-at me-1"></i> Contact@sjdsindia.com
          </a>
        </div>
    
        {/* location  */}
        <div>
          <a 
            href="https://maps.app.goo.gl/EdwDn8zhZzFHLA469"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-dark"
          >
            <i className="bi bi-geo-alt me-1"></i> Find a store
          </a>
        </div>
    </div>

    {/* navbar  */}
    <nav className="navbar navbar-expand-lg border-top sticky-top  bg-white">
        <div className="container">
            <div className="d-flex flex-column align-items-center">
  
                <img src="/favicon.png" alt="logo" width={35} />
            
                <a className="navbar-brand gradient-text" href="#">
                    Shree Jal Devi Stone
                </a>

            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">

                    <a className="nav-link active" href="/">HOME</a>
                    <a className="nav-link" href="/about">ABOUT</a>
                
                    {/* Dropdown */}
                    <div className="nav-item dropdown">
                      <a 
                        className="nav-link dropdown-toggle" 
                        href="#" 
                        role="button" 
                        data-bs-toggle="dropdown"
                      >
                        PRODUCTS
                      </a>
                
                      <ul className="dropdown-menu">
                       {products.map((item, i) => (
                            <li key={i}>
                              <a className="dropdown-item" href={item.link}>
                                {item.name}
                              </a>
                            </li>
                        ))}
                      </ul>
                    </div>
                
                    <a className="nav-link" href="/contact">CONTACT</a>
                
                </div>
            </div>
        </div>
    </nav>

  </>
}

export default Navbar