const path = require('path')
require('dotenv').config({path: path.join(__dirname, '.env')})
const crypto = require('crypto');

function createHash(userpw){
    const Struserpw = JSON.stringify(userpw);
    const signature = Buffer.from(`${Struserpw}`).toString('base64').replace('==','').replace('=','');
    return signature
}

module.exports = createHash