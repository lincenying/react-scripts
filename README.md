# mmf-blog react版

demo: [http://www.mmxiaowu.com](http://www.mmxiaowu.com)

react: [https://github.com/lincenying/mmf-blog-react](https://github.com/lincenying/mmf-blog-react)

dva(react): [https://github.com/lincenying/mmf-blog-dva](https://github.com/lincenying/mmf-blog-dva)

vue1: [https://github.com/lincenying/mmf-blog-vue](https://github.com/lincenying/mmf-blog-vue)

vue2-template: [https://github.com/lincenying/mmf-blog-vue2](https://github.com/lincenying/mmf-blog-vue2)

vue2-jsx: [https://github.com/lincenying/mmf-blog-vue2-jsx](https://github.com/lincenying/mmf-blog-vue2-jsx)

vue2-jsx-leancloud: [https://github.com/lincenying/mmf-blog-vue2-jsx-lc](https://github.com/lincenying/mmf-blog-vue2-jsx-lc)

vue2-template 服务端渲染: [https://github.com/lincenying/mmf-blog-vue2-ssr](https://github.com/lincenying/mmf-blog-vue2-ssr) // 未完成

---

先安装 api server: https://github.com/lincenying/mmf-blog-api

```
// 1. 安装依赖
npm install  or  yarn

// 2. 利用DllPlugin打包依赖库 (当src/template/vendors.js里的依赖库没有更新, 则不需要重复执行该命令)
npm run dll

// 3.1 生成静态文件
npm run build

// 3.2 开发模式
npm run dev

或者

npm run start
```

首页
http://localhost:8080

登录
http://localhost:8080/login.html
