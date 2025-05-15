import React from "react";

function Team() {
  return (
    <div className="border-top team-section">
      <h2 className="text-center text-muted mb-4">People</h2>
      <div className="row py-5">
        {/* left column-img */}
        <div className="col text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{
              borderRadius: "100%",
              width: "55%",
              marginBottom: "10px",
            }}
          ></img>
          <h5>Nithin Kamath</h5>
          <p className="about-text">Founder, CEO</p>
        </div>

        {/* right column-para */}
        <div
          className="col about-text "
          style={{ lineHeight: "1.8em", marginLeft: "-110px" }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p className="links">
            Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{" "}
            <a href="#">Twitter</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
