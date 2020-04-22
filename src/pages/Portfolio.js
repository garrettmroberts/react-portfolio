import React, { useState } from "react";
import Container from "../components/Container";
import Card from "../components/Card";

function Portfolio(props) {
  const [portfolioState, setPortfolioState] = useState([
    {
      name: "Novel-19",
      link: "https://novel-19.herokuapp.com/home",
      image: "/assets/images/screenshot-covid.png",
      desc: "This project was built in a small group of three.  It allows for multiple user instances, where each user can mark locations they have visited.  If a user tests positive for Covid-19, they can update their status and all of their locations are marked on a public map.  The goal is to make a safer way for people to find out if they'vecome ito contact with potentially infected persons within the last two weeks."
    },
    {
      name: "User Directory",
      link: "https://github.com/garrettmroberts/user_directory",
      image: "../assets/images/screenshot-user-directory.png",
      desc: "This directory is built out of react components.  It can sort and filter any json file passe into it.  Because of it's modularity, any other json file can be fed to it, the table will populate dynamically, the sort filters work out of the box, and the filter functionality can work with minor tweaks."
    },
    {
      name: "Markdown Previewer",
      link: "https://github.com/garrettmroberts/FreeCodeCamp-Projects/tree/master/markdownPreviewer",
      image: "../assets/images/screenshot-markdown-previewer.png",
      desc: "A simple markown previewer.  Anything can be written into the input field, and the preview dynamically updates with that text parsed from markdown to html.  Good for making sure that a markdown file is visually appealing before pushing."
    }
  ]);
  
  return (
  <div>
    <Container>
      <div className="row">
        <div className="col-sm-12">
          <h1 className="text-center pt-4">Here are some things I've been working on.</h1>
        </div>
      </div>
    </Container>
    <Container className="d-flex" >
      {portfolioState.map(object => {
        return <Card assets={object} />
      })}
    </Container>
  </div>
  );
}

export default Portfolio;