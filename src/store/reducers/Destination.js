import * as ACTION from '../../actions/fluxcartActions'

const initialState = {
	cartVisible: false,
	destination: null,
	index: null,
	id: null,
	name: null,
	query: null,
	suggestion: null,
	map: null
}

export default function Destination(state = initialState, action) {
	switch (action.type) {
		case ACTION.RECEIVE_DATA:
			return Object.assign({}, state, {
				destination: action.payload.data
			})
		case ACTION.SELECT_PRODUCT:
			return Object.assign({}, state, {
				index: action.payload.index
			})
		case ACTION.CART_ADD:
			return Object.assign({}, state, {
				id: action.payload.id,
				name: action.payload.name
			})
		case ACTION.CART_REMOVE:
			return Object.assign({}, state, {
				name: action.payload.name
			})
		case ACTION.CART_VISIBLE:
			return Object.assign({}, state, {
				cartVisible: true
			})
		case ACTION.CART_DESTINATIONHOT_SEARCH:
			return Object.assign({}, state, {
				query: action.payload.query
			})
		case ACTION.DESTINATIONHOT_SEARCHFETCH:
			return Object.assign({}, state, {
				suggestion: action.payload.data
			})
		case ACTION.RECEIVEMAP_DATA:
			return Object.assign({}, state, {
				map: action.payload.data
			})

		default:
			return state
	}
}
