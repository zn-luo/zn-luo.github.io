(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{431:function(i,_,t){"use strict";t.r(_);var v=t(17),r=Object(v.a)({},(function(){var i=this,_=i._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[_("h1",{attrs:{id:"uri编码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#uri编码"}},[i._v("#")]),i._v(" URI编码")]),i._v(" "),_("h2",{attrs:{id:"需要进行uri编码的情况"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#需要进行uri编码的情况"}},[i._v("#")]),i._v(" 需要进行URI编码的情况")]),i._v(" "),_("ul",[_("li",[i._v("传递的数据中，如果存在用作分隔符的保留字符时需要编码")]),i._v(" "),_("li",[i._v("可能产生歧义的数据需要编码\n"),_("ul",[_("li",[i._v("不在ASCII码范围内的字条")]),i._v(" "),_("li",[_("a",{attrs:{href:"https://zh.wikipedia.org/wiki/ASCII",target:"_blank",rel:"noopener noreferrer"}},[i._v("ASCII"),_("OutboundLink")],1),i._v("码中不可显示的字条")]),i._v(" "),_("li",[i._v("URI中规定的保留字符")]),i._v(" "),_("li",[i._v("不安全字条(传输环节中可能会被不正确处理，如空格、引号、尖括号等)")])])])]),i._v(" "),_("p",[i._v("示例：")]),i._v(" "),_("ul",[_("li",[i._v("https://api.test.doamin.com/q?pram=?#543!"),_("br"),i._v("\n#号是fragment的分隔符，不进行编码的话#号后面的内容会被截断")]),i._v(" "),_("li",[i._v("https://api.test.doamin.com/q?pram=你好 编码"),_("br"),i._v("\n如果此URL直接在浏览器输入能正常工作，因为浏览器会对空格进行编码，如果在编程语言中直接这样写可能会有问题")]),i._v(" "),_("li",[i._v("https://api.test.doamin.com/q?pram=你好'>编 码"),_("br"),i._v("\n此种情况有可能中间的代理服务器会将pram后面的内容进行截断，要先进行编码")])]),i._v(" "),_("h2",{attrs:{id:"保留字符与非保留字符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#保留字符与非保留字符"}},[i._v("#")]),i._v(" 保留字符与非保留字符")]),i._v(" "),_("ul",[_("li",[i._v("保留字符，主要有两种：gen-delims, sub-delims\n"),_("ul",[_("li",[i._v("gen-delims: : / ? # [ ] @")]),i._v(" "),_("li",[i._v("sub-delims: ! $ & ' ( ) * + , ; =")])])]),i._v(" "),_("li",[i._v("非保留字符\n"),_("ul",[_("li",[i._v("字母(ALPHA): %41-%5A and %61-%7A")]),i._v(" "),_("li",[i._v("数字(DIGIT): %30-%39")]),i._v(" "),_("li",[i._v("- :  %2D")]),i._v(" "),_("li",[i._v(". :  %2E")]),i._v(" "),_("li",[i._v("_ :  %5F")]),i._v(" "),_("li",[i._v("~ :  %7E, 有些实现会将此符号认为保留字符")])])])]),i._v(" "),_("h2",{attrs:{id:"uri编码的格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#uri编码的格式"}},[i._v("#")]),i._v(" URI编码的格式")]),i._v(" "),_("ul",[_("li",[i._v("百分号编码的格式: %加两个16进制的数字\n"),_("ul",[_("li",[i._v("pct-encoded: % HEXDIG HEXDIG")]),i._v(" "),_("li",[i._v("US-ASCII: 128个字符(95个可显示字符，33个不可显示字符)，参考：https://zh.wikipedia.org/wiki/ASCII")]),i._v(" "),_("li",[i._v("对于HEXDIG十六进制中的字母，大小写等价")])])]),i._v(" "),_("li",[i._v("非ASCII码字符(如中文): 建议先UTF8编码，再US-ASCII编码")]),i._v(" "),_("li",[i._v("对于URI合法字符，编码与不编码是等价的")])])])}),[],!1,null,null,null);_.default=r.exports}}]);