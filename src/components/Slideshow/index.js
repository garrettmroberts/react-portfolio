import React from "react";
import Card from "../Card";
import "./style.css";

function Slideshow({ assets }) {
  return(
    <div id="slideshowDiv" className="d-flex">
      {assets.map(asset => {
        return <Card assets={asset} key={asset.name} />
      })}
    </div>
  )
};

export default Slideshow;