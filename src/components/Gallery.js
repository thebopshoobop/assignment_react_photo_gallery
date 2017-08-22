import React, { Component } from 'react';
import GalleryPane from './elements/GalleryPane';
import FilterPane from './elements/FilterPane';
import { Pager, Button } from 'react-bootstrap';
const photos = require('../helpers').photos();

const PHOTOS_PER_PAGE = 12;
class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pictures: photos.pictures,
			filteredPictures: photos.pictures.slice(0, PHOTOS_PER_PAGE),
			filters: photos.filters,
			selected: 'None',
			currentPage: 1
		};
	}

	handleFilterChange = e => {
		const filteredPictures =
			e.target.value === 'None'
				? this.state.pictures
				: this.state.pictures.filter(
						picture => picture.filter === e.target.value
					);
		// Set the new state.
		this.setState({
			selected: e.target.value,
			filteredPictures
		});
	};

	renderPage(page) {
		const numPages = Math.ceil(this.state.pictures.length / PHOTOS_PER_PAGE);
		console.log(page, numPages);
		if (page <= 0 || page >= numPages + 1) return null;

		const start = PHOTOS_PER_PAGE * (page - 1);
		const end = start + PHOTOS_PER_PAGE;
		const pictures = this.state.pictures.slice(start, end);

		this.setState({
			currentPage: page,
			filteredPictures: pictures
		});
	}

	render() {
		const renderPage = page => () => this.renderPage(page);
		const page = this.state.currentPage;
		return (
			<div>
				<FilterPane
					{...this.state}
					handleFilterChange={this.handleFilterChange}
				/>
				<GalleryPane {...this.state} />

				<Pager>
					<Pager.Item previous="true" onClick={renderPage(page - 1)}>
						Previous
					</Pager.Item>
					<Button bsStyle="primary" bsSize="large">
						&nbsp;{page}&nbsp;
					</Button>
					<Pager.Item next="true" onClick={renderPage(page + 1)}>
						Next
					</Pager.Item>
				</Pager>
			</div>
		);
	}
}

export default Gallery;
