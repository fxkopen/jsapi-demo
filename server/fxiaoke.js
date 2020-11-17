const superagent = require('superagent');

// 以下改成你自己的自建应用配置
const appId = 'FSAID_1319442';
const appSecret = 'e41dda79712f4e64b4993d37a0c12365';
const appToken = '15c264c5e65d42418d8e254e5fcbf559';
const code = '609D983D6900B6FDF0ED7930E38918B8';

async function getCorpAccessToken() {
  const res = await superagent
    .post('https://open.fxiaoke.com/cgi/corpAccessToken/get/V2')
    .send({
      appId: appId,
      appSecret: appSecret,
      permanentCode: code
    });
  return res;
}

async function getJsapiTicket(corpId, corpAccessToken) {
  const res = await superagent
    .post('https://open.fxiaoke.com/cgi/jsApiTicket/get')
    .send({
      corpAccessToken: corpAccessToken,
      corpId: corpId
    });
   return res;
}

async function getJsapiSignature(params) {
  // jsapiTicket=1&noncestr=2&timestamp=3&url=4
  const res = await superagent
    .post('https://open.fxiaoke.com/debug/jsapiDebug')
    .send(`jsapiTicket=${params.jsapiTicket}`)
    .send(`noncestr=${params.noncestr}`)
    .send(`timestamp=${params.timestamp}`)
    .send(`url=${params.url}`);
  return res;
}

module.exports = {
  getCorpAccessToken: getCorpAccessToken,
  getJsapiTicket: getJsapiTicket,
  getJsapiSignature: getJsapiSignature
};
