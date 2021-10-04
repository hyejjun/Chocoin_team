const path = require('path')
require('dotenv').config({path: path.join(__dirname, '.env')})
const crypto = require('crypto');

function createHash(userpw){
    const signature = Buffer.from(JSON.stringify(userpw)).toString('base64').replace('==','').replace('=','');
    return signature
}

module.exports = createHash