const User = require('../models/user');
var zendesk = require('node-zendesk');
const { zenUsername, zenApiToken, zenRemoteUri } = require('../config');

const client = zendesk.createClient({
  username: zenUsername,
  token: zenApiToken,
  remoteUri: zenRemoteUri
});


exports.getUser = async id => {
  const getZenUser = async id =>
    new Promise(async (resolve, reject) => {
      client.users.show(id, async (err, result) => {
        if (err) {
          reject(`ERROR GETTING ZENDESK USER || ${err}`);
        }
        const user = JSON.stringify(result, null, 2, true);
        resolve(user);
      });
    });
  try {
    const user = await getZenUser(id);
    return user;
  } catch (err) {
    try {
      const user = await User.findById(id, { _id: 0, __v: 0 });
      return user;
    } catch (error) {
      throw error;
    }
  }
};

exports.updateUser = async (id, params) => {
  try {
    client.users.update(id, params, err => {
      if (err) {
        console.log(`ERROR UPDATING ZENDESK USER || ${err}`);
      } else {
        console.log(`ZENDESK USER UPDATED`);
      }
    });
    return await User.updateOne({ _id: id }, params);
  } catch (err) {
    throw err;
  }
};

exports.createUser = async params => {
  try {
    client.users.create(params, err => {
      if (err) {
        console.log(`ERROR CREATING ZENDESK USER || ${err}`);
      } else {
        console.log(`ZENDESK USER CREATED`);
      }
    });
    return User.create(params);
  } catch (err) {
    throw err;
  }
};

exports.deleteUser = async id => {
  try {
    client.users.delete(id, err => {
      if (err) {
        console.log(`ERROR DELETING ZENDESK USER || ${err}`);
      } else {
        console.log(`ZENDESK USER DELETED`);
      }
    });
    return await User.findByIdAndDelete(id);
  } catch (err) {
    throw err;
  }
};
