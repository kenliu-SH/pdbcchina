import { SuperRedis } from '@sophons/redis';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import _ = require('lodash');
import {
	pdbxStructAssembly,
	pdbxStructAssemblyAuthEvidence,
	pdbxStructAssemblyGen,
	pdbxStructAssemblyProp,
	pdbxStructOperList,
} from '@model/mmcif';
import { log } from 'console';
import {
	AssemblyVo,
	PdbxStructAssembly,
	PdbxStructAssemblyAuthEvidence,
	PdbxStructAssemblyGen,
	PdbxStructAssemblyProp,
	PdbxStructOperList,
} from './assembly.vo';

@Injectable()
export class AssemblyService {
	constructor(
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,
		private readonly configs: ConfigProvider,
	) {}

	public async getAssembly(PDBID: string, assemblyId: string) {
		console.log('assemblyId: ', assemblyId);
		console.log('PDBID: ', PDBID);
		const assemblyVo = new AssemblyVo();

		const pdbxStructAssemblyList = new PdbxStructAssembly();
		const findPdbxStructAssembly = await pdbxStructAssembly.findOne({
			where: { structureId: PDBID, id: assemblyId },
		});
		pdbxStructAssemblyList.details = findPdbxStructAssembly?.details;
		pdbxStructAssemblyList.id = findPdbxStructAssembly?.id;
		pdbxStructAssemblyList.method_details = findPdbxStructAssembly?.methodDetails;
		pdbxStructAssemblyList.oligomeric_count = findPdbxStructAssembly?.oligomericCount;
		pdbxStructAssemblyList.oligomeric_details = findPdbxStructAssembly?.oligomericDetails;
		pdbxStructAssemblyList.rcsb_candidate_assembly = 'TODO';
		pdbxStructAssemblyList.rcsb_details = findPdbxStructAssembly?.details;
		assemblyVo.pdbx_struct_assembly = pdbxStructAssemblyList;

		const pdbxStructAssemblyAuthEvidenceList = [];
		const findPdbxStructAssemblyAuthEvidence = await pdbxStructAssemblyAuthEvidence?.findAll({
			where: {
				structureId: PDBID,
				assemblyId: assemblyId,
			},
		});
		findPdbxStructAssemblyAuthEvidence.map(item => {
			const pdbxStructAssemblyAuthEvidence = new PdbxStructAssemblyAuthEvidence();
			pdbxStructAssemblyAuthEvidence.assembly_id = item?.assemblyId;
			pdbxStructAssemblyAuthEvidence.details = item?.details;
			pdbxStructAssemblyAuthEvidence.experimental_support = item?.experimentalSupport;
			pdbxStructAssemblyAuthEvidence.id = item?.id;
			pdbxStructAssemblyAuthEvidenceList.push(pdbxStructAssemblyAuthEvidence);
		});
		assemblyVo.pdbx_struct_assembly_auth_evidence = pdbxStructAssemblyAuthEvidenceList;

		const pdbxStructAssemblyGenList = [];
		const findPdbxStructAssemblyGen = await pdbxStructAssemblyGen.findAll({
			where: {
				structureId: PDBID,
				assemblyId: assemblyId,
			},
		});
		findPdbxStructAssemblyGen.map(item => {
			const pdbxStructAssemblyGen = new PdbxStructAssemblyGen();
			pdbxStructAssemblyGen.assembly_id = item.assemblyId;
			pdbxStructAssemblyGen.asym_id_list = item.asymIdList;
			pdbxStructAssemblyGen.oper_expression = item.operExpression;
			pdbxStructAssemblyGen.ordinal = item.assemblyId;
			pdbxStructAssemblyGenList.push(pdbxStructAssemblyGen);
		});
		assemblyVo.pdbx_struct_assembly_gen = pdbxStructAssemblyGenList;

		const pdbxStructAssemblyPropList = [];
		const findPdbxStructAssemblyProp = await pdbxStructAssemblyProp.findAll({
			where: { structureId: PDBID },
		});
		findPdbxStructAssemblyProp.map(item => {
			const pdbxStructAssemblyProp = new PdbxStructAssemblyProp();
			pdbxStructAssemblyProp.assembly_id = assemblyId;
			pdbxStructAssemblyProp.biol_id = item.biolId;
			pdbxStructAssemblyProp.type = item.type;
			pdbxStructAssemblyProp.value = item.value;
			pdbxStructAssemblyPropList.push(pdbxStructAssemblyProp);
		});
		assemblyVo.pdbx_struct_assembly_prop = pdbxStructAssemblyPropList;

		const pdbxStructOperLists = [];
		const findPdbxStructOperList = await pdbxStructOperList.findAll({
			where: { structureId: PDBID },
		});
		findPdbxStructOperList.map(item => {
			const pdbxStructOperList = new PdbxStructOperList();
			pdbxStructOperList.id = item.id;
			pdbxStructOperList.matrix_1_1 = item.matrix_1_1;
			pdbxStructOperList.matrix_1_2 = item.matrix_1_2;
			pdbxStructOperList.matrix_1_3 = item.matrix_1_3;
			pdbxStructOperList.matrix_2_1 = item.matrix_2_1;
			pdbxStructOperList.matrix_2_2 = item.matrix_2_2;
			pdbxStructOperList.matrix_2_3 = item.matrix_2_3;
			pdbxStructOperList.matrix_3_1 = item.matrix_3_1;
			pdbxStructOperList.matrix_3_2 = item.matrix_3_2;
			pdbxStructOperList.matrix_3_3 = item.matrix_3_3;
			pdbxStructOperLists.push(pdbxStructOperList);
		});
		assemblyVo.pdbx_struct_oper_list = pdbxStructOperLists;

		return assemblyVo;
	}
}
