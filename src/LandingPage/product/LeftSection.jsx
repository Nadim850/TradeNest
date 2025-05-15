import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  coin,
}) {
  return (
    <div className="container" style={{ paddingTop: "80px" }}>
      <div className="row">
        <div className="col-7 ">
          <img src={imageURL}></img>
        </div>
        <div className="col-1"></div>
        <div className="col-4 mt-5">
          <h2 className="mb-4 text-muted">{productName}</h2>
          <p
            className="my-3 text-muted"
            style={{ lineHeight: "1.8em", fontWeight: "500" }}
          >
            {productDescription}
          </p>

          {/* links and arrows */}
          <div>
            {" "}
            <a href="" className="links">
              {tryDemo}
            </a>
            <a href="" className="links" style={{ marginLeft: "50px" }}>
              {learnMore}
            </a>
            <a href="" className="links" style={{ marginLeft: "50px" }}>
              {coin}
            </a>
          </div>

          {/* logos */}

          <div className="mt-4">
            <a href="">
              <img src={googlePlay} />
            </a>
            <a href="">
              <img src={appStore} style={{ marginLeft: "50px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
