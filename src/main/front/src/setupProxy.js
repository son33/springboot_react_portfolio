// CORS 요류를 방지하기 위한 Proxy 설정
// npm install http-proxy-middleware --save
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        '/api',
        createProxyMiddleware({
            // springboot 서버 url 혹은 localhost:포트번호
            target: 'http://localhost:8081',
            changeOrigin: true,
        })
    );
};