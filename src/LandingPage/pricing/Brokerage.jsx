import React from "react";

function Brokerage() {
  return (
    <div className="container brokerage">
      <div className="row d-flex justify-content-between text-center">
        <div className="col-4 ">
          <img
            src="media/images/pricing0.svg"
            style={{ width: "70%", marginBottom: "15px" }}
          />
          <h3>Free equity delivery</h3>
          <p className="my-4 text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 ">
          <img
            src="media/images/intradayTrades.svg"
            style={{ width: "70%", marginBottom: "15px" }}
          />
          <h3>Intraday and F&O trades</h3>
          <p className="my-4 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 ">
          <img
            src="media/images/pricingMF.svg"
            style={{ width: "70%", marginBottom: "15px" }}
          />
          <h3>Free direct MF</h3>
          <p className="my-4 text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
