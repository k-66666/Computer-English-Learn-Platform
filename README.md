# Computer English Learn Platform (Monorepo)

本仓库包含**后端 + 前台 + 管理端**三部分代码，已整理为标准结构，适合直接用 IDEA/Git 上传到 GitHub。

## 目录结构

- `backend/`: Java 后端（Maven 多模块，Spring Boot）
- `frontend/`: 学习平台前台（Vue）
- `admin-frontend/`: 后台管理端（Vue）
- `db/`: 数据库初始化脚本（MySQL）
- `docs/`: 使用说明/杂项文档

## 后端运行（backend）

### 1) 准备数据库

- 创建数据库：`ape-english`
- 导入初始化脚本：`db/ape-english.sql`

### 2) 配置（可选）

默认配置在 `backend/ape-admin/src/main/resources/application-dev.yml`。

- 默认 MySQL：`root / 123456`
- 你也可以用环境变量覆盖：
  - `DB_URL`
  - `DB_USERNAME`
  - `DB_PASSWORD`

### 3) 启动

在 `backend/` 根目录执行：

- `mvn clean package`
- 运行 `ape-admin` 模块的启动类（IDEA 里直接 Run）

默认端口：`8080`

## 前端运行（frontend）

在 `frontend/` 目录执行：

- `yarn`
- `yarn serve`

## 管理端运行（admin-frontend）

在 `admin-frontend/` 目录执行：

- `yarn`
- `yarn serve`

## 上传到 GitHub（建议）

因为仓库根目录在 `english/`，建议你在 IDEA 里直接打开 `english/` 文件夹后上传，这样三套工程会在同一个仓库中，结构最清晰。

