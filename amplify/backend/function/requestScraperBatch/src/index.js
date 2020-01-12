/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */

const rp = require('request-promise');
const cheerio = require('cheerio');

exports.handler = async (event) => {
    // TODO implement
    console.log('[DEBUG] START')

    const options = {
      transform: (body) => {
        return cheerio.load(body);
      }
    };
    
    await rp.get('https://buttercms.com/docs/api/', options)
      .then(($) => {
        console.log('[DEBUG] SCRAPED!')
        const text = $('title').text()
        console.log(text)
        return text;
      }).then((title) => {
        console.log(title);
      }).catch((error) => {
        console.error('Error:', error);
      });

    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
