import React, { Component } from "react";
import GalleryPane from "./elements/GalleryPane";
import RefinePane from "./elements/RefinePane";
import PagerSet from "./elements/PagerSet";
const photos = require("../helpers").photos();

const PHOTOS_PER_PAGE = 6;
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: photos.pictures,
      pagedPictures: _paginate(1, photos.pictures),
      filters: photos.filters,
      selected: "None",
      page: 1,
      query: "",
      number: photos.pictures.length
    };
  }

  handleSearchChange = e => {
    this.updatePage({ query: e.target.value });
  };

  handleSortChange = e => {
    this.updatePage({ sort: e.target.value });
  };

  handleFilterChange = e => {
    this.updatePage({ selected: e.target.value });
  };

  handlePageChange = page => () => {
    if (!_checkPage(page, this.state.pictures)) return null;

    this.updatePage({ page });
  };

  updatePage(props) {
    let pictures = this.state.pictures;
    pictures = _filter(props.selected || this.state.selected, pictures);

    let query;
    if (props.query === "" || props.query) query = props.query;
    else query = this.state.query;
    pictures = _query(query, pictures);

    pictures = _sort(props.sort || this.state.sort, pictures);

    const number = pictures.length;
    let page = props.page || this.state.page;
    if (!_checkPage(page, pictures)) {
      page = Math.ceil(pictures.length / PHOTOS_PER_PAGE);
      props.page = page;
    }
    pictures = _paginate(page, pictures);

    this.setState({
      pagedPictures: pictures,
      number,
      ...props
    });
  }

  render() {
    const page = this.state.page;
    const handlers = {
      filter: this.handleFilterChange,
      search: this.handleSearchChange,
      sort: this.handleSortChange
    };
    return (
      <div>
        <RefinePane
          {...this.state}
          resultCount={this.state.number}
          handlers={handlers}
        />
        <PagerSet page={page} handlePage={this.handlePageChange} />
        <GalleryPane {...this.state} />
        <PagerSet page={page} handlePage={this.handlePageChange} />
      </div>
    );
  }
}

function _checkPage(page, pictures) {
  return page > 0 && page <= Math.ceil(pictures.length / PHOTOS_PER_PAGE);
}

function _paginate(page, pictures) {
  const start = PHOTOS_PER_PAGE * (page - 1);
  const end = start + PHOTOS_PER_PAGE;
  return pictures.slice(start, end);
}

function _filter(value, pictures) {
  return value === "None"
    ? pictures
    : pictures.filter(picture => picture.filter === value);
}

function _sort(direction, pictures) {
  return pictures.sort((a, b) => {
    [a, b] = [a.user.username, b.user.username];
    if (direction === "-1") [a, b] = [b, a];
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  });
}

function _query(query, pictures) {
  console.log("This:", query, ":That");

  return query === ""
    ? pictures
    : pictures.filter(picture => picture.user.username.includes(query));
}

export default Gallery;
