# 写给前端的 Docker 实战教程

本篇文章详细而又简短的介绍了：一名完全不了解 Docker 前端程序员，将全站 Docker 化的过程。内容主要包含：

- Docker 基本概念
- 真实站点迁移过程：
  - 静态站点
  - Nodejs 站点(Express)
  - WordPress(PHP)
- 一些必备技巧：开机启动、常用 Shell

文章会讲解使用 Docker 过程中用到的全部技术栈（Github CI、Nginx 反向代理、docker-compose），绝不会出现“详见：[http://xxx](https://link.juejin.im?target=http%3A%2F%2Fxxx)”甩链接的情况

无需再查阅其他文档，看着一篇就够了！

[![good](https://user-gold-cdn.xitu.io/2019/9/20/16d4c9d635accdca?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)](https://link.juejin.im?target=https%3A%2F%2Fuser-gold-cdn.xitu.io%2F2019%2F9%2F20%2F16d4c9d635accdca%3Fw%3D468%26h%3D266%26f%3Dpng%26s%3D196550)

## 当前有哪些问题

### 手动部署成本太高

笔者维护了诸多网站，其中包含：

- 我的简历：[pea3nut.info](https://link.juejin.im?target=http%3A%2F%2Fpea3nut.info%2F)，使用 Vuejs 构建的 SPA 单页应用，纯静态
- 我的博客：[pea3nut.blog](https://link.juejin.im?target=http%3A%2F%2Fpea3nut.blog%2F)，使用著名的 WordPress 搭建(PHP+Apache+MySQL)
- 一个开源项目——Pxer：[pxer.pea3nut.org](https://link.juejin.im?target=http%3A%2F%2Fpxer.pea3nut.org%2F)，官网使用 Nodejs + Express SSR 搭建

而每次我想修改某个网站内容是十分麻烦的。拿大家熟悉的纯静态站点来说，修改过程如下：

- 下载：从 Github 下载代码，然后本地`npm install`
- 开发：`npm run dev`本地修改代码，测试
- 编译：`npm run build`使用 Webpack 进行编译，产出静态资源
- 上传：打开 FTP 软件，上传替换文件
- 测试：看看网站是否在线上工作正常
- 提交：将代码提交到 Github

哪怕我只是修改个错别字，都要十几分钟

网站太多，改动太频繁，而每次不管多小的改动都很麻烦。简直让我感觉自己在维护一个万级 QPS 的大型项目

### 某个服务挂了，我不懂 Linux 无法排查

最近我发现我的 MySQL 进程总是挂掉，导致所有依赖于 MySQL 的站点都挂了

我也不知道为什么，之前还是好好的

[![why](https://user-gold-cdn.xitu.io/2019/9/20/16d4c9d7642779d3?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)](https://link.juejin.im?target=https%3A%2F%2Fuser-gold-cdn.xitu.io%2F2019%2F9%2F20%2F16d4c9d7642779d3%3Fw%3D980%26h%3D557%26f%3Dpng%26s%3D410514)

我尝试了重启进程、重启服务器、捞报错日志百度，均未奏效

好吧，其实我不太懂 Linux，也不太懂 MySQL，我只是想用下他们搭建 WordPress 站点。而最近总出问题，让我意识到：

**我不仅要维护站点，我还要维护环境**

这个对于一名前端来说太难了，装个 nvm 就已经是我的极限了。MySQL 无缘无故挂掉，我根本没有能力查出个一二三四，然后解决它

我不仅要保证站点本地能跑通，还必须要部署在远程 VP S 稳定运行。。。

[![i-am-so-hard](data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="782" height="668"></svg>)](https://link.juejin.im?target=https%3A%2F%2Fuser-gold-cdn.xitu.io%2F2019%2F9%2F20%2F16d4c9d635c845e9%3Fw%3D782%26h%3D668%26f%3Djpeg%26s%3D110578)

重启不行。。。那就只能重装系统了

可是，由于搭建了许多站点，VP S 服务器环境相当复杂（或许这就是 MySQL 挂掉的原因），光 Apache 配置文件都几百行了。重做系统的迁移成本，光是想一想就耗光了我所有的勇气

## 新的技术方案——Docker

总结一下有如下问题：

- 手动部署成本太高，改错别字都很麻烦
- 一台服务器由于时间累积导致环境变得“脏乱差”
- 重装系统成本太高，难以迁移

而 Docker，正是我解决所有问题[SCP-500 万能药](https://link.juejin.im?target=http%3A%2F%2Fscp-wiki-cn.wikidot.com%2Fscp-500)！

那么 Docker 是如何做的呢？

### 镜像与容器

Docker 中有两个重要概念。

一个是容器（Container）：容器特别像一个虚拟机，容器中运行着一个完整的操作系统。可以在容器中装 Nodejs，可以执行`npm install`，可以做一切你当前操作系统能做的事情

另一个是镜像（Image）：镜像是一个文件，它是用来创建容器的。如果你有装过 Windows 操作系统，那么 Docker 镜像特别像“Win7 纯净版.rar”文件

上边就是你所需要了解的 Docker 全部基础知识。就这么简单

顺便一提，在 Docker 中，我们通常称你当前使用的真实操作系统为“宿主机”(Host)

### 安装 Docker

安装 Docker 在你的电脑上就像安装 VS Code 一样简单

> 如果你使用的是 Windows 电脑，需要购买支持虚拟化的版本。如 Win10 专业版，Win10 家庭版是不行的

- Mac：[download.docker.com/mac/stable/…](https://link.juejin.im?target=https%3A%2F%2Fdownload.docker.com%2Fmac%2Fstable%2FDocker.dmg)
- Windows：[download.docker.com/win/stable/…](https://link.juejin.im?target=https%3A%2F%2Fdownload.docker.com%2Fwin%2Fstable%2FDocker%2520for%2520Windows%2520Installer.exe)
- Linux：[get.docker.com/](https://link.juejin.im?target=https%3A%2F%2Fget.docker.com%2F)

安装完 Docker 后，你可能会发现自己可以打开一个漂亮的 Docker 窗口。其实这个窗口没什么用处，通常我们都是通过 CLI 命令行的方式操作 Docker 的，就像 Git 一样

### 运行 Docker

接下来我们搭建一个能够托管静态文件的 Nginx 服务器

容器运行程序，而容器哪来的呢？容器是镜像创建出来的。那镜像又是哪来的呢？

镜像是通过一个 Dockerfile 打包来的，它非常像我们前端的`package.json`文件

所以创建关系为：

    Dockerfile: 类似于“package.json”
     |
     V
    Image: 类似于“Win7纯净版.rar”
     |
     V
    Container: 一个完整操作系统
    复制代码

#### 创建文件

我们创建一个目录`hello-docker`，在目录中创建一个`index.html`文件，内容为：

    <h1>Hello docker</h1>
    复制代码

然后再在目录中创建一个`Dockerfile`文件，内容为：

    FROM nginx

    COPY ./index.html /usr/share/nginx/html/index.html

    EXPOSE 80
    复制代码

此时，你的文件结构应该是：

    hello-docker
      |____index.html
      |____Dockerfile
    复制代码

#### 打包镜像

文件创建好了，现在我们就可以根据`Dockerfile`创建镜像了！

在命令行中（Windows 优先使用 PowerShell）键入：

    cd hello-docker/ # 进入刚刚的目录
    docker image build ./ -t hello-docker:1.0.0 # 打包镜像
    复制代码

> 注意！Docker 中的选项（Options）放的位置非常有讲究，`docker —help image`和`docker image —help`是完全不同的命令

`docker image build ./ -t hello-docker:1.0.0`的意思是：基于路径`./`（当前路径）打包一个镜像，镜像的名字是`hello-docker`，版本号是`1.0.0`。该命令会自动寻找`Dockerfile`来打包出一个镜像

> Tips: 你可以使用`docker images`来查看本机已有的镜像

不出意外，你应该能得到如下输出：

    Sending build context to Docker daemon  3.072kB
    Step 1/3 : FROM nginx
     ---> 5a3221f0137b
    Step 2/3 : COPY ./index.html /usr/share/nginx/html/index.html
     ---> 1c433edd5891
    Step 3/3 : EXPOSE 80
     ---> Running in c2ff9ec2e945
    Removing intermediate container c2ff9ec2e945
     ---> f6a472c1b0a0
    Successfully built f6a472c1b0a0
    Successfully tagged hello-docker:1.0.0
    复制代码

可以看到其运行了 Dockerfile 中的内容，现在我们简单拆解下：

- `FROM nginx`：基于哪个镜像
- `COPY ./index.html /usr/share/nginx/html/index.html`：将宿主机中的`./index.html`文件复制进容器里的`/usr/share/nginx/html/index.html`
- `EXPOSE 80`：容器对外暴露 80 端口

#### 运行容器

我们刚刚使用 Dockerfile 创建了一个镜像。现在有镜像了，接下来要根据镜像创建容器：

    docker container create -p 2333:80 hello-docker:1.0.0
    docker container start xxx # xxx 为上一条命令运行得到的结果
    复制代码

然后在浏览器打开`127.0.0.1:2333`，你应该能看到刚刚自己写的`index.html`内容

在上边第一个命令中，我们使用`docker container create`来创建基于`hello-docker:1.0.0`镜像的一个容器，使用`-p`来指定端口绑定——将容器中的`80`端口绑定在宿主机的`2333`端口。执行完该命令，会返回一个容器 ID

而第二个命令，则是启动这个容器

启动后，就能通过访问本机的`2333`端口来达到访问容器内`80`端口的效果了

> Tips: 你可以使用`docker containers ls`来查看当前运行的容器

当容器运行后，可以通过如下命令进入容器内部：

    docker container exec -it xxx /bin/bash # xxx 为容器ID
    复制代码

原理实际上是启动了容器内的`/bin/bash`，此时你就可以通过`bash shell`与容器内交互了。就像远程连接了 SSH 一样

#### 发生了什么

我们总结下都发生了什么：

1.  写一个 Dockerfile
2.  使用`docker image build`来将`Dockerfile`打包成镜像
3.  使用`docker container create`来根据镜像创建一个容器
4.  使用`docker container start`来启动一个创建好的容器

虽然很简单，但是也没有感觉到“广阔天地，大有可为，为所欲为”呢？

## 迁移静态站点

接下来我们实战迁移一个由 Vuejs 写的纯静态 SPA 单页站点：

- 网址：[pea3nut.info](https://link.juejin.im?target=http%3A%2F%2Fpea3nut.info)
- 源码：[github/pea3nut-info](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fpea3nut%2Fpea3nut-info)

### 我打算怎么做

在没迁移 Docker 之前，若我想更新线上网站中内容时，需要：

1.  本地`npm run build`打包产出静态文件
2.  手动通过 FTP 上传到服务器
3.  `git push`更新 Github 源码

稍微有点麻烦，因此我打算这样改：

1.  执行`git push`
2.  自动检测到 github 有代码更新，自动打包出一个 Docker 镜像
3.  CI 编译完成后，SSH 登录 VP S，删掉现有容器，用新镜像创建一个新容器

而这样做的好处是：

1.  不必再手动 FTP 上传文件
2.  当我进行修改错别字这样的简单操作时，可以免测。改完直接`git push`，而不必本地`npm run build`

### Github 中的 CI

首先是让 Github 在我每次更新代码时打包出一个镜像

在 Github，可以有免费的 CI 资源用，它就是 [Travis CI](https://link.juejin.im?target=https%3A%2F%2Fwww.travis-ci.org%2F)

在项目中根目录中添加`.travis.yml`文件，内容如下：

    language: node_js
    node_js:
      - "12"
    services:
      - docker

    before_install:
      - npm install

    script:
      - npm run build
      - echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
      - docker build -t pea3nut/pea3nut-info:latest .
      - docker push pea3nut/pea3nut-info:latest

    复制代码

文件内容非常简单，就是使用`npm run build`编译静态产出后，打包一个镜像并且 push 到远程。有几点需要详细说一下：

- 为了能够让镜像上传到服务器，你需要在`hub.docker.com`中注册一个账号，然后替换代码中的`pea3nut/pea3nut-info:latest`为`用户名/包名:latest`即可
- 使用 Github 登录 Travis CI 后，在左边点击+加号添加自己的 Github 仓库后，需要移步到 Setting 为项目添加`DOCKER_USERNAME`和`DOCKER_PASSWORD`环境变量。这样保证我们可以秘密的登录 Docker Hub 而不被其他人看到自己的密码。如下图

然后需要添加 Dockerfile 文件来描述如何打包 Docker 镜像。

按照`.travis.yml`的命令次序，在打包镜像时，`npm run build`已经执行过了，项目产出已经有了。不必在 Docker 容器中运行`npm install`和`npm run build`之类的，直接复制文件即可：

    FROM nginx

    COPY ./dist/ /usr/share/nginx/html/

    EXPOSE 80
    复制代码

> Note: 过程虽然简单但是线条很长，建议本地多测试测试再进行`git push`

若你编译出的静态站点也是一个 SPA 单页应用，需要增加额外的 Nginx 配置来保证请求都能打到`index.html`。下边是我写的`vhost.nginx.conf` Nginx 配置文件，将不访问文件的请求全部重定向到`/index.html`：

    server {
        listen 80;
        server_name localhost;
        location / {
            root /usr/share/nginx/html;
            index index.html index.htm;
            proxy_set_header Host $host;

            if (!-f $request_filename) {
              rewrite ^.*$ /index.html break;
            }

        }

        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
            root /usr/share/nginx/html;
        }
    }
    复制代码

然后在 Dockerfile 中新加一行，将本机的`vhost.nginx.conf`文件复制到容器的`/etc/nginx/conf.d/pea3nut-info.conf`，让 Nginx 能够读取该配置文件：

      FROM nginx

      COPY ./dist/ /usr/share/nginx/html/
    + COPY ./vhost.nginx.conf /etc/nginx/conf.d/pea3nut-info.conf

      EXPOSE 80
    复制代码

然后执行`git push`后，你可以在 Travis CI 看到 CI 的编译结果。如果编译没问题，远程实际上就有了`pea3nut/pea3nut-info:latest`这个镜像。本地可以试试看该镜像工作是否正常：

    docker image pull pea3nut/pea3nut-info:latest
    docker container create -p 8082:80 pea3nut/pea3nut-info:latest
    docker container start xxx # xxx 为上一条命令执行的返回值
    复制代码

运行完成后，浏览器访问`127.0.0.1:8082`应该就能看到效果了！

然后你可以登录远程 VP S 服务器，安装 Docker，执行同样的命令。然后访问远程 VP S 服务器的公网 IP + 8082 端口号，应该能看到和本地相同的效果

> Tips: 忘了如何在 VP S 上安装 Docker？在上文“安装 Docker”一节，你可能需要的是 Linux 的安装方式
>
>     curl https://get.docker.com/ > install-docker.sh # 下载安装脚本
>     sh install-docker.sh # 执行安装脚本
>     复制代码

### Nginx 反向代理

> Note: 接下来的操作都是在你的远程 VP S 服务器上操作，并非本地电脑，或者容器中

目前我们将容器挂到了 8082 端口，但是线上不可能让用户手动输入 8082 端口进行访问。而如果将容器直接挂到 80 端口，虽然这样用户可以直接不加端口直接访问，但是如果有第二个容器，或者更多容器呢？

这时候就需要在宿主机跑一个 Nginx，由它来独占 80 端口，然后根据域名来讲请求分发给响应的容器。如下图：

[![nginx_anti-proxy](data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1280" height="915"></svg>)](https://link.juejin.im?target=https%3A%2F%2Fuser-gold-cdn.xitu.io%2F2019%2F9%2F20%2F16d4c9d765538e0b%3Fw%3D1580%26h%3D1130%26f%3Dpng%26s%3D135938)

这种方案叫做“反向代理”

登录 VP S 服务器，安装 Nginx。因为我是 Ubuntu，所以可以用`apt`安装。其他 Linux 发行版可以百度下安装方法，通常 2 行内可以搞定：

    apt update # 更新软件包
    apt-get install nginx # 安装 Nginx
    systemctl status nginx # 查看 Nginx 状态
    复制代码

此时本地通过浏览器访问 VP S 的公网 IP 可用看到 Nginx 的欢迎页面

[![nginx_welcome](data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1280" height="773"></svg>)](https://link.juejin.im?target=https%3A%2F%2Fuser-gold-cdn.xitu.io%2F2019%2F9%2F20%2F16d4c9d72b3b646b%3Fw%3D1538%26h%3D930%26f%3Dpng%26s%3D255871)

然后在 VP S 服务器的`/etc/nginx/conf.d/`中建立一个`vhost.conf`文件，配置如下内容：

    server {
        listen 80;
        server_name pea3nut.info;

        location / {
            proxy_pass http://127.0.0.1:8082;
        }
    }
    复制代码

配置的意思是，监听来自 80 端口的流量，若访问域名是`pea3nut.info`（替换为你自己的域名），则全部转发到`http://127.0.0.1:8082`中

配置完成后，重启 Nginx 服务器。若是 Ubuntu 可以使用`systemctl restart nginx`命令，不同 Linux 发行版稍有不同

配置成功后，访问`pea3nut.info`会看到和`VP S公网IP:8082`相同的效果

### 更新站点

而迁移完成 Docker 后，我想改一个错别字的流程变为：

- 本地修改完成，执行`git push`
- 等待 CI 编译完成
- 登录 VP S 服务器，执行：

  docker image pull pea3nut/pea3nut-info:latest
  docker container create -p 8082:80 pea3nut/pea3nut-info:latest # 得到 yyy
  docker container stop xxx # xxx 为当前运行的容器 ID，可用 docker container ls 查看
  docker container start yyy # yyy 第二条命令返回值
  复制代码

> 命令还是有些长？我们在下面会进一步优化它

## 迁移 Nodejs 站点（Express）

接下来我们实战迁移一个由 Nodejs 写的 Express SSR 站点

- 网址：[pxer.pea3nut.org](https://link.juejin.im?target=http%3A%2F%2Fpxer.pea3nut.org)
- 源码：[github/pxer-homepage](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fpea3nut%2Fpxer-homepage)

### 我打算怎么做

网站使用 Ejs 模板渲染页面。在没迁移 Docker 之前，若我想更新线上网站中内容时，需要：

1.  本地修改好 Ejs 或者其他文件
2.  手动通过 FTP 上传到服务器
3.  在服务器端重启 Nodejs 进程。若有 npm 包依赖改动，需要在 VP S 服务器上手动执行`npm install`
4.  `git push`更新 Github 源码

稍微有点麻烦，因此我打算这样改：

1.  执行`git push`
2.  自动检测到 github 有代码更新，自动打包出一个 Docker 镜像
3.  CI 编译完成后，SSH 登录 VP S，删掉现有容器，用新镜像创建一个新容器

而这样做的好处是：

1.  不必再手动 FTP 上传文件
2.  不必手动维护服务器的 Nodejs 运行环境

### 实施

具体的过程和处理静态站点没有什么特别的区别，无非是：

1.  编写 Dockerfile 文件
2.  在 CI 时自动打包镜像
3.  在 VP S 增加一个 Nginx 反向代理

这次就不重复讲了，具体的配置可以参考项目中的相关文件

> Tips: 你可能发现了 Dockerfile 中的`ENTRYPOINT`命令必须指定一个前台进程。若你的 Nodejs 应用是使用 PM2 进行保活的，你需要替换`pm2 start app.js`为`pm2-docker app.js`

### docker-compose

当将 Nodejs 站点迁移完成，我们的 VP S 服务器上已经运行了 2 个容器。每次镜像更新都要手动的`docker container create`带一堆参数是比较麻烦的，尤其是当日后容器日益增多的时候。而这时，就轮到`docker-compose`登场了~

docker-compose 是 Docker 官方提供的一个 Docker 管理工具。若你是通过桌面端的 Docker 安装包安装的 Docker，它是会默认为你安装 docker-compose 的。可以试试如下命令：

    docker-compose --help
    复制代码

如果是在 Linux，可以通过如下命令安装 docker-compose：

    curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
    复制代码

---

docker-compose 和 Docker 差不多，也是只要一份文件就能跑起来。docker-compose 主要的作用就是能够让你不必手敲那么多 Docker 命令

建立一个目录，然后在目录中建立`docker-compose.yml`，内容如下：

    version: "3.7" # 这个是配置文件的版本，不同的版本号声明方式会有细微的不同
    services:
        info:
            container_name: pea3nut-info
            image: pea3nut/pea3nut-info:latest
            ports:
                - "8082:80"
            restart: on-failure
    复制代码

然后在目录中键入如下命令就能将服务跑起来：

    docker-compose up info
    复制代码

docker-compose 会帮我们自动去拉镜像，创建容器，将容器中的`80`端口映射为宿主机的`8082`端口。`restart`字段还要求 docker-compose 当发现容器意外挂掉时重新启动容器，类似于 pm2，所以你不必再在容器内使用 pm2

如果想要更新一个镜像创建新容器，只需要：

    docker-compose pull info
    docker-compose stop info
    docker-compose rm info
    docker-compose up -d info # -d 代表后台运行
    复制代码

> 笔者已将自己网站部署方式开源，可参考[github/pea3nut-hub](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fpea3nut%2Fpea3nut-hub)

## 迁移 WordPress 站点（Apache + PHP + MySQL）

接下来我们实战迁移一个 WordPress 站点

- 网址：[pea3nut.blog](https://link.juejin.im?target=http%3A%2F%2Fpea3nut.blog)
- 源码：非公开

可能你也发现了这个站点和其他站点的一个非常大的不同——他的源码和数据是不能公开的

之前我们打包镜像时，都是直接将代码打进镜像内的。这条方案用在这里显然是不行的，有两个问题：

1.  我不想公开 MySQL 数据文件和网站内容（如图片）。若将这些打包进镜像，任何人都能`docker image pull`下载到镜像，然后取得镜像内的文件
2.  当容器被删掉，存储的 MySQL 数据都将丢失

### Volume

Docker 提供了一个叫做 Volume 的东西，可以将容器内和宿主机的某个文件夹进行”绑定“，任何文件改动都会得到同步。所以，我可以将整个站点目录和 MySQL 目录都挂载为 Volume。这样，当容器删除时，所有数据文件和源码都会保留。

在本地建立`./blog/mysql-data`目录存储 MySQL 数据，建立`./blog/wordpress`目录存储 WordPress 源码。然后修改`docker-compose.yml`如下：

    version: "3.7"
    services:
        info:
            container_name: pea3nut-info
            image: pea3nut/pea3nut-info:latest
            ports:
                - "8082:80"
            restart: on-failure
    +   blog:
    +       container_name: pea3nut-blog
    +       image: tutum/lamp:latest
    +       ports:
    +           - "8081:80"
    +       volumes:
    +           - ./blog/mysql-data:/var/lib/mysql
    +           - ./blog/wordpress:/app
    +       restart: on-failure
    复制代码

可以看到这次根本没有打包镜像，而是直接使用`tutum/lamp`镜像提供的 LAMP 环境（Linux + Apache + MySQL + PHP），然后将 MySQL 数据目录`/var/lib/mysql`和源码目录`/app`都挂载出来就可以了

> Tips: 通过 Volume 我们只是解决了部署问题，而如何本地开发然后将源码同步到服务器呢？用 FTP 当然是可以的，但是稍微有点麻烦。其实你可以自建一个 Git 服务器！详见：[pea3nut.blog/e127](https://link.juejin.im?target=http%3A%2F%2Fpea3nut.blog%2Fe127)

## 吭和其他技巧

- 设置开机启动：[Ubuntu 18.04 启用 rc.local 设置开机启动 - digdeep - 博客园](https://link.juejin.im?target=https%3A%2F%2Fwww.cnblogs.com%2Fdigdeep%2Fp%2F9760025.html)
- 迁移后中文文件乱码：[解决 linux 下中文文件名显示乱码问题](https://link.juejin.im?target=https%3A%2F%2Fblog.csdn.net%2Fshiyong1949%2Farticle%2Fdetails%2F79462077)

## 源码

静态站点迁移（笔者简历）：

- 线上地址：\[pea3nut.info\]\[[pea3nut.info](https://link.juejin.im?target=http%3A%2F%2Fpea3nut.info)\]
- 源码：[github.com/pea3nut/pea…](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fpea3nut%2Fpea3nut-info)
- CI 配置文件：[github.com/pea3nut/pea…](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fpea3nut%2Fpea3nut-info%2Fblob%2Fmaster%2F.travis.yml)
- Dockerfile：[github.com/pea3nut/pea…](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fpea3nut%2Fpea3nut-info%2Fblob%2Fmaster%2FDockerfile)
- docker-compose：[github.com/pea3nut/pea…](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fpea3nut%2Fpea3nut-hub%2Fblob%2F558c39b0ddef379c218d499f3ad576208db9e35d%2Fdocker-compose.yml%23L17)
- Nginx 反向代理配置：[github.com/pea3nut/pea…](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fpea3nut%2Fpea3nut-hub%2Fblob%2F558c39b0ddef379c218d499f3ad576208db9e35d%2Fvhost.conf%23L1)

PHP 站点迁移（笔者博客）：

- 线上地址：\[pea3nut.blog\]\[[pea3nut.blog](https://link.juejin.im?target=http%3A%2F%2Fpea3nut.blog)\]
- Dockerfile：[github.com/pea3nut/pea…](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fpea3nut%2Fpea3nut-hub%2Fblob%2F558c39b0ddef379c218d499f3ad576208db9e35d%2Fblog%2FDockerfile)
- docker-compose：[github.com/pea3nut/pea…](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fpea3nut%2Fpea3nut-hub%2Fblob%2F558c39b0ddef379c218d499f3ad576208db9e35d%2Fdocker-compose.yml%23L3)
- Nginx 反向代理配置：[github.com/pea3nut/pea…](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fpea3nut%2Fpea3nut-hub%2Fblob%2F558c39b0ddef379c218d499f3ad576208db9e35d%2Fvhost.conf%23L10)

Nodejs 迁移（Pxer 官网）：

- 线上地址：[pxer.pea3nut.org](https://link.juejin.im?target=http%3A%2F%2Fpxer.pea3nut.org)
- 源码：[github.com/pea3nut/pxe…](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fpea3nut%2Fpxer-homepage%2F)
- CI 配置文件：[github.com/pea3nut/pxe…](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fpea3nut%2Fpxer-homepage%2Fblob%2Fmaster%2F.travis.yml)
- Dockerfile：[github.com/pea3nut/pxe…](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fpea3nut%2Fpxer-homepage%2Fblob%2Fmaster%2FDockerfile)
- docker-compose：[github.com/pea3nut/pea…](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fpea3nut%2Fpea3nut-hub%2Fblob%2F558c39b0ddef379c218d499f3ad576208db9e35d%2Fdocker-compose.yml%23L46)
- Nginx 反向代理配置：[github.com/pea3nut/pea…](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fpea3nut%2Fpea3nut-hub%2Fblob%2F558c39b0ddef379c218d499f3ad576208db9e35d%2Fvhost.conf%23L70)

其他：

- 汇总部署配置的仓库：[github.com/pea3nut/pea…](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fpea3nut%2Fpea3nut-hub%2F)

## 后记

你好，这里是**花生 PeA**。感谢你能看完这篇文章，非常感谢！

在文章撰写两个月前，我决定将站点全部迁移到 Docker。两个星期前，我决定将过程整理成一篇博客。没想到写了这么久，写了上万字

说实话笔者在撰写过程中其实是有些担心的。一方面自己真的只是一名前端，对于 Docker 的了解仅仅停留在使用方面，担心自己是否真的能“跨界”写出一篇 Docker 教程；另一方面随着文章字数止不住的上升，也十分担心在当今的网络环境下，是否真的有人愿意花时间读一篇上万字的技术文章

但是 Docker 真的很好用。全站 Docker 化后，当我再次迁移服务器时，我发现我竟可以在十行命令内完成整个环境的迁移，耗时十分钟！这种“爽快”的感觉也是我撰写文章的动力——我想将这份爽快分享给屏幕前的你。希望你也能喜欢上 Docker ~ ❤️
