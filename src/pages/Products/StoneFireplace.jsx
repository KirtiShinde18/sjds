import React from 'react'

// image 
import stonefireplace from "../../assets/Products/stonefireplace.jpeg"

const fireStoneData = [
  {
    id: 1,
    title: "",
    img: "https://i.pinimg.com/736x/b3/2b/2c/b32b2c7b1598017271389f8a4802ce2f.jpg"
  },
  {
    id: 2,
    title: "",
    img: "https://i.pinimg.com/736x/5d/e8/e1/5de8e1ca4c32d67b3a796dd83538e33d.jpg"
  },
  {
    id: 3,
    title: "",
    img: "https://i.pinimg.com/736x/1e/0a/dd/1e0add68e047bbfb43934f7c76625e79.jpg"
  }
];

const StoneFireplace = () => {

  const isMobile = window.innerWidth <= 768;

  return <>
   <div className="container mt-3 text-center">
      <h1 >Stone Fire 🔥 Places</h1>
  
      <nav aria-label="breadcrumb"> 
        <ol className="breadcrumb justify-content-center ">
          <li className="breadcrumb-item ">
            <a href="/" className="text-decoration-none text-black">Home</a>
          </li>
          <li className="breadcrumb-item active">
            Stone Fire Places
          </li>
        </ol>
      </nav>
    </div>

    <div className="container my-5">
          {/* img  */}
          {/* <img src={stonefireplace} alt="" className="d-block mx-auto" /> */}
          <img
            src={stonefireplace}
            alt=""
            className="d-block mx-auto"
            style={{
              width: isMobile ? "100%" : "60%",
              minHeight: isMobile ? "150px" : "auto",
              objectFit: "cover"
            }}
          />
      
          {/* text cotent  */}
          <h1 className='my-4'>🗿 Stone Fire places</h1>
          <p>
              <b>Stone Fire places </b> usually refers to heat-resistant natural stones used around fireplaces, fire pits, and high-temperature areas. These stones are selected because they can withstand extreme heat without cracking or changing color.
          </p>
      
           <div className="container py-5">
            <div className="row justify-content-center g-4 text-center">
      
              {fireStoneData.map((item) => (
                <div key={item.id} className="col-md-4 text-center">
            
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="jali-img mb-2"
                  />
              
                  {/* <p className="fw-semibold">{item.title}</p> */}
    
                </div>
              ))}
    
            </div>
          </div>
    
        </div>

  </>
}

export default StoneFireplace