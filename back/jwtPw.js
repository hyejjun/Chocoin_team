require('dotenv').config();
const crypto = require('crypto');
const ctoken = require('./jwt');

function jwtPw(AccessToken){  
    let [header, payload, sign] = AccessToken.split('.');   
    let { userpw, exp } = JSON.parse(Buffer.from(payload, 'base64').toString())
    let Cuserpw = userpw;
    return Cuserpw;
}

module.exports = jwtPw;