import React from 'react';
import Photo from './Photo';
// import comments




const Single = React.createClass({
	render() {
		const { postId } = this.props.params;
		const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
		console.log(postId);
		return (
			<div className="single-photo">
			I am the single
			</div>
		)
	}
});

export default Single;