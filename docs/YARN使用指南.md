# Yarn 使用指南

## ✅ Yarn 已安装

Yarn 版本：1.22.22  
安装位置：`C:\Users\ssss8\AppData\Roaming\npm\yarn.cmd`

## ⚠️ 注意事项

如果直接运行 `yarn` 命令提示找不到，请使用以下方式之一：

### 方法 1：使用完整路径（推荐）
```powershell
& "$env:APPDATA\npm\yarn.cmd" [命令]
```

### 方法 2：重启终端
关闭并重新打开 PowerShell 或 CMD，yarn 命令应该就可以直接使用了。

### 方法 3：创建别名（临时）
在当前 PowerShell 会话中运行：
```powershell
Set-Alias yarn "$env:APPDATA\npm\yarn.cmd"
```

## 📦 项目使用 Yarn

### 前台项目 (english-learn-front)

1. **进入项目目录**
   ```powershell
   cd engilsh\english\english-learn-front
   ```

2. **安装依赖**
   ```powershell
   yarn install
   # 或使用完整路径：
   # & "$env:APPDATA\npm\yarn.cmd" install
   ```

3. **运行开发服务器**
   ```powershell
   yarn serve
   # 或使用完整路径：
   # & "$env:APPDATA\npm\yarn.cmd" serve
   ```

4. **构建生产版本**
   ```powershell
   yarn build
   ```

### 后台管理项目 (english-learn-manage)

1. **进入项目目录**
   ```powershell
   cd engilsh\english\english-learn-manage
   ```

2. **安装依赖**
   ```powershell
   yarn install
   ```

3. **运行开发服务器**
   ```powershell
   yarn serve
   ```

4. **构建生产版本**
   ```powershell
   yarn build
   ```

## 🔄 从 npm 切换到 yarn

如果你之前使用 npm，现在想完全切换到 yarn：

1. **删除 npm 的锁定文件**（可选）
   ```powershell
   # 在前台项目目录
   Remove-Item package-lock.json
   
   # 在后台管理项目目录
   cd ..\english-learn-manage
   Remove-Item package-lock.json
   ```

2. **删除 node_modules**（可选，如果想重新安装）
   ```powershell
   Remove-Item -Recurse -Force node_modules
   ```

3. **使用 yarn 安装依赖**
   ```powershell
   yarn install
   ```

## 📝 Yarn 常用命令对比

| npm 命令 | yarn 命令 | 说明 |
|---------|----------|------|
| `npm install` | `yarn install` | 安装依赖 |
| `npm install [package]` | `yarn add [package]` | 安装包 |
| `npm install -D [package]` | `yarn add -D [package]` | 安装开发依赖 |
| `npm uninstall [package]` | `yarn remove [package]` | 卸载包 |
| `npm run [script]` | `yarn [script]` | 运行脚本 |
| `npm update` | `yarn upgrade` | 更新依赖 |

## 🎯 快速开始

**前台项目：**
```powershell
cd engilsh\english\english-learn-front
& "$env:APPDATA\npm\yarn.cmd" install
& "$env:APPDATA\npm\yarn.cmd" serve
```

**后台管理项目：**
```powershell
cd engilsh\english\english-learn-manage
& "$env:APPDATA\npm\yarn.cmd" install
& "$env:APPDATA\npm\yarn.cmd" serve
```

