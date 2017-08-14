import React from 'react';
import axios from 'axios';
import {addNewPhotos} from './../../redux/mainReducer';
import {connect} from 'react-redux';


const runGet = () => {
    // this.props.addNewPhotos()
}


const Test = (props) => {
    // props.addNewPhotos(3)
    console.log(props)
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