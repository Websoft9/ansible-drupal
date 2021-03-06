# 初始化安装

在云服务器上部署 Drupal 预装包之后，请参考下面的步骤快速入门。

## 准备

1. 在云控制台获取您的 **服务器公网IP地址** 
2. 在云控制台安全组中，检查 **Inbound（入）规则** 下的 **TCP:80** 端口是否开启
3. 若想用域名访问 Drupal，请先到 **域名控制台** 完成一个域名解析

## Drupal 安装向导

1. 使用本地电脑的 Chrome 或 Firefox 浏览器访问网址：*http://域名* 或 *http://服务器公网IP*, 进入引导页

2.  选择一门语言，进入下一步
    ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/drupal-install001-websoft9.png)

3.  选择一种安装方式，进入下一步
    ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/drupal-install002-websoft9.png)

4.  填写您的数据库参数（[查看数据库账号密码](/zh/stack-accounts.md#mysql)），保存并继续;
    ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/drupal-install003-websoft9.png)

5.  分别完成网站安装和翻译安装
    ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/drupal-install004-websoft9.png)

6.  设置网站信息。站点维护账号及后台账号，请务必设置好并牢记之。进入下一步
    ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/drupal-install005-websoft9.png)

7.  系统完成最后一步安装

8.  进入Drupal后台，体验完整功能
    ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/drupal-backend-websoft9.png)

> 需要了解更多 Drupal 的使用，请参考官方文档：[Drupal Community Guides](https://www.drupal.org/documentation)

## Drupal 入门向导

Coming soon...

## 常见问题

#### 安装后有错误提示？

参考本文档之 [故障处理](/zh/else-troubleshooting.md) 章节

#### 浏览器打开IP地址，无法访问 Drupal（白屏没有结果）？

您的服务器对应的安全组80端口没有开启（入规则），导致浏览器无法访问到服务器的任何内容

#### 本部署包采用的哪个数据库来存储 Drupal 数据？

是MySQL

#### 是否可以采用云厂商提供的 RDS 来存储 Drupal 数据？

可以

