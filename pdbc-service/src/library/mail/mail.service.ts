import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
	constructor(private readonly mailerService: MailerService) {}

	public async sendMail(to: string, subject: string, html?: string) {
		const result = await this.mailerService.sendMail({
			to: to,
			subject: subject,
			html: html,
		});
		// return result;
	}
}
