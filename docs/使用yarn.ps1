# Yarn 使用脚本
# 使用方法：在 PowerShell 中运行 .\使用yarn.ps1

# 设置 yarn 命令别名
$yarnCmd = "$env:APPDATA\npm\yarn.cmd"

Write-Host "========================================" -ForegroundColor Green
Write-Host "Yarn 使用脚本" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# 检查 yarn 是否可用
if (Test-Path $yarnCmd) {
    Write-Host "✓ Yarn 已找到: $yarnCmd" -ForegroundColor Green
    $yarnVersion = & $yarnCmd --version
    Write-Host "✓ Yarn 版本: $yarnVersion" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "✗ 未找到 Yarn，请先安装" -ForegroundColor Red
    exit 1
}

# 选择项目
Write-Host "请选择要操作的项目：" -ForegroundColor Yellow
Write-Host "1. 前台项目 (english-learn-front)"
Write-Host "2. 后台管理项目 (english-learn-manage)"
Write-Host "3. 两个项目都操作"
Write-Host ""
$choice = Read-Host "请输入选项 (1/2/3)"

function Install-YarnDependencies {
    param($projectPath, $projectName)
    
    Write-Host ""
    Write-Host "----------------------------------------" -ForegroundColor Cyan
    Write-Host "处理项目: $projectName" -ForegroundColor Cyan
    Write-Host "路径: $projectPath" -ForegroundColor Cyan
    Write-Host "----------------------------------------" -ForegroundColor Cyan
    
    if (Test-Path $projectPath) {
        Push-Location $projectPath
        
        Write-Host "正在安装依赖..." -ForegroundColor Yellow
        & $yarnCmd install
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✓ 依赖安装成功！" -ForegroundColor Green
            Write-Host ""
            Write-Host "运行项目使用: & `"`$env:APPDATA\npm\yarn.cmd`" serve" -ForegroundColor Cyan
        } else {
            Write-Host "✗ 依赖安装失败" -ForegroundColor Red
        }
        
        Pop-Location
    } else {
        Write-Host "✗ 项目路径不存在: $projectPath" -ForegroundColor Red
    }
}

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$baseDir = $scriptDir

switch ($choice) {
    "1" {
        $projectPath = Join-Path $baseDir "english-learn-front"
        Install-YarnDependencies $projectPath "前台项目"
    }
    "2" {
        $projectPath = Join-Path $baseDir "english-learn-manage"
        Install-YarnDependencies $projectPath "后台管理项目"
    }
    "3" {
        Install-YarnDependencies (Join-Path $baseDir "english-learn-front") "前台项目"
        Install-YarnDependencies (Join-Path $baseDir "english-learn-manage") "后台管理项目"
    }
    default {
        Write-Host "无效的选项" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "完成！" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green



