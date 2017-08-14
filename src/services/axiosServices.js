import axios from 'axios';
import {clientID} from './../trip/explashID';

export const getNewPhotos = (page) => {
    axios.get(`https://api.unsplash.com/photos/?page=${page}&per_page=30&client_id=${clientID}`)
    .then(res => {
        console.log(res)
        return res
    })
}