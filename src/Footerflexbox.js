import React from "react";

const Footerflexbox = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "15px",
        }}
      >
        <div>
          <h2>Product</h2>
          <h3>Softare</h3>
          <h3>Computer</h3>
          <h3>Programming</h3>
          <h3>Laptop</h3>
          <h3>Computer</h3>
        </div>
        <div>
          <h2>Service</h2>
          <h3>Softare</h3>
          <h3>Computer</h3>
          <h3>Programming</h3>
          <h3>Laptop</h3>
          <h3>Computer</h3>
        </div>
        <div>
          <h2>About Us</h2>
          <h3>Softare</h3>
          <h3>Computer</h3>
          <h3>Programming</h3>
          <h3>Laptop</h3>
          <h3>Computer</h3>
        </div>
        <div>
          <h2>Socail Media</h2>
          <h3>Facebook</h3>
          <h3>Instagram</h3>
          <h3>Linkedin</h3>
          <h3>Whatsapp</h3>
          <h3>Pinterest</h3>
        </div>
      </div>
      <div style={{ width: "30%", margin: "10px auto" }}> Footer CopyWrite</div>
    </>
  );
};

export default Footerflexbox;
