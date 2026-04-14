import React from 'react'

// Image 
import granitearticles from "../../assets/Products/granitearticles.jpeg"

const graniteArticlesData = [
  {
    id: 1,
    title: "",
    img: "https://i.pinimg.com/736x/d7/02/35/d7023590e238a8b93e2d6955673ac580.jpg"
  },
  {
    id: 2,
    title: "",
    img: "https://i.pinimg.com/736x/39/4e/84/394e84b7289e0f622545dcbbfc165ed9.jpg"
  },
  {
    id: 3,
    title: "",
    img: "https://i.pinimg.com/736x/ba/b7/1f/bab71fdb0bde4a46ffbddd415933ee35.jpg"
  }
];


const GraniteArticle = () => {
  const isMobile = window.innerWidth <= 768;

  return <>
  
   <div className="container mt-3 text-center">
        <h1 >Granite Articles</h1>
    
        <nav aria-label="breadcrumb"> 
          <ol className="breadcrumb justify-content-center ">
            <li className="breadcrumb-item ">
              <a href="/" className="text-decoration-none text-black">Home</a>
            </li>
            <li className="breadcrumb-item active">
              Granite Articles
            </li>
          </ol>
        </nav>
    </div>
  
      <div className="container my-5">
        {/* img  */}
        {/* <img src={granitearticles} alt="" className="d-block mx-auto" /> */}
        <img
          src={granitearticles}
          alt=""
          className="d-block mx-auto"
          style={{
            width: isMobile ? "100%" : "60%",
            minHeight: isMobile ? "150px" : "auto",
            objectFit: "cover"
          }}
        />
    
        {/* text cotent  */}
        <h1 className='my-4'>🗿 Granite Articles</h1>
        <p>
            <b>Granite articles</b> are finished products made from granite stone that are cut, shaped, and polished for different architectural and decorative uses. Granite is one of the hardest natural stones, making it ideal for long-lasting stone products.
        </p>
    
         <div className="container py-5">
          <div className="row justify-content-center g-4 text-center">
    
            {graniteArticlesData.map((item) => (
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

export default GraniteArticle