## 使用步骤

1. 分别在`client`和`server`下`npm install`安装依赖
2. 进入`server`启动服务端：`node index.js`
3. 进入`client`启动客户端：`npm run serve`
4. 浏览器访问IP地址比如：`http://10.22.0.66:8080/`，将此地址转成二维码用纷享APP扫码即可

注意（重要）：
+ 配置自己的app信息，在`server/fxiaoke.js`里
+ 除此之外，客户端的appId配置在`client/src/main.js`里
+ 如果初始化签名没通过，可能是因为没有配置JSAPI初始化签名的鉴权域名
