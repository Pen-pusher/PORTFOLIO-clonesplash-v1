import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeToggle:'Home'
        }

    }

    render() {

        const activeAnchor = {
            "color":"#111111"
        }

        return(
            <nav className="header-wrapper">
                <div className="header-left-search">
                    <div className="logo-header">
                        <a href="/">
                            <svg viewBox="0,0,32,32" width="32" height="32">
                                <path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="search-header-wrapper">
                        <form className="search-header">
                            <input className="search-header-input" tabIndex="1" placeholder="Search free high-resolution photos" />
                            <button className="search-header-button">
                                <svg className="search-header-svg" viewBox="0 0 32 32" width="16" height="16" aria-hidden="false">
                                    <path fill="#999999" d="M31.4 28.6l-6.2-6.2c1.8-2.3 2.8-5.2 2.8-8.4 0-7.7-6.3-14-14-14s-14 6.3-14 14 6.3 14 14 14c3.1 0 6-1.1 8.4-2.8l6.2 6.2c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8zm-17.4-4.6c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"></path>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="header-menu-wrapper">
                    <ul className="header-menu-list-wrapper">
                        <li className="header-menu-list-item">
                            <a className="header-menu-list-anchor" href="#" style={this.state.activeToggle === 'Home' ? activeAnchor : null}>
                                Home
                            </a>
                        </li>
                        <li className="header-menu-list-item">
                            <a className="header-menu-list-anchor" href="#">
                                Collections
                            </a>
                        </li>
                        <li className="header-menu-list-item">
                            <a className="header-menu-list-anchor" href="#">
                                About
                            </a>
                        </li>
                        <li className="header-menu-list-drop">
                                <button className="header-menu-list-drop-button">
                                    <svg className="header-menu-dot-svg" version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-hidden="false">
                                        <path d="M7 15.5c0 1.9-1.6 3.5-3.5 3.5s-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5zm21.5-3.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zm-12.5 0c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z"></path>
                                    </svg>
                                </button>
                        </li>
                    </ul>
                </div>
                <div className="header-login-wrapper">
                    <div>
                        <a className="header-login-anchor" href="#">
                            <div className="header-login-left-divider"></div>
                            Login
                        </a>
                        <a className="header-signup-anchor" href="#">
                            Join free
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;