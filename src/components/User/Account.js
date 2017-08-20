import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {updateUser, getCurrentUser} from './../../redux/mainReducer';


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
            bioInput: '',
            initialized: false
        }

        this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
        this.handleLasttNameInput = this.handleLasttNameInput.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handleWebsiteInput = this.handleWebsiteInput.bind(this);
        this.handleInstagramInput = this.handleInstagramInput.bind(this);
        this.handleLocationInput = this.handleLocationInput.bind(this);
        this.handleBioInput = this.handleBioInput.bind(this);

        this.handleUserUpdate = this.handleUserUpdate.bind(this);
    }

    componentDidMount() {
        if(!this.state.initialized) {
            axios.get('/api/user')
            .then(res => {
                if(res.data.username) {
                    let {name, email, username, website, instagram, location, bio} = res.data;
                    this.setState({
                        currentUser: res.data,
                        firstNameInput: name.split(' ')[0],
                        lastNameInput: name.split(' ')[1],
                        emailInput: email,
                        usernameInput: username,
                        websiteInput: website,
                        instagramInput: instagram,
                        locationInput: location,
                        bioInput: bio,
                        initialized: true
                    })
                }
                else if(res.data.name) {
                    let {name, email} = res.data
                    this.setState({
                        currentUser: res.data,
                        firstNameInput: name.split(' ')[0],
                        lastNameInput: name.split(' ')[1],
                        emailInput: email,
                        initialized: true
                    })
                }
                else {
                    return;
                }
            })
        }
        return;
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.currentUser.username || nextProps.userData.username) {
            this.props.history.push('/');
        }
    }

    handleUserUpdate() {
        let name = this.state.firstNameInput + ' ' + this.state.lastNameInput;
        let id = this.state.currentUser.authid;
        let body = Object.assign(
            {},
            {
                id: id,
                name: name,
                email: this.state.emailInput,
                username: this.state.usernameInput,
                website: this.state.websiteInput,
                instagram: this.state.instagramInput,
                location: this.state.locationInput,
                bio: this.state.bioInput
            }
        )
        this.props.updateUser(body);
    }
    
    handleFirstNameInput(e) {
        this.setState({
            firstNameInput: e.target.value
        })
    }

    handleLasttNameInput(e) {
        this.setState({
            lastNameInput: e.target.value
        })
    }

    handleEmailInput(e) {
        this.setState({
            emailInput: e.target.value
        })
    }

    handleUsernameInput(e) {
        this.setState({
            usernameInput: e.target.value
        })
    }

    handleWebsiteInput(e) {
        this.setState({
            websiteInput: e.target.value
        })
    }

    handleInstagramInput(e) {
        this.setState({
            instagramInput: e.target.value
        })
    }

    handleLocationInput(e) {
        this.setState({
            locationInput: e.target.value
        })
    }

    handleBioInput(e) {
        this.setState({
            bioInput: e.target.value
        })
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
                                    onChange={this.handleFirstNameInput}
                                    value={this.state.firstNameInput} />
                                <label for="user-last-name">Last name</label>
                                <input className="user-last-name"
                                    onChange={this.handleLasttNameInput}
                                    value={this.state.lastNameInput}/>
                                <label for="user-email">Email address</label>
                                <input className="user-email"
                                    onChange={this.handleEmailInput}
                                    value={this.state.emailInput}/>                                
                            </div>
                        </div>
                        <div className="user-account-row">
                            <label for="user-username">Username</label><p>(only letters, numbers, and underscores)</p>
                            <input className="user-username"
                                onChange={this.handleUsernameInput}/>
                            <label for="user-website">Personal site/portfolio</label>
                            <input className="user-website"
                                onChange={this.handleWebsiteInput}
                                placeholder="https://"/>
                            <label for="user-instagram">Instagram</label>
                            <input className="user-instagram"
                                onChange={this.handleInstagramInput}
                                placeholder="@"/>                                
                            <label for="user-location">Location</label>
                            <input className="user-location"
                                onChange={this.handleLocationInput} />
                            <label for="user-bio">Bio</label>
                            <textarea className="user-bio"
                                style={bioStyle}
                                rows="4"
                                maxLength="240"
                                onChange={this.handleBioInput}/>                                                            
                        </div>
                        <button onClick={this.handleUserUpdate} className="user-account-update">Update account</button>
                    </div>
                </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {updateUser, getCurrentUser})(Account);