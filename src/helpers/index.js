const helpers = {};

helpers.photos = function() {
	const photos = require('../photos').data;
	const MAX_CAPTION_LENGTH = 100;
	let filters = {};
	const pictures = photos.map(photo => {
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

	return {
		pictures,
		filters: ['None'].concat(Object.keys(filters))
	};

	function ellipsis(str) {
		if (!str) return '';
		if (typeof str === 'object') {
			str = str.text;
			if (str && str.length < MAX_CAPTION_LENGTH) return str;
			return str.slice(0, MAX_CAPTION_LENGTH).concat('...');
		}
	}
};

module.exports = helpers;
