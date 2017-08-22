import React from 'react';
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

const Photo = ({
	user,
	link,
	src,
	caption,
	commentCount,
	likeCount,
	createdAt
}) =>
	<div className="col-sm-4 col-md-3 col-lg-2">
		<OverlayTrigger
			trigger={['hover', 'focus']}
			placement="top"
			overlay={photoInfo({ src, caption, commentCount, likeCount, createdAt })}
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
	</div>;

export default Photo;
