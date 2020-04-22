import React from "react";
import Container from "../components/Container";

function Contact() {
  return(
    <Container>
      <div className="row">
        <div className="col-lg-12 bg-light rounded my-5 border border-primary">
          <h1 className="pt-3 pl-3 text-dark">Contact</h1>
          <hr />
          <form className="pb-3">
            <div className="form-group">
              <label for="fname">First name:</label>
              <input type="text" className="form-control" id="fname" required />
            </div>
            <div className="form-group">
              <label for="lname">Last name:</label>
              <input type="text" className="form-control" id="lname" required />
            </div>
            <div className="form-group">
              <label for="email">Email:</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="form-group">
              <label fro="message">Message:</label>
              <textarea id="message" className="form-control" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary text-white">Submit</button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Contact;