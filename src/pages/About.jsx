import React from "react";

const About = () => {
  return (
  <>
  <div className="container py-5">
      
      {/* Heading */}
      <div className="text-center mb-4">
        <h1 className="fw-bold">About Us</h1>
        <div
          style={{
            width: "80px",
            height: "3px",
            background: "#000",
            margin: "10px auto",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <p className="fs-6 lh-lg text-muted">
            We, <b>Shree Jal Devi Stone</b> We are not only the stone suppliers, Shree Jal Devi Stone is a 
            reputed India based company involved as suppliers and exporters of high quality natural stones 
            such as sandstone,Deoli Stone, Limestone, paving, cobble, 3D wood mosaic, Tiles, Granite and a 
            variety of other construction and natural building stones, for buyers around the globe.
            <br />
            <br />
            Natural Stone is used in nearly every place of the world. These can be produce in various 
            varieties which can be used in creating masterpieces, in construction purposes and also for 
            decorative purposes. We present an exciting range of beautiful building stones including Paving 
            sandstone, Slate, Granite, Marble, and limestone as well as handicrafts items
            <br />
            <br />
            At <b>Shree Jal Devi Stone</b> we supply all kinds of granite slabs tiles, marble slabs tiles, 
            sandstone slabs tiles, limestone slabs tiles, stone veneer, slate veneer, garden pavers, paving 
            stone, garden artifacts, stacked stone cladding, crazy paving, slate & quartzite calibrated tiles 
            for interior & exterior, sandstone tiles, sandstone pavers, limestone pavers, granite pavers, 
            pool coping, bullnose tiles, mosaics & borders, roofing tiles, tumbled stones, meshed pattern, 
            versailles pattern, ledge stone, flag stone, palisades stone, monolith stone, pool copings, pool 
            surround, stepping stones, stone articles, random crazy, treads risers, landscaping stones, 
            skirting, solid steps, wall cladding, stone circles, cobbles stones.
          </p>
        </div>
      </div>

    </div>

    <div className="container py-5">
  <div className="row align-items-center g-4">

    {/* IMAGE SIDE */}
    <div className="col-12 col-sm-6 text-center">
      <img
        src="https://i.pinimg.com/1200x/2a/c6/bd/2ac6bde9f02179b094ceddd94e6d2d05.jpg"
        alt=""
        className="img-fluid rounded"
        style={{
          maxWidth: "400px",
          width: "100%",
          objectFit: "cover",
        }}
      />
    </div>

    {/* CONTENT SIDE */}
    <div className="col-12 col-sm-6">

      <h3 className="fw-bold mb-10">
        We Are Proudly Indian Brand 🇮🇳
      </h3>

      {/* Feature 1 */}
      <div className="d-flex align-items-start gap-3 my-5">
        <img
          src="https://i.pinimg.com/736x/d8/8c/e1/d88ce1ba98cd5aac4d6a3339a56a8a18.jpg"
          alt=""
          style={{ width: "60px", height: "60px", objectFit: "cover" }}
          className="rounded"
        />
        <div>
          <h4 className="mb-1">Make in India</h4>
          <p className="text-muted mb-0">
              Every high-quality hand-made product is customized for you to match your style .  
              Your Product is manufactured  and sometimes designed by us in india. 
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="d-flex align-items-start gap-3 my-5">
        <img
          src="https://i.pinimg.com/736x/69/19/66/6919667e05af47f90cc9faeab729e81c.jpg"
          alt=""
          style={{ width: "60px", height: "60px", objectFit: "cover" }}
          className="rounded"
        />
        <div>
          <h4 className="mb-1">Handcrafted with Love 💗</h4>
          <p className="text-muted mb-0">
            In a culture overrun by mass-production, custom made goods are rare. At world of Stones, We stand behind everything we create and sell .
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="d-flex align-items-start gap-3 my-5">
        <img
          src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
          alt=""
          style={{ width: "60px", height: "60px", objectFit: "cover" }}
          className="rounded"
        />
        <div>
          <h4 className="mb-1">Craftmanship</h4>
          <p className="text-muted mb-0">
            A passionate team that takes pride inthe quality of products they create . knowledge passed down from 
            generation to generation, Our craftsmen are highly skilled .
          </p>
        </div>
      </div>

    </div>
  </div>
</div>
  </>


  );
};

export default About;