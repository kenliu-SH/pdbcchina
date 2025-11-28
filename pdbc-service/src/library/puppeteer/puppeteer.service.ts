import { ConfigProvider } from '@library/configs';
import { Injectable, Logger, OnApplicationBootstrap, OnModuleDestroy } from '@nestjs/common';
// import puppeteer, { Page } from 'puppeteer';
import { Cluster } from 'puppeteer-cluster';
@Injectable()
export class PuppeteerService implements OnApplicationBootstrap {
	constructor(private readonly configs: ConfigProvider) { }
	private browserPool: Cluster<any, any>;
	async onApplicationBootstrap() {
		try {
			this.browserPool = await this.initBrowserPool();
		} catch (error) {
			console.error(error);
		}
	}

	async initBrowserPool() {
		const browserPool = await Cluster.launch({
			concurrency: Cluster.CONCURRENCY_CONTEXT,
			maxConcurrency: 3,
			puppeteerOptions: {
				headless: true,
				ignoreDefaultArgs: ['--enable-automation', '--disable-extensions'],
				args: [
					'--no-sandbox',
					'--disable-setuid-sandbox',
					'--disable-dev-shm-usage',
					'--disable-accelerated-2d-canvas',
					'--no-first-run',
					'--no-zygote',
				],
			},
		});
		browserPool.task(async ({ page, data }) => {
			await this.renderMolstarImageTask(page, data);
		});
		return browserPool;
	}

	/**
	 * render molstar image
	 */
	public async renderMolstarImage(PDBId: string, outPath: string) {
		await this.browserPool.execute({ PDBId, outPath });
	}

	private async renderMolstarImageTask(page, { PDBId, outPath }) {
		await page.setViewport({ width: 500, height: 500 });
		console.log(22222);

		// 这里替换为你的Mol*使用页面的URL
		await page.goto(
			`http://o2-1307232071.cos.ap-shanghai.myqcloud.com/lz2/web/protein/v1/index.html#/mol-viewer?id=${PDBId}`,
			{ waitUntil: 'networkidle0' },
		);
		console.log(33333);

		// 等待Mol*库加载完成
		await page.waitForFunction('MolstarLoaded');
		console.log("Mol*库加载完成");

		// 等待出现 msp-viewport
		await page.waitForSelector('.msp-viewport');
		console.log("msp-viewport 出现");
		// 查询 class 为 'msp-viewport' 的 div 元素
		const element = await page.$('.msp-viewport');
		await page.evaluate(() => {
			const elements = document.querySelectorAll('.msp-toast-entry');
			// @ts-ignore
			for (const element of elements) {
				element.parentNode.removeChild(element);
			}
		});
		// 获取元素的大小和位置信息
		const boundingBox = await element.boundingBox();
		// 截图并保存为PNG格式
		await page.screenshot({
			path: outPath,
			type: 'jpeg',
			clip: {
				x: boundingBox.x,
				y: boundingBox.y,
				width: boundingBox.width,
				height: boundingBox.height,
			},
			quality: 100,
		});
		await page.close();
	}
}
