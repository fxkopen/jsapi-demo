const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const fxiaoke = require('./fxiaoke');

app.get('/', async (req, res) => {
  const c = await fxiaoke.getCorpAccessToken();
  console.log(c.body);
  const j = await fxiaoke.getJsapiTicket(c.body.corpId, c.body.corpAccessToken);
  console.log(j.body);
  res.send(j.body);
});

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/signature', cors(corsOptions), async (req, res) => {
  const c = await fxiaoke.getCorpAccessToken();
  console.log(c.body);
  const j = await fxiaoke.getJsapiTicket(c.body.corpId, c.body.corpAccessToken);
  console.log(j.body);

  const params = {
    jsapiTicket: j.body.ticket,
    noncestr: 'random',
    timestamp: new Date().getTime(),
    url: decodeURIComponent(req.query.url)
  };
  console.log(params);

  const r = await fxiaoke.getJsapiSignature(params);
  res.send(r.body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
