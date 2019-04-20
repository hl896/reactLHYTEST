import React from 'react';
import axios from 'axios'



export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:
        'Client-ID 087e9816191affc1d569547163ac71aa5bd081f40cc0c6c2fcbd67299ecad1af'
    }
})