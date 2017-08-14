import {newPhotos} from './un-data-new';
import {trendingPhotos} from './un-data-trending';

const initialState = {
    dummyData: {
        New: newPhotos,
        Trending: trendingPhotos
    },
    currentUser: {},
    sessionLikes: [],

}




export default function reducer(state=initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}