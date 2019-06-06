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

const safeUsrnameSqlLetters = [
    '-', '_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' ',
  ];
  
  
const safePwdSqlLetters = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', 'a',
    'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A',
    'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1',
    '2', '3', '4', '5', '6', '7', '8', '9', '0'
  ];

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
    safeUsrnameSqlLetters,
    safePwdSqlLetters,
    numOfHashes,
    secureKey,
    tokenOptionExpiration,
    tokenTimeLeftRefresh,


}