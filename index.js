var AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  awsAccountId: process.env.AWS_ACCOUNT,
  region: "us-east-1"
});

console.log('Source: ' + process.env.SES_SOURCE);
console.log('To: ' + process.env.SES_TO);

var ses = new AWS.SES();

ses.sendEmail({
	Source: process.env.SES_SOURCE,
	Destination: {
		ToAddresses: [process.env.SES_TO]
	},
	Message: {
		Subject: {
			Data: "This is another test message"
		},
		Body: {
			Text: {
				Data: "This is the body of the email.\n Hello.\nHello..\nHello...\n\nGoodbye."
			},
			Html: {
				Data: "<p>This is the body of the email</p><p>Hello.<br/>Hello..<br/>Hello...</p><p>Goodbye.</p>"
			}
		}
	}
}, function(err, data) {
	if(err) {
		return console.error(err);
	}

	return console.log(data);
});