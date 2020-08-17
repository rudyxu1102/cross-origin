## 跨域demo集
一个关于跨域的简单demo集合，适合`入门`学习跨域的。

> 任何对初学者学习跨域有用的PR都会接受，谢谢！

## 原理
用node的web框架express在`3000端口`和`3001端口`分别开启一个静态服务器，在两个端口间进行跨域传输数据。

- 3000端口: 为前端界面，前端静态资源放在3000端口的服务器上
- 3001端口: 为后端接口服务器

## 目录
1. [Demo0: 直接跨域，会报什么错？](#demo0-直接跨域会报什么错)
2. [Demo1: CORS跨域](#demo1-cors跨域)
3. [Demo2: JSONP跨域](#demo2-jsonp跨域)
4. [Demo3: postMessage跨域](#demo3-postmessage跨域)
5. [Demo4: window.name跨域](#demo4-windowname跨域)
6. [Demo5: location.hash跨域](#demo5-locationhash跨域)
7. [Demo6: document.domain跨域](#demo6-documentdomain跨域)
8. [Demo7: 后端设置代理proxy跨域](#demo7-后端设置代理proxy跨域)
9. [Demo8: WebSocket跨域](#demo8-websocket跨域)
10. [Demo9: form表单跨域](#demo9-form表单跨域)
11. [Demo10: 关闭浏览器跨域限制](#demo10-关闭浏览器跨域限制)

## Set Up
运行环境
- node.js 全局安装
- npm 全局安装

运行步骤
1. `git clone git@github.com:FatDong1/cross-domain`
2. cross-domain目录下npm install，下载项目所需的依赖
3. 进入对应的demo目录，①node serverRes.js  ②重新开一个终端窗口   ③node serverReq.js
4. 或者在对应的demo目录下，终端窗口输入`bash run.bat`或者使用脚本`run.sh`，直接完成上一步的①②③

## Demo0: 直接跨域，会报什么错？
项目运行起来之后
- 请求数据页面地址： http://localhost:3000
- 查看数据： http://localhost:3001

点击按钮请求3001端口数据，会报错，如下图所示。

---

![error.png](./image/error.png)

## Demo1: CORS跨域

项目运行起来之后
- 请求数据页面地址： http://localhost:3000
- 查看数据： http://localhost:3001

常考面试题
- CORS的请求过程（简单请求、复杂请求）。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)


## Demo2: JSONP跨域

项目运行起来后
- 请求页面： http://localhost:3000
- 响应页面为 http://localhost:3001

常考面试题
- JSONP的流程
- JSONP的实现原理

## Demo3: postMessage跨域
这是html5的新API，适用于不同窗口iframe之间的跨域

> 项目运行地址： http://localhost:3000

## Demo4: window.name跨域

在 http://localhost:3000/a.html 使用js动态生成一个隐藏的iframe，设置src属性为' http://localhost:3001/c.html '，等这个iframe加载完之后，重新设置src属性为同源的地址' http://localhost:3000/b.html '(b.html是一个空的html文件)，现在iframe与a.html同源，那就可以访问window.name属性，而name值没有变化，因为window.name属性在不同的页面（甚至不同域名）加载后依旧存在。


> 项目运行地址： http://localhost:3000/a.html

## Demo5: location.hash跨域
在 http://localhost:3000/a.html 使用js动态生成一个隐藏的iframe，设置src属性为' http://localhost:3001/c.html#getdata '，在c.html判断hash值是否为'#getdata'，如果为'#getdata'，则在当前的iframe(c.html)中再生成一个隐藏的iframe，其src属性指向' http://localhost:3000/b.html '，因为a.html和b.html同源，所以可以在b.html里面修改a.html的hash值，这样a.html就可以通过获取自身的hash值得到数据
> 项目运行地址： http://localhost:3000/a.html

## Demo6: document.domain跨域
document.domain设置成自身或更高一级的父域，且主域必须相同。
【服务器已过期，域名无法使用，demo作废】
#### 注意！！
这是挂在我自己腾讯云域名(xuhaodong.cn)上的demo，所以抱歉这个demo无法在本地运行。不过我只是把demo放到了云服务器上，代码还是一样的，没有修改过。

> 线上访问地址： http://a.xuhaodong.cn/a.html


如果要在本地运行的话，需要搭建一个本地web服务器，
参考链接：https://github.com/web2hack/proxy

## Demo7: 后端设置代理proxy跨域
因为JS同源策略是浏览器的安全策略，所以在浏览器客户端不能跨域访问，而服务器端调用HTTP接口只是使用HTTP协议，不会执行JS脚本，不需要同源策略，也就没有跨越问题。简单地说，就是浏览器不能跨域，后台服务器可以跨域。

- demo1
通过使用`http-proxy-middleware插件`设置后端的代理，在 http://localhost:3000 运行

- demo2
不使用插件配置代理，直接使用`http模块`发出请求， 在 http://localhost:3000 运行


## Demo8: WebSocket跨域
WebSocket是一种通信协议，使用ws://（非加密）和wss://（加密）作为协议前缀。该协议不实行同源政策，只要服务器支持，就可以通过它进行跨源通信。
> 项目运行地址： http://localhost:3000/a.html

## Demo9: form表单跨域
- [为什么form表单提交没有跨域问题，但ajax提交有跨域问题](https://www.zhihu.com/question/31592553)
- [表单可以跨域吗?](https://github.com/frontend9/fe9-interview/issues/1)

## Demo10: 关闭浏览器跨域限制
可以使用[chrome插件CORS](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=zh-CN)
