### 问答题
##### 1. pattern 属性有什么用？我们可以通过它来实现哪种类型的表单验证，不能实现哪种表单验证？
pattern属性规定用于验证input标签域的模式。pattern就是正则表达式，它不能实现需要多个标签联合的表单验证。
##### 2. required 属性怎么设置？它和 pattern 属性的设置有什么不同？
required属性规定必须在提交之前填写输入域（不能为空）。它只需要在标签属性中写入required即可。
##### 3. html5 中如何实现自定义表单验证？其核心思想是通过调用什么函数？
核心思想是通过调用inputElement.setCustomValidity(string)函数，如果函数内的参数string为空，那么代表用户的输入满足要求，如果不为空，则用户输入不满足要求。
##### 4. inputElement.validity 有哪些属性，各是代表什么意思？实践中我们可以使用它来实现什么？
1）valueMissing：缺失值
2）typeMismatch：类型不匹配
3）patternMismatch：模式不匹配
4）tooLong：太长
5）rangeUnderflow：比规定范围小
6）rangeOverflow：比规定范围大
7）stepMismatch：step不匹配
8）customError：用户自定义模式错误
实践中可以通过这些属性判断用户哪些属性没有满足，从而给用户提供相应的反馈。


---
### 代码题
代码题1：前端：https://github.com/PangYunsheng8/mfs-senior/blob/master/9.%E5%A4%8D%E6%9D%82%E8%A1%A8%E5%8D%95/display/cities_frontend.html
后端：https://github.com/PangYunsheng8/mfs-senior/blob/master/9.%E5%A4%8D%E6%9D%82%E8%A1%A8%E5%8D%95/display/cities_backend.js
代码题2：前端：https://github.com/PangYunsheng8/mfs-senior/blob/master/9.%E5%A4%8D%E6%9D%82%E8%A1%A8%E5%8D%95/display/form_frontend.html
后端：https://github.com/PangYunsheng8/mfs-senior/blob/master/9.%E5%A4%8D%E6%9D%82%E8%A1%A8%E5%8D%95/display/form_backend.js