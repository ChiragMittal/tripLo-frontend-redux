import * as ACTION from '../../constants'

const initialState = {
	cartVisible: false,
	destinations: [],
	index: 0,
	id: 0,
	name: '',
	query: '',
	suggestion: [],
	map: []
}

export default function Destination(state = initialState, action) {
	switch (action.type) {
		case ACTION.RECEIVE_DATA:
			return Object.assign({}, state, {
				destinations: action.payload.destination
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
				suggestion: action.payload.suggestion
			})
		case ACTION.RECEIVEMAP_DATA:
			console.log('map data')
			return Object.assign({}, state, {
				map: action.payload.map
			})

		default:
			return state
	}
}
