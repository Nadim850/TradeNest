import React from "react";

function Universe() {
  return (
    <div className="container text-center" style={{ paddingTop: "80px" }}>
      <h1 className="mb-4">The Zerodha Universe</h1>
      <p>
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row mt-5 text-center  univers d-flex justify-content-evenly">
        <div className="col-3 p-3">
          <img src="media/images/zerodhaFundhouse.png" />
          <p className="mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-3 p-3">
          <img src="media/images/sensibullLogo.svg" />
          <p className="mt-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-3 p-3">
          <img src="media/images/tijori.svg" />
          <p className="">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row univers text-center d-flex justify-content-evenly">
        <div className="col-3 p-3">
          <img src="media/images/streakLogo.png" />
          <p className="mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-3 p-3">
          <img src="media/images/smallcaseLogo.png" />
          <p className="mt-4">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-3 p-3">
          <img src="media/images/dittoLogo.png" />
          <p className="mt-1">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <div style={{ padding: "40px 0px 80px 0px" }}>
        <button
          className=" btn btn-primary fs-5 "
          style={{
            width: "20%",
            borderRadius: "0%",
            backgroundColor: "#387ED1",
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
