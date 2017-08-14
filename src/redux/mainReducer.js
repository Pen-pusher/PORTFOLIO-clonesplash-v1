import {newPhotos} from './dummyData/un-data-new';
import {trendingPhotos} from './dummyData/un-data-trending';
import {photoData} from './dummyData/un-data-photo';
import {userData} from './dummyData/un-data-user';
import {getNewPhotos} from './../services/axiosServices';
import axios from 'axios';
import {clientID} from './../trip/explashID';


const initialState = {
    dummyData: {
        New: newPhotos,
        Trending: trendingPhotos,
        photo: photoData,
        user: userData
    },
    currentUser: {},
    sessionLikes: [],
}

const GET_NEW_PHOTOS = 'GET_NEW_PHOTOS';


export function addNewPhotos(page) {
    console.log('asdf')
    return {
        type: 'GET_NEW_PHOTOS',
        payload: axios.get(`https://api.unsplash.com/photos/?page=${page}&per_page=30&client_id=${clientID}`)
                .then(res => {
                    return res;
                })
    }
}

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case 'GET_NEW_PHOTOS_PENDING':
            return console.log('pending...')
        case 'GET_NEW_PHOTOS':
            console.log(state.dummyData.New);
            return Object.assign(
                {},
                state,
                {DummyData: {New: [...state.dummyData.New, action.payload]}}
            );
        default:
            return state;
    }
}