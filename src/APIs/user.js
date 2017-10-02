import axios from 'axios';


export const recieveInfo = (username, token) => {
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