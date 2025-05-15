import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom fixed-top">
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" style={{ width: "25%" }}></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-muted"
                aria-current="page"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-muted" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link active text-muted"
                aria-disabled="true"
                to="/products"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-muted"
                aria-disabled="true"
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-muted"
                aria-disabled="true"
                to="/support"
              >
                Support
              </Link>
            </li>
            <li className="nav-item">
              <i className="nav-link fa fa-bars mt-1" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
