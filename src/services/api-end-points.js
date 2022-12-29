import config from '../constants';

const endpoints = {

  /// ---Common service--///

  common: {
    likePost: `${config.url.API_URL}like`,
    unlikePost: `${config.url.API_URL}unlike`,
  },

  /// ---Login service--///
  // TODO: For future use if we implement login and signup features

  // auth : {
  //   signup : config.url.API_URL + 'signup',
  //   login : config.url.API_URL + 'login',
  //   resetPassword : config.url.API_URL + 'resetPassword',
  //   verify : config.url.API_URL + 'verify',
  //   adminLogin : config.url.API_URL + 'adminLogin',
  //   editPassword : config.url.API_URL + 'editPassword',
  //   forgetPassword : config.url.API_URL + 'forgetPassword',
  //   changePassword : config.url.API_URL + 'changePassword',
  // },

  /// ---Home service--///

  main: {
    getTimelinePosts: `${config.url.API_URL}timeline`,
  },

};

export default endpoints;
