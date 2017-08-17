import React from 'react';
import {connect} from 'react-redux';
import LandingRender from './LandingRender';

const classHidden = {
    "display":"none"
}

const LandingNew = function(props) {
    return(
        <main className="landing-wrapper">
            <div className="welcome-wrapper">
                <h1>Unsplash</h1>
                <div>
                    <h2>Beautiful, free photos.<br />
                        Gifted by the world’s most generous community of photographers. 🎁
                    </h2>
                    <div className="landing-submit-photo" style={props.userSession ? classHidden : null}>
                        <a className="landing-submit-photo-anchor" href="#">
                            Submit a photo
                        </a>
                    </div>                    
                </div>
            </div>
            <LandingRender view={'New'} />
        </main>
    )
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(LandingNew);