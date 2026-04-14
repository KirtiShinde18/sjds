import React from 'react'

// Image 
import stonefountain from "../../assets/Products/stonefountain.jpeg"

const stonefountainData = [
  {
    id: 1,
    title: "",
    img: "https://i.pinimg.com/736x/f7/14/c3/f714c334cc61aa2d3941c8dc921b5bcd.jpg"
  },
  {
    id: 2,
    title: "",
    img: "https://i.pinimg.com/736x/41/19/aa/4119aaeffb3070b99420f5ab36889582.jpg"
  },
  {
    id: 3,
    title: "",
    img: "https://i.pinimg.com/1200x/0e/0f/1a/0e0f1aa71dcc0de38c0835fcf1e9b4bc.jpg"
  },
  
];

const StoneFountain = () => {
  const isMobile = window.innerWidth <= 768;

  return <>
  
    <div className="container mt-3 text-center">
                  <h1 >Stone Fountain</h1>
              
                  <nav aria-label="breadcrumb"> 
                    <ol className="breadcrumb justify-content-center ">
                      <li className="breadcrumb-item ">
                        <a href="/" className="text-decoration-none text-black">Home</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Stone Fountain
                      </li>
                    </ol>
                  </nav>
    </div>
            
    <div className="container my-5">
      {/* img  */}
      {/* <img src={stonefountain} alt="" className="d-block mx-auto" /> */}
      <img
        src={stonefountain}
        alt=""
        className="d-block mx-auto"
        style={{
          width: isMobile ? "100%" : "60%",
          minHeight: isMobile ? "150px" : "auto",
          objectFit: "cover"
        }}
      />
  
      {/* text cotent  */}
      <h1 className='my-4'>🗿 Stone Fountian</h1>
      <p>
         A <b>Stone Fountain</b> is a decorative water feature made using natural stone, where water flows or circulates through carved stone structures. It is widely used in gardens, hotels, resorts, temples, and luxury homes for aesthetic and calming effects.
      </p>
  
       <div className="container py-5">
        <div className="row justify-content-center g-4 text-center">
  
          {stonefountainData.map((item) => (
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

export default StoneFountain