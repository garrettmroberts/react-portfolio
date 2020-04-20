import React from "react";

function Footer() {
  return(
    <footer className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a href="https://github.com/garrettmroberts" className="text-light nav-link">
                  <span className="fa fa-github fa-2x"></span>
                </a>
              </li>
              <li className="nav-item">
                <a href="https://www.linkedin.com/in/garrett-roberts-b45640186/" className="text-light nav-link">
                  <span className="fa fa-linkedin fa-2x"></span>
                </a>
              </li>
              <li>
                <a href="https://www.freecodecamp.org/garrettmroberts" className="text-light nav-link">
                  <span className="fa fa-free-code-camp fa-2x"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center text-light">
            <p>Made with &hearts; in Nashville, TN</p>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;