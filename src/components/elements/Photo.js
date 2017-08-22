import React from "react";
import { Image } from "react-bootstrap";

const Photo = ({ src }) =>
  <div className="col-sm-3">
    <Image src={src} responsive />
  </div>;

export default Photo;
