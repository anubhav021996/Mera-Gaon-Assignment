const { Vonage } = require("@vonage/server-sdk");
require("dotenv").config();

const vonage = new Vonage({
  apiKey: process.env.vonage_apiKey,
  apiSecret: process.env.vonage_apiSecret,
});

module.exports = async (to, from, text) => {
  let res = await vonage.sms
    .send({ to, from, text })
    .then((resp) => {
      return resp;
    })
    .catch((err) => {
      return err;
    });
  return res;
};
