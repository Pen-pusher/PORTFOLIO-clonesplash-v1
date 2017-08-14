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
    New: [],
    Trending: [],
    currentUser: {},
    sessionLikes: [],
}

const GET_NEW_PHOTOS = 'GET_NEW_PHOTOS';
const GET_TRENDING_PHOTOS = 'GET_TRENDING_PHOTOS';


export function addTrendingPhotos(page) {
    return {
        type: GET_TRENDING_PHOTOS,
        payload: axios.get(`https://api.unsplash.com/photos/?page=${page}&per_page=30&order_by=popular&client_id=${clientID}`)
    }
}

export function addNewPhotos(page) {
    return {
        type: GET_NEW_PHOTOS,
        payload: axios.get(`https://api.unsplash.com/photos/?page=${page}&per_page=30&client_id=${clientID}`)
    }
}

export default function reducer(state=initialState, action) {
        console.log(action.type);
    switch (action.type) {
        case 'GET_TRENDING_PHOTOS_PENDING':
            return state;
        case 'GET_TRENDING_PHOTOS_FULFILLED':
            console.log('"TRENDING" request fulfilled.')
            return Object.assign(
                {},
                state,
                {Trending: [...state.Trending, ...action.payload.data]}
            );            
        case 'GET_NEW_PHOTOS_PENDING':
            return state;
        case 'GET_NEW_PHOTOS_FULFILLED':
            console.log('"NEW" request fulfilled.')
            console.log(action.payload.data)
            return Object.assign(
                {},
                state,
                {New: [...state.New, ...action.payload.data]}
            );
        default:
            return state;
    }
}