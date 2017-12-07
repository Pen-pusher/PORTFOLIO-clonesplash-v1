import React from 'react';
import {connect} from 'react-redux';

let isLiked = false;

const classLiked = {
    "color":"#FFFFFF",
    "fill":"#FFFFFF",
    "background":"#F15151"
}



const ListPhotoCard = (props) => {
    isLiked = (props.userLikes.filter(obj => obj.photo === props.id));
    console.log('liked', isLiked)

    return(
        <main className="list-card-wrapper">
            <div className="list-card-header">
            </div>
            <div className="list-card-body">
                <div className="lc-photo-wrapper">
                    <a className="lc-photo-anchor">
                        <img alt="img" className="list-card-img" src={props.imgUrl} />
                    </a>
                </div>
            </div>
            <div className="list-card-footer">
                <div className="lc-footer-left">
                    <div className="lc-likes-div">
                        <a className="lc-likes-anchor"
                            title="Like photo"
                            style={isLiked.length ? classLiked : null}
                            >
                            <svg version="1.1" viewBox="0 0 32 32" width="16" height="16" aria-hidden="false">
                                <path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path>
                            </svg>
                            <span>{props.likes}</span>
                        </a>
                    </div>
                    <div className="lc-collections-div">
                        <a className="lc-collections-anchor"
                            title="Add to collections">
                            <svg version="1.1" viewBox="0 0 32 32" width="16" height="16" aria-hidden="false">
                                <path d="M14 3h4v26h-4zM29 14v4h-26v-4z"></path>
                            </svg>
                            <span>Collect</span>
                        </a>
                    </div>
                </div>
                <div className="lc-user-div">
                    <a>
                        <div className="lc-profile-pic">
                            <img alt="pp" src={props.profilePic} />
                        </div>
                    </a>
                    <a>
                        <span>
                            {props.photographer}
                        </span>
                    </a>
                </div>
                <div className="lc-footer-right">
                    <div className="lc-download-div">
                        <a className="lc-download-anchor"
                            title="Download photo"
                            href={props.download}
                            download>
                            <span>Download</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps)(ListPhotoCard);
