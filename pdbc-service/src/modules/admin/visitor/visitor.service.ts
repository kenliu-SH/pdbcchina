import { Visitor } from '@model/visitor.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class VisitorService {
	constructor(
		@InjectModel(Visitor)
		private visitorModel: typeof Visitor,
	) {}

	async generateCodes(count: number, expiresAt: Date, remark: string): Promise<string[]> {
		const codes: string[] = [];
		for (let i = 0; i < count; i++) {
			const code = this.generateCode();
			codes.push(code);
			await this.createVisitor(code, expiresAt, remark);
		}
		return codes;
	}

	private generateCode(): string {
		const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()';
		const length = Math.floor(Math.random() * 5) + 16; // 随机生成长度在16到20之间的数

		let code = '';
		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * characters.length);
			code += characters.charAt(randomIndex);
		}

		return code;
	}

	private async createVisitor(code: string, expiresAt: Date, remark: string): Promise<Visitor> {
		const visitor = new Visitor();
		visitor.accessCode = code;
		visitor.expiresAt = expiresAt;
		visitor.remark = remark;
		visitor.isExpires = 0;
		return visitor.save();
	}
}
