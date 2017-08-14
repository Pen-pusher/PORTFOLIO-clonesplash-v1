import React from 'react';
import axios from 'axios';


const apiTest = () => {
    axios.get(`https://api.unsplash.com/photos&client_id=524c632b23eb300633c46a41aebfd0d81040407e6ada5b5a85b330711da5043f`)
    .then(res => {
        console.log(res)
    })
}

export default function Test() {

    return(
        <main>
            <br />
            <br />
            <h1>asdf</h1>
            <br />
            <br/ >

            <button onClick={apiTest()}>Test API</button>
        </main>
    )
}