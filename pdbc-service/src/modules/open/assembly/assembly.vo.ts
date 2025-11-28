import { ApiProperty } from '@nestjs/swagger';

export class PdbxStructAssembly {
	@ApiProperty({
		description: `A description of special aspects of the macromolecular assembly.
	In the PDB, 'representative helical assembly', 'complete point assembly',
'complete icosahedral assembly', 'software_defined_assembly', 'author_defined_assembly',
and 'author_and_software_defined_assembly' are considered "biologically relevant assemblies.`,
		required: false,
	})
	details?: string;
	@ApiProperty({
		description:
			'The value of _pdbx_struct_assembly.id must uniquely identify a record in the PDBX_STRUCT_ASSEMBLY list.',
		required: true,
	})
	id?: string;
	@ApiProperty({
		description: 'Provides details of the method used to determine or compute the assembly.',
		required: false,
	})
	method_details: string;
	@ApiProperty({ description: 'The number of polymer molecules in the assembly.', required: false })
	oligomeric_count: number;
	@ApiProperty({ description: 'Provides the details of the oligomeric state of the assembly.', required: false })
	oligomeric_details: string;
	@ApiProperty({
		description: `Candidate macromolecular assembly.

	Excludes the following cases classified in pdbx_struct_asembly.details:
	
	'crystal asymmetric unit', 'crystal asymmetric unit, crystal frame', 'helical asymmetric unit', 'helical asymmetric unit, std helical frame','icosahedral 23 hexamer', 'icosahedral asymmetric unit', 'icosahedral asymmetric unit, std point frame','icosahedral pentamer', 'pentasymmetron capsid unit', 'point asymmetric unit', 'point asymmetric unit, std point frame','trisymmetron capsid unit', and 'deposited_coordinates'.`,
		required: false,
	})
	rcsb_candidate_assembly: string;
	@ApiProperty({ description: 'A filtered description of the macromolecular assembly.', required: false })
	rcsb_details: string;
}

export class PdbxStructAssemblyAuthEvidence {
	@ApiProperty({ description: 'This item references an assembly in pdbx_struct_assembly', required: true })
	assembly_id?: string;
	@ApiProperty({
		description: 'Provides any additional information regarding the evidence of this assembly',
		required: false,
	})
	details?: string;
	@ApiProperty({
		description: 'Provides the experimental method to determine the state of this assembly',
		required: false,
	})
	experimental_support: string;
	@ApiProperty({ description: 'Identifies a unique record in pdbx_struct_assembly_auth_evidence.', required: true })
	id: string;
}

export class PdbxStructAssemblyGen {
	@ApiProperty({
		description: 'This data item is a pointer to _pdbx_struct_assembly.id in the PDBX_STRUCT_ASSEMBLY category.',
		required: false,
	})
	assembly_id: string;
	@ApiProperty({
		description: `This data item is a pointer to _struct_asym.id in the STRUCT_ASYM category.

			This item may be expressed as a comma separated list of identifiers.`,
		required: false,
	})
	asym_id_list: string;
	@ApiProperty({
		description: `Identifies the operation of collection of operations from categoryPDBX_STRUCT_OPER_LIST.Operation expressions may have theforms:(1) the single operation 1 (1,2,5) the operations 1, 2, 5 (1-4) the operations 1,2,3 and 4 (1,2)(3,4) the combinations of operations 3 and 4 followed by 1 and 2 (i.e. the cartesian product of parenthetical groups applied from right to left)`,
		required: false,
	})
	oper_expression: string;
	@ApiProperty({
		description: 'This data item is an ordinal index for the PDBX_STRUCT_ASSEMBLY category.',
	})
	ordinal: string;
}

export class PdbxStructAssemblyProp {
	@ApiProperty({
		description: 'The identifier for the assembly used in category PDBX_STRUCT_ASSEMBLY.',
		required: false,
	})
	assembly_id: string;
	@ApiProperty({ description: 'The identifier for the assembly used in category PDBX_STRUCT_ASSEMBLY.' })
	biol_id: string;
	@ApiProperty({ description: 'The property type for the assembly.' })
	type: string;
	@ApiProperty({ description: 'The value of the assembly property.', required: false })
	value: string;
}

export class PdbxStructOperList {
	@ApiProperty({
		description: 'This identifier code must uniquely identify a record in the PDBX_STRUCT_OPER_LIST list.',
	})
	id: string;
	@ApiProperty({
		description: 'The [1][1] element of the 3x3 matrix component of the transformation operation.',
		required: false,
	})
	matrix_1_1: number;
	@ApiProperty({
		description: 'The [1][2] element of the 3x3 matrix component of the transformation operation.',
		required: false,
	})
	matrix_1_2: number;
	@ApiProperty({
		description: 'The [1][3] element of the 3x3 matrix component of the transformation operation.',
		required: false,
	})
	matrix_1_3: number;
	@ApiProperty({
		description: 'The [2][1] element of the 3x3 matrix component of the transformation operation.',
		required: false,
	})
	matrix_2_1: number;
	@ApiProperty({
		description: 'The [2][2] element of the 3x3 matrix component of the transformation operation.',
		required: false,
	})
	matrix_2_2: number;
	@ApiProperty({
		description: 'The [2][3] element of the 3x3 matrix component of the transformation operation.',
		required: false,
	})
	matrix_2_3: number;
	@ApiProperty({
		description: 'The [3][1] element of the 3x3 matrix component of the transformation operation.',
		required: false,
	})
	matrix_3_1: number;
	@ApiProperty({
		description: 'The [3][2] element of the 3x3 matrix component of the transformation operation.',
		required: false,
	})
	matrix_3_2: number;
	@ApiProperty({
		description: 'The [3][3] element of the 3x3 matrix component of the transformation operation.',
		required: false,
	})
	matrix_3_3: number;
	@ApiProperty({ description: 'A descriptive name for the transformation operation.', required: false })
	name: string;
	@ApiProperty({
		description: 'The symmetry operation corresponding to the transformation operation.',
		required: false,
	})
	symmetry_operation: string;
	@ApiProperty({ description: 'A code to indicate the type of operator.', required: false })
	type: string;
	@ApiProperty({
		description: 'The [1] element of the three-element vector component of the transformation operation.',
		required: false,
	})
	vector_1: number;
	@ApiProperty({
		description: 'The [2] element of the three-element vector component of the transformation operation.',
		required: false,
	})
	vector_2: number;
	@ApiProperty({
		description: 'The [3] element of the three-element vector component of the transformation operation.',
		required: false,
	})
	vector_3: number;
}

export class RcsbAssemblyContainerIdentifiers {
	@ApiProperty({ description: 'Assembly identifier for the container.' })
	assembly_id: string;

	@ApiProperty({ description: 'Entry identifier for the container.' })
	entry_id: string;

	@ApiProperty({
		description:
			'A unique identifier for each object in this assembly container formed by a dash separated concatenation of entry and assembly identifiers.',
		required: false,
	})
	rcsb_id: string;

	@ApiProperty({ description: '', required: false })
	interface_ids: string[];
}

export class RcsbAssemblyInfo {
	@ApiProperty({ description: 'Entity identifier for the container.', required: false })
	assembly_id: string;

	@ApiProperty({ description: 'The assembly non-hydrogen atomic coordinate count.', required: false })
	atom_count: number;

	@ApiProperty({ description: 'The assembly non-hydrogen branched entity atomic coordinate count.', required: false })
	branched_atom_count: number;

	@ApiProperty({
		description: 'The number of distinct branched entities in the generated assembly.',
		required: false,
	})
	branched_entity_count: number;

	@ApiProperty({
		description:
			'The number of branched instances in the generated assembly data set. This is the total count of branched entity instances generated in the assembly coordinate data.',
		required: false,
	})
	branched_entity_instance_count: number;

	@ApiProperty({ description: 'The PDB entry accession code.' })
	entry_id: string;

	@ApiProperty({ description: 'The assembly hydrogen atomic coordinate count.', required: false })
	hydrogen_atom_count: number;

	@ApiProperty({
		description:
			'The number of modeled polymer monomers in the assembly coordinate data. This is the total count of monomers with reported coordinate data for all polymer entity instances in the generated assembly coordinate data.',
		required: false,
	})
	modeled_polymer_monomer_count: number;

	@ApiProperty({
		description: 'Nucleic acid polymer entity type categories describing the generated assembly.',
		required: false,
	})
	na_polymer_entity_types: string;

	@ApiProperty({
		description: 'The assembly non-hydrogen non-polymer entity atomic coordinate count.',
		required: false,
	})
	nonpolymer_atom_count: number;

	@ApiProperty({
		description: 'The number of distinct non-polymer entities in the generated assembly exclusive of solvent.',
		required: false,
	})
	nonpolymer_entity_count: number;

	@ApiProperty({
		description:
			'The number of non-polymer instances in the generated assembly data set exclusive of solvent. This is the total count of non-polymer entity instances generated in the assembly coordinate data.',
		required: false,
	})
	nonpolymer_entity_instance_count: number;

	@ApiProperty({ description: 'The assembly non-hydrogen polymer entity atomic coordinate count.', required: false })
	polymer_atom_count: number;

	@ApiProperty({
		description: 'Categories describing the polymer entity composition for the generated assembly.',
		required: false,
	})
	polymer_composition: string;

	@ApiProperty({ description: 'The number of distinct polymer entities in the generated assembly.', required: false })
	polymer_entity_count: number;

	@ApiProperty({
		description: 'The number of distinct DNA polymer entities in the generated assembly.',
		required: false,
	})
	polymer_entity_count_DNA: number;

	@ApiProperty({
		description: 'The number of distinct RNA polymer entities in the generated assembly.',
		required: false,
	})
	polymer_entity_count_RNA: number;

	@ApiProperty({
		description: 'The number of distinct nucleic acid polymer entities (DNA or RNA) in the generated assembly.',
		required: false,
	})
	polymer_entity_count_nucleic_acid: number;

	@ApiProperty({
		description: 'The number of distinct hybrid nucleic acid polymer entities in the generated assembly.',
		required: false,
	})
	polymer_entity_count_nucleic_acid_hybrid: number;

	@ApiProperty({
		description: 'The number of distinct protein polymer entities in the generated assembly.',
		required: false,
	})
	polymer_entity_count_protein: number;

	@ApiProperty({
		description:
			'The number of polymer instances in the generated assembly data set. This is the total count of polymer entity instances generated in the assembly coordinate data.',
		required: false,
	})
	polymer_entity_instance_count: number;

	@ApiProperty({
		description:
			'The number of DNA polymer instances in the generated assembly data set. This is the total count of DNA polymer entity instances generated in the assembly coordinate data',
		required: false,
	})
	polymer_entity_instance_count_DNA: number;

	@ApiProperty({
		description:
			'The number of RNA polymer instances in the generated assembly data set. This is the total count of RNA polymer entity instances generated in the assembly coordinate data.',
		required: false,
	})
	polymer_entity_instance_count_RNA: number;

	@ApiProperty({
		description:
			'The number of nucleic acid polymer instances in the generated assembly data set. This is the total count of nucleic acid polymer entity instances generated in the assembly coordinate data.',
		required: false,
	})
	polymer_entity_instance_count_nucleic_acid: number;

	@ApiProperty({
		description:
			'The number of hybrid nucleic acide polymer instances in the generated assembly data set. This is the total count of hybrid nucleic acid polymer entity instances generated in the assembly coordinate data.',
		required: false,
	})
	polymer_entity_instance_count_nucleic_acid_hybrid: number;

	@ApiProperty({
		description:
			'The number of protein polymer instances in the generated assembly data set. This is the total count of protein polymer entity instances generated in the assembly coordinate data.',
		required: false,
	})
	polymer_entity_instance_count_protein: number;

	@ApiProperty({
		description:
			'The number of polymer monomers in sample entity instances comprising the assembly data set. This is the total count of monomers for all polymer entity instances in the generated assembly coordinate data.',
		required: false,
	})
	polymer_monomer_count: number;

	@ApiProperty({
		description: 'Selected polymer entity type categories describing the generated assembly.',
		required: false,
	})
	selected_polymer_entity_types: string;

	@ApiProperty({ description: 'The assembly non-hydrogen solvent atomic coordinate count.', required: false })
	solvent_atom_count: number;

	@ApiProperty({ description: 'The number of distinct solvent entities in the generated assembly.', required: false })
	solvent_entity_count: number;

	@ApiProperty({
		description:
			'The number of solvent instances in the generated assembly data set. This is the total count of solvent entity instances generated in the assembly coordinate data.',
		required: false,
	})
	solvent_entity_instance_count: number;

	@ApiProperty({
		description:
			'The number of unmodeled polymer monomers in the assembly coordinate data. This is the total count of monomers with unreported coordinate data for all polymer entity instances in the generated assembly coordinate data.',
		required: false,
	})
	unmodeled_polymer_monomer_count: number;

	@ApiProperty({
		description:
			'Number of geometrically equivalent (i.e. same asym_ids on either side) polymer-polymer interfaces in the assembly',
		required: false,
	})
	num_interfaces: number;

	@ApiProperty({
		description:
			'Number of polymer-polymer interface entities, grouping equivalent interfaces at the entity level (i.e. same entity_ids on either side, with similar but not identical binding sites)',
		required: false,
	})
	num_interface_entities: number;

	@ApiProperty({
		description: 'Number of homomeric (both partners are the same polymeric entity) interface entities',
		required: false,
	})
	num_homomeric_interface_entities: number;

	@ApiProperty({
		description: 'Number of heteromeric (both partners are different polymeric entities) interface entities',
		required: false,
	})
	num_heteromeric_interface_entities: number;

	@ApiProperty({
		description:
			'Number of isologous (both binding sites are same, i.e. interface is symmetric) interface entities',
		required: false,
	})
	num_isologous_interface_entities: number;

	@ApiProperty({
		description: 'Number of heterologous (both binding sites are different) interface entities',
		required: false,
	})
	num_heterologous_interface_entities: number;

	@ApiProperty({ description: 'Number of protein-protein interface entities', required: false })
	num_protein_interface_entities: number;

	@ApiProperty({ description: 'Number of nucleic acid-nucleic acid interface entities', required: false })
	num_na_interface_entities: number;

	@ApiProperty({ description: 'Number of protein-nucleic acid interface entities', required: false })
	'num_prot-na_interface_entities': number;

	@ApiProperty({
		description: 'Total buried surface area calculated as the sum of buried surface areas over all interfaces',
		required: false,
	})
	total_assembly_buried_surface_area: number;

	@ApiProperty({
		description:
			'Total number of interfacing residues in the assembly, calculated as the sum of interfacing residues over all interfaces',
		required: false,
	})
	total_number_interface_residues: number;
}

export class ClustersMembers {
	@ApiProperty({
		description:
			'Internal chain ID used in mmCIF files to uniquely identify structural elements in the asymmetric unit.',
	})
	asym_id: string;
	@ApiProperty({})
	pdbx_struct_oper_list_ids: string[];
}

export class RcsbStructSymmetryClusters {
	@ApiProperty({
		description:
			'Subunits that belong to the cluster, identified by asym_id and optionally by assembly operator id(s).',
		type: ClustersMembers,
	})
	members: ClustersMembers;
	@ApiProperty({ description: 'Average RMSD between members of a given cluster.', required: false })
	avg_rmsd: number;
}

export class RcsbStructSymmetryRotationAxes {
	@ApiProperty({ description: 'coordinate' })
	start: number[];

	@ApiProperty({ description: 'coordinate' })
	end: number[];

	@ApiProperty({
		description:
			'The number of times (order of rotation) that a subunit can be repeated by a rotation operation, being transformed into a new state indistinguishable from its starting state.',
		required: false,
	})
	order: number;
}

export class RcsbStructSymmetry {
	@ApiProperty({
		description:
			'Symmetry symbol refers to point group or helical symmetry of identical polymeric subunits in Sch�nflies notation. Contains point group symbol (e.g., C2, C5, D2, T, O, I) or H for helical symmetry.',
	})
	symbol: string;
	@ApiProperty({
		description:
			'Symmetry type refers to point group or helical symmetry of identical polymeric subunits. Contains point group types (e.g. Cyclic, Dihedral) or Helical for helical symmetry.',
	})
	type: string;
	@ApiProperty({
		description:
			'Each type of different subunits is assigned a latter. The number of equivalent subunits is added as a coefficient after each letter (except 1 which is not added explicitly).',
	})
	stoichiometry: string;
	@ApiProperty({
		description: `Oligomeric state refers to a composition of polymeric subunits in quaternary structure. Quaternary structure may be composed either exclusively of several copies of identical subunits, in which case they are termed homo-oligomers, or alternatively by at least one copy of different subunits (hetero-oligomers). Quaternary structure composed of a single subunit is denoted as 'Monomer'.`,
	})
	oligomeric_state: string;
	@ApiProperty({ type: RcsbStructSymmetryClusters })
	clusters: RcsbStructSymmetryClusters;
	@ApiProperty({
		description: 'The orientation of the principal rotation (symmetry) axis.',
		type: RcsbStructSymmetryRotationAxes,
		required: false,
	})
	rotation_axes: RcsbStructSymmetryRotationAxes;
	@ApiProperty({
		description: `The granularity at which the symmetry calculation is performed. In 'Global Symmetry' all polymeric subunits in assembly are used. In 'Local Symmetry' only a subset of polymeric subunits is considered. In 'Pseudo Symmetry' the threshold for subunits similarity is relaxed.`,
	})
	kind: string;
}

export class RcsbStructSymmetryLineage {
	@ApiProperty({
		description:
			'Automatically assigned ID to uniquely identify the symmetry term in the Protein Symmetry Browser.',
		required: false,
	})
	id: string;

	@ApiProperty({ description: 'A human-readable term describing protein symmetry.', required: false })
	name: string;

	@ApiProperty({ description: 'Hierarchy depth.', required: false })
	depth: number;
}

export class RcsbLatestRevision {
	@ApiProperty({ description: 'The major version number of the latest revision.', required: false })
	major_revision: number;

	@ApiProperty({ description: 'The minor version number of the latest revision.', required: false })
	minor_revision: number;

	@ApiProperty({ description: 'The release date of the latest revision item.', required: false })
	revision_date: string;
}

export class AssemblyVo {
	@ApiProperty({ type: PdbxStructAssembly, required: false })
	pdbx_struct_assembly?: PdbxStructAssembly;

	@ApiProperty({ type: [PdbxStructAssemblyAuthEvidence], required: false })
	pdbx_struct_assembly_auth_evidence?: PdbxStructAssemblyAuthEvidence[];

	@ApiProperty({ type: [PdbxStructAssemblyGen], required: false })
	pdbx_struct_assembly_gen?: PdbxStructAssemblyGen[];

	@ApiProperty({ type: [PdbxStructAssemblyProp], required: false })
	pdbx_struct_assembly_prop?: PdbxStructAssemblyProp[];

	@ApiProperty({ type: [PdbxStructOperList], required: false })
	pdbx_struct_oper_list?: PdbxStructOperList[];

	@ApiProperty({ type: RcsbAssemblyContainerIdentifiers })
	rcsb_assembly_container_identifiers?: RcsbAssemblyContainerIdentifiers;

	@ApiProperty({ type: RcsbAssemblyInfo, required: false })
	rcsb_assembly_info?: RcsbAssemblyInfo;

	@ApiProperty({
		description:
			'A unique identifier for each object in this assembly container formed by a dash separated concatenation of entry and assembly identifiers.',
	})
	rcsb_id: string;

	@ApiProperty({ type: RcsbStructSymmetry, required: false })
	rcsb_struct_symmetry?: RcsbStructSymmetry;

	@ApiProperty({
		description: 'The title and version of software package used for symmetry calculations.',
		required: false,
	})
	rcsb_struct_symmetry_provenance_code: string;

	@ApiProperty({ type: [RcsbStructSymmetryLineage], required: false })
	rcsb_struct_symmetry_lineage: RcsbStructSymmetryLineage[];

	@ApiProperty({ type: RcsbLatestRevision, required: false })
	rcsb_latest_revision?: RcsbLatestRevision;
}
