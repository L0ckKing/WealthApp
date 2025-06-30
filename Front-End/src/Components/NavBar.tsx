import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

type NavBarProps = {
  onOpenLogin: (loginType: string) => void;
};

export function NavBar({ onOpenLogin}: NavBarProps) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            WealthApp
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ms-auto" role="search">
              <button type="button" className="btn btn-primary" style={{marginRight:'5px'}} onClick={() => onOpenLogin("Sign Up")}>
                Sign Up
              </button>
              <button type="button" className="btn btn-success" onClick={() => onOpenLogin("Login")}>Login</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
