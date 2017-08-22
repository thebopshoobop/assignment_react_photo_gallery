import React from 'react';
import Photo from './Photo';

const GalleryPane = ({ filteredPictures }) =>
	<div className="row">
		{filteredPictures.map(picture => <Photo {...picture} key={picture.src} />)}
	</div>;

export default GalleryPane;
