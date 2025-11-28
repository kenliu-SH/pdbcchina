# SYNC
数据同步模块

### meilisearch索引同步
- 从mysql同步数据到meilisearch索引
- 使用bull队列，保证数据同步的顺序性
- 支持增量同步
- 支持全量同步

### PDB条目同步
- 从外网API数据同步到PDB条目
- 条目自动补全
