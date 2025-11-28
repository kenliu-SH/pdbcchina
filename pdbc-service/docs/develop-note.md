## 同步测试数据
- 使用rsync
- 只同步测试pdbid开头的文件
```bash
rsync -rlpt -v -z --delete --include-from 'test-pdbId.txt' --exclude '*' ftp.pdbj.org::rsync/ ~/lz_data -P
```


## pymol 安装
### mac
```bash
brew install pymol
```

### linux
https://pymolwiki.org/index.php/Linux_Install