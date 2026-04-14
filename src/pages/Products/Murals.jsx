import React from 'react'

// Image 
import murals from "../../assets/Products/murals.jpeg"

const muralsData = [
  {
    id: 1,
    title: "Partition",
    img: "https://i.pinimg.com/736x/6c/fb/4f/6cfb4f261e8ea40a6a2160ff3d41d55b.jpg"
  },
  {
    id: 2,
    title: "Floral Murals",
    img: "https://i.pinimg.com/736x/01/e6/e9/01e6e965bd1b3fa432935c93c5214bf9.jpg"
  },
  {
    id: 3,
    title: "Lord Krishna Mural",
    img: "https://i.pinimg.com/736x/5a/57/81/5a5781ac6f54cf92d7c09ae8f0f255df.jpg"
  }
];

const Murals = () => {
  const isMobile = window.innerWidth <= 768;

  return <>
  
    <div className="container mt-3 text-center">
      <h1 >Murals</h1>
  
      <nav aria-label="breadcrumb"> 
        <ol className="breadcrumb justify-content-center ">
          <li className="breadcrumb-item ">
            <a href="/" className="text-decoration-none text-black">Home</a>
          </li>
          <li className="breadcrumb-item active">
            Murals
          </li>
        </ol>
      </nav>
    </div>

    <div className="container my-5">
          {/* img  */}
          {/* <img src={murals} alt="" className="d-block mx-auto" /> */}
          <img
            src={murals}
            alt=""
            className="d-block mx-auto"
            style={{
              width: isMobile ? "100%" : "60%",
              minHeight: isMobile ? "150px" : "auto",
              objectFit: "cover"
            }}
          />
      
          {/* text cotent  */}
          <h1 className='my-4'>🗿 Murals</h1>
          <p>
              <b>Murals</b> stone refers to decorative stone used to create carved or engraved wall artworks (murals) on building surfaces. These stones are designed with artistic patterns, images, or relief work to enhance architectural beauty.
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
    
    </div>

  </>
}

export default Murals