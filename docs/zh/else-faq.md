# FAQ

#### Drupal 支持多语言吗？

支持多语言（包含中文），建议在初始化安装的时候安装多语言

#### Drupal(LAMP)，Drupal(LNMP)等商品括号中的 LAMP,LNMP 是什么意思？

LAMP和LNMP代表支持 Drupal 运行所对应的基础环境，具体参考[环境说明](/zh/admin-runtime.html)

#### 是否可以使用云平台的 RDS 作为 Drupal 的数据库？

可以，修改 [Drupal 配置文件](/zh/stack-components.html#drupal) 即可

#### Drupal能在 Windows 服务器上运行吗？

可以，但是我们推荐在运行 Drupal 效率更高的 Linux 服务器上运行

#### Drupal数据库连接配置信息在哪里？

数据库配置信息 [Drupal 配置文件](/zh/stack-components.html#drupal)中

#### 如果没有域名是否可以部署 Drupal？

可以，访问`http://服务器公网IP` 即可

#### 数据库 root 用户对应的密码是多少？

密码存放在服务器相关文件中：`/credentials/password.txt`

#### 是否有可视化的数据库管理工具？

有，内置 phpMyAdmin on Docker，访问地址：http://服务器公网IP:9090

#### 如何禁止 phpMyAdmin 访问？

```
sudo docker stop phpmyadmin
```

#### 是否可以修改 Drupal 的源码路径？

可以，通过修改 [虚拟主机配置文件](/zh/stack-components.md#drupal)中相关参数

#### 如何修改上传的文件权限?

```shell
#Drupal(LAMP)
chown -R apache.apache /data/wwwroot

#Drupal(LNMP)
chown -R nginx.nginx /data/wwwroot

find /data/wwwroot -type d -exec chmod 750 {} \;
find /data/wwwroot -type f -exec chmod 640 {} \;
```
#### 部署和安装有什么区别？

部署是将一序列软件按照不同顺序，先后安装并配置到服务器的过程，是一个复杂的系统工程。  
安装是将单一的软件拷贝到服务器之后，启动安装向导完成初始化配置的过程。  
安装相对于部署来说更简单一些。 

#### 云平台是什么意思？

云平台指提供云计算服务的平台厂家，例如：Azure,AWS,阿里云,华为云,腾讯云等

#### 实例，云服务器，虚拟机，ECS，EC2，CVM，VM有什么区别？

没有区别，只是不同厂家所采用的专业术语，实际上都是云服务器