import React from 'react'

// Image 
import stonetiles from "../../assets/Products/stonetiles.jpeg"

const muralsData = [
  {
    id: 1,
    title: "",
    img: "https://i.pinimg.com/1200x/23/40/bb/2340bb73ea71929fc38235f00f4559db.jpg"
  },
  {
    id: 2,
    title: "",
    img: "https://i.pinimg.com/736x/ed/9c/1f/ed9c1faca94166101811bb10c3f72781.jpg"
  },
  {
    id: 3,
    title: "",
    img: "https://i.pinimg.com/736x/3b/29/b2/3b29b27feab566fdc0fc86a1a7ae8e23.jpg"
  }
];

const StoneTiles = () => {
  const isMobile = window.innerWidth <= 768;
  
  return <>
  
  <div className="container mt-3 text-center">
      <h1 >Stone Tiles</h1>
  
      <nav aria-label="breadcrumb"> 
        <ol className="breadcrumb justify-content-center ">
          <li className="breadcrumb-item ">
            <a href="/" className="text-decoration-none text-black">Home</a>
          </li>
          <li className="breadcrumb-item active">
            Stone Tiles
          </li>
        </ol>
      </nav>
  </div>

    <div className="container my-5">
      {/* img  */}
      {/* <img src={stonetiles} alt="" className="d-block mx-auto" /> */}
      <img
        src={stonetiles}
        alt=""
        className="d-block mx-auto"
        style={{
          width: isMobile ? "100%" : "60%",
          minHeight: isMobile ? "150px" : "auto",
          objectFit: "cover"
        }}
      />
  
      {/* text cotent  */}
      <h1 className='my-4'>🗿 Stone tiles</h1>
      <p>
          <b>Stone tiles</b> are natural or engineered stone pieces cut into flat shapes and used for flooring, wall cladding, and decorative surfaces. They provide a premium, durable, and natural look compared to ceramic or porcelain tiles.
      </p>
  
       <div className="container py-5">
        <div className="row justify-content-center g-4 text-center">
  
          {muralsData.map((item) => (
            <div key={item.id} className="col-md-4 text-center">
        
              <img 
                src={item.img} 
                alt={item.title} 
                className="jali-img mb-2"
              />
          
              <p className="fw-semibold">{item.title}</p>

            </div>
          ))}

        </div>
      </div>

      <div className='text-center'>
       <a href="/Products/stone-tiles-collections">
         <button type="button" class="btn btn-dark">Know More</button>
       </a>
      </div>
        
    </div>

  </>
}

export default StoneTiles