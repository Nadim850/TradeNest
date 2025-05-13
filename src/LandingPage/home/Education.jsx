import React from "react";

function Education() {
  return (
    <div className="container  mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src="media/images/education.svg" style={{ width: "85%" }}></img>
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">Free and open market education</h2>
          <p className="text-muted  my-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a style={{ color: "#387ED1" }}>
            Varsity
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="text-muted my-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a style={{ color: "#387ED1" }}>
            TradingQ&A
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
