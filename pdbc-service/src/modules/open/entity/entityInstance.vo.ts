import { ApiProperty } from '@nestjs/swagger';

export class PdbxStructSpecialSymmetry {
	@ApiProperty({
		description: `Part of the identifier for the molecular component.

		This data item is a pointer to _atom_site.pdbx_PDB_model_num in the ATOM_SITE category.`,
		required: false,
	})
	PDB_model_num: number;
	@ApiProperty({
		description: `Part of the identifier for the molecular component.

	This data item is a pointer to _atom_site.auth_seq_id in the ATOM_SITE category.`,
		required: false,
	})
	auth_seq_id: string;
	@ApiProperty({
		description: `The value of _pdbx_struct_special_symmetry.id must uniquely identify each item in the PDBX_STRUCT_SPECIAL_SYMMETRY list.

	This is an integer serial number.`,
	})
	id: number;
	@ApiProperty({
		description: `Part of the identifier for the molecular component.

	This data item is a pointer to _atom_site.label_asym_id in the ATOM_SITE category.`,
		required: false,
	})
	label_asym_id: string;
	@ApiProperty({
		description: `Part of the identifier for the molecular component.

	This data item is a pointer to _atom_site.label_comp_id in the ATOM_SITE category.`,
		required: false,
	})
	label_comp_id: string;
}

export class StructAsym {
	@ApiProperty({
		description: `This data item is a pointer to _atom_site.pdbx_PDB_strand_id the ATOM_SITE category.`,
		required: false,
	})
	pdbx_PDB_id: string;

	@ApiProperty({
		description: 'This data item is a pointer to _atom_site.ndb_alias_strand_id the ATOM_SITE category.',
		required: false,
	})
	pdbx_alt_id: string;

	@ApiProperty({
		description: 'This data item gives the order of the structural elements in the ATOM_SITE category.',
		required: false,
	})
	pdbx_order: number;

	@ApiProperty({
		description: 'This data item describes the general type of the structural elements in the ATOM_SITE category',
		required: false,
	})
	pdbx_type: string;
}

/**
 * Entity Instance
 */
export class EntityBranchedVO {
	@ApiProperty({ type: [PdbxStructSpecialSymmetry], required: false })
	pdbx_struct_special_symmetry: PdbxStructSpecialSymmetry[];

	@ApiProperty({ type: StructAsym, required: false })
	struct_asym: StructAsym;
}

export class EntityNonpolymerVO {
	@ApiProperty({ type: [PdbxStructSpecialSymmetry], required: false })
	pdbx_struct_special_symmetry: PdbxStructSpecialSymmetry[];

	@ApiProperty({ type: StructAsym, required: false })
	struct_asym: StructAsym;
}

export class EntityPolymerVO {
	@ApiProperty({ type: [PdbxStructSpecialSymmetry], required: false })
	pdbx_struct_special_symmetry: PdbxStructSpecialSymmetry[];

	@ApiProperty({ type: StructAsym, required: false })
	struct_asym: StructAsym;
}
