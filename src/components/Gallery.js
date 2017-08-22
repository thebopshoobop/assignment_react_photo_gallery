import React, { Component } from 'react';
import GalleryPane from './elements/GalleryPane';
import FilterPane from './elements/FilterPane';
const photos = require('../helpers').photos();

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pictures: photos.pictures,
			filteredPictures: photos.pictures,
			filters: photos.filters,
			selected: 'None'
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

	render() {
		return (
			<div>
				<FilterPane
					{...this.state}
					handleFilterChange={this.handleFilterChange}
				/>
				<GalleryPane {...this.state} />
			</div>
		);
	}
}

export default Gallery;
