#!/bin/bash
export data_path="/home/lz_data"
export pdb_path="${data_path}/structures/divided/pdb/"
export pdb_unpack_path="${data_path}/structures/divided/pdb_unpack/"
rsync_pdb_link="data.pdbj.org::ftp_data/structures/divided/pdb/"
rsync_validation_reports_link="data.pdbj.org::ftp/validation_reports"
sync_PDB(){
    if [ ! -d "$pdb_path" ]; then
        mkdir -p "$pdb_path"
    fi
    cmd="rsync -avz --delete ${rsync_pdb_link} ${pdb_path}"
    cmd_2="rsync -avz --delete ${rsync_validation_reports_link} ${data_path}"
    echo $cmd
    echo $cmd_2
    exec $cmd
    exec $cmd_2
}
pub/pdb/validation_reports/
_unpack(){
    # mkdir ${$pdb_unpack_path}${i#*pdb_path}
    full_path=$pdb_unpack_path${1#*${pdb_path}}
    unpack_dir=${full_path%/*}
    unpack_file_path=/`echo ${full_path} | sed -e 's/\/\(.*\).gz/\1/'`
    if [ ! -d "${unpack_dir}" ]; then
        mkdir -p "${unpack_dir}"
    fi
    echo $1
    gunzip -c $1 > $unpack_file_path
}
unpack_PDB(){
    if [ ! -d "$pdb_unpack_path" ]; then
        mkdir -p "$pdb_unpack_path"
    fi
    echo find ${pdb_path} -name "*.gz"
    export -f _unpack
    find ${pdb_path} -name "*.gz" | xargs -I{} bash -c '_unpack {}' 
    # for i in `ls ${pdb_path}*/*.gz`
    # do
    #     # mkdir ${$pdb_unpack_path}${i#*pdb_path}
    #     full_path=$pdb_unpack_path${i#*${pdb_path}}
    #     unpack_dir=${full_path%/*}
    #     unpack_file_path=/`echo ${full_path} | sed -e 's/\/\(.*\).gz/\1/'`
    #     if [ ! -d "${unpack_dir}" ]; then
    #         mkdir -p "${unpack_dir}"
    #     fi
    #     echo $i
    #     gunzip -c $i > $unpack_file_path
    # done
}
# 1同步文件 2 解压文件
if [ $1 ]; then
     # if body
     if [ $1 == '1' ]; then
        echo '同步PDB资源'
        sync_PDB&&echo "执行完毕！"
     else
         echo '未知动作'
     fi
else
    echo "请输入操作动作:\n1.同步PDB文件（压缩形式）\n2.批量解压同步过来的PDB数据"
    read -e -p ""  action
    if [ $action == '1' ]; then
        echo '同步PDB文件（压缩形式）'
        sync_PDB
    elif [ $action == '2' ]; then
        unpack_PDB
        echo '批量解压同步过来的PDB数据'
    else
        echo '未知动作'
    fi
fi










