import React from 'react'

// Image 
import stonehandcraft from "../../assets/Products/stonehandcraft.jpeg"

const stonehandcraftData = [
  {
    id: 1,
    title: "Rock Decor",
    img: "https://i.pinimg.com/736x/27/b5/98/27b59863e53c7415a7a346a43c2cbc22.jpg"
  },
  {
    id: 2,
    title: "Flower Case",
    img: "https://i.pinimg.com/736x/e3/0d/09/e30d093579f6f84db10046eb8c9d3ca1.jpg"
  },
  {
    id: 3,
    title: "Women Rock Art",
    img: "https://i.pinimg.com/1200x/a0/6d/03/a06d033e2fc9b753efc20ba898ce91df.jpg"
  },
  
];

const StoneHandcraft = () => {
  const isMobile = window.innerWidth <= 768;

  return <>
         <div className="container mt-3 text-center">
              <h1 >Stone Handcrafts</h1>
          
              <nav aria-label="breadcrumb"> 
                <ol className="breadcrumb justify-content-center ">
                  <li className="breadcrumb-item ">
                    <a href="/" className="text-decoration-none text-black">Home</a>
                  </li>
                  <li className="breadcrumb-item active">
                    Stone Handcraft
                  </li>
                </ol>
              </nav>
          </div>
        
            <div className="container my-5">
              {/* img  */}
              {/* <img src={stonehandcraft} alt="" className="d-block mx-auto" /> */}
              <img
                src={stonehandcraft}
                alt=""
                className="d-block mx-auto"
                style={{
                  width: isMobile ? "100%" : "60%",
                  minHeight: isMobile ? "150px" : "auto",
                  objectFit: "cover"
                }}
              />
          
              {/* text cotent  */}
              <h1 className='my-4'>🗿 Stone Handcraft</h1>
              <p>
                  <b>Stone handcraft</b> is the traditional art of carving, shaping, and decorating natural stones into artistic, architectural, or utility objects. It is one of the oldest handicraft forms in the world and is still widely practiced in India.
              </p>
          
               <div className="container py-5">
                <div className="row justify-content-center g-4 text-center">
          
                  {stonehandcraftData.map((item) => (
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

export default StoneHandcraft