import * as ACTION from '../../constants'

const initialState = {
    img: '',
    info: {},
    post: [],

}

export default function User(state = initialState, action) {
    switch (action.type) {
        case ACTION.ADD_PHOTO:
            return Object.assign({}, state, {
                img: action.payload.img
            })
        case ACTION.DEL_PHOTO:
            return Object.assign({}, state, {
                img: ''
            })
        case ACTION.EDIT_INFO:
            return Object.assign({}, state, {
                info: action.payload.info
            })
        case ACTION.RECIEVE_INFO:
            return Object.assign({}, state, {
                info: action.payload.info,
                img: action.payload.info.picPath
            })
        case ACTION.LOAD_POST:
            return Object.assign({}, state, {
                post: action.payload.post
            })
        case ACTION.CREATE_POST:
            console.log(action.payload.post)
            return Object.assign({}, state, {
                post: [action.payload.post, ...state.post]

            })

        case ACTION.LIKED:
            var new_post = state.post
            // searching index of a post with a specific post_id
            for (var i = 0; i < new_post.length; i++) {
                if (new_post[i].id == action.payload.post_id)
                    break
            }

            new_post[i].likes = action.payload.post_like
            new_post[i].liked = !new_post[i].liked
            return Object.assign({}, state, {
                post: new_post
            })

        default:
            return state
    }
}
