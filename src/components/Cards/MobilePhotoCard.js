import React from 'react';

let isLiked = false;

const classLiked = {
    "color":"#FFFFFF",
    "fill":"#FFFFFF",
    "background":"#F15151"
}

const handleLike = () => {
    isLiked ? isLiked = false : isLiked = true;
}

const MobilePhotoCard = (props) => {
    return(
        <main className="mobile-card-wrapper">
            <div className="tile-card-header">
                <div className="mc-user-div">
                    <a href="#">
                        <div className="mc-profile-pic">
                            <img src={props.profilePic} />
                        </div> 
                    </a>
                    <a href="#">
                        <span>
                            {props.photographer}
                        </span>
                    </a>
                </div>
            </div>
            <div className="mobile-card-body">
                <div className="mc-photo-wrapper">
                    <a href="#" className="mc-photo-anchor">
                        <img className="mobile-card-img" src={props.imgUrl} />
                    </a>
                </div>
            </div>
            <div className="mobile-card-footer">
                <div className="mc-footer-left">
                    <div className="lc-likes-div">
                        <a className="mc-likes-anchor"
                            style={isLiked ? classLiked : null}
                            >
                            <svg version="1.1" viewBox="0 0 32 32" width="16" height="16" aria-hidden="false">
                                <path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path>
                            </svg>
                            <span>{props.likes}</span>
                        </a>
                    </div>
                    <div className="mc-collections-div">
                        <a href="#" className="mc-collections-anchor">
                            <svg version="1.1" viewBox="0 0 32 32" width="16" height="16" aria-hidden="false">
                                <path d="M14 3h4v26h-4zM29 14v4h-26v-4z"></path>
                            </svg>
                        </a>
                    </div>                    
                </div>
                <div className="mc-footer-right">
                    <div className="mc-download-div">
                        <a title="Download photo" href={props.download} className="mc-download-anchor">
                            <svg className="dl-arrow-svg" version="1.1" viewBox="0 0 32 32" width="18" height="18" aria-hidden="false">
                                <path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path>
                            </svg>
                        </a>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default MobilePhotoCard;