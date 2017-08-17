import React from 'react';
import {connect} from 'react-redux';
import {getUserData, getUnsplashUser} from './../../redux/mainReducer';

const PublicProfile = function(props) {
    console.log('profile component loaded')
    if(props.match.params.id === props.currentUser.username || props.userData.username) {
        console.log('getting current user')
        props.getUserData(props.currentUser.authid)
    }
    else {
        console.log('getting unsplash user')
        props.getUnsplashUser(props.match.params.id)
    }
    return(
        <main className="public-profile-wrapper">
            <div>
                <p>asdf</p><br /><br /><br /><br />
                Hello
            </div>
        </main>
    )
}

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps, {getUserData, getUnsplashUser})(PublicProfile);