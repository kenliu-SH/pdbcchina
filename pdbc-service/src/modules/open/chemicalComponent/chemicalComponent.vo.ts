import { ApiProperty } from '@nestjs/swagger';

export class ChemComp {
	@ApiProperty({
		description: `The formula for the chemical component. Formulae are written according to the following rules:

	(1) Only recognized element symbols may be used.
	
	(2) Each element symbol is followed by a 'count' number. A count of '1' may be omitted.
	
	(3) A space or parenthesis must separate each cluster of (element symbol + count), but in general parentheses are not used.
	
	(4) The order of elements depends on whether carbon is present or not. If carbon is present, the order should be: C, then H, then the other elements in alphabetical order of their symbol. If carbon is not present, the elements are listed purely in alphabetic order of their symbol. This is the 'Hill' system used by Chemical Abstracts.`,
		required: false,
	})
	formula: string;

	@ApiProperty({ description: 'Formula mass of the chemical component.', required: false })
	formula_weight: number;

	@ApiProperty({
		description: `The value of _chem_comp.id must uniquely identify each item in the CHEM_COMP list.

	For protein polymer entities, this is the three-letter code for the amino acid.
	
	For nucleic acid polymer entities, this is the one-letter code for the base.`,
	})
	id: string;

	@ApiProperty({
		description: `The identifier for the parent component of the nonstandard component. May be be a comma separated list if this component is derived from multiple components.

	Items in this indirectly point to _chem_comp.id in the CHEM_COMP category.`,
		required: false,
	})
	mon_nstd_parent_comp_id: string[];

	@ApiProperty({ description: 'The full name of the component.', required: false })
	name: string;

	@ApiProperty({
		description: `For standard polymer components, the one-letter code for the component. For non-standard polymer components, the one-letter code for parent component if this exists; otherwise, the one-letter code should be given as 'X'.

	Components that derived from multiple parents components are described by a sequence of one-letter-codes.`,
		required: false,
	})
	one_letter_code: string;

	@ApiProperty({
		description: `A preliminary classification used by PDB to indicate that the chemistry of this component while described as clearly as possible is still ambiguous. Software tools may not be able to process this component definition.`,
		required: false,
	})
	pdbx_ambiguous_flag: string;

	@ApiProperty({
		description: `The net integer charge assigned to this component. This is the formal charge assignment normally found in chemical diagrams.`,
		required: false,
	})
	pdbx_formal_charge: number;

	@ApiProperty({ description: 'Date component was added to database.', required: false })
	pdbx_initial_date: string;

	@ApiProperty({ description: 'Date component was last modified.', required: false })
	pdbx_modified_date: string;

	@ApiProperty({
		description: 'This data item identifies the deposition site that processed this chemical component defintion.',
		required: false,
	})
	pdbx_processing_site: string;

	@ApiProperty({ description: 'This data item holds the current release status for the component.', required: false })
	pdbx_release_status: string;

	@ApiProperty({
		description: 'Identifies the _chem_comp.id of the component that has replaced this component.',
		required: false,
	})
	pdbx_replaced_by: string;

	@ApiProperty({
		description: `Identifies the _chem_comp.id's of the components which have been replaced by this component. Multiple id codes should be separated by commas.`,
		required: false,
	})
	pdbx_replaces: string;

	@ApiProperty({ description: 'The list of subcomponents contained in this component.', required: false })
	pdbx_subcomponent_list: string;

	@ApiProperty({
		description: `For standard polymer components, the common three-letter code for the component. Non-standard polymer components and non-polymer components are also assigned three-letter-codes.

	For ambiguous polymer components three-letter code should be given as 'UNK'. Ambiguous ions are assigned the code 'UNX'. Ambiguous non-polymer components are assigned the code 'UNL'.`,
		required: false,
	})
	three_letter_code: string;

	@ApiProperty({
		description: `For standard polymer components, the type of the monomer. Note that monomers that will form polymers are of three types: linking monomers, monomers with some type of N-terminal (or 5') cap and monomers with some type of C-terminal (or 3') cap.`,
		required: false,
	})
	type: string;
}

export class PdbxChemCompAudit {
	@ApiProperty({ description: 'The action associated with this audit record.', required: false })
	action_type: string;

	@ApiProperty({
		description: 'This data item is a pointer to _chem_comp.id in the CHEM_COMP category.',
		required: false,
	})
	comp_id: string;

	@ApiProperty({ description: 'The date associated with this audit record.', required: false })
	date: string;

	@ApiProperty({ description: 'Additional details decribing this change.', required: false })
	details: string;

	@ApiProperty({ description: 'This data item is an ordinal index for the PDBX_CHEM_COMP_AUDIT category.' })
	ordinal: number;
}

export class PdbxChemCompDescriptor {
	@ApiProperty({ description: 'This data item is a pointer to _chem_comp.id in the CHEM_COMP category.' })
	comp_id: string;

	@ApiProperty({ description: 'This data item contains the descriptor value for this component.', required: false })
	descriptor: string;

	@ApiProperty({
		description: 'This data item contains the name of the program or library used to compute the descriptor.',
	})
	program: string;

	@ApiProperty({
		description: 'This data item contains the version of the program or library used to compute the descriptor.',
	})
	program_version: string;

	@ApiProperty({ description: 'This data item contains the descriptor type.' })
	type: string;
}

export class PdbxChemCompFeature {
	@ApiProperty({ description: 'The component identifier for this feature.' })
	comp_id: string;

	@ApiProperty({ description: 'The information source for the component feature.' })
	source: string;

	@ApiProperty({ description: 'The component feature type.' })
	type: string;

	@ApiProperty({ description: 'The component feature value.' })
	value: string;
}

export class PdbxChemCompIdentifier {
	@ApiProperty({ description: 'This data item is a pointer to _chem_comp.id in the CHEM_COMP category.' })
	comp_id: string;

	@ApiProperty({ description: 'This data item contains the identifier value for this component.', required: false })
	identifier: string;

	@ApiProperty({
		description: 'This data item contains the name of the program or library used to compute the identifier.',
	})
	program: string;

	@ApiProperty({
		description: 'This data item contains the version of the program or library used to compute the identifier.',
	})
	program_version: string;

	@ApiProperty({ description: 'This data item contains the identifier type.' })
	type: string;
}

export class PdbxFamilyPrdAudit {
	@ApiProperty({ description: 'The action associated with this audit record.' })
	action_type: string;

	@ApiProperty({ description: 'The initials of the annotator creating of modifying the family.', required: false })
	annotator: string;

	@ApiProperty({ description: 'The date associated with this audit record.' })
	date: string;

	@ApiProperty({ description: 'Additional details decribing this change.', required: false })
	details: string;

	@ApiProperty({
		description:
			'This data item is a pointer to _pdbx_reference_molecule_family.family_prd_id in the pdbx_reference_molecule category.',
	})
	family_prd_id: string;

	@ApiProperty({ description: 'An identifier for the wwPDB site creating or modifying the family.' })
	processing_site: string;
}

export class PdbxPrdAudit {
	@ApiProperty({ description: 'The action associated with this audit record.' })
	action_type: string;

	@ApiProperty({ description: 'The initials of the annotator creating of modifying the molecule.', required: false })
	annotator: string;

	@ApiProperty({ description: 'The date associated with this audit record.' })
	date: string;

	@ApiProperty({ description: 'Additional details decribing this change.', required: false })
	details: string;

	@ApiProperty({
		description:
			'This data item is a pointer to _pdbx_reference_molecule.prd_id in the pdbx_reference_molecule category.',
	})
	prd_id: string;

	@ApiProperty({ description: 'An identifier for the wwPDB site creating or modifying the molecule.' })
	processing_site: string;
}

export class PdbxReferenceEntityList {
	@ApiProperty({ description: 'The component number of this entity within the molecule.' })
	component_id: number;

	@ApiProperty({ description: 'Additional details about this entity.' })
	details: string;

	@ApiProperty({
		description:
			'The value of _pdbx_reference_entity_list.prd_id is a reference _pdbx_reference_molecule.prd_id in the PDBX_REFERENCE_MOLECULE category.',
	})
	prd_id: string;

	@ApiProperty({
		description:
			'The value of _pdbx_reference_entity_list.ref_entity_id is a unique identifier the a constituent entity within this reference molecule.',
	})
	ref_entity_id: string;

	@ApiProperty({ description: 'Defines the polymer characteristic of the entity.' })
	type: string;
}

export class PdbxReferenceEntityPoly {
	@ApiProperty({ description: 'The database code for this source information', required: false })
	db_code: string;
	@ApiProperty({ description: 'The database name for this source information', required: false })
	db_name: string;
	@ApiProperty({
		description:
			'The value of _pdbx_reference_entity_poly.prd_id is a reference _pdbx_reference_entity_list.prd_id in the PDBX_REFERENCE_ENTITY_LIST category.',
	})
	prd_id: string;
	@ApiProperty({
		description:
			'The value of _pdbx_reference_entity_poly.ref_entity_id is a reference to _pdbx_reference_entity_list.ref_entity_id in PDBX_REFERENCE_ENTITY_LIST category.',
	})
	ref_entity_id: string;
	@ApiProperty({ description: 'The type of the polymer.', required: false })
	type: string;
}

export class PdbxReferenceEntityPolyLink {
	@ApiProperty({
		description: 'The atom identifier/name in the first of the two components making the linkage.',
		required: false,
	})
	atom_id_1: string;

	@ApiProperty({
		description: 'The atom identifier/name in the second of the two components making the linkage.',
		required: false,
	})
	atom_id_2: string;

	@ApiProperty({
		description: `The component identifier in the first of the two components making the linkage.

	This data item is a pointer to _pdbx_reference_entity_poly_seq.mon_id in the PDBX_REFERENCE_ENTITY_POLY_SEQ category.`,
		required: false,
	})
	comp_id_1: string;

	@ApiProperty({
		description: `The component identifier in the second of the two components making the linkage.

	This data item is a pointer to _pdbx_reference_entity_poly_seq.mon_id in the PDBX_REFERENCE_ENTITY_POLY_SEQ category.`,
		required: false,
	})
	comp_id_2: string;

	@ApiProperty({ description: 'The entity component identifier entity containing the linkage.' })
	component_id: number;

	@ApiProperty({
		description: `For a polymer entity, the sequence number in the first of the two components making the linkage.

	This data item is a pointer to _pdbx_reference_entity_poly_seq.num in the PDBX_REFERENCE_ENTITY_POLY_SEQ category.`,
		required: false,
	})
	entity_seq_num_1: number;

	@ApiProperty({
		description: `For a polymer entity, the sequence number in the second of the two components making the linkage.

	This data item is a pointer to _pdbx_reference_entity_poly_seq.num in the PDBX_REFERENCE_ENTITY_POLY_SEQ category.`,
		required: false,
	})
	entity_seq_num_2: number;

	@ApiProperty({
		description: `The value of _pdbx_reference_entity_poly_link.link_id uniquely identifies a linkage within a polymer entity.`,
	})
	link_id: number;

	@ApiProperty({
		description:
			'The value of _pdbx_reference_entity_poly_link.prd_id is a reference _pdbx_reference_entity_list.prd_id in the PDBX_REFERENCE_ENTITY_POLY category.',
	})
	prd_id: string;

	@ApiProperty({
		description: `The reference entity id of the polymer entity containing the linkage.

	This data item is a pointer to _pdbx_reference_entity_poly.ref_entity_id in the PDBX_REFERENCE_ENTITY_POLY category.`,
	})
	ref_entity_id: string;

	@ApiProperty({ description: 'The bond order target for the non-standard linkage.', required: false })
	value_order: string;
}

export class PdbxReferenceEntityPolySeq {
	@ApiProperty({ description: 'A flag to indicate that sequence heterogeneity at this monomer position.' })
	hetero: string;

	@ApiProperty({ description: 'This data item is the chemical component identifier of monomer.' })
	mon_id: string;

	@ApiProperty({
		description: `The value of _pdbx_reference_entity_poly_seq.num must uniquely and sequentially identify a record in the PDBX_REFERENCE_ENTITY_POLY_SEQ list.

	This value is conforms to author numbering conventions and does not map directly to the numbering conventions used for _entity_poly_seq.num.`,
	})
	num: number;

	@ApiProperty({
		description: 'A flag to indicate that this monomer is observed in the instance example.',
		required: false,
	})
	observed: string;

	@ApiProperty({
		description:
			'This data item is the chemical component identifier for the parent component corresponding to this monomer.',
		required: false,
	})
	parent_mon_id: string;

	@ApiProperty({
		description:
			'The value of _pdbx_reference_entity_poly_seq.prd_id is a reference _pdbx_reference_entity_poly.prd_id in the PDBX_REFERENCE_ENTITY_POLY category.',
	})
	prd_id: string;

	@ApiProperty({
		description:
			'The value of _pdbx_reference_entity_poly_seq.ref_entity_id is a reference to _pdbx_reference_entity_poly.ref_entity_id in PDBX_REFERENCE_ENTITY_POLY category.',
	})
	ref_entity_id: string;
}

export class PdbxReferenceEntitySequence {
	@ApiProperty({ description: 'A flag to indicate a non-ribosomal entity.', required: false })
	NRP_flag: string;

	@ApiProperty({
		description: `The one-letter-code sequence for this entity. Non-standard monomers are represented as 'X'.`,
		required: false,
	})
	one_letter_codes: string;

	@ApiProperty({
		description:
			'The value of _pdbx_reference_entity_sequence.prd_id is a reference _pdbx_reference_entity_list.prd_id in the PDBX_REFERENCE_ENTITY_LIST category.',
	})
	prd_id: string;

	@ApiProperty({
		description:
			'The value of _pdbx_reference_entity_sequence.ref_entity_id is a reference to _pdbx_reference_entity_list.ref_entity_id in PDBX_REFERENCE_ENTITY_LIST category.',
	})
	ref_entity_id: string;

	@ApiProperty({ description: 'The monomer type for the sequence.', required: false })
	type: string;
}

export class PdbxReferenceEntitySrcNat {
	@ApiProperty({
		description: 'The Americal Tissue Culture Collection code for organism from which the entity was isolated.',
		required: false,
	})
	atcc: string;

	@ApiProperty({ description: 'The database code for this source information', required: false })
	db_code: string;

	@ApiProperty({ description: 'The database name for this source information', required: false })
	db_name: string;

	@ApiProperty({
		description:
			'The value of _pdbx_reference_entity_src_nat.ordinal distinguishes source details for this entity.',
	})
	ordinal: number;

	@ApiProperty({
		description: 'The scientific name of the organism from which the entity was isolated.',
		required: false,
	})
	organism_scientific: string;

	@ApiProperty({
		description:
			'The value of _pdbx_reference_entity_src_nat.prd_id is a reference _pdbx_reference_entity_list.prd_id in the PDBX_REFERENCE_ENTITY_LIST category.',
	})
	prd_id: string;

	@ApiProperty({
		description:
			'The value of _pdbx_reference_entity_src_nat.ref_entity_id is a reference to _pdbx_reference_entity_list.ref_entity_id in PDBX_REFERENCE_ENTITY_LIST category.',
	})
	ref_entity_id: string;

	@ApiProperty({ description: 'The data source for this information.', required: false })
	source: string;

	@ApiProperty({ description: 'A identifier within the data source for this information.', required: false })
	source_id: string;

	@ApiProperty({ description: 'The NCBI TaxId of the organism from which the entity was isolated.', required: false })
	taxid: string;
}

export class PdbxReferenceMolecule {
	@ApiProperty({
		description:
			'For entities represented as single molecules, the identifier corresponding to the chemical definition for the molecule.',
		required: false,
	})
	chem_comp_id: string;
	@ApiProperty({ description: 'Broadly defines the function of the entity.', required: false })
	class: string;
	@ApiProperty({ description: 'Evidence for the assignment of _pdbx_reference_molecule.class', required: false })
	class_evidence_code: string;
	@ApiProperty({ description: 'Special details about this molecule.', required: false })
	compound_details: string;
	@ApiProperty({ description: 'Description of this molecule.', required: false })
	description: string;
	@ApiProperty({
		description: `The formula for the reference entity. Formulae are written according to the rules:

	Only recognised element symbols may be used.
	
	Each element symbol is followed by a 'count' number. A count of '1' may be omitted.
	
	A space or parenthesis must separate each element symbol and its count, but in general parentheses are not used.
	
	The order of elements depends on whether or not carbon is present. If carbon is present, the order should be: C, then H, then the other elements in alphabetical order of their symbol. If carbon is not present, the elements are listed purely in alphabetic order of their symbol. This is the 'Hill' system used by Chemical Abstracts.`,
		required: false,
	})
	formula: string;
	@ApiProperty({ description: 'Formula mass in daltons of the entity.', required: false })
	formula_weight: string;
	@ApiProperty({ description: 'A name of the entity.', required: false })
	name: string;
	@ApiProperty({
		description: `The value of _pdbx_reference_molecule.prd_id is the unique identifier for the reference molecule in this family.

	By convention this ID uniquely identifies the reference molecule in in the PDB reference dictionary.
	
	The ID has the template form PRD_dddddd (e.g. PRD_000001)`,
	})
	prd_id: string;
	@ApiProperty({
		description: 'Defines the current PDB release status for this molecule definition.',
		required: false,
	})
	release_status: string;
	@ApiProperty({
		description: 'Assigns the identifier of the reference molecule that has replaced this molecule.',
		required: false,
	})
	replaced_by: string;
	@ApiProperty({
		description:
			'Assigns the identifier for the reference molecule which have been replaced by this reference molecule. Multiple molecule identifier codes should be separated by commas.',
		required: false,
	})
	replaces: string;
	@ApiProperty({ description: 'Defines how this entity is represented in PDB data files.', required: false })
	represent_as: string;
	@ApiProperty({
		description: 'The PDB accession code for the entry containing a representative example of this molecule.',
		required: false,
	})
	representative_PDB_id_code: string;
	@ApiProperty({ description: 'Defines the structural classification of the entity.', required: false })
	type: string;
	@ApiProperty({ description: 'Evidence for the assignment of _pdbx_reference_molecule.type', required: false })
	type_evidence_code: string;
}

export class PdbxReferenceMoleculeAnnotation {
	@ApiProperty({
		description: `The value of _pdbx_reference_molecule_annotation.family_prd_id is a reference to _pdbx_reference_molecule_list.family_prd_id in category PDBX_REFERENCE_MOLECULE_FAMILY_LIST.`,
	})
	family_prd_id: string;

	@ApiProperty({ description: 'This data item distinguishes anotations for this entity.' })
	ordinal: number;

	@ApiProperty({
		description:
			'This data item is a pointer to _pdbx_reference_molecule.prd_id in the PDB_REFERENCE_MOLECULE category.',
		required: false,
	})
	prd_id: string;

	@ApiProperty({ description: 'The source of the annoation for this entity.', required: false })
	source: string;

	@ApiProperty({ description: 'Text describing the annotation for this entity.', required: false })
	text: string;

	@ApiProperty({ description: 'Type of annotation for this entity.', required: false })
	type: string;
}

export class PdbxReferenceMoleculeDetails {
	@ApiProperty({
		description: `The value of _pdbx_reference_molecule_details.family_prd_id is a reference to _pdbx_reference_molecule_list.family_prd_id' in category PDBX_REFERENCE_MOLECULE_FAMILY.`,
		required: false,
	})
	family_prd_id: string;

	@ApiProperty({
		description:
			'The value of _pdbx_reference_molecule_details.ordinal is an ordinal that distinguishes each descriptive text for this entity.',
		required: false,
	})
	ordinal: string;

	@ApiProperty({ description: 'A data source of this information (e.g. PubMed, Merck Index)' })
	source: string;

	@ApiProperty({ description: 'A identifier within the data source for this information.' })
	source_id: string;

	@ApiProperty({ description: 'The text of the description of special aspects of the entity.' })
	text: string;
}

export class PdbxReferenceMoleculeFamily {
	@ApiProperty({
		description: `The value of _pdbx_reference_entity.family_prd_id must uniquely identify a record in the PDBX_REFERENCE_MOLECULE_FAMILY list.

	By convention this ID uniquely identifies the reference family in in the PDB reference dictionary.
	
	The ID has the template form FAM_dddddd (e.g. FAM_000001)`,
	})
	family_prd_id: string;

	@ApiProperty({ description: 'The entity family name.', required: false })
	name: string;

	@ApiProperty({ description: 'Assigns the current PDB release status for this family.', required: false })
	release_status: string;

	@ApiProperty({
		description: 'Assigns the identifier of the family that has replaced this component.',
		required: false,
	})
	replaced_by: string;

	@ApiProperty({
		description:
			'Assigns the identifier for the family which have been replaced by this family. Multiple family identifier codes should be separated by commas.',
		required: false,
	})
	replaces: string;
}

export class PdbxReferenceMoleculeFeatures {
	@ApiProperty({
		description: `The value of _pdbx_reference_molecule_features.family_prd_id is a reference to _pdbx_reference_molecule_list.family_prd_id in category PDBX_REFERENCE_MOLECULE_FAMILY_LIST.`,
	})
	family_prd_id: string;

	@ApiProperty({
		description:
			'The value of _pdbx_reference_molecule_features.ordinal distinguishes each feature for this entity.',
	})
	ordinal: number;

	@ApiProperty({
		description:
			'The value of _pdbx_reference_molecule_features.prd_id is a reference _pdbx_reference_molecule.prd_id in the PDBX_REFERENCE_MOLECULE category.',
	})
	prd_id: string;

	@ApiProperty({ description: 'The information source for the component feature.', required: false })
	source: string;

	@ApiProperty({
		description:
			'The value of _pdbx_reference_molecule_features.source_ordinal provides the priority order of features from a particular source or database.',
		required: false,
	})
	source_ordinal: string;

	@ApiProperty({ description: 'The entity feature type.', required: false })
	type: string;

	@ApiProperty({ description: 'The entity feature value.', required: false })
	value: string;
}

export class PdbxReferenceMoleculeList {
	@ApiProperty({
		description: `The value of _pdbx_reference_molecule_list.family_prd_id is a reference to _pdbx_reference_molecule_family.family_prd_id' in category PDBX_REFERENCE_MOLECULE_FAMILY.`,
	})
	family_prd_id: string;
	@ApiProperty({
		description: `The value of _pdbx_reference_molecule_list.prd_id is the unique identifier for the reference molecule in this family.

		By convention this ID uniquely identifies the reference molecule in in the PDB reference dictionary.
		
		The ID has the template form PRD_dddddd (e.g. PRD_000001)`,
	})
	prd_id: string;
}

export class PdbxReferenceMoleculeRelatedStructures {
	@ApiProperty({ description: 'A link to related reference information in the citation category.', required: false })
	citation_id: string;

	@ApiProperty({ description: 'The database accession code for the related structure reference.', required: false })
	db_accession: string;

	@ApiProperty({ description: 'The database identifier code for the related structure reference.', required: false })
	db_code: string;

	@ApiProperty({ description: 'The database name for the related structure reference.', required: false })
	db_name: string;

	@ApiProperty({
		description: `The value of _pdbx_reference_molecule_related_structures.family_prd_id is a reference to _pdbx_reference_molecule_list.family_prd_id in category PDBX_REFERENCE_MOLECULE_FAMILY_LIST.`,
	})
	family_prd_id: string;

	@ApiProperty({
		description: `The formula for the reference entity. Formulae are written according to the rules:

	Only recognised element symbols may be used.
	
	Each element symbol is followed by a 'count' number. A count of '1' may be omitted.
	
	A space or parenthesis must separate each element symbol and its count, but in general parentheses are not used.
	
	The order of elements depends on whether or not carbon is present. If carbon is present, the order should be: C, then H, then the other elements in alphabetical order of their symbol. If carbon is not present, the elements are listed purely in alphabetic order of their symbol. This is the 'Hill' system used by Chemical Abstracts.`,
		required: false,
	})
	formula: string;

	@ApiProperty({ description: 'The chemical name for the structure entry in the related database', required: false })
	name: string;

	@ApiProperty({
		description:
			'The value of _pdbx_reference_molecule_related_structures.ordinal distinguishes related structural data for each entity.',
	})
	ordinal: string;
}

export class PdbxReferenceMoleculeSynonyms {
	@ApiProperty({
		description: `The value of _pdbx_reference_molecule_synonyms.family_prd_id is a reference to _pdbx_reference_molecule_list.family_prd_id in category PDBX_REFERENCE_MOLECULE_FAMILY_LIST.`,
	})
	family_prd_id: string;
	@ApiProperty({ description: 'A synonym name for the entity.', required: false })
	name: string;
	@ApiProperty({
		description:
			'The value of _pdbx_reference_molecule_synonyms.ordinal is an ordinal to distinguish synonyms for this entity.',
	})
	ordinal: string;
	@ApiProperty({
		description:
			'The value of _pdbx_reference_molecule_synonyms.prd_id is a reference _pdbx_reference_molecule.prd_id in the PDBX_REFERENCE_MOLECULE category.',
	})
	prd_id: string;
	@ApiProperty({ description: 'The source of this synonym name for the entity.', required: false })
	source: string;
}

export class ChemicalComponentVo {
	@ApiProperty({ type: ChemComp, required: false })
	chemComp: ChemComp;

	@ApiProperty({ type: [PdbxChemCompAudit], required: false })
	pdbxChemCompAudit: PdbxChemCompAudit[];

	@ApiProperty({ type: [PdbxChemCompDescriptor], required: false })
	pdbxChemCompDescriptor: PdbxChemCompDescriptor[];

	@ApiProperty({ type: [PdbxChemCompFeature], required: false })
	pdbxChemCompFeature: PdbxChemCompFeature[];

	@ApiProperty({ type: [PdbxChemCompIdentifier], required: false })
	pdbxChemCompIdentifier: PdbxChemCompIdentifier[];

	@ApiProperty({ type: [PdbxFamilyPrdAudit], required: false })
	pdbxFamilyPrdAudit: PdbxFamilyPrdAudit[];

	@ApiProperty({ type: [PdbxPrdAudit], required: false })
	pdbxPrdAudit: PdbxPrdAudit[];

	@ApiProperty({ type: [PdbxReferenceEntityList], required: false })
	pdbxReferenceEntityList: PdbxReferenceEntityList[];

	@ApiProperty({ type: [PdbxReferenceEntityPoly], required: false })
	pdbxReferenceEntityPoly: PdbxReferenceEntityPoly[];

	@ApiProperty({ type: [PdbxReferenceEntityPolyLink], required: false })
	pdbxReferenceEntityPolyLink: PdbxReferenceEntityPolyLink[];

	@ApiProperty({ type: [PdbxReferenceEntityPolySeq], required: false })
	pdbxReferenceEntityPolySeq: PdbxReferenceEntityPolySeq[];

	@ApiProperty({ type: [PdbxReferenceEntitySequence], required: false })
	pdbxReferenceEntitySequence: PdbxReferenceEntitySequence[];

	@ApiProperty({ type: [PdbxReferenceEntitySrcNat], required: false })
	pdbxReferenceEntitySrcNat: PdbxReferenceEntitySrcNat[];

	@ApiProperty({ type: PdbxReferenceMolecule, required: false })
	pdbxReferenceMolecule: PdbxReferenceMolecule;

	@ApiProperty({ type: [PdbxReferenceMoleculeAnnotation], required: false })
	pdbxReferenceMoleculeAnnotation: PdbxReferenceMoleculeAnnotation[];

	@ApiProperty({ type: [PdbxReferenceMoleculeDetails], required: false })
	pdbxReferenceMoleculeDetails: PdbxReferenceMoleculeDetails[];

	@ApiProperty({ type: PdbxReferenceMoleculeFamily, required: false })
	pdbxReferenceMoleculeFamily: PdbxReferenceMoleculeFamily;

	@ApiProperty({ type: [PdbxReferenceMoleculeFeatures], required: false })
	pdbxReferenceMoleculeFeatures: PdbxReferenceMoleculeFeatures[];

	@ApiProperty({ type: [PdbxReferenceMoleculeList], required: false })
	pdbxReferenceMoleculeList: PdbxReferenceMoleculeList[];

	@ApiProperty({ type: [PdbxReferenceMoleculeRelatedStructures], required: false })
	pdbxReferenceMoleculeRelatedStructures: PdbxReferenceMoleculeRelatedStructures[];

	@ApiProperty({ type: [PdbxReferenceMoleculeSynonyms], required: false })
	pdbxReferenceMoleculeSynonyms: PdbxReferenceMoleculeSynonyms[];
}

export class DrugBankAnnotationsVo {}
