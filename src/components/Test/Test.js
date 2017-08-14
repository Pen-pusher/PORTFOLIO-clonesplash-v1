import React from 'react';
import axios from 'axios';
import {addNewPhotos} from './../../redux/mainReducer';
import {connect} from 'react-redux';


const runGet = () => {
    console.log(this.props)
    addNewPhotos(1)
}


const Test = () => {

    return(
        <main>
            <br />
            <br />
            <h1>asdf</h1>
            <br />
            <br/ >

            <button onClick={runGet}>Test API</button>
        </main>
    )
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {addNewPhotos})(Test);