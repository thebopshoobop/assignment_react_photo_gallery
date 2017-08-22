import React, { Component } from 'react';
import {
	Image,
	OverlayTrigger,
	Popover,
	ListGroup,
	ListGroupItem
} from 'react-bootstrap';

const photoInfo = ({ src, caption, commentCount, likeCount, createdAt }) =>
	<Popover id={src} title={createdAt}>
		<ListGroup>
			<ListGroupItem>
				{caption}
			</ListGroupItem>
			<ListGroupItem>
				Likes: {likeCount}
			</ListGroupItem>
			<ListGroupItem>
				Comments: {commentCount}
			</ListGroupItem>
		</ListGroup>
	</Popover>;

class Photo extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	animateOut = () => {
		this.photoElement.classList.add('move-right');
	};

	componentDidMount() {
		setTimeout(
			() => this.photoElement.classList.remove('move-left'),
			Math.floor(Math.random() * 500)
		);
	}

	render() {
		const {
			user,
			link,
			src,
			caption,
			commentCount,
			likeCount,
			createdAt
		} = this.props;

		return (
			<div
				ref={photo => (this.photoElement = photo)}
				className="move-left col-sm-4 col-md-3 col-lg-2 slide"
			>
				<OverlayTrigger
					trigger={['hover', 'focus']}
					placement="top"
					overlay={photoInfo({
						src,
						caption,
						commentCount,
						likeCount,
						createdAt
					})}
				>
					<a href={link} className="thumbnail">
						<Image src={src} responsive />
						<div className="caption">
							<h4 className="text-center">
								{user.username}
							</h4>
						</div>
					</a>
				</OverlayTrigger>
			</div>
		);
	}
}

export default Photo;
