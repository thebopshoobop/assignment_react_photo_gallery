import React, { Component } from 'react';
import GalleryPane from './elements/GalleryPane';
import RefinePane from './elements/RefinePane';
import PagerSet from './elements/PagerSet';
const photos = require('../helpers').photos();

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
			selected: 'None',
			currentPage: 1
		};
		console.log(this.state);
	}

	handleFilterChange = e => {
		const filteredPictures =
			e.target.value === 'None'
				? this.state.pictures
				: this.state.pictures.filter(
						picture => picture.filter === e.target.value
					);
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
		return (
			<div>
				<RefinePane
					{...this.state}
					resultCount={this.state.filteredPictures.length}
					handleFilterChange={this.handleFilterChange}
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

export default Gallery;
