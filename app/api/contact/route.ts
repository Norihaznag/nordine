// This example is for Typescript-node
import SibApiV3Sdk from 'sib-api-v3-typescript';

const apiInstance = new SibApiV3Sdk.SMTPApi()

const apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY

// Configure API key authorization: partner-key

const partnerKey = apiInstance.authentications['partnerKey'];
partnerKey.apiKey = "YOUR API KEY"

const sendSmtpEmail = {
	to: [{
		email: 'testmail@example.com',
		name: 'John Doe'
	}],
	templateId: 59,
	params: {
		name: 'John',
		surname: 'Doe'
	},
	headers: {
		'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
	}
};


apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});