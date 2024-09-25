const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/payment', // API 엔드포인트
        createProxyMiddleware({
            target: 'http://121.254.239.138:30200',
            changeOrigin: true,
            pathRewrite: {
                '^/payment': '', // 프록시를 적용할 엔드포인트의 경로
            },
        })
    );
};
