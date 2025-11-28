import { ApiProperty } from '@nestjs/swagger';

export class RcsbClusterMembership {
	@ApiProperty({
		description:
			'Identifier for a cluster at the specified level of sequence identity within the cluster data set.',
		required: false,
	})
	cluster_id: number;

	@ApiProperty({ description: 'Sequence identity expressed as an integer percent value.', required: false })
	identity: number;
}

export class EntityPoly {
	@ApiProperty({
		description:
			'A flag to indicate whether the polymer contains at least one monomer-to-monomer link different from that implied by _entity_poly.type.',
		required: false,
	})
	nstd_linkage: string;

	@ApiProperty({
		description:
			'A flag to indicate whether the polymer contains at least one monomer that is not considered standard.',
		required: false,
	})
	nstd_monomer: string;

	@ApiProperty({
		description: `Sequence of protein or nucleic acid polymer in standard one-letter codes of amino acids or nucleotides. Non-standard amino acids/nucleotides are represented by their Chemical Component Dictionary (CCD) codes in parenthesis. Deoxynucleotides are represented by the specially-assigned 2-letter CCD codes in parenthesis, with 'D' prefix added to their ribonucleotide counterparts. For hybrid polymer, each residue is represented by the code of its individual type. A cyclic polymer is represented in linear sequence from the chosen start to end.

	A for Alanine or Adenosine-5'-monophosphate C for Cysteine or Cytidine-5'-monophosphate D for Aspartic acid E for Glutamic acid F for Phenylalanine G for Glycine or Guanosine-5'-monophosphate H for Histidine I for Isoleucine or Inosinic Acid L for Leucine K for Lysine M for Methionine N for Asparagine or Unknown ribonucleotide O for Pyrrolysine P for Proline Q for Glutamine R for Arginine S for Serine T for Threonine U for Selenocysteine or Uridine-5'-monophosphate V for Valine W for Tryptophan Y for Tyrosine (DA) for 2'-deoxyadenosine-5'-monophosphate (DC) for 2'-deoxycytidine-5'-monophosphate (DG) for 2'-deoxyguanosine-5'-monophosphate (DT) for Thymidine-5'-monophosphate (MSE) for Selenomethionine (SEP) for Phosphoserine (PTO) for Phosphothreonine (PTR) for Phosphotyrosine (PCA) for Pyroglutamic acid (UNK) for Unknown amino acid (ACE) for Acetylation cap (NH2) for Amidation cap`,
		required: false,
	})
	pdbx_seq_one_letter_code: string;

	@ApiProperty({
		description: `Canonical sequence of protein or nucleic acid polymer in standard one-letter codes of amino acids or nucleotides, corresponding to the sequence in _entity_poly.pdbx_seq_one_letter_code. Non-standard amino acids/nucleotides are represented by the codes of their parents if parent is specified in _chem_comp.mon_nstd_parent_comp_id, or by letter 'X' if parent is not specified. Deoxynucleotides are represented by their canonical one-letter codes of A, C, G, or T.

	For modifications with several parent amino acids,
all corresponding parent amino acid codes will be listed
(ex. chromophores).`,
		required: false,
	})
	pdbx_seq_one_letter_code_can: string;

	@ApiProperty({ description: 'Evidence for the assignment of the polymer sequence.', required: false })
	pdbx_sequence_evidence_code: string;

	@ApiProperty({ description: 'The PDB strand/chain id(s) corresponding to this polymer entity.', required: false })
	pdbx_strand_id: string;

	@ApiProperty({
		description:
			'For Structural Genomics entries, the sequence`s target identifier registered at the TargetTrack databas',
		required: false,
	})
	pdbx_target_identifier: string;

	@ApiProperty({
		description:
			'Number of regions in the sample sequence identified as expression tags, linkers, or cloning artifacts.',
		required: false,
	})
	rcsb_artifact_monomer_count: number;

	@ApiProperty({ description: 'Number of monomer conflicts relative to the reference sequence.', required: false })
	rcsb_conflict_count: number;

	@ApiProperty({ description: 'Number of monomer deletions relative to the reference sequence.', required: false })
	rcsb_deletion_count: number;

	@ApiProperty({ description: 'A coarse-grained polymer entity type.', required: false })
	rcsb_entity_polymer_type: string;

	@ApiProperty({ description: 'Number of monomer insertions relative to the reference sequence.', required: false })
	rcsb_insertion_count: number;

	@ApiProperty({ description: 'Number of engineered mutations engineered in the sample sequence.', required: false })
	rcsb_mutation_count: number;

	@ApiProperty({ description: 'Number of non-standard monomers in the sample sequence.', required: false })
	rcsb_non_std_monomer_count: number;

	@ApiProperty({
		description: 'Unique list of non-standard monomer chemical component identifiers in the sample sequence.',
		required: false,
	})
	rcsb_non_std_monomers: string[];

	@ApiProperty({ description: 'For polymer BIRD molecules the BIRD identifier for the entity.', required: false })
	rcsb_prd_id: string;

	@ApiProperty({ description: 'The monomer length of the sample sequence.', required: false })
	rcsb_sample_sequence_length: number;

	@ApiProperty({ description: 'The type of the polymer', required: false })
	type: string;
}

export class EntitySrcGen {
	@ApiProperty({
		description:
			'A unique identifier for the expression system. This should be extracted from a local list of expression systems.',
		required: false,
	})
	expression_system_id: string;
	@ApiProperty({
		description: 'The common name of the natural organism from which the gene was obtained.',
		required: false,
	})
	gene_src_common_name: string;
	@ApiProperty({
		description: 'A description of special aspects of the natural organism from which the gene was obtained.',
		required: false,
	})
	gene_src_details: string;
	@ApiProperty({
		description: 'The genus of the natural organism from which the gene was obtained.',
		required: false,
	})
	gene_src_genus: string;
	@ApiProperty({
		description: 'The species of the natural organism from which the gene was obtained.',
		required: false,
	})
	gene_src_species: string;
	@ApiProperty({
		description: 'The strain of the natural organism from which the gene was obtained, if relevant.',
		required: false,
	})
	gene_src_strain: string;
	@ApiProperty({
		description: 'The tissue of the natural organism from which the gene was obtained.',
		required: false,
	})
	gene_src_tissue: string;
	@ApiProperty({
		description: 'The subcellular fraction of the tissue of the natural organism from which the gene was obtained.',
		required: false,
	})
	gene_src_tissue_fraction: string;
	@ApiProperty({
		description: `The common name of the organism that served as host for the production of the entity. Where full details of the protein production are available it would be expected that this item be derived from _entity_src_gen_express.host_org_common_name or via _entity_src_gen_express.host_org_tax_id`,
		required: false,
	})
	host_org_common_name: string;
	@ApiProperty({
		description: `A description of special aspects of the organism that served as host for the production of the entity. Where full details of the protein production are available it would be expected that this item would derived from _entity_src_gen_express.host_org_details`,
		required: false,
	})
	host_org_details: string;
	@ApiProperty({
		description: 'The genus of the organism that served as host for the production of the entity.',
		required: false,
	})
	host_org_genus: string;
	@ApiProperty({
		description: 'The species of the organism that served as host for the production of the entity.',
		required: false,
	})
	host_org_species: string;
	@ApiProperty({
		description: 'This data item identifies cases in which an alternative source modeled.',
		required: false,
	})
	pdbx_alt_source_flag: string;
	@ApiProperty({
		description: `The beginning polymer sequence position for the polymer section corresponding to this source.

	A reference to the sequence position in the entity_poly category.`,
		required: false,
	})
	pdbx_beg_seq_num: number;
	@ApiProperty({ description: 'Information on the source which is not given elsewhere.', required: false })
	pdbx_description: string;
	@ApiProperty({
		description: `The ending polymer sequence position for the polymer section corresponding to this source.

	A reference to the sequence position in the entity_poly category.`,
		required: false,
	})
	pdbx_end_seq_num: number;
	@ApiProperty({ description: 'American Type Culture Collection tissue culture number.', required: false })
	pdbx_gene_src_atcc: string;
	@ApiProperty({ description: 'Cell type.', required: false })
	pdbx_gene_src_cell: string;
	@ApiProperty({ description: 'The specific line of cells.', required: false })
	pdbx_gene_src_cell_line: string;
	@ApiProperty({ description: 'Identifies the location inside (or outside) the cell.', required: false })
	pdbx_gene_src_cellular_location: string;
	@ApiProperty({ description: 'A domain or fragment of the molecule.', required: false })
	pdbx_gene_src_fragment: string;
	@ApiProperty({ description: 'Identifies the gene.', required: false })
	pdbx_gene_src_gene: string;
	@ApiProperty({
		description: `NCBI Taxonomy identifier for the gene source organism.

	Reference:
	
	Wheeler DL, Chappey C, Lash AE, Leipe DD, Madden TL, Schuler GD, Tatusova TA, Rapp BA (2000). Database resources of the National Center for Biotechnology Information. Nucleic Acids Res 2000 Jan 1;28(1):10-4
	
	Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Rapp BA, Wheeler DL (2000). GenBank. Nucleic Acids Res 2000 Jan 1;28(1):15-18.`,
		required: false,
	})
	pdbx_gene_src_ncbi_taxonomy_id: string;
	@ApiProperty({ description: 'Organized group of tissues that carries on a specialized function.', required: false })
	pdbx_gene_src_organ: string;
	@ApiProperty({ description: 'Organized structure within cell.', required: false })
	pdbx_gene_src_organelle: string;
	@ApiProperty({ description: 'Scientific name of the organism.', required: false })
	pdbx_gene_src_scientific_name: string;
	@ApiProperty({ description: 'Identifies the variant.', required: false })
	pdbx_gene_src_variant: string;
	@ApiProperty({
		description: `Americal Tissue Culture Collection of the expression system. Where full details of the protein production are available it would be expected that this item would be derived from _entity_src_gen_express.host_org_culture_collection`,
		required: false,
	})
	pdbx_host_org_atcc: string;
	@ApiProperty({
		description:
			'Cell type from which the gene is derived. Where entity.target_id is provided this should be derived from details of the target.',
		required: false,
	})
	pdbx_host_org_cell: string;
	@ApiProperty({
		description: `A specific line of cells used as the expression system. Where full details of the protein production are available it would be expected that this item would be derived from entity_src_gen_express.host_org_cell_line`,
		required: false,
	})
	pdbx_host_org_cell_line: string;
	@ApiProperty({
		description: 'Identifies the location inside (or outside) the cell which expressed the molecule.',
		required: false,
	})
	pdbx_host_org_cellular_location: string;
	@ApiProperty({
		description: `Culture collection of the expression system. Where full details of the protein production are available it would be expected that this item would be derived somehwere, but exactly where is not clear.`,
		required: false,
	})
	pdbx_host_org_culture_collection: string;
	@ApiProperty({ description: 'Specific gene which expressed the molecule.', required: false })
	pdbx_host_org_gene: string;
	@ApiProperty({
		description: `NCBI Taxonomy identifier for the expression system organism.

	Reference:
	
	Wheeler DL, Chappey C, Lash AE, Leipe DD, Madden TL, Schuler GD, Tatusova TA, Rapp BA (2000). Database resources of the National Center for Biotechnology Information. Nucleic Acids Res 2000 Jan 1;28(1):10-4
	
	Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Rapp BA, Wheeler DL (2000). GenBank. Nucleic Acids Res 2000 Jan 1;28(1):15-18.`,
		required: false,
	})
	pdbx_host_org_ncbi_taxonomy_id: string;
	@ApiProperty({ description: 'Specific organ which expressed the molecule.', required: false })
	pdbx_host_org_organ: string;
	@ApiProperty({ description: 'Specific organelle which expressed the molecule.', required: false })
	pdbx_host_org_organelle: string;
	@ApiProperty({
		description: `The scientific name of the organism that served as host for the production of the entity. Where full details of the protein production are available it would be expected that this item would be derived from _entity_src_gen_express.host_org_scientific_name or via _entity_src_gen_express.host_org_tax_id`,
		required: false,
	})
	pdbx_host_org_scientific_name: string;
	@ApiProperty({ description: 'The strain of the organism in which the entity was expressed.', required: false })
	pdbx_host_org_strain: string;
	@ApiProperty({
		description: `The specific tissue which expressed the molecule. Where full details of the protein production are available it would be expected that this item would be derived from _entity_src_gen_express.host_org_tissue`,
		required: false,
	})
	pdbx_host_org_tissue: string;
	@ApiProperty({ description: 'The fraction of the tissue which expressed the molecule.', required: false })
	pdbx_host_org_tissue_fraction: string;
	@ApiProperty({
		description: `Variant of the organism used as the expression system. Where full details of the protein production are available it would be expected that this item be derived from entity_src_gen_express.host_org_variant or via _entity_src_gen_express.host_org_tax_id`,
		required: false,
	})
	pdbx_host_org_variant: string;
	@ApiProperty({
		description: `Identifies the vector used. Where full details of the protein production are available it would be expected that this item would be derived from _entity_src_gen_clone.vector_name.`,
		required: false,
	})
	pdbx_host_org_vector: string;
	@ApiProperty({
		description: `Identifies the type of vector used (plasmid, virus, or cosmid). Where full details of the protein production are available it would be expected that this item would be derived from _entity_src_gen_express.vector_type.`,
		required: false,
	})
	pdbx_host_org_vector_type: string;
	@ApiProperty({
		description: 'This data item povides additional information about the sequence type.',
		required: false,
	})
	pdbx_seq_type: string;
	@ApiProperty({ description: 'This data item is an ordinal identifier for entity_src_gen data records.' })
	pdbx_src_id: number;
	@ApiProperty({
		description: `A description of special aspects of the plasmid that produced the entity in the host organism. Where full details of the protein production are available it would be expected that this item would be derived from _pdbx_construct.details of the construct pointed to from _entity_src_gen_express.plasmid_id.`,
		required: false,
	})
	plasmid_details: string;
	@ApiProperty({
		description: `The name of the plasmid that produced the entity in the host organism. Where full details of the protein production are available it would be expected that this item would be derived from _pdbx_construct.name of the construct pointed to from _entity_src_gen_express.plasmid_id.`,
		required: false,
	})
	plasmid_name: string;
}

export class EntitySrcNat {
	@ApiProperty({
		description: 'The common name of the organism from which the entity was isolated.',
		required: false,
	})
	common_name: string;
	@ApiProperty({
		description: 'A description of special aspects of the organism from which the entity was isolated.',
		required: false,
	})
	details: string;
	@ApiProperty({ description: 'The genus of the organism from which the entity was isolated.', required: false })
	genus: string;
	@ApiProperty({
		description: 'This data item identifies cases in which an alternative source modeled.',
		required: false,
	})
	pdbx_alt_source_flag: string;
	@ApiProperty({ description: 'Americal Tissue Culture Collection number.', required: false })
	pdbx_atcc: string;
	@ApiProperty({
		description: `The beginning polymer sequence position for the polymer section corresponding to this source.

	A reference to the sequence position in the entity_poly category.`,
		required: false,
	})
	pdbx_beg_seq_num: number;
	@ApiProperty({ description: 'A particular cell type.', required: false })
	pdbx_cell: string;
	@ApiProperty({ description: 'The specific line of cells.', required: false })
	pdbx_cell_line: string;
	@ApiProperty({ description: 'Identifies the location inside (or outside) the cell.', required: false })
	pdbx_cellular_location: string;
	@ApiProperty({
		description: `The ending polymer sequence position for the polymer section corresponding to this source.

	A reference to the sequence position in the entity_poly category.`,
		required: false,
	})
	pdbx_end_seq_num: number;
	@ApiProperty({ description: 'A domain or fragment of the molecule.', required: false })
	pdbx_fragment: string;
	@ApiProperty({
		description: `NCBI Taxonomy identifier for the source organism.

	Reference:
	
	Wheeler DL, Chappey C, Lash AE, Leipe DD, Madden TL, Schuler GD, Tatusova TA, Rapp BA (2000). Database resources of the National Center for Biotechnology Information. Nucleic Acids Res 2000 Jan 1;28(1):10-4
	
	Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Rapp BA, Wheeler DL (2000). GenBank. Nucleic Acids Res 2000 Jan 1;28(1):15-18.`,
		required: false,
	})
	pdbx_ncbi_taxonomy_id: string;
	@ApiProperty({ description: 'Organized group of tissues that carries on a specialized function.', required: false })
	pdbx_organ: string;
	@ApiProperty({ description: 'Organized structure within cell.', required: false })
	pdbx_organelle: string;
	@ApiProperty({ description: 'Scientific name of the organism of the natural source.', required: false })
	pdbx_organism_scientific: string;
	@ApiProperty({ description: 'Details about the plasmid.', required: false })
	pdbx_plasmid_details: string;
	@ApiProperty({ description: 'The plasmid containing the gene.', required: false })
	pdbx_plasmid_name: string;
	@ApiProperty({ description: 'Identifies the secretion from which the molecule was isolated.', required: false })
	pdbx_secretion: string;
	@ApiProperty({ description: 'This data item is an ordinal identifier for entity_src_nat data records.' })
	pdbx_src_id: number;
	@ApiProperty({ description: 'Identifies the variant.', required: false })
	pdbx_variant: string;
	@ApiProperty({ description: 'The species of the organism from which the entity was isolated.', required: false })
	species: string;
	@ApiProperty({ description: 'The strain of the organism from which the entity was isolated.', required: false })
	strain: string;
	@ApiProperty({ description: 'The tissue of the organism from which the entity was isolated.', required: false })
	tissue: string;
	@ApiProperty({
		description: 'The subcellular fraction of the tissue of the organism from which the entity was isolated.',
		required: false,
	})
	tissue_fraction: string;
}

export class PdbxEntitySrcSyn {
	@ApiProperty({
		description: 'A description of special aspects of the source for the synthetic entity.',
		required: false,
	})
	details: string;
	@ApiProperty({
		description: `NCBI Taxonomy identifier of the organism from which the sequence of the synthetic entity was derived.

	Reference:
	
	Wheeler DL, Chappey C, Lash AE, Leipe DD, Madden TL, Schuler GD, Tatusova TA, Rapp BA (2000). Database resources of the National Center for Biotechnology Information. Nucleic Acids Res 2000 Jan 1;28(1):10-4
	
	Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Rapp BA, Wheeler DL (2000). GenBank. Nucleic Acids Res 2000 Jan 1;28(1):15-18.`,
		required: false,
	})
	ncbi_taxonomy_id: string;
	@ApiProperty({
		description: 'The common name of the organism from which the sequence of the synthetic entity was derived.',
		required: false,
	})
	organism_common_name: string;
	@ApiProperty({
		description: 'The scientific name of the organism from which the sequence of the synthetic entity was derived.',
		required: false,
	})
	organism_scientific: string;
	@ApiProperty({
		description: 'This data item identifies cases in which an alternative source modeled.',
		required: false,
	})
	pdbx_alt_source_flag: string;
	@ApiProperty({
		description: `The beginning polymer sequence position for the polymer section corresponding to this source.

	A reference to the sequence position in the entity_poly category.`,
		required: false,
	})
	pdbx_beg_seq_num: number;
	@ApiProperty({
		description: `The ending polymer sequence position for the polymer section corresponding to this source.

	A reference to the sequence position in the entity_poly category.`,
		required: false,
	})
	pdbx_end_seq_num: number;
	@ApiProperty({ description: 'This data item is an ordinal identifier for pdbx_entity_src_syn data records.' })
	pdbx_src_id: number;
}

export class RcsbEntityHostOrganismTaxonomyLineage {
	@ApiProperty({
		description: 'Members of the NCBI Taxonomy lineage as parent taxonomy lineage depth (1-N)',
		required: false,
	})
	depth: number;

	@ApiProperty({ description: 'Members of the NCBI Taxonomy lineage as parent taxonomy idcodes.', required: false })
	id: string;

	@ApiProperty({ description: 'Members of the NCBI Taxonomy lineage as parent taxonomy names.', required: false })
	name: string;
}

export class RcsbEntitySourceOrganismTaxonomyLineage {
	@ApiProperty({
		description: 'Members of the NCBI Taxonomy lineage as parent taxonomy lineage depth (1-N)',
		required: false,
	})
	depth: number;

	@ApiProperty({ description: 'Members of the NCBI Taxonomy lineage as parent taxonomy idcodes.', required: false })
	id: string;

	@ApiProperty({ description: 'Memebers of the NCBI Taxonomy lineage as parent taxonomy names.', required: false })
	name: string;
}

export class RcsbEntitySourceOrganismRcsbGeneName {
	@ApiProperty({
		description: 'A code indicating the provenance of the source organism details for the entity',
		required: false,
	})
	provenance_source: string;

	@ApiProperty({ description: 'Gene name.', required: false })
	value: string;
}

export class RcsbEntityHostOrganism {
	@ApiProperty({
		description: `The beginning polymer sequence position for the polymer section corresponding to this host organism.

	A reference to the sequence position in the entity_poly category.`,
		required: false,
	})
	beg_seq_num: number;

	@ApiProperty({ description: 'The common name of the host organism', required: false })
	common_name: number;

	@ApiProperty({
		description: `The ending polymer sequence position for the polymer section corresponding to this host organism.

	A reference to the sequence position in the entity_poly category.`,
		required: false,
	})
	end_seq_num: number;

	@ApiProperty({
		description: `Common names associated with this taxonomy code obtained from NCBI Taxonomy Database.

	These names correspond to the taxonomy identifier assigned by the PDB depositor.
	
	References:
	
	Sayers EW, Barrett T, Benson DA, Bryant SH, Canese K, Chetvernin V, Church DM, DiCuccio M, Edgar R, Federhen S, Feolo M, Geer LY, Helmberg W, Kapustin Y, Landsman D, Lipman DJ, Madden TL, Maglott DR, Miller V, Mizrachi I, Ostell J, Pruitt KD, Schuler GD, Sequeira E, Sherry ST, Shumway M, Sirotkin K, Souvorov A, Starchenko G, Tatusova TA, Wagner L, Yaschenko E, Ye J (2009). Database resources of the National Center for Biotechnology Information. Nucleic Acids Res. 2009 Jan;37(Database issue):D5-15. Epub 2008 Oct 21.
	
	Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Sayers EW (2009). GenBank. Nucleic Acids Res. 2009 Jan;37(Database issue):D26-31. Epub 2008 Oct 21.`,
		required: false,
	})
	ncbi_common_names: string[];

	@ApiProperty({
		description: `The parent scientific name in the NCBI taxonomy hierarchy (depth=1) associated with this taxonomy code.

	References:
	
	Sayers EW, Barrett T, Benson DA, Bryant SH, Canese K, Chetvernin V, Church DM, DiCuccio M, Edgar R, Federhen S, Feolo M, Geer LY, Helmberg W, Kapustin Y, Landsman D, Lipman DJ, Madden TL, Maglott DR, Miller V, Mizrachi I, Ostell J, Pruitt KD, Schuler GD, Sequeira E, Sherry ST, Shumway M, Sirotkin K, Souvorov A, Starchenko G, Tatusova TA, Wagner L, Yaschenko E, Ye J (2009). Database resources of the National Center for Biotechnology Information. Nucleic Acids Res. 2009 Jan;37(Database issue):D5-15. Epub 2008 Oct 21.
	
	Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Sayers EW (2009). GenBank. Nucleic Acids Res. 2009 Jan;37(Database issue):D26-31. Epub 2008 Oct 21.`,
		required: false,
	})
	ncbi_parent_scientific_name: string;

	@ApiProperty({
		description: `The scientific name associated with this taxonomy code aggregated by the NCBI Taxonomy Database.

	This name corresponds to the taxonomy identifier assigned by the PDB depositor.
	
	References:
	
	Sayers EW, Barrett T, Benson DA, Bryant SH, Canese K, Chetvernin V, Church DM, DiCuccio M, Edgar R, Federhen S, Feolo M, Geer LY, Helmberg W, Kapustin Y, Landsman D, Lipman DJ, Madden TL, Maglott DR, Miller V, Mizrachi I, Ostell J, Pruitt KD, Schuler GD, Sequeira E, Sherry ST, Shumway M, Sirotkin K, Souvorov A, Starchenko G, Tatusova TA, Wagner L, Yaschenko E, Ye J (2009). Database resources of the National Center for Biotechnology Information. Nucleic Acids Res. 2009 Jan;37(Database issue):D5-15. Epub 2008 Oct 21.
	
	Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Sayers EW (2009). GenBank. Nucleic Acids Res. 2009 Jan;37(Database issue):D26-31. Epub 2008 Oct 21.`,
		required: false,
	})
	ncbi_scientific_name: string;

	@ApiProperty({
		description: `NCBI Taxonomy identifier for the host organism.

	Reference:
	
	Wheeler DL, Chappey C, Lash AE, Leipe DD, Madden TL, Schuler GD, Tatusova TA, Rapp BA (2000). Database resources of the National Center for Biotechnology Information. Nucleic Acids Res 2000 Jan 1;28(1):10-4
	
	Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Rapp BA, Wheeler DL (2000). GenBank. Nucleic Acids Res 2000 Jan 1;28(1):15-18.`,
		required: false,
	})
	ncbi_taxonomy_id: number;

	@ApiProperty({ description: 'An identifier for an entity segment.' })
	pdbx_src_id: string;

	@ApiProperty({ description: 'A code indicating the provenance of the host organism.', required: false })
	provenance_source: string;

	@ApiProperty({ description: 'The scientific name of the host organism', required: false })
	scientific_name: string;

	@ApiProperty({ required: false })
	taxonomy_lineage: RcsbEntityHostOrganismTaxonomyLineage[];
}

export class RcsbEntitySourceOrganism {
	@ApiProperty({
		description: `The beginning polymer sequence position for the polymer section corresponding to this source.

	A reference to the sequence position in the entity_poly category.`,
		required: false,
	})
	beg_seq_num: number;

	@ApiProperty({
		description: `The common name for the source organism assigned by the PDB depositor.`,
		required: false,
	})
	common_name: string;

	@ApiProperty({
		description: `The ending polymer sequence position for the polymer section corresponding to this source.

	A reference to the sequence position in the entity_poly category.`,
		required: false,
	})
	end_seq_num: number;

	@ApiProperty({
		description: `Common names associated with this taxonomy code aggregated by the NCBI Taxonomy Database.

	These name correspond to the taxonomy identifier assigned by the PDB depositor.
	
	References:
	
	Sayers EW, Barrett T, Benson DA, Bryant SH, Canese K, Chetvernin V, Church DM, DiCuccio M, Edgar R, Federhen S, Feolo M, Geer LY, Helmberg W, Kapustin Y, Landsman D, Lipman DJ, Madden TL, Maglott DR, Miller V, Mizrachi I, Ostell J, Pruitt KD, Schuler GD, Sequeira E, Sherry ST, Shumway M, Sirotkin K, Souvorov A, Starchenko G, Tatusova TA, Wagner L, Yaschenko E, Ye J (2009). Database resources of the National Center for Biotechnology Information. Nucleic Acids Res. 2009 Jan;37(Database issue):D5-15. Epub 2008 Oct 21.
	
	Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Sayers EW (2009). GenBank. Nucleic Acids Res. 2009 Jan;37(Database issue):D26-31. Epub 2008 Oct 21.`,
		required: false,
	})
	ncbi_common_names: string[];

	@ApiProperty({
		description: `A parent scientific name in the NCBI taxonomy hierarchy of the source organism assigned by the PDB depositor. For cellular organism this corresponds to a superkingdom (e.g., Archaea, Bacteria, Eukaryota). For viruses this corresponds to a clade (e.g. Adnaviria, Bicaudaviridae, Clavaviridae). For other and unclassified entries this corresponds to the first level of any taxonomic rank below the root level.

	References:
	
	Sayers EW, Barrett T, Benson DA, Bryant SH, Canese K, Chetvernin V, Church DM, DiCuccio M, Edgar R, Federhen S, Feolo M, Geer LY, Helmberg W, Kapustin Y, Landsman D, Lipman DJ, Madden TL, Maglott DR, Miller V, Mizrachi I, Ostell J, Pruitt KD, Schuler GD, Sequeira E, Sherry ST, Shumway M, Sirotkin K, Souvorov A, Starchenko G, Tatusova TA, Wagner L, Yaschenko E, Ye J (2009). Database resources of the National Center for Biotechnology Information. Nucleic Acids Res. 2009 Jan;37(Database issue):D5-15. Epub 2008 Oct 21.
	
	Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Sayers EW (2009). GenBank. Nucleic Acids Res. 2009 Jan;37(Database issue):D26-31. Epub 2008 Oct 21.`,
		required: false,
	})
	ncbi_parent_scientific_name: string;

	@ApiProperty({
		description: `The scientific name associated with this taxonomy code aggregated by the NCBI Taxonomy Database.

	This name corresponds to the taxonomy identifier assigned by the PDB depositor.
	
	References:
	
	Sayers EW, Barrett T, Benson DA, Bryant SH, Canese K, Chetvernin V, Church DM, DiCuccio M, Edgar R, Federhen S, Feolo M, Geer LY, Helmberg W, Kapustin Y, Landsman D, Lipman DJ, Madden TL, Maglott DR, Miller V, Mizrachi I, Ostell J, Pruitt KD, Schuler GD, Sequeira E, Sherry ST, Shumway M, Sirotkin K, Souvorov A, Starchenko G, Tatusova TA, Wagner L, Yaschenko E, Ye J (2009). Database resources of the National Center for Biotechnology Information. Nucleic Acids Res. 2009 Jan;37(Database issue):D5-15. Epub 2008 Oct 21.
	
	Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Sayers EW (2009). GenBank. Nucleic Acids Res. 2009 Jan;37(Database issue):D26-31. Epub 2008 Oct 21.`,
		required: false,
	})
	ncbi_scientific_name: string;

	@ApiProperty({
		description: `NCBI Taxonomy identifier for the gene source organism assigned by the PDB depositor.

	Reference:
	
	Wheeler DL, Chappey C, Lash AE, Leipe DD, Madden TL, Schuler GD, Tatusova TA, Rapp BA (2000). Database resources of the National Center for Biotechnology Information. Nucleic Acids Res 2000 Jan 1;28(1):10-4
	
	Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Rapp BA, Wheeler DL (2000). GenBank. Nucleic Acids Res 2000 Jan 1;28(1):15-18.`,
		required: false,
	})
	ncbi_taxonomy_id: number;

	@ApiProperty({ description: 'An identifier for the entity segment.' })
	pdbx_src_id: string;

	@ApiProperty({
		description: `Reference to the provenance of the source organism details for the entity. Primary data indicates information obtained from the same source as the structural model. UniProt and NCBI are provided as alternate sources of provenance for organism details.`,
		required: false,
	})
	provenance_source: string;

	@ApiProperty({
		description: 'The scientific name of the source organism assigned by the PDB depositor.',
		required: false,
	})
	scientific_name: string;

	@ApiProperty({ description: 'The source type for the entity', required: false })
	source_type: string;

	@ApiProperty({ type: [RcsbEntitySourceOrganismTaxonomyLineage], required: false })
	taxonomy_lineage: RcsbEntitySourceOrganismTaxonomyLineage[];

	@ApiProperty({ type: [RcsbEntitySourceOrganismRcsbGeneName], required: false })
	rcsb_gene_name: RcsbEntitySourceOrganismRcsbGeneName[];
}

export class RcsbPolymerEntityRcsbEcLineage {
	@ApiProperty({
		description: 'Members of the enzyme classification lineage as parent classification hierarchy depth (1-N).',
		required: false,
	})
	depth: number;

	@ApiProperty({
		description: 'Members of the enzyme classification lineage as parent classification codes.',
		required: false,
	})
	id: string;

	@ApiProperty({
		description: 'Members of the enzyme classification lineage as parent classification names.',
		required: false,
	})
	name: string;
}

export class RcsbPolymerEntityRcsbMacromolecularNamesCombined {
	@ApiProperty({ description: 'Combined list of macromolecular names.', required: false })
	name: string;

	@ApiProperty({
		description: `Combined list of macromolecular names associated provenance code.

	ECO (https://github.com/evidenceontology/evidenceontology)`,
		required: false,
	})
	provenance_code: string;

	@ApiProperty({ description: `Combined list of macromolecular names associated name source.`, required: false })
	provenance_source: string;
}

export class RcsbPolymerEntityRcsbEnzymeClassCombined {
	@ApiProperty({ description: 'The enzyme classification hierarchy depth (1-N).', required: false })
	depth: number;

	@ApiProperty({ description: 'Combined list of enzyme class assignments.', required: false })
	ec: string;

	@ApiProperty({ description: 'Combined list of enzyme class associated provenance sources.', required: false })
	provenance_source: string;
}

export class RcsbPolymerEntityRcsbPolymerNameCombined {
	@ApiProperty({
		description: 'Protein name annotated by the UniProtKB or macromolecular name assigned by the PDB',
		required: false,
	})
	name: string[];

	@ApiProperty({})
	provenance_code: string;
}

export class RcsbPolymerEntity {
	@ApiProperty({ description: 'A description of special aspects of the entity.', required: false })
	details: string;

	@ApiProperty({ description: 'Formula mass (KDa) of the entity.', required: false })
	formula_weight: number;

	@ApiProperty({ description: 'A description of the polymer entity.', required: false })
	pdbx_description: string;

	@ApiProperty({ description: 'Enzyme Commission (EC) number(s)', required: false })
	pdbx_ec: string;

	@ApiProperty({ description: 'Polymer entity fragment description(s).', required: false })
	pdbx_fragment: string;

	@ApiProperty({ description: 'Details about any polymer entity mutation(s).', required: false })
	pdbx_mutation: string;

	@ApiProperty({ description: 'The number of molecules of the entity in the entry.', required: false })
	pdbx_number_of_molecules: string;

	@ApiProperty({ description: 'A code indicating the entity has multiple biological sources.', required: false })
	rcsb_multiple_source_flag: string;

	@ApiProperty({
		description: `The number of biological sources for the polymer entity. Multiple source contributions may come from the same organism (taxonomy).`,
		required: false,
	})
	rcsb_source_part_count: number;

	@ApiProperty({
		description:
			'The number of distinct source taxonomies for the polymer entity. Commonly used to identify chimeric polymers.',
		required: false,
	})
	rcsb_source_taxonomy_count: number;

	@ApiProperty({
		description: `The method by which the sample for the polymer entity was produced. Entities isolated directly from natural sources (tissues, soil samples etc.) are expected to have further information in the ENTITY_SRC_NAT category. Entities isolated from genetically manipulated sources are expected to have further information in the ENTITY_SRC_GEN category.`,
		required: false,
	})
	src_method: string;

	@ApiProperty({ type: [RcsbPolymerEntityRcsbEcLineage], required: false })
	rcsb_ec_lineage: RcsbPolymerEntityRcsbEcLineage[];

	@ApiProperty({ type: [RcsbPolymerEntityRcsbMacromolecularNamesCombined], required: false })
	rcsb_macromolecular_names_combined: RcsbPolymerEntityRcsbMacromolecularNamesCombined[];

	@ApiProperty({ type: [RcsbPolymerEntityRcsbEnzymeClassCombined], required: false })
	rcsb_enzyme_class_combined: RcsbPolymerEntityRcsbEnzymeClassCombined[];

	@ApiProperty({ type: RcsbPolymerEntityRcsbPolymerNameCombined, required: false })
	rcsb_polymer_name_combined: RcsbPolymerEntityRcsbPolymerNameCombined;
}

export class RcsbPolymerEntityAlignAlignedRegions {
	@ApiProperty({
		description: `	
	integer <int32>
	An identifier for the monomer in the entity sequence at which this segment of the alignment begins.`,
		required: false,
	})
	entity_beg_seq_id: number;

	@ApiProperty({ description: 'An length of the this segment of the alignment.', required: false })
	length: number;

	@ApiProperty({
		description:
			'An identifier for the monomer in the reference sequence at which this segment of the alignment begins.',
		required: false,
	})
	ref_beg_seq_id: number;
}

export class RcsbPolymerEntityAlign {
	@ApiProperty({
		description: 'Code identifying the individual, organization or program that assigned the reference sequence.',
		required: false,
	})
	provenance_source: string;

	@ApiProperty({ description: 'Reference sequence accession code.', required: false })
	reference_database_accession: string;

	@ApiProperty({ description: 'Reference sequence isoform identifier.', required: false })
	reference_database_isoform: string;

	@ApiProperty({ description: 'Reference sequence database name.', required: false })
	reference_database_name: string;

	@ApiProperty({ type: [RcsbPolymerEntityAlignAlignedRegions], required: false })
	aligned_regions: RcsbPolymerEntityAlignAlignedRegions[];
}

export class RcsbPolymerEntityAnnotationAnnotationLineage {
	@ApiProperty({ description: 'Members of the annotation lineage as parent lineage depth (1-N)', required: false })
	depth: number;

	@ApiProperty({ description: 'Members of the annotation lineage as parent class identifiers.', required: false })
	id: string;

	@ApiProperty({ description: 'Members of the annotation lineage as parent class names.', required: false })
	name: string;
}

export class RcsbPolymerEntityAnnotationAdditionalProperties {
	@ApiProperty({ description: 'The additional property name.', required: false })
	name: string;

	@ApiProperty({ description: 'The value(s) of the additional property.', required: false })
	values: string[];
}

export class RcsbPolymerEntityAnnotation {
	@ApiProperty({ description: 'An identifier for the annotation.', required: false })
	annotation_id: string;

	@ApiProperty({ description: 'Identifies the version of the annotation assignment.', required: false })
	assignment_version: string;

	@ApiProperty({ description: 'A description for the annotation.', required: false })
	description: string;

	@ApiProperty({ description: 'A name for the annotation.', required: false })
	name: string;

	@ApiProperty({
		description: 'Code identifying the individual, organization or program that assigned the annotation.',
		required: false,
	})
	provenance_source: string;

	@ApiProperty({ description: 'A type or category of the annotation.', required: false })
	type: string;

	@ApiProperty({ type: [RcsbPolymerEntityAnnotationAnnotationLineage], required: false })
	annotation_lineage: RcsbPolymerEntityAnnotationAnnotationLineage[];

	@ApiProperty({ type: [RcsbPolymerEntityAnnotationAdditionalProperties], required: false })
	additional_properties: RcsbPolymerEntityAnnotationAdditionalProperties[];
}

export class RcsbPolymerEntityContainerIdentifiersReferenceSequenceIdentifiers {
	@ApiProperty({ description: 'Reference database accession code', required: false })
	database_accession: string;

	@ApiProperty({ description: 'Reference database identifier for the sequence isoform', required: false })
	database_isoform: string;

	@ApiProperty({ description: 'Reference database name', required: false })
	database_name: string;

	@ApiProperty({ description: 'Source of the reference database assignment', required: false })
	provenance_source: string;
}

export class RcsbPolymerEntityContainerIdentifiers {
	@ApiProperty({
		description: 'Instance identifiers corresponding to copies of the entity in this container.',
		required: false,
	})
	asym_ids: string[];

	@ApiProperty({
		description: 'Author instance identifiers corresponding to copies of the entity in this container.',
		required: false,
	})
	auth_asym_ids: string[];

	@ApiProperty({
		description: 'Unique list of monomer chemical component identifiers in the polymer entity in this container.',
		required: false,
	})
	chem_comp_monomers: string[];

	@ApiProperty({
		description:
			'Unique list of non-standard monomer chemical component identifiers in the polymer entity in this container.',
		required: false,
	})
	chem_comp_nstd_monomers: string[];

	@ApiProperty({
		description: 'The chemical reference definition identifier for the entity in this container.',
		required: false,
	})
	chem_ref_def_id: string;

	@ApiProperty({ description: 'Entity identifier for the container.' })
	entity_id: string;

	@ApiProperty({ description: 'Entry identifier for the container.' })
	entry_id: string;

	@ApiProperty({ description: 'The BIRD identifier for the entity in this container.', required: false })
	prd_id: string;

	@ApiProperty({
		description: `A unique identifier for each object in this entity container formed by an underscore separated concatenation of entry and entity identifiers.`,
		required: false,
	})
	rcsb_id: string;

	@ApiProperty({ type: [RcsbPolymerEntityContainerIdentifiersReferenceSequenceIdentifiers], required: false })
	reference_sequence_identifiers: RcsbPolymerEntityContainerIdentifiersReferenceSequenceIdentifiers[];

	@ApiProperty({})
	uniprot_ids: string[];
}

export class RcsbPolymerEntityFeatureFeaturePositions {
	@ApiProperty({
		description: 'An identifier for the leading monomer corresponding to the feature assignment.',
		required: false,
	})
	beg_comp_id: string;

	@ApiProperty({
		description: 'An identifier for the monomer at which this segment of the feature begins.',
	})
	beg_seq_id: number;

	@ApiProperty({
		description: 'An identifier for the monomer at which this segment of the feature ends.',
		required: false,
	})
	end_seq_id: number;

	@ApiProperty({ description: 'The value for the feature over this monomer segment.', required: false })
	value: number;

	@ApiProperty({ description: 'The value(s) for the feature over this monomer segment.', required: false })
	values: number[];
}

export class RcsbPolymerEntityFeatureAdditionalProperties {
	@ApiProperty({ description: 'The additional property name.', required: false })
	name: string;

	@ApiProperty({ description: 'The value(s) of the additional property', required: false })
	values: string[];
}

export class RcsbPolymerEntityFeature {
	@ApiProperty({ description: 'Identifies the version of the feature assignment.', required: false })
	assignment_version: string;

	@ApiProperty({ description: 'A description for the feature.', required: false })
	description: string;

	@ApiProperty({ description: 'An identifier for the feature.', required: false })
	feature_id: string;

	@ApiProperty({ description: 'A name for the feature.', required: false })
	name: string;

	@ApiProperty({
		description: 'Code identifying the individual, organization or program that assigned the feature.',
		required: false,
	})
	provenance_source: string;

	@ApiProperty({ description: 'Code residue coordinate system for the assigned feature.', required: false })
	reference_scheme: string;

	@ApiProperty({ description: 'A type or category of the feature.', required: false })
	type: string;

	@ApiProperty({ type: [RcsbPolymerEntityFeatureFeaturePositions], required: false })
	feature_positions: RcsbPolymerEntityFeatureFeaturePositions[];

	@ApiProperty({ type: [RcsbPolymerEntityFeatureAdditionalProperties], required: false })
	additional_properties: RcsbPolymerEntityFeatureAdditionalProperties[];
}

export class RcsbPolymerEntityFeatureSummary {
	@ApiProperty({ description: 'The feature count.', required: false })
	count: number;

	@ApiProperty({
		description: `The fractional feature coverage relative to the full entity sequence. For instance, the fraction of features such as mutations, artifacts or modified monomers relative to the length of the entity sequence.`,
		required: false,
	})
	coverage: number;

	@ApiProperty({ description: 'The maximum feature length.', required: false })
	maximum_length: number;

	@ApiProperty({ description: 'The maximum feature value.', required: false })
	maximum_value: number;

	@ApiProperty({ description: 'The minimum feature length.', required: false })
	minimum_length: number;

	@ApiProperty({ description: 'The minimum feature value.', required: false })
	minimum_value: number;

	@ApiProperty({ description: 'Type or category of the feature.', required: false })
	type: string;
}

export class RcsbPolymerEntityKeywords {
	@ApiProperty({ description: 'Keywords describing this polymer entity.', required: false })
	text: string;
}

export class RcsbPolymerEntityNameCom {
	@ApiProperty({ description: 'A common name for the polymer entity.' })
	name: string;
}

export class RcsbPolymerEntityNameSys {
	@ApiProperty({ description: 'The systematic name for the polymer entity.' })
	name: string;

	@ApiProperty({
		description: 'The system used to generate the systematic name of the polymer entity.',
		required: false,
	})
	system: string;
}

export class RcsbRelatedTargetReferencesAlignedTarget {
	@ApiProperty({
		description: 'The position of the monomer in the entity sequence at which the alignment begins.',
		required: false,
	})
	entity_beg_seq_id: number;

	@ApiProperty({ description: 'The length of the alignment.', required: false })
	length: number;

	@ApiProperty({
		description: 'The position of the monomer in the target sequence at which the alignment begins.',
		required: false,
	})
	target_beg_seq_id: number;
}

export class RcsbRelatedTargetReferences {
	@ApiProperty({ description: 'The related target data resource name.', required: false })
	related_resource_name: string;

	@ApiProperty({ description: 'The version of the target data resource.', required: false })
	related_resource_version: string;

	@ApiProperty({
		description: 'An identifier for the target sequence in the related data resource.',
		required: false,
	})
	related_target_id: string;

	@ApiProperty({
		description: `NCBI Taxonomy identifier for the target organism.

	Reference:
	
	Wheeler DL, Chappey C, Lash AE, Leipe DD, Madden TL, Schuler GD, Tatusova TA, Rapp BA (2000). Database resources of the National Center for Biotechnology Information. Nucleic Acids Res 2000 Jan 1;28(1):10-4
	
	Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Rapp BA, Wheeler DL (2000). GenBank. Nucleic Acids Res 2000 Jan 1;28(1):15-18.`,
		required: false,
	})
	target_taxonomy_id: number;

	@ApiProperty({ type: [RcsbRelatedTargetReferencesAlignedTarget], required: false })
	aligned_target: RcsbRelatedTargetReferencesAlignedTarget[];
}

export class RcsbTargetCofactors {
	@ApiProperty({ description: 'The value measured or determined by the assay.', required: false })
	binding_assay_value: number;

	@ApiProperty({ description: 'The type of measurement or value determined by the assay.', required: false })
	binding_assay_value_type: string;

	@ApiProperty({
		description: `Standard IUPAC International Chemical Identifier (InChI) descriptor key for the cofactor.

	InChI, the IUPAC International Chemical Identifier, by Stephen R Heller, Alan McNaught, Igor Pletnev, Stephen Stein and Dmitrii Tchekhovskoi, Journal of Cheminformatics, 2015, 7:23`,
		required: false,
	})
	cofactor_InChIKey: string;

	@ApiProperty({
		description: `Simplified molecular-input line-entry system (SMILES) descriptor for the cofactor.

	Weininger D (February 1988). "SMILES, a chemical language and information system. 1. Introduction to methodology and encoding rules". Journal of Chemical Information and Modeling. 28 (1): 31-6.
	
	Weininger D, Weininger A, Weininger JL (May 1989). "SMILES. 2. Algorithm for generation of unique SMILES notation", Journal of Chemical Information and Modeling. 29 (2): 97-101.`,
		required: false,
	})
	cofactor_SMILES: string;

	@ApiProperty({ description: 'The chemical component definition identifier for the cofactor.', required: false })
	cofactor_chem_comp_id: string;

	@ApiProperty({ description: 'The cofactor description.', required: false })
	cofactor_description: string;

	@ApiProperty({ description: 'The cofactor name.', required: false })
	cofactor_name: string;

	@ApiProperty({ description: 'The BIRD definition identifier for the cofactor.', required: false })
	cofactor_prd_id: string;

	@ApiProperty({ description: 'Identifier for the cofactor assigned by the resource.', required: false })
	cofactor_resource_id: string;

	@ApiProperty({
		description:
			'Mechanism of action describes the biochemical interaction through which the cofactor produces a pharmacological effect.',
		required: false,
	})
	mechanism_of_action: string;

	@ApiProperty({
		description: 'A flag to indicate the cofactor is a structural neighbor of this entity.',
		required: false,
	})
	neighbor_flag: string;

	@ApiProperty({ description: 'Patent numbers reporting the pharmacology or activity data.', required: false })
	patent_nos: string[];

	@ApiProperty({
		description: 'PubMed identifiers for literature supporting the pharmacology or activity data.',
		required: false,
	})
	pubmed_ids: number[];

	@ApiProperty({ description: 'Resource providing target and cofactor data.', required: false })
	resource_name: string;

	@ApiProperty({ description: 'Version of the information distributed by the data resource.', required: false })
	resource_version: string;

	@ApiProperty({ description: 'Identifier for the target assigned by the resource.', required: false })
	target_resource_id: string;
}

export class RcsbPolymerEntityGroupMembershipAlignedRegions {
	@ApiProperty({
		description: `An identifier for the monomer in the entity sequence at which this segment of the alignment begins.`,
		required: false,
	})
	entity_beg_seq_id: number;

	@ApiProperty({ description: 'An length of the this segment of the alignment.', required: false })
	length: number;

	@ApiProperty({
		description: `An identifier for the monomer in the reference sequence at which this segment of the alignment begins.`,
		required: false,
	})
	ref_beg_seq_id: number;
}

export class RcsbPolymerEntityGroupMembership {
	@ApiProperty({ description: 'A unique identifier for a group of entities' })
	group_id: string;

	@ApiProperty({ description: 'Method used to establish group membership' })
	aggregation_method: string;

	@ApiProperty({ description: 'Degree of similarity expressed as a floating-point number', required: false })
	similarity_cutoff: string;

	@ApiProperty({ type: [RcsbPolymerEntityGroupMembershipAlignedRegions], required: false })
	aligned_regions: RcsbPolymerEntityGroupMembershipAlignedRegions[];
}

export class RcsbGenomicLineage {
	@ApiProperty({
		description: `Automatically assigned ID that uniquely identifies taxonomy, chromosome or gene in the Genome Location Browser.`,
		required: false,
	})
	id: string;

	@ApiProperty({ description: 'A human-readable term name.', required: false })
	name: string;

	@ApiProperty({ description: 'Classification hierarchy depth.', required: false })
	depth: string;
}

export class RcsbMembraneLineage {
	@ApiProperty({
		description: 'Automatically assigned ID for membrane classification term in the Membrane Protein Browser.',
		required: false,
	})
	id: string;

	@ApiProperty({ description: 'Membrane protein classification term.', required: false })
	name: string;

	@ApiProperty({ description: 'Hierarchy depth.', required: false })
	depth: number;
}

export class RcsbClusterFlexibility {
	@ApiProperty({ description: 'Link to the associated PDBFlex database entry.', required: false })
	link: string;

	@ApiProperty({
		description: 'Structural flexibility in the cluster (95% sequence identity) where a given entity belongs.',
		required: false,
	})
	label: string;

	@ApiProperty({
		description: `Average RMSD refer to average pairwise RMSD (Root Mean Square Deviation of C-alpha atoms) between structures in the cluster (95% sequence identity) where a given entity belongs.`,
		required: false,
	})
	avg_rmsd: string;

	@ApiProperty({
		description: `Maximal RMSD refer to maximal pairwise RMSD (Root Mean Square Deviation of C-alpha atoms) between structures in the cluster (95% sequence identity) where a given entity belongs.`,
		required: false,
	})
	max_rmsd: string;

	@ApiProperty({ description: 'Value: "PDBFlex"', required: false })
	provenance_code: string;
}

export class RcsbLatestRevision {
	@ApiProperty({ description: 'The major version number of the latest revision.', required: false })
	major_revision: number;

	@ApiProperty({ description: 'The minor version number of the latest revision.', required: false })
	minor_revision: number;

	@ApiProperty({ description: 'The release date of the latest revision item.', required: false })
	revision_date: string;
}

export class PdbxEntityNonpoly {
	@ApiProperty({
		description: 'This data item is a pointer to _chem_comp.id in the CHEM_COMP category.',
		required: false,
	})
	comp_id: string;

	@ApiProperty({ description: 'This data item is a pointer to _entity.id in the ENTITY category.' })
	entity_id: string;

	@ApiProperty({ description: 'A name for the non-polymer entity', required: false })
	name: string;

	@ApiProperty({ description: 'For non-polymer BIRD molecules the BIRD identifier for the entity.', required: false })
	rcsb_prd_id: string;
}

export class RcsbNonpolymerEntity {
	@ApiProperty({ description: 'A description of special aspects of the entity.', required: false })
	details: string;

	@ApiProperty({ description: 'Formula mass (KDa) of the entity.', required: false })
	formula_weight: string;

	@ApiProperty({ description: 'A description of the nonpolymer entity.', required: false })
	pdbx_description: string;

	@ApiProperty({
		description: `The number of molecules of the nonpolymer entity in the entry.`,
		required: false,
	})
	pdbx_number_of_molecules: number;
}

export class RcsbNonpolymerEntityAnnotationAnnotationLineage {
	@ApiProperty({ description: 'Members of the annotation lineage as parent lineage depth (1-N)', required: false })
	depth: number;

	@ApiProperty({ description: 'Members of the annotation lineage as parent class identifiers.', required: false })
	id: string;

	@ApiProperty({ description: 'Members of the annotation lineage as parent class names.', required: false })
	name: string;
}

export class RcsbNonpolymerEntityAnnotation {
	@ApiProperty({ description: 'An identifier for the annotation.', required: false })
	annotation_id: string;

	@ApiProperty({ description: 'Identifies the version of the annotation assignment.', required: false })
	assignment_version: string;

	@ApiProperty({ description: 'Non-polymer(ligand) chemical component identifier for the entity.', required: false })
	comp_id: string;

	@ApiProperty({ description: 'A description for the annotation.', required: false })
	description: string;

	@ApiProperty({ description: 'A name for the annotation.', required: false })
	name: string;

	@ApiProperty({
		description: 'Code identifying the individual, organization or program that assigned the annotation.',
		required: false,
	})
	provenance_source: string;

	@ApiProperty({
		description: `Value: "SUBJECT_OF_INVESTIGATION"
	A type or category of the annotation.`,
		required: false,
	})
	type: string;

	@ApiProperty({ type: [RcsbNonpolymerEntityAnnotationAnnotationLineage], required: false })
	annotation_lineage: RcsbNonpolymerEntityAnnotationAnnotationLineage[];
}

export class RcsbNonpolymerEntityContainerIdentifiers {
	@ApiProperty({
		description: 'Instance identifiers corresponding to copies of the entity in this container.',
		required: false,
	})
	asym_ids: string;

	@ApiProperty({
		description: 'Author instance identifiers corresponding to copies of the entity in this container.',
		required: false,
	})
	auth_asym_ids: string[];

	@ApiProperty({
		description: 'The chemical reference definition identifier for the entity in this container.',
		required: false,
	})
	chem_ref_def_id: string;

	@ApiProperty({ description: 'Entity identifier for the container.' })
	entity_id: string;

	@ApiProperty({ description: 'Entry identifier for the container.' })
	entry_id: string;

	@ApiProperty({
		description: 'Non-polymer(ligand) chemical component identifier for the entity in this container.',
		required: false,
	})
	nonpolymer_comp_id: string;

	@ApiProperty({ description: 'The BIRD identifier for the entity in this container.', required: false })
	prd_id: string;

	@ApiProperty({
		description:
			'A unique identifier for each object in this entity container formed by an underscore separated concatenation of entry and entity identifiers.',
		required: false,
	})
	rcsb_id: string;

	@ApiProperty({
		description: `Items Enum: "PDB" "RCSB"
	Source of the reference database assignment`,
		required: false,
	})
	reference_chemical_identifiers_provenance_source: string[];

	@ApiProperty({ description: 'Reference resource accession code', required: false })
	reference_chemical_identifiers_resource_accession: string[];

	@ApiProperty({
		description: `Items Enum: "ChEBI" "ChEMBL" "DrugBank" "PubChem"
	Reference resource name`,
		required: false,
	})
	reference_chemical_identifiers_resource_name: string[];
}

export class RcsbNonpolymerEntityFeatureAdditionalProperties {
	@ApiProperty({ description: 'The additional property name.', required: false })
	name: string;
	@ApiProperty({ description: 'The value(s) of the additional property.', required: false })
	values: string[];
}

export class RcsbNonpolymerEntityFeature {
	@ApiProperty({ description: 'Identifies the version of the feature assignment.', required: false })
	assignment_version: string;

	@ApiProperty({ description: 'Non-polymer(ligand) chemical component identifier for the entity.', required: false })
	comp_id: string;

	@ApiProperty({ description: 'A description for the feature.', required: false })
	description: string;

	@ApiProperty({ description: 'An identifier for the feature.', required: false })
	feature_id: string;

	@ApiProperty({ description: 'A name for the feature.', required: false })
	name: string;

	@ApiProperty({
		description: 'Code identifying the individual, organization or program that assigned the feature.',
		required: false,
	})
	provenance_source: string;

	@ApiProperty({
		description: `Value: "SUBJECT_OF_INVESTIGATION"
	A type or category of the feature.`,
		required: false,
	})
	type: string;

	@ApiProperty({ description: 'The feature value.', required: false })
	value: number;

	@ApiProperty({ type: [RcsbNonpolymerEntityFeatureAdditionalProperties], required: false })
	additional_properties: RcsbNonpolymerEntityFeatureAdditionalProperties[];
}

export class RcsbNonpolymerEntityFeatureSummary {
	@ApiProperty({ description: 'Non-polymer(ligand) chemical component identifier for the entity.', required: false })
	comp_id: string;

	@ApiProperty({ description: 'The feature count.', required: false })
	count: string;

	@ApiProperty({ description: 'The maximum feature length.', required: false })
	maximum_length: string;

	@ApiProperty({ description: 'The maximum feature value.', required: false })
	maximum_value: string;

	@ApiProperty({ description: 'The minimum feature length.', required: false })
	minimum_length: string;

	@ApiProperty({ description: 'The minimum feature value.', required: false })
	minimum_value: string;

	@ApiProperty({
		description: `Value: "SUBJECT_OF_INVESTIGATION"
	Type or category of the feature.`,
		required: false,
	})
	type: string;
}

export class RcsbNonpolymerEntityKeywords {
	@ApiProperty({ description: 'Keywords describing this non-polymer entity.', required: false })
	text: string;
}

export class RcsbNonpolymerEntityNameCom {
	@ApiProperty({ description: 'A common name for the nonpolymer entity.' })
	name: string;
}

export class RcsbUniprotContainerIdentifiersReferenceSequenceIdentifiers {
	@ApiProperty({ description: 'Reference database accession code', required: false })
	database_accession: string;

	@ApiProperty({ description: 'Reference database identifier for the sequence isoform', required: false })
	database_isoform: string;

	@ApiProperty({ description: 'Reference database name', required: false })
	database_name: string;

	@ApiProperty({ description: 'Source of the reference database assignment', required: false })
	provenance_source: string;
}

export class RcsbUniprotContainerIdentifiers {
	@ApiProperty({ description: 'Primary accession number of a given UniProtKB entry.', required: false })
	uniprot_id: string;

	@ApiProperty({ type: RcsbUniprotContainerIdentifiersReferenceSequenceIdentifiers, required: false })
	reference_sequence_identifiers: RcsbUniprotContainerIdentifiersReferenceSequenceIdentifiers[];
}

export class RcsbUniprotKeyword {
	@ApiProperty({ description: 'A unique keyword identifier.', required: false })
	id: string;
	@ApiProperty({ description: 'Human-readable keyword term.', required: false })
	value: string;
}

export class RcsbUniprotProteinFunction {
	@ApiProperty({ description: 'General function(s) of a protein.', required: false })
	details: string;

	@ApiProperty({ description: 'Historical record of the data attribute.', required: false })
	provenance_code: string;
}

export class RcsbUniprotProteinName {
	@ApiProperty({ description: 'Name that allows to unambiguously identify a protein.' })
	value: string;

	@ApiProperty({ description: 'Historical record of the data attribute.' })
	provenance_code: string;
}

export class GeneName {
	@ApiProperty({ required: false })
	type: string;
	@ApiProperty({ required: false })
	value: string;
}

export class RcsbUniprotProteinGene {
	@ApiProperty({ type: [GeneName], required: false })
	name: GeneName[];
}

export class RcsbUniprotProteinSourceOrganism {
	@ApiProperty({ description: 'The scientific name of the organism in which a protein occurs.' })
	scientific_name: string;

	@ApiProperty({
		description: 'NCBI Taxonomy identifier for the organism in which a protein occurs.',
		required: false,
	})
	taxonomy_id: number;

	@ApiProperty({ description: 'Historical record of the data attribute.' })
	provenance_code: string;
}

export class RcsbUniprotProteinEc {
	@ApiProperty({ required: false })
	number: string;

	@ApiProperty({ description: 'Historical record of the data attribute.', required: false })
	provenance_code: string;
}

export class RcsbUniprotProtein {
	@ApiProperty({ description: 'Protein sequence data for canonical protein sequence.', required: false })
	sequence: string;

	@ApiProperty({ type: [RcsbUniprotKeyword], required: false })
	name: RcsbUniprotProteinName;

	@ApiProperty({ type: RcsbUniprotProteinFunction, required: false })
	function: RcsbUniprotProteinFunction;

	@ApiProperty({
		type: [RcsbUniprotProteinGene],
		required: false,
		description: 'The name(s) of the gene(s) that code for the protein sequence(s) described in the entry.',
	})
	gene: RcsbUniprotProteinGene[];

	@ApiProperty({
		type: RcsbUniprotProteinSourceOrganism,
		required: false,
		description: 'Taxonomy information on the organism that is the source of the protein sequence.',
	})
	source_organism: RcsbUniprotProteinSourceOrganism;

	@ApiProperty({ type: [RcsbUniprotProteinEc], required: false, description: 'Enzyme Commission (EC) number(s).' })
	ec: RcsbUniprotProteinEc[];
}

export class RcsbUniprotFeatureFeaturePositions {
	@ApiProperty({
		description: 'An identifier for the monomer(s) corresponding to the feature assignment.',
		required: false,
	})
	beg_comp_id: string;

	@ApiProperty({
		description: 'An identifier for the monomer at which this segment of the feature begins.',
	})
	beg_seq_id: number;

	@ApiProperty({
		description: 'An identifier for the monomer at which this segment of the feature ends.',
		required: false,
	})
	end_seq_id: number;

	@ApiProperty({ description: 'The value for the feature over this monomer segment.', required: false })
	value: number;
}

export class RcsbUniprotFeature {
	@ApiProperty({ description: 'Identifies the version of the feature assignment.', required: false })
	assignment_version: string;

	@ApiProperty({ description: 'A description for the feature.', required: false })
	description: string;

	@ApiProperty({ description: 'An identifier for the feature.', required: false })
	feature_id: string;

	@ApiProperty({ description: 'A name for the feature.', required: false })
	name: string;

	@ApiProperty({
		description: 'Code identifying the individual, organization or program that assigned the feature.',
		required: false,
	})
	provenance_source: string;

	@ApiProperty({ description: 'Code residue coordinate system for the assigned feature.', required: false })
	reference_scheme: string;

	@ApiProperty({ description: 'A type or category of the feature.', required: false })
	type: string;

	@ApiProperty({ type: [RcsbUniprotFeatureFeaturePositions], required: false })
	feature_positions: RcsbUniprotFeatureFeaturePositions[];
}

export class RcsbUniprotAnnotationAnnotationLineage {
	@ApiProperty({ description: 'Members of the annotation lineage as parent lineage depth (1-N)', required: false })
	depth: number;

	@ApiProperty({ description: 'Members of the annotation lineage as parent class identifiers.', required: false })
	id: string;

	@ApiProperty({ description: 'Members of the annotation lineage as parent class names.', required: false })
	name: string;
}

export class RcsbUniprotAnnotation {
	@ApiProperty({ description: 'An identifier for the annotation.', required: false })
	annotation_id: string;

	@ApiProperty({ description: 'Identifies the version of the annotation assignment.', required: false })
	assignment_version: string;

	@ApiProperty({ description: 'A description for the annotation.', required: false })
	description: string;

	@ApiProperty({ description: 'A name for the annotation.', required: false })
	name: string;

	@ApiProperty({
		description: 'Code identifying the individual, organization or program that assigned the annotation.',
		required: false,
	})
	provenance_source: string;

	@ApiProperty({ description: 'A type or category of the annotation.', required: false })
	type: string;

	@ApiProperty({ type: [RcsbUniprotAnnotationAnnotationLineage], required: false })
	annotation_lineage: RcsbUniprotAnnotationAnnotationLineage[];
}

export class RcsbUniprotExternalReference {
	@ApiProperty({ required: false })
	reference_id: string;

	@ApiProperty({ required: false })
	reference_name: string;

	@ApiProperty({ required: false })
	provenance_source: string;
}

export class CoreEntityAlignmentsScores {
	@ApiProperty({})
	target_coverage: number;

	@ApiProperty({})
	query_coverage: number;

	@ApiProperty({})
	target_length: number;

	@ApiProperty({})
	query_length: number;
}

export class CoreEntityAlignmentsAlignedRegions {
	@ApiProperty({ description: 'NCBI sequence start position' })
	target_begin: string;

	@ApiProperty({ description: 'Entity seqeunce start position' })
	query_begin: string;

	@ApiProperty({ description: 'Aligned region length' })
	length: string;
}

export class CoreEntityAlignmentsCoreEntityIdentifiers {
	@ApiProperty({})
	entry_id: string;

	@ApiProperty({})
	entity_id: string;
}

export class RcsbUniprotAlignmentsCoreEntityAlignments {
	@ApiProperty({ type: CoreEntityAlignmentsScores, description: 'Alignment scores' })
	scores: CoreEntityAlignmentsScores;

	@ApiProperty({ type: [CoreEntityAlignmentsAlignedRegions], description: 'Aligned region' })
	aligned_regions: CoreEntityAlignmentsAlignedRegions[];

	@ApiProperty({ type: CoreEntityAlignmentsCoreEntityIdentifiers, description: 'core_entity identifiers' })
	core_entity_identifiers: CoreEntityAlignmentsCoreEntityIdentifiers;
}

export class RcsbUniprotAlignments {
	@ApiProperty({ type: [RcsbUniprotAlignmentsCoreEntityAlignments], required: false })
	core_entity_alignments: RcsbUniprotAlignmentsCoreEntityAlignments[];
}

/**
 * Entity
 */
export class EntityDescriptionVo {
	@ApiProperty({ type: [RcsbClusterMembership], required: false })
	rcsb_cluster_membership: RcsbClusterMembership[];

	@ApiProperty({ type: EntityPoly, required: false })
	entity_poly: EntityPoly;

	@ApiProperty({ type: [EntitySrcGen], required: false })
	entity_src_gen: EntitySrcGen[];

	@ApiProperty({ type: [EntitySrcNat], required: false })
	entity_src_nat: EntitySrcNat[];

	@ApiProperty({ type: [PdbxEntitySrcSyn], required: false })
	pdbx_entity_src_syn: PdbxEntitySrcSyn[];

	@ApiProperty({ type: [RcsbEntityHostOrganism], required: false })
	rcsb_entity_host_organism: RcsbEntityHostOrganism[];

	@ApiProperty({ type: [RcsbEntitySourceOrganism], required: false })
	rcsb_entity_source_organism: RcsbEntitySourceOrganism[];

	@ApiProperty({ type: RcsbPolymerEntity, required: false })
	rcsb_polymer_entity: RcsbPolymerEntity;

	@ApiProperty({ type: [RcsbPolymerEntityAlign], required: false })
	rcsb_polymer_entity_align: RcsbPolymerEntityAlign[];

	@ApiProperty({ type: [RcsbPolymerEntityAnnotation], required: false })
	rcsb_polymer_entity_annotation: RcsbPolymerEntityAnnotation[];

	@ApiProperty({ type: RcsbPolymerEntityContainerIdentifiers })
	rcsb_polymer_entity_container_identifiers: RcsbPolymerEntityContainerIdentifiers;

	@ApiProperty({ type: [RcsbPolymerEntityFeature], required: false })
	rcsb_polymer_entity_feature: RcsbPolymerEntityFeature[];

	@ApiProperty({ type: [RcsbPolymerEntityFeatureSummary], required: false })
	rcsb_polymer_entity_feature_summary: RcsbPolymerEntityFeatureSummary[];

	@ApiProperty({ type: RcsbPolymerEntityKeywords, required: false })
	rcsb_polymer_entity_keywords: RcsbPolymerEntityKeywords;

	@ApiProperty({ type: [RcsbPolymerEntityNameCom], required: false })
	rcsb_polymer_entity_name_com: RcsbPolymerEntityNameCom;

	@ApiProperty({ type: [RcsbPolymerEntityNameSys], required: false })
	rcsb_polymer_entity_name_sys: RcsbPolymerEntityNameSys[];

	@ApiProperty({ type: [RcsbRelatedTargetReferences], required: false })
	rcsb_related_target_references: RcsbRelatedTargetReferences[];

	@ApiProperty({ type: [RcsbTargetCofactors], required: false })
	rcsb_target_cofactors: RcsbTargetCofactors[];

	@ApiProperty({
		description: `A unique identifier for each object in this entity container formed by an underscore separated concatenation of entry and entity identifiers.`,
	})
	rcsb_id: string;

	@ApiProperty({ type: [RcsbPolymerEntityGroupMembership], required: false })
	rcsb_polymer_entity_group_membership: RcsbPolymerEntityGroupMembership[];

	@ApiProperty({ type: [RcsbGenomicLineage], required: false })
	rcsb_genomic_lineage: RcsbGenomicLineage[];

	@ApiProperty({ type: [RcsbMembraneLineage], required: false })
	rcsb_membrane_lineage: RcsbMembraneLineage[];

	@ApiProperty({
		description:
			'Mpstruc keyword denotes original annotation, Homology keyword denotes annotation inferred by homology.',
		required: false,
	})
	rcsb_membrane_lineage_provenance_code: string;

	@ApiProperty({ type: RcsbClusterFlexibility, required: false })
	rcsb_cluster_flexibility: RcsbClusterFlexibility;

	@ApiProperty({ type: RcsbLatestRevision, required: false })
	rcsb_latest_revision: RcsbLatestRevision;
}

export class EntityNonPolymerVo {
	@ApiProperty({ type: PdbxEntityNonpoly, required: false })
	pdbx_entity_nonpoly: PdbxEntityNonpoly;

	@ApiProperty({ type: RcsbNonpolymerEntity, required: false })
	rcsb_nonpolymer_entity: RcsbNonpolymerEntity;

	@ApiProperty({ type: [RcsbNonpolymerEntityAnnotation], required: false })
	rcsb_nonpolymer_entity_annotation: RcsbNonpolymerEntityAnnotation[];

	@ApiProperty({ type: RcsbNonpolymerEntityContainerIdentifiers, required: false })
	rcsb_nonpolymer_entity_container_identifiers: RcsbNonpolymerEntityContainerIdentifiers;

	@ApiProperty({ type: [RcsbNonpolymerEntityFeature], required: false })
	rcsb_nonpolymer_entity_feature: RcsbNonpolymerEntityFeature[];

	@ApiProperty({ type: [RcsbNonpolymerEntityFeatureSummary], required: false })
	rcsb_nonpolymer_entity_feature_summary: RcsbNonpolymerEntityFeatureSummary[];

	@ApiProperty({ type: RcsbNonpolymerEntityKeywords, required: false })
	rcsb_nonpolymer_entity_keywords: RcsbNonpolymerEntityKeywords;

	@ApiProperty({ type: RcsbNonpolymerEntityNameCom, required: false })
	rcsb_nonpolymer_entity_name_com: RcsbNonpolymerEntityNameCom;

	@ApiProperty({
		description:
			'A unique identifier for each object in this entity container formed by an underscore separated concatenation of entry and entity identifiers.',
	})
	rcsb_id: string;

	@ApiProperty({ type: RcsbLatestRevision, required: false })
	rcsb_latest_revision: RcsbLatestRevision;
}

export class EntityPolymerVo {
	@ApiProperty({ type: [RcsbClusterMembership], required: false })
	rcsb_cluster_membership: RcsbClusterMembership[];

	@ApiProperty({ type: EntityPoly, required: false })
	entity_poly: EntityPoly;

	@ApiProperty({ type: [EntitySrcGen], required: false })
	entity_src_gen: EntitySrcGen[];

	@ApiProperty({ type: [EntitySrcNat], required: false })
	entity_src_nat: EntitySrcNat[];

	@ApiProperty({ type: [PdbxEntitySrcSyn], required: false })
	pdbx_entity_src_syn: PdbxEntitySrcSyn[];

	@ApiProperty({ type: [RcsbEntityHostOrganism], required: false })
	rcsb_entity_host_organism: RcsbEntityHostOrganism[];

	@ApiProperty({ type: [RcsbEntitySourceOrganism], required: false })
	rcsb_entity_source_organism: RcsbEntitySourceOrganism[];

	@ApiProperty({ type: RcsbPolymerEntity, required: false })
	rcsb_polymer_entity: RcsbPolymerEntity;

	@ApiProperty({ type: [RcsbPolymerEntityAlign], required: false })
	rcsb_polymer_entity_align: RcsbPolymerEntityAlign[];

	@ApiProperty({ type: [RcsbPolymerEntityAnnotation], required: false })
	rcsb_polymer_entity_annotation: RcsbPolymerEntityAnnotation[];

	@ApiProperty({ type: RcsbPolymerEntityContainerIdentifiers })
	rcsb_polymer_entity_container_identifiers: RcsbPolymerEntityContainerIdentifiers;

	@ApiProperty({ type: [RcsbPolymerEntityFeature], required: false })
	rcsb_polymer_entity_feature: RcsbPolymerEntityFeature[];

	@ApiProperty({ type: [RcsbPolymerEntityFeatureSummary], required: false })
	rcsb_polymer_entity_feature_summary: RcsbPolymerEntityFeatureSummary[];

	@ApiProperty({ type: RcsbPolymerEntityKeywords, required: false })
	rcsb_polymer_entity_keywords: RcsbPolymerEntityKeywords;

	@ApiProperty({ type: [RcsbPolymerEntityNameCom], required: false })
	rcsb_polymer_entity_name_com: RcsbPolymerEntityNameCom;

	@ApiProperty({ type: [RcsbPolymerEntityNameSys], required: false })
	rcsb_polymer_entity_name_sys: RcsbPolymerEntityNameSys[];

	@ApiProperty({ type: [RcsbRelatedTargetReferences], required: false })
	rcsb_related_target_references: RcsbRelatedTargetReferences[];

	@ApiProperty({ type: [RcsbTargetCofactors], required: false })
	rcsb_target_cofactors: RcsbTargetCofactors[];

	@ApiProperty({
		description:
			'A unique identifier for each object in this entity container formed by an underscore separated concatenation of entry and entity identifiers.',
	})
	rcsb_id: string;

	@ApiProperty({ type: [RcsbPolymerEntityGroupMembership], required: false })
	rcsb_polymer_entity_group_membership: RcsbPolymerEntityGroupMembership[];

	@ApiProperty({ type: [RcsbGenomicLineage], required: false })
	rcsb_genomic_lineage: RcsbGenomicLineage[];

	@ApiProperty({
		type: [RcsbMembraneLineage],
		required: false,
		description: 'Members of the membrane protein classification lineage.',
	})
	rcsb_membrane_lineage: RcsbMembraneLineage[];

	@ApiProperty({
		description: `Enum: "Mpstruc" "Homology"
	Mpstruc keyword denotes original annotation, Homology keyword denotes annotation inferred by homology.`,
		required: false,
	})
	rcsb_membrane_lineage_provenance_code: string;

	@ApiProperty({ type: RcsbClusterFlexibility, required: false })
	rcsb_cluster_flexibility: RcsbClusterFlexibility;

	@ApiProperty({ type: RcsbLatestRevision, required: false })
	rcsb_latest_revision: RcsbLatestRevision;
}

export class EntityMacromolecularVo {
	@ApiProperty({ description: 'Primary accession number of a given UniProtKB entry.', required: false })
	rcsb_id: string;

	@ApiProperty({ type: RcsbUniprotContainerIdentifiers })
	rcsb_uniprot_container_identifiers: RcsbUniprotContainerIdentifiers;

	@ApiProperty({ required: false })
	rcsb_uniprot_accession: string[];

	@ApiProperty({ required: false })
	rcsb_uniprot_entry_name: string[];

	@ApiProperty({ type: [RcsbUniprotKeyword], required: false })
	rcsb_uniprot_keywords: RcsbUniprotKeyword[];

	@ApiProperty({ type: RcsbUniprotProtein, required: false })
	rcsb_uniprot_protein: RcsbUniprotProtein;

	@ApiProperty({ type: [RcsbUniprotFeature], required: false })
	rcsb_uniprot_feature: RcsbUniprotFeature[];

	@ApiProperty({ type: [RcsbUniprotAnnotation], required: false })
	rcsb_uniprot_annotation: RcsbUniprotAnnotation[];

	@ApiProperty({ type: [RcsbUniprotExternalReference], required: false })
	rcsb_uniprot_external_reference: RcsbUniprotExternalReference[];

	@ApiProperty({
		type: RcsbUniprotAlignments,
		required: false,
		description: 'UniProt pairwise sequence alignments.',
	})
	rcsb_uniprot_alignments: RcsbUniprotAlignments;
}
