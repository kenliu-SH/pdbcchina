import { IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class FileDto {}

export class PackDownDto {
  @IsNotEmpty({ message: '传入列表不能为空' })
  @ApiProperty({ name: 'PIDBS', type: [String], required: true, description: 'PDBID列表' })
  PIDBS: String[]

  @ApiProperty({ name: 'type', type: String, required: false, enum: ['PDB'], default: 'PDB', description: '资源类型 固定PDB' })
  type: string
}

// export class downRibbonDiagrams{
//   @IsNotEmpty({ message: 'PDBID 不能为空' })
//   @ApiProperty({ name: 'PDBId', type: String, required: true, description: 'PDBID' })
//   PDBId: String



// }
