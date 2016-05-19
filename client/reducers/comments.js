// a reducer takes an action (what happened) and a copy of current state
function postComments(state = [], action) {
	switch(action.type){
		case 'ADD_COMMENT':
			// return new state and comment
			return [...state,{
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT':
			// need to return new state without comment
			return [
				...state.slice(0, action.i),
				...state.slice(action.i + 1)
			]
		default:
			return state;
	}
	return state;
}

function comments(state = [], action) {
	if(typeof action.postId !== 'undefined') {
		return {
			// take current state
			...state,
			// overwrite this post
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state;
}

export default comments;