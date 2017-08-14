import React, {Component} from 'react';
import {Button, Popup} from 'semantic-ui-react';


class TilePhotoCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mouseOver: false
        }

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }


    handleMouseEnter() {
        this.setState({
            mouseOver: true
        })
    }

    handleMouseLeave() {
        this.setState({
            mouseOver: false
        })
    }

    render() {


        console.log(this.state.mouseOver)
        const classHidden = {
            "display": "none"
        }


        return(
            <main 
                className="tile-card-wrapper"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <div className="tlw-div">
                    <a href="#" className="tc-photo-anchor">
                        <img className="tile-card-img" src={this.props.imgUrl}/>
                    <div className="tc-top-wrapper" style={this.state.mouseOver ? null : classHidden}>
                        <div className="tc-collections-div">
                            <a href="#" className="tc-collections-anchor">
                                <svg version="1.1" viewBox="0 0 32 32" width="16" height="16" aria-hidden="false">
                                    <path d="M14 3h4v26h-4zM29 14v4h-26v-4z"></path>
                                </svg>
                                <span>Collect</span>
                            </a>
                        </div>
                        <div className="tc-likes-div">
                            <a href="#" className="tc-likes-anchor">
                                <svg version="1.1" viewBox="0 0 32 32" width="16" height="16" aria-hidden="false">
                                    <path fill="#F15151" d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path>
                                </svg>
                                <span>{this.props.likes}</span>
                            </a>
                        </div>
                    </div>
                    <div className="tc-bottom-wrapper">
                        <div className="tc-user-div" style={this.state.mouseOver ? null : classHidden}>
                            <a href="#">
                                     <div className="tc-profile-pic">
                                        <img src={this.props.profilePic} />
                                    </div> 
                            </a>
                            <a href="#">
                                <span>
                                        {this.props.photographer}
                                </span>
                            </a>
                        </div>
                        <div className="tc-download-div">
                            <a title="Download photo" href={this.props.download} className="tc-download-anchor">
                                <svg className="dl-arrow-svg" version="1.1" viewBox="0 0 32 32" width="18" height="18" aria-hidden="false">
                                    <path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    </a>
                </div>
            </main>
        )
    }
}

export default TilePhotoCard