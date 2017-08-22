import React, { Component } from "react";
import GalleryPane from "./elements/GalleryPane";
import photos from "../photos";

const pictures = photos.data.map(photo => photo.images.low_resolution.url);
console.log(pictures);

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {}; // Redundant right now
  }

  render() {
    return <GalleryPane pictures={pictures} />;
  }
}

export default Gallery;
