const {firstUpperCase} = require('../../util')
const dtoTemplate = (modelName, arr)=>{
return `
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ModelIds } from '@common/baseDto';
import { ${firstUpperCase(modelName)} } from '@model/${modelName}.model';

export class Find${firstUpperCase(
    modelName
    )}PaginationDto extends ${firstUpperCase(modelName)} {
    @ApiProperty({ name: 'order', type: String, required: false, description: 'order' })
    order?: string;
    @ApiProperty({ name: 'page', type: String, required: false, description: 'page' })
    page?: string;
    @ApiProperty({ name: 'pageSize', type: String, required: false, description: 'pageSize' })
    pageSize?: string;
}
export class CreateMany${firstUpperCase(modelName)}Dto{
    @IsNotEmpty({ message: '传入列表不能为空' })
    @ApiProperty({ name: '${modelName}s', type: [${firstUpperCase(
    modelName
    )}], required: true, description: '列表' })
    ${modelName}s:${firstUpperCase(modelName)}[];
}
export class DeleteMany${firstUpperCase(modelName)}Dto{
    @IsNotEmpty({ message: '传入列表不能为空' })
    @ApiProperty({ name: 'ids', type: [Number], required: true, description: '列表' })
    ids:number[];
}
    `;
};

module.exports =  dtoTemplate