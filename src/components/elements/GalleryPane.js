import React from "react";
import Photo from "./Photo";

const GalleryPane = ({ pictures }) =>
  <div className="row">
    {pictures.map(picture => <Photo src={picture} key={picture} />)}
  </div>;

export default GalleryPane;
