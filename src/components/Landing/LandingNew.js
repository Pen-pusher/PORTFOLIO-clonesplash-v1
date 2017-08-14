import React from 'react';
import LandingRender from './LandingRender';


export default function() {
    return(
        <main className="landing-wrapper">
            <div className="welcome-wrapper">
                <h1>Unsplash</h1>
                <div>
                    <h2>Beautiful, free photos.<br />
                        Gifted by the world’s most generous community of photographers. 🎁
                    </h2>
                    <div className="landing-submit-photo">
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