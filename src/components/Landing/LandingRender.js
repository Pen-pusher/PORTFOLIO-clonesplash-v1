import React, {Component} from 'react';


class LandingRender extends Component {
    constructor(props) {
        super(props)


    }

    render() {
        return(
            <main className="landing-render-wrapper">
                <nav className="landing-render-nav">
                    <span className="landing-render-content-selectors">
                        <a className="landing-render-content-anchor">
                            Trending
                        </a>
                        <a className="landing-render-content-anchor">
                            New
                        </a>
                    </span>
                </nav>
            </main>
        )
    }
}