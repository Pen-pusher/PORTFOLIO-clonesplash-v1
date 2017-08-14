import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import TilePhotoCard from './../Cards/TilePhotoCard';
 

class LandingRender extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowWidth: 3,
            activeToggle:'Trending',
            activeLayout:'Tile',
            photoArrays: [[],[],[]]
        }


        this.trackDimensions = this.trackDimensions.bind(this);
        this.parseData = this.parseData.bind(this);
    }

    trackDimensions() {
        if (window.innerWidth < 768) {
            this.setState({
                windowWidth: 1,
            })
        }
        else if (window.innerWidth < 1000) {
            this.setState({
                windowWidth: 2
            })
        }
        else {
            this.setState({
                windowWidth: 3
            })
        }
        let content = this.state.activeToggle;
        this.parseData(this.props.dummyData[content], this.state.windowWidth)
    }

    componentDidMount() {
        console.log(window.location.href)
        this.setState({activeToggle:this.props.view})
        window.addEventListener("load", this.trackDimensions)
        window.addEventListener("resize", this.trackDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.trackDimensions)
        window.removeEventListener("load", this.trackDimensions)
    }

    parseData(arr, count) {
        let finalArray = [[],[],[]]
        if (count === 3) {
            let i1 = 0;
            let i2 = 1;
            let i3 = 2;
            for (let n=0; n < arr.length / 3; n++) {
            finalArray[0].push(arr[i1]);
            i1+=3;
            }
            for (let n=0; n < arr.length / 3; n++) {
            finalArray[1].push(arr[i2]);
            i2+=3;
            }
            for (let n=0; n < arr.length / 3; n++) {
            finalArray[2].push(arr[i3]);
            i3+=3;
            }
        }
        else if (count === 2) {
            let i1 = 0;
            let i2 = 1;
            for (let n=0; n < arr.length / 2; n++) {
            finalArray[0].push(arr[i1]);
            i1+=2;
            }
            for (let n=0; n < arr.length / 2; n++) {
            finalArray[1].push(arr[i2]);
            i2+=2;
            }
        }
        else {
            finalArray[0] = arr;
        }
        this.setState({
            photoArrays: finalArray
        })
    }



    render() {

        const renderListOne = this.state.photoArrays[0].map(item => {
            return <TilePhotoCard 
                key={item.id}
                photographer={item.user.name}
                profilePic={item.user.profile_image.small}
                imgUrl={item.urls.small}
                likes={item.likes}
                download={item.links.download}
                />
        })
        const renderListTwo = this.state.photoArrays[1].map(item => {
            return <TilePhotoCard 
                key={item.id}
                photographer={item.user.name}
                profilePic={item.user.profile_image.small}
                download={item.links.download}
                likes={item.likes}
                imgUrl={item.urls.small}

                />
        })
        const renderListThree = this.state.photoArrays[2].map(item => {
            return <TilePhotoCard 
                key={item.id}
                photographer={item.user.name}
                profilePic={item.user.profile_image.small}
                imgUrl={item.urls.small}
                likes={item.likes}
                download={item.links.download}

                />
        })

        const threeColumns = {
            "width": "calc(33.33% - 16px)",
        }

        const twoColumns = {
            "width": "calc(50% - 16px)",            
        }

        const hideDisplay = {
            "display": "none"
        }

        const activeAnchor = {
            "color":"#111111"
        }

        return(
            <main className="landing-render-wrapper">
                <nav className="landing-render-nav">
                    <span className="landing-render-content-selectors">
                        <div className="lrcs-div">
                            <a className="landing-render-content-anchor lrca-trending"
                                href="/"
                                style={this.state.activeToggle === 'Trending' ? activeAnchor : null}
                                >
                                Trending
                            </a>
                            <a className="landing-render-content-anchor lrca-new"
                                href="/new"
                                style={this.state.activeToggle === 'New' ? activeAnchor : null}
                                >
                                New
                            </a>
                        </div>
                    </span>
                    <span className="landing-render-layout-selectors">
                        <div className="lrls-div">
                            <button className="lrls-button">
                                <svg version="1.1" viewBox="0 0 32 32" width="18" height="18" aria-hidden="false">
                                    <path d="M30 14c1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2h-28c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2m0 18c-1.1 0-2-.9-2-2v-10c0-1.1.9-2 2-2h28c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2"></path>
                                </svg>
                            </button>
                            <button className="lrls-button">
                                <svg version="1.1" viewBox="0 0 32 32" width="18" height="18" aria-hidden="false" style={this.state.activeLayout === 'Tile' ? activeAnchor : null}>
                                    <path d="M0 2v10c0 1.106 0.896 2 2 2h10c1.104 0 2-0.894 2-2v-10c0-1.106-0.896-2-2-2h-10c-1.104 0-2 0.894-2 2zM2 18c-1.104 0-2 0.894-2 2v10c0 1.106 0.896 2 2 2h10c1.104 0 2-0.894 2-2v-10c0-1.106-0.896-2-2-2h-10zM20 18c-1.106 0-2 0.894-2 2v10c0 1.106 0.894 2 2 2h10c1.106 0 2-0.894 2-2v-10c0-1.106-0.894-2-2-2h-10zM20 0c-1.106 0-2 0.894-2 2v10c0 1.106 0.894 2 2 2h10c1.106 0 2-0.894 2-2v-10c0-1.106-0.894-2-2-2h-10z"></path>
                                </svg>
                            </button>
                        </div>
                    </span>
                </nav>
                <div className="landing-content-wrapper">
                    <div className="lcw-div" style={this.state.windowWidth < 3 ? twoColumns : threeColumns}>
                        {renderListOne}
                    </div>
                    <div className="lcw-div" style={this.state.windowWidth < 3 ? twoColumns : threeColumns}>
                        {renderListTwo}
                    </div>                    
                    <div className="lcw-div" style={threeColumns} style={this.state.windowWidth < 3 ? hideDisplay : null}>
                        {renderListThree}
                    </div>                    
                </div>
            </main>
        )
    }
}


function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps)(LandingRender);