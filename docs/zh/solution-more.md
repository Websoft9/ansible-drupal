# 更多...

下面每一个方案，都经过实践证明行之有效，希望能够对你有帮助

## 域名绑定

绑定域名的前置条件是：已经完成域名解析（登录域名控制台，增加一个A记录指向服务器公网IP）  

完成域名解析后，从服务器安全和后续维护考量，需要完成**域名绑定**：

Drupal 域名绑定操作步骤：

1. 使用 SFTP 工具登录云服务器
2. 修改 [虚拟机主机配置文件](/zh/stack-components.html#apache)，将其中的域名相关的值
   ```text
   #### Drupal(LAMP) bind domain #### 

     <VirtualHost *:80>
     ServerName  www.mydomain.com # 修改成您的实际域名
     DocumentRoot "/data/wwwroot/drupal"
     ...
     
   #### Drupal(LNMP) bind domain #### 

     server {
      listen 80;
      server_name drupal.example.com; # 修改成您的实际域名
     ...

   ```
3. 保存配置文件，[重启服务](/zh/admin-services.html#apache)

## Drupal 更换域名

如果 Drupal 需要更换域名，具体操作如下：

1. 完成新的域名解析和域名绑定
2. 检查 [Drupal 配置文件](/zh/stack-components.html#drupal)中的域名值
3. 检查 Drupal 根目录下 `.htaccess` 文件中域名值
4. [重启 PHP-FPM 服务](/zh/admin-services.html#php-fpm)后生效

## Drupal 多语言

Drupal 支持多语言，下面是安装并设置多语言的主要步骤：

1. 登录 Drupal，在后台 【管理】>【配置】>【地区和语言】中安装语言
  ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/drupal-addlanguage-websoft9.png)

2. 安装新语言后，根据实际需要，设置默认语言

## Drupal 安装扩展

Drupal 提供的 [Drupal Modules](https://www.drupal.org/project/project_module)包含大量的扩展，下面介绍如何安装它们

1. 打开 [Drupal Modules](https://www.drupal.org/project/project_module)网站，搜寻所需的扩展
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/drupal/drupal-searchformodule-websoft9.png)

2. 获取扩展的下载地址
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/drupal/drupal-dlmodule-websoft9.png)

3. 登录 Drupal 后台，打开安装扩展的界面
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/drupal/drupal-extend-websoft9.png)

4. 通过输入下载地址，在线安装扩展
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/drupal-installsmtp-websoft9.png)

5. 安装完成
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/drupal/drupal-moduleinstalled-websoft9.png)

6. 最后，需要到模块管理中启用刚安装的插件
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/drupal-enablemodule-websoft9.png)

## Drupal 安装主题

Drupal 提供的 [Drupal Themes](https://www.drupal.org/project/project_theme) 包含大量的主题，下面介绍如何安装它们

1. 打开 [Drupal Themes](https://www.drupal.org/project/project_theme) 网站，搜寻所需的主题
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/drupal-searchthemes-websoft9.png)

2. 获取主题的下载地址
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/drupal-themesurl-websoft9.png)

3. 打开 【扩展管理】>【安装扩展】，输入下载地址，开始安装
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/drupal-installsmtp-websoft9.png)

4. 安装后，打开【外观】，找到已经在线安装的主题，启用它
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/drupal-themeenable-websoft9.png)

> 有些模板提供商，提供的模板压缩包中包含 Drupal 内核文件，这种情况下 **安装模板=安装Drupal**

## Drupal 重置管理员密码

如果忘记了管理员密码，可以参考 [此处](https://www.drupal.org/node/44164) 重置密码