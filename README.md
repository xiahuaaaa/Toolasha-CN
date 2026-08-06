# Toolasha-CN

Milky Way Idle 插件 Toolasha 的**汉化增强版**（zh-CN），基于官方 v2.87.4 构建。

## 安装

[点击安装 Toolasha-CN](https://raw.githubusercontent.com/xiahuaaaa/Toolasha-CN/main/dist/Toolasha-CN.user.js)

需要先安装 Tampermonkey。库文件通过 jsdelivr CDN 自动加载，无需额外配置。

## 与原版的差异

- **全界面汉化**：设置面板、功能名、提示文本（跟随游戏语言，中文界面自动显示中文，英文界面保持英文）
- **N-1 按钮**：任务动作面板的任务次数输入框旁新增 `(N-1)` 快捷按钮，一键减一
- **市场买卖价自动调整**：支持中文界面下的订单弹窗识别（best buy/sell 的中文 DOM 兼容）
- **任务利润计算**：中文任务描述兼容（characterQuests 匹配 actionHrid + K/M 奖励容差）
- **任务图标**：中文任务名下的物品/怪物图标正常显示
- **配装快照同步修复**：战斗模拟器配装列表与游戏数据自动校准，不再漏配装
- **任务排序**：中文技能名排序兼容

## 版本

- 基础版本：Toolasha 2.87.4（官方最新）
- 汉化版本：2.87.4-cn.1

## 目录结构

```
dist/
├── Toolasha-CN.user.js     ← 主脚本（安装入口）
├── Toolasha-CN.meta.js     ← 更新检查元数据
└── libraries/              ← 库文件（jsdelivr 引用）
    ├── toolasha-i18n.js
    ├── toolasha-core.js
    ├── toolasha-utils.js
    ├── toolasha-market.js
    ├── toolasha-actions.js
    ├── toolasha-combat.js
    └── toolasha-ui.js
```

## 开发

库文件在 `dist/libraries/` 中，主脚本通过 `@require` 引用固定 commit 的 jsdelivr 链接。更新库文件后需重新 commit 并同步更新主脚本中的 commit hash。

## 许可

CC-BY-NC-SA-4.0（继承原版 Toolasha）
