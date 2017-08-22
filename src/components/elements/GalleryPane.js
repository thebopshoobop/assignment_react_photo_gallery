import React from 'react';
import Photo from './Photo';

const GalleryPane = ({ pictures }) =>
	<div className="row">
		{pictures.map(picture => <Photo {...picture} key={picture.src} />)}
	</div>;

export default GalleryPane;
