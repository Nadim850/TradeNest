import React from "react";

function Pricing() {
  return (
    <div className="container py-5 mb-5">
      <div className="row ">
        <div className="col-md-6">
          <h2 className="mb-3">Unbeatable pricing</h2>
          <p className="text-muted my-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a style={{ color: "#387ED1" }}>
            See pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        {/* Pricing section */}
        <div className="col-md-6 d-flex justify-content-around text-center">
          <div>
            <img src="media/images/pricing0.svg" style={{ width: "90%" }}></img>
            <p className="text-muted" style={{ fontSize: "10px" }}>
              Free account opening
            </p>
          </div>
          <div>
            <img
              src="media/images/pricingMF.svg"
              style={{ width: "90%" }}
            ></img>
            <p className="text-muted" style={{ fontSize: "10px" }}>
              Free equity delivery and direct mutual funds
            </p>
          </div>
          <div>
            <img
              src="media/images/intradayTrades.svg"
              style={{ width: "90%" }}
            ></img>
            <p className="text-muted" style={{ fontSize: "10px" }}>
              Intraday and F&O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
