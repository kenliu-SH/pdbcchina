import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PDB_FILE_FORMAT } from '@common/constant';


export class DownVersionsFileDto {
    // pdbid
    @ApiProperty({ description: 'PDBID', example: '7WWA' })
    @IsNotEmpty()
    pdbid: string;

    // 版本
    @ApiProperty({ description: '版本', example: '1.2' })
    @IsNotEmpty()
    version: string;
}


export class ShowFileDto {
    // 文件路径
    @ApiProperty({ description: '文件路径', example: '/data/pdb/derived_data/pdb_seqres.txt' })
    filePath: string;
}
