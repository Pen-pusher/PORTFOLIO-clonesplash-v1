import React from 'react';
import {connect} from 'react-redux';
import {getUserData, getUnsplashUser} from './../../redux/mainReducer';


const PublicProfile = function(props) {
    let user = props.unsplashUser.name
    console.log('profile component loaded')
    if(!props.unsplashUser.name || props.unsplashUser.username !== props.match.params.id) {
        if(props.match.params.id === props.currentUser.username || props.match.params.id === props.userData.username) {
            console.log('getting current user')
            props.getUserData(props.currentUser.authid)
        }
        else {
            console.log('getting unsplash user')
            props.getUnsplashUser(props.match.params.id)
            user = props.unsplashUser
        }
        console.log('user objects not empty')
    }

    return(
        <main className="public-profile-wrapper">
            <div>
                <p>asdf</p><br /><br /><br /><br />
                Hello
                {user.name}
            </div>
        </main>
    )
}

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps, {getUserData, getUnsplashUser})(PublicProfile);