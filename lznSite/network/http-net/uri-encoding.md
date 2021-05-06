# URI编码

## 需要进行URI编码的情况

* 传递的数据中，如果存在用作分隔符的保留字符时需要编码
* 可能产生歧义的数据需要编码
    * 不在ASCII码范围内的字条
    * [ASCII](https://zh.wikipedia.org/wiki/ASCII)码中不可显示的字条
    * URI中规定的保留字符
    * 不安全字条(传输环节中可能会被不正确处理，如空格、引号、尖括号等)

示例：

* https://api.test.doamin.com/q?pram=?#543!  
  #号是fragment的分隔符，不进行编码的话#号后面的内容会被截断
* https://api.test.doamin.com/q?pram=你好 编码  
  如果此URL直接在浏览器输入能正常工作，因为浏览器会对空格进行编码，如果在编程语言中直接这样写可能会有问题
* https://api.test.doamin.com/q?pram=你好'>编 码  
  此种情况有可能中间的代理服务器会将pram后面的内容进行截断，要先进行编码

## 保留字符与非保留字符

* 保留字符，主要有两种：gen-delims, sub-delims
    * gen-delims: : / ? # [ ] @
    * sub-delims: ! $ & ' ( ) * + , ; =
* 非保留字符
    * 字母(ALPHA): %41-%5A and %61-%7A
    * 数字(DIGIT): %30-%39
    * \- :  %2D
    * . :  %2E
    * _ :  %5F
    * ~ :  %7E, 有些实现会将此符号认为保留字符    
    
## URI编码的格式

* 百分号编码的格式: %加两个16进制的数字
    * pct-encoded: % HEXDIG HEXDIG
    * US-ASCII: 128个字符(95个可显示字符，33个不可显示字符)，参考：https://zh.wikipedia.org/wiki/ASCII
    * 对于HEXDIG十六进制中的字母，大小写等价
* 非ASCII码字符(如中文): 建议先UTF8编码，再US-ASCII编码
* 对于URI合法字符，编码与不编码是等价的