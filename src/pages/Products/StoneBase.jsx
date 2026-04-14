import React from 'react'

// Image 
import stonebase from "../../assets/Products/stonebase.jpeg"

const stonebaseData = [
  {
    id: 1,
    title: "",
    img: "https://i.pinimg.com/736x/61/69/dd/6169ddd1b4bbc6421b87ba57deb7ffeb.jpg"
  },
  {
    id: 2,
    title: "",
    img: "https://i.pinimg.com/736x/44/b8/2d/44b82d0f452aa666eba9e920b4d85475.jpg"
  },
  {
    id: 3,
    title: "",
    img: "https://i.pinimg.com/736x/c6/32/66/c63266d613ce824de0ecaa0fedaef036.jpg"
  }
];

const StoneBase = () => {

  const isMobile = window.innerWidth <= 768;

  return <>
  
       <div className="container mt-3 text-center">
            <h1 >Stone Base</h1>
        
            <nav aria-label="breadcrumb"> 
              <ol className="breadcrumb justify-content-center ">
                <li className="breadcrumb-item ">
                  <a href="/" className="text-decoration-none text-black">Home</a>
                </li>
                <li className="breadcrumb-item active">
                  Stone Base
                </li>
              </ol>
            </nav>
        </div>
      
          <div className="container my-5">
            {/* img  */}
            {/* <img src={stonebase} alt="" className="d-block mx-auto" /> */}
            <img
              src={stonebase}
              alt=""
              className="d-block mx-auto"
              style={{
                width: isMobile ? "100%" : "60%",
                minHeight: isMobile ? "150px" : "auto",
                objectFit: "cover"
              }}
            />
        
            {/* text cotent  */}
            <h1 className='my-4'>🗿 Stone Base</h1>
            <p>
                A <b>Stone base</b> is a strong foundation or supporting structure made from natural stone, used to hold or elevate statues, pillars, columns, monuments, or decorative elements.
            </p>
        
             <div className="container py-5">
              <div className="row justify-content-center g-4 text-center">
        
                {stonebaseData.map((item) => (
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

export default StoneBase