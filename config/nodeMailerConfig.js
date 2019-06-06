require('dotenv').config();

const nodemailer = require('nodemailer');
// globals
const {
	nodeMailerHost,
	nodeMailerPort,
	nodeMailerUser,
	nodeMailerPass,
	frontEndUrl,
	oAuthClientId,
	oAuthClientSecret,
	oAuthRefreshToken,
    oAuthAccessToken,
    personal
} = require('./globals');

var auth = {
	type: 'OAuth2',
	user: nodeMailerUser,
	pass : nodeMailerPass,
	clientId: oAuthClientId,
	clientSecret: oAuthClientSecret,
	refreshToken : oAuthRefreshToken,
  };

const transporter = nodemailer.createTransport({
	host: nodeMailerHost,
	port: nodeMailerPort,
	requireTLS: true,
	auth: {
		user: nodeMailerUser, 
		pass : nodeMailerPass, 
	}
})


const getMailOptions = (route, email,message,company,name, clientIP) => {
	const mailOptions = {
		from: nodeMailerUser,
		to: email,
	};
	if (route === 'send-email') {
		mailOptions.subject = 'e-mail confirmation.';
		mailOptions.html = `<table width="100%" border="0" cellpadding="10" cellspacing="0" align="center"><tr><td><table border="0" cellpadding="10" cellspacing="0" align="center"><tr><td style="text-align: center;"><img src="https://i.imgur.com/BstVkVa.png"></img></td></tr><tr><td style="color: #84794B; font-weight: bold; text-align: center; font-size: 18px;">Jonathan J Holloway Portofilo site</td></tr><tr><td style="text-align: center;"></td></a></tr><tr><td style="text-align: center;">Or copy and paste the following link into your browser:</td></tr><tr><td style="text-align: center;"></td></tr><tr><td style="text-align: center;">This message is from company: ${company} email: ${email} person contacting you is : ${name} provided this message : <br></br>${message}</td></tr></table></td></tr><tr><td style="text-align: center; font-size: 11px; color: #999;">This request was sent from IP address ${ clientIP }</td></tr></table></td></tr></table>`;
	}
	
	return mailOptions;
};

module.exports = {
	transporter,
	getMailOptions,
};




