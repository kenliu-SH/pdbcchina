## redis缓存使用说明

### 引入

在你要使用的module里面导入RedisModule 之后再去service注入


### 参数

|参数|含义|类型|是否必填|
|:-:|:-:|:-:|:-:|
|options|缓存参数|CacheOptions|✅|
|**options**.ttl|缓存失效时间|number|✅|
|**options**.key|缓存键|string|✅|
|**options**.next|需要执行的函数|Function|✅|

### cache (cacheDecorator)
> 将函数执行的结果进行缓存

```ts
const result = await redis.cache({ next: fun, key: 'demo', ttl: 60 }).with(1);
```