import React from 'react'

// images 
import hero1 from "../assets/Hero/hero1.jpeg"
import hero2 from "../assets/Hero/hero2.jpeg"
import hero3 from "../assets/Hero/hero3.jpeg"
import { useNavigate } from 'react-router-dom';

const items = [
  {
    text: "Stacking Stone",
    img: "https://i.pinimg.com/1200x/2e/c3/21/2ec3215b47ae6d732f36db691d4716c6.jpg",
    link: "/products/stacking-stone"
  },
  {
    text: "MURALS",
    img: "https://i.pinimg.com/1200x/ed/b9/8e/edb98e6a60fc9a2e954821bb18739102.jpg",
    link: "/products/murals"
  },
  {
    text: "Stone Fire Place",
    img: "https://i.pinimg.com/1200x/44/8d/fb/448dfbfd57a7cd26ecd3fc43deafd2af.jpg",
    link: "/products/stone-fire-place"
  },
  {
    text: "STONE TILES",
    img: "https://i.pinimg.com/736x/e1/9f/33/e19f33318270bdfc5fd2a388f9e12165.jpg",
    link: "/products/stone-tiles"
  },
  {
    text: "Granite Articles",
    img: "https://i.pinimg.com/1200x/11/6d/ce/116dcef7549ac6d9bc2fadde6881f2b8.jpg",
    link: "/products/granite-articles"
  },
  {
    text: "Stone Figure",
    img: "https://i.pinimg.com/1200x/ff/50/84/ff5084127b938a0df3b6b08373a264dd.jpg",
    link: "/products/stone-figure"
  },
  {
    text: "Stone Bases",
    img: "https://i.pinimg.com/736x/2c/9d/45/2c9d45351885ad2297cd2f87b50ca5d4.jpg",
    link: "/products/stone-base"
  },
  {
    text: "Stone Handcrafts",
    img: "https://i.pinimg.com/736x/ab/2d/e4/ab2de4efff4f5e02cf628a3c3d1cc9b8.jpg",
    link: "/products/stone-handcrafts"
  },
  {
    text: "Stone Pillar",
    img: "https://i.pinimg.com/736x/99/34/c4/9934c4e91da237abb7c095a3b1128bf6.jpg",
    link: "/products/stone-pillars"
  },
  {
    text: "Stone Fountain",
    img: "https://i.pinimg.com/1200x/24/76/3d/24763d120cf75094266d08af369bc1ec.jpg",
    link: "/products/stone-fountain"
  },
   {
    text: "Stone Planter",
    img: "https://i.pinimg.com/1200x/f9/28/9a/f9289a627c1daf32edf29a0799c546c7.jpg",
    link: "/products/stone-planter"
  }
];

const Home = () => {
  const navigate = useNavigate();

  return <>

  {/* carousel start */}
  <div 
    id="carouselExampleIndicators" 
    className="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="3000"
    data-bs-pause="false"
  >

    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={hero1} className="d-block w-100" alt=""/>
  
      </div>
      <div className="carousel-item">
        <img src={hero2} className="d-block w-100" alt=""/>
      </div>
      <div className="carousel-item">
        <img src={hero3} className="d-block w-100" alt=""/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>

  </div>
  {/* carousel end */}

  {/* _Our Range of Products_ */}
  <div className="container my-5">

    <h1 className='text-center mb-5'>_Our Range of Products_ </h1>
     <div className="container">
      <div className="row">

        {/* Left Big Image */}
        <div className="col-md-6 mb-3">
          <div 
            className="img-wrapper"
            onClick={() => navigate("/products/stone-jali")}  // 👈 link
            style={{ cursor: "pointer" }}
          >
            <img
              src="https://i.pinimg.com/736x/fc/83/b1/fc83b1ef0164ac8f848460ddf7cfdd46.jpg"
              alt=""
              className="img-fluid w-100 h-100"
            />
            <div className="overlay">
              <h1>Stone Jali</h1>
            </div>
          </div>
        </div>

        {/* Right 4 Images */}
        <div className="col-md-6">
          <div className="row g-2">

            {items.map((item, i) => (
              <div className="col-6" key={i}>
                <div 
                  className="img-wrapper small-img"
                  onClick={() => navigate(item.link)}  // 👈 click redirect
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={item.img}
                    alt={item.text}
                    className="img-fluid w-100"
                    style={{ height: "148px", objectFit: "cover" }}
                  />
                  <div className="overlay">
                    <h5>{item.text}</h5>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>

  </div>

</>

}

export default Home