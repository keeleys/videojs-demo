# video.js 功能测试

```bash
yarn
yarn run dev

open http://localhost:8080/
```

## 一些问题

* require video-js.css的时候 webpack必须要配置下 `url-loader` ，因为css里面有引用一些二进制文件来着。

* `play.currentTime`这个设置播放时间的时候 flash模式下面不能直接用 否则无限加载。
```js
setTimeout(function() { me.currentTime(20); }, 300);
```