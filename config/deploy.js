module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'esperantio',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
