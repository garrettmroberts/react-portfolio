import React, { useState } from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import Slideshow from "../components/Slideshow";

function Portfolio(props) {
  const [portfolioState, setPortfolioState] = useState([
    {
      name: "Novel-19",
      link: "https://novel-19.herokuapp.com/home",
      image: "/assets/images/screenshot-covid.png",
      desc: "lorem ipsum unum..."
    },
    {
      name: "User Directory",
      link: "https://github.com/garrettmroberts/user_directory",
      image: "../assets/images/screenshot-user-directory.png",
      desc: "lorem ipsum unum..."
    },
    {
      name: "Markdown Previewer",
      link: "https://github.com/garrettmroberts/FreeCodeCamp-Projects/tree/master/markdownPreviewer",
      image: "../assets/images/screenshot-markdown-previewer.png",
      desc: "lorem ipsum unum..."
    }
  ]);
  
  return (
    <Container fluid="true" className="d-flex" >
      {portfolioState.map(object => {
        return <Card assets={object} />
      })}
    </Container>
  );
}

export default Portfolio;