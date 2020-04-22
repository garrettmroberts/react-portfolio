import React from "react";
import Container from "../components/Container";
import AboutCard from "../components/AboutCard";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      options: ["MongoDB architect", "Node developer", "Javascript Fanatic", "ReactJS's #1 Fan", "Web Developer"],
      index: 0,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({index: (this.state.index + 1) % this.state.options.length});  
    }, 2000);
  }
  
  render() {
    return(
    <main>
      <Container>
        <div className="row mt-5 d-flex justify-content-center pt-5">
          <div className="col-lg-12 text-center text-primary bg-light">
            <div className="bg-primary rounded text-light">
              <h3 className="mt-5 pt-4">Hello, I'm Garrett.</h3>
              <h2 className="pb-4 mb-5">
                <strong>&lt;
                  <span id="scrollingElement"><strong>{this.state.options[this.state.index]}</strong></span>/&gt;
                </strong>
              </h2>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <AboutCard />
      </Container>

    </main>
    );
  }
}

export default Home;