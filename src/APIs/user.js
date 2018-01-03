import axios from 'axios';


export const recieveInfo = (username, token, target) => {
    return new Promise((resolve, reject) => {

        var user = {
            username: '@Cmittal',
            picpath: '../../public/img/13332864_10206800296946966_2355546499428281173_n.jpg',
            fname: 'Chirag',
            lname: 'Mittal',
            dob: '11-March-1997',
            info: 'Blaaaaaaaaaa',
            follow_count: 10,
            following_count: 10,
            favourites_count: 10,
            destination_categories: ['Delhi', 'Mumbai']
        }


        resolve({
            success: true,
            info: user
        })
    })
}

export const recievePost = (username, token, target) => {
    return new Promise((resolve, reject) => {
        var posts = [
            {
                id: 88,
                post: "The trip could have been better if more people are going 😞",
                type: 0,
                pic: null,
                username: "admin21",
                created_at: "2017-01-12T17:53:38.000Z",
                updated_at: "0000-00-00 00:00:00",
                public_bool: 1,
                foreignId: null,
                foreignContent: null,
                placeTypeTag: "country",
                placeKeyTag: "India",
                likes: 1241,
                liked: true
            },
            {
                id: 83,
                post: "blablabla",
                type: 0,
                pic: null,
                username: "admin21",
                created_at: "2017-01-07T03:12:29.000Z",
                updated_at: "0000-00-00 00:00:00",
                public_bool: 1,
                foreignId: null,
                foreignContent: null,
                placeTypeTag: "country",
                placeKeyTag: "India",
                likes: 1246,
                liked: true
            },
            {
                id: 82,
                post: "blablabla",
                type: 0,
                pic: null,
                username: "admin21",
                created_at: "2017-01-07T03:11:43.000Z",
                updated_at: "0000-00-00 00:00:00",
                public_bool: 1,
                foreignId: null,
                foreignContent: null,
                placeTypeTag: "country",
                placeKeyTag: "India",
                likes: 1248,
                liked: false
            },
            {
                id: 81,
                post: "blablabla",
                type: 0,
                pic: null,
                username: "admin21",
                created_at: "2017-01-07T03:11:08.000Z",
                updated_at: "0000-00-00 00:00:00",
                public_bool: 1,
                foreignId: null,
                foreignContent: null,
                placeTypeTag: "country",
                placeKeyTag: "India",
                likes: 1247,
                liked: false
            }
        ];

        resolve({
            success: true,
            post: posts
        })
    })
}

export const createPost = (post) => {
    return new Promise((resolve, reject) => {

        var single =
            {
                id: 70,
                post: post,
                type: 0,
                pic: null,
                username: "admin21",
                created_at: "2017-01-07T03:11:08.000Z",
                updated_at: "0000-00-00 00:00:00",
                public_bool: 1,
                foreignId: null,
                foreignContent: null,
                placeTypeTag: "country",
                placeKeyTag: "India",
                likes: 124,
                liked: true
            }

        resolve({
            success: true,
            post: single
        })
    })
}

export const likePost = (id) => {
    return new Promise((resolve, reject) => {

        var post_like = 12;


        resolve({
            success: true,
            post_id: id,
            post_like: post_like
        })
    })
}

