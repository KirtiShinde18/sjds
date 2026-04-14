import React from 'react'

// Image 
import stoneplanter from "../../assets/Products/stoneplanter.jpeg"

const stoneplanterData = [
  {
    id: 1,
    title: "",
    img: "https://i.pinimg.com/1200x/43/f3/2d/43f32d9f94def53e0ab13f069152bfcc.jpg"
  },
  {
    id: 2,
    title: "",
    img: "https://i.pinimg.com/736x/4c/36/a6/4c36a6de304d6940cd08b6b03c260542.jpg"
  },
  {
    id: 3,
    title: "",
    img: "https://i.pinimg.com/736x/e5/93/af/e593af84735df9d12de82070d0f7c35f.jpg"
  },
  
];

const StonePlanter = () => {
  const isMobile = window.innerWidth <= 768;

  return <>
  
    <div className="container mt-3 text-center">
                    <h1 >Stone Planter 🪴</h1>
                
                    <nav aria-label="breadcrumb"> 
                      <ol className="breadcrumb justify-content-center ">
                        <li className="breadcrumb-item ">
                          <a href="/" className="text-decoration-none text-black">Home</a>
                        </li>
                        <li className="breadcrumb-item active">
                          Stone Planter 🪴
                        </li>
                      </ol>
                    </nav>
      </div>
              
      <div className="container my-5">
        {/* img  */}
        {/* <img src={stoneplanter} alt="" className="d-block mx-auto" /> */}
        <img
          src={stoneplanter}
          alt=""
          className="d-block mx-auto"
          style={{
            width: isMobile ? "100%" : "60%",
            minHeight: isMobile ? "150px" : "auto",
            objectFit: "cover"
          }}
        />
    
        {/* text cotent  */}
        <h1 className='my-4'>🗿 Stone Planter 🪴</h1>
        <p>
           A <b>Stone planter</b> is a decorative container made from natural stone used for growing plants, flowers, or small trees. It is widely used in gardens, balconies, hotels, resorts, and outdoor landscapes for both functionality and aesthetics.
        </p>
    
         <div className="container py-5">
          <div className="row justify-content-center g-4 text-center">
    
            {stoneplanterData.map((item) => (
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

export default StonePlanter