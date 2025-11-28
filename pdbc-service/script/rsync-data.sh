#!/bin/bash
###
 # @Author: your name
 # @Date: 2021-08-18 14:50:27
 # @LastEditTime: 2021-09-01 15:21:51
 # @LastEditors: your name
 # @Description: In User Settings Edit
 # @FilePath: \lz1_web_protein_20210607\server\script\rsync-data.sh
### 
export data_path="/home/lz_data"
rsync_pdb_link="data.pdbjbk1.pdbj.org::ftp_data/structures/divided/pdb/"
rsync_validation_reports_link="data.pdbjbk1.pdbj.org::ftp/validation_reports"
rsync_mmCIF_link="data.pdbjbk1.pdbj.org::ftp_data/structures/divided/mmCIF/"
if [ ! -d "${data_path}" ]; then
        /usr/bin/mkdir -p "${data_path}"
fi
if [ ! -d "${data_path}/structures/divided/pdb/" ]; then
        /usr/bin/mkdir -p "${data_path}/structures/divided/pdb/"
fi

if [ ! -d "${data_path}/structures/divided/mmCIF" ]; then
        /usr/bin/mkdir -p "${data_path}/structures/divided/mmCIF"
fi

# PDB文件
cmd_1="/usr/bin/rsync -rvz --size-only  ${rsync_pdb_link} ${data_path}/structures/divided/pdb"
# # 验证报告
cmd_2="/usr/bin/rsync -rvz --size-only  ${rsync_validation_reports_link} ${data_path}/validation_reports"
# CIF
cmd_3="/usr/bin/rsync -rvz --size-only  ${rsync_mmCIF_link} ${data_path}/structures/divided/mmCIF"
echo $cmd_1
# $cmd_1
echo $cmd_2
# $cmd_2
echo $cmd_3
# $cmd_3
