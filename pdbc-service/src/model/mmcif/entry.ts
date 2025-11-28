import { EntityFullText } from '@model/entityFullText.model';
import { StructureSummaryVO } from '@modules/web/entry/entry.vo';
import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey, HasMany, HasOne } from 'sequelize-typescript';
import { atomSites } from './atomSites';
import { auditAuthor } from './auditAuthor';
import { cell1 } from './cell1';
import { citation } from './citation';
import { citationAuthor } from './citationAuthor';
import { database_2 } from './database_2';
import { diffrnDetector } from './diffrnDetector';
import { diffrnRadiation } from './diffrnRadiation';
import { diffrnSource } from './diffrnSource';
import { emEntityAssembly } from './emEntityAssembly';
import { emExperiment } from './emExperiment';
import { emImageRecording } from './emImageRecording';
import { emSoftware } from './emSoftware';
import { emVitrification } from './emVitrification';
import { em_3dReconstruction } from './em_3dReconstruction';
import { entity } from './entity';
import { entityKeywords } from './entityKeywords';
import { entitySrcGen } from './entitySrcGen';
import { entitySrcNat } from './entitySrcNat';
import { exptl } from './exptl';
import { exptlCrystal } from './exptlCrystal';
import { exptlCrystalGrow } from './exptlCrystalGrow';
import { pdbxAuditRevisionDetails } from './pdbxAuditRevisionDetails';
import { pdbxAuditRevisionHistory } from './pdbxAuditRevisionHistory';
import { pdbxAuditSupport } from './pdbxAuditSupport';
import { pdbxDatabaseRelated } from './pdbxDatabaseRelated';
import { pdbxDatabaseStatus } from './pdbxDatabaseStatus';
import { pdbxPolySeqScheme } from './pdbxPolySeqScheme';
import { refine } from './refine';
import { refineLsRestr } from './refineLsRestr';
import { reflns } from './reflns';
import { reflnsShell } from './reflnsShell';
import { software } from './software';
import { struct } from './struct';
import { structKeywords } from './structKeywords';
import { structRefSeqDif } from './structRefSeqDif';
import { symmetry } from './symmetry';
import { atomSite } from './atomSite';
import { PdbcEntry } from '@model/expansion/pdbcEntry';

@Table({ tableName: 'entry', timestamps: false })
export class entry extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare structureId: string;

	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id: string;

	@Column({ field: 'pdbx_DOI', allowNull: true, type: DataType.STRING(10) })
	pdbxDoi?: string;

	// 结构摘要
	structureSummary: StructureSummaryVO;

	// @HasMany(() => entityKeywords)
	// declare entityKeywords?: entityKeywords[];

	@HasMany(() => structKeywords, 'structureId')
	declare structKeywords?: structKeywords[];

	@HasMany(() => entitySrcNat)
	declare entitySrcNats?: entitySrcNat[];

	@HasMany(() => entitySrcGen)
	declare entitySrcGens?: entitySrcGen[];

	@HasMany(() => auditAuthor)
	declare auditAuthors?: auditAuthor[];

	@HasMany(() => pdbxDatabaseStatus)
	declare pdbxDatabaseStatus?: pdbxDatabaseStatus[];

	@HasOne(() => exptl)
	declare exptl?: exptl;

	@HasMany(() => pdbxAuditRevisionHistory)
	declare pdbxAuditRevisionHistorys?: pdbxAuditRevisionHistory[];

	@HasOne(() => pdbxAuditRevisionHistory)
	declare pdbxAuditRevisionHistorysOne?: pdbxAuditRevisionHistory;

	@HasOne(() => em_3dReconstruction)
	declare em_3dReconstruction?: em_3dReconstruction;

	@HasOne(() => emExperiment)
	declare emExperiment?: emExperiment;

	@HasOne(() => emVitrification)
	declare emVitrification?: emVitrification;

	@HasOne(() => citation)
	declare citation?: citation;

	@HasMany(() => citationAuthor)
	declare citationAuthors?: citationAuthor[];

	@HasMany(() => entity)
	declare entities?: entity[];

	@HasMany(() => atomSites)
	declare atomSites?: atomSites[];

	@HasMany(() => emSoftware)
	declare emSoftwares?: emSoftware[];

	@HasMany(() => pdbxAuditSupport)
	declare pdbxAuditSupports?: pdbxAuditSupport[];

	@HasMany(() => pdbxPolySeqScheme)
	declare pdbxPolySeqScheme?: pdbxPolySeqScheme[];

	@HasMany(() => pdbxAuditRevisionDetails)
	declare pdbxAuditRevisionDetails?: pdbxAuditRevisionDetails[];

	@HasOne(() => struct)
	declare struct?: struct;

	@HasMany(() => database_2)
	declare database_2s?: database_2[];

	@HasMany(() => exptlCrystalGrow)
	declare exptlCrystalGrow?: exptlCrystalGrow[];

	@HasMany(() => exptlCrystal)
	declare exptlCrystal?: exptlCrystal[];

	@HasOne(() => symmetry)
	declare symmetry?: symmetry;

	@HasMany(() => cell1)
	declare cell1?: cell1[];

	@HasMany(() => diffrnRadiation)
	declare diffrnRadiation?: diffrnRadiation[];

	@HasMany(() => diffrnDetector)
	declare diffrnDetector?: diffrnDetector[];

	@HasMany(() => diffrnSource)
	declare diffrnSource?: diffrnSource[];

	@HasMany(() => reflns)
	declare reflns?: reflns[];

	@HasMany(() => reflnsShell)
	declare reflnsShell?: reflnsShell[];

	@HasMany(() => refine)
	declare refine?: refine[];

	@HasMany(() => refineLsRestr)
	declare refineLsRestr?: refineLsRestr[];

	@HasMany(() => software)
	declare software?: software[];

	@HasOne(() => emEntityAssembly)
	declare emEntityAssembly?: emEntityAssembly;

	@HasMany(() => emImageRecording)
	declare emImageRecording?: emImageRecording[];

	@HasMany(() => structRefSeqDif)
	declare structRefSeqDifs?: structRefSeqDif[];

	@HasOne(() => PdbcEntry, 'structureId')
	pdbcEntry: PdbcEntry;
}
