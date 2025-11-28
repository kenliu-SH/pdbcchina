Protein Structure Management System

蛋白质分子结构管理系统（基于 PDB 自动同步）






本项目是一套面向科研机构、生物技术企业及结构生物学团队的 蛋白质分子结构管理平台。
系统支持 3D 可视化展示、结构比对、数据解析及版本化管理，并内置 PDB（RCSB Protein Data Bank）官方数据库自动同步引擎，可自动保持结构数据的更新与完整性。

系统包含 前端应用、后端服务、PDB 自动同步引擎 三大模块，适合二次开发、科研平台接入、企业产品落地等场景。

📚 目录

📐 系统架构

✨ 功能特性

🖥️ 前端

🛠 后端

⚙️ 自动同步引擎

🧱 技术栈

📁 项目目录结构

🚀 安装与部署

🖼 系统截图（占位）

📌 TODO

📜 许可证

📐 系统架构
┌──────────────────┐      ┌──────────────────────────────┐
│   前端 Front-End  │◀────▶│      后端 API 服务 Backend     │
│ (Web / 小程序)    │      │ (SpringBoot / Node.js / TS)   │
└──────────────────┘      └──────────────────────────────┘
                                   ▲
                                   │
                 ┌─────────────────┴────────────────────┐
                 │    自动同步引擎 Auto-Sync Engine     │
                 │  数据源：PDB (RCSB Protein Data Bank)│
                 └──────────────────────────────────────┘

✨ 功能特性
🖥️ 前端（Frontend）

蛋白 3D 结构可视化展示（Mol* / NGL 支持）

模型旋转、缩放、颜色主题设定

多模型比对与叠合显示

蛋白基础信息展示（序列、来源、长度、Resolution 等）

用户登录、权限管理

收藏夹与标签系统

支持 中文界面

🛠 后端（Backend）

蛋白结构文件解析（PDB / mmCIF）

自动提取结构元数据：链信息、氨基酸序列、长度、注释等

RESTful API：结构查询、列表、模型下载、任务状态

结构比对算法封装接口（可接入 TM-align/TMalign/CEalign 等）

Redis 缓存与数据加速

操作日志、异常日志

RBAC 权限系统

⚙️ 自动同步引擎（Auto-Sync Engine）

内置 PDB 官方数据源自动同步能力

定期从 PDB / RCSB 拉取最新结构

支持 增量同步

支持 结构文件（PDB/mmCIF）下载、校验、解析、入库

定时任务（Cron）自动执行

同步结果日志记录

支持同步完成后推送通知：

邮件

企业微信、飞书（可选）

异常检测与重试（网络中断/文件损坏）

🧱 技术栈
模块	技术
前端	Vue / React / Uni-App / Ant Design
后端	SpringBoot / Node.js / TypeScript
数据库	PostgreSQL / MySQL
缓存	Redis
结构解析	BioPython / BioJava / mmCIF Parser
自动同步	Python + Cron + HTTP Client
可视化	Mol* Viewer / NGL Viewer
📁 项目目录结构
root/
├── frontend/        # 前端应用（Web/小程序）
│   └── src/
├── backend/         # 后端 API 服务
│   ├── src/
│   └── modules/
├── sync-engine/     # PDB 自动同步模块
│   ├── downloader/
│   ├── parser/
│   └── scheduler/
└── docs/

🚀 安装与部署
1. 克隆项目
git clone https://github.com/yourname/protein-structure-system.git
cd protein-structure-system

2. 前端安装启动
cd frontend
npm install
npm run dev

3. 后端服务启动
cd backend
npm install
npm run start

4. 启动 PDB 自动同步引擎
cd sync-engine
python sync.py

🖼 系统截图（占位）

⚠️ 如果你提供截图，我可以帮你自动生成 README 中的图片排版。

Web 前端界面

蛋白 3D 结构展示

后端 API Swagger（可选）

同步日志界面

📌 TODO

 Docker / Docker Compose 一键部署

 添加 API 文档（Swagger）

 添加系统截图

 增加结构比对（TM-align 接口）

 添加更多数据源（AlphaFold / UniProt）
