# vue组件的核心组成之一[插槽]](https://cn.vuejs.org/v2/guide/components-slots.html)

## 属性主要有两大类

1. 普通插槽: <template slot="xxx"></template>  <template v-slot:xxx></template>
2. 作用域插槽: <template slot="xxx" slot-scope="props"></template>  <template v-slot:xxx="props"></tempalte>