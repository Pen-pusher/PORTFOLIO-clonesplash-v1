import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

import TilePhotoCard from './../Cards/TilePhotoCard';
import ListPhotoCard from './../Cards/ListPhotoCard';
import MobilePhotoCard from './../Cards/MobilePhotoCard';
import {addNewPhotos,
        addTrendingPhotos,
        layoutTile,
        layoutList,
        setViewWidth,} from './../../redux/mainReducer';
import {clientID} from './../../trip/explashID'; 

class LandingRender extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowWidth: 3,
            activeToggle:'Trending',
            photoArrays: [[],[],[]],
            allPhotos: [],
            pages: 1
        }

        this.trackDimensions = this.trackDimensions.bind(this);
        this.parseData = this.parseData.bind(this);
        this.handleLayoutTile = this.handleLayoutTile.bind(this);
        this.handleLayoutList = this.handleLayoutList.bind(this);
    }

    trackDimensions() {
        if (window.innerWidth < 768) {
            this.props.setViewWidth(1)
        }
        else if (window.innerWidth < 1000) {
            this.props.setViewWidth(2)            
        }
        else {
            this.props.setViewWidth(3)
        }
        let content = this.props.view;
        this.parseData(this.props.dummyData[content], this.props.windowWidth)
        // this.parseData(this.props[content], this.state.windowWidth)
    }

    componentDidMount() {
        let content = this.props.view;
        if(content === 'Trending') {
            let nextPage = this.state.pages
            // this.props.addTrendingPhotos(nextPage)
            this.parseData(this.props.dummyData[content], this.props.windowWidth)
            nextPage++
            this.setState({pages: nextPage})
        }
        if(content === 'New') {
            let nextPage = this.state.pages
            // this.props.addNewPhotos(nextPage)
            this.parseData(this.props.dummyData[content], this.props.windowWidth)
            nextPage++
            this.setState({pages: nextPage})
        }       
        this.setState({activeToggle:this.props.view})
        window.addEventListener("load", this.trackDimensions)
        window.addEventListener("resize", this.trackDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.trackDimensions)
        window.removeEventListener("load", this.trackDimensions)
    }

    componentWillReceiveProps(nextProps) {
        let content = this.props.view;
        let num = this.props.windowWidth;
        this.parseData(nextProps.dummyData[content], num)
        // this.parseData(nextProps[content], num)
    }

    parseData(arr, count) {
        if (arr.length) {
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
            this.setState({
                photoArrays: finalArray,
                allPhotos: arr
            })
        }
    }

    handleLayoutTile() {
        this.props.layoutTile()
    }

    handleLayoutList() {
        this.props.layoutList()
    }




    render() {

        const renderListMobile = this.state.allPhotos.map(item => {
            return <MobilePhotoCard
                key={item.id}
                photographer={item.user.name}
                username={item.user.username}
                profilePic={item.user.profile_image.small}
                imgUrl={item.urls.regular}
                likes={item.likes}
                liked={item.liked_by_user}
                download={item.links.download}
                />
        })
        

        const renderListOne = this.state.photoArrays[0].map(item => {
            return <TilePhotoCard 
                key={item.id}
                photographer={item.user.name}
                username={item.user.username}
                profilePic={item.user.profile_image.small}
                imgUrl={item.urls.small}
                likes={item.likes}
                liked={item.liked_by_user}
                download={item.links.download}
                />
        })
        const renderListTwo = this.state.photoArrays[1].map(item => {
            return <TilePhotoCard 
                key={item.id}
                photographer={item.user.name}
                username={item.user.username}
                profilePic={item.user.profile_image.small}
                likes={item.likes}
                liked={item.liked_by_user}
                imgUrl={item.urls.small}
                download={item.links.download}

                />
        })
        const renderListThree = this.state.photoArrays[2].map(item => {
            return <TilePhotoCard 
                key={item.id}
                photographer={item.user.name}
                username={item.user.username}
                profilePic={item.user.profile_image.small}
                imgUrl={item.urls.small}
                likes={item.likes}
                liked={item.liked_by_user}
                download={item.links.download}
                />
        })

        const renderListAll = this.state.allPhotos.map(item => {
            return <ListPhotoCard 
                key={item.id}
                photographer={item.user.name}
                username={item.user.username}
                profilePic={item.user.profile_image.small}
                imgUrl={item.urls.full}
                likes={item.likes}
                liked={item.liked_by_user}
                download={item.links.download}
                />            
        })

        const threeColumns = {
            "width": "calc(33.33% - 16px)"
        }

        const twoColumns = {
            "width": "calc(50% - 16px)"          
        }

        const mobileColumn = {
            "width": "calc(100% - 16px)"
        }

        const tileColumn = {
            "width": "calc(100% - 16px)"            
        }

        const hideDisplay = {
            "display": "none"
        }

        const activeAnchor = {
            "color":"#111111"
        }

        const setColumnStyleOne = () => {
            if (this.props.windowWidth === 3) {
                return threeColumns;
            }
            else if(this.props.windowWidth === 2){
                return twoColumns;
            }
            return mobileColumn;
        }
        const setColumnStyleTwo = () => {
            if (this.props.windowWidth === 3) {
                return threeColumns;
            }
            else if(this.props.windowWidth === 2){
                return twoColumns;
            }
            return hideDisplay;
        }

        const renderTileJSX = () => {
            if (this.props.windowWidth === 1) {
                return (
                <div className="landing-content-wrapper">                       
                    <div className="lcw-div" 
                        style={mobileColumn}>
                        {renderListMobile}
                    </div>
                </div>                    
                )
            }
            return (
                <div className="landing-content-wrapper">                       
                    <div className="lcw-div" 
                        style={setColumnStyleOne()}
                        >
                        {this.props.windowWidth === 1 ? renderListMobile : renderListOne}
                    </div>
                    <div className="lcw-div" 
                        style={setColumnStyleTwo()} 
                        >
                        {renderListTwo}
                    </div>                    
                    <div className="lcw-div" style={threeColumns} style={this.props.windowWidth < 3 ? hideDisplay : null}>
                        {renderListThree}
                    </div>
                </div>
            )
        }

        const renderListJSX = () => {
            return (
                <div className="landing-content-wrapper">                       
                    <div className="lcw-div" 
                        style={tileColumn}
                        >
                        {this.props.windowWidth === 1 ? renderListMobile : renderListAll}
                    </div>
                </div>
            )
        }

        return(
            <main className="landing-render-wrapper">
                <nav className="landing-render-nav">
                    <span className="landing-render-content-selectors">
                        <div className="lrcs-div">
                            <Link className="landing-render-content-anchor" to="/">
                                <a className="landing-render-content-anchor lrca-trending"
                                    href="/"
                                    style={this.state.activeToggle === 'Trending' ? activeAnchor : null}
                                    >
                                    Trending
                                </a>
                            </Link>
                            <Link className="landing-render-content-anchor" to="/new">
                                <a className="landing-render-content-anchor lrca-new"
                                    style={this.state.activeToggle === 'New' ? activeAnchor : null}
                                    >
                                    New
                                </a>
                            </Link>
                        </div>
                    </span>
                    <span className="landing-render-layout-selectors">
                        <div className="lrls-div">
                            <button 
                                className="lrls-button"
                                style={this.props.photoLayout === 'List' ? activeAnchor : null}
                                onClick={this.handleLayoutList}>
                                <svg version="1.1" viewBox="0 0 32 32" width="18" height="18" aria-hidden="false">
                                    <path d="M30 14c1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2h-28c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2m0 18c-1.1 0-2-.9-2-2v-10c0-1.1.9-2 2-2h28c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2"></path>
                                </svg>
                            </button>
                            <button
                                className="lrls-button"
                                style={this.props.photoLayout === 'Tile' ? activeAnchor : null}
                                onClick={this.handleLayoutTile}>
                                <svg version="1.1" viewBox="0 0 32 32" width="18" height="18" aria-hidden="false">
                                    <path d="M0 2v10c0 1.106 0.896 2 2 2h10c1.104 0 2-0.894 2-2v-10c0-1.106-0.896-2-2-2h-10c-1.104 0-2 0.894-2 2zM2 18c-1.104 0-2 0.894-2 2v10c0 1.106 0.896 2 2 2h10c1.104 0 2-0.894 2-2v-10c0-1.106-0.896-2-2-2h-10zM20 18c-1.106 0-2 0.894-2 2v10c0 1.106 0.894 2 2 2h10c1.106 0 2-0.894 2-2v-10c0-1.106-0.894-2-2-2h-10zM20 0c-1.106 0-2 0.894-2 2v10c0 1.106 0.894 2 2 2h10c1.106 0 2-0.894 2-2v-10c0-1.106-0.894-2-2-2h-10z"></path>
                                </svg>
                            </button>
                        </div>
                    </span>
                </nav>
                {this.props.photoLayout === 'Tile' ?
                    renderTileJSX() :
                    renderListJSX()
                }
                {/* <div className="landing-content-wrapper">                       
                    <div className="lcw-div" 
                        style={setColumnStyleOne()}
                        >
                        {this.state.windowWidth === 1 ? renderListMobile : renderListOne}
                    </div>
                    <div className="lcw-div" 
                        style={setColumnStyleTwo()} 
                        >
                        {renderListTwo}
                    </div>                    
                    <div className="lcw-div" style={threeColumns} style={this.state.windowWidth < 3 ? hideDisplay : null}>
                        {renderListThree}
                    </div>
                </div> */}
            </main>
        )
    }
}


function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps, {addNewPhotos, addTrendingPhotos, layoutTile, layoutList, setViewWidth})(LandingRender);