## 项目依赖

- node.js 12.16+
- mysql 5.5+
- redis 5.0+

## 常用命令

```
## 安装项目依赖模块
yarn install

## 安装 nestjs 开发脚手架
npm i -g @nestjs/cli
## 构建成 js 代码
npm run build

## 开发调试运行
npm run dev
## 正式编译并环境运行
npm run start

## 正式环境运行，跳过编译
npm run prod

## 在modules目录下创建module，controller，service
nest g module user modules
nest g controller user modules
nest g service user modules
```

## 项目配置

**项目中的常用环境**

- `dev` 开发、本地环境

- `test` 测试、调试环境

- `prod` 正式、线上环境

**项目中可以外部指定的环境变量**

- `NODE_ENV` 当前环境，外界没有输入则取默认值为 `dev`

- `NODE_PORT` 服务端口，外界没有输入则取默认值为: `1900`

- `NODE_APP_NAME` 服务名，外界没有输入则默认值为: `Nest-Server`

**Configs 模块**

```shell
# src/library/configs/
```

**通用配置**

```shell
# src/library/configs/shared/configs.defaults.ts
```

**不同环境下的配置**

```shell
# src/library/configs/shared/configs.<根据环境设置>.ts
```

**编译并指定环境变量启动**

> 只推荐在本地环境实时编译

```shell
# tsc & cross-env NODE_ENV=prod node dist/main
npm run dev
```

## 项目日志

**Logger 模块**

```shell
# src/library/logger/
```

**当服务在 dev 环境时，只在控制台输出日志。其他环境正常写入 logs 目录**

> 关于 winston 日志等级，👀 ：https://github.com/winstonjs/winston

```shell
# logs/
# logs/stdout.log # 常规日志，debug 等级以上都会输出到这里 
# logs/stderr.log # 错误和未捕捉的异常日志，只输出 error 等级 
```

## 项目别名配置

**使用了 module-alias 模块转译路径别名**

```shell
# src/main.ts
```

**在 tsconfig.json 中添加配置，以提供编译支持**

```shell
# src/tsconfigs.ts
```

```json
...
"compilerOptions": {
  ...
  "paths": {
    "@core/*": ["src/core/*"],
    "@common/*": ["src/common/*"],
    "@library/*": ["src/library/*"],
    "@modules/*": ["src/modules/*"],
  }
}
```

**项目别名引用规范**

引用 `内部文件`，**强制** 使用 **相对路径**，例如：

```ts
// 在 book service 中引入 book dao
import { BookDao } from './book.dao';
```

引用 `其他模块` ，**强制** 使用 **@x** 别名路径，例如：

```ts
// 在 book service 中引入 redis
import { RedisProvider } from '@library/redis';
```

**项目别名命名规范**

- **强制** 使用首字母小写，遵循驼峰命名。
  - 好的：`@moduleName`
  - 坏的：`@ModuleName`。

- **强制** 使用 `@` 标识符作为命名前缀。
  - 好的：`@moduleName` 
  - 坏的：`#moduleName` or `!moduleName`。


## 目录结构
```shell
├─ src
│  ├─ common                # 定义公共常量及接口
│  ├─ core                  # 数据传输中间层
│  │  ├─ decorator          # 装饰器
│  │  ├─ filter             # 过滤器
│  │  ├─ interceptor        # 拦截器
│  │  └─ pipe               # 管道
│  ├─ library               # 公共支持模块
│  │  ├─ configs            # 配置文件
│  │  ├─ logger             # 日志模块
│  │  ├─ redis              # redis
│  │  └─ utils              # 实用工具包
│  ├─ main.ts               # 入口文件，主要创建了核心模块，所有模块都要去core/module去导入
│  ├─ model                 # 提供实体类，一般用于定义数据表的实体
│  └─ modules               # 业务模块(控制器，业务逻辑)
│     ├─ book
│     │  ├─ book.controller.ts   # 控制器
│     │  ├─ book.dao.ts          # 数据访问
│     │  ├─ book.dto.ts          # 传入参数定义，可同使用注解定义swagger文档，数据验证规则
│     │  ├─ book.module.ts       # 整合控制器，dao，service等模块，交给ioc容器管理
│     │  └─ book.service.ts      # 提供复杂业务逻辑的实现
├─ tsconfig.json
└─ yarn.lock

```

# 项目笔记
## RSS
每周更新的PDB rss文件地址（每周三更新）：http://localhost:10608/newPDB/feed.xml