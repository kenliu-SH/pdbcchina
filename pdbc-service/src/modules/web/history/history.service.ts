import { InjectModel } from '@nestjs/sequelize';
import { HttpException, Injectable } from '@nestjs/common';
import _ = require('lodash');
import { History } from '@model/history.model';
import { title } from 'process';
import { _Entry } from '@model/entry.model';
import { EntryHistroyCreateDto, FindHistoryDto } from './history.dto';
import { Pagination } from '@common/interface';
import { FindOptions, FindPaginationOptions } from '@model/shared';
import { entry, struct } from '@model/mmcif';
import { StructureSummaryVO } from '../entry/entry.vo';
import { Highlight } from '@model/highlight.model';
import { News } from '@model/news.model';

@Injectable()
export class HistoryService {
	constructor(
		@InjectModel(History)
		private historyModel: typeof History,
		@InjectModel(entry)
		private mmcifEntryModel: typeof entry,
		@InjectModel(Highlight)
		private highlightModel: typeof Highlight,
		@InjectModel(News)
		private newsModel: typeof News,
	) {}

	public async create(dto: EntryHistroyCreateDto) {
		if (dto.entryId != null) {
			const mmcifEntry = await this.mmcifEntryModel.findOne({
				where: {
					id: dto.entryId,
				},
				include: [
					{
						model: struct,
						attributes: ['title'],
					},
				],
				// attributes: ['structureId'],
			});
			dto.title = mmcifEntry.struct.title;
			dto.type = '条目' || 'entry';
		}

		if (dto.highligthId != null) {
			const findHighligth = await this.highlightModel.findOne({
				where: {
					id: dto.highligthId,
				},
			});
			// return findHighligth;
			dto.title = findHighligth.title;
			dto.type = '高光时刻' || 'Highligth';
		}

		if (dto.newsId != null) {
			const findNews = await this.newsModel.findOne({
				where: {
					id: dto.newsId,
				},
			});
			dto.title = findNews.title;
			dto.type = '新闻' || 'News';
		}
		const result = await this.historyModel.create(dto);
		return result;
	}

	public async getList(dto: FindHistoryDto, pagination: Pagination) {
		const option: FindPaginationOptions = {
			pagination: pagination,
			include: [{ model: _Entry }],
		};
		const result = await this.historyModel.findPagination(option);
		return result;
	}
}
