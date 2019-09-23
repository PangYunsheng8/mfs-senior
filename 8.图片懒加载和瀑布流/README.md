### 问答题
##### 1. 什么是图片懒加载？
图片懒加载是指：img元素在页面加载时并不加载实际的图片，只有当图片出现在浏览器的可视区域内时，才设置图片正真的路径，让图片显示出来。
##### 2. 为什么要使用图片懒加载？
1）减轻服务器的压力
2）加速用户网页加载速度（用户体验好）
3）节省网络流量
##### 3. 实现图片的懒加载的思路是什么？
1）先不设置img标签的src属性，因此开始图片不会显示出来
2）计算图片是否进入可视区域时
3）若图片进入可视区域，设置img标签的src属性，让图片显示出来
##### 4. 图片懒加载可能使得文档重排，造成不好的用户体验，这是为什么？我们应该怎么解决？
因为图片在未加载时是不知道其宽和高的,当图片加载完成后,其高度和宽度会显示出来，因此会影响文档中其他内容的布局。
可以在图片未加载前从服务器端获取图片的宽高数据。
##### 5. 什么是瀑布流布局？
瀑布流布局表现为参差不齐的多栏布局，随着页面滚动条向下滚动，这种布局还会不断加载数据块并附加至当前尾部。
##### 6. 为了使瀑布流布局的每一列尽可能等高，我们需要使用什么算法
贪心算法：
1）各列高度初始化为 0
2）寻找各列之中所有元素高度之和的最小者
3）将新的元素添加到该列上
4）该列高度加上新元素的高度
5）如果还有未添加元素，跳转至第2）步
##### 7. 我们一般绑定 onscroll 事件来实现加载更多，但是 onscroll 调用次数过多，一般我们可以通过使用什么方法来解决这个问题？
可以通过设置setTimeout函数来解决，例如：
```javascript
var timer;
window.onscroll = function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
        // var img = selector;
        // img.each(function () {
        //     var ele = $(this)
        //     if (isShow(ele)) {
        //         console.log("load img")
        //         ele.attr("src", ele.data("src"));
        //     }
        // })
    }, 50);
}
```

---
### 代码题
代码题1.预览：https://pangyunsheng8.github.io/mfs-senior/8.%E5%9B%BE%E7%89%87%E6%87%92%E5%8A%A0%E8%BD%BD%E5%92%8C%E7%80%91%E5%B8%83%E6%B5%81lazy.html
代码：https://github.com/PangYunsheng8/mfs-senior/blob/master/8.%E5%9B%BE%E7%89%87%E6%87%92%E5%8A%A0%E8%BD%BD%E5%92%8C%E7%80%91%E5%B8%83%E6%B5%81/lazy_img.html
代码题2：
代码：
https://github.com/PangYunsheng8/mfs-senior/blob/master/8.%E5%9B%BE%E7%89%87%E6%87%92%E5%8A%A0%E8%BD%BD%E5%92%8C%E7%80%91%E5%B8%83%E6%B5%81/pubu.html