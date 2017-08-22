import React from 'react';
import Photo from './Photo';

const GalleryPane = ({ pagedPictures }) =>
	<div className="row">
		{pagedPictures.map(picture => <Photo {...picture} key={picture.src} />)}
	</div>;

export default GalleryPane;
