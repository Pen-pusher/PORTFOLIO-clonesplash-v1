import {newPhotos} from './un-data-new'

const initialState = {
    dummyData: newPhotos,
    currentUser: {},
    sessionLikes: [],

}




export default function reducer(state=initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}