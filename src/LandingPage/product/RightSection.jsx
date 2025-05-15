import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
  kiteConnect,
}) {
  return (
    <div className="container" style={{ paddingTop: "80px" }}>
      <div className="row">
        <div className="col-4" style={{ paddingTop: "100px" }}>
          <h2 className="mb-4 mt-5 text-muted">{productName}</h2>
          <p
            className="my-3 text-muted"
            style={{ lineHeight: "1.8em", fontWeight: "500" }}
          >
            {productDescription}
          </p>
          <div>
            {" "}
            <a href="" className="links">
              {learnMore}
            </a>
            <a href="" className="links">
              {kiteConnect}
            </a>
          </div>
        </div>
        <div className="col-1"></div>

        <div className="col-7 ">
          <img src={imageURL} className="product-img "></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
