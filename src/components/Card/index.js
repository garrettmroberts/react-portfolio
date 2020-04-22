import React from "react";
import "./style.css";

function Card({ assets }) {
  return(
    <article className="card">
      <img className="card-img-top" src={assets.image} alt="{assets.name} screenshot" />
      <div className="card-body">
        <h4 className="card-title">{assets.name}</h4>
        <p className="card-text">{assets.desc}</p>
        <a href={assets.link} className="btn btn-primary">See it here</a>
      </div>
    </article>
  )
};

export default Card;