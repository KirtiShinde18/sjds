import React from 'react'

// Image 
import stonetilescollections from "../../assets/Products/stonetilescollections.jpeg"

const stoneTilesData = [
  {
    title: "🪨 Granite Tiles - Detailed Overview",
    image:
      "https://i.pinimg.com/736x/f1/75/43/f1754398a619fdedb347653047e7d88a.jpg",
    description:
      "Granite tiles are natural stone tiles cut from solid granite rock and used mainly for flooring, wall cladding, countertops, and outdoor surfaces. They are known for their extreme durability, strength, and premium natural appearance.",
    points: [
      "Cut from natural granite stone blocks",
      "Processed into uniform tile sizes",
      "Finished with polishing or texture treatments",
      "Used in heavy-duty and luxury applications",
    ],
  },
  {
    title: "🪨 Limestone Tiles - Detailed Overview",
    image:
      "https://i.pinimg.com/1200x/87/f1/21/87f121831db8d6d15f5ab435a4dd0017.jpg",
    description:
      "Limestone tiles are natural stone tiles made from sedimentary rock (limestone) and used for flooring, wall cladding, patios, and landscaping. They are popular for their soft, natural look and earthy tones.",
    points: [
      "Cut from natural limestone rock",
      "Processed into uniform tile sizes",
      "Finished in matte, honed, or textured surfaces",
      "Used for interior + exterior design",
    ],
  },
  {
    title: "🪨 Slate Tiles - Detailed Overview",
    image:
        "https://i.pinimg.com/1200x/f3/0a/c5/f30ac5d1bd557fcec67651da47f9b464.jpg",
    description:
        "Slate tiles are natural stone tiles made from fine-grained metamorphic rock (slate). They are widely used for flooring, wall cladding, roofing, and outdoor landscaping because of their durability, natural texture, and modern rustic look.",
    points: [
        "Cut from natural slate rock layers",
        "Split into thin, flat sheets",
        "Naturally textured and slightly uneven",
        "Used for both modern and traditional architecture",
    ],
  },
  {
    title: "🪨 Terracotta Tiles - Detailed Overview",
    image:
        "https://i.pinimg.com/1200x/67/c0/96/67c096fa6298424e63c9ec370f9af306.jpg",
    description:
        "Terracotta is a natural clay-based material used for tiles, bricks, pots, wall cladding, and decorative elements. It is one of the oldest building materials, known for its warm earthy color, natural texture, and eco-friendly nature..",
    points: [
        "Made from natural clay (earth clay)",
        "Molded into shapes and fired in a kiln",
        "Naturally porous and breathable material",
        "Used in architecture, flooring, and handicrafts",
    ],
  },
   {
    title: "🪨 Porcelain Tiles - Detailed Overview",
    image:
        "https://i.pinimg.com/1200x/c8/c3/46/c8c34681625173d7a687f89ef6f3cc23.jpg",
    description:
        "Porcelain tiles are a type of high-density ceramic tile made from refined clay and minerals fired at very high temperatures. They are known for being extremely strong, water-resistant, and suitable for both indoor and outdoor use.",
    points: [
        "Made from fine clay (kaolin) + minerals",
        "Fired at very high temperature (~1200–1400°C)",
        "Denser and less porous than normal ceramic tiles",
        "Designed for heavy-duty and premium applications",
    ],
  },
];

const StoneTilesCollections = () => {

    const isMobile = window.innerWidth <= 768;

  return <>
  
    <div className="container mt-3 text-center">
        <h1 >Stone Tiles Collections</h1>
    
        <nav aria-label="breadcrumb"> 
          <ol className="breadcrumb justify-content-center ">
            <li className="breadcrumb-item ">
              <a href="/" className="text-decoration-none text-black">Home</a>
            </li>
            <li className="breadcrumb-item ">
              <a href="/products/stone-tiles" className="text-decoration-none text-black">Stone-tiles</a>
            </li>
            <li className="breadcrumb-item active">
              Stone Tiles Collections
            </li>
          </ol>
        </nav>
    </div>
  
      <div className="container my-5">
        {/* img  */}
        {/* <img src={stonetilescollections} alt="" className="d-block mx-auto" /> */}
        <img
          src={stonetilescollections}
          alt=""
          className="d-block mx-auto"
          style={{
            width: isMobile ? "100%" : "60%",
            minHeight: isMobile ? "150px" : "auto",
            objectFit: "cover"
          }}
        />
    
        {/* text cotent  */}
        <h1 className='my-4'>🗿 Stone tiles Collections</h1>
        <p>
            A <b>Stone Tiles Collection</b> refers to a range of natural stone tiles used for flooring, wall cladding, exterior facades, and interior design. These tiles are cut and finished from natural stones and are valued for their durability, texture, and luxury appearance.
        </p>
    
        <div className="container py-5">
          {/* <div className="row justify-content-center g-4 text-center">
    
            {stonetilescollectionsData.map((item) => (
              <div key={item.id} className="col-md-4 text-center">
          
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="jali-img mb-2"
                />
            
                <p className="fw-semibold">{item.title}</p>
  
              </div>
            ))}
  
          </div> */}

            {stoneTilesData.map((item, index) => (
                <div className="row align-items-center my-5" key={index}>
                  
                  {/* Image LEFT or RIGHT auto alternate */}
                  <div className={`col-12 col-sm-6 text-center ${index % 2 !== 0 ? "order-sm-2" : ""}`}>
                    <img
                      src={item.image}
                      alt=""
                      className="img-fluid rounded"
                      style={{
                        maxHeight: "400px",
                        width: "100%",
                        maxWidth: "350px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                
                  {/* Text */}
                  <div className={`col-12 col-sm-6 ${index % 2 !== 0 ? "order-sm-1" : ""}`}>
                    <h3 className="my-3">{item.title}</h3>
                
                    <p>{item.description}</p>
                
                    <h4>🧱 What is {item.title.split(" ")[1]}?</h4>
                
                    <b>Tiles are:</b>
                
                    <ul>
                      {item.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
            ))}
        </div>
  
          
      </div>

  </>
}

export default StoneTilesCollections