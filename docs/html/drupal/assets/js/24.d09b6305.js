(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{198:function(a,r,t){"use strict";t.r(r);var e=t(0),s=Object(e.a)({},function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[a._v("#")]),a._v(" FAQ")]),a._v(" "),t("h4",{attrs:{id:"drupal-支持多语言吗？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drupal-支持多语言吗？","aria-hidden":"true"}},[a._v("#")]),a._v(" Drupal 支持多语言吗？")]),a._v(" "),t("p",[a._v("支持多语言（包含中文），建议在初始化安装的时候安装多语言")]),a._v(" "),t("h4",{attrs:{id:"drupal-lamp-，drupal-lnmp-等商品括号中的-lamp-lnmp-是什么意思？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drupal-lamp-，drupal-lnmp-等商品括号中的-lamp-lnmp-是什么意思？","aria-hidden":"true"}},[a._v("#")]),a._v(" Drupal(LAMP)，Drupal(LNMP)等商品括号中的 LAMP,LNMP 是什么意思？")]),a._v(" "),t("p",[a._v("LAMP和LNMP代表支持 Drupal 运行所对应的基础环境，具体参考"),t("router-link",{attrs:{to:"/zh/admin-runtime.html"}},[a._v("环境说明")])],1),a._v(" "),t("h4",{attrs:{id:"是否可以使用云平台的-rds-作为-drupal-的数据库？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#是否可以使用云平台的-rds-作为-drupal-的数据库？","aria-hidden":"true"}},[a._v("#")]),a._v(" 是否可以使用云平台的 RDS 作为 Drupal 的数据库？")]),a._v(" "),t("p",[a._v("可以，修改 "),t("router-link",{attrs:{to:"/zh/stack-components.html#drupal"}},[a._v("Drupal 配置文件")]),a._v(" 即可")],1),a._v(" "),t("h4",{attrs:{id:"drupal能在-windows-服务器上运行吗？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drupal能在-windows-服务器上运行吗？","aria-hidden":"true"}},[a._v("#")]),a._v(" Drupal能在 Windows 服务器上运行吗？")]),a._v(" "),t("p",[a._v("可以，但是我们推荐在运行 Drupal 效率更高的 Linux 服务器上运行")]),a._v(" "),t("h4",{attrs:{id:"drupal数据库连接配置信息在哪里？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drupal数据库连接配置信息在哪里？","aria-hidden":"true"}},[a._v("#")]),a._v(" Drupal数据库连接配置信息在哪里？")]),a._v(" "),t("p",[a._v("数据库配置信息 "),t("router-link",{attrs:{to:"/zh/stack-components.html#drupal"}},[a._v("Drupal 配置文件")]),a._v("中")],1),a._v(" "),t("h4",{attrs:{id:"如果没有域名是否可以部署-drupal？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果没有域名是否可以部署-drupal？","aria-hidden":"true"}},[a._v("#")]),a._v(" 如果没有域名是否可以部署 Drupal？")]),a._v(" "),t("p",[a._v("可以，访问"),t("code",[a._v("http://服务器公网IP")]),a._v(" 即可")]),a._v(" "),t("h4",{attrs:{id:"数据库-root-用户对应的密码是多少？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库-root-用户对应的密码是多少？","aria-hidden":"true"}},[a._v("#")]),a._v(" 数据库 root 用户对应的密码是多少？")]),a._v(" "),t("p",[a._v("密码存放在服务器相关文件中："),t("code",[a._v("/credentials/password.txt")])]),a._v(" "),t("h4",{attrs:{id:"是否有可视化的数据库管理工具？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#是否有可视化的数据库管理工具？","aria-hidden":"true"}},[a._v("#")]),a._v(" 是否有可视化的数据库管理工具？")]),a._v(" "),t("p",[a._v("有，内置phpMyAdmin，访问地址：http://服务器公网IP/phpmyadmin")]),a._v(" "),t("h4",{attrs:{id:"如何禁止phpmyadmin访问？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何禁止phpmyadmin访问？","aria-hidden":"true"}},[a._v("#")]),a._v(" 如何禁止phpMyAdmin访问？")]),a._v(" "),t("p",[a._v("连接服务器，编辑 phpMyAdmin 配置文件，将其中的 Require all granted 更改为 Require ip 192.160.1.0，然后重启 Apache 服务")]),a._v(" "),t("h4",{attrs:{id:"是否可以修改-drupal-的源码路径？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#是否可以修改-drupal-的源码路径？","aria-hidden":"true"}},[a._v("#")]),a._v(" 是否可以修改 Drupal 的源码路径？")]),a._v(" "),t("p",[a._v("可以，通过修改 "),t("router-link",{attrs:{to:"/zh/stack-components.html#drupal"}},[a._v("虚拟主机配置文件")]),a._v("中相关参数")],1),a._v(" "),t("h4",{attrs:{id:"如何修改上传的文件权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何修改上传的文件权限","aria-hidden":"true"}},[a._v("#")]),a._v(" 如何修改上传的文件权限?")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#Drupal(LAMP)\nchown -R apache.apache /data/wwwroot\n\n#Drupal(LNMP)\nchown -R nginx.nginx /data/wwwroot\n\nfind /data/wwwroot -type d -exec chmod 750 {} \\;\nfind /data/wwwroot -type f -exec chmod 640 {} \\;\n")])])]),t("h4",{attrs:{id:"部署和安装有什么区别？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署和安装有什么区别？","aria-hidden":"true"}},[a._v("#")]),a._v(" 部署和安装有什么区别？")]),a._v(" "),t("p",[a._v("部署是将一序列软件按照不同顺序，先后安装并配置到服务器的过程，是一个复杂的系统工程。"),t("br"),a._v("\n安装是将单一的软件拷贝到服务器之后，启动安装向导完成初始化配置的过程。"),t("br"),a._v("\n安装相对于部署来说更简单一些。")]),a._v(" "),t("h4",{attrs:{id:"云平台是什么意思？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#云平台是什么意思？","aria-hidden":"true"}},[a._v("#")]),a._v(" 云平台是什么意思？")]),a._v(" "),t("p",[a._v("云平台指提供云计算服务的平台厂家，例如：Azure,AWS,阿里云,华为云,腾讯云等")]),a._v(" "),t("h4",{attrs:{id:"实例，云服务器，虚拟机，ecs，ec2，cvm，vm有什么区别？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例，云服务器，虚拟机，ecs，ec2，cvm，vm有什么区别？","aria-hidden":"true"}},[a._v("#")]),a._v(" 实例，云服务器，虚拟机，ECS，EC2，CVM，VM有什么区别？")]),a._v(" "),t("p",[a._v("没有区别，只是不同厂家所采用的专业术语，实际上都是云服务器")])])},[],!1,null,null,null);r.default=s.exports}}]);