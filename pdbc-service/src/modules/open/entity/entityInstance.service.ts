import { Injectable } from '@nestjs/common';
import {
	EntityBranchedVO,
	EntityNonpolymerVO,
	EntityPolymerVO,
	PdbxStructSpecialSymmetry,
	StructAsym,
} from './entityInstance.vo';
import { pdbxStructSpecialSymmetry, structAsym } from '@model/index';

@Injectable()
export class EntityInstanceService {
	public async getEntityBranched(PDBID: string, asymId: string) {
		const entityBranchedVO = new EntityBranchedVO();

		const PdbxStructSpecialSymmetryList = [];
		const findPdbxStructSpecialSymmetry = await pdbxStructSpecialSymmetry.findAll({
			where: {
				structureId: PDBID,
			},
		});
		findPdbxStructSpecialSymmetry.map(item => {
			const pdbxStructSpecialSymmetry = new PdbxStructSpecialSymmetry();
			pdbxStructSpecialSymmetry.PDB_model_num = item.pdbModelNum;
			pdbxStructSpecialSymmetry.auth_seq_id = item.authSeqId;
			pdbxStructSpecialSymmetry.id = item.id;
			pdbxStructSpecialSymmetry.label_asym_id = item.labelAsymId;
			pdbxStructSpecialSymmetry.label_comp_id = item.labelCompId;
			PdbxStructSpecialSymmetryList.push(pdbxStructSpecialSymmetry);
		});
		entityBranchedVO.pdbx_struct_special_symmetry = PdbxStructSpecialSymmetryList;

		const StructAsymList = new StructAsym();
		const findStructAsym = await structAsym.findOne({
			where: {
				structureId: PDBID,
			},
		});
		StructAsymList.pdbx_PDB_id = findStructAsym.pdbxPdbId;
		StructAsymList.pdbx_alt_id = findStructAsym.pdbxAltId;
		StructAsymList.pdbx_order = findStructAsym.pdbxOrder;
		StructAsymList.pdbx_type = findStructAsym.pdbxType;
		entityBranchedVO.struct_asym = StructAsymList;

		return entityBranchedVO;
	}

	public async getEntityNonPolymer(PDBID: string, asymId: string) {
		const entityNonpolymerVO = new EntityNonpolymerVO();

		const PdbxStructSpecialSymmetryList = [];
		const findPdbxStructSpecialSymmetry = await pdbxStructSpecialSymmetry.findAll({
			where: {
				structureId: PDBID,
			},
		});
		findPdbxStructSpecialSymmetry.map(item => {
			const pdbxStructSpecialSymmetry = new PdbxStructSpecialSymmetry();
			pdbxStructSpecialSymmetry.PDB_model_num = item.pdbModelNum;
			pdbxStructSpecialSymmetry.auth_seq_id = item.authSeqId;
			pdbxStructSpecialSymmetry.id = item.id;
			pdbxStructSpecialSymmetry.label_asym_id = item.labelAsymId;
			pdbxStructSpecialSymmetry.label_comp_id = item.labelCompId;
			PdbxStructSpecialSymmetryList.push(pdbxStructSpecialSymmetry);
		});
		entityNonpolymerVO.pdbx_struct_special_symmetry = PdbxStructSpecialSymmetryList;

		const StructAsymList = new StructAsym();
		const findStructAsym = await structAsym.findOne({
			where: {
				structureId: PDBID,
			},
		});
		StructAsymList.pdbx_PDB_id = findStructAsym.pdbxPdbId;
		StructAsymList.pdbx_alt_id = findStructAsym.pdbxAltId;
		StructAsymList.pdbx_order = findStructAsym.pdbxOrder;
		StructAsymList.pdbx_type = findStructAsym.pdbxType;
		entityNonpolymerVO.struct_asym = StructAsymList;

		return entityNonpolymerVO;
	}

	public async getEntityPolymer(PDBID: string, asymId: string) {
		const entityPolymerVO = new EntityPolymerVO();

		const PdbxStructSpecialSymmetryList = [];
		const findPdbxStructSpecialSymmetry = await pdbxStructSpecialSymmetry.findAll({
			where: {
				structureId: PDBID,
			},
		});
		findPdbxStructSpecialSymmetry.map(item => {
			const pdbxStructSpecialSymmetry = new PdbxStructSpecialSymmetry();
			pdbxStructSpecialSymmetry.PDB_model_num = item.pdbModelNum;
			pdbxStructSpecialSymmetry.auth_seq_id = item.authSeqId;
			pdbxStructSpecialSymmetry.id = item.id;
			pdbxStructSpecialSymmetry.label_asym_id = item.labelAsymId;
			pdbxStructSpecialSymmetry.label_comp_id = item.labelCompId;
			PdbxStructSpecialSymmetryList.push(pdbxStructSpecialSymmetry);
		});
		entityPolymerVO.pdbx_struct_special_symmetry = PdbxStructSpecialSymmetryList;

		const StructAsymList = new StructAsym();
		const findStructAsym = await structAsym.findOne({
			where: {
				structureId: PDBID,
			},
		});
		StructAsymList.pdbx_PDB_id = findStructAsym.pdbxPdbId;
		StructAsymList.pdbx_alt_id = findStructAsym.pdbxAltId;
		StructAsymList.pdbx_order = findStructAsym.pdbxOrder;
		StructAsymList.pdbx_type = findStructAsym.pdbxType;
		entityPolymerVO.struct_asym = StructAsymList;

		return entityPolymerVO;
	}
}
