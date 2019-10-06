const port = process.env.PORT || 8080;
const connectionURI = process.env.MONGODB_URI || `mongodb://localhost:27017/ls_DB`;
const zenUsername = ''; //your username here;
const zenApiToken = ''; //your api token here;
const zenRemoteUri = 'https://remote.zendesk.com/api/v2';

module.exports = {
  port,
  connectionURI,
  zenUsername,
  zenApiToken,
  zenRemoteUri
};
