const nodeMailerHost = process.env.NODEMAILER_HOST;
const nodeMailerPort = process.env.NODEMAILER_PORT;
const nodeMailerUser = process.env.NODEMAILER_USER;
const nodeMailerPass = process.env.NODEMAILER_PASS;
const frontEndUrl = process.env.FRONTEND_URL;
const oAuthClientId = process.env.OAUTH_CLIENT_ID;
const oAuthClientSecret = process.env.OAUTH_CLIENT_SECRET; 
const oAuthRefreshToken = process.env.OAUTH_REFRESH_TOKEN;
const oAuthAccessToken = process.env.OAUTH_ACCESS_TOKEN; 
const personal = process.env.EMAILPERSONAL;


const numOfHashes = 14; 
const secureKey = process.env.SECURE_KEY;
const tokenOptionExpiration = '24h';
const tokenTimeLeftRefresh = 3; // in hrs

module.exports = {
    nodeMailerHost,
    nodeMailerPort,
    nodeMailerUser,
    nodeMailerPass,
    oAuthClientId,
    oAuthClientSecret,
    oAuthRefreshToken,
    oAuthAccessToken,
    frontEndUrl,
    personal,
    numOfHashes,
    secureKey,
    tokenOptionExpiration,
    tokenTimeLeftRefresh,


}