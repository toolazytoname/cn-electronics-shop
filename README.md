# cn-electronics-shop

国内数码选购顾问 Skill。给 AI agent 用：拆需求、选京东/天猫/闲鱼、验闲鱼成色、叠国补和大促、输出短名单。

不是爬虫，也不替你下单。闲鱼搜索、淘宝加购那种执行层已经有别人的仓库，本仓库是**决策层**。

## 这是什么

覆盖手机、手表、电脑、显卡、迷你主机、Mac Mini。

Agent 会：

- 先问用途、预算、新机还是二手、日常机是苹果还是安卓
- 把「安静常驻 / 3A+本地模型 / 日常手机 / 手表」拆开，避免一台机器扛全部
- 现查价格（不背过期价）
- 同时看什么值得买、评测媒体、二手博主、知乎/B站；用户点名的公众号优先
- 闲鱼看人、看「关于本机」、看是不是标题党
- 国补和大促按规则估到手价，游戏整机不默认算电脑国补
- 不抢你正在用的浏览器焦点

## 和现成仓库的关系

| 仓库 | 层 | 干什么 |
|---|---|---|
| 本仓库 | 决策 | 买什么、在哪买、坑在哪 |
| [fancyboi999/goofish-cli](https://github.com/fancyboi999/goofish-cli) | 执行 | 闲鱼 CLI / MCP |
| [donggeai/xianyu-skills](https://github.com/donggeai/xianyu-skills) | 执行 | 闲鱼发布、搜索、消息 |
| [newbietan/Taobao-Search-Skill](https://github.com/newbietan/Taobao-Search-Skill) | 执行 | 淘宝搜索、选 SKU、加购 |
| [edisoncccc/taobao-desktop-agent-skill](https://github.com/edisoncccc/taobao-desktop-agent-skill) | 执行 | 淘宝桌面 agent |

可以一起用：本 skill 决定短名单，执行层去打开对应商品。没装执行层时，用官网/京东/闲鱼公开页和用户贴的链接就够。

## 安装（Grok）

```bash
git clone git@github.com:toolazytoname/cn-electronics-shop.git ~/Code/cn-electronics-shop
ln -s ~/Code/cn-electronics-shop ~/.grok/skills/cn-electronics-shop
```

装好后：

- 斜杠：`/cn-electronics-shop`
- 菜单：`/skills cn-electronics-shop`
- 自动：提到买手机、手表、电脑、显卡、闲鱼、国补、双11 时会匹配 description

Claude Code / Cursor 同样认根目录的 `SKILL.md`，clone 进各自的 `skills/` 即可。

## 怎么用

直接说要买什么，例如：

- 「双11 想买手表，再买手机或电脑，预算有限」
- 「闲鱼 Mac Mini 32G，帮我看这几个收藏靠不靠谱」
- 「5070 12G 整机现在什么价，等到双11能便宜多少」

## 选型备忘（GitHub Pages）

把一次「本地 27B + ComfyUI + H3 + 4K 游戏」的选型对话收成网页，左侧是目录：

https://toolazytoname.github.io/cn-electronics-shop/

源文件在 [`docs/`](docs/)。价格会过期，以当天商品页为准。

## 许可

MIT
