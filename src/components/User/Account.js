import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';



class Account extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: {},
            firstNameInput: '',
            lastNameInput: '',
            emailInput: '',
            usernameInput: '',
            websiteInput: '',
            instagramInput: '',
            locationInput: '',
            bioInput: ''
        }
    }

    componentDidMount() {
        axios.get('/api/user')
        .then(res => {
            if(res.data.name) {
                let {name, email} = res.data
                this.setState({
                    currentUser: res.data,
                    firstNameInput: name.split(' ')[0],
                    lastNameInput: name.split(' ')[1],
                    emailInput: email
                })
            }
            else {
                return;
            }
        })
    }

    componentWillReceiveProps(nextProps) {
    }
    
    
    render() {
        
        console.log('state now: ', this.state)

        const bioStyle = {
            "height":"108px"
        }

        // const firstName = this.state.currentUser.name ? this.state.currentUser.name.split(' ')[0] : '';
        // const lastName = this.state.currentUser.name ? this.state.currentUser.name.split(' ')[1] : '';
        // const email = this.state.currentUser.email ? this.state.currentUser.email : '';
        
        return(
            <main className="user-account-wrapper">
                <div className="user-account-content">
                    <div className="user-account-form">
                        <h1>Edit profile</h1>
                        <div className="user-account-row">
                            <div className="user-account-profilepic">
                                <div className="uap-div">
                                    <img src={this.props.currentUser.profilepic} />
                                    <br /><br /><br /><br /><br />
                                </div>
                                <div className="uap-shim"></div>
                            </div>
                            <div className="user-account-top-right">
                                <label for="user-first-name">First name</label>
                                <input className="user-first-name"
                                    value={this.state.firstNameInput} />
                                <label for="user-last-name">Last name</label>
                                <input className="user-last-name" 
                                    value={this.state.lastNameInput}/>
                                <label for="user-email">Email address</label>
                                <input className="user-email" 
                                    value={this.state.emailInput}/>                                
                            </div>
                        </div>
                        <div className="user-account-row">
                            <label for="user-username">Username</label><p>(only letters, numbers, and underscores)</p>
                            <input className="user-username" />
                            <label for="user-website">Personal site/portfolio</label>
                            <input className="user-website" placeholder="https://"/>
                            <label for="user-instagram">Instagram</label>
                            <input className="user-instagram" placeholder="@"/>                                
                            <label for="user-location">Location</label>
                            <input className="user-location" />
                            <label for="user-bio">Bio</label>
                            <input className="user-bio" style={bioStyle}/>                                                            
                        </div>
                        <button className="user-account-update">Update account</button>
                    </div>
                </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Account);