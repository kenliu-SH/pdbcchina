import {
	Model,
	Table,
	Column,
	DataType,
	Index,
	Sequelize,
	ForeignKey,
	HasOne,
	HasMany,
	Association,
} from 'sequelize-typescript';
import { chemComp } from './chemComp';
import { entitySrcGen } from './entitySrcGen';
import { entitySrcNat } from './entitySrcNat';
import { entry } from './entry';
import { structRefSeq } from './structRefSeq';

@Table({ tableName: 'entity', timestamps: false })
export class entity extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare structureId: string;

	@Column({ allowNull: true, type: DataType.STRING(4095) })
	declare details?: string;

	@Column({ field: 'formula_weight', allowNull: true, type: DataType.FLOAT(12) })
	declare formulaWeight?: number;

	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id?: string;

	@Column({ field: 'src_method', allowNull: true, type: DataType.STRING(10) })
	declare srcMethod?: string;

	@Column({ allowNull: true, type: DataType.STRING(12) })
	declare type?: string;

	@Column({ field: 'pdbx_description', allowNull: true, type: DataType.STRING(1023) })
	declare pdbxDescription?: string;

	@Column({ field: 'pdbx_number_of_molecules', allowNull: true, type: DataType.FLOAT(12) })
	declare pdbxNumberOfMolecules?: number;

	@Column({ field: 'pdbx_parent_entity_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxParentEntityId?: string;

	@Column({ field: 'pdbx_mutation', allowNull: true, type: DataType.STRING(4095) })
	pdbxMutation?: string;

	@Column({ field: 'pdbx_fragment', allowNull: true, type: DataType.STRING(511) })
	declare pdbxFragment?: string;

	@Column({ field: 'pdbx_ec', allowNull: true, type: DataType.STRING(255) })
	declare pdbxEc?: string;

	@Column({ field: 'pdbx_modification', allowNull: true, type: DataType.STRING(80) })
	pdbxModification?: string;

	@Column({ field: 'pdbx_formula_weight_exptl', allowNull: true, type: DataType.FLOAT(12) })
	declare pdbxFormulaWeightExptl?: number;

	@Column({ field: 'pdbx_formula_weight_exptl_method', allowNull: true, type: DataType.STRING(80) })
	pdbxFormulaWeightExptlMethod?: string;

	@Column({ field: 'pdbx_target_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxTargetId?: string;

	@Column({ field: 'pdbx_entities_per_biological_unit', allowNull: true, type: DataType.FLOAT(12) })
	declare pdbxEntitiesPerBiologicalUnit?: number;

	@HasMany(() => structRefSeq)
	declare structRefSeqs?: structRefSeq[];

	@HasMany(() => entitySrcNat)
	declare entitySrcNats?: entitySrcNat[];

	@HasMany(() => entitySrcGen)
	declare entitySrcGens?: entitySrcGen[];

	@HasMany(() => chemComp)
	declare chemComps?: chemComp[];
}
