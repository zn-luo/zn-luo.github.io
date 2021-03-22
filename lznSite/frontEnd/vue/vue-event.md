# vue组件的核心组成之一[事件](https://cn.vuejs.org/v2/guide/events.html)

## 属性主要有两大类

1. 普通事件：@click,@input,@change等事件，通过this.$emit("事件名",...)触发
2. 修饰符 事件：@input.trim，@click.stop,@submit,prevent等一般用于原生html元素，自定义组件需要自行开发支持