/*
 Navicat Premium Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 80031
 Source Host           : localhost:3306
 Source Schema         : protein_test

 Target Server Type    : MySQL
 Target Server Version : 80031
 File Encoding         : 65001

 Date: 08/03/2023 10:56:54
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for atom_site
-- ----------------------------
DROP TABLE IF EXISTS `atom_site`;
CREATE TABLE `atom_site` (
  `Structure_ID` varchar(10) NOT NULL,
  `B_iso_or_equiv` float DEFAULT NULL,
  `B_iso_or_equiv_esd` float DEFAULT NULL,
  `Cartn_x` float DEFAULT NULL,
  `Cartn_x_esd` float DEFAULT NULL,
  `Cartn_y` float DEFAULT NULL,
  `Cartn_y_esd` float DEFAULT NULL,
  `Cartn_z` float DEFAULT NULL,
  `Cartn_z_esd` float DEFAULT NULL,
  `auth_asym_id` varchar(10) DEFAULT NULL,
  `auth_atom_id` varchar(6) DEFAULT NULL,
  `auth_comp_id` varchar(10) DEFAULT NULL,
  `auth_seq_id` varchar(10) DEFAULT NULL,
  `group_PDB` varchar(10) DEFAULT NULL,
  `id` varchar(10) NOT NULL,
  `label_alt_id` varchar(10) DEFAULT NULL,
  `label_asym_id` varchar(10) DEFAULT NULL,
  `label_atom_id` varchar(6) DEFAULT NULL,
  `label_comp_id` varchar(10) DEFAULT NULL,
  `label_entity_id` varchar(10) DEFAULT NULL,
  `label_seq_id` varchar(10) DEFAULT NULL,
  `occupancy` float DEFAULT NULL,
  `occupancy_esd` float DEFAULT NULL,
  `pdbx_PDB_ins_code` varchar(10) DEFAULT NULL,
  `pdbx_PDB_model_num` varchar(10) DEFAULT NULL,
  `type_symbol` varchar(10) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for atom_site_anisotrop
-- ----------------------------
DROP TABLE IF EXISTS `atom_site_anisotrop`;
CREATE TABLE `atom_site_anisotrop` (
  `Structure_ID` varchar(10) NOT NULL,
  `U_1__1_` float DEFAULT NULL,
  `U_1__1__esd` float DEFAULT NULL,
  `U_1__2_` float DEFAULT NULL,
  `U_1__2__esd` float DEFAULT NULL,
  `U_1__3_` float DEFAULT NULL,
  `U_1__3__esd` float DEFAULT NULL,
  `U_2__2_` float DEFAULT NULL,
  `U_2__2__esd` float DEFAULT NULL,
  `U_2__3_` float DEFAULT NULL,
  `U_2__3__esd` float DEFAULT NULL,
  `U_3__3_` float DEFAULT NULL,
  `U_3__3__esd` float DEFAULT NULL,
  `id` varchar(10) NOT NULL,
  `pdbx_auth_asym_id` varchar(10) DEFAULT NULL,
  `pdbx_auth_atom_id` varchar(6) DEFAULT NULL,
  `pdbx_auth_comp_id` varchar(10) DEFAULT NULL,
  `pdbx_auth_seq_id` varchar(10) DEFAULT NULL,
  `pdbx_label_alt_id` varchar(10) DEFAULT NULL,
  `pdbx_label_asym_id` varchar(10) DEFAULT NULL,
  `pdbx_label_atom_id` varchar(6) DEFAULT NULL,
  `pdbx_label_comp_id` varchar(10) DEFAULT NULL,
  `pdbx_label_seq_id` varchar(10) DEFAULT NULL,
  `type_symbol` varchar(10) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for atom_sites
-- ----------------------------
DROP TABLE IF EXISTS `atom_sites`;
CREATE TABLE `atom_sites` (
  `Structure_ID` varchar(10) NOT NULL,
  `Cartn_transform_axes` varchar(200) DEFAULT NULL,
  `entry_id` varchar(10) NOT NULL,
  `fract_transf_matrix_1__1_` float DEFAULT NULL,
  `fract_transf_matrix_1__2_` float DEFAULT NULL,
  `fract_transf_matrix_1__3_` float DEFAULT NULL,
  `fract_transf_matrix_2__1_` float DEFAULT NULL,
  `fract_transf_matrix_2__2_` float DEFAULT NULL,
  `fract_transf_matrix_2__3_` float DEFAULT NULL,
  `fract_transf_matrix_3__1_` float DEFAULT NULL,
  `fract_transf_matrix_3__2_` float DEFAULT NULL,
  `fract_transf_matrix_3__3_` float DEFAULT NULL,
  `fract_transf_vector_1_` float DEFAULT NULL,
  `fract_transf_vector_2_` float DEFAULT NULL,
  `fract_transf_vector_3_` float DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entry_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for atom_sites_alt
-- ----------------------------
DROP TABLE IF EXISTS `atom_sites_alt`;
CREATE TABLE `atom_sites_alt` (
  `Structure_ID` varchar(10) NOT NULL,
  `details` varchar(200) DEFAULT NULL,
  `id` varchar(10) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for atom_sites_footnote
-- ----------------------------
DROP TABLE IF EXISTS `atom_sites_footnote`;
CREATE TABLE `atom_sites_footnote` (
  `Structure_ID` varchar(10) NOT NULL,
  `id` varchar(10) NOT NULL,
  `text` text,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for atom_type
-- ----------------------------
DROP TABLE IF EXISTS `atom_type`;
CREATE TABLE `atom_type` (
  `Structure_ID` varchar(10) NOT NULL,
  `symbol` varchar(10) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`symbol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for audit
-- ----------------------------
DROP TABLE IF EXISTS `audit`;
CREATE TABLE `audit` (
  `Structure_ID` varchar(10) NOT NULL,
  `creation_date` datetime DEFAULT NULL,
  `revision_id` varchar(10) NOT NULL,
  `update_record` varchar(200) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`revision_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for audit_author
-- ----------------------------
DROP TABLE IF EXISTS `audit_author`;
CREATE TABLE `audit_author` (
  `Structure_ID` varchar(10) NOT NULL,
  `name` varchar(80) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for audit_conform
-- ----------------------------
DROP TABLE IF EXISTS `audit_conform`;
CREATE TABLE `audit_conform` (
  `Structure_ID` varchar(10) NOT NULL,
  `dict_location` varchar(200) DEFAULT NULL,
  `dict_name` varchar(200) NOT NULL,
  `dict_version` varchar(200) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`dict_name`,`dict_version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for cell1
-- ----------------------------
DROP TABLE IF EXISTS `cell1`;
CREATE TABLE `cell1` (
  `Structure_ID` varchar(10) NOT NULL,
  `Z_PDB` int DEFAULT NULL,
  `angle_alpha` float DEFAULT NULL,
  `angle_beta` float DEFAULT NULL,
  `angle_gamma` float DEFAULT NULL,
  `entry_id` varchar(10) NOT NULL,
  `length_a` float DEFAULT NULL,
  `length_b` float DEFAULT NULL,
  `length_c` float DEFAULT NULL,
  `pdbx_unique_axis` varchar(200) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entry_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for chem_comp
-- ----------------------------
DROP TABLE IF EXISTS `chem_comp`;
CREATE TABLE `chem_comp` (
  `Structure_ID` varchar(10) NOT NULL,
  `formula` varchar(200) DEFAULT NULL,
  `formula_weight` float DEFAULT NULL,
  `id` varchar(10) NOT NULL,
  `mon_nstd_flag` varchar(10) DEFAULT NULL,
  `name` text,
  `pdbx_synonyms` text,
  `type` varchar(80) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for citation
-- ----------------------------
DROP TABLE IF EXISTS `citation`;
CREATE TABLE `citation` (
  `Structure_ID` varchar(10) NOT NULL,
  `book_publisher` varchar(200) DEFAULT NULL,
  `country` varchar(80) DEFAULT NULL,
  `id` varchar(10) NOT NULL,
  `journal_abbrev` varchar(175) DEFAULT NULL,
  `journal_id_ASTM` varchar(80) DEFAULT NULL,
  `journal_id_CSD` varchar(80) DEFAULT NULL,
  `journal_id_ISSN` varchar(80) DEFAULT NULL,
  `journal_volume` varchar(80) DEFAULT NULL,
  `page_first` varchar(80) DEFAULT NULL,
  `page_last` varchar(80) DEFAULT NULL,
  `pdbx_database_id_DOI` varchar(62) DEFAULT NULL,
  `pdbx_database_id_PubMed` int DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `year` int DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for citation_author
-- ----------------------------
DROP TABLE IF EXISTS `citation_author`;
CREATE TABLE `citation_author` (
  `Structure_ID` varchar(10) NOT NULL,
  `citation_id` varchar(10) NOT NULL,
  `name` varchar(80) NOT NULL,
  `ordinal` int DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`citation_id`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for columninfo
-- ----------------------------
DROP TABLE IF EXISTS `columninfo`;
CREATE TABLE `columninfo` (
  `tablename` varchar(60) NOT NULL,
  `columnname` varchar(60) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `example` varchar(200) DEFAULT NULL,
  `type` int DEFAULT NULL,
  `table_serial_no` int DEFAULT NULL,
  `column_serial_no` int DEFAULT NULL,
  `WWW_Selection_Criteria` int DEFAULT NULL,
  `WWW_Report_Criteria` int DEFAULT NULL,
  UNIQUE KEY `primary_index` (`tablename`,`columnname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for computing
-- ----------------------------
DROP TABLE IF EXISTS `computing`;
CREATE TABLE `computing` (
  `Structure_ID` varchar(10) NOT NULL,
  `data_collection` varchar(200) DEFAULT NULL,
  `data_reduction` varchar(200) DEFAULT NULL,
  `entry_id` varchar(10) NOT NULL,
  `pdbx_structure_refinement_method` varchar(200) DEFAULT NULL,
  `structure_refinement` varchar(200) DEFAULT NULL,
  `structure_solution` varchar(200) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entry_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for database_2
-- ----------------------------
DROP TABLE IF EXISTS `database_2`;
CREATE TABLE `database_2` (
  `Structure_ID` varchar(10) NOT NULL,
  `database_code` varchar(80) NOT NULL,
  `database_id` varchar(10) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`database_code`,`database_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for database_PDB_caveat
-- ----------------------------
DROP TABLE IF EXISTS `database_PDB_caveat`;
CREATE TABLE `database_PDB_caveat` (
  `Structure_ID` varchar(10) NOT NULL,
  `id` int NOT NULL,
  `text` varchar(200) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for database_PDB_matrix
-- ----------------------------
DROP TABLE IF EXISTS `database_PDB_matrix`;
CREATE TABLE `database_PDB_matrix` (
  `Structure_ID` varchar(10) NOT NULL,
  `entry_id` varchar(10) NOT NULL,
  `origx_1__1_` float DEFAULT NULL,
  `origx_1__2_` float DEFAULT NULL,
  `origx_1__3_` float DEFAULT NULL,
  `origx_2__1_` float DEFAULT NULL,
  `origx_2__2_` float DEFAULT NULL,
  `origx_2__3_` float DEFAULT NULL,
  `origx_3__1_` float DEFAULT NULL,
  `origx_3__2_` float DEFAULT NULL,
  `origx_3__3_` float DEFAULT NULL,
  `origx_vector_1_` float DEFAULT NULL,
  `origx_vector_2_` float DEFAULT NULL,
  `origx_vector_3_` float DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entry_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for database_PDB_remark
-- ----------------------------
DROP TABLE IF EXISTS `database_PDB_remark`;
CREATE TABLE `database_PDB_remark` (
  `Structure_ID` varchar(10) NOT NULL,
  `id` int NOT NULL,
  `text` mediumtext,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for database_PDB_rev
-- ----------------------------
DROP TABLE IF EXISTS `database_PDB_rev`;
CREATE TABLE `database_PDB_rev` (
  `Structure_ID` varchar(10) NOT NULL,
  `date` datetime DEFAULT NULL,
  `date_original` datetime DEFAULT NULL,
  `mod_type` int DEFAULT NULL,
  `num` int NOT NULL,
  `replaces` varchar(80) DEFAULT NULL,
  `status` varchar(80) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for database_PDB_rev_record
-- ----------------------------
DROP TABLE IF EXISTS `database_PDB_rev_record`;
CREATE TABLE `database_PDB_rev_record` (
  `Structure_ID` varchar(10) NOT NULL,
  `details` varchar(200) DEFAULT NULL,
  `rev_num` int NOT NULL,
  `type` varchar(80) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`rev_num`,`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for diffrn
-- ----------------------------
DROP TABLE IF EXISTS `diffrn`;
CREATE TABLE `diffrn` (
  `Structure_ID` varchar(10) NOT NULL,
  `ambient_temp` float DEFAULT NULL,
  `ambient_temp_details` varchar(200) DEFAULT NULL,
  `crystal_id` varchar(10) DEFAULT NULL,
  `id` varchar(10) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for diffrn_detector
-- ----------------------------
DROP TABLE IF EXISTS `diffrn_detector`;
CREATE TABLE `diffrn_detector` (
  `Structure_ID` varchar(10) NOT NULL,
  `details` varchar(200) DEFAULT NULL,
  `detector` varchar(200) DEFAULT NULL,
  `diffrn_id` varchar(10) NOT NULL,
  `pdbx_collection_date` datetime DEFAULT NULL,
  `type` varchar(200) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`diffrn_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for diffrn_radiation
-- ----------------------------
DROP TABLE IF EXISTS `diffrn_radiation`;
CREATE TABLE `diffrn_radiation` (
  `Structure_ID` varchar(10) NOT NULL,
  `diffrn_id` varchar(10) NOT NULL,
  `monochromator` varchar(200) DEFAULT NULL,
  `pdbx_diffrn_protocol` varchar(80) DEFAULT NULL,
  `pdbx_monochromatic_or_laue_m_l` varchar(10) DEFAULT NULL,
  `pdbx_wavelength` varchar(80) DEFAULT NULL,
  `pdbx_wavelength_list` varchar(80) DEFAULT NULL,
  `wavelength_id` varchar(10) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`diffrn_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for diffrn_radiation_wavelength
-- ----------------------------
DROP TABLE IF EXISTS `diffrn_radiation_wavelength`;
CREATE TABLE `diffrn_radiation_wavelength` (
  `Structure_ID` varchar(10) NOT NULL,
  `id` varchar(10) NOT NULL,
  `wavelength` float DEFAULT NULL,
  `wt` float DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for diffrn_source
-- ----------------------------
DROP TABLE IF EXISTS `diffrn_source`;
CREATE TABLE `diffrn_source` (
  `Structure_ID` varchar(10) NOT NULL,
  `diffrn_id` varchar(10) NOT NULL,
  `pdbx_synchrotron_beamline` varchar(80) DEFAULT NULL,
  `pdbx_synchrotron_site` varchar(80) DEFAULT NULL,
  `source` varchar(200) DEFAULT NULL,
  `type` varchar(200) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`diffrn_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for entity
-- ----------------------------
DROP TABLE IF EXISTS `entity`;
CREATE TABLE `entity` (
  `Structure_ID` varchar(10) NOT NULL,
  `details` varchar(219) DEFAULT NULL,
  `formula_weight` float DEFAULT NULL,
  `id` varchar(10) NOT NULL,
  `pdbx_description` text,
  `pdbx_ec` varchar(80) DEFAULT NULL,
  `pdbx_fragment` varchar(119) DEFAULT NULL,
  `pdbx_mutation` varchar(108) DEFAULT NULL,
  `pdbx_number_of_molecules` float DEFAULT NULL,
  `src_method` varchar(10) DEFAULT NULL,
  `type` varchar(11) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for entity_keywords
-- ----------------------------
DROP TABLE IF EXISTS `entity_keywords`;
CREATE TABLE `entity_keywords` (
  `Structure_ID` varchar(10) NOT NULL,
  `entity_id` varchar(10) NOT NULL,
  `text` varchar(200) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for entity_name_com
-- ----------------------------
DROP TABLE IF EXISTS `entity_name_com`;
CREATE TABLE `entity_name_com` (
  `Structure_ID` varchar(10) NOT NULL,
  `entity_id` varchar(10) NOT NULL,
  `name` varchar(200) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entity_id`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for entity_name_sys
-- ----------------------------
DROP TABLE IF EXISTS `entity_name_sys`;
CREATE TABLE `entity_name_sys` (
  `Structure_ID` varchar(10) NOT NULL,
  `entity_id` varchar(10) NOT NULL,
  `name` varchar(200) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entity_id`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for entity_poly
-- ----------------------------
DROP TABLE IF EXISTS `entity_poly`;
CREATE TABLE `entity_poly` (
  `Structure_ID` varchar(10) NOT NULL,
  `entity_id` varchar(10) NOT NULL,
  `nstd_linkage` varchar(10) DEFAULT NULL,
  `nstd_monomer` varchar(10) DEFAULT NULL,
  `type` varchar(30) DEFAULT NULL,
  `pdbx_seq_one_letter_code` text,
  `pdbx_seq_one_letter_code_can` text,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for entity_poly_seq
-- ----------------------------
DROP TABLE IF EXISTS `entity_poly_seq`;
CREATE TABLE `entity_poly_seq` (
  `Structure_ID` varchar(10) NOT NULL,
  `entity_id` varchar(10) NOT NULL,
  `mon_id` varchar(10) NOT NULL,
  `num` int NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entity_id`,`mon_id`,`num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for entity_src_gen
-- ----------------------------
DROP TABLE IF EXISTS `entity_src_gen`;
CREATE TABLE `entity_src_gen` (
  `Structure_ID` varchar(10) NOT NULL,
  `entity_id` varchar(10) NOT NULL,
  `gene_src_common_name` varchar(200) DEFAULT NULL,
  `gene_src_genus` varchar(200) DEFAULT NULL,
  `gene_src_species` varchar(200) DEFAULT NULL,
  `gene_src_strain` varchar(200) DEFAULT NULL,
  `gene_src_tissue` varchar(200) DEFAULT NULL,
  `gene_src_tissue_fraction` varchar(200) DEFAULT NULL,
  `host_org_common_name` varchar(200) DEFAULT NULL,
  `host_org_genus` varchar(200) DEFAULT NULL,
  `host_org_species` varchar(200) DEFAULT NULL,
  `pdbx_description` varchar(200) DEFAULT NULL,
  `pdbx_gene_src_atcc` varchar(200) DEFAULT NULL,
  `pdbx_gene_src_cell` varchar(200) DEFAULT NULL,
  `pdbx_gene_src_cell_line` varchar(200) DEFAULT NULL,
  `pdbx_gene_src_cellular_location` varchar(200) DEFAULT NULL,
  `pdbx_gene_src_fragment` varchar(200) DEFAULT NULL,
  `pdbx_gene_src_gene` varchar(200) DEFAULT NULL,
  `pdbx_gene_src_organ` varchar(200) DEFAULT NULL,
  `pdbx_gene_src_organelle` varchar(200) DEFAULT NULL,
  `pdbx_gene_src_scientific_name` varchar(200) DEFAULT NULL,
  `pdbx_gene_src_variant` varchar(200) DEFAULT NULL,
  `pdbx_host_org_atcc` varchar(200) DEFAULT NULL,
  `pdbx_host_org_cell` varchar(200) DEFAULT NULL,
  `pdbx_host_org_cell_line` varchar(200) DEFAULT NULL,
  `pdbx_host_org_cellular_location` varchar(200) DEFAULT NULL,
  `pdbx_host_org_culture_collection` varchar(200) DEFAULT NULL,
  `pdbx_host_org_gene` varchar(200) DEFAULT NULL,
  `pdbx_host_org_organ` varchar(200) DEFAULT NULL,
  `pdbx_host_org_organelle` varchar(200) DEFAULT NULL,
  `pdbx_host_org_scientific_name` varchar(200) DEFAULT NULL,
  `pdbx_host_org_strain` varchar(200) DEFAULT NULL,
  `pdbx_host_org_tissue` varchar(200) DEFAULT NULL,
  `pdbx_host_org_tissue_fraction` varchar(200) DEFAULT NULL,
  `pdbx_host_org_variant` varchar(200) DEFAULT NULL,
  `pdbx_host_org_vector` varchar(200) DEFAULT NULL,
  `pdbx_host_org_vector_type` varchar(200) DEFAULT NULL,
  `plasmid_details` varchar(200) DEFAULT NULL,
  `plasmid_name` varchar(200) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for entity_src_nat
-- ----------------------------
DROP TABLE IF EXISTS `entity_src_nat`;
CREATE TABLE `entity_src_nat` (
  `Structure_ID` varchar(10) NOT NULL,
  `common_name` varchar(200) DEFAULT NULL,
  `details` varchar(200) DEFAULT NULL,
  `entity_id` varchar(10) NOT NULL,
  `genus` varchar(200) DEFAULT NULL,
  `pdbx_atcc` varchar(200) DEFAULT NULL,
  `pdbx_cell` varchar(200) DEFAULT NULL,
  `pdbx_cell_line` varchar(200) DEFAULT NULL,
  `pdbx_cellular_location` varchar(200) DEFAULT NULL,
  `pdbx_fragment` varchar(200) DEFAULT NULL,
  `pdbx_organ` varchar(200) DEFAULT NULL,
  `pdbx_organelle` varchar(200) DEFAULT NULL,
  `pdbx_organism_scientific` varchar(200) DEFAULT NULL,
  `pdbx_plasmid_details` varchar(200) DEFAULT NULL,
  `pdbx_plasmid_name` varchar(200) DEFAULT NULL,
  `pdbx_secretion` varchar(200) DEFAULT NULL,
  `pdbx_variant` varchar(200) DEFAULT NULL,
  `species` varchar(200) DEFAULT NULL,
  `strain` varchar(200) DEFAULT NULL,
  `tissue` varchar(200) DEFAULT NULL,
  `tissue_fraction` varchar(200) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for entry
-- ----------------------------
DROP TABLE IF EXISTS `entry`;
CREATE TABLE `entry` (
  `Structure_ID` varchar(10) NOT NULL,
  `id` varchar(10) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for exptl
-- ----------------------------
DROP TABLE IF EXISTS `exptl`;
CREATE TABLE `exptl` (
  `Structure_ID` varchar(10) NOT NULL,
  `crystals_number` int DEFAULT NULL,
  `entry_id` varchar(10) NOT NULL,
  `method` varchar(80) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entry_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for exptl_crystal
-- ----------------------------
DROP TABLE IF EXISTS `exptl_crystal`;
CREATE TABLE `exptl_crystal` (
  `Structure_ID` varchar(10) NOT NULL,
  `F_000` int DEFAULT NULL,
  `density_Matthews` float DEFAULT NULL,
  `density_meas` float DEFAULT NULL,
  `density_percent_sol` float DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `id` varchar(10) NOT NULL,
  `preparation` varchar(200) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for exptl_crystal_grow
-- ----------------------------
DROP TABLE IF EXISTS `exptl_crystal_grow`;
CREATE TABLE `exptl_crystal_grow` (
  `Structure_ID` varchar(10) NOT NULL,
  `crystal_id` varchar(10) NOT NULL,
  `method` varchar(200) DEFAULT NULL,
  `pH` float DEFAULT NULL,
  `pdbx_details` text,
  `pdbx_pH_range` varchar(80) DEFAULT NULL,
  `temp` float DEFAULT NULL,
  `temp_details` varchar(200) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`crystal_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for exptl_crystal_grow_comp
-- ----------------------------
DROP TABLE IF EXISTS `exptl_crystal_grow_comp`;
CREATE TABLE `exptl_crystal_grow_comp` (
  `Structure_ID` varchar(10) NOT NULL,
  `conc` varchar(80) DEFAULT NULL,
  `crystal_id` varchar(10) NOT NULL,
  `details` varchar(200) DEFAULT NULL,
  `id` varchar(80) NOT NULL,
  `name` varchar(80) DEFAULT NULL,
  `sol_id` varchar(80) DEFAULT NULL,
  `volume` varchar(80) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`crystal_id`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for geom_angle
-- ----------------------------
DROP TABLE IF EXISTS `geom_angle`;
CREATE TABLE `geom_angle` (
  `Structure_ID` varchar(10) NOT NULL,
  `atom_site_auth_asym_id_1` varchar(10) DEFAULT NULL,
  `atom_site_auth_asym_id_2` varchar(10) DEFAULT NULL,
  `atom_site_auth_asym_id_3` varchar(10) DEFAULT NULL,
  `atom_site_auth_atom_id_1` varchar(6) DEFAULT NULL,
  `atom_site_auth_atom_id_2` varchar(6) DEFAULT NULL,
  `atom_site_auth_atom_id_3` varchar(6) DEFAULT NULL,
  `atom_site_auth_comp_id_1` varchar(10) DEFAULT NULL,
  `atom_site_auth_comp_id_2` varchar(10) DEFAULT NULL,
  `atom_site_auth_comp_id_3` varchar(10) DEFAULT NULL,
  `atom_site_auth_seq_id_1` varchar(10) DEFAULT NULL,
  `atom_site_auth_seq_id_2` varchar(10) DEFAULT NULL,
  `atom_site_auth_seq_id_3` varchar(10) DEFAULT NULL,
  `atom_site_id_1` varchar(10) NOT NULL,
  `atom_site_id_2` varchar(10) NOT NULL,
  `atom_site_id_3` varchar(10) NOT NULL,
  `atom_site_label_alt_id_1` varchar(10) DEFAULT NULL,
  `atom_site_label_alt_id_2` varchar(10) DEFAULT NULL,
  `atom_site_label_alt_id_3` varchar(10) DEFAULT NULL,
  `atom_site_label_asym_id_1` varchar(10) DEFAULT NULL,
  `atom_site_label_asym_id_2` varchar(10) DEFAULT NULL,
  `atom_site_label_asym_id_3` varchar(10) DEFAULT NULL,
  `atom_site_label_atom_id_1` varchar(6) DEFAULT NULL,
  `atom_site_label_atom_id_2` varchar(6) DEFAULT NULL,
  `atom_site_label_atom_id_3` varchar(6) DEFAULT NULL,
  `atom_site_label_comp_id_1` varchar(10) DEFAULT NULL,
  `atom_site_label_comp_id_2` varchar(10) DEFAULT NULL,
  `atom_site_label_comp_id_3` varchar(10) DEFAULT NULL,
  `atom_site_label_seq_id_1` varchar(10) DEFAULT NULL,
  `atom_site_label_seq_id_2` varchar(10) DEFAULT NULL,
  `atom_site_label_seq_id_3` varchar(10) DEFAULT NULL,
  `pdbx_PDB_model_num` varchar(10) DEFAULT NULL,
  `pdbx_atom_site_PDB_ins_code_1` varchar(10) DEFAULT NULL,
  `pdbx_atom_site_PDB_ins_code_2` varchar(10) DEFAULT NULL,
  `pdbx_atom_site_PDB_ins_code_3` varchar(10) DEFAULT NULL,
  `site_symmetry_1` varchar(10) NOT NULL,
  `site_symmetry_2` varchar(10) NOT NULL,
  `site_symmetry_3` varchar(10) NOT NULL,
  `value` float DEFAULT NULL,
  `value_esd` float DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`atom_site_id_1`,`atom_site_id_2`,`atom_site_id_3`,`site_symmetry_1`,`site_symmetry_2`,`site_symmetry_3`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for geom_bond
-- ----------------------------
DROP TABLE IF EXISTS `geom_bond`;
CREATE TABLE `geom_bond` (
  `Structure_ID` varchar(10) NOT NULL,
  `atom_site_auth_asym_id_1` varchar(10) DEFAULT NULL,
  `atom_site_auth_asym_id_2` varchar(10) DEFAULT NULL,
  `atom_site_auth_atom_id_1` varchar(6) DEFAULT NULL,
  `atom_site_auth_atom_id_2` varchar(6) DEFAULT NULL,
  `atom_site_auth_comp_id_1` varchar(10) DEFAULT NULL,
  `atom_site_auth_comp_id_2` varchar(10) DEFAULT NULL,
  `atom_site_auth_seq_id_1` varchar(10) DEFAULT NULL,
  `atom_site_auth_seq_id_2` varchar(10) DEFAULT NULL,
  `atom_site_id_1` varchar(10) NOT NULL,
  `atom_site_id_2` varchar(10) NOT NULL,
  `atom_site_label_alt_id_1` varchar(10) DEFAULT NULL,
  `atom_site_label_alt_id_2` varchar(10) DEFAULT NULL,
  `atom_site_label_asym_id_1` varchar(10) DEFAULT NULL,
  `atom_site_label_asym_id_2` varchar(10) DEFAULT NULL,
  `atom_site_label_atom_id_1` varchar(6) DEFAULT NULL,
  `atom_site_label_atom_id_2` varchar(6) DEFAULT NULL,
  `atom_site_label_comp_id_1` varchar(10) DEFAULT NULL,
  `atom_site_label_comp_id_2` varchar(10) DEFAULT NULL,
  `atom_site_label_seq_id_1` varchar(10) DEFAULT NULL,
  `atom_site_label_seq_id_2` varchar(10) DEFAULT NULL,
  `dist` float DEFAULT NULL,
  `dist_esd` float DEFAULT NULL,
  `pdbx_PDB_model_num` varchar(10) DEFAULT NULL,
  `pdbx_atom_site_PDB_ins_code_1` varchar(10) DEFAULT NULL,
  `pdbx_atom_site_PDB_ins_code_2` varchar(10) DEFAULT NULL,
  `site_symmetry_1` varchar(10) NOT NULL,
  `site_symmetry_2` varchar(10) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`atom_site_id_1`,`atom_site_id_2`,`site_symmetry_1`,`site_symmetry_2`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for geom_contact
-- ----------------------------
DROP TABLE IF EXISTS `geom_contact`;
CREATE TABLE `geom_contact` (
  `Structure_ID` varchar(10) NOT NULL,
  `atom_site_auth_asym_id_1` varchar(10) DEFAULT NULL,
  `atom_site_auth_asym_id_2` varchar(10) DEFAULT NULL,
  `atom_site_auth_atom_id_1` varchar(6) DEFAULT NULL,
  `atom_site_auth_atom_id_2` varchar(6) DEFAULT NULL,
  `atom_site_auth_comp_id_1` varchar(10) DEFAULT NULL,
  `atom_site_auth_comp_id_2` varchar(10) DEFAULT NULL,
  `atom_site_auth_seq_id_1` varchar(10) DEFAULT NULL,
  `atom_site_auth_seq_id_2` varchar(10) DEFAULT NULL,
  `atom_site_id_1` varchar(10) NOT NULL,
  `atom_site_id_2` varchar(10) NOT NULL,
  `atom_site_label_alt_id_1` varchar(10) DEFAULT NULL,
  `atom_site_label_alt_id_2` varchar(10) DEFAULT NULL,
  `atom_site_label_asym_id_1` varchar(10) DEFAULT NULL,
  `atom_site_label_asym_id_2` varchar(10) DEFAULT NULL,
  `atom_site_label_atom_id_1` varchar(6) DEFAULT NULL,
  `atom_site_label_atom_id_2` varchar(6) DEFAULT NULL,
  `atom_site_label_comp_id_1` varchar(10) DEFAULT NULL,
  `atom_site_label_comp_id_2` varchar(10) DEFAULT NULL,
  `atom_site_label_seq_id_1` varchar(10) DEFAULT NULL,
  `atom_site_label_seq_id_2` varchar(10) DEFAULT NULL,
  `dist` float DEFAULT NULL,
  `dist_esd` float DEFAULT NULL,
  `pdbx_PDB_model_num` varchar(10) DEFAULT NULL,
  `pdbx_atom_site_PDB_ins_code_1` varchar(10) DEFAULT NULL,
  `pdbx_atom_site_PDB_ins_code_2` varchar(10) DEFAULT NULL,
  `site_symmetry_1` varchar(10) NOT NULL,
  `site_symmetry_2` varchar(10) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`atom_site_id_1`,`atom_site_id_2`,`site_symmetry_1`,`site_symmetry_2`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for geom_torsion
-- ----------------------------
DROP TABLE IF EXISTS `geom_torsion`;
CREATE TABLE `geom_torsion` (
  `Structure_ID` varchar(10) NOT NULL,
  `atom_site_auth_asym_id_1` varchar(10) DEFAULT NULL,
  `atom_site_auth_asym_id_2` varchar(10) DEFAULT NULL,
  `atom_site_auth_asym_id_3` varchar(10) DEFAULT NULL,
  `atom_site_auth_asym_id_4` varchar(10) DEFAULT NULL,
  `atom_site_auth_atom_id_1` varchar(6) DEFAULT NULL,
  `atom_site_auth_atom_id_2` varchar(6) DEFAULT NULL,
  `atom_site_auth_atom_id_3` varchar(6) DEFAULT NULL,
  `atom_site_auth_atom_id_4` varchar(6) DEFAULT NULL,
  `atom_site_auth_comp_id_1` varchar(10) DEFAULT NULL,
  `atom_site_auth_comp_id_2` varchar(10) DEFAULT NULL,
  `atom_site_auth_comp_id_3` varchar(10) DEFAULT NULL,
  `atom_site_auth_comp_id_4` varchar(10) DEFAULT NULL,
  `atom_site_auth_seq_id_1` varchar(10) DEFAULT NULL,
  `atom_site_auth_seq_id_2` varchar(10) DEFAULT NULL,
  `atom_site_auth_seq_id_3` varchar(10) DEFAULT NULL,
  `atom_site_auth_seq_id_4` varchar(10) DEFAULT NULL,
  `atom_site_id_1` varchar(10) NOT NULL,
  `atom_site_id_2` varchar(10) NOT NULL,
  `atom_site_id_3` varchar(10) NOT NULL,
  `atom_site_id_4` varchar(10) NOT NULL,
  `atom_site_label_alt_id_1` varchar(10) DEFAULT NULL,
  `atom_site_label_alt_id_2` varchar(10) DEFAULT NULL,
  `atom_site_label_alt_id_3` varchar(10) DEFAULT NULL,
  `atom_site_label_alt_id_4` varchar(10) DEFAULT NULL,
  `atom_site_label_asym_id_1` varchar(10) DEFAULT NULL,
  `atom_site_label_asym_id_2` varchar(10) DEFAULT NULL,
  `atom_site_label_asym_id_3` varchar(10) DEFAULT NULL,
  `atom_site_label_asym_id_4` varchar(10) DEFAULT NULL,
  `atom_site_label_atom_id_1` varchar(6) DEFAULT NULL,
  `atom_site_label_atom_id_2` varchar(6) DEFAULT NULL,
  `atom_site_label_atom_id_3` varchar(6) DEFAULT NULL,
  `atom_site_label_atom_id_4` varchar(6) DEFAULT NULL,
  `atom_site_label_comp_id_1` varchar(10) DEFAULT NULL,
  `atom_site_label_comp_id_2` varchar(10) DEFAULT NULL,
  `atom_site_label_comp_id_3` varchar(10) DEFAULT NULL,
  `atom_site_label_comp_id_4` varchar(10) DEFAULT NULL,
  `atom_site_label_seq_id_1` varchar(10) DEFAULT NULL,
  `atom_site_label_seq_id_2` varchar(10) DEFAULT NULL,
  `atom_site_label_seq_id_3` varchar(10) DEFAULT NULL,
  `atom_site_label_seq_id_4` varchar(10) DEFAULT NULL,
  `pdbx_PDB_model_num` varchar(10) DEFAULT NULL,
  `pdbx_atom_site_PDB_ins_code_1` varchar(10) DEFAULT NULL,
  `pdbx_atom_site_PDB_ins_code_2` varchar(10) DEFAULT NULL,
  `pdbx_atom_site_PDB_ins_code_3` varchar(10) DEFAULT NULL,
  `pdbx_atom_site_PDB_ins_code_4` varchar(10) DEFAULT NULL,
  `site_symmetry_1` varchar(10) NOT NULL,
  `site_symmetry_2` varchar(10) NOT NULL,
  `site_symmetry_3` varchar(10) NOT NULL,
  `site_symmetry_4` varchar(10) NOT NULL,
  `value` float DEFAULT NULL,
  `value_esd` float DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`atom_site_id_1`,`atom_site_id_2`,`atom_site_id_3`,`atom_site_id_4`,`site_symmetry_1`,`site_symmetry_2`,`site_symmetry_3`,`site_symmetry_4`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for ndb_struct_conf_na
-- ----------------------------
DROP TABLE IF EXISTS `ndb_struct_conf_na`;
CREATE TABLE `ndb_struct_conf_na` (
  `Structure_ID` varchar(10) NOT NULL,
  `entry_id` varchar(10) NOT NULL,
  `feature` varchar(80) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entry_id`,`feature`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for ndb_struct_na_base_pair
-- ----------------------------
DROP TABLE IF EXISTS `ndb_struct_na_base_pair`;
CREATE TABLE `ndb_struct_na_base_pair` (
  `Structure_ID` varchar(10) NOT NULL,
  `buckle` float DEFAULT NULL,
  `hbond_type_12` int DEFAULT NULL,
  `hbond_type_28` int DEFAULT NULL,
  `i_PDB_ins_code` varchar(10) DEFAULT NULL,
  `i_auth_asym_id` varchar(10) DEFAULT NULL,
  `i_auth_seq_id` varchar(10) DEFAULT NULL,
  `i_label_asym_id` varchar(10) NOT NULL,
  `i_label_comp_id` varchar(10) NOT NULL,
  `i_label_seq_id` varchar(10) NOT NULL,
  `i_symmetry` varchar(10) NOT NULL,
  `j_PDB_ins_code` varchar(10) DEFAULT NULL,
  `j_auth_asym_id` varchar(10) DEFAULT NULL,
  `j_auth_seq_id` varchar(10) DEFAULT NULL,
  `j_label_asym_id` varchar(10) NOT NULL,
  `j_label_comp_id` varchar(10) NOT NULL,
  `j_label_seq_id` varchar(10) NOT NULL,
  `j_symmetry` varchar(10) NOT NULL,
  `model_number` varchar(10) NOT NULL,
  `opening` float DEFAULT NULL,
  `pair_name` varchar(80) DEFAULT NULL,
  `pair_number` int DEFAULT NULL,
  `shear` float DEFAULT NULL,
  `stagger` float DEFAULT NULL,
  `stretch` float DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`i_label_asym_id`,`i_label_comp_id`,`i_label_seq_id`,`i_symmetry`,`j_label_asym_id`,`j_label_comp_id`,`j_label_seq_id`,`j_symmetry`,`model_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for ndb_struct_na_base_pair_step
-- ----------------------------
DROP TABLE IF EXISTS `ndb_struct_na_base_pair_step`;
CREATE TABLE `ndb_struct_na_base_pair_step` (
  `Structure_ID` varchar(10) NOT NULL,
  `helical_rise` float DEFAULT NULL,
  `helical_twist` float DEFAULT NULL,
  `i_PDB_ins_code_1` varchar(10) DEFAULT NULL,
  `i_PDB_ins_code_2` varchar(10) DEFAULT NULL,
  `i_auth_asym_id_1` varchar(10) DEFAULT NULL,
  `i_auth_asym_id_2` varchar(10) DEFAULT NULL,
  `i_auth_seq_id_1` varchar(10) DEFAULT NULL,
  `i_auth_seq_id_2` varchar(10) DEFAULT NULL,
  `i_label_asym_id_1` varchar(10) NOT NULL,
  `i_label_asym_id_2` varchar(10) NOT NULL,
  `i_label_comp_id_1` varchar(10) NOT NULL,
  `i_label_comp_id_2` varchar(10) NOT NULL,
  `i_label_seq_id_1` varchar(10) NOT NULL,
  `i_label_seq_id_2` varchar(10) NOT NULL,
  `i_symmetry_1` varchar(10) NOT NULL,
  `i_symmetry_2` varchar(10) NOT NULL,
  `inclination` float DEFAULT NULL,
  `j_PDB_ins_code_1` varchar(10) DEFAULT NULL,
  `j_PDB_ins_code_2` varchar(10) DEFAULT NULL,
  `j_auth_asym_id_1` varchar(10) DEFAULT NULL,
  `j_auth_asym_id_2` varchar(10) DEFAULT NULL,
  `j_auth_seq_id_1` varchar(10) DEFAULT NULL,
  `j_auth_seq_id_2` varchar(10) DEFAULT NULL,
  `j_label_asym_id_1` varchar(10) NOT NULL,
  `j_label_asym_id_2` varchar(10) NOT NULL,
  `j_label_comp_id_1` varchar(10) NOT NULL,
  `j_label_comp_id_2` varchar(10) NOT NULL,
  `j_label_seq_id_1` varchar(10) NOT NULL,
  `j_label_seq_id_2` varchar(10) NOT NULL,
  `j_symmetry_1` varchar(10) NOT NULL,
  `j_symmetry_2` varchar(10) NOT NULL,
  `model_number` varchar(10) NOT NULL,
  `rise` float DEFAULT NULL,
  `roll` float DEFAULT NULL,
  `shift` float DEFAULT NULL,
  `slide` float DEFAULT NULL,
  `step_name` varchar(80) DEFAULT NULL,
  `step_number` int DEFAULT NULL,
  `tilt` float DEFAULT NULL,
  `tip` float DEFAULT NULL,
  `twist` float DEFAULT NULL,
  `x_displacement` float DEFAULT NULL,
  `y_displacement` float DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`i_label_asym_id_1`,`i_label_asym_id_2`,`i_label_comp_id_1`,`i_label_comp_id_2`,`i_label_seq_id_1`,`i_label_seq_id_2`,`i_symmetry_1`,`i_symmetry_2`,`j_label_asym_id_1`,`j_label_asym_id_2`,`j_label_comp_id_1`,`j_label_comp_id_2`,`j_label_seq_id_1`,`j_label_seq_id_2`,`j_symmetry_1`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_audit
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_audit`;
CREATE TABLE `pdbx_audit` (
  `Structure_ID` varchar(10) NOT NULL,
  `current_version` varchar(10) DEFAULT NULL,
  `entry_id` varchar(10) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entry_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_database_PDB_obs_spr
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_database_PDB_obs_spr`;
CREATE TABLE `pdbx_database_PDB_obs_spr` (
  `Structure_ID` varchar(10) NOT NULL,
  `date` datetime DEFAULT NULL,
  `id` varchar(10) DEFAULT NULL,
  `pdb_id` varchar(10) NOT NULL,
  `replace_pdb_id` varchar(10) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`pdb_id`,`replace_pdb_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_database_related
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_database_related`;
CREATE TABLE `pdbx_database_related` (
  `Structure_ID` varchar(10) NOT NULL,
  `db_id` varchar(80) NOT NULL,
  `db_name` varchar(10) NOT NULL,
  `details` varchar(255) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`db_id`,`db_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_database_status
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_database_status`;
CREATE TABLE `pdbx_database_status` (
  `Structure_ID` varchar(10) NOT NULL,
  `entry_id` varchar(10) DEFAULT NULL,
  `date_author_approval` datetime DEFAULT NULL,
  `date_coordinates` datetime DEFAULT NULL,
  `date_deposition_form` datetime DEFAULT NULL,
  `date_of_PDB_release` datetime DEFAULT NULL,
  `date_submitted` datetime DEFAULT NULL,
  `deposit_site` varchar(10) DEFAULT NULL,
  `name_depositor` varchar(200) DEFAULT NULL,
  `process_site` varchar(10) DEFAULT NULL,
  `rcsb_annotator` varchar(10) DEFAULT NULL,
  `status_code` varchar(10) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_entity_name
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_entity_name`;
CREATE TABLE `pdbx_entity_name` (
  `Structure_ID` varchar(10) NOT NULL,
  `entity_id` varchar(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `name_type` varchar(80) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entity_id`,`name`,`name_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_entity_nonpoly
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_entity_nonpoly`;
CREATE TABLE `pdbx_entity_nonpoly` (
  `Structure_ID` varchar(10) NOT NULL,
  `comp_id` varchar(10) DEFAULT NULL,
  `entity_id` varchar(10) NOT NULL,
  `name` text,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_entity_src_syn
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_entity_src_syn`;
CREATE TABLE `pdbx_entity_src_syn` (
  `Structure_ID` varchar(10) NOT NULL,
  `details` text,
  `entity_id` varchar(10) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_nmr_constraints
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_nmr_constraints`;
CREATE TABLE `pdbx_nmr_constraints` (
  `Structure_ID` varchar(10) NOT NULL,
  `NA_alpha_angle_constraints_total_count` int DEFAULT NULL,
  `NA_beta_angle_constraints_total_count` int DEFAULT NULL,
  `NA_chi_angle_constraints_total_count` int DEFAULT NULL,
  `NA_delta_angle_constraints_total_count` int DEFAULT NULL,
  `NA_epsilon_angle_constraints_total_count` int DEFAULT NULL,
  `NA_gamma_angle_constraints_total_count` int DEFAULT NULL,
  `NA_other_angle_constraints_total_count` int DEFAULT NULL,
  `NA_sugar_pucker_constraints_total_count` int DEFAULT NULL,
  `NOE_constraints_total` int DEFAULT NULL,
  `NOE_interproton_distance_evaluation` varchar(200) DEFAULT NULL,
  `NOE_intraresidue_total_count` int DEFAULT NULL,
  `NOE_long_range_total_count` int DEFAULT NULL,
  `NOE_medium_range_total_count` int DEFAULT NULL,
  `NOE_motional_averaging_correction` varchar(200) DEFAULT NULL,
  `NOE_pseudoatom_corrections` varchar(200) DEFAULT NULL,
  `NOE_sequential_total_count` int DEFAULT NULL,
  `disulfide_bond_constraints_total_count` int DEFAULT NULL,
  `entry_id` varchar(10) NOT NULL,
  `hydrogen_bond_constraints_total_count` int DEFAULT NULL,
  `protein_chi_angle_constraints_total_count` int DEFAULT NULL,
  `protein_other_angle_constraints_total_count` int DEFAULT NULL,
  `protein_phi_angle_constraints_total_count` int DEFAULT NULL,
  `protein_psi_angle_constraints_total_count` int DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entry_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_nmr_details
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_nmr_details`;
CREATE TABLE `pdbx_nmr_details` (
  `Structure_ID` varchar(10) NOT NULL,
  `entry_id` varchar(10) NOT NULL,
  `text` text,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entry_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_nmr_ensemble
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_nmr_ensemble`;
CREATE TABLE `pdbx_nmr_ensemble` (
  `Structure_ID` varchar(10) NOT NULL,
  `average_constraint_violations_per_residue` int DEFAULT NULL,
  `average_constraints_per_residue` int DEFAULT NULL,
  `average_distance_constraint_violation` float DEFAULT NULL,
  `average_torsion_angle_constraint_violation` float DEFAULT NULL,
  `conformer_selection_criteria` varchar(221) DEFAULT NULL,
  `conformers_calculated_total_number` int DEFAULT NULL,
  `conformers_submitted_total_number` int DEFAULT NULL,
  `distance_constraint_violation_method` varchar(200) DEFAULT NULL,
  `entry_id` varchar(10) NOT NULL,
  `maximum_distance_constraint_violation` float DEFAULT NULL,
  `maximum_lower_distance_constraint_violation` float DEFAULT NULL,
  `maximum_torsion_angle_constraint_violation` float DEFAULT NULL,
  `maximum_upper_distance_constraint_violation` float DEFAULT NULL,
  `torsion_angle_constraint_violation_method` varchar(200) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entry_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_nmr_ensemble_rms
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_nmr_ensemble_rms`;
CREATE TABLE `pdbx_nmr_ensemble_rms` (
  `Structure_ID` varchar(10) NOT NULL,
  `atom_type` varchar(80) DEFAULT NULL,
  `bond_angle_rms_dev` float DEFAULT NULL,
  `bond_angle_rms_dev_error` float DEFAULT NULL,
  `chain_range_begin` varchar(10) DEFAULT NULL,
  `chain_range_end` varchar(10) DEFAULT NULL,
  `coord_average_rmsd_method` varchar(200) DEFAULT NULL,
  `covalent_bond_rms_dev` float DEFAULT NULL,
  `covalent_bond_rms_dev_error` float DEFAULT NULL,
  `dihedral_angles_rms_dev` float DEFAULT NULL,
  `dihedral_angles_rms_dev_error` float DEFAULT NULL,
  `distance_rms_dev` float DEFAULT NULL,
  `distance_rms_dev_error` float DEFAULT NULL,
  `entry_id` varchar(10) NOT NULL,
  `improper_torsion_angle_rms_dev` float DEFAULT NULL,
  `improper_torsion_angle_rms_dev_error` float DEFAULT NULL,
  `peptide_planarity_rms_dev` float DEFAULT NULL,
  `peptide_planarity_rms_dev_error` float DEFAULT NULL,
  `residue_range_begin` int DEFAULT NULL,
  `residue_range_end` int DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entry_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_nmr_exptl
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_nmr_exptl`;
CREATE TABLE `pdbx_nmr_exptl` (
  `Structure_ID` varchar(10) NOT NULL,
  `conditions_id` varchar(10) NOT NULL,
  `experiment_id` varchar(10) NOT NULL,
  `solution_id` varchar(10) NOT NULL,
  `type` varchar(80) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`conditions_id`,`experiment_id`,`solution_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_nmr_exptl_sample
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_nmr_exptl_sample`;
CREATE TABLE `pdbx_nmr_exptl_sample` (
  `Structure_ID` varchar(10) NOT NULL,
  `component` varchar(80) NOT NULL,
  `concentration` float DEFAULT NULL,
  `concentration_units` varchar(10) DEFAULT NULL,
  `isotopic_labeling` varchar(80) DEFAULT NULL,
  `solution_id` varchar(10) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`component`,`solution_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_nmr_exptl_sample_conditions
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_nmr_exptl_sample_conditions`;
CREATE TABLE `pdbx_nmr_exptl_sample_conditions` (
  `Structure_ID` varchar(10) NOT NULL,
  `conditions_id` varchar(10) NOT NULL,
  `ionic_strength` varchar(80) DEFAULT NULL,
  `pH` varchar(30) DEFAULT NULL,
  `pressure` varchar(80) DEFAULT NULL,
  `pressure_units` varchar(10) DEFAULT NULL,
  `temperature` varchar(30) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`conditions_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_nmr_refine
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_nmr_refine`;
CREATE TABLE `pdbx_nmr_refine` (
  `Structure_ID` varchar(10) NOT NULL,
  `details` text,
  `entry_id` varchar(10) NOT NULL,
  `method` text,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entry_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_nmr_representative
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_nmr_representative`;
CREATE TABLE `pdbx_nmr_representative` (
  `Structure_ID` varchar(10) NOT NULL,
  `conformer_id` varchar(80) DEFAULT NULL,
  `entry_id` varchar(10) NOT NULL,
  `selection_criteria` varchar(80) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entry_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_nmr_sample_details
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_nmr_sample_details`;
CREATE TABLE `pdbx_nmr_sample_details` (
  `Structure_ID` varchar(10) NOT NULL,
  `contents` varchar(200) DEFAULT NULL,
  `solution_id` varchar(10) NOT NULL,
  `solvent_system` varchar(255) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`solution_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_nmr_software
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_nmr_software`;
CREATE TABLE `pdbx_nmr_software` (
  `Structure_ID` varchar(10) NOT NULL,
  `authors` varchar(200) DEFAULT NULL,
  `classification` varchar(80) NOT NULL,
  `name` varchar(154) NOT NULL,
  `version` varchar(80) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`classification`,`name`,`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_nmr_spectrometer
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_nmr_spectrometer`;
CREATE TABLE `pdbx_nmr_spectrometer` (
  `Structure_ID` varchar(10) NOT NULL,
  `field_strength` float DEFAULT NULL,
  `manufacturer` varchar(80) DEFAULT NULL,
  `model` varchar(80) DEFAULT NULL,
  `spectrometer_id` varchar(10) NOT NULL,
  `type` varchar(80) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`spectrometer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_nonpoly_scheme
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_nonpoly_scheme`;
CREATE TABLE `pdbx_nonpoly_scheme` (
  `Structure_ID` varchar(10) NOT NULL,
  `asym_id` varchar(10) NOT NULL,
  `auth_mon_id` varchar(10) DEFAULT NULL,
  `auth_seq_num` varchar(10) DEFAULT NULL,
  `entity_id` varchar(10) DEFAULT NULL,
  `mon_id` varchar(10) DEFAULT NULL,
  `ndb_seq_num` varchar(10) NOT NULL,
  `pdb_ins_code` varchar(10) DEFAULT NULL,
  `pdb_mon_id` varchar(10) DEFAULT NULL,
  `pdb_seq_num` varchar(10) DEFAULT NULL,
  `pdb_strand_id` varchar(10) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`asym_id`,`ndb_seq_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_poly_seq_scheme
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_poly_seq_scheme`;
CREATE TABLE `pdbx_poly_seq_scheme` (
  `Structure_ID` varchar(10) NOT NULL,
  `asym_id` varchar(10) NOT NULL,
  `auth_mon_id` varchar(10) DEFAULT NULL,
  `auth_seq_num` varchar(10) DEFAULT NULL,
  `entity_id` varchar(10) NOT NULL,
  `mon_id` varchar(10) NOT NULL,
  `ndb_seq_num` varchar(10) DEFAULT NULL,
  `pdb_ins_code` varchar(10) DEFAULT NULL,
  `pdb_mon_id` varchar(10) DEFAULT NULL,
  `pdb_seq_num` varchar(10) DEFAULT NULL,
  `pdb_strand_id` varchar(10) DEFAULT NULL,
  `seq_id` varchar(10) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`asym_id`,`entity_id`,`mon_id`,`seq_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_prerelease_seq
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_prerelease_seq`;
CREATE TABLE `pdbx_prerelease_seq` (
  `Structure_ID` varchar(10) NOT NULL,
  `entity_id` varchar(10) NOT NULL,
  `seq_one_letter_code` text,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_refine
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_refine`;
CREATE TABLE `pdbx_refine` (
  `Structure_ID` varchar(10) NOT NULL,
  `R_factor_all_4sig_cutoff` float DEFAULT NULL,
  `R_factor_all_no_cutoff` float DEFAULT NULL,
  `R_factor_obs_4sig_cutoff` float DEFAULT NULL,
  `R_factor_obs_no_cutoff` float DEFAULT NULL,
  `entry_id` varchar(10) NOT NULL,
  `free_R_factor_4sig_cutoff` float DEFAULT NULL,
  `free_R_factor_no_cutoff` float DEFAULT NULL,
  `free_R_val_test_set_ct_4sig_cutoff` float DEFAULT NULL,
  `free_R_val_test_set_ct_no_cutoff` float DEFAULT NULL,
  `free_R_val_test_set_size_perc_4sig_cutoff` float DEFAULT NULL,
  `free_R_val_test_set_size_perc_no_cutoff` float DEFAULT NULL,
  `number_reflns_obs_4sig_cutoff` float DEFAULT NULL,
  `number_reflns_obs_no_cutoff` float DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entry_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_refine_tls
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_refine_tls`;
CREATE TABLE `pdbx_refine_tls` (
  `Structure_ID` varchar(10) NOT NULL,
  `L_1__1_` float DEFAULT NULL,
  `L_1__2_` float DEFAULT NULL,
  `L_1__3_` float DEFAULT NULL,
  `L_2__2_` float DEFAULT NULL,
  `L_2__3_` float DEFAULT NULL,
  `L_3__3_` float DEFAULT NULL,
  `S_1__1_` float DEFAULT NULL,
  `S_1__2_` float DEFAULT NULL,
  `S_1__3_` float DEFAULT NULL,
  `S_2__1_` float DEFAULT NULL,
  `S_2__2_` float DEFAULT NULL,
  `S_2__3_` float DEFAULT NULL,
  `S_3__1_` float DEFAULT NULL,
  `S_3__2_` float DEFAULT NULL,
  `S_3__3_` float DEFAULT NULL,
  `T_1__1_` float DEFAULT NULL,
  `T_1__2_` float DEFAULT NULL,
  `T_1__3_` float DEFAULT NULL,
  `T_2__2_` float DEFAULT NULL,
  `T_2__3_` float DEFAULT NULL,
  `T_3__3_` float DEFAULT NULL,
  `details` varchar(200) DEFAULT NULL,
  `id` varchar(10) NOT NULL,
  `method` varchar(10) DEFAULT NULL,
  `origin_x` float DEFAULT NULL,
  `origin_y` float DEFAULT NULL,
  `origin_z` float DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_refine_tls_group
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_refine_tls_group`;
CREATE TABLE `pdbx_refine_tls_group` (
  `Structure_ID` varchar(10) NOT NULL,
  `beg_label_asym_id` varchar(10) DEFAULT NULL,
  `beg_label_seq_id` varchar(10) DEFAULT NULL,
  `end_auth_seq_id` varchar(10) DEFAULT NULL,
  `end_label_asym_id` varchar(10) DEFAULT NULL,
  `end_label_seq_id` varchar(10) DEFAULT NULL,
  `id` varchar(10) NOT NULL,
  `refine_tls_id` varchar(10) DEFAULT NULL,
  `selection` varchar(10) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_struct_sheet_hbond
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_struct_sheet_hbond`;
CREATE TABLE `pdbx_struct_sheet_hbond` (
  `Structure_ID` varchar(10) NOT NULL,
  `range_1_PDB_ins_code` varchar(10) DEFAULT NULL,
  `range_1_auth_asym_id` varchar(10) DEFAULT NULL,
  `range_1_auth_atom_id` varchar(6) DEFAULT NULL,
  `range_1_auth_comp_id` varchar(10) DEFAULT NULL,
  `range_1_auth_seq_id` varchar(10) DEFAULT NULL,
  `range_1_label_asym_id` varchar(10) DEFAULT NULL,
  `range_1_label_atom_id` varchar(6) DEFAULT NULL,
  `range_1_label_comp_id` varchar(10) DEFAULT NULL,
  `range_1_label_seq_id` varchar(10) DEFAULT NULL,
  `range_2_PDB_ins_code` varchar(10) DEFAULT NULL,
  `range_2_auth_asym_id` varchar(10) DEFAULT NULL,
  `range_2_auth_atom_id` varchar(6) DEFAULT NULL,
  `range_2_auth_comp_id` varchar(10) DEFAULT NULL,
  `range_2_auth_seq_id` varchar(10) DEFAULT NULL,
  `range_2_label_asym_id` varchar(10) DEFAULT NULL,
  `range_2_label_atom_id` varchar(6) DEFAULT NULL,
  `range_2_label_comp_id` varchar(10) DEFAULT NULL,
  `range_2_label_seq_id` varchar(10) DEFAULT NULL,
  `range_id_1` varchar(10) NOT NULL,
  `range_id_2` varchar(10) NOT NULL,
  `sheet_id` varchar(10) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`range_id_1`,`range_id_2`,`sheet_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for pdbx_xplor_file
-- ----------------------------
DROP TABLE IF EXISTS `pdbx_xplor_file`;
CREATE TABLE `pdbx_xplor_file` (
  `Structure_ID` varchar(10) NOT NULL,
  `param_file` varchar(80) DEFAULT NULL,
  `serial_no` varchar(10) NOT NULL,
  `topol_file` varchar(80) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`serial_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for refine
-- ----------------------------
DROP TABLE IF EXISTS `refine`;
CREATE TABLE `refine` (
  `Structure_ID` varchar(10) NOT NULL,
  `B_iso_max` float DEFAULT NULL,
  `B_iso_mean` float DEFAULT NULL,
  `B_iso_min` float DEFAULT NULL,
  `aniso_B_1__1_` float DEFAULT NULL,
  `aniso_B_1__2_` float DEFAULT NULL,
  `aniso_B_1__3_` float DEFAULT NULL,
  `aniso_B_2__2_` float DEFAULT NULL,
  `aniso_B_2__3_` float DEFAULT NULL,
  `aniso_B_3__3_` float DEFAULT NULL,
  `correlation_coeff_Fo_to_Fc` float DEFAULT NULL,
  `correlation_coeff_Fo_to_Fc_free` float DEFAULT NULL,
  `details` text,
  `entry_id` varchar(10) NOT NULL,
  `ls_R_factor_R_free` float DEFAULT NULL,
  `ls_R_factor_R_free_error` float DEFAULT NULL,
  `ls_R_factor_R_free_error_details` varchar(200) DEFAULT NULL,
  `ls_R_factor_R_work` float DEFAULT NULL,
  `ls_R_factor_all` float DEFAULT NULL,
  `ls_R_factor_obs` float DEFAULT NULL,
  `ls_d_res_high` float DEFAULT NULL,
  `ls_d_res_low` float DEFAULT NULL,
  `ls_number_parameters` int DEFAULT NULL,
  `ls_number_reflns_R_free` int DEFAULT NULL,
  `ls_number_reflns_all` int DEFAULT NULL,
  `ls_number_reflns_obs` int DEFAULT NULL,
  `ls_number_restraints` int DEFAULT NULL,
  `ls_percent_reflns_R_free` float DEFAULT NULL,
  `ls_percent_reflns_obs` float DEFAULT NULL,
  `ls_redundancy_reflns_obs` float DEFAULT NULL,
  `ls_wR_factor_R_free` float DEFAULT NULL,
  `ls_wR_factor_R_work` float DEFAULT NULL,
  `occupancy_max` float DEFAULT NULL,
  `occupancy_min` float DEFAULT NULL,
  `overall_FOM_free_R_set` float DEFAULT NULL,
  `overall_FOM_work_R_set` float DEFAULT NULL,
  `overall_SU_B` float DEFAULT NULL,
  `overall_SU_ML` float DEFAULT NULL,
  `overall_SU_R_Cruickshank_DPI` float DEFAULT NULL,
  `overall_SU_R_free` float DEFAULT NULL,
  `pdbx_R_Free_selection_details` varchar(200) DEFAULT NULL,
  `pdbx_data_cutoff_high_absF` float DEFAULT NULL,
  `pdbx_data_cutoff_high_rms_absF` float DEFAULT NULL,
  `pdbx_data_cutoff_low_absF` float DEFAULT NULL,
  `pdbx_isotropic_thermal_model` varchar(200) DEFAULT NULL,
  `pdbx_ls_cross_valid_method` varchar(200) DEFAULT NULL,
  `pdbx_ls_sigma_F` float DEFAULT NULL,
  `pdbx_ls_sigma_I` float DEFAULT NULL,
  `pdbx_method_to_determine_struct` varchar(200) DEFAULT NULL,
  `pdbx_overall_ESU_R` float DEFAULT NULL,
  `pdbx_overall_ESU_R_Free` float DEFAULT NULL,
  `pdbx_solvent_ion_probe_radii` float DEFAULT NULL,
  `pdbx_solvent_shrinkage_radii` float DEFAULT NULL,
  `pdbx_solvent_vdw_probe_radii` float DEFAULT NULL,
  `pdbx_starting_model` text,
  `pdbx_stereochem_target_val_spec_case` varchar(200) DEFAULT NULL,
  `pdbx_stereochemistry_target_values` varchar(200) DEFAULT NULL,
  `solvent_model_details` varchar(200) DEFAULT NULL,
  `solvent_model_param_bsol` float DEFAULT NULL,
  `solvent_model_param_ksol` float DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entry_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for refine_analyze
-- ----------------------------
DROP TABLE IF EXISTS `refine_analyze`;
CREATE TABLE `refine_analyze` (
  `Structure_ID` varchar(10) NOT NULL,
  `Luzzati_coordinate_error_free` float DEFAULT NULL,
  `Luzzati_coordinate_error_obs` float DEFAULT NULL,
  `Luzzati_d_res_low_free` float DEFAULT NULL,
  `Luzzati_d_res_low_obs` float DEFAULT NULL,
  `Luzzati_sigma_a_free` float DEFAULT NULL,
  `Luzzati_sigma_a_obs` float DEFAULT NULL,
  `entry_id` varchar(10) NOT NULL,
  `number_disordered_residues` float DEFAULT NULL,
  `occupancy_sum_hydrogen` float DEFAULT NULL,
  `occupancy_sum_non_hydrogen` float DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entry_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for refine_B_iso
-- ----------------------------
DROP TABLE IF EXISTS `refine_B_iso`;
CREATE TABLE `refine_B_iso` (
  `Structure_ID` varchar(10) NOT NULL,
  `class` varchar(200) NOT NULL,
  `details` varchar(200) DEFAULT NULL,
  `treatment` varchar(10) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`class`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for refine_hist
-- ----------------------------
DROP TABLE IF EXISTS `refine_hist`;
CREATE TABLE `refine_hist` (
  `Structure_ID` varchar(10) NOT NULL,
  `cycle_id` varchar(10) NOT NULL,
  `d_res_high` float DEFAULT NULL,
  `d_res_low` float DEFAULT NULL,
  `number_atoms_solvent` int DEFAULT NULL,
  `number_atoms_total` int DEFAULT NULL,
  `pdbx_number_atoms_ligand` int DEFAULT NULL,
  `pdbx_number_atoms_nucleic_acid` int DEFAULT NULL,
  `pdbx_number_atoms_protein` int DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`cycle_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for refine_ls_restr
-- ----------------------------
DROP TABLE IF EXISTS `refine_ls_restr`;
CREATE TABLE `refine_ls_restr` (
  `Structure_ID` varchar(10) NOT NULL,
  `dev_ideal` float DEFAULT NULL,
  `dev_ideal_target` float DEFAULT NULL,
  `number` int DEFAULT NULL,
  `type` varchar(80) NOT NULL,
  `weight` float DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for refine_ls_restr_ncs
-- ----------------------------
DROP TABLE IF EXISTS `refine_ls_restr_ncs`;
CREATE TABLE `refine_ls_restr_ncs` (
  `Structure_ID` varchar(10) NOT NULL,
  `dom_id` varchar(10) NOT NULL,
  `ncs_model_details` varchar(200) DEFAULT NULL,
  `pdbx_asym_id` varchar(10) DEFAULT NULL,
  `pdbx_number` int DEFAULT NULL,
  `pdbx_rms` float DEFAULT NULL,
  `pdbx_type` varchar(200) DEFAULT NULL,
  `pdbx_weight` float DEFAULT NULL,
  `rms_dev_B_iso` float DEFAULT NULL,
  `rms_dev_position` float DEFAULT NULL,
  `weight_B_iso` float DEFAULT NULL,
  `weight_position` float DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`dom_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for refine_ls_shell
-- ----------------------------
DROP TABLE IF EXISTS `refine_ls_shell`;
CREATE TABLE `refine_ls_shell` (
  `Structure_ID` varchar(10) NOT NULL,
  `R_factor_R_free` float DEFAULT NULL,
  `R_factor_R_free_error` float DEFAULT NULL,
  `R_factor_R_work` float DEFAULT NULL,
  `d_res_high` float NOT NULL,
  `d_res_low` float NOT NULL,
  `number_reflns_R_free` int DEFAULT NULL,
  `number_reflns_R_work` int DEFAULT NULL,
  `number_reflns_all` int DEFAULT NULL,
  `number_reflns_obs` int DEFAULT NULL,
  `pdbx_total_number_of_bins_used` int DEFAULT NULL,
  `percent_reflns_R_free` float DEFAULT NULL,
  `percent_reflns_obs` float DEFAULT NULL,
  `redundancy_reflns_obs` float DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`d_res_high`,`d_res_low`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for refine_occupancy
-- ----------------------------
DROP TABLE IF EXISTS `refine_occupancy`;
CREATE TABLE `refine_occupancy` (
  `Structure_ID` varchar(10) NOT NULL,
  `class` varchar(200) NOT NULL,
  `treatment` varchar(10) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`class`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for reflns
-- ----------------------------
DROP TABLE IF EXISTS `reflns`;
CREATE TABLE `reflns` (
  `Structure_ID` varchar(10) NOT NULL,
  `B_iso_Wilson_estimate` float DEFAULT NULL,
  `R_free_details` varchar(200) DEFAULT NULL,
  `d_resolution_high` float DEFAULT NULL,
  `d_resolution_low` float DEFAULT NULL,
  `entry_id` varchar(10) NOT NULL,
  `limit_h_max` int DEFAULT NULL,
  `limit_h_min` int DEFAULT NULL,
  `limit_k_max` int DEFAULT NULL,
  `limit_k_min` int DEFAULT NULL,
  `limit_l_max` int DEFAULT NULL,
  `limit_l_min` int DEFAULT NULL,
  `number_all` int DEFAULT NULL,
  `number_obs` int DEFAULT NULL,
  `observed_criterion_F_max` float DEFAULT NULL,
  `observed_criterion_F_min` float DEFAULT NULL,
  `observed_criterion_sigma_F` float DEFAULT NULL,
  `observed_criterion_sigma_I` float DEFAULT NULL,
  `pdbx_Rmerge_I_obs` float DEFAULT NULL,
  `pdbx_Rsym_value` float DEFAULT NULL,
  `pdbx_chi_squared` float DEFAULT NULL,
  `pdbx_netI_over_av_sigmaI` float DEFAULT NULL,
  `pdbx_redundancy` float DEFAULT NULL,
  `pdbx_scaling_rejects` int DEFAULT NULL,
  `percent_possible_obs` float DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entry_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for reflns_shell
-- ----------------------------
DROP TABLE IF EXISTS `reflns_shell`;
CREATE TABLE `reflns_shell` (
  `Structure_ID` varchar(10) NOT NULL,
  `Rmerge_I_obs` float DEFAULT NULL,
  `d_res_high` float NOT NULL,
  `d_res_low` float NOT NULL,
  `meanI_over_sigI_obs` float DEFAULT NULL,
  `number_measured_all` int DEFAULT NULL,
  `number_measured_obs` int DEFAULT NULL,
  `number_unique_all` int DEFAULT NULL,
  `number_unique_obs` int DEFAULT NULL,
  `pdbx_Rsym_value` float DEFAULT NULL,
  `pdbx_chi_squared` float DEFAULT NULL,
  `pdbx_redundancy` float DEFAULT NULL,
  `percent_possible_all` float DEFAULT NULL,
  `percent_possible_obs` float DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`d_res_high`,`d_res_low`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for software
-- ----------------------------
DROP TABLE IF EXISTS `software`;
CREATE TABLE `software` (
  `Structure_ID` varchar(10) NOT NULL,
  `citation_id` varchar(10) DEFAULT NULL,
  `classification` varchar(80) NOT NULL,
  `contact_author` varchar(80) DEFAULT NULL,
  `contact_author_email` varchar(80) DEFAULT NULL,
  `date` varchar(80) DEFAULT NULL,
  `language` varchar(80) DEFAULT NULL,
  `location` varchar(80) DEFAULT NULL,
  `name` varchar(200) NOT NULL,
  `type` varchar(80) DEFAULT NULL,
  `version` varchar(80) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`classification`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for struct
-- ----------------------------
DROP TABLE IF EXISTS `struct`;
CREATE TABLE `struct` (
  `Structure_ID` varchar(10) NOT NULL,
  `entry_id` varchar(10) NOT NULL,
  `pdbx_descriptor` text,
  `pdbx_model_details` text,
  `title` text,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entry_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for struct_asym
-- ----------------------------
DROP TABLE IF EXISTS `struct_asym`;
CREATE TABLE `struct_asym` (
  `Structure_ID` varchar(10) NOT NULL,
  `details` varchar(200) DEFAULT NULL,
  `entity_id` varchar(10) DEFAULT NULL,
  `id` varchar(10) NOT NULL,
  `pdbx_blank_PDB_chainid_flag` varchar(10) DEFAULT NULL,
  `pdbx_modified` varchar(200) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for struct_biol
-- ----------------------------
DROP TABLE IF EXISTS `struct_biol`;
CREATE TABLE `struct_biol` (
  `Structure_ID` varchar(10) NOT NULL,
  `details` text,
  `id` varchar(80) NOT NULL,
  `pdbx_parent_biol_id` varchar(10) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for struct_biol_gen
-- ----------------------------
DROP TABLE IF EXISTS `struct_biol_gen`;
CREATE TABLE `struct_biol_gen` (
  `Structure_ID` varchar(10) NOT NULL,
  `asym_id` varchar(10) NOT NULL,
  `biol_id` varchar(80) NOT NULL,
  `details` varchar(200) DEFAULT NULL,
  `pdbx_full_symmetry_operation` varchar(18) DEFAULT NULL,
  `symmetry` varchar(10) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`asym_id`,`biol_id`,`symmetry`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for struct_conf
-- ----------------------------
DROP TABLE IF EXISTS `struct_conf`;
CREATE TABLE `struct_conf` (
  `Structure_ID` varchar(10) NOT NULL,
  `beg_auth_asym_id` varchar(10) DEFAULT NULL,
  `beg_auth_comp_id` varchar(10) DEFAULT NULL,
  `beg_auth_seq_id` varchar(10) DEFAULT NULL,
  `beg_label_asym_id` varchar(10) DEFAULT NULL,
  `beg_label_comp_id` varchar(10) DEFAULT NULL,
  `beg_label_seq_id` varchar(10) DEFAULT NULL,
  `conf_type_id` varchar(10) DEFAULT NULL,
  `details` varchar(200) DEFAULT NULL,
  `end_auth_asym_id` varchar(10) DEFAULT NULL,
  `end_auth_comp_id` varchar(10) DEFAULT NULL,
  `end_auth_seq_id` varchar(10) DEFAULT NULL,
  `end_label_asym_id` varchar(10) DEFAULT NULL,
  `end_label_comp_id` varchar(10) DEFAULT NULL,
  `end_label_seq_id` varchar(10) DEFAULT NULL,
  `id` varchar(10) NOT NULL,
  `pdbx_PDB_helix_class` varchar(10) DEFAULT NULL,
  `pdbx_PDB_helix_id` varchar(10) DEFAULT NULL,
  `pdbx_PDB_helix_length` varchar(10) DEFAULT NULL,
  `pdbx_beg_PDB_ins_code` varchar(10) DEFAULT NULL,
  `pdbx_end_PDB_ins_code` varchar(10) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for struct_conf_type
-- ----------------------------
DROP TABLE IF EXISTS `struct_conf_type`;
CREATE TABLE `struct_conf_type` (
  `Structure_ID` varchar(10) NOT NULL,
  `criteria` varchar(200) DEFAULT NULL,
  `id` varchar(10) NOT NULL,
  `reference` varchar(200) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for struct_conn
-- ----------------------------
DROP TABLE IF EXISTS `struct_conn`;
CREATE TABLE `struct_conn` (
  `Structure_ID` varchar(10) NOT NULL,
  `conn_type_id` varchar(16) DEFAULT NULL,
  `details` varchar(200) DEFAULT NULL,
  `id` varchar(18) NOT NULL,
  `pdbx_PDB_id` varchar(10) DEFAULT NULL,
  `pdbx_ptnr1_PDB_ins_code` varchar(10) DEFAULT NULL,
  `pdbx_ptnr1_label_alt_id` varchar(10) DEFAULT NULL,
  `pdbx_ptnr1_standard_comp_id` varchar(10) DEFAULT NULL,
  `pdbx_ptnr2_PDB_ins_code` varchar(10) DEFAULT NULL,
  `pdbx_ptnr2_label_alt_id` varchar(10) DEFAULT NULL,
  `pdbx_ptnr3_PDB_ins_code` varchar(10) DEFAULT NULL,
  `pdbx_ptnr3_label_alt_id` varchar(10) DEFAULT NULL,
  `pdbx_ptnr3_label_asym_id` varchar(10) DEFAULT NULL,
  `pdbx_ptnr3_label_atom_id` varchar(6) DEFAULT NULL,
  `pdbx_ptnr3_label_comp_id` varchar(10) DEFAULT NULL,
  `pdbx_ptnr3_label_seq_id` varchar(10) DEFAULT NULL,
  `ptnr1_auth_asym_id` varchar(10) DEFAULT NULL,
  `ptnr1_auth_comp_id` varchar(10) DEFAULT NULL,
  `ptnr1_auth_seq_id` varchar(10) DEFAULT NULL,
  `ptnr1_label_asym_id` varchar(10) DEFAULT NULL,
  `ptnr1_label_atom_id` varchar(6) DEFAULT NULL,
  `ptnr1_label_comp_id` varchar(10) DEFAULT NULL,
  `ptnr1_label_seq_id` varchar(10) DEFAULT NULL,
  `ptnr1_symmetry` varchar(10) DEFAULT NULL,
  `ptnr2_auth_asym_id` varchar(10) DEFAULT NULL,
  `ptnr2_auth_comp_id` varchar(10) DEFAULT NULL,
  `ptnr2_auth_seq_id` varchar(10) DEFAULT NULL,
  `ptnr2_label_asym_id` varchar(10) DEFAULT NULL,
  `ptnr2_label_atom_id` varchar(6) DEFAULT NULL,
  `ptnr2_label_comp_id` varchar(10) DEFAULT NULL,
  `ptnr2_label_seq_id` varchar(10) DEFAULT NULL,
  `ptnr2_symmetry` varchar(10) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for struct_conn_type
-- ----------------------------
DROP TABLE IF EXISTS `struct_conn_type`;
CREATE TABLE `struct_conn_type` (
  `Structure_ID` varchar(10) NOT NULL,
  `criteria` varchar(200) DEFAULT NULL,
  `id` varchar(16) NOT NULL,
  `reference` varchar(200) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for struct_keywords
-- ----------------------------
DROP TABLE IF EXISTS `struct_keywords`;
CREATE TABLE `struct_keywords` (
  `Structure_ID` varchar(10) NOT NULL,
  `entry_id` varchar(10) NOT NULL,
  `pdbx_keywords` varchar(80) DEFAULT NULL,
  `text` text,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entry_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for struct_mon_prot_cis
-- ----------------------------
DROP TABLE IF EXISTS `struct_mon_prot_cis`;
CREATE TABLE `struct_mon_prot_cis` (
  `Structure_ID` varchar(10) NOT NULL,
  `auth_asym_id` varchar(10) DEFAULT NULL,
  `auth_comp_id` varchar(10) DEFAULT NULL,
  `auth_seq_id` varchar(10) DEFAULT NULL,
  `label_alt_id` varchar(10) NOT NULL,
  `label_asym_id` varchar(10) NOT NULL,
  `label_comp_id` varchar(10) NOT NULL,
  `label_seq_id` varchar(10) NOT NULL,
  `pdbx_PDB_ins_code` varchar(10) DEFAULT NULL,
  `pdbx_PDB_ins_code_2` varchar(10) DEFAULT NULL,
  `pdbx_PDB_model_num` varchar(10) NOT NULL,
  `pdbx_auth_asym_id_2` varchar(10) DEFAULT NULL,
  `pdbx_auth_comp_id_2` varchar(10) DEFAULT NULL,
  `pdbx_auth_seq_id_2` varchar(10) DEFAULT NULL,
  `pdbx_id` varchar(10) DEFAULT NULL,
  `pdbx_label_asym_id_2` varchar(10) DEFAULT NULL,
  `pdbx_label_comp_id_2` varchar(10) DEFAULT NULL,
  `pdbx_label_seq_id_2` varchar(10) DEFAULT NULL,
  `pdbx_omega_angle` varchar(10) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`label_alt_id`,`label_asym_id`,`label_comp_id`,`label_seq_id`,`pdbx_PDB_model_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for struct_ncs_dom
-- ----------------------------
DROP TABLE IF EXISTS `struct_ncs_dom`;
CREATE TABLE `struct_ncs_dom` (
  `Structure_ID` varchar(10) NOT NULL,
  `details` varchar(200) DEFAULT NULL,
  `id` varchar(10) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for struct_ncs_dom_lim
-- ----------------------------
DROP TABLE IF EXISTS `struct_ncs_dom_lim`;
CREATE TABLE `struct_ncs_dom_lim` (
  `Structure_ID` varchar(10) NOT NULL,
  `beg_label_alt_id` varchar(10) NOT NULL,
  `beg_label_asym_id` varchar(10) NOT NULL,
  `beg_label_comp_id` varchar(10) NOT NULL,
  `beg_label_seq_id` varchar(10) NOT NULL,
  `dom_id` varchar(10) NOT NULL,
  `end_label_alt_id` varchar(10) NOT NULL,
  `end_label_asym_id` varchar(10) NOT NULL,
  `end_label_comp_id` varchar(10) NOT NULL,
  `end_label_seq_id` varchar(10) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`beg_label_alt_id`,`beg_label_asym_id`,`beg_label_comp_id`,`beg_label_seq_id`,`dom_id`,`end_label_alt_id`,`end_label_asym_id`,`end_label_comp_id`,`end_label_seq_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for struct_ncs_oper
-- ----------------------------
DROP TABLE IF EXISTS `struct_ncs_oper`;
CREATE TABLE `struct_ncs_oper` (
  `Structure_ID` varchar(10) NOT NULL,
  `code` varchar(10) DEFAULT NULL,
  `details` varchar(200) DEFAULT NULL,
  `id` varchar(10) NOT NULL,
  `matrix_1__1_` float DEFAULT NULL,
  `matrix_1__2_` float DEFAULT NULL,
  `matrix_1__3_` float DEFAULT NULL,
  `matrix_2__1_` float DEFAULT NULL,
  `matrix_2__2_` float DEFAULT NULL,
  `matrix_2__3_` float DEFAULT NULL,
  `matrix_3__1_` float DEFAULT NULL,
  `matrix_3__2_` float DEFAULT NULL,
  `matrix_3__3_` float DEFAULT NULL,
  `vector_1_` float DEFAULT NULL,
  `vector_2_` float DEFAULT NULL,
  `vector_3_` float DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for struct_ref
-- ----------------------------
DROP TABLE IF EXISTS `struct_ref`;
CREATE TABLE `struct_ref` (
  `Structure_ID` varchar(10) NOT NULL,
  `biol_id` varchar(80) DEFAULT NULL,
  `db_code` varchar(80) DEFAULT NULL,
  `db_name` varchar(80) DEFAULT NULL,
  `entity_id` varchar(10) DEFAULT NULL,
  `id` varchar(10) NOT NULL,
  `pdbx_align_begin` varchar(10) DEFAULT NULL,
  `pdbx_db_accession` varchar(34) DEFAULT NULL,
  `pdbx_seq_one_letter_code` text,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for struct_ref_seq
-- ----------------------------
DROP TABLE IF EXISTS `struct_ref_seq`;
CREATE TABLE `struct_ref_seq` (
  `Structure_ID` varchar(10) NOT NULL,
  `align_id` varchar(10) NOT NULL,
  `db_align_beg` int DEFAULT NULL,
  `db_align_end` int DEFAULT NULL,
  `pdbx_PDB_id_code` varchar(10) DEFAULT NULL,
  `pdbx_auth_seq_align_beg` varchar(10) DEFAULT NULL,
  `pdbx_auth_seq_align_end` varchar(10) DEFAULT NULL,
  `pdbx_db_accession` varchar(10) DEFAULT NULL,
  `pdbx_db_align_beg_ins_code` varchar(10) DEFAULT NULL,
  `pdbx_db_align_end_ins_code` varchar(10) DEFAULT NULL,
  `pdbx_seq_align_beg_ins_code` varchar(10) DEFAULT NULL,
  `pdbx_seq_align_end_ins_code` varchar(10) DEFAULT NULL,
  `pdbx_strand_id` varchar(10) DEFAULT NULL,
  `ref_id` varchar(10) DEFAULT NULL,
  `seq_align_beg` varchar(10) DEFAULT NULL,
  `seq_align_end` varchar(10) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`align_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for struct_ref_seq_dif
-- ----------------------------
DROP TABLE IF EXISTS `struct_ref_seq_dif`;
CREATE TABLE `struct_ref_seq_dif` (
  `Structure_ID` varchar(10) NOT NULL,
  `align_id` varchar(10) DEFAULT NULL,
  `db_mon_id` varchar(10) DEFAULT NULL,
  `details` varchar(200) DEFAULT NULL,
  `mon_id` varchar(10) DEFAULT NULL,
  `pdbx_auth_seq_num` varchar(10) DEFAULT NULL,
  `pdbx_ordinal` int NOT NULL,
  `pdbx_pdb_id_code` varchar(10) DEFAULT NULL,
  `pdbx_pdb_ins_code` varchar(10) DEFAULT NULL,
  `pdbx_pdb_strand_id` varchar(10) DEFAULT NULL,
  `pdbx_seq_db_accession_code` varchar(10) DEFAULT NULL,
  `pdbx_seq_db_name` varchar(10) DEFAULT NULL,
  `pdbx_seq_db_seq_num` varchar(10) DEFAULT NULL,
  `seq_num` varchar(10) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`pdbx_ordinal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for struct_sheet
-- ----------------------------
DROP TABLE IF EXISTS `struct_sheet`;
CREATE TABLE `struct_sheet` (
  `Structure_ID` varchar(10) NOT NULL,
  `details` varchar(200) DEFAULT NULL,
  `id` varchar(10) NOT NULL,
  `number_strands` int DEFAULT NULL,
  `type` varchar(200) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for struct_sheet_order
-- ----------------------------
DROP TABLE IF EXISTS `struct_sheet_order`;
CREATE TABLE `struct_sheet_order` (
  `Structure_ID` varchar(10) NOT NULL,
  `offset` int DEFAULT NULL,
  `range_id_1` varchar(10) NOT NULL,
  `range_id_2` varchar(10) NOT NULL,
  `sense` varchar(13) DEFAULT NULL,
  `sheet_id` varchar(10) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`range_id_1`,`range_id_2`,`sheet_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for struct_sheet_range
-- ----------------------------
DROP TABLE IF EXISTS `struct_sheet_range`;
CREATE TABLE `struct_sheet_range` (
  `Structure_ID` varchar(10) NOT NULL,
  `beg_auth_asym_id` varchar(10) DEFAULT NULL,
  `beg_auth_comp_id` varchar(10) DEFAULT NULL,
  `beg_auth_seq_id` varchar(10) DEFAULT NULL,
  `beg_label_asym_id` varchar(10) DEFAULT NULL,
  `beg_label_comp_id` varchar(10) DEFAULT NULL,
  `beg_label_seq_id` varchar(10) DEFAULT NULL,
  `end_auth_asym_id` varchar(10) DEFAULT NULL,
  `end_auth_comp_id` varchar(10) DEFAULT NULL,
  `end_auth_seq_id` varchar(10) DEFAULT NULL,
  `end_label_asym_id` varchar(10) DEFAULT NULL,
  `end_label_comp_id` varchar(10) DEFAULT NULL,
  `end_label_seq_id` varchar(10) DEFAULT NULL,
  `id` varchar(10) NOT NULL,
  `pdbx_beg_PDB_ins_code` varchar(10) DEFAULT NULL,
  `pdbx_end_PDB_ins_code` varchar(10) DEFAULT NULL,
  `sheet_id` varchar(10) NOT NULL,
  `symmetry` varchar(10) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`,`sheet_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for struct_site
-- ----------------------------
DROP TABLE IF EXISTS `struct_site`;
CREATE TABLE `struct_site` (
  `Structure_ID` varchar(10) NOT NULL,
  `details` varchar(200) DEFAULT NULL,
  `id` varchar(80) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for struct_site_gen
-- ----------------------------
DROP TABLE IF EXISTS `struct_site_gen`;
CREATE TABLE `struct_site_gen` (
  `Structure_ID` varchar(10) NOT NULL,
  `auth_asym_id` varchar(10) DEFAULT NULL,
  `auth_comp_id` varchar(10) DEFAULT NULL,
  `auth_seq_id` varchar(10) DEFAULT NULL,
  `details` varchar(200) DEFAULT NULL,
  `id` varchar(80) NOT NULL,
  `label_alt_id` varchar(10) DEFAULT NULL,
  `label_asym_id` varchar(10) DEFAULT NULL,
  `label_atom_id` varchar(6) DEFAULT NULL,
  `label_comp_id` varchar(10) DEFAULT NULL,
  `label_seq_id` varchar(10) DEFAULT NULL,
  `pdbx_num_res` int DEFAULT NULL,
  `site_id` varchar(80) NOT NULL,
  `symmetry` varchar(10) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`id`,`site_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for struct_site_keywords
-- ----------------------------
DROP TABLE IF EXISTS `struct_site_keywords`;
CREATE TABLE `struct_site_keywords` (
  `Structure_ID` varchar(10) NOT NULL,
  `site_id` varchar(80) NOT NULL,
  `text` varchar(200) NOT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`site_id`,`text`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for symmetry
-- ----------------------------
DROP TABLE IF EXISTS `symmetry`;
CREATE TABLE `symmetry` (
  `Structure_ID` varchar(10) NOT NULL,
  `Int_Tables_number` int DEFAULT NULL,
  `cell_setting` varchar(12) DEFAULT NULL,
  `entry_id` varchar(10) NOT NULL,
  `pdbx_full_space_group_name_H_M` varchar(80) DEFAULT NULL,
  `space_group_name_H_M` varchar(80) DEFAULT NULL,
  `space_group_name_Hall` varchar(80) DEFAULT NULL,
  UNIQUE KEY `primary_index` (`Structure_ID`,`entry_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for tableinfo
-- ----------------------------
DROP TABLE IF EXISTS `tableinfo`;
CREATE TABLE `tableinfo` (
  `tablename` varchar(60) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `type` int DEFAULT NULL,
  `table_serial_no` int DEFAULT NULL,
  `group_name` varchar(80) DEFAULT NULL,
  `WWW_Selection_Criteria` int DEFAULT NULL,
  `WWW_Report_Criteria` int DEFAULT NULL,
  UNIQUE KEY `primary_index` (`tablename`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SET FOREIGN_KEY_CHECKS = 1;
