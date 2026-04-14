import React from 'react'

// Image 
import stonefigure from "../../assets/Products/stonefigure.jpeg"

const stonefigureData = [
  {
    id: 1,
    title: "",
    img: "https://i.pinimg.com/1200x/5c/d4/ae/5cd4aeb2de329133927e7eddc783f43f.jpg"
  },
  {
    id: 2,
    title: "",
    img: "https://i.pinimg.com/736x/8c/c9/0c/8cc90c672ccab9c8d2c3943e4ed58776.jpg"
  },
  {
    id: 3,
    title: "",
    img: "https://i.pinimg.com/736x/20/3a/67/203a6770a2ae075894d7592eb938d145.jpg"
  }
];

const StoneFigure = () => {
  const isMobile = window.innerWidth <= 768;

  return <>
  
     <div className="container mt-3 text-center">
          <h1 >Stone Figure</h1>
      
          <nav aria-label="breadcrumb"> 
            <ol className="breadcrumb justify-content-center ">
              <li className="breadcrumb-item ">
                <a href="/" className="text-decoration-none text-black">Home</a>
              </li>
              <li className="breadcrumb-item active">
                Stone Figure
              </li>
            </ol>
          </nav>
      </div>
    
        <div className="container my-5">
          {/* img  */}
          {/* <img src={stonefigure} alt="" className="d-block mx-auto" /> */}
          <img
            src={stonefigure}
            alt=""
            className="d-block mx-auto"
            style={{
              width: isMobile ? "100%" : "60%",
              minHeight: isMobile ? "150px" : "auto",
              objectFit: "cover"
            }}
          />
      
          {/* text cotent  */}
          <h1 className='my-4'>🗿 Stone Figure</h1>
          <p>
              <b>Stone figures</b> are sculpted artworks made from natural stones like marble, sandstone, or granite. These figures are carved into human, animal, religious, or decorative shapes and are used for interior, exterior, and spiritual decoration.
          </p>
      
           <div className="container py-5">
            <div className="row justify-content-center g-4 text-center">
      
              {stonefigureData.map((item) => (
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

export default StoneFigure