import { NavLink } from "react-router-dom";

function Header(props) {
  const searchHandler = () => {
    props.onShowModal();
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand mb-0 h1">AffiliatesApp</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/affiliates"
                  className="nav-link"
                  activeClassName="active"
                >
                  Affiliates
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/new-affiliate"
                  className="nav-link"
                  activeClassName="active"
                >
                  New Affiliate
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/inactives"
                  className="nav-link"
                  activeClassName="active"
                >
                  Inactives
                </NavLink>
              </li>
            </ul>
            <div>
              <button className="btn search-btn" onClick={searchHandler}>
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
