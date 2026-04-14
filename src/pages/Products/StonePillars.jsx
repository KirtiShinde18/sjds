import React from 'react'

// Image 
import stonepillar from "../../assets/Products/stonepillar.jpeg"

const stonepillarData = [
  {
    id: 1,
    title: "",
    img: "https://i.pinimg.com/1200x/ad/f0/7b/adf07b2c2acb9a576a88c538dae79d08.jpg"
  },
  {
    id: 2,
    title: "",
    img: "https://i.pinimg.com/736x/2e/be/ee/2ebeee76db106cc1be36ab736bbed93a.jpg"
  },
  {
    id: 3,
    title: "",
    img: "https://i.pinimg.com/736x/bc/a6/20/bca62074ded6bab706f012db7bf5fda9.jpg"
  },
  
];

const StonePillars = () => {
  const isMobile = window.innerWidth <= 768;

  return <>
  
  <div className="container mt-3 text-center">
                <h1 >Stone Pillars</h1>
            
                <nav aria-label="breadcrumb"> 
                  <ol className="breadcrumb justify-content-center ">
                    <li className="breadcrumb-item ">
                      <a href="/" className="text-decoration-none text-black">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      Stone Pillars
                    </li>
                  </ol>
                </nav>
  </div>
          
  <div className="container my-5">
    {/* img  */}
    {/* <img src={stonepillar} alt="" className="d-block mx-auto" /> */}
    <img
      src={stonepillar}
      alt=""
      className="d-block mx-auto"
      style={{
        width: isMobile ? "100%" : "60%",
        minHeight: isMobile ? "150px" : "auto",
        objectFit: "cover"
      }}
    />

    {/* text cotent  */}
    <h1 className='my-4'>🗿 Stone pillars</h1>
    <p>
       <b>Stone pillars</b> are vertical structural and decorative elements made from natural stone, commonly used in architecture for both support and ornamentation. They are a key feature in temples, palaces, forts, and heritage buildings.
    </p>

     <div className="container py-5">
      <div className="row justify-content-center g-4 text-center">

        {stonepillarData.map((item) => (
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

export default StonePillars