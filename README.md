### 跨域的简单小demo
这是一个关于跨域的简单demo集合，在demo里面会加上自己的理解并添加相应的注释，尽量以简单的demo介绍跨域的方法，非常适合新手学习跨域的。所有demo都是使用基于nodeJs的Web开发框架Express，需要一点点nodeJS的知识，如果不会nodeJS也没关系，注释里面会详细解释说明。
> 如果还有其他没提及的跨域方法，欢迎PR，谢谢！
如果要收藏的话，欢迎star。

#### 配置文件解释
- .gitattributes配置文件，可以改变这个github项目的语言标签
- .gitignore配置文件，设置使用git上传时忽略哪些文件
- package.json配置文件，主要是为了`npm install`而存在，安装express等模块
- readme.md配置文件，在github上面展示说明项目，也就是现在正在看的文档
### Set Up
运行环境
- node.js 全局安装
- npm 全局安装

运行步骤
1. `git clone git@github.com:FatDong1/cross-domain`
2. cross-domain目录下npm install，下载项目所需的依赖
3. 进入对应的demo目录，①node serverRes.js  ②重新开一个dos窗口   ③node serverReq.js
4. 或者在对应的demo目录下，dos窗口输入`run.bat`，直接一步完成上面的①②③

### 1. CORS跨域

项目运行起来之后，
- 请求数据页面地址： http://localhost:3000
- 查看数据： http://localhost:3001


### 2. JSONP跨域

项目运行起来后，
- 请求页面： http://localhost:3000
- 响应页面为 http://localhost:3001

### 3. postMessage跨域
这是html5的新API，适用于不同窗口iframe之间的跨域

> 项目运行地址： http://localhost:3000

### 4. window.name跨域

在 http://localhost:3000/a.html 使用js动态生成一个隐藏的iframe，设置src属性为' http://localhost:3001/c.html '，等这个iframe加载完之后，重新设置src属性为同源的地址' http://localhost:3000/b.html '(b.html是一个空的html文件)，现在iframe与a.html同源，那就可以访问window.name属性，而name值没有变化，因为window.name属性在不同的页面（甚至不同域名）加载后依旧存在。


> 项目运行地址： http://localhost:3000/a.html

### 5. location.hash跨域
在 http://localhost:3000/a.html 使用js动态生成一个隐藏的iframe，设置src属性为' http://localhost:3001/c.html#getdata '，在c.html判断hash值是否为'#getdata'，如果为'#getdata'，则在当前的iframe(c.html)中再生成一个隐藏的iframe，其src属性指向' http://localhost:3000/b.html '，因为a.html和b.html同源，所以可以在b.html里面修改a.html的hash值，这样a.html就可以通过获取自身的hash值得到数据
> 项目运行地址： http://localhost:3000/a.html

### 6. document.domain跨域
document.domain设置成自身或更高一级的父域，且主域必须相同。

#### 注意！！
这是挂在我自己腾讯云域名(xuhaodong.cn)上的demo，所以抱歉这个demo无法在本地运行。不过我只是把demo放到了云服务器上，代码还是一样的，没有修改过。

> 线上访问地址： http://a.xuhaodong.cn/a.html


如果要在本地运行的话，需要搭建一个本地web服务器，
参考链接：https://github.com/web2hack/proxy

### 7. 后端设置代理proxy跨域
因为JS同源策略是浏览器的安全策略，所以在浏览器客户端不能跨域访问，而服务器端调用HTTP接口只是使用HTTP协议，不会执行JS脚本，不需要同源策略，也就没有跨越问题。简单地说，就是浏览器不能跨域，后台服务器可以跨域。

- demo1
通过使用`http-proxy-middleware插件`设置后端的代理，在 http://localhost:3000 运行

- demo2
不使用插件配置代理，直接使用`http模块`发出请求， 在 http://localhost:3000 运行


### 8. WebSocket跨域
WebSocket是一种通信协议，使用ws://（非加密）和wss://（加密）作为协议前缀。该协议不实行同源政策，只要服务器支持，就可以通过它进行跨源通信。
> 项目运行地址： http://localhost:3000/a.html

