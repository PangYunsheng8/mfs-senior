### 问答题
##### 1. pattern 属性有什么用？我们可以通过它来实现哪种类型的表单验证，不能实现哪种表单验证？
pattern属性规定用于验证input标签域的模式。pattern就是正则表达式，它不能实现需要多个标签联合的表单验证。
##### 2. required 属性怎么设置？它和 pattern 属性的设置有什么不同？
required属性规定必须在提交之前填写输入域（不能为空）。它只需要在标签属性中写入required即可。
##### 3. html5 中如何实现自定义表单验证？其核心思想是通过调用什么函数？
##### 4. inputElement.validity 有哪些属性，各是代表什么意思？实践中我们可以使用它来实现什么？
1）valueMissing
2）typeMismatch
3）patternMismatch
4）tooLong
5）rangeUnderflow
6）rangeOverflow
7）stepMismatch
8）customError

---
### 代码题