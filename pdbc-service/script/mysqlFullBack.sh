#!/bin/bash
# 初始化时，创建相应目录
# mkdir -p /home/lz_data/mysql/backup/daily 

# 定时任务
# 每个星期日凌晨3:00执行全量备份脚本 
# 0 3 * * 0 /bin/bash -x /home/lz1_web_protein_20210607/server/script/mysqlFullBack.sh >/dev/null 2>&1
# 周一到周六凌晨3:00执行增量备份脚本
# 0 3 * * 1-6 /bin/bash -x /home/lz1_web_protein_20210607/server/script/mysqlPartBack.sh >/dev/null 2>&1

BakDir=/home/lz_data/mysql/backup
LogFile=/home/lz_data/mysql/backup/$Date.bak.log
Date=`date +%Y%m%d`
Begin=`date +"%Y年%m月%d日 %H:%M:%S"`
cd $BakDir
DumpFile=$Date.sql
GZDumpFile=$Date.sql.tgz
/usr/bin/mysqldump -uroot -pstgame@2021 --quick --events --all-databases --flush-logs --delete-master-logs --single-transaction > $DumpFile
/bin/tar -zvcf $GZDumpFile $DumpFile
/bin/rm $DumpFile
Last=`date +"%Y年%m月%d日 %H:%M:%S"`
echo [FullBack] 开始:$Begin 结束:$Last $GZDumpFile successful >> $LogFile
# scp重复全量备份文件到其他服务器
# scp $GZDumpFile root@xxxx:/usr/mysql/backup/$GZDumpFile
# 删除30天前的全量备份文件
find $BakDir -mtime +30 -type f -name "*.sql.tgz" | xargs rm -f
# 删除增量备份文件
cd $BakDir/daily
/bin/rm -f *