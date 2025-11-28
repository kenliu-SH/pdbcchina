const {firstUpperCase} = require('../../util')
const dtoTemplate = (modelName, arr)=>{
return `
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ModelIds } from '@common/baseDto';

export class ${firstUpperCase(modelName)}Dto{
}
    `;
};

module.exports =  dtoTemplate