/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */

const rp = require('request-promise');
const cheerio = require('cheerio');
const gql = require('graphql-tag');
const axios = require('axios');
const print = require('graphql').print;
const createRequest = gql`mutation CreateRequest(
  $input: CreateRequestInput!
  $condition: ModelRequestConditionInput
) {
  createRequest(input: $input, condition: $condition) {
    id
    name
  }
}
`;
const headers = {
  'x-api-key': 'da2-r65lfyn6hjdzhjgsn2p73kmjty',
}
const options = {
  transform: (body) => {
    return cheerio.load(body);
  }
};

exports.handler = async (event) => {
  await rp.get('https://rentalcash.xyz/comment-page-1#comments', options).then(($) => {
    const comments = $('[id^="comment-"]')
    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i]
      const getValue = (elem, label) => {
        const ary = $(elem).find('.wpd-custom-field.wpd-cf-text').filter((index, field)=>{
          return $(field).find('.wpd-cf-label').text() == label
        })
        let val = ''
        try {
          val = $(ary[0]).find('.wpd-cf-value').text()
        } catch (error) {
          console.log(error)
          val = ''
        }
        return val
      }
      const request = {
        id: $(comment).attr('id'),
        title: $(comment).find('.wc-comment-author').text(),
        content: $(comment).find('.wc-comment-text').text(),
        email: getValue(comment, 'メール'),
        line: getValue(comment, 'LINE'),
        name: getValue(comment, '名前'),
        age: getValue(comment, '年齢'),
        sex: getValue(comment, '性別'),
        address: getValue(comment, '住所'),
        occupation: getValue(comment, '職業'),
        desiredAmount: getValue(comment, '融資希望額'),
        salary: getValue(comment, '月収'),
        debt: getValue(comment, '現在の借金総額'),
        identification: getValue(comment, '身分証明書'),
        debtConsolidation: getValue(comment, '債務整理歴'),
        requestDate: $(comment).find('.wc-comment-date').text(),
      }
      console.log(request)
      axios.post('https://4eb6kjjiqbcq5omxog6kafka7i.appsync-api.ap-northeast-1.amazonaws.com/graphql', {
        headers: {
          'Authorization': 'Basic Y2xpZW50OnNlY3JldA=='
        },
        query: print(createRequest),
        variables: {
          input: {
            request
          }
        },
      }, {
        headers: headers
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }
  })

  const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};

// [SAMPLE]
// const rp = require('request-promise');
// const cheerio = require('cheerio');
// const options = {
//   transform: (body) => {
//     return cheerio.load(body);
//   }
// };
// rp.get('https://buttercms.com/docs/api/', options).then(($) => {
//   console.log('[DEBUG] SCRAPED!')
//   const text = $('#introduction').text()
//   console.log(text)
//   // return $('#introduction').text();
// })

// [SAMPLE]
// const rp = require('request-promise');
// const cheerio = require('cheerio');
// const options = {
//   transform: (body) => {
//     return cheerio.load(body);
//   }
// };
// rp.get('https://rentalcash.xyz/comment-page-1#comments', options).then(($) => {
//   const comments = $('[id^="comment-"]')
//   const requests = []
//   for (let i = 0; i < comments.length; i++) {
//     const comment = comments[i]
//     const getValue = (elem, label) => {
//       const ary = $(elem).find('.wpd-custom-field.wpd-cf-text').filter((index, field)=>{
//         return $(field).find('.wpd-cf-label').text() == label
//       })
//       let val = ''
//       try {
//         val = $(ary[0]).find('.wpd-cf-value').text()
//       } catch (error) {
//         console.log(error)
//         val = ''
//       }
//       return val
//     }
//     const request = {
//       id: $(comment).attr('id'),
//       title: $(comment).find('.wc-comment-author').text(),
//       content: $(comment).find('.wc-comment-text').text(),
//       email: getValue(comment, 'メール'),
//       line: getValue(comment, 'LINE'),
//       name: getValue(comment, '名前'),
//       age: getValue(comment, '年齢'),
//       sex: getValue(comment, '性別'),
//       address: getValue(comment, '住所'),
//       occupation: getValue(comment, '職業'),
//       desiredAmount: getValue(comment, '融資希望額'),
//       salary: getValue(comment, '月収'),
//       debt: getValue(comment, '現在の借金総額'),
//       identification: getValue(comment, '身分証明書'),
//       debtConsolidation: getValue(comment, '債務整理歴'),
//       requestDate: $(comment).find('.wc-comment-date').text(),
//     }
//     console.log(request)
//   }
//   return comments;
// })

// [SAMPLE] Send GraphQL Mutation request
// const gql = require('graphql-tag');
// const axios = require('axios');
// const print = require('graphql').print;
// const createRequest = gql`mutation CreateRequest(
//   $input: CreateRequestInput!
//   $condition: ModelRequestConditionInput
// ) {
//   createRequest(input: $input, condition: $condition) {
//     id
//     name
//   }
// }
// `;
// const headers = {
//   'x-api-key': 'da2-r65lfyn6hjdzhjgsn2p73kmjty',
// }

// axios.post('https://4eb6kjjiqbcq5omxog6kafka7i.appsync-api.ap-northeast-1.amazonaws.com/graphql', {
//   headers: {
//     'Authorization': 'Basic Y2xpZW50OnNlY3JldA=='
//   },
//   query: print(createRequest),
//   variables: {
//     input: {
//       name: request
//     }
//   },
// }, {
//   headers: headers
// }).
// then(res => console.log(res.data)).
// catch(err => console.log(err))