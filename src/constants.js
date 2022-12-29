const prod = {
  url: {
    API_URL: '<---ADD API HERE--->',
    Publishable_key: '',
  },
};
const dev = {
  url: {
    API_URL: '<---ADD API HERE--->',
  },
};

const config = process.env.NODE_ENV === 'development' ? dev : prod;

export default config;
