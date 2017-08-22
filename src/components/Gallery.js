import React, { Component } from "react";
import GalleryPane from "./elements/GalleryPane";
import photos from "../photos";

const MAX_CAPTION_LENGTH = 100;
let filters = {};
const pictures = photos.data.map(photo => {
  filters[photo.filter] = photo.filter;
  return {
    filter: photo.filter,
    user: photo.user,
    link: photo.link,
    src: photo.images.low_resolution.url,
    caption: ellipsis(photo.caption),
    commentCount: photo.comments.count,
    likeCount: photo.likes.count,
    createdAt: new Date(photo.created_time * 1000).toDateString()
  };
});

function ellipsis(str) {
  if (!str) return "";
  if (typeof str === "object") {
    str = str.text;
    if (str && str.length < MAX_CAPTION_LENGTH) return str;
    return str.slice(0, MAX_CAPTION_LENGTH).concat("...");
  }
}

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
