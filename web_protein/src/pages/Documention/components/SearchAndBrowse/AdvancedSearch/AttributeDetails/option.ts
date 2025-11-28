export const StructureOptions = [
  {
    title: 'ID(s) and Keywords',
    children: [
      {
        title: 'EntryID(s)',
        data: [
          {
            key: 'attribute',
            value: 'rcsb_entry_container_identifiers.entry_id',
          },
          {
            key: 'Description',
            value: 'Entry identifier for the container.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: ['4HHB', 'AF_AFP60325F1', 'MA_MABAKCEPC0019'],
          },
          {
            key: 'Iterable',
            value: 'true',
          },
        ],
      },
      {
        title: 'PDB Deposit Group ID(s)',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_deposit_group.group_id',
          },
          {
            key: 'Description',
            value:
              'A unique identifier for a group of entries deposited as a collection.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: ['G_1002119', 'G_1002043'],
          },
          {
            key: 'Iterable',
            value: '	true',
          },
        ],
      },
      {
        title: 'Assembly ID(s)',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_assembly_container_identifiers.assembly_id',
          },
          {
            key: 'Description',
            value: 'Assembly identifier for the container.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: ['1', '5'],
          },
        ],
      },
      {
        title: 'PubMed ID',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_pubmed_container_identifiers.pubmed_id',
          },
          {
            key: 'Description',
            value: 'UID assigned to each PubMed record.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '5',
          },
          {
            key: 'Maximum Value',
            value: '37196677',
          },
          {
            key: 'Examples',
            value: '15937111',
          },
          {
            key: 'Iterable',
            value: 'true',
          },
        ],
      },
      {
        title: 'EMDB ID(s) for Maps Used in Structure Modeling',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_container_identifiers.emdb_ids',
          },
          {
            key: 'Description',
            value:
              'List of EMDB identifiers for the 3D electron microscopy density maps used in the production of the structure model.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: ['EMD-21578', 'EMD-30168'],
          },
          {
            key: 'Iterable',
            value: 'true',
          },
        ],
      },
      {
        title: 'EMDB ID(s) for Related Maps',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_container_identifiers.related_emdb_ids',
          },
          {
            key: 'Description',
            value:
              'List of EMDB identifiers for the 3D electron microscopy density maps related to the structure model.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: ['EMD-21578', 'EMD-30168'],
          },
          {
            key: 'Iterable',
            value: 'true',
          },
        ],
      },
      {
        title: 'Accession Code(s) - UniProt',
        data: [
          {
            key: 'Attribute',
            value:
              'rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_accession',
          },
          {
            key: 'Description',
            value: 'Reference database accession code',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value:
              'rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_name',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['P01308', 'P0CX43'],
          },
        ],
      },
      {
        title: 'Accession Code(s) - GenBank',
        data: [
          {
            key: 'Attribute',
            value:
              'rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_accession',
          },
          {
            key: 'Description',
            value: 'Reference database accession code',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value:
              'rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_name',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['12057205', '1329886537'],
          },
        ],
      },
      {
        title: 'Accession Code(s) - NORINE',
        data: [
          {
            key: 'Attribute',
            value:
              'rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_accession',
          },
          {
            key: 'Description',
            value: 'Reference database accession code',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value:
              'rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_name',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['NOR00033', 'NOR00972'],
          },
        ],
      },
      {
        title: 'Structure Keyword',
        data: [
          {
            key: 'Attribute',
            value: 'struct_keywords.pdbx_keywords',
          },
          {
            key: 'Description',
            value: 'Terms characterizing the macromolecular structure.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: [
              'DNA',
              'RNA',
              'T-RNA',
              'DNA/RNA',
              'RIBOZYME',
              'PROTEIN/DNA',
              'PROTEIN/RNA',
              'PEPTIDE NUCLEIC ACID',
              'PEPTIDE NUCLEIC ACID/DNA',
              'DNA-BINDING PROTEIN',
              'RNA-BINDING PROTEIN',
            ],
          },
        ],
      },
      {
        title: 'UniProt Molecule Name',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_uniprot_protein.name.value',
          },
          {
            key: 'Description',
            value: 'Name that allows to unambiguously identify a protein.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: ['Hemoglobin alpha'],
          },
        ],
      },
      {
        title: 'Additional Structure Keywords',
        data: [
          {
            key: 'Attribute',
            value: 'struct_keywords.text',
          },
          {
            key: 'Description',
            value: 'Keywords describing this structure.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: [
              'Inhibitor, Complex, Isomerase...',
              'serine protease',
              'inhibited complex',
              'high-resolution refinement',
            ],
          },
        ],
      },
      {
        title: 'Entry Group ID(s)',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_group_membership.group_id',
          },
          {
            key: 'Description',
            value: 'A unique identifier for a group of entries',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: ['G_1001001'],
          },
        ],
      },
      {
        title: 'Polymer Entity Group ID(s)',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_entity_group_membership.group_id',
          },
          {
            key: 'Description',
            value: 'A unique identifier for a group of entities',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: ['1_100', 'P00003'],
          },
        ],
      },
    ],
  },
  {
    title: 'Structure Details',
    children: [
      {
        title: 'Structure Title',
        data: [
          {
            key: 'Attribute',
            value: 'struct.title',
          },
          {
            key: 'Description',
            value:
              '	A title for the data block. The author should attempt to convey the essence of the structure archived in the CIF in the title, and to distinguish this structural result from others.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: [
              'T4 lysozyme mutant - S32A',
              'Rhinovirus 16 polymerase elongation complex (r1_form)',
              'Crystal structure of the OXA-10 W154A mutant at pH 9.0',
              'Mutant structure of Thermus thermophilus HB8 uridine-cytidine kinase',
              'Crystal structure of xylanase from Trichoderma longibrachiatum',
            ],
          },
        ],
      },
      {
        title: 'Structure Author',
        data: [
          {
            key: 'Attribute',
            value: 'audit_author.name',
          },
          {
            key: 'Description',
            value:
              'The name of an author of this data block. If there are multiple authors, _audit_author.name is looped with _audit_author.address. The family name(s), followed by a comma and including any dynastic components, precedes the first name(s) or initial(s).',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: [
              'Jones, T.J.',
              'Bleary, Percival R.',
              "O'Neil, F.K.",
              'Van den Bossche, G.',
              'Yang, D.-L.',
              'Simonov, Yu.A',
            ],
          },
        ],
      },
      {
        title: 'Structure Author ORCID',
        data: [
          {
            key: 'Attribute',
            value: '	audit_author.identifier_ORCID',
          },
          {
            key: 'Description',
            value: 'The Open Researcher and Contributor ID (ORCID).',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: ['0000-0002-6681-547X'],
          },
        ],
      },
      {
        title: 'Deposit Date',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_accession_info.deposit_date',
          },
          {
            key: 'Description',
            value: 'The entry deposition date.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Minimum Value',
            value: '8/10/1972',
          },
          {
            key: 'Maximum Value',
            value: '5/10/2023',
          },
          {
            key: 'Examples',
            value: ['2020-07-11', '2013-10-01'],
          },
        ],
      },
      {
        title: 'Release Date',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_accession_info.initial_release_date',
          },
          {
            key: 'Description',
            value: 'The entry deposition date.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Minimum Value',
            value: '5/18/1976',
          },
          {
            key: 'Maximum Value',
            value: '5/23/2023',
          },
          {
            key: 'Examples',
            value: ['2020-01-10', '2018-01-23'],
          },
        ],
      },
      {
        title: 'Revision Date',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_accession_info.revision_date',
          },
          {
            key: 'Description',
            value: 'The latest entry revision date.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Minimum Value',
            value: '11/7/2000',
          },
          {
            key: 'Maximum Value',
            value: '5/23/2023',
          },
          {
            key: 'Examples',
            value: ['2020-02-11', '2018-10-23'],
          },
        ],
      },
      {
        title: 'Structural Genomics Project Name',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_SG_project.project_name',
          },
          {
            key: 'Description',
            value: 'The value identifies the Structural Genomics project.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Enumeration',
            value: [
              'Enzyme Function Initiative',
              'NIAID, National Institute of Allergy and Infectious Diseases',
              'NPPSFA, National Project on Protein Structural and Functional Analyses',
              'PSI, Protein Structure Initiative',
              'PSI:Biology',
            ],
          },
          {
            key: 'Examples',
            value: 'PSI, Protein Structure Initiative',
          },
        ],
      },
      {
        title: 'Structural Genomics Project Center Initials',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_SG_project.initial_of_center',
          },
          {
            key: 'Description',
            value: 'The value identifies the full name of center.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Enumeration',
            value: [
              'ATCG3D',
              'BIGS',
              'BSGC',
              'BSGI',
              'CEBS',
              'CELLMAT',
              'CESG',
              'CHSAM',
              'CHTSB',
              'CSBID',
              'CSGID',
              'CSMP',
              'GPCR',
              'IFN',
              'ISFI',
              'ISPC',
              'JCSG',
              'MCMR',
              'MCSG',
              'MPID',
              'MPSBC',
              'MSGP',
              'MSGPP',
              'MTBI',
              'NESG',
              'NHRs',
              'NPCXstals',
              'NYCOMPS',
              'NYSGRC',
              'NYSGXRC',
              'NatPro',
              'OCSP',
              'OPPF',
              'PCSEP',
              'PSF',
              'S2F',
              'SASTAD',
              'SECSG',
              'SGC',
              'SGCGES',
              'SGPP',
              'SPINE',
              'SPINE-2',
              'SSGCID',
              'SSPF',
              'STEMCELL',
              'TBSGC',
              'TCELL',
              'TEMIMPS',
              'TJMP',
              'TMPC',
              'TransportPDB',
              'XMTB',
              'YSG',
            ],
          },
          {
            key: 'Examples',
            value: 'JCSG',
          },
        ],
      },
      {
        title: 'Structural Genomics Project Center Name',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_SG_project.full_name_of_center',
          },
          {
            key: 'Description',
            value: 'The value identifies the full name of center.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Enumeration',
            value: [
              'Accelerated Technologies Center for Gene to 3D Structure',
              'Assembly, Dynamics and Evolution of Cell-Cell and Cell-Matrix Adhesions',
              'Atoms-to-Animals: The Immune Function Network',
              'Bacterial targets at IGS-CNRS, France',
              'Berkeley Structural Genomics Center',
              'Center for Eukaryotic Structural Genomics',
              'Center for High-Throughput Structural Biology',
              'Center for Membrane Proteins of Infectious Diseases',
              'Center for Structural Biology of Infectious Diseases',
              'Center for Structural Genomics of Infectious Diseases',
              'Center for Structures of Membrane Proteins',
              'Center for the X-ray Structure Determination of Human Transporters',
              'Chaperone-Enabled Studies of Epigenetic Regulation Enzymes',
              'Enzyme Discovery for Natural Product Biosynthesis',
              'GPCR Network',
              'Integrated Center for Structure and Function Innovation',
              'Israel Structural Proteomics Center',
              'Joint Center for Structural Genomics',
              'Marseilles Structural Genomics Program @ AFMB',

              'Medical Structural Genomics of Pathogenic Protozoa',
              'Membrane Protein Structural Biology Consortium',
              'Membrane Protein Structures by Solution NMR',
              'Midwest Center for Macromolecular Research',
              'Midwest Center for Structural Genomics',
              'Mitochondrial Protein Partnership',
              'Montreal-Kingston Bacterial Structural Genomics Initiative',
              'Mycobacterium Tuberculosis Structural Proteomics Project',
              'New York Consortium on Membrane Protein Structure',
              'New York SGX Research Center for Structural Genomics',
              'New York Structural GenomiX Research Consortium',

              'New York Structural Genomics Research Consortium',
              'Northeast Structural Genomics Consortium',
              'Nucleocytoplasmic Transport: a Target for Cellular Control',
              'Ontario Centre for Structural Proteomics',
              'Oxford Protein Production Facility',
              'Paris-Sud Yeast Structural Genomics',
              'Partnership for Nuclear Receptor Signaling Code Biology',
              'Partnership for Stem Cell Biology',
              'Partnership for T-Cell Biology',
              'Program for the Characterization of Secreted Effector Proteins',
              'Protein Structure Factory',
              'RIKEN Structural Genomics/Proteomics Initiative',
              'Scottish Structural Proteomics Facility',
              'Seattle Structural Genomics Center for Infectious Disease',
              'South Africa Structural Targets Annotation Database',
              'Southeast Collaboratory for Structural Genomics',
              'Structural Genomics Consortium',
              'Structural Genomics Consortium for Research on Gene Expression',
              'Structural Genomics of Pathogenic Protozoa Consortium',
              'Structural Proteomics in Europe',
              'Structural Proteomics in Europe 2',
              'Structure 2 Function Project',
              'Structure, Dynamics and Activation Mechanisms of Chemokine Receptors',
              'Structure-Function Analysis of Polymorphic CDI Toxin-Immunity Protein Complexes',
              'Structure-Function Studies of Tight Junction Membrane Proteins',
              'Structures of Mtb Proteins Conferring Susceptibility to Known Mtb Inhibitors',
              'TB Structural Genomics Consortium',
              'Transcontinental EM Initiative for Membrane Protein Structure',
              'Transmembrane Protein Center',
            ],
          },
          {
            key: 'Examples',
            value: 'Midwest Center for Structural Genomics',
          },
        ],
      },
      {
        title: 'Has Experimental Data',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_accession_info.has_released_experimental_data',
          },
          {
            key: 'Description',
            value:
              'A code indicating the current availibility of experimental data in the repository..',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: ['N', 'Y'],
          },

          {
            key: 'Examples',
            value: ['Y', 'N'],
          },
        ],
      },
      {
        title: 'Compatible with PDB Format',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_database_status.pdb_format_compatible',
          },
          {
            key: 'Description',
            value:
              "A flag indicating that the entry is compatible with the PDB format. A value of 'N' indicates that the no PDB format data file is corresponding to this entry is available in the PDB archive.",
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: ['N', 'Y'],
          },

          {
            key: 'Examples',
            value: 'Y',
          },
        ],
      },
      {
        title: 'Funding Organization',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_audit_support.funding_organization',
          },
          {
            key: 'Description',
            value:
              'The name of the organization providing funding support for the entry. Funding information is optionally provided for entries after June 2016.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: [
              'National Institutes of Health',
              'Wellcome Trust',
              'National Institutes of Health/National Institute of General Medical Sciences',
            ],
          },
        ],
      },
      {
        title: 'Funding Grant Number',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_audit_support.grant_number',
          },
          {
            key: 'Description',
            value: 'The grant number associated with this source of support.',
          },
          {
            key: 'Type',
            value: 'string',
          },
        ],
      },
      {
        title: 'Funding Country',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_audit_support.country',
          },
          {
            key: 'Description',
            value:
              'The country/region providing the funding support for the entry. Funding information is optionally provided for entries after June 2016.',
          },
          {
            key: 'Type',
            value: 'string',
          },
        ],
      },
      {
        title: 'Content Types Available in the Repository',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_repository_holdings_current.repository_content_types',
          },
          {
            key: 'Description',
            value: 'The list of content types associated with this entry.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: [
              '2fo-fc Map',
              'Combined NMR data (NEF)',
              'Combined NMR data (NMR-STAR)',
              'FASTA sequence',
              'Map Coefficients',
              'NMR chemical shifts',
              'NMR restraints V1',
              'NMR restraints V2',
              'assembly PDB',
              'assembly mmCIF',
              'entry PDB',
              'entry PDB bundle',
              'entry PDBML',
              'entry mmCIF',
              'fo-fc Map',
              'structure factors',
              'validation data mmCIF',
              'validation report',
              'validation slider image',
            ],
          },
          {
            key: 'Examples',
            value: 'entry mmCIF',
          },
        ],
      },
      {
        title: 'Content Types Available in a Related Resource',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_database_related.content_type',
          },
          {
            key: 'Description',
            value: 'The identifying content type of the related entry.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: [
              'associated EM volume',
              'associated NMR restraints',
              'associated SAS data',
              'associated structure factors',
              'complete structure',
              'derivative structure',
              'ensemble',
              'minimized average structure',
              'native structure',
              'other',
              'other EM volume',
              'protein target sequence and/or protocol data',
              're-refinement',
              'representative structure',
              'split',
              'unspecified',
            ],
          },
          {
            key: 'Examples',
            value: [
              'minimized average structure',
              'representative structure',
              'ensemble',
              'derivative structure',
              'native structure',
              'associated EM volume',
              'other EM volume',
              'associated NMR restraints',
              'associated structure factors',
              'associated SAS data',
              'protein target sequence and/or protocol data',
              'split',

              're-refinement',
              'complete structure',
              'unspecified',
              'other',
            ],
          },
        ],
      },
      {
        title: 'Related Resource Name Containing Additional Content',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_database_related.db_name',
          },
          {
            key: 'Description',
            value: 'The name of the database containing the related entry.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value:
              'PDB - Protein Databank NDB - Nucleic Acid Database BMRB - BioMagResBank EMDB - Electron Microscopy Database BMCD - Biological Macromolecule Crystallization Database TargetTrack - Target Registration and Protocol Database SASBDB - Small Angle Scattering Biological Data Bank',
          },
        ],
      },
      {
        title: 'Structure Determination Methodology',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.structure_determination_methodology',
          },
          {
            key: 'Description',
            value:
              'Indicates if the structure was determined using experimental or computational methods.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: ['computational', 'experimental'],
          },
          {
            key: 'Examples',
            value: 'experimental',
          },
        ],
      },
    ],
  },
  {
    title: 'Computed Structure Model Details',
    children: [
      {
        title: 'Computed Structure Model ID(s)',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_comp_model_provenance.entry_id',
          },
          {
            key: 'Description',
            value:
              'Entry identifier corresponding to the computed structure model.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: ['AF-P60325-F1', 'ma-bak-cepc-0019'],
          },
        ],
      },

      {
        title: 'Source Database',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_comp_model_provenance.source_db',
          },
          {
            key: 'Description',
            value: 'Source database for the computed structure model.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Enumeration',
            value: ['AlphaFoldDB', 'ModelArchive'],
          },
        ],
      },
      {
        title: 'Global Quality Score - pLDDT',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_ma_qa_metric_global.ma_qa_metric_global.value',
          },
          {
            key: 'Description',
            value: 'Value of the global QA metric.',
          },
          {
            key: 'Type',
            value: '	number',
          },

          {
            key: 'Nested Attribute',
            value: 'rcsb_ma_qa_metric_global.ma_qa_metric_global.type',
          },
          {
            key: 'Nested Attribute Minimum Value',
            value: '23.15',
          },
          {
            key: 'Nested Attribute Maximum Value',
            value: '98.77',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['83.02', '29.14'],
          },
        ],
      },
    ],
  },
  {
    title: 'Entry Features',
    children: [
      {
        title: 'Entry Polymer Types',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.selected_polymer_entity_types',
          },
          {
            key: 'Description',
            value:
              'Selected polymer entity type categories describing the entry.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: [
              'Nucleic acid (only)',
              'Oligosaccharide (only)',
              'Other',
              'Protein (only)',
              'Protein/NA',
              'Protein/Oligosaccharide',
            ],
          },
          {
            key: 'Examples',
            value: 'Protein (only)',
          },
        ],
      },
      {
        title: 'Entry Polymer Composition',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.polymer_composition',
          },
          {
            key: 'Description',
            value:
              'Categories describing the polymer entity composition for the entry.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: [
              'DNA',
              'DNA/RNA',
              'NA-hybrid',
              'NA/oligosaccharide',
              'RNA',
              'heteromeric protein',
              'homomeric protein',
              'oligosaccharide',
              'other',
              'other type composition',
              'other type pair',
              'protein/NA',
              'protein/NA/oligosaccharide',
              'protein/oligosaccharide',
            ],
          },
          {
            key: 'Examples',
            value: 'homomeric protein',
          },
        ],
      },
      {
        title: 'Molecular Weight per Deposited Model',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.molecular_weight',
          },
          {
            key: 'Description',
            value:
              'The molecular mass (KDa) of polymer and non-polymer entities (exclusive of solvent) in the deposited structure entry.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Minimum Value',
            value: '0.42',
          },
          {
            key: 'Maximum Value',
            value: '36803.9',
          },
          {
            key: 'Examples',
            value: ['33.43', '45.53'],
          },
        ],
      },
      {
        title: 'Number of Assemblies',
        data: [
          {
            key: 'Attribute',
            value: '	rcsb_entry_info.assembly_count',
          },
          {
            key: 'Description',
            value:
              'The number of assemblies defined for this entry including the deposited assembly.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '1',
          },
          {
            key: 'Maximum Value',
            value: '44',
          },
        ],
      },
      {
        title: 'Number of Distinct Molecular Entities',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.entity_count',
          },
          {
            key: 'Description',
            value:
              'The number of distinct polymer, non-polymer, branched molecular, and solvent entities per deposited structure model.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '1',
          },
          {
            key: 'Maximum Value',
            value: '455',
          },
        ],
      },
      {
        title: 'Number of Distinct Non-polymer Entities',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.nonpolymer_entity_count',
          },
          {
            key: 'Description',
            value:
              'The number of distinct non-polymer entities in the structure entry exclusive of solvent.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '30',
          },
        ],
      },
      {
        title: 'Number of Distinct Protein Entities',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.polymer_entity_count_protein',
          },
          {
            key: 'Description',
            value: 'The number of distinct protein polymer entities.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '145',
          },
        ],
      },
      {
        title: 'Number of Distinct RNA Entities',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.polymer_entity_count_RNA',
          },
          {
            key: 'Description',
            value: 'The number of distinct RNA polymer entities.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '36',
          },
        ],
      },
      {
        title: 'Number of Distinct DNA Entities',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.polymer_entity_count_DNA',
          },
          {
            key: 'Description',
            value: 'The number of distinct DNA polymer entities.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '455',
          },
        ],
      },
      {
        title: 'Number of Distinct NA Hybrid Entities',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.polymer_entity_count_nucleic_acid_hybrid',
          },
          {
            key: 'Description',
            value:
              'The number of distinct hybrid nucleic acid polymer entities.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '3',
          },
        ],
      },
      {
        title: 'Total Number of Polymer Instances (Chains)',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.deposited_polymer_entity_instance_count',
          },
          {
            key: 'Description',
            value:
              'The number of polymer instances in the deposited data set. This is the total count of polymer entity instances reported per deposited structure model.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '1792',
          },
        ],
      },
      {
        title: 'Total Number of Non-polymer Instances',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.deposited_nonpolymer_entity_instance_count',
          },
          {
            key: 'Description',
            value:
              'The number of non-polymer instances in the deposited data set. This is the total count of non-polymer entity instances reported per deposited structure model.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '5351',
          },
        ],
      },
      {
        title: 'Total Number of Polymer Residues per Deposited Model',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.deposited_polymer_monomer_count',
          },
          {
            key: 'Description',
            value:
              'The number of polymer monomers in sample entity instances in the deposited data set. This is the total count of monomers for all polymer entity instances reported per deposited structure model.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '315222',
          },
        ],
      },
      {
        title: 'Number of Non-Hydrogen Atoms per Deposited Model',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.deposited_atom_count',
          },
          {
            key: 'Description',
            value:
              'The number of heavy atom coordinates records per deposited structure model.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '28',
          },
          {
            key: 'Maximum Value',
            value: '2495192',
          },
        ],
      },
      {
        title: 'Number of Hydrogen Atoms per Deposited Model',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.deposited_hydrogen_atom_count',
          },
          {
            key: 'Description',
            value:
              'The number of hydrogen atom coordinates records per deposited structure model.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '680778',
          },
        ],
      },
      {
        title: 'Number of Water Molecules per Deposited Model',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.deposited_solvent_atom_count',
          },
          {
            key: 'Description',
            value:
              'The number of heavy solvent atom coordinates records per deposited structure model.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '15347',
          },
        ],
      },
      {
        title: 'Deposited Model Count',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.deposited_model_count',
          },
          {
            key: 'Description',
            value: 'The number of model structures deposited.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '1',
          },
          {
            key: 'Maximum Value',
            value: '640',
          },
        ],
      },
      {
        title: 'Disulfide Bond Count per Deposited Model',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.disulfide_bond_count',
          },
          {
            key: 'Description',
            value:
              'The number of disulfide bonds per deposited structure model.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '1356',
          },
        ],
      },
    ],
  },
  {
    title: 'Polymer Molecular Features',
    children: [
      {
        title: 'Polymer Entity Description',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_entity.pdbx_description',
          },
          {
            key: 'Description',
            value: 'A description of the polymer entity.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: [
              'Green fluorescent protein',
              '23S ribosomal RNA',
              'NAD-dependent protein deacylase sirtuin-5, mitochondrial',
            ],
          },
        ],
      },
      {
        title: 'Macromolecule Name',
        data: [
          {
            key: 'Attribute',
            value:
              'rcsb_polymer_entity.rcsb_macromolecular_names_combined.name',
          },
          {
            key: 'Description',
            value: 'Combined list of macromolecular names.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: [
              'Lysozyme C',
              'Plasmid recombination enzyme',
              'Pyruvate carboxylase',
            ],
          },
        ],
      },
      {
        title: 'Polymer Entity Type',
        data: [
          {
            key: 'Attribute',
            value: 'entity_poly.rcsb_entity_polymer_type',
          },
          {
            key: 'Description',
            value: 'A coarse-grained polymer entity type.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: ['Protein', 'DNA', 'RNA', 'NA-hybrid', 'Other'],
          },
        ],
      },
      {
        title: 'Polymer Entity Sequence Length',
        data: [
          {
            key: 'Attribute',
            value: 'entity_poly.rcsb_sample_sequence_length',
          },
          {
            key: 'Description',
            value: 'The monomer length of the sample sequence.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '1',
          },
          {
            key: 'Maximum Value',
            value: '19000',
          },
        ],
      },
      {
        title: 'Polymer Entity Mutation Count',
        data: [
          {
            key: 'Attribute',
            value: 'entity_poly.rcsb_mutation_count',
          },
          {
            key: 'Description',
            value:
              'Number of engineered mutations engineered in the sample sequence.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '657',
          },
        ],
      },
      {
        title: 'Polymer Entity Molecular Weight',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_entity.formula_weight',
          },
          {
            key: 'Description',
            value: 'Formula mass (KDa) of the entity.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Minimum Value',
            value: '0.16',
          },
          {
            key: 'Maximum Value',
            value: '6061.92',
          },
          {
            key: 'Examples',
            value: ['40', '105'],
          },
        ],
      },
      {
        title: 'Glycosylation Site',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_struct_conn.role',
          },
          {
            key: 'Description',
            value: 'The chemical or structural role of the interaction',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: [
              'C-Mannosylation',
              'N-Glycosylation',
              'O-Glycosylation',
              'S-Glycosylation',
            ],
          },
          {
            key: 'Examples',
            value: ['N-Glycosylation', 'O-Glycosylation'],
          },
        ],
      },
      {
        title: 'Gene Name',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entity_source_organism.rcsb_gene_name.value',
          },
          {
            key: 'Description',
            value: 'Gene name.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: ['lacA', 'hemH'],
          },
        ],
      },
      {
        title: 'Source Organism Taxonomy Name (Full Lineage)',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entity_source_organism.taxonomy_lineage.name',
          },
          {
            key: 'Description',
            value:
              'Memebers of the NCBI Taxonomy lineage as parent taxonomy names.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: ['Homo sapiens', 'Mus musculus'],
          },
        ],
      },
      {
        title: 'Polymer Entity Name Combined',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_entity.rcsb_polymer_name_combined.names',
          },
          {
            key: 'Description',
            value:
              'Protein name annotated by the UniProtKB or macromolecular name assigned by the PDB',
          },
          {
            key: 'Type',
            value: 'string',
          },
        ],
      },
      {
        title: 'Source Organism Taxonomy ID (Full Lineage)',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entity_source_organism.taxonomy_lineage.id',
          },
          {
            key: 'Description',
            value:
              'Members of the NCBI Taxonomy lineage as parent taxonomy idcodes.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: ['9606', '10090'],
          },
        ],
      },
      {
        title: 'Scientific Name of the Source Organism',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entity_source_organism.ncbi_scientific_name',
          },
          {
            key: 'Description',
            value:
              'The scientific name associated with this taxonomy code aggregated by the NCBI Taxonomy Database. This name corresponds to the taxonomy identifier assigned by the PDB depositor. References: Sayers EW, Barrett T, Benson DA, Bryant SH, Canese K, Chetvernin V, Church DM, DiCuccio M, Edgar R, Federhen S, Feolo M, Geer LY, Helmberg W, Kapustin Y, Landsman D, Lipman DJ, Madden TL, Maglott DR, Miller V, Mizrachi I, Ostell J, Pruitt KD, Schuler GD, Sequeira E, Sherry ST, Shumway M, Sirotkin K, Souvorov A, Starchenko G, Tatusova TA, Wagner L, Yaschenko E, Ye J (2009). Database resources of the National Center for Biotechnology Information. Nucleic Acids Res. 2009 Jan;37(Database issue):D5-15. Epub 2008 Oct 21. Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Sayers EW (2009). GenBank. Nucleic Acids Res. 2009 Jan;37(Database issue):D26-31. Epub 2008 Oct 21.',
          },
          {
            key: 'Type',
            value: 'string',
          },
        ],
      },
      {
        title: 'Parent Scientific Name (typically superkingdom or clade)',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entity_source_organism.ncbi_parent_scientific_name',
          },
          {
            key: 'Description',
            value:
              'A parent scientific name in the NCBI taxonomy hierarchy of the source organism assigned by the PDB depositor. For cellular organism this corresponds to a superkingdom (e.g., Archaea, Bacteria, Eukaryota). For viruses this corresponds to a clade (e.g. Adnaviria, Bicaudaviridae, Clavaviridae). For other and unclassified entries this corresponds to the first level of any taxonomic rank below the root level. References: Sayers EW, Barrett T, Benson DA, Bryant SH, Canese K, Chetvernin V, Church DM, DiCuccio M, Edgar R, Federhen S, Feolo M, Geer LY, Helmberg W, Kapustin Y, Landsman D, Lipman DJ, Madden TL, Maglott DR, Miller V, Mizrachi I, Ostell J, Pruitt KD, Schuler GD, Sequeira E, Sherry ST, Shumway M, Sirotkin K, Souvorov A, Starchenko G, Tatusova TA, Wagner L, Yaschenko E, Ye J (2009). Database resources of the National Center for Biotechnology Information. Nucleic Acids Res. 2009 Jan;37(Database issue):D5-15. Epub 2008 Oct 21. Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Sayers EW (2009). GenBank. Nucleic Acids Res. 2009 Jan;37(Database issue):D26-31. Epub 2008 Oct 21.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: [
              'Archaea',
              'Bacteria',
              'Eukaryota',
              'Adnaviria',
              'Bicaudaviridae',
              'Clavaviridae',
              'Duplodnaviria',
            ],
          },
        ],
      },
      {
        title: 'Source Organism Type',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entity_source_organism.ncbi_parent_scientific_name',
          },
          {
            key: 'Description',
            value: 'The source type for the entity',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: ['genetically engineered', 'natural', 'synthetic'],
          },
        ],
      },
      {
        title: 'Polymer Entity Source Count',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_entity.rcsb_source_part_count',
          },
          {
            key: 'Description',
            value:
              'The number of biological sources for the polymer entity. Multiple source contributions may come from the same organism (taxonomy).',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '21',
          },
        ],
      },
      {
        title: 'Polymer Entity Distinct Taxonomy Count',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_entity.rcsb_source_taxonomy_count',
          },
          {
            key: 'Description',
            value:
              'The number of distinct source taxonomies for the polymer entity. Commonly used to identify chimeric polymers.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '5',
          },
        ],
      },
      {
        title: 'Expression System Organism Taxonomy Name',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entity_host_organism.taxonomy_lineage.name',
          },
          {
            key: 'Description',
            value:
              'Members of the NCBI Taxonomy lineage as parent taxonomy names.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: ['Escherichia coli BL21(DE3)', 'Baculovirus'],
          },
        ],
      },
      {
        title: 'Expression System Organism Taxonomy ID',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entity_host_organism.taxonomy_lineage.id',
          },
          {
            key: 'Description',
            value:
              'Members of the NCBI Taxonomy lineage as parent taxonomy idcodes.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: ['469008', '10469'],
          },
        ],
      },
      {
        title: 'Enzyme Classification Number',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_entity.rcsb_ec_lineage.id',
          },
          {
            key: 'Description',
            value:
              'Members of the enzyme classification lineage as parent classification codes.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: ['2', '2.7.1.153'],
          },
          {
            key: 'Iterable',
            value: 'true',
          },
        ],
      },
      {
        title: 'Enzyme Classification Name',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_entity.rcsb_ec_lineage.name',
          },
          {
            key: 'Description',
            value:
              'Members of the enzyme classification lineage as parent classification names.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: [
              'Transferases',
              'phosphatidylinositol-4,5-bisphosphate 3-kinase',
            ],
          },
        ],
      },
      {
        title: 'Identifier - InterPro Protein Family',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_entity_annotation.annotation_id',
          },
          {
            key: 'Description',
            value:
              'Members of the annotation lineage as parent class identifiers.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_entity_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['GO:0005575', 'GO:0005622'],
          },
        ],
      },
      {
        title: 'Identifier - Pfam Protein Family',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_entity_annotation.annotation_id',
          },
          {
            key: 'Description',
            value: 'An identifier for the annotation.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_entity_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['PF00049', 'PF00441'],
          },
        ],
      },
      {
        title: 'Lineage Identifier - Gene Ontology',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_entity_annotation.annotation_lineage.id',
          },
          {
            key: 'Description',
            value:
              'Members of the annotation lineage as parent class identifiers.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_entity_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['GO:0005575', 'GO:0005622'],
          },
        ],
      },
      {
        title: 'Lineage Identifier - CARD',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_entity_annotation.annotation_lineage.id',
          },
          {
            key: 'Description',
            value:
              'Members of the annotation lineage as parent class identifiers.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_entity_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['ARO:3001059', 'ARO:3000015'],
          },
        ],
      },
      {
        title: 'Lineage Identifier - Membrane Proteins of Known 3D StructureD',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_entity_annotation.annotation_lineage.id',
          },
          {
            key: 'Description',
            value:
              'Members of the annotation lineage as parent class identifiers.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_entity_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: 'MONOTOPIC MEMBRANE PROTEINS.Oxidases.Monoamine Oxidase A',
          },
        ],
      },
      {
        title:
          'Lineage Identifier - Orientations of Proteins in Membranes (OPM) Database',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_entity_annotation.annotation_lineage.id',
          },
          {
            key: 'Description',
            value:
              'Members of the annotation lineage as parent class identifiers.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_entity_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value:
              'Transmembrane.Bitopic proteins.Bitopic proteins with NAD(P)-binding Rossmann-fold domains.Flavin containing amine oxidoreductase',
          },
        ],
      },
      {
        title: 'Lineage Name - Gene Ontology',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_entity_annotation.annotation_lineage.name',
          },
          {
            key: 'Description',
            value: 'Members of the annotation lineage as parent class names.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_entity_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['cellular_component', 'intracellular'],
          },
        ],
      },
      {
        title: 'Lineage Name - CARD',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_entity_annotation.annotation_lineage.name',
          },
          {
            key: 'Description',
            value: 'Members of the annotation lineage as parent class names.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_entity_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['SHV-1', 'SHV beta-lactamase'],
          },
        ],
      },
      {
        title: 'Lineage Name - Membrane Proteins of Known 3D Structure',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_entity_annotation.annotation_lineage.name',
          },
          {
            key: 'Description',
            value: 'Members of the annotation lineage as parent class names.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_entity_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: 'Monoamine Oxidase A',
          },
        ],
      },
      {
        title:
          'Lineage Name - Orientations of Proteins in Membranes (OPM) Database',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_entity_annotation.annotation_lineage.name',
          },
          {
            key: 'Description',
            value: 'Members of the annotation lineage as parent class names.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_entity_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: 'Flavin containing amine oxidoreductase',
          },
        ],
      },
      {
        title: 'Chromosomal Locus (Browser ID)',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_genomic_lineage.id',
          },
          {
            key: 'Description',
            value:
              'Automatically assigned ID that uniquely identifies taxonomy, chromosome or gene in the Genome Location Browser.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: ['9606', '568815441', '414325'],
          },
        ],
      },
      {
        title:
          'Count Per Polymer Entity - Cloning artifact, expression tag, linker',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_entity_feature_summary.count',
          },
          {
            key: 'Description',
            value: 'The feature count.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_entity_feature_summary.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['1', '10'],
          },
        ],
      },
      {
        title: 'Count Per Polymer Entity - Modified chemical component',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_entity_feature_summary.count',
          },
          {
            key: 'Description',
            value: 'The feature count.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_entity_feature_summary.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['2', '5'],
          },
        ],
      },
      {
        title:
          'Coverage Fraction Per Polymer Entity - Cloning artifact, expression tag, linker',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_entity_feature_summary.coverage',
          },
          {
            key: 'Description',
            value:
              'The fractional feature coverage relative to the full entity sequence. For instance, the fraction of features such as mutations, artifacts or modified monomers relative to the length of the entity sequence.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_entity_feature_summary.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['0.02', '0.12'],
          },
        ],
      },
      {
        title:
          'Coverage Fraction Per Polymer Entity - Modified chemical component',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_entity_feature_summary.coverage',
          },
          {
            key: 'Description',
            value:
              'The fractional feature coverage relative to the full entity sequence. For instance, the fraction of features such as mutations, artifacts or modified monomers relative to the length of the entity sequence.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_entity_feature_summary.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['0.01', '0.05'],
          },
        ],
      },
    ],
  },
  {
    title: 'Polymer Instance (Chain) Features',
    children: [
      {
        title: 'Lineage Identifier - CATH',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_instance_annotation.annotation_lineage.id',
          },
          {
            key: 'Description',
            value:
              'Members of the annotation lineage as parent class identifiers.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_instance_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['2.30.30.40', '3.30.420.40'],
          },
        ],
      },
      {
        title: 'Lineage Identifier - SCOP',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_instance_annotation.annotation_lineage.id',
          },
          {
            key: 'Description',
            value:
              'Members of the annotation lineage as parent class identifiers.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_instance_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['82057', '53067'],
          },
        ],
      },
      {
        title: 'Lineage Identifier - SCOP2 Family/Superfamily',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_instance_annotation.annotation_lineage.id',
          },
          {
            key: 'Description',
            value:
              'Members of the annotation lineage as parent class identifiers.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_instance_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['3001607', '4000551', '2000122', '1000001'],
          },
        ],
      },
      {
        title: 'Lineage Identifier - ECOD',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_instance_annotation.annotation_lineage.id',
          },
          {
            key: 'Description',
            value:
              'Members of the annotation lineage as parent class identifiers.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_instance_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['100001', '300013'],
          },
        ],
      },
      {
        title: 'Lineage Name - CATH',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_instance_annotation.annotation_lineage.name',
          },
          {
            key: 'Description',
            value: 'Members of the annotation lineage as parent class names.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_instance_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['SH3 Domains', 'ATP Synthase'],
          },
        ],
      },
      {
        title: 'Lineage Name - SCOP',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_instance_annotation.annotation_lineage.name',
          },
          {
            key: 'Description',
            value: 'Members of the annotation lineage as parent class names.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_instance_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: [
              'Prokaryotic SH3-related domain',
              'Actin-like ATPase domain',
            ],
          },
        ],
      },
      {
        title: 'Lineage Name - SCOP2 Family/Superfamily',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_instance_annotation.annotation_lineage.name',
          },
          {
            key: 'Description',
            value: 'Members of the annotation lineage as parent class names.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_instance_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: [
              'Sialidases (neuraminidases)',
              'FAD-dependent thiol oxidase',
              'Globin-like',
              'Sialidases',
            ],
          },
        ],
      },
      {
        title: 'Lineage Name - ECOD',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_instance_annotation.annotation_lineage.name',
          },
          {
            key: 'Description',
            value: 'Members of the annotation lineage as parent class names.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_instance_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['F: Evr1_Alr', 'F: Peptidase_C30_C'],
          },
        ],
      },
      {
        title: 'Count Per Polymer Chain - CIS Peptide linkages',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_instance_feature_summary.count',
          },
          {
            key: 'Description',
            value: 'The feature count per polymer chain.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_instance_feature_summary.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['1', '10'],
          },
        ],
      },
      {
        title: 'Count Per Polymer Chain - Protein helices',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_instance_feature_summary.count',
          },
          {
            key: 'Description',
            value: 'The feature count per polymer chain.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_instance_feature_summary.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['1', '10'],
          },
        ],
      },
      {
        title: 'Count Per Polymer Chain - Beta-sheets',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_instance_feature_summary.count',
          },
          {
            key: 'Description',
            value: 'The feature count per polymer chain.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_instance_feature_summary.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['1', '10'],
          },
        ],
      },
      {
        title:
          'Count Per Polymer Chain - Real space density correlation outlier',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_instance_feature_summary.count',
          },
          {
            key: 'Description',
            value: 'The feature count per polymer chain.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_instance_feature_summary.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['1', '10'],
          },
        ],
      },
      {
        title: 'Count Per Polymer Chain - Real space outlier',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_instance_feature_summary.count',
          },
          {
            key: 'Description',
            value: 'The feature count per polymer chain.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_instance_feature_summary.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['1', '10'],
          },
        ],
      },
      {
        title: 'Coverage Fraction Per Polymer Chain - Protein helices',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_instance_feature_summary.coverage',
          },
          {
            key: 'Description',
            value:
              'The fractional feature coverage relative to the full entity sequence. For instance, the fraction of features such as CATH or SCOP domains, secondary structure elements, unobserved residues, or geometrical outliers relative to the length of the entity sequence.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_instance_feature_summary.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['0.15', '0.45'],
          },
        ],
      },
      {
        title: 'Coverage Fraction Per Polymer Chain - Beta-sheets',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_polymer_instance_feature_summary.coverage',
          },
          {
            key: 'Description',
            value:
              'The fractional feature coverage relative to the full entity sequence. For instance, the fraction of features such as CATH or SCOP domains, secondary structure elements, unobserved residues, or geometrical outliers relative to the length of the entity sequence.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_polymer_instance_feature_summary.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['0.15', '0.45'],
          },
        ],
      },
    ],
  },
  {
    title: 'Nonpolymer Molecular Features',
    children: [
      {
        title: 'Component Identifier',
        data: [
          {
            key: 'Attribute',
            value:
              'rcsb_nonpolymer_entity_container_identifiers.nonpolymer_comp_id',
          },
          {
            key: 'Description',
            value:
              'Non-polymer(ligand) chemical component identifier for the entity in this container.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: ['GTP', 'STN'],
          },
        ],
      },
      {
        title: 'Component Identifier - Investigated Molecule',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_nonpolymer_entity_annotation.comp_id',
          },
          {
            key: 'Description',
            value:
              'Non-polymer(ligand) chemical component identifier for the entity.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_nonpolymer_entity_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['BEZ', 'PQM'],
          },
        ],
      },
      {
        title: 'Binding Affinity Value - IC50',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_binding_affinity.value',
          },
          {
            key: 'Description',
            value:
              'Binding affinity value between a ligand and its target molecule.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_binding_affinity.type',
          },
          {
            key: 'Nested Attribute Minimum Value',
            value: '0.0010',
          },
          {
            key: 'Nested Attribute Maximum Value	',
            value: '8.0e8',
          },

          {
            key: 'Nested Attribute Examples',
            value: ['0.8', '14'],
          },
          {
            key: 'Units',
            value: 'nM',
          },
        ],
      },
      {
        title: 'Binding Affinity Value - EC50',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_binding_affinity.value',
          },
          {
            key: 'Description',
            value:
              'Binding affinity value between a ligand and its target molecule.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_binding_affinity.type',
          },
          {
            key: 'Nested Attribute Minimum Value',
            value: '0.0040',
          },
          {
            key: 'Nested Attribute Maximum Value	',
            value: '3.0e6',
          },

          {
            key: 'Nested Attribute Examples',
            value: ['0.18', '23000'],
          },
          {
            key: 'Units',
            value: 'nM',
          },
        ],
      },
      {
        title: 'Binding Affinity Value - Kd',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_binding_affinity.value',
          },
          {
            key: 'Description',
            value:
              'Binding affinity value between a ligand and its target molecule.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_binding_affinity.type',
          },
          {
            key: 'Nested Attribute Minimum Value',
            value: '6.0e-7',
          },
          {
            key: 'Nested Attribute Maximum Value	',
            value: '1.4e9',
          },

          {
            key: 'Nested Attribute Examples',
            value: ['6.5', '220000'],
          },
          {
            key: 'Units',
            value: 'nM',
          },
        ],
      },
      {
        title: 'Binding Affinity Value - Ka',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_binding_affinity.value',
          },
          {
            key: 'Description',
            value:
              'Binding affinity value between a ligand and its target molecule.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_binding_affinity.type',
          },
          {
            key: 'Nested Attribute Minimum Value',
            value: '0.0011',
          },
          {
            key: 'Nested Attribute Maximum Value	',
            value: '1.0e14',
          },

          {
            key: 'Nested Attribute Examples',
            value: ['7.5', '1700'],
          },
          {
            key: 'Units',
            value: 'M⁻¹',
          },
        ],
      },
      {
        title: 'Binding Affinity Value - Ki',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_binding_affinity.value',
          },
          {
            key: 'Description',
            value:
              'Binding affinity value between a ligand and its target molecule.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_binding_affinity.type',
          },
          {
            key: 'Nested Attribute Minimum Value',
            value: '0.000011',
          },
          {
            key: 'Nested Attribute Maximum Value	',
            value: '1.0e14',
          },

          {
            key: 'Nested Attribute Examples',
            value: ['4', '390000'],
          },
          {
            key: 'Units',
            value: 'nM',
          },
        ],
      },
      {
        title: 'Binding Affinity Value - ΔG',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_binding_affinity.value',
          },
          {
            key: 'Description',
            value:
              'Binding affinity value between a ligand and its target molecule.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_binding_affinity.type',
          },
          {
            key: 'Nested Attribute Minimum Value',
            value: '-1.1e3',
          },
          {
            key: 'Nested Attribute Maximum Value	',
            value: '30',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['17.2', '21.4'],
          },
          {
            key: 'Units',
            value: 'kJ/mol',
          },
        ],
      },
      {
        title: 'Binding Affinity Value - ΔH',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_binding_affinity.value',
          },
          {
            key: 'Description',
            value:
              'Binding affinity value between a ligand and its target molecule.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_binding_affinity.type',
          },
          {
            key: 'Nested Attribute Minimum Value',
            value: '-7.8e2',
          },
          {
            key: 'Nested Attribute Maximum Value	',
            value: '73',
          },

          {
            key: 'Nested Attribute Examples',
            value: ['66.9', '123'],
          },
          {
            key: 'Units',
            value: 'kJ/mol',
          },
        ],
      },
      {
        title: 'Binding Affinity Value - -TΔS',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_binding_affinity.value',
          },
          {
            key: 'Description',
            value:
              'Binding affinity value between a ligand and its target molecule.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_binding_affinity.type',
          },
          {
            key: 'Nested Attribute Minimum Value',
            value: '-3.1e2',
          },
          {
            key: 'Nested Attribute Maximum Value	',
            value: '1.7e3',
          },

          {
            key: 'Nested Attribute Examples',
            value: ['18.1', '47.2'],
          },
          {
            key: 'Units',
            value: 'kJ/mol',
          },
        ],
      },
    ],
  },
  {
    title: 'Oligosaccharide/Branched Molecular Features',
    children: [
      {
        title: 'Branched Entity Type',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_entity_branch.type',
          },
          {
            key: 'Description',
            value: 'The type of this branched oligosaccharide.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: 'oligosaccharide',
          },
        ],
      },
      {
        title: 'Oligosaccharide Entity Description',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_branched_entity.pdbx_description',
          },
          {
            key: 'Description',
            value: 'A description of the branched entity.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: [
              'alpha-D-glucopyranose-(1-6)-beta-D-glucopyranose',
              'beta-D-xylopyranose-(1-4)-beta-D-xylopyranose',
            ],
          },
        ],
      },
      {
        title: 'Oligosaccharide Formula Weight',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_branched_entity.formula_weight',
          },
          {
            key: 'Description',
            value: 'Formula mass (KDa) of the branched entity.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Minimum Value',
            value: '0.27',
          },
          {
            key: 'Maximum Value',
            value: '10.41',
          },
          {
            key: 'Examples',
            value: ['0.745', '1.2'],
          },
        ],
      },
      {
        title: 'Oligosaccharide Linear Descriptor - LINUCS',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_entity_branch_descriptor.descriptor',
          },
          {
            key: 'Description',
            value:
              'This data item contains the descriptor value for this entity.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'pdbx_entity_branch_descriptor.type',
          },

          {
            key: 'Nested Attribute Examples',
            value: [
              '[][a-D-Manp]{[(2+1)][a-D-Manp]{}}',
              '[]{[(4+1)][b-D-GlcpNAc]{[(4+1)][b-D-GlcpNAc]{}}}',
            ],
          },
        ],
      },
      {
        title: 'Oligosaccharide Linear Descriptor - Glycam Condensed Sequence',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_entity_branch_descriptor.descriptor',
          },
          {
            key: 'Description',
            value:
              'This data item contains the descriptor value for this entity.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'pdbx_entity_branch_descriptor.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['DManpa1-2DManpa1-ROH', 'DManpb1-4DGlcpNAcb1-4DGlcpNAcb1-'],
          },
        ],
      },
      {
        title: 'Oligosaccharide Linear Descriptor - WURCS',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_entity_branch_descriptor.descriptor',
          },
          {
            key: 'Description',
            value:
              'This data item contains the descriptor value for this entity.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'pdbx_entity_branch_descriptor.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: [
              'WURCS=2.0/1,2,1/[a1122h-1a_1-5]/1-1/a2-b1',
              'WURCS=2.0/1,2,1/[a2122h-1b_1-5_2*NCC/3=O]/1-1/a4-b1',
            ],
          },
        ],
      },
      {
        title: 'Oligosaccharide Component Count',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_entity_branch.rcsb_branched_component_count',
          },
          {
            key: 'Description',
            value:
              'Number of constituent chemical components in the branched entity.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '2',
          },
          {
            key: 'Maximum Value',
            value: '36',
          },
        ],
      },
      {
        title: 'Oligosaccharide Component List',
        data: [
          {
            key: 'Attribute',
            value:
              'rcsb_branched_entity_container_identifiers.chem_comp_monomers',
          },
          {
            key: 'Description',
            value:
              'Unique list of monomer chemical component identifiers in the entity in this container.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'pdbx_entity_branch_descriptor.type',
          },
          {
            key: 'Examples',
            value: ['NAG', 'MAN', 'GAL'],
          },
          {
            key: 'Iterable',
            value: 'true',
          },
        ],
      },
    ],
  },
  {
    title: 'Assembly Features',
    children: [
      {
        title: 'Number of Non-Hydrogen Atoms per Assembly',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_assembly_info.atom_count',
          },
          {
            key: 'Description',
            value: 'The assembly non-hydrogen atomic coordinate count.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '7',
          },
          {
            key: 'Maximum Value',
            value: '39959280',
          },
        ],
      },
      {
        title: 'Number of Hydrogen Atoms per Assembly',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_assembly_info.hydrogen_atom_count',
          },
          {
            key: 'Description',
            value: 'The assembly hydrogen atomic coordinate count.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '5795340',
          },
        ],
      },
      {
        title: 'Number of Water Molecules per Assembly',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_assembly_info.solvent_atom_count',
          },
          {
            key: 'Description',
            value: 'The assembly non-hydrogen solvent atomic coordinate count.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '78540',
          },
        ],
      },
      {
        title: 'Number of Polymer Residues per Assembly',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_assembly_info.polymer_monomer_count',
          },
          {
            key: 'Description',
            value:
              'The number of polymer monomers in sample entity instances comprising the assembly data set. This is the total count of monomers for all polymer entity instances in the generated assembly coordinate data.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '5340600',
          },
        ],
      },
      {
        title: 'Number of Modeled Polymer Residues per Assembly',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_assembly_info.modeled_polymer_monomer_count',
          },
          {
            key: 'Description',
            value:
              'The number of modeled polymer monomers in the assembly coordinate data. This is the total count of monomers with reported coordinate data for all polymer entity instances in the generated assembly coordinate data.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '5086680',
          },
        ],
      },
      {
        title: 'Number of Unmodeled Polymer Residues per Assembly',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_assembly_info.unmodeled_polymer_monomer_count',
          },
          {
            key: 'Description',
            value:
              'The number of unmodeled polymer monomers in the assembly coordinate data. This is the total count of monomers with unreported coordinate data for all polymer entity instances in the generated assembly coordinate data.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '515880',
          },
        ],
      },
      {
        title: 'Number of Polymer Instances (Chains) per Assembly',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_assembly_info.polymer_entity_instance_count',
          },
          {
            key: 'Description',
            value:
              'The number of polymer instances in the generated assembly data set. This is the total count of polymer entity instances generated in the assembly coordinate data.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '8280',
          },
        ],
      },
      {
        title: 'Number of Non-polymer Instances per Assembly',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_assembly_info.nonpolymer_entity_instance_count',
          },
          {
            key: 'Description',
            value:
              'The number of non-polymer instances in the generated assembly data set exclusive of solvent. This is the total count of non-polymer entity instances generated in the assembly coordinate data.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '4593',
          },
        ],
      },
      {
        title: 'Number of Protein Instances (Chains) per Assembly',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_assembly_info.polymer_entity_instance_count_protein',
          },
          {
            key: 'Description',
            value:
              'The number of protein polymer instances in the generated assembly data set. This is the total count of protein polymer entity instances generated in the assembly coordinate data.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '8280',
          },
        ],
      },
      {
        title: 'Number of DNA Instances (Chains) per Assembly',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_assembly_info.polymer_entity_instance_count_DNA',
          },
          {
            key: 'Description',
            value:
              'The number of DNA polymer instances in the generated assembly data set. This is the total count of DNA polymer entity instances generated in the assembly coordinate data.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '455',
          },
        ],
      },
      {
        title: 'Number of RNA Instances (Chains) per Assembly',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_assembly_info.polymer_entity_instance_count_RNA',
          },
          {
            key: 'Description',
            value:
              'The number of RNA polymer instances in the generated assembly data set. This is the total count of RNA polymer entity instances generated in the assembly coordinate data.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '180',
          },
        ],
      },
      {
        title: 'Number of NA Hybrid Instances (Chains) per Assembly',
        data: [
          {
            key: 'Attribute',
            value:
              'rcsb_assembly_info.polymer_entity_instance_count_nucleic_acid_hybrid',
          },
          {
            key: 'Description',
            value:
              'The number of hybrid nucleic acide polymer instances in the generated assembly data set. This is the total count of hybrid nucleic acid polymer entity instances generated in the assembly coordinate data.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '8',
          },
        ],
      },
      {
        title: 'Assembly Experimental Support',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_struct_assembly_auth_evidence.experimental_support',
          },
          {
            key: 'Description',
            value:
              'Provides the experimental method to determine the state of this assembly',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: [
              'NMR Distance Restraints',
              'NMR relaxation study',
              'SAXS',
              '0assay for oligomerizationss',
              'cross-linking',
              'electron microscopy',
              'equilibrium centrifugation',
              'fluorescence resonance energy transfer',
              'gel filtration',
              'homology',
              'immunoprecipitation',
              'isothermal titration calorimetry',
              'light scattering',
              'mass spectrometry',
              'microscopy',
              'native gel electrophoresis',
              'none',
              'scanning transmission electron microscopy',
              'surface plasmon resonance',
            ],
          },
        ],
      },
      {
        title: 'Assembly Experimental Support Details',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_struct_assembly_auth_evidence.details',
          },
          {
            key: 'Description',
            value:
              'Provides any additional information regarding the evidence of this assembly',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: [
              'Homology to bacteriorhodopsin',
              'Helical filament was observed by negative staining and Cryo-EM',
            ],
          },
        ],
      },
      {
        title: 'Symmetry Symbol',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_struct_symmetry.symbol',
          },
          {
            key: 'Description',
            value:
              'Symmetry symbol refers to point group or helical symmetry of identical polymeric subunits in Schönflies notation. Contains point group symbol (e.g., C2, C5, D2, T, O, I) or H for helical symmetry.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: ['C1', 'D3', 'H'],
          },
        ],
      },
      {
        title: 'Oligomeric State',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_struct_symmetry.oligomeric_state',
          },
          {
            key: 'Description',
            value:
              "Oligomeric state refers to a composition of polymeric subunits in quaternary structure. Quaternary structure may be composed either exclusively of several copies of identical subunits, in which case they are termed homo-oligomers, or alternatively by at least one copy of different subunits (hetero-oligomers). Quaternary structure composed of a single subunit is denoted as 'Monomer'.",
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: ['Monomer', 'Homo 2-mer', 'Hetero 3-mer'],
          },
        ],
      },
      {
        title: 'Symmetry Type',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_struct_symmetry.type',
          },
          {
            key: 'Description',
            value:
              'Symmetry type refers to point group or helical symmetry of identical polymeric subunits. Contains point group types (e.g. Cyclic, Dihedral) or Helical for helical symmetry.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: [
              'Asymmetric',
              'Cyclic',
              'Dihedral',
              'Helical',
              'Icosahedral',
              'Octahedral',
              'Tetrahedral',
            ],
          },
        ],
      },
      {
        title: 'Symmetry Class',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_struct_symmetry.kind',
          },
          {
            key: 'Description',
            value:
              "The granularity at which the symmetry calculation is performed. In 'Global Symmetry' all polymeric subunits in assembly are used. In 'Local Symmetry' only a subset of polymeric subunits is considered. In 'Pseudo Symmetry' the threshold for subunits similarity is relaxed.",
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: ['Global Symmetry', 'Local Symmetry', 'Pseudo Symmetry'],
          },
        ],
      },
      {
        title: 'Protein Symmetry (Browser ID)',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_struct_symmetry_lineage.id',
          },
          {
            key: 'Description',
            value:
              'Automatically assigned ID to uniquely identify the symmetry term in the Protein Symmetry Browser.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: 'Global Symmetry.Cyclic.C2.Homo 2-mer',
          },
        ],
      },
    ],
  },
  {
    title: 'Methods',
    children: [
      {
        title: 'Experimental Method',
        data: [
          {
            key: 'Attribute',
            value: 'exptl.method',
          },
          {
            key: 'Description',
            value: 'The method used in the experiment.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: [
              'X-RAY DIFFRACTION',
              'ELECTRON MICROSCOPY',
              'SOLID-STATE NMR',
              'SOLUTION NMR',
              'NEUTRON DIFFRACTION',
              'ELECTRON CRYSTALLOGRAPHY',
              'POWDER DIFFRACTION',
              'FIBER DIFFRACTION',
              'SOLUTION SCATTERING',
              'EPR',
              'FLUORESCENCE TRANSFER',
              'INFRARED SPECTROSCOPY',
              'THEORETICAL MODEL',
            ],
          },
          {
            key: 'Examples',
            value: [
              'X-RAY DIFFRACTION',
              'NEUTRON DIFFRACTION',
              'ELECTRON CRYSTALLOGRAPHY',
              'ELECTRON MICROSCOPY',
              'SOLUTION NMR',
              'SOLID-STATE NMR',
              'SOLUTION SCATTERING',
              'POWDER DIFFRACTION',
            ],
          },
        ],
      },
      {
        title: 'Experimental Method (Broader Categories)',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.experimental_method',
          },
          {
            key: 'Description',
            value:
              'The category of experimental method(s) used to determine the structure entry.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: [
              'EM',
              'Multiple methods',
              'NMR',
              'Neutron',
              'Other',
              'X-ray',
            ],
          },
          {
            key: 'Examples',
            value: ['X-ray'],
          },
        ],
      },
      {
        title: 'Number of Experimental Methods',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.experimental_method_count',
          },
          {
            key: 'Description',
            value:
              'The number of experimental methods contributing data to the structure determination.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '1',
          },
          {
            key: 'Maximum Value',
            value: '3',
          },
        ],
      },
      {
        title: 'Refinement Resolution',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.resolution_combined',
          },
          {
            key: 'Description',
            value:
              'Combined estimates of experimental resolution contributing to the refined structural model. Resolution reported in "refine.ls_d_res_high" is used for X-RAY DIFFRACTION, FIBER DIFFRACTION, POWDER DIFFRACTION, ELECTRON CRYSTALLOGRAPHY, and NEUTRON DIFFRACTION as identified in "refine.pdbx_refine_id". Resolution reported in "em_3d_reconstruction.resolution" is used for ELECTRON MICROSCOPY. The best value corresponding to "em_3d_reconstruction.resolution_method" == "FSC 0.143 CUT-OFF" is used, if available. If not, the best "em_3d_reconstruction.resolution" value is used. For structures that are not obtained from diffraction-based methods, the resolution values in "refine.ls_d_res_high" are ignored. Multiple values are reported only if multiple methods are used in the structure determination.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Minimum Value',
            value: '0.48',
          },
          {
            key: 'Maximum Value',
            value: '70',
          },
          {
            key: 'Examples',
            value: ['1.11', '2.05'],
          },
        ],
      },
      {
        title: 'Software',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.software_programs_combined',
          },
          {
            key: 'Description',
            value:
              'Combined list of software programs names reported in connection with the production of this entry.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: ['PHASER', 'PHENIX', 'REFMAC'],
          },
        ],
      },
      {
        title: 'Starting Model Type',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_initial_refinement_model.type',
          },
          {
            key: 'Description',
            value:
              'This item describes the type of the initial model was generated',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: [
              'experimental model',
              'in silico model',
              'integrative model',
              'other',
            ],
          },
        ],
      },
      {
        title: 'Starting Model Source',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_initial_refinement_model.source_name',
          },
          {
            key: 'Description',
            value:
              'This item identifies the resource of initial model used for refinement',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: [
              'AlphaFold',
              'ITasser',
              'ModelArchive',
              'Modeller',
              'Other',
              'PDB',
              'RoseTTAFold',
              'SwissModel',
            ],
          },
        ],
      },
      {
        title: 'Starting Model Accession',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_initial_refinement_model.accession_code',
          },
          {
            key: 'Description',
            value:
              'This item identifies an accession code of the resource where the initial model is used',
          },
          {
            key: 'Type',
            value: 'string',
          },
        ],
      },
    ],
  },
  {
    title: 'X-ray Method Details',
    children: [
      {
        title: 'Structure Determination Method',
        data: [
          {
            key: 'Attribute',
            value: 'refine.pdbx_method_to_determine_struct',
          },
          {
            key: 'Description',
            value: 'Method(s) used to determine the structure.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: [
              'AB INITIO PHASING',
              'DM',
              'ISAS',
              'ISIR',
              'ISIRAS',
              'MAD',
              'MIR',
              'MIRAS',
              'MR',
              'SIR',
              'SIRAS',
            ],
          },
        ],
      },
      {
        title: 'Average B Factor',
        data: [
          {
            key: 'Attribute',
            value: 'refine.B_iso_mean',
          },
          {
            key: 'Description',
            value:
              'The mean isotropic displacement parameter (B value) for the coordinate set.',
          },
          {
            key: 'Type',
            value: 'number',
          },

          {
            key: 'Minimum Value',
            value: '-13.76',
          },
          {
            key: 'Maximum Value',
            value: '1274.1',
          },
        ],
      },
      {
        title: 'Refinement R Factors (Observed)',
        data: [
          {
            key: 'Attribute',
            value: 'refine.ls_R_factor_obs',
          },
          {
            key: 'Description',
            value:
              "Residual factor R for reflections that satisfy the resolution limits established by _refine.ls_d_res_high and _refine.ls_d_res_low and the observation limit established by _reflns.observed_criterion. _refine.ls_R_factor_obs should not be confused with _refine.ls_R_factor_R_work; the former reports the results of a refinement in which all observed reflections were used, the latter a refinement in which a subset of the observed reflections were excluded from refinement for the calculation of a 'free' R factor. However, it would be meaningful to quote both values if a 'free' R factor were calculated for most of the refinement, but all of the observed reflections were used in the final rounds of refinement; such a protocol should be explained in _refine.details. sum|F~obs~ - F~calc~| R = --------------------- sum|F~obs~| F~obs~ = the observed structure-factor amplitudes F~calc~ = the calculated structure-factor amplitudes sum is taken over the specified reflections",
          },
          {
            key: 'Type',
            value: 'number',
          },

          {
            key: 'Minimum Value',
            value: '0.04',
          },
          {
            key: 'Maximum Value',
            value: '0.98',
          },
        ],
      },
      {
        title: 'Refinement R Factors (All)',
        data: [
          {
            key: 'Attribute',
            value: 'refine.ls_R_factor_all',
          },
          {
            key: 'Description',
            value:
              'Residual factor R for all reflections that satisfy the resolution limits established by _refine.ls_d_res_high and _refine.ls_d_res_low. sum|F~obs~ - F~calc~| R = --------------------- sum|F~obs~| F~obs~ = the observed structure-factor amplitudes F~calc~ = the calculated structure-factor amplitudes sum is taken over the specified reflections',
          },
          {
            key: 'Type',
            value: 'number',
          },

          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '1',
          },
        ],
      },
      {
        title: 'Refinement R Factors (R Work)',
        data: [
          {
            key: 'Attribute',
            value: 'refine.ls_R_factor_R_work',
          },
          {
            key: 'Description',
            value:
              "Residual factor R for reflections that satisfy the resolution limits established by _refine.ls_d_res_high and _refine.ls_d_res_low and the observation limit established by _reflns.observed_criterion, and that were used as the working reflections (i.e. were included in the refinement) when the refinement included the calculation of a 'free' R factor. Details of how reflections were assigned to the working and test sets are given in _reflns.R_free_details. _refine.ls_R_factor_obs should not be confused with _refine.ls_R_factor_R_work; the former reports the results of a refinement in which all observed reflections were used, the latter a refinement in which a subset of the observed reflections were excluded from refinement for the calculation of a 'free' R factor. However, it would be meaningful to quote both values if a 'free' R factor were calculated for most of the refinement, but all of the observed reflections were used in the final rounds of refinement; such a protocol should be explained in _refine.details. sum|F~obs~ - F~calc~| R = --------------------- sum|F~obs~| F~obs~ = the observed structure-factor amplitudes F~calc~ = the calculated structure-factor amplitudes sum is taken over the specified reflections",
          },
          {
            key: 'Type',
            value: 'number',
          },

          {
            key: 'Minimum Value',
            value: '0.04',
          },
          {
            key: 'Maximum Value',
            value: '0.61',
          },
        ],
      },
      {
        title: 'Refinement R Factors (R Free)',
        data: [
          {
            key: 'Attribute',
            value: 'refine.ls_R_factor_R_free',
          },
          {
            key: 'Description',
            value:
              "Residual factor R for reflections that satisfy the resolution limits established by _refine.ls_d_res_high and _refine.ls_d_res_low and the observation limit established by _reflns.observed_criterion, and that were used as the test reflections (i.e. were excluded from the refinement) when the refinement included the calculation of a 'free' R factor. Details of how reflections were assigned to the working and test sets are given in _reflns.R_free_details. sum|F~obs~ - F~calc~| R = --------------------- sum|F~obs~| F~obs~ = the observed structure-factor amplitudes F~calc~ = the calculated structure-factor amplitudes sum is taken over the specified reflections",
          },
          {
            key: 'Type',
            value: 'number',
          },

          {
            key: 'Minimum Value',
            value: '0.05',
          },
          {
            key: 'Maximum Value',
            value: '0.56',
          },
        ],
      },
      {
        title: 'Structure Refinement Details',
        data: [
          {
            key: 'Attribute',
            value: 'refine.details',
          },
          {
            key: 'Description',
            value: 'Description of special aspects of the refinement process.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: 'HYDROGENS HAVE BEEN ADDED IN THE RIDING POSITIONS',
          },
        ],
      },
    ],
  },
  {
    title: 'X-ray Data Collection Details',
    children: [
      {
        title: 'Data Collection Resolution',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.diffrn_resolution_high.value',
          },
          {
            key: 'Description',
            value: 'The high resolution limit of data collection.',
          },
          {
            key: 'Type',
            value: 'number',
          },

          {
            key: 'Minimum Value',
            value: '0.29',
          },
          {
            key: 'Maximum Value',
            value: '15',
          },
        ],
      },
      {
        title: 'B Wilson Estimate',
        data: [
          {
            key: 'Attribute',
            value: 'reflns.B_iso_Wilson_estimate',
          },
          {
            key: 'Description',
            value:
              'The value of the overall isotropic displacement parameter estimated from the slope of the Wilson plot.',
          },
          {
            key: 'Type',
            value: 'number',
          },

          {
            key: 'Minimum Value',
            value: '-16.8',
          },
          {
            key: 'Maximum Value',
            value: '1119.43',
          },
        ],
      },
      {
        title: 'Overall Redundancy',
        data: [
          {
            key: 'Attribute',
            value: 'reflns.pdbx_redundancy',
          },
          {
            key: 'Description',
            value: 'Overall redundancy for this data set.',
          },
          {
            key: 'Type',
            value: 'number',
          },

          {
            key: 'Minimum Value',
            value: '0.04',
          },
          {
            key: 'Maximum Value',
            value: '26558',
          },
        ],
      },
      {
        title: 'Percentage of Possible Reflections',
        data: [
          {
            key: 'Attribute',
            value: 'reflns.percent_possible_obs',
          },
          {
            key: 'Description',
            value:
              'The percentage of geometrically possible reflections represented by reflections that satisfy the resolution limits established by _reflns.d_resolution_high and _reflns.d_resolution_low and the observation limit established by _reflns.observed_criterion.',
          },
          {
            key: 'Type',
            value: 'number',
          },

          {
            key: 'Minimum Value',
            value: '0.04',
          },
          {
            key: 'Maximum Value',
            value: '100',
          },
        ],
      },
      {
        title: 'R Value for Merging Intensities (Observed)',
        data: [
          {
            key: 'Attribute',
            value: 'reflns.pdbx_Rmerge_I_obs',
          },
          {
            key: 'Description',
            value:
              'The R value for merging intensities satisfying the observed criteria in this data set.',
          },
          {
            key: 'Type',
            value: 'number',
          },

          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '9.9',
          },
        ],
      },
      {
        title: 'Diffraction Detector',
        data: [
          {
            key: 'Attribute',
            value: 'diffrn_detector.type',
          },
          {
            key: 'Description',
            value: 'The make, model or name of the detector device used.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: ['DECTRIS PILATUS 12M', 'RAYONIX MX-325'],
          },
        ],
      },
      {
        title: 'Diffraction Source Synchrotron Site',
        data: [
          {
            key: 'Attribute',
            value: 'diffrn_source.pdbx_synchrotron_site',
          },
          {
            key: 'Description',
            value: 'Synchrotron site.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: ['APS', 'NSLS-II'],
          },
        ],
      },
      {
        title: 'Diffraction Source Synchrotron Beamline',
        data: [
          {
            key: 'Attribute',
            value: 'diffrn_source.pdbx_synchrotron_beamline',
          },
          {
            key: 'Description',
            value: 'Synchrotron beamline.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: ['17-ID-1', '19-ID'],
          },
        ],
      },
      {
        title: 'Diffraction Source General Class',
        data: [
          {
            key: 'Attribute',
            value: 'diffrn_source.source',
          },
          {
            key: 'Description',
            value: 'The general class of the radiation source.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: [
              'sealed X-ray tube',
              'nuclear reactor',
              'spallation source',
              'electron microscope',
              'rotating-anode X-ray tube',
              'synchrotron',
            ],
          },
        ],
      },
      {
        title: 'Diffraction Source Temperature',
        data: [
          {
            key: 'Attribute',
            value: 'diffrn.ambient_temp',
          },
          {
            key: 'Description',
            value:
              'The mean temperature in kelvins at which the intensities were measured.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '446.15',
          },
        ],
      },
      {
        title: 'Minimum Diffraction Wavelength',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.diffrn_radiation_wavelength_minimum',
          },
          {
            key: 'Description',
            value: 'The minimum radiation wavelength in angstroms.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '81798',
          },
        ],
      },
      {
        title: 'Maximum Diffraction Wavelength',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_entry_info.diffrn_radiation_wavelength_maximum',
          },
          {
            key: 'Description',
            value: 'The maximum radiation wavelength in angstroms.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '979257',
          },
        ],
      },
    ],
  },
  {
    title: 'Cell Dimensions and Space Group',
    children: [
      {
        title: 'Length a',
        data: [
          {
            key: 'Attribute',
            value: 'cell.length_a',
          },
          {
            key: 'Description',
            value:
              'Unit-cell length a corresponding to the structure reported in angstroms.',
          },
          {
            key: 'Type',
            value: 'number',
          },

          {
            key: 'Minimum Value',
            value: '1',
          },
          {
            key: 'Maximum Value',
            value: '1255',
          },
        ],
      },
      {
        title: 'Length b',
        data: [
          {
            key: 'Attribute',
            value: 'cell.length_b',
          },
          {
            key: 'Description',
            value:
              'Unit-cell length b corresponding to the structure reported in angstroms.',
          },
          {
            key: 'Type',
            value: 'number',
          },

          {
            key: 'Minimum Value',
            value: '1',
          },
          {
            key: 'Maximum Value',
            value: '1255',
          },
        ],
      },
      {
        title: 'Length c',
        data: [
          {
            key: 'Attribute',
            value: 'cell.length_c',
          },
          {
            key: 'Description',
            value:
              'Unit-cell length c corresponding to the structure reported in angstroms.',
          },
          {
            key: 'Type',
            value: 'number',
          },

          {
            key: 'Minimum Value',
            value: '1',
          },
          {
            key: 'Maximum Value',
            value: '1933.3',
          },
        ],
      },
      {
        title: 'Angle alpha',
        data: [
          {
            key: 'Attribute',
            value: 'cell.angle_alpha',
          },
          {
            key: 'Description',
            value:
              'Unit-cell angle alpha of the reported structure in degrees.',
          },
          {
            key: 'Type',
            value: 'number',
          },

          {
            key: 'Minimum Value',
            value: '58.8',
          },
          {
            key: 'Maximum Value',
            value: '124.81',
          },
        ],
      },
      {
        title: 'Angle beta',
        data: [
          {
            key: 'Attribute',
            value: 'cell.angle_beta',
          },
          {
            key: 'Description',
            value: 'Unit-cell angle beta of the reported structure in degrees.',
          },
          {
            key: 'Type',
            value: 'number',
          },

          {
            key: 'Minimum Value',
            value: '45.4',
          },
          {
            key: 'Maximum Value',
            value: '152.24',
          },
        ],
      },
      {
        title: 'Angle gamma',
        data: [
          {
            key: 'Attribute',
            value: 'cell.angle_gamma',
          },
          {
            key: 'Description',
            value:
              'Unit-cell angle gamma of the reported structure in degrees.',
          },
          {
            key: 'Type',
            value: 'number',
          },

          {
            key: 'Minimum Value',
            value: '57.76',
          },
          {
            key: 'Maximum Value',
            value: '125',
          },
        ],
      },
      {
        title: 'Space Group',
        data: [
          {
            key: 'Attribute',
            value: 'symmetry.space_group_name_H_M',
          },
          {
            key: 'Description',
            value:
              'Hermann-Mauguin space-group symbol. Note that the Hermann-Mauguin symbol does not necessarily contain complete information about the symmetry and the space-group origin. If used, always supply the FULL symbol from International Tables for Crystallography Vol. A (2002) and indicate the origin and the setting if it is not implicit. If there is any doubt that the equivalent positions can be uniquely deduced from this symbol, specify the _symmetry_equiv.pos_as_xyz or _symmetry.space_group_name_Hall data items as well. Leave spaces between symbols referring to different axes.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: [
              'A 1',
              'A 1 2 1',
              'A 2',
              'B 1 1 2',
              'B 2',
              'B 2 21 2',
              'C 2',
              'C 1 2 1',
              'C 21',
              'C 1 21 1',
              'C 2(A 112)',
              'C 2 2 2',
              'C 2 2 21',
              'C 4 21 2',
              'F 2 2 2',
              'F 2 3',
              'F 4 2 2',
              'F 4 3 2',
              'F 41 3 2',
              'I 1 2 1',
              'I 1 21 1',
              'I 2',
              'I 2 2 2',
              'I 2 3',
              'I 21',
              'I 21 3',
              'I 21 21 21',
              'I 4',
              'I 4 2 2',
              'I 4 3 2',
              'I 41',
              'I 41/a',
              'I 41 2 2',
              'I 41 3 2',
              'P 1',
              'P 1-',
              'P 2',
              'P 1 2 1',
              'P 1 1 2',
              'P 2 2 2',
              'P 2 3',
              'P 2 2 21',
              'P 2 21 21',
              'P 21',
              'P 1 21 1',
              'P 1 21/c 1',
              'P 1 1 21',
              'P 21(C)',
              'P 21 2 21',
              'P 21 3',
              'P 21 21 2',
              'P 21 21 2 A',
              'P 21 21 21',
              'P 3',
              'P 3 1 2',
              'P 3 2 1',
              'P 31',
              'P 31 1 2',
              'P 31 2 1',
              'P 32',
              'P 32 1 2',
              'P 32 2 1',
              'P 4',
              'P 4 2 2',
              'P 4 3 2',
              'P 4 21 2',
              'P 41',
              'P 41 2 2',
              'P 41 3 2',
              'P 41 21 2',
              'P 42',
              'P 42 2 2',
              'P 42 3 2',
              'P 42 21 2',
              'P 43',
              'P 43 2 2',
              'P 43 3 2',
              'P 43 21 2',
              'P 6',
              'P 6 2 2',
              'P 61',
              'P 61 2 2',
              'P 62',
              'P 62 2 2',
              'P 63',
              'P 63 2 2',
              'P 64',
              'P 64 2 2',
              'P 65',
              'P 65 2 2',
              'H 3',
              'R 3',
              'H 3 2',
              'R 3 2',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Crystal Properties',
    children: [
      {
        title: 'Density (Matthews)',
        data: [
          {
            key: 'Attribute',
            value: 'exptl_crystal.density_Matthews',
          },
          {
            key: 'Description',
            value:
              'The density of the crystal, expressed as the ratio of the volume of the asymmetric unit to the molecular mass of a monomer of the structure, in units of angstroms^3^ per dalton. Ref: Matthews, B. W. (1968). J. Mol. Biol. 33, 491-497.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '45.14',
          },
          {
            key: 'Examples',
            value: '3.1',
          },
        ],
      },
      {
        title: 'Density (% solvent)',
        data: [
          {
            key: 'Attribute',
            value: 'exptl_crystal.density_percent_sol',
          },
          {
            key: 'Description',
            value:
              'Density value P calculated from the crystal cell and contents, expressed as per cent solvent. P = 1 - (1.23 N MMass) / V N = the number of molecules in the unit cell MMass = the molecular mass of each molecule (gm/mole) V = the volume of the unit cell (A^3^) 1.23 = a conversion factor evaluated as: (0.74 cm^3^/g) (10^24^ A^3^/cm^3^) -------------------------------------- (6.02*10^23^) molecules/mole where 0.74 is an assumed value for the partial specific volume of the molecule',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '96.06',
          },
        ],
      },
      {
        title: 'Temperature',
        data: [
          {
            key: 'Attribute',
            value: 'exptl_crystal_grow.temp',
          },
          {
            key: 'Description',
            value:
              'The temperature in kelvins at which the crystal was grown. If more than one temperature was employed during the crystallization process, the final temperature should be noted here and the protocol involving multiple temperatures should be described in _exptl_crystal_grow.details.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Minimum Value',
            value: '100',
          },
          {
            key: 'Maximum Value',
            value: '328',
          },
        ],
      },
      {
        title: 'pH',
        data: [
          {
            key: 'Attribute',
            value: 'exptl_crystal_grow.pH',
          },
          {
            key: 'Description',
            value:
              'The pH at which the crystal was grown. If more than one pH was employed during the crystallization process, the final pH should be noted here and the protocol involving multiple pH values should be described in _exptl_crystal_grow.details.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '12',
          },
          {
            key: 'Examples',
            value: ['7.4', '7.6', '4.3'],
          },
        ],
      },
      {
        title: 'Crystallization Method',
        data: [
          {
            key: 'Attribute',
            value: 'exptl_crystal_grow.method',
          },
          {
            key: 'Description',
            value: 'The method used to grow the crystals.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: ['MICROBATCH', 'VAPOR DIFFUSION, HANGING DROP'],
          },
        ],
      },
      {
        title: 'Crystallization Details',
        data: [
          {
            key: 'Attribute',
            value: 'exptl_crystal_grow.pdbx_details',
          },
          {
            key: 'Description',
            value: 'Text description of crystal growth procedure.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value:
              'PEG 4000, potassium phosphate, magnesium chloride, cacodylate',
          },
        ],
      },
      {
        title: 'Type of Twinning',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_reflns_twin.type',
          },
          {
            key: 'Description',
            value:
              'There are two types of twinning: merohedral or hemihedral non-merohedral or epitaxial For merohedral twinning the diffraction patterns from the different domains are completely superimposable. Hemihedral twinning is a special case of merohedral twinning. It only involves two distinct domains. Pseudo-merohedral twinning is a subclass merohedral twinning in which lattice is coincidentally superimposable. In the case of non-merohedral or epitaxial twinning the reciprocal lattices do not superimpose exactly. In this case the diffraction pattern consists of two (or more) interpenetrating lattices, which can in principle be separated.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: [
              'epitaxial',
              'hemihedral',
              'merohedral',
              'non-merohedral',
              'pseudo-merohedral',
              'tetartohedral',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'EM Method Details',
    children: [
      {
        title: 'Reconstruction Resolution',
        data: [
          {
            key: 'Attribute',
            value: 'em_3d_reconstruction.resolution',
          },
          {
            key: 'Description',
            value:
              'The final resolution (in angstroms) of the 3D reconstruction.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Minimum Value',
            value: '0.6',
          },
          {
            key: 'Maximum Value',
            value: '70',
          },
          {
            key: 'Examples',
            value: ['8.9', '10'],
          },
        ],
      },
      {
        title: 'EM Specimen Aggregation State',
        data: [
          {
            key: 'Attribute',
            value: 'em_experiment.aggregation_state',
          },
          {
            key: 'Description',
            value: 'The aggregation/assembly state of the imaged specimen.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Enumeration',
            value: [
              'PARTICLE',

              'CELL',
              'FILAMENT',
              'HELICAL ARRAY',
              '2D ARRAY',
              '3D ARRAY',
              'TISSUE',
            ],
          },
        ],
      },
      {
        title: 'EM Reconstruction Method',
        data: [
          {
            key: 'Attribute',
            value: 'em_experiment.reconstruction_method',
          },
          {
            key: 'Description',
            value: 'The reconstruction method used in the EM experiment.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Enumeration',
            value: [
              'CRYSTALLOGRAPHY',
              'HELICAL',
              'SINGLE PARTICLE',
              'SUBTOMOGRAM AVERAGING',
              'TOMOGRAPHY',
            ],
          },
        ],
      },
      {
        title: 'EM Reconstruction Software',
        data: [
          {
            key: 'Attribute',
            value: 'em_software.name',
          },
          {
            key: 'Description',
            value:
              'The name of the software package used, e.g., RELION. Depositors are strongly encouraged to provide a value in this field.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: ['EMAN', 'Imagic', 'Spider', 'Bsoft', 'UCSF-Chimera'],
          },
        ],
      },
      {
        title: 'EM Vitrification Instrument',
        data: [
          {
            key: 'Attribute',
            value: 'em_vitrification.instrument',
          },
          {
            key: 'Description',
            value: 'The type of instrument used in the vitrification process.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Enumeration',
            value: [
              'EMS-002 RAPID IMMERSION FREEZER',
              'FEI VITROBOT MARK I',
              'FEI VITROBOT MARK II',
              'FEI VITROBOT MARK III',
              'FEI VITROBOT MARK IV',
              'GATAN CRYOPLUNGE 3',
              'HOMEMADE PLUNGER',
              'LEICA EM CPC',
              'LEICA EM GP',
              'LEICA KF80',
              'LEICA PLUNGER',
              'REICHERT-JUNG PLUNGER',
              'SPOTITON',
              'ZEISS PLUNGE FREEZER CRYOBOX',
            ],
          },
        ],
      },
      {
        title: 'EM Microscope Model',
        data: [
          {
            key: 'Attribute',
            value: 'em_imaging.microscope_model',
          },
          {
            key: 'Description',
            value: 'The name of the model of microscope.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: [
              'FEI MORGAGNI',
              'FEI POLARA 300',
              'FEI TALOS ARCTICA',
              'FEI TECNAI 10',
              'FEI TECNAI 12',
              'FEI TECNAI 20',
              'FEI TECNAI ARCTICA',
              'FEI TECNAI F20',
              'FEI TECNAI F30',
              'FEI TECNAI SPHERA',
              'FEI TECNAI SPIRIT',
              'FEI TITAN',
              'FEI TITAN KRIOS',
              'FEI/PHILIPS CM10',
              'FEI/PHILIPS CM12',
              'FEI/PHILIPS CM120T',
              'FEI/PHILIPS CM200FEG',
              'FEI/PHILIPS CM200FEG/SOPHIE',
              'FEI/PHILIPS CM200FEG/ST',
              'FEI/PHILIPS CM200FEG/UT',
              'FEI/PHILIPS CM200T',
              'FEI/PHILIPS CM300FEG/HE',
              'FEI/PHILIPS CM300FEG/ST',
              'FEI/PHILIPS CM300FEG/T',
              'FEI/PHILIPS EM400',
              'FEI/PHILIPS EM420',
              'HITACHI EF2000',
              'HITACHI EF3000',
              'HITACHI H-9500SD',
              'HITACHI H3000 UHVEM',
              'HITACHI H7600',
              'HITACHI HF2000',
              'HITACHI HF3000',
              'JEOL 1000EES',
              'JEOL 100B',
              'JEOL 100CX',
              'JEOL 1010',
              'JEOL 1200',
              'JEOL 1200EX',
              'JEOL 1200EXII',
              'JEOL 1230',
              'JEOL 1400',
              'JEOL 2000EX',
              'JEOL 2000EXII',
              'JEOL 2010',
              'JEOL 2010F',
              'JEOL 2010HC',
              'JEOL 2010HT',
              'JEOL 2010UHR',
              'JEOL 2011',
              'JEOL 2100',
              'JEOL 2100F',
              'JEOL 2200FS',
              'JEOL 2200FSC',
              'JEOL 3000SFF',
              'JEOL 3100FEF',
              'JEOL 3100FFC',
              'JEOL 3200FS',
              'JEOL 3200FSC',
              'JEOL 4000',
              'JEOL 4000EX',
              'JEOL CRYO ARM 200',
              'JEOL CRYO ARM 300',
              'JEOL KYOTO-3000SFF',
              'SIEMENS SULEIKA',
              'TFS GLACIOS',
              'TFS KRIOS',
              'TFS TALOS',
              'TFS TALOS F200C',
              'TFS TALOS L120C',
              'TFS TUNDRA',
              'ZEISS LEO912',
              'ZEISS LIBRA120PLUS',
            ],
          },
        ],
      },
      {
        title: 'EM Accelerating Voltage',
        data: [
          {
            key: 'Attribute',
            value: 'em_imaging.accelerating_voltage',
          },
          {
            key: 'Description',
            value: 'A value of accelerating voltage (in kV) used for imaging.',
          },
          {
            key: 'Type',
            value: 'integer',
          },

          {
            key: 'Minimum Value',
            value: '45',
          },
          {
            key: 'Maximum Value',
            value: '400',
          },
        ],
      },
      {
        title: 'EM Imaging Detector',
        data: [
          {
            key: 'Attribute',
            value: 'em_image_recording.film_or_detector_model',
          },
          {
            key: 'Description',
            value:
              'The detector type used for recording images. Usually film , CCD camera or direct electron detector.',
          },
          {
            key: 'Type',
            value: 'string',
          },
        ],
      },
      {
        title: 'EM Point Symmetry Imposed',
        data: [
          {
            key: 'Attribute',
            value: 'em_single_particle_entity.point_symmetry',
          },
          {
            key: 'Description',
            value: 'Point symmetry symbol, either Cn, Dn, T, O, or I',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: ['C1', 'C5', 'C4'],
          },
        ],
      },
      {
        title: 'EM Staining Material',
        data: [
          {
            key: 'Attribute',
            value: 'em_staining.material',
          },
          {
            key: 'Description',
            value: 'The staining material.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: 'Uranyl Acetate',
          },
        ],
      },
    ],
  },
  {
    title: 'NMR Spectrometer Model',
    children: [
      {
        title: 'NMR Spectrometer Manufacturer',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_nmr_spectrometer.manufacturer',
          },
          {
            key: 'Description',
            value: 'The name of the manufacturer of the spectrometer.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: ['Varian', 'Bruker', 'JEOL', 'GE'],
          },
        ],
      },
      {
        title: 'NMR Spectrometer Model',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_nmr_spectrometer.model',
          },
          {
            key: 'Description',
            value: 'The model of the NMR spectrometer.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: [
              'AVANCE',
              'AVANCE II',
              'AVANCE III',
              'AVANCE III HD',
              'WH',
              'WM',
              'AM',
              'AMX',
              'DMX',
              'DRX',
              'MSL',
              'OMEGA',
              'OMEGA PSG',
              'GX',
              'GSX',
              'A',
              'AL',
              'EC',
              'EX',
              'LA',
              'ECP',
              'VXRS',
              'UNITY',
              'UNITYPLUS',
              'INOVA',
            ],
          },
        ],
      },
      {
        title: 'NMR Spectrometer Field Strength',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_nmr_spectrometer.field_strength',
          },
          {
            key: 'Description',
            value: 'The field strength in MHz of the spectrometer',
          },
          {
            key: 'Type',
            value: 'number',
          },

          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '3400',
          },
        ],
      },
      {
        title: 'NMR Method to Determination Structure',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_nmr_refine.method',
          },
          {
            key: 'Description',
            value: 'The method used to determine the structure.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: [
              'simulated annealing',
              'distance geometry simulated annealing molecular dynamics matrix relaxation torsion angle dynamics',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Linked External Resources',
    children: [
      {
        title: 'Experimental Data Resource',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_external_references.type',
          },
          {
            key: 'Description',
            value: 'Internal identifier for external resource.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Enumeration',
            value: [
              'BMRB',
              'EM DATA RESOURCE',
              'NDB',
              'OLDERADO',
              'PROTEIN DIFFRACTION',
              'SB GRID',
            ],
          },
        ],
      },
      {
        title: 'UniProt-mapped Resource',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_uniprot_external_reference.reference_name',
          },
          {
            key: 'Description',
            value: '',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Enumeration',
            value: ['GTEX', 'IMPC', 'PHAROS'],
          },
        ],
      },
    ],
  },
  {
    title: 'Publications Primary',
    children: [
      {
        title: 'Primary Citation Author',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_primary_citation.rcsb_authors',
          },
          {
            key: 'Description',
            value:
              'Names of the authors of the citation; relevant for journal articles, books and book chapters. Names are separated by vertical bars. The family name(s), followed by a comma and including any dynastic components, precedes the first name(s) or initial(s).',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: 'Bleary, Percival R.',
          },
        ],
      },
      {
        title: 'Primary Citation Title',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_primary_citation.title',
          },
          {
            key: 'Description',
            value:
              'The title of the citation; relevant for journal articles, books and book chapters.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value:
              'Structure of diferric duck ovotransferrin at 2.35 Angstroms resolution.',
          },
        ],
      },
      {
        title: 'Primary Citation Journal Name (Abbreviated)',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_primary_citation.rcsb_journal_abbrev',
          },
          {
            key: 'Description',
            value: 'Normalized journal abbreviation.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: 'Nat Struct Mol Biol',
          },
        ],
      },
      {
        title: 'Primary Citation Publication Year',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_primary_citation.year',
          },
          {
            key: 'Description',
            value:
              'The year of the citation; relevant for journal articles, books and book chapters.',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '1969',
          },
          {
            key: 'Maximum Value',
            value: '2023',
          },
        ],
      },
      {
        title: 'Primary Citation DOI',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_primary_citation.pdbx_database_id_DOI',
          },
          {
            key: 'Description',
            value:
              'Document Object Identifier used by doi.org to uniquely specify bibliographic entry.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: '10.2345/S1384107697000225',
          },
        ],
      },
      {
        title: 'Primary Citation Author ORCID',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_primary_citation.rcsb_ORCID_identifiers',
          },
          {
            key: 'Description',
            value:
              'The Open Researcher and Contributor ID (ORCID) identifiers for the citation authors.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: '0000-0002-6681-547X',
          },
        ],
      },
      {
        title: 'PubMed Abstract',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_pubmed_abstract_text',
          },
          {
            key: 'Description',
            value:
              'A concise, accurate and factual mini-version of the paper contents.',
          },
          {
            key: 'Type',
            value: 'string',
          },
        ],
      },
      {
        title: 'MeSH Identifier',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_pubmed_mesh_descriptors_lineage.id',
          },
          {
            key: 'Description',
            value: 'Identifier for MeSH classification term.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: ['E01.370.225.500.388', 'H01.181'],
          },
        ],
      },
      {
        title: 'MeSH Descriptor',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_pubmed_mesh_descriptors_lineage.name',
          },
          {
            key: 'Description',
            value: 'MeSH classification term.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: ['Chemistry', 'Mammals', 'Therapeutic Uses'],
          },
        ],
      },
    ],
  },
  {
    title: 'Publications All',
    children: [
      {
        title: 'Citation Author',
        data: [
          {
            key: 'Attribute',
            value: 'citation.rcsb_authors',
          },
          {
            key: 'Description',
            value:
              'Names of the authors of the citation; relevant for journal articles, books and book chapters. Names are separated by vertical bars. The family name(s), followed by a comma and including any dynastic components, precedes the first name(s) or initial(s).',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: 'Bleary, Percival R.',
          },
        ],
      },
      {
        title: 'Citation Title',
        data: [
          {
            key: 'Attribute',
            value: 'citation.title',
          },
          {
            key: 'Description',
            value:
              'The title of the citation; relevant for journal articles, books and book chapters.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value:
              'Structure of diferric duck ovotransferrin at 2.35 Angstroms resolution.',
          },
        ],
      },
      {
        title: 'Citation Journal Name (Abbreviated)',
        data: [
          {
            key: 'Attribute',
            value: 'citation.rcsb_journal_abbrev',
          },
          {
            key: 'Description',
            value: 'Normalized journal abbreviation.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: 'Nat Struct Mol Biol',
          },
        ],
      },
      {
        title: 'Citation Publication Year',
        data: [
          {
            key: 'Attribute',
            value: 'citation.year',
          },
          {
            key: 'Description',
            value:
              'The year of the citation; relevant for journal articles, books and book chapters.',
          },
          {
            key: 'Type',
            value: 'integer',
          },

          {
            key: 'Minimum Value',
            value: '1947',
          },
          {
            key: 'Maximum Value',
            value: '2023',
          },
        ],
      },
      {
        title: 'Citation DOI',
        data: [
          {
            key: 'Attribute',
            value: 'citation.pdbx_database_id_DOI',
          },
          {
            key: 'Description',
            value:
              'Document Object Identifier used by doi.org to uniquely specify bibliographic entry.',
          },
          {
            key: 'Type',
            value: 'string',
          },

          {
            key: 'Examples',
            value: '10.2345/S1384107697000225',
          },
        ],
      },
    ],
  },
];
export const ChemicalOptions = [
  {
    title: 'Chemical Components',
    children: [
      {
        title: 'Chemical ID(s)',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_container_identifiers.comp_id',
          },
          {
            key: 'Description',
            value: 'The chemical component identifier.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: ['ATP', 'STI'],
          },
          {
            key: 'Iterable',
            value: 'true',
          },
        ],
      },
      {
        title: 'Chemical Name',
        data: [
          {
            key: 'Attribute',
            value: 'chem_comp.name',
          },
          {
            key: 'Description',
            value: 'The full name of the component.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: ['alanine', 'valine', 'adenine', 'cytosine'],
          },
        ],
      },
      {
        title: 'Chemical Synonyms',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_synonyms.name',
          },
          {
            key: 'Description',
            value: 'The synonym of this particular chemical component.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: ['Ursonic acid', 'Talotrexin', '4-oxodecanedioic acid'],
          },
        ],
      },
      {
        title: 'Chemical Component Release Date',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_info.initial_release_date',
          },
          {
            key: 'Description',
            value:
              'The initial date the chemical definition was released in the PDB repository.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Minimum Value',
            value: '5/2/1973',
          },
          {
            key: 'Maximum Value',
            value: '5/23/2023',
          },
          {
            key: 'Examples',
            value: '2016-09-11',
          },
        ],
      },
      {
        title: 'Chemical Component Type',
        data: [
          {
            key: 'Attribute',
            value: 'chem_comp.type',
          },
          {
            key: 'Description',
            value:
              "For standard polymer components, the type of the monomer. Note that monomers that will form polymers are of three types: linking monomers, monomers with some type of N-terminal (or 5') cap and monomers with some type of C-terminal (or 3') cap.",
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: [
              'D-beta-peptide, C-gamma linking',
              'D-gamma-peptide, C-delta linking',
              'D-peptide COOH carboxy terminus',
              'D-peptide NH3 amino terminus',
              'D-peptide linking',
              'D-saccharide',
              'D-saccharide, alpha linking',
              'D-saccharide, beta linking',
              'DNA OH 3 prime terminus',
              'DNA OH 5 prime terminus',
              'DNA linking',
              'L-DNA linking',
              'L-RNA linking',
              'L-beta-peptide, C-gamma linking',
              'L-gamma-peptide, C-delta linking',
              'L-peptide COOH carboxy terminus',
              'L-peptide NH3 amino terminus',
              'L-peptide linking',
              'L-saccharide',
              'L-saccharide, alpha linking',
              'L-saccharide, beta linking',
              'RNA OH 3 prime terminus',
              'RNA OH 5 prime terminus',
              'RNA linking',
              'non-polymer',
              'other',
              'peptide linking',
              'peptide-like',
              'saccharide',
            ],
          },
        ],
      },
      {
        title: 'Drug Target Name',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_target.name',
          },
          {
            key: 'Description',
            value: 'The chemical component target name.',
          },
          {
            key: 'Type',
            value: 'string',
          },
        ],
      },
      {
        title: 'Drug Brand Name',
        data: [
          {
            key: 'Attribute',
            value: 'drugbank_info.brand_names',
          },
          {
            key: 'Description',
            value: 'DrugBank drug brand names.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: 'Atriphos; Striadyne',
          },
        ],
      },
      {
        title: 'InChiKey',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_descriptor.InChIKey',
          },
          {
            key: 'Description',
            value:
              'Standard IUPAC International Chemical Identifier (InChI) descriptor key for the chemical component InChI, the IUPAC International Chemical Identifier, by Stephen R Heller, Alan McNaught, Igor Pletnev, Stephen Stein and Dmitrii Tchekhovskoi, Journal of Cheminformatics, 2015, 7:23',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: 'BNOCDEBUFVJMQI-REOHCLBHSA-N',
          },
        ],
      },
      {
        title: 'Chemical Component Molecular Weight',
        data: [
          {
            key: 'Attribute',
            value: 'chem_comp.formula_weight',
          },
          {
            key: 'Description',
            value: 'Formula mass of the chemical component.',
          },
          {
            key: 'Type',
            value: 'number',
          },
          {
            key: 'Minimum Value',
            value: '2.01',
          },
          {
            key: 'Maximum Value',
            value: '5496.51',
          },
          {
            key: 'Examples',
            value: ['120.12', '450.1'],
          },
        ],
      },
      {
        title: 'Chemical Component Nonhydrogen Atom Count',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_info.atom_count_heavy',
          },
          {
            key: 'Description',
            value: 'Chemical component heavy atom count',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '352',
          },
        ],
      },
      {
        title: 'Chemical Component Chiral Atom Count',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_info.atom_count_chiral',
          },
          {
            key: 'Description',
            value: 'Chemical component chiral atom count',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '48',
          },
        ],
      },
      {
        title: 'Chemical Component Chiral Atom Count',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_info.atom_count_chiral',
          },
          {
            key: 'Description',
            value: 'Chemical component chiral atom count',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '48',
          },
        ],
      },
      {
        title: 'Chemical Component Bond Count',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_info.bond_count',
          },
          {
            key: 'Description',
            value: 'Chemical component total bond count',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '727',
          },
        ],
      },
      {
        title: 'Chemical Component Aromatic Bond Count',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_info.bond_count_aromatic',
          },
          {
            key: 'Description',
            value: 'Chemical component aromatic bond count',
          },
          {
            key: 'Type',
            value: 'integer',
          },
          {
            key: 'Minimum Value',
            value: '0',
          },
          {
            key: 'Maximum Value',
            value: '116',
          },
        ],
      },
      {
        title: 'Identifier Codes - DrugBank',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_related.resource_accession_code',
          },
          {
            key: 'Description',
            value:
              'The resource identifier code for the related chemical reference.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_chem_comp_related.resource_name',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['DB06830', 'DB07255'],
          },
        ],
      },
      {
        title: 'Identifier Codes - CCDC/CSD',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_related.resource_accession_code',
          },
          {
            key: 'Description',
            value:
              'The resource identifier code for the related chemical reference.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_chem_comp_related.resource_name',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['QAXDEZ', 'XEGJEA'],
          },
        ],
      },
      {
        title: 'Identifier Codes - RESID',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_related.resource_accession_code',
          },
          {
            key: 'Description',
            value:
              'The resource identifier code for the related chemical reference.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_chem_comp_related.resource_name',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['AA0078', 'AA0034'],
          },
        ],
      },
      {
        title: 'Identifier Codes - PubChem',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_related.resource_accession_code',
          },
          {
            key: 'Description',
            value:
              'The resource identifier code for the related chemical reference.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_chem_comp_related.resource_name',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['3082729', '5289380'],
          },
        ],
      },
      {
        title: 'Identifier Codes - ChEBI',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_related.resource_accession_code',
          },
          {
            key: 'Description',
            value:
              'The resource identifier code for the related chemical reference.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_chem_comp_related.resource_name',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['CHEBI:151557', 'CHEBI:6198'],
          },
        ],
      },
      {
        title: 'Identifier Codes - ChEMBL',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_related.resource_accession_code',
          },
          {
            key: 'Description',
            value:
              'The resource identifier code for the related chemical reference.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_chem_comp_related.resource_name',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['CHEMBL1165239', 'CHEMBL3330255'],
          },
        ],
      },
      {
        title: 'Identifier Codes - ChEMBL',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_related.resource_accession_code',
          },
          {
            key: 'Description',
            value:
              'The resource identifier code for the related chemical reference.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_chem_comp_related.resource_name',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['2133-34-8', '30565-25-4'],
          },
        ],
      },
      {
        title: 'Identifier Codes - Pharos',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_related.resource_accession_code',
          },
          {
            key: 'Description',
            value:
              'The resource identifier code for the related chemical reference.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_chem_comp_related.resource_name',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['CHEMBL1165239', 'CHEMBL3330255'],
          },
        ],
      },
      {
        title: 'Name - RESID Generating Enzyme',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_annotation.name',
          },
          {
            key: 'Description',
            value: 'A name for the annotation.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_chem_comp_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: [
              'protein N-terminal methyltransferase (EC 2.1.1.-)',
              'autocatalytic',
            ],
          },
        ],
      },
      {
        title: 'Name - RESID Modification',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_annotation.name',
          },
          {
            key: 'Description',
            value: 'A name for the annotation.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_chem_comp_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['Thyroxine', 'N4-methylasparagine'],
          },
        ],
      },
      {
        title: 'Name - Carbohydrate Anomer',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_annotation.name',
          },
          {
            key: 'Description',
            value: 'A name for the annotation.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_chem_comp_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['alpha', 'beta'],
          },
        ],
      },
      {
        title: 'Name - Carbohydrate Isomer',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_annotation.name',
          },
          {
            key: 'Description',
            value: 'A name for the annotation.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_chem_comp_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['D', 'L'],
          },
        ],
      },
      {
        title: 'Name - Carbohydrate Ring',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_annotation.name',
          },
          {
            key: 'Description',
            value: 'A name for the annotation.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_chem_comp_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['pyranose', 'furanose'],
          },
        ],
      },
      {
        title: 'Name - Carbohydrate Primary Carbonyl Group',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_annotation.name',
          },
          {
            key: 'Description',
            value: 'A name for the annotation.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_chem_comp_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['aldose', 'ketose'],
          },
        ],
      },
      {
        title: 'Lineage Name - ATC (WHO)',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_annotation.annotation_lineage.name',
          },
          {
            key: 'Description',
            value: 'Members of the annotation lineage as parent class names.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_chem_comp_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['lisuride', 'etacrynic acid'],
          },
        ],
      },
      {
        title: 'Lineage Name - PSI-MOD',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_annotation.annotation_lineage.name',
          },
          {
            key: 'Description',
            value: 'Members of the annotation lineage as parent class names.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_chem_comp_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: [
              'monomethylated residue',
              'alpha-amino monomethylated residue',
            ],
          },
        ],
      },
      {
        title: 'Lineage Identifier - ATC (WHO)',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_annotation.annotation_lineage.id',
          },
          {
            key: 'Description',
            value: 'Members of the annotation lineage as parent class names.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_chem_comp_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['G02CB02', 'C03CC01'],
          },
        ],
      },
      {
        title: 'Lineage Identifier - PSI-MOD',
        data: [
          {
            key: 'Attribute',
            value: 'rcsb_chem_comp_annotation.annotation_lineage.id',
          },
          {
            key: 'Description',
            value: 'Members of the annotation lineage as parent class names.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Nested Attribute',
            value: 'rcsb_chem_comp_annotation.type',
          },
          {
            key: 'Nested Attribute Examples',
            value: ['MOD:00599', 'MOD:01680'],
          },
        ],
      },
    ],
  },
  {
    title: 'Biologically Interesting Molecules (BIRD)',
    children: [
      {
        title: 'BIRD ID(s)',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_reference_molecule.prd_id',
          },
          {
            key: 'Description',
            value:
              'The value of _pdbx_reference_molecule.prd_id is the unique identifier for the reference molecule in this family. By convention this ID uniquely identifies the reference molecule in in the PDB reference dictionary. The ID has the template form PRD_dddddd (e.g. PRD_000001)',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: ['PRD_000001', 'PRD_0000010'],
          },
          {
            key: 'Iterable',
            value: 'true',
          },
        ],
      },
      {
        title: 'BIRD Name',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_reference_molecule.name',
          },
          {
            key: 'Description',
            value: 'A name of the entity.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Examples',
            value: 'thiostrepton',
          },
        ],
      },
      {
        title: 'BIRD Type',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_reference_molecule.type',
          },
          {
            key: 'Description',
            value: 'Defines the structural classification of the entity.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: [
              'Amino acid',
              'Aminoglycoside',
              'Ansamycin',
              'Anthracycline',
              'Anthraquinone',
              'Chalkophore',
              'Chalkophore, Polypeptide',
              'Chromophore',
              'Cyclic depsipeptide',
              'Cyclic lipopeptide',
              'Cyclic peptide',
              'Glycopeptide',
              'Heterocyclic',
              'Imino sugar',
              'Keto acid',
              'Lipoglycopeptide',
              'Lipopeptide',
              'Macrolide',
              'Non-polymer',
              'Nucleoside',
              'Oligopeptide',
              'Oligosaccharide',
              'Peptaibol',
              'Peptide-like',
              'Polycyclic',
              'Polypeptide',
              'Polysaccharide',
              'Quinolone',
              'Siderophore',
              'Thiolactone',
              'Thiopeptide',
              'Unknown',
            ],
          },
          {
            key: 'Examples',
            value: ['Peptide-like', 'Macrolide'],
          },
        ],
      },
      {
        title: 'BIRD Class',
        data: [
          {
            key: 'Attribute',
            value: 'pdbx_reference_molecule.class',
          },
          {
            key: 'Description',
            value: 'Broadly defines the function of the entity.',
          },
          {
            key: 'Type',
            value: 'string',
          },
          {
            key: 'Enumeration',
            value: [
              'Antagonist',
              'Anthelmintic',
              'Antibiotic',
              'Antibiotic, Anthelmintic',
              'Antibiotic, Antimicrobial',
              'Antibiotic, Antineoplastic',
              'Anticancer',
              'Anticoagulant',
              'Anticoagulant, Antithrombotic',
              'Antifungal',
              'Antigen',
              'Antiinflammatory',
              'Antimicrobial',
              'Antimicrobial, Antiparasitic, Antibiotic',
              'Antimicrobial, Antiretroviral',
              'Antimicrobial, Antitumor',
              'Antineoplastic',
              'Antineoplastic',
              'Antiretroviral',
              'Antithrombotic',
              'Antitumor',
              'Antiviral',
              'CASPASE inhibitor',
              'Chaperone binding',
              'Drug delivery',
              'Enzyme inhibitor',
              'Glycan component',
              'Growth factor',
              'Immunosuppressant',
              'Inducer',
              'Inhibitor',
              'Lantibiotic',
              'Metabolism',
              'Metal transport',
              'Nutrient',
              'Oxidation-reduction',
              'Protein binding',
              'Receptor',
              'Substrate analog',
              'Synthetic opioid',
              'Thrombin inhibitor',
              'Thrombin inhibitor, Trypsin inhibitor',
              'Toxin',
              'Transition state mimetic',
              'Transport activator',
              'Trypsin inhibitor',
              'Unknown',
              'Water retention',
            ],
          },
        ],
      },
    ],
  },
];
