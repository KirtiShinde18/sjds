import React from 'react'

// images 
import stonejali from "../../assets/Products/stonejali.jpeg"

const jaliData = [
  {
    id: 1,
    title: "Geometric Jali",
    img: "https://i.pinimg.com/736x/8b/1c/47/8b1c479b45a28df2b5038af961803f4f.jpg"
  },
  {
    id: 2,
    title: "Floral Jali",
    img: "https://i.pinimg.com/1200x/65/1a/50/651a5087343cc0eae959d1de724033f2.jpg"
  },
  {
    id: 3,
    title: "Mughal Jali",
    img: "https://i.pinimg.com/1200x/08/f8/3b/08f83b122ccd6c62b36ac6f6b38974dd.jpg"
  }
];

const StoneJali = () => {
  const isMobile = window.innerWidth <= 768;
  return <>

    <div className="container mt-3 text-center">
        <h1 >Stone Jali</h1>
    
        <nav aria-label="breadcrumb"> 
          <ol className="breadcrumb justify-content-center ">
            <li className="breadcrumb-item ">
              <a href="/" className="text-decoration-none text-black">Home</a>
            </li>
            <li className="breadcrumb-item active">
              Stone Jali
            </li>
          </ol>
        </nav>
    </div>

    <div className="container my-5">
      {/* img  */}
      {/* <img src={stonejali} alt="" className="d-block mx-auto" /> */}
      <img
        src={stonejali}
        alt=""
        className="d-block mx-auto"
        style={{
          width: isMobile ? "100%" : "60%",
          minHeight: isMobile ? "150px" : "auto",
          objectFit: "cover"
        }}
      />
  
      {/* text cotent  */}
      <h1 className='my-4'>🗿 Stone Jali</h1>
      <p>
          Stone Jali (also known as stone lattice or perforated stone panels) is a beautifully crafted architectural element made by carving intricate patterns into natural stone. It combines traditional craftsmanship with modern design, making it a perfect choice for both classic and contemporary spaces.
      </p>
  
       <div className="container py-5">
        <div className="row justify-content-center g-4 text-center">
  
          {jaliData.map((item) => (
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

export default StoneJali