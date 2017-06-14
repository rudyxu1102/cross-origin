### 跨域的简单小demo
这是一个关于跨域的简单demo集合，在demo里面会加上自己的理解并添加相应的注释，尽量以简单的demo介绍跨域的方法，适合新手学习跨域的方法。
> 如果还有其他没提及的跨域方法，欢迎PR，谢谢！

### Set Up
运行环境
- node.js 全局安装
- npm 全局安装

运行步骤
1. cross-domain-demo目录下npm install，下载项目所需的依赖
2. 进入对应的demo目录

### 一、CROS跨域
cros-demo目录下
1. node serverRes.js
2. 重新开一个dos窗口
3. node serverReq.js

项目运行起来之后，
可以在 http://localhost:3000/ 请求数据，
在 http://localhost:3001/ 看到所需要的数据

### 二、JSONP跨域
 - 可以直接在jsonp-demo目录下的dos窗口`输入run.bat`，直接一步完成。

 - 也可以跟原来的步骤一样，
在jsonp-demo目录下①node serverRes.js  ②重新开一个dos窗口   ③node serverReq.js

项目运行起来后，请求页面为 http://localhost:3002/ ，响应页面为 http://localhost:3003/

### 三、postMessage跨域
这是html5的新API，适用于不同窗口iframe之间的跨域，

在 http://localhost:3004/ 可以进行与不同源的子窗口进行跨域

### 四、后端设置代理proxy跨域
因为JS同源策略是浏览器的安全策略，所以在浏览器客户端不能跨域访问，而服务器端调用HTTP接口只是使用HTTP协议，不会执行JS脚本，不需要同源策略，也就没有跨越问题。

- demo1
通过使用http-proxy-middleware插件设置后端的代理，在 http://localhost:3006/ 运行

- demo2
不使用插件配置代理，直接使用http模块发出请求， 在 http://localhost:3008/ 运行



> 还在更新中....
