const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/image',
    createProxyMiddleware({
      target: 'https://exercisedb.p.rapidapi.com',
      changeOrigin: true,
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY   , // 替換為你的 API Key
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
    })
  );
};