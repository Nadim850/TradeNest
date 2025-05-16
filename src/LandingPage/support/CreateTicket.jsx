function CreateTicket() {
  return (
    <div
      className="container"
      style={{ marginTop: "20px", marginBottom: "80px" }}
    >
      <div className="row mb-4 ">
        <h4 className="mb-5 text-muted">
          To create a ticket, select a relevant topic
        </h4>
        <div className="col-4 mt-2 mb-2 left-col">
          <p>
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
            &nbsp;Account Opening
          </p>{" "}
          <a href="#">Resident individual</a> <br /> <a href="#">Minor </a>
          <br /> <a href="#">Non Resident Indian (NRI) </a>
          <br /> <a href="#">Company,Partnership,HUF and LLP </a>
          <br /> <a href="#">Glossary</a>
          <br />
        </div>

        <div className="col-4 mt-2 mb-2  mid-col">
          <p>
            <i class="fa fa-user-o" aria-hidden="true"></i>
            &nbsp; Your Zerodha Account
          </p>{" "}
          <a href="#">Your Profile</a> <br />{" "}
          <a href="#">Account modification</a>
          <br /> <a href="#">Client Master Report (CMR)</a>
          <br /> <a href="#">Nomination</a>
          <br /> <a href="#">Transfer and conversion of securities</a>
          <br />
        </div>

        <div className="col-4 mt-2 mb-2  right-col">
          <p>
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
            &nbsp; Kite
          </p>{" "}
          <a href="#">IPO</a> <br /> <a href="#">Trading FAQs</a>
          <br /> <a href="#">Margin Trading Facility (MTF) and Margins</a>
          <br /> <a href="#">Charts and orders</a>
          <br /> <a href="#">Alerts and Nudges General</a>
          <br /> <a href="#">General</a>
          <br />
        </div>

        <div className="col-4 mt-2 mb-2  left-col">
          <p>
            <i class="fa fa-credit-card" aria-hidden="true"></i>
            &nbsp; Funds
          </p>{" "}
          <a href="#">Add money</a> <br /> <a href="#">Withdraw money</a>
          <br /> <a href="#">Add bank accounts</a>
          <br /> <a href="#">eMandates</a>
          <br />
        </div>
        <div className="col-4 mt-2 mb-2  mid-col">
          <p>
            <i class="fa fa-credit-card" aria-hidden="true"></i>
            &nbsp; Console
          </p>{" "}
          <a href="#">IPO</a> <br /> <a href="#">Portfolio</a>
          <br /> <a href="#">Corporate actions Profile </a>
          <br /> <a href="#"> Funds statement</a>
          <br /> <a href="#">Reports</a>
          <br /> <a href="#">Segments</a>
          <br />
        </div>
        <div className="col-4 mt-2 mb-2  right-col">
          <p>
            <i class="fa fa-gg" aria-hidden="true"></i>
            &nbsp; Coin
          </p>{" "}
          <a href="#">Understanding mutual funds and Coin</a> <br />{" "}
          <a href="#">Coin app</a>
          <br /> <a href="#">Coin web</a>
          <br /> <a href="#">Transactions and reports</a>
          <br /> <a href="#">National Pension Scheme (NPS)</a>
          <br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
