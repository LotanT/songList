

export function setSongList(songList) {
    return async (dispatch) => {
        try {
            // const user = await userService.login(credentials)
            dispatch({
                type: 'SET_SONGLIST',
                songList
            })
        } catch (err) {
            console.log('Cannot set song list', err)
        }
    }
}

// export function onSignup(songList) {
//     return async (dispatch) => {
//         try {
//             // const user = await userService.signup(credentials)
//             dispatch({
//                 type: 'SET_SONGLIST',
//                 songList
//             })
//         } catch (err) {
//             console.log('Cannot signup', err)
//         }

//     }
// }
