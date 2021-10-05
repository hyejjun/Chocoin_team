require('dotenv').config();
const crypto = require('crypto');

module.exports = (req, res, next) => {
    let { AccessToken } = req.cookies;
    if (AccessToken == undefined) {
        console.log('undefined')
        res.json({ cookie:'Fail' });
        return 0;
    }

    let [header, payload, sign] = AccessToken.split('.');
    let signature = getSignature(header, payload);

    if (sign == signature) {
        let { userid,userIdx,userpw, exp } = JSON.parse(Buffer.from(payload, 'base64').toString());
        let user_info = {userid, userIdx};

        let nexp = new Date().getTime();

        if (nexp > exp) {
            res.clearCookie('AccessToken');
            res.json({ cookie: 'Fail '});
            return 0;
        }
        res.json({
            cookie: 'success',
            user_info
        });
        
    } else {
        res.clearCookie('AccessToken');
        res.json({ cookie: 'Fail' });
    }
}

function getSignature(header, payload) {
    const signature = crypto.createHmac('sha256', Buffer.from(process.env.salt))
        .update(header + "." + payload)
        .digest('base64')
        .replace('==', '')
        .replace('=', '')

    return signature;
}