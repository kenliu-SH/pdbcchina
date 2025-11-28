import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PDB_FILE_FORMAT } from '@common/constant';

export class FileDto {}

export class PackDownDto {
	@IsNotEmpty({ message: '传入列表不能为空' })
	@ApiProperty({ name: 'PIDBS', type: [String], required: true, description: 'PDBID列表', example: ['8C90', '7X9N'] })
	PIDBS: string[];

	@ApiProperty({
		name: 'type',
		type: String,
		required: false,
		enum: ['PDB'],
		default: 'PDB',
		description: '资源类型(废弃) 固定PDB',
	})
	type: string;
	// 格式
	@ApiProperty({
		name: 'formats',
		type: String,
		required: false,
		enum: Object.values(PDB_FILE_FORMAT),
		default: [PDB_FILE_FORMAT.PDB, PDB_FILE_FORMAT['PDBx/mmCIF']],
		description: '资源类型',
	})
	formats: PDB_FILE_FORMAT[];
}

// export class downRibbonDiagrams{
//   @IsNotEmpty({ message: 'PDBID 不能为空' })
//   @ApiProperty({ name: 'PDBId', type: String, required: true, description: 'PDBID' })
//   PDBId: String

// }
