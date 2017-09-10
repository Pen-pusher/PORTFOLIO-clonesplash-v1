import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class TilePhotoCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mouseOver: false,
            isLiked: false
        }

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }

    componentDidMount() {
        this.props.liked ? this.setState({isLiked:true}) : null;
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

    handleLike(e) {
        e.preventDefault()
        this.state.isLiked ?
        this.setState({
            isLiked:false
        }) :
        this.setState({
            isLiked: true
        })
    }



    render() {

        const classHidden = {
            "display": "none"
        }

        const classLiked = {
            "color":"#FFFFFF",
            "fill":"#FFFFFF",
            "background":"#F15151"
        }

        let isLiked = this.state.isLiked;

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
                            <a title="Add to collections" className="tc-collections-anchor">
                                <svg version="1.1" viewBox="0 0 32 32" width="16" height="16" aria-hidden="false">
                                    <path d="M14 3h4v26h-4zM29 14v4h-26v-4z"></path>
                                </svg>
                                <span>Collect</span>
                            </a>
                        </div>
                        <div className="tc-likes-div">
                            <a onClick={this.handleLike} title="Like photo" className="tc-likes-anchor" style={isLiked ? classLiked : null}>
                                <svg version="1.1" viewBox="0 0 32 32" width="16" height="16" aria-hidden="false">
                                    <path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path>
                                </svg>
                                <span>{isLiked ? this.props.likes + 1 : this.props.likes}</span>
                            </a>
                        </div>
                    </div>
                    <div className="tc-bottom-wrapper" style={this.state.mouseOver ? null : classHidden}>
                        <div className="tc-user-div">
                            <Link to={`/user/${this.props.username}`}>
                                <a>
                                     <div className="tc-profile-pic">
                                        <img src={this.props.profilePic} />
                                    </div> 
                                </a>
                            </Link>
                            <Link to={`/user/${this.props.username}`}>
                                <a>
                                    <span>
                                            {this.props.photographer}
                                    </span>
                                </a>
                            </Link>
                        </div>
                        <div className="tc-download-div">
                            <a title="Download photo" href={this.props.download} className="tc-download-anchor" download>
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