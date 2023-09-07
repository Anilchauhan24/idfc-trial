import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a class="navbar-brand" href="#" style={{ color: "#9d1d27" }}>
          IDFC First Bank
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="#">
              Bank Account
            </a>
          </li>
          <li className="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="#"
              style={{ color: "#9d1d27" }}
            >
              Personal
            </a>
          </li>
          <li className="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="#">
              Credit card
            </a>
          </li>
          <li className="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="#">
              Business
            </a>
          </li>
          <li className="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="#">
              Wholesale
            </a>
          </li>
        </ul>

        <ul className="navbar-nav">
          <li className="navbar-item">Login</li>
          <li className="navbar-item">Sign up</li>
        </ul>
      </nav>
      <navbar />

      <div className="container-fluid">
        <ul className="navbar-nav">
          <a class="btn btn-primary" href="#">
            IDFC First Bank{" "}
          </a>
        </ul>
        <ul className="navbar-nav me-auto">
          <li className="nav-item text-#9d1d27">Accounts</li>
          <li className="nav-item text-#9d1d27">Deposits</li>
          <li className="nav-item text-#9d1d27">Loans</li>
          <li className="nav-item text-#9d1d27">Wealth & insure</li>
          <li className="nav-item text-#9d1d27">Payment</li>
        </ul>
      </div>
      <div className="container back">
        <div className="white-line">
          <div className="line-one">Hello</div>
          <div className="line-two">Yes</div>
          <div className="line-three">How are you?</div>
          <img src="./download.jpg" alt="image" />
        </div>

        <div className="text-line">
          <p className="h4">
            A world class Bank in India <br />
            Guided by ethics, Powered by technology and a face for social Good
          </p>
        </div>
        <div className="container grid">
          <div className="grid-one gridst"></div>
          <div className="gride grids one">
            <h6>Cards</h6>
            <h5>Credit cards</h5>
            <p className="h6">Apply for Lifetime credit card</p>
            <a href="#">Apply Now</a>
          </div>
          <div className="gride grids two">Loans</div>
          <div className="gride grids three">Deposits</div>
          <div className="gride grids four ">Investment</div>
          <div className="gride grids five">Insurance</div>
        </div>
      </div>
    </div>
  );
}
