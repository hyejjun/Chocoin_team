require('dotenv').config();
const crypto = require('crypto');
const ctoken = require('./jwt');

function jwtId(AccessToken){  
    let [header, payload, sign] = AccessToken.split('.');   
    let { userid, exp } = JSON.parse(Buffer.from(payload, 'base64').toString())
    let Cuserid = userid;
    return Cuserid;
}

module.exports = jwtId;