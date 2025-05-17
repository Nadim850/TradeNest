import React from "react";

function Hero() {
  return (
    <section className="container-fluid " id="supportHero">
      <div className="" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track tickets</a>
      </div>
      <div className="row d-flex justify-content-between ">
        <div className="col-8 ps-5">
          <p className="fs-4">
            Search for an answer or browse help topics to create a ticket
          </p>
          <div className="input">
            <input placeholder="Eg: how do i activate F&O, why is my order getting rejected..." />
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
          <br />
          <span>
            {" "}
            <a href="#">Track account opening</a>
          </span>
          <span>
            {" "}
            <a href="#">Track segment activation</a>
          </span>
          <span>
            {" "}
            <a href="#">Intraday margins</a>
          </span>
          <span>
            {" "}
            <a href="#">Kite user manual</a>
          </span>
        </div>
        <div className="col-4">
          <p className="fs-5">Featured</p>
          <ol>
            <li>
              <a href="">Offer for sale (OFS) – May 2025</a>
            </li>
            <li>
              <a href=""> Surveillance measure on scrips - May 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
