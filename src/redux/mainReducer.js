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
    userSession: false,
    currentUser: {},
    userData: {},
    unsplashUser: {},
    sessionLikes: []
}

const GET_NEW_PHOTOS = 'GET_NEW_PHOTOS';
const GET_NEW_PHOTOS_PENDING = 'GET_NEW_PHOTOS_PENDING';
const GET_NEW_PHOTOS_FULFILLED = 'GET_NEW_PHOTOS_FULFILLED';
const GET_TRENDING_PHOTOS = 'GET_TRENDING_PHOTOS';
const GET_TRENDING_PHOTOS_PENDING = 'GET_TRENDING_PHOTOS_PENDING';
const GET_TRENDING_PHOTOS_FULFILLED = 'GET_TRENDING_PHOTOS_FULFILLED';

const SET_LAYOUT_TILE = 'SET_LAYOUT_TILE';
const SET_LAYOUT_LIST = 'SET_LAYOUT_LIST';

const SET_VIEW_WIDTH = 'SET_VIEW_WIDTH';

const GET_USER = 'GET_USER';
const GET_USER_PENDING = 'GET_USER_PENDING';
const GET_USER_FULFILLED = 'GET_USER_FULFILLED';
const UPDATE_USER = 'UPDATE_USER';
const UPDATE_USER_PENDING = 'UPDATE_USER_PENDING';
const UPDATE_USER_FULFILLED = 'UPDATE_USER_FULFILLED';
const GET_USER_DATA = 'GET_USER_DATA';
const GET_USER_DATA_PENDING = 'GET_USER_DATA_PENDING';
const GET_USER_DATA_FULFILLED = 'GET_USER_DATA_FULFILLED';
const GET_UNSPLASH_USER = 'GET_UNSPLASH_USER';
const GET_UNSPLASH_USER_PENDING = 'GET_UNSPLASH_USER_PENDING';
const GET_UNSPLASH_USER_FULFILLED = 'GET_UNSPLASH_USER_FULFILLED';



//---------------------------USER

export function getCurrentUser() {
    return {
        type: GET_USER,
        payload: axios.get("/api/user")
    }
}

export function updateUser(body) {
    let id = body.id;
    return {
        type: UPDATE_USER,
        payload: axios.put(`/api/user/${id}`, body)
    }
}

export function getUserData(id) {
    console.log('action: retrieving user data')
    return {
        type: GET_USER_DATA,
        payload: axios.get(`/api/user/${id}`)
    }
}

export function getUnsplashUser(username) {
    console.log('action: retrieving unsplash user')
    return {
        type: GET_UNSPLASH_USER,
        payload: axios.get(`https://api.unsplash.com/users/${username}?client_id=${clientID}`)
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








//--------------------------REDUCER-------------

export default function reducer(state=initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case GET_TRENDING_PHOTOS_PENDING:
            return state;
        case GET_TRENDING_PHOTOS_FULFILLED:
            console.log('"TRENDING" request fulfilled.')
            return Object.assign(
                {},
                state,
                {Trending: [...state.Trending, ...action.payload.data]}
            );            
        case GET_NEW_PHOTOS_PENDING:
            return state;
        case GET_NEW_PHOTOS_FULFILLED:
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
        case GET_USER_PENDING:
            console.log('get user pending')
            return state;
        case GET_USER_FULFILLED:
            console.log('current user request: ', action.payload)
            if (!action.payload.data.authid) {
                return state;
            }
            else {
                return Object.assign(
                    {},
                    state,
                    {
                        userSession: true,
                        currentUser: action.payload.data
                    }
                )
            };
        case UPDATE_USER_PENDING:
            console.log('update user pending')
            return state;
        case UPDATE_USER_FULFILLED:
            console.log('update user fulfilled: ', action.payload.data);
            return Object.assign(
                {},
                state,
                {
                    userData: action.payload.data[0]
                }
            );
        case GET_USER_DATA_PENDING:
            console.log('user data pending')
            return state;
        case GET_USER_DATA_FULFILLED:
            console.log('user data fulfilled:', action.payload);
        case GET_UNSPLASH_USER_PENDING:
            console.log('get unsplash user pending')
            return state;
        case GET_UNSPLASH_USER_FULFILLED:
            console.log('unsplash user fulfilled: ', action.payload)
        default:
            return state;
    }
}