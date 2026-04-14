import React from 'react'

// image 
import stackingstone from "../../assets/Products/stackingstone.jpeg"

const stackingStoneData = [
  {
    id: 1,
    title: "Silver Shine Stacking",
    img: "https://i.pinimg.com/1200x/98/1d/d6/981dd618054299b61e4e2f9da66663da.jpg"
  },
  {
    id: 2,
    title: "River Rock",
    img: "https://i.pinimg.com/1200x/a8/b4/fe/a8b4fe826ac9f594a6adba109fb6a1a1.jpg"
  },
  {
    id: 3,
    title: "Mint Stacking",
    img: "https://i.pinimg.com/736x/89/e9/e5/89e9e5da8d2299e60b0565bae565ebb0.jpg"
  },
  {
    id: 4,
    title: "Cut Field Stone Stacking",
    img: "https://i.pinimg.com/736x/5d/d7/21/5dd721eaacdb63a217dfbcc761f23100.jpg"
  },
  {
    id: 5,
    title: "Stacking Deoli",
    img: "https://i.pinimg.com/1200x/69/56/79/6956791d3a870f7914f4715378a8d34c.jpg"
  },
  {
    id: 6,
    title: "Gray Stacking",
    img: "https://i.pinimg.com/1200x/0e/9e/89/0e9e896d18d35eb11412a58a8a9309eb.jpg"
  },

];

const StackingStone = () => {
    const isMobile = window.innerWidth <= 768;

  return <>
  
  <div className="container mt-3 text-center">
    <h1 >Stacking Stone</h1>

    <nav aria-label="breadcrumb"> 
      <ol className="breadcrumb justify-content-center ">
        <li className="breadcrumb-item ">
          <a href="/" className="text-decoration-none text-black">Home</a>
        </li>
        <li className="breadcrumb-item active">
          Stacking Stone
        </li>
      </ol>
    </nav>
  </div>


  <div className="container my-5">
        {/* img  */}
        {/* <img src={stackingstone} alt="" className="d-block mx-auto"  /> */}
        <img
                src={stackingstone}
                alt=""
                className="d-block mx-auto"
                style={{
                  width: isMobile ? "100%" : "60%",
                  minHeight: isMobile ? "150px" : "auto",
                  objectFit: "cover"
                }}
              />
    
        {/* text cotent  */}
        <h1 className='my-4'>🗿 Stacking Stone</h1>
        <p>
            <b>Shree Jal Devi Stone</b> is one of the Rajasthan’s leading companies in the production of Stacking Stones. It comes straight from the heart of Rajasthan and is designed with the most advanced technology. Stacking stone refers to stone pieces that are arranged in a dry-stack or tightly fitted pattern without large gaps or visible mortar lines. It gives a modern yet natural wall finish.
        </p>
    
         <div className="container py-5">
          <div className="row justify-content-center g-4 text-center">
    
            {stackingStoneData.map((item) => (
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

export default StackingStone