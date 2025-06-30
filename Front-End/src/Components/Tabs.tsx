import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export function Tabs() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#/dashboard">
            Profile
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="servicesDropdown"
              >
                Management
              </a>
              <div
                className="dropdown-menu mega-menu p-4 custom-dropdown"
                aria-labelledby="servicesDropdown"
              >
                <div className="row">
                    <h6>Wealth Management</h6>
                    <a className="dropdown-item" href="#/dashboard/Assets">
                      Assets
                    </a>
                    <a className="dropdown-item" href="#/dashboard/Goals">
                      Goals
                    </a>
                    <a className="dropdown-item" href="#/dashboard/Income">
                      Income
                    </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
