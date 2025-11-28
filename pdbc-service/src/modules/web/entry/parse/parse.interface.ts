import { Macromolecules, Oligosaccharides, SmallMolecules, StructureSummaryVO } from '../entry.vo';
import { ExperimentVo } from '../experiment.vo';

export interface IWebEntryParse {
	/**
	 * 实验信息
	 */
	experiment(PDBId: string, isBase: boolean): Promise<ExperimentVo>;
	/**
	 * getUniqueLigands
	 */
	getUniqueLigands(PDBId: string): Promise<string[]>;

	/**
	 * 小分子信息
	 */
	getSmallMolecules(PDBId: string): Promise<SmallMolecules>;

	/**
	 * 低聚糖信息
	 */
	getOligosaccharides(PDBId: string): Promise<Oligosaccharides[]>;

	/**
	 *  method
	 */
	// processMethods(methods: string): Promise<string[]>;
}
