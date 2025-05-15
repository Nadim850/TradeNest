import React from "react";

function Hero() {
  return (
    <div className="container border-bottom">
      <div className="row text-center product-hero">
        <h1>Zerodha Products</h1>
        <p>Sleek, modern, and intuitive trading platforms</p>
        <p style={{ fontSize: "16px" }}>
          Check out our{" "}
          <a href="#" className="links">
            investment offerings →
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero;
