# vue组件的核心组成之一[属性](https://cn.vuejs.org/v2/guide/components-props.html)

## 属性主要有三大类

1. 自定义属性props：组件props中声明的属性
2. 原生属性: 没有声明的属性，默认自动挂载到组件根元素上，设置inheritAttrs为false可以关闭自动挂载
3. 特殊属性class、style、key等：挂载到组件根元素上，支持字符串、对象、数组等多种语法