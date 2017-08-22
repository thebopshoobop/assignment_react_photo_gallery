import React, { Component } from "react";
import GalleryPane from "./elements/GalleryPane";
import RefinePane from "./elements/RefinePane";
import PagerSet from "./elements/PagerSet";
const photos = require("../helpers").photos();

const PHOTOS_PER_PAGE = 6;
class Gallery extends Component {
  constructor(props) {
    super(props);
    const filteredPictures = photos.pictures;
    const pagedPictures = paginate(1, filteredPictures);

    this.state = {
      pictures: photos.pictures,
      filteredPictures,
      pagedPictures,
      filters: photos.filters,
      selected: "None",
      currentPage: 1
    };
    console.log(this.state);
  }

  handleSearchChange = e => {
    const query = e.target.value;
  };

  handleSortChange = e => {
    const direction = e.target.value;
    this.state.filteredPictures.sort((a, b) => {
      [a, b] = [a.user.username, b.user.username];
      if (direction == -1) [a, b] = [b, a];
      if (a < b) return -1;
      else if (a > b) return 1;
      else return 0;
    });

    this.renderPage(this.state.currentPage)();
  };

  handleFilterChange = e => {
    const filteredPictures = filter(e.target.value, this.state.pictures);
    const pagedPictures = paginate(this.state.currentPage, filteredPictures);

    // Set the new state.
    this.setState({
      selected: e.target.value,
      filteredPictures,
      pagedPictures
    });
  };

  renderPage = page => () => {
    const filteredPictures = this.state.filteredPictures;
    const numPages = Math.ceil(filteredPictures.length / PHOTOS_PER_PAGE);
    if (page <= 0 || page >= numPages + 1) return null;
    const pagedPictures = paginate(page, filteredPictures);
    this.setState({
      currentPage: page,
      pagedPictures
    });
  };

  render() {
    const page = this.state.currentPage;
    const handlers = {
      filter: this.handleFilterChange,
      search: this.handleSearchChange,
      sort: this.handleSortChange
    };
    return (
      <div>
        <RefinePane
          {...this.state}
          resultCount={this.state.filteredPictures.length}
          handlers={handlers}
        />
        <PagerSet page={page} renderPage={this.renderPage} />
        <GalleryPane {...this.state} />
        <PagerSet page={page} renderPage={this.renderPage} />
      </div>
    );
  }
}

function paginate(page, pictures) {
  const start = PHOTOS_PER_PAGE * (page - 1);
  const end = start + PHOTOS_PER_PAGE;
  return pictures.slice(start, end);
}

function filter(value, pictures) {
  return value === "None"
    ? pictures
    : pictures.filter(picture => picture.filter === value);
}

export default Gallery;
