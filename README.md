### 跨域的demo
这是一个关于跨域的demo集合，从网上搜集了关于跨域的demo，在demo里面会加上自己的理解并添加相应的注释，尽量以简单的demo介绍跨域的方法，适合新手学习跨域的方法。
> 如果还有其他没提及的跨域方法，欢迎PR，谢谢！

### 运行环境
- node.js 全局安装
- npm 全局安装

### 运行步骤
1. cross-domain-demo目录下npm install
2. 进入对应的demo目录

### CROS跨域
cros-demo目录下
1. node serverRes.js
2. 重新开一个dos窗口
3. node serverReq.js

项目运行起来之后，
可以在 http://localhost:3000/ 请求数据，
在 http://localhost:3001/ 看到所需要的数据

### JSONP跨域
 - 可以直接在jsonp-demo目录下的dos窗口`输入run.bat`，直接一步完成。

 - 也可以跟原来的步骤一样，
在jsonp-demo目录下①node serverRes.js  ②重新开一个dos窗口   ③node serverReq.js

项目运行起来后，请求页面为 http://localhost:3002/ ，响应页面为 http://localhost:3003/

### postMessage跨域
这是html5的新API，适用于不同窗口iframe之间的跨域



> 还在更新中....
