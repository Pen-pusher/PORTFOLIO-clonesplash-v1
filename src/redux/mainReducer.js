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
    photoLayout: 'Tile',
    windowWidth: 3,
    currentUser: {},
    sessionLikes: []
}

const GET_NEW_PHOTOS = 'GET_NEW_PHOTOS';
const GET_TRENDING_PHOTOS = 'GET_TRENDING_PHOTOS';

const SET_LAYOUT_TILE = 'SET_LAYOUT_TILE';
const SET_LAYOUT_LIST = 'SET_LAYOUT_LIST';

const SET_VIEW_WIDTH = 'SET_VIEW_WIDTH';

const GET_USER = 'GET_USER';



//---------------------------USER

export function getCurrentUser() {
    return {
        type: GET_USER,
        payload: axios.get("/api/user")
    }
}



//----------------------------LAYOUT

export function layoutTile() {
    return {
        type: SET_LAYOUT_TILE,
        payload: 'Tile'
    }
}

export function layoutList() {
    return {
        type: SET_LAYOUT_LIST,
        payload: 'List'
    }
}








//---------------------------WINDOW WIDTH

export function setViewWidth(num) {
    return {
        type: SET_VIEW_WIDTH,
        payload: num
    }
}










//----------------------------API ACTIONS

export function addTrendingPhotos(page) {
    return {
        type: GET_TRENDING_PHOTOS,
        payload: axios.get(`https://api.unsplash.com/photos/?page=${page}&order_by=trending&per_page=30&client_id=${clientID}`)
    }
}

export function addNewPhotos(page) {
    return {
        type: GET_NEW_PHOTOS,
        payload: axios.get(`https://api.unsplash.com/photos/?page=${page}&per_page=30&client_id=${clientID}`)
    }
}






export default function reducer(state=initialState, action) {
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
        case SET_VIEW_WIDTH:
            return Object.assign(
                {},
                state,
                {windowWidth: action.payload}
            )
        case SET_LAYOUT_LIST:
            return Object.assign(
                {},
                state,
                {photoLayout: action.payload}
            );
        case SET_LAYOUT_TILE:
            return Object.assign(
                {},
                state,
                {photoLayout: action.payload}
            );
        case 'GET_USER_PENDING':
            console.log('get user pending')
            return state;
        case 'GET_USER_FULFILLED':
            console.log('current user request: ', action.payload)
            return Object.assign(
                {},
                state,
                {currentUser: action.payload.data}
            );
        default:
            return state;
    }
}