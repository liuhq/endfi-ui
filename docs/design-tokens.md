# EndFi Design Token 规范

> 来源声明：视觉设计参考《明日方舟：终末地》；文档内容由 AI 模型辅助整理与编写。

版本：0.1 · 适用：通用 Web 应用 · 主题：light / dark · 密度：comfortable / compact。

本规范定义 EndFi 可复用的 Web 视觉基础，统一颜色、尺寸、字体、形状和动效，并提供主题、密度与组件状态的映射。所有精确值均为本项目的设计决策，交互与组合使用见 [UI/UX 规范](ui-ux-guidelines.md)。

### 视觉原则

- **中性色分层**：页面、面板和浮层使用各自的语义表面，通过明度、边界和间距建立层级；默认面板不使用阴影，浮层与模态使用对应阴影。
- **黄色强调**：黄色用于主操作、当前选择与独立焦点指示，分别遵循 action、selection 与 focus 映射；成功、警告、错误和信息使用各自的反馈色与文字说明。
- **清晰文字层级**：正文与标签使用无衬线字体，代码与装饰编号使用等宽字体；标题、正文和辅助信息使用固定字体角色，关键数值使用 tabular 数字。密度调整不缩小文字。
- **规整布局与形状**：布局间距优先使用 4px 倍数，面板与按钮默认矩形，输入与小浮层使用小圆角，胶囊形仅用于徽标和开关；切角作为可选局部装饰。
- **克制装饰与动效**：网格、编号和切角不承载必要信息；动效用于状态变化与浮层进出，遵循时长、缓动及减少动效规则，不以持续动画提示状态。

## 1. 组织与命名

三层结构：基础 token 给出原始值；语义 token 表达用途与主题；组件 token 引用语义或基础 token。业务页面使用语义 token，组件内部使用组件 token；基础色阶不直接表达业务状态。

| 层级 | 例子 | 规则 |
| --- | --- | --- |
| 基础 | `color.palette.yellow.500` | 不随主题变化；色阶数字由浅至深，yellow.500 为品牌锚点 |
| 语义 | `color.action.primary.background` | 名称保持稳定，light / dark 各自映射 |
| 组件 | `button.primary.background` | 引用前两层；只有确实需要独立调整时才新增 |

英文点分命名，使用小写单词与 camelCase 属性。引用统一写作 `{token.name}`，不是字符串插值或 CSS 语法。后续增加 token 时沿用相同结构，不以具体颜色命名语义用途。不允许基础层反向引用、语义层引用组件层或循环引用。

表中 `共用` 表示两主题相同；`—` 表示该列不适用，不表示缺失值。颜色使用不透明 sRGB HEX；遮罩明确使用 RGBA。长度使用 px；字体在 Web 实现时按 16px 根字号转成 rem，保留用户字号偏好；视口断点使用 px，不随根字号变化。透明度范围 0–1，时间单位 ms，层级为整数。

### 主题、密度与状态

- 默认主题 light，首次使用可跟随系统偏好；用户显式选择优先，未选择时持续跟随系统。主题切换不改变结构、字号或数据状态。
- 默认密度 comfortable。compact 只改变控件高度、行距和布局间距，不缩小正文或辅助文字；触控主要场景使用 comfortable，并满足 44px 最小点击区域。
- 局部浅色面板必须应用完整 light 语义颜色，包括文字、边框、状态和阴影；浮层继承触发器所在区域的主题，渲染到页面外层时仍保持该映射。
- 图片背景上的文字放入不透明语义面板；图片本身不是可用于对比度验收的固定背景。遮罩不替代文字承载面板。
- 新增 token 不重命名现有语义。弃用时在原表保留名称、替代项与原因至少一个文档版本，禁止静默删除；v0.1 无弃用项。

## 2. 基础 token

### 2.1 中性色与品牌色

| 名称 | 类型 | 值 | 用途 / 限制 |
| --- | --- | --- | --- |
| `color.palette.neutral.0` | color | #FFFFFF | 最亮表面、反白文字 |
| `color.palette.neutral.50` | color | #F4F6F7 | 浅色页面背景 |
| `color.palette.neutral.100` | color | #E3E8EB | 浅色弱表面 |
| `color.palette.neutral.150` | color | #DCE2E6 | 浅色按下表面，保留辅助文字对比度 |
| `color.palette.neutral.200` | color | #CDD4D9 | 弱分隔 |
| `color.palette.neutral.300` | color | #AAB4BC | 深色次要文字 |
| `color.palette.neutral.400` | color | #96A1AA | 深色辅助文字；可用于按下与选中背景 |
| `color.palette.neutral.500` | color | #697783 | 控件边界；不用于浅灰底小字号文字 |
| `color.palette.neutral.600` | color | #58656F | 浅色次要及辅助文字 |
| `color.palette.neutral.700` | color | #424C54 | 深色弱边框 |
| `color.palette.neutral.800` | color | #2C3338 | 深色按下表面 |
| `color.palette.neutral.850` | color | #20262A | 深色浮层及悬停表面 |
| `color.palette.neutral.900` | color | #171B1E | 深色面板 |
| `color.palette.neutral.950` | color | #0E1113 | 深色页面背景 |
| `color.palette.yellow.100` | color | #F5F6CF | 浅色选中背景 |
| `color.palette.yellow.300` | color | #F7F84A | 主操作悬停 |
| `color.palette.yellow.500` | color | #F0F20A | 品牌锚点、主操作底色；不用作浅色背景正文 |
| `color.palette.yellow.600` | color | #D9DC09 | 主操作按下 |
| `color.palette.yellow.700` | color | #696B00 | 浅色选中边框、焦点环 |
| `color.palette.yellow.900` | color | #343613 | 深色选中背景 |
| `color.palette.teal.100` | color | #DEF4F1 | 浅色信息背景 |
| `color.palette.teal.300` | color | #62D6CB | 深色信息文字与链接 |
| `color.palette.teal.700` | color | #006D68 | 浅色信息文字与链接 |
| `color.palette.teal.900` | color | #163A39 | 深色信息背景 |
| `color.palette.green.100` | color | #E4F5EC | 浅色成功背景 |
| `color.palette.green.300` | color | #6ED8A6 | 深色成功文字 |
| `color.palette.green.700` | color | #116B46 | 浅色成功文字 |
| `color.palette.green.900` | color | #14382C | 深色成功背景 |
| `color.palette.amber.100` | color | #FFF1D0 | 浅色警告背景 |
| `color.palette.amber.300` | color | #F3C86A | 深色警告文字 |
| `color.palette.amber.700` | color | #835C00 | 浅色警告文字 |
| `color.palette.amber.900` | color | #3E331C | 深色警告背景 |
| `color.palette.red.100` | color | #FDE9E6 | 浅色错误背景 |
| `color.palette.red.300` | color | #FF897D | 深色错误文字与边框 |
| `color.palette.red.700` | color | #B42318 | 浅色错误、危险操作底色 |
| `color.palette.red.800` | color | #991F16 | 危险操作悬停 |
| `color.palette.red.900` | color | #7A1912 | 危险操作按下 |
| `color.palette.red.950` | color | #442522 | 深色错误背景 |
| `color.transparent` | color | transparent | 无填充；依赖所在表面 |

品牌黄负责动作和位置，不承担警告语义；警告使用 amber 与文字/图标共同表达。teal 是辅助信息色，不替代成功绿。内容插画中的颜色不加入系统色阶。

### 2.2 字体

以下字体均为字体栈，不附带字体文件；Noto Sans SC 仅在设备已安装或应用另行提供时使用。中文不使用人为压缩字宽。

| 名称 | 类型 | 值 | 用途 / 限制 |
| --- | --- | --- | --- |
| `font.family.sans` | fontFamily | "Noto Sans SC", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif | 中英文正文与标题 |
| `font.family.mono` | fontFamily | "SFMono-Regular", Consolas, "Liberation Mono", monospace | 标识符、代码；不用于长中文 |
| `font.size.12` | dimension | 12px | 非关键编号、装饰说明；不用作控件标签 |
| `font.size.14` | dimension | 14px | 辅助信息、控件文字 |
| `font.size.16` | dimension | 16px | 正文 |
| `font.size.20` | dimension | 20px | 区块标题 |
| `font.size.24` | dimension | 24px | 面板标题、指标 |
| `font.size.32` | dimension | 32px | 页面标题 |
| `font.size.40` | dimension | 40px | 大型指标；不用于长标题 |
| `font.weight.regular` | fontWeight | 400 | 正文 |
| `font.weight.medium` | fontWeight | 500 | 标签、操作 |
| `font.weight.semibold` | fontWeight | 600 | 标题、选中导航 |
| `font.weight.bold` | fontWeight | 700 | 关键数值 |
| `font.lineHeight.tight` | number | 1.2 | 大型数字 |
| `font.lineHeight.heading` | number | 1.3 | 标题 |
| `font.lineHeight.label` | number | 1.4 | 单行操作、标签 |
| `font.lineHeight.body` | number | 1.6 | 中文正文与辅助文字 |
| `font.letterSpacing.normal` | dimension | 0px | 中文与正文 |
| `font.letterSpacing.code` | dimension | 0.5px | 短英文编号；不用于中文 |
| `font.numeric.tabular` | fontFeature | tabular-nums | 表格、指标；字体不支持时仍保持右对齐 |

### 2.3 间距、尺寸与形状

间距名中的数字就是 px 值。2px 用于光学校正或微小间隔，其余布局优先 4px 倍数。

| 名称 | 类型 | 值 | 用途 / 限制 |
| --- | --- | --- | --- |
| `space.0` | dimension | 0px | 无间距 |
| `space.2` | dimension | 2px | 细微间隔 |
| `space.4` | dimension | 4px | 标记与文字 |
| `space.8` | dimension | 8px | 图标与文字、小控件 |
| `space.12` | dimension | 12px | 紧凑内边距 |
| `space.16` | dimension | 16px | 常规内边距 |
| `space.24` | dimension | 24px | 面板内边距、区块间隔 |
| `space.32` | dimension | 32px | 大区块间隔 |
| `space.48` | dimension | 48px | 页面区块间隔 |
| `space.64` | dimension | 64px | 展示区间隔 |
| `size.control.sm` | dimension | 32px | compact 单行控件最小高度 |
| `size.control.md` | dimension | 40px | comfortable 单行控件最小高度 |
| `size.control.lg` | dimension | 48px | 强调操作、触控控件 |
| `size.hitTarget.min` | dimension | 44px | 触控区域最小宽高，不能重叠 |
| `size.icon.sm` | dimension | 16px | 辅助图标 |
| `size.icon.md` | dimension | 20px | 默认操作图标 |
| `size.icon.lg` | dimension | 24px | 大按钮图标 |
| `size.indicator` | dimension | 20px | checkbox / radio 可见尺寸 |
| `radius.none` | dimension | 0px | 默认面板、按钮 |
| `radius.subtle` | dimension | 2px | 输入、提示 |
| `radius.soft` | dimension | 4px | 小浮层 |
| `radius.pill` | dimension | 9999px | 徽标、开关；不得普遍套用于按钮 |
| `border.width.thin` | dimension | 1px | 默认边界 |
| `border.width.strong` | dimension | 2px | 选中强调 |
| `shape.cut.sm` | dimension | 4px | 可选单一强调按钮右上切角 |
| `shape.cut.md` | dimension | 8px | 可选展示卡片右上切角 |
| `focus.width` | dimension | 2px | 键盘焦点外环 |
| `focus.offset` | dimension | 2px | 焦点与组件间距 |
| `opacity.hidden` | number | 0 | 隐藏；交互需同时关闭 |
| `opacity.full` | number | 1 | 正常显示 |
| `opacity.decorative` | number | 0.08 | 纯装饰网格/编号；不得影响文字底色 |
| `opacity.overlay.light` | number | 0.48 | light 遮罩对应透明度 |
| `opacity.overlay.dark` | number | 0.64 | dark 遮罩对应透明度 |

切角不是默认组件形状。启用时仅裁切装饰背景，点击区域与焦点外环保持完整矩形；不用切角裁切输入、表格、弹窗内容或正文。

### 2.4 动效、布局与层级

| 名称 | 类型 | 值 | 用途 / 限制 |
| --- | --- | --- | --- |
| `motion.duration.none` | duration | 0ms | 减少动效 |
| `motion.duration.fast` | duration | 100ms | hover / pressed 颜色 |
| `motion.duration.base` | duration | 160ms | 开关、分段标记 |
| `motion.duration.enter` | duration | 240ms | 弹窗、抽屉进入 |
| `motion.duration.emphasis` | duration | 320ms | 仅首次展示的非必要强调 |
| `motion.easing.standard` | cubicBezier | cubic-bezier(0.2, 0, 0, 1) | 状态与位置变化 |
| `motion.easing.exit` | cubicBezier | cubic-bezier(0.4, 0, 1, 1) | 离场；使用 base 时长 |
| `breakpoint.sm` | dimension | 640px | 两栏与窄屏分界 |
| `breakpoint.md` | dimension | 960px | 主从布局常驻侧栏起点 |
| `breakpoint.lg` | dimension | 1280px | 宽屏布局间距起点 |
| `layout.content.max` | dimension | 1440px | 居中内容容器上限，不包括页面边距 |
| `layout.sidebar.width` | dimension | 240px | 宽屏导航 / 主从侧栏 |
| `layout.dialog.sm` | dimension | 400px | 简短确认弹窗最大宽度 |
| `layout.dialog.md` | dimension | 560px | 常规表单弹窗最大宽度 |
| `layout.drawer.width` | dimension | 400px | 抽屉最大宽度 |
| `layout.grid.minCard` | dimension | 160px | 卡片网格最小期望宽度；窄于此值时单栏 |
| `z.base` | number | 0 | 内容 |
| `z.sticky` | number | 10 | 固定工具栏 |
| `z.dropdown` | number | 100 | 页面菜单 |
| `z.overlay` | number | 200 | 模态遮罩 |
| `z.modal` | number | 210 | 模态内容 |
| `z.modalPopover` | number | 220 | 模态内菜单和提示 |
| `z.toast` | number | 300 | 通知；不得遮住模态操作 |
| `z.tooltip` | number | 400 | 页面提示；模态打开时页面提示关闭 |

层级是同一应用层级根下的相对合同，避免组件各自建立不可控的 stacking context。v0.1 不支持叠加模态；模态内的菜单使用 modalPopover，而不是 dropdown。

## 3. 语义 token

### 3.1 表面、文字与边界

| 名称 | 类型 | light 值 / 引用 | dark 值 / 引用 | 用途 / 限制 |
| --- | --- | --- | --- | --- |
| `color.background.canvas` | color | {color.palette.neutral.50} | {color.palette.neutral.950} | 页面背景 |
| `color.surface.default` | color | {color.palette.neutral.0} | {color.palette.neutral.900} | 面板与内容承载 |
| `color.surface.raised` | color | {color.palette.neutral.0} | {color.palette.neutral.850} | 菜单、弹窗 |
| `color.surface.subtle` | color | {color.palette.neutral.50} | {color.palette.neutral.850} | 设置行、弱内容区域 |
| `color.surface.hover` | color | {color.palette.neutral.100} | {color.palette.neutral.850} | 普通可交互表面悬停 |
| `color.surface.pressed` | color | {color.palette.neutral.150} | {color.palette.neutral.800} | 普通表面按下 |
| `color.text.primary` | color | {color.palette.neutral.950} | {color.palette.neutral.50} | 正文、标题 |
| `color.text.secondary` | color | {color.palette.neutral.600} | {color.palette.neutral.300} | 次要信息 |
| `color.text.muted` | color | {color.palette.neutral.600} | {color.palette.neutral.400} | 辅助信息、占位符；仍需可读 |
| `color.text.onAccent` | color | {color.palette.neutral.950} | {color.palette.neutral.950} | 黄色按钮上的文字、图标 |
| `color.text.onDanger` | color | {color.palette.neutral.0} | {color.palette.neutral.0} | 红色危险按钮文字、图标 |
| `color.icon.default` | color | {color.text.secondary} | {color.text.secondary} | 有含义的普通图标 |
| `color.border.subtle` | color | {color.palette.neutral.200} | {color.palette.neutral.700} | 装饰性分隔；不能作为控件唯一边界 |
| `color.border.control` | color | {color.palette.neutral.500} | {color.palette.neutral.500} | 输入、普通按钮关键边界 |
| `color.border.strong` | color | {color.palette.neutral.600} | {color.palette.neutral.300} | 需要更强区分的边界 |
| `color.focus.ring` | color | {color.palette.yellow.700} | {color.palette.yellow.500} | 键盘焦点；外侧须邻接普通表面 |
| `color.overlay.scrim` | color | rgba(14, 17, 19, 0.48) | rgba(14, 17, 19, 0.64) | 背景遮罩，不能承载正文 |
| `shadow.panel` | shadow | none | none | 默认面板用边界分层 |
| `shadow.floating` | shadow | 0 8px 24px rgba(14, 17, 19, 0.16) | 0 8px 24px rgba(0, 0, 0, 0.40) | 菜单、提示 |
| `shadow.modal` | shadow | 0 16px 48px rgba(14, 17, 19, 0.24) | 0 16px 48px rgba(0, 0, 0, 0.56) | 弹窗、抽屉 |

### 3.2 操作、选择与禁用

| 名称 | 类型 | light 值 / 引用 | dark 值 / 引用 | 用途 / 限制 |
| --- | --- | --- | --- | --- |
| `color.action.primary.background` | color | {color.palette.yellow.500} | {color.palette.yellow.500} | 主按钮 |
| `color.action.primary.hover` | color | {color.palette.yellow.300} | {color.palette.yellow.300} | 主按钮悬停 |
| `color.action.primary.pressed` | color | {color.palette.yellow.600} | {color.palette.yellow.600} | 主按钮按下 |
| `color.action.primary.foreground` | color | {color.text.onAccent} | {color.text.onAccent} | 主按钮文字 |
| `color.action.primary.border` | color | {color.palette.yellow.700} | {color.palette.yellow.500} | 浅色主题必须保留深黄边界 |
| `color.action.secondary.background` | color | {color.surface.default} | {color.surface.default} | 普通操作 |
| `color.action.secondary.hover` | color | {color.surface.hover} | {color.surface.hover} | 普通操作悬停 |
| `color.action.secondary.pressed` | color | {color.surface.pressed} | {color.surface.pressed} | 普通操作按下 |
| `color.action.secondary.foreground` | color | {color.text.primary} | {color.text.primary} | 普通操作文字 |
| `color.action.secondary.border` | color | {color.border.control} | {color.border.control} | 普通操作边界 |
| `color.action.danger.background` | color | {color.palette.red.700} | {color.palette.red.700} | 破坏性确认 |
| `color.action.danger.hover` | color | {color.palette.red.800} | {color.palette.red.800} | 危险操作悬停 |
| `color.action.danger.pressed` | color | {color.palette.red.900} | {color.palette.red.900} | 危险操作按下 |
| `color.action.danger.foreground` | color | {color.text.onDanger} | {color.text.onDanger} | 危险操作文字 |
| `color.action.danger.border` | color | {color.palette.red.700} | {color.palette.red.300} | 深色主题补足按钮边界 |
| `color.action.link.foreground` | color | {color.palette.teal.700} | {color.palette.teal.300} | 正文链接；默认下划线 |
| `color.selection.background` | color | {color.palette.yellow.100} | {color.palette.yellow.900} | 已选择的行、卡片、导航 |
| `color.selection.foreground` | color | {color.text.primary} | {color.text.primary} | 已选择内容文字 |
| `color.selection.border` | color | {color.palette.yellow.700} | {color.palette.yellow.500} | 选中强调边框 |
| `color.selection.marker` | color | {color.palette.yellow.700} | {color.palette.yellow.500} | 选中条、勾选标记 |
| `color.disabled.background` | color | {color.palette.neutral.100} | {color.palette.neutral.800} | 禁用控件填充 |
| `color.disabled.foreground` | color | {color.palette.neutral.600} | {color.palette.neutral.300} | 禁用内容；不通过降低整体透明度处理 |
| `color.disabled.border` | color | {color.border.subtle} | {color.border.subtle} | 禁用边界；须有文字说明或明确禁用语义 |

链接 hover 增粗下划线，pressed 保持颜色并使用即时按下反馈；不新增颜色。选中项 hover / pressed 保持 selection 配色，增加内部 1px / 2px 标记线，不改外框尺寸。不得让悬停态覆盖选中态。

### 3.3 反馈与状态

| 名称 | 类型 | light 值 / 引用 | dark 值 / 引用 | 用途 / 限制 |
| --- | --- | --- | --- | --- |
| `color.feedback.success.foreground` | color | {color.palette.green.700} | {color.palette.green.300} | 成功文字、图标、进度填充 |
| `color.feedback.success.background` | color | {color.palette.green.100} | {color.palette.green.900} | 成功消息背景 |
| `color.feedback.success.border` | color | {color.feedback.success.foreground} | {color.feedback.success.foreground} | 成功边界 |
| `color.feedback.warning.foreground` | color | {color.palette.amber.700} | {color.palette.amber.300} | 警告文字与图标 |
| `color.feedback.warning.background` | color | {color.palette.amber.100} | {color.palette.amber.900} | 警告消息背景 |
| `color.feedback.warning.border` | color | {color.feedback.warning.foreground} | {color.feedback.warning.foreground} | 警告边界 |
| `color.feedback.error.foreground` | color | {color.palette.red.700} | {color.palette.red.300} | 错误文字与图标 |
| `color.feedback.error.background` | color | {color.palette.red.100} | {color.palette.red.950} | 错误消息背景 |
| `color.feedback.error.border` | color | {color.feedback.error.foreground} | {color.feedback.error.foreground} | 错误边界、无效输入 |
| `color.feedback.info.foreground` | color | {color.palette.teal.700} | {color.palette.teal.300} | 信息文字与图标 |
| `color.feedback.info.background` | color | {color.palette.teal.100} | {color.palette.teal.900} | 信息消息背景 |
| `color.feedback.info.border` | color | {color.feedback.info.foreground} | {color.feedback.info.foreground} | 信息边界 |
| `color.progress.track` | color | {color.palette.neutral.200} | {color.palette.neutral.700} | 进度轨道；需搭配可读数值 |
| `color.progress.fill` | color | {color.palette.teal.700} | {color.palette.teal.300} | 普通过程进度 |
| `color.skeleton.base` | color | {color.palette.neutral.100} | {color.palette.neutral.800} | 占位块 |
| `color.skeleton.highlight` | color | {color.palette.neutral.200} | {color.palette.neutral.700} | 可选骨架高光；默认静态 |

加载不定义新的操作色：按钮保留原变体并增加进度图标；页面使用 skeleton 或 progress。成功/警告/错误/信息均附带对应图标和说明文字，颜色不是唯一渠道。

### 3.4 字体角色

下表是 typography 类型的组合 token：family / size / weight / lineHeight / letterSpacing，引用顺序固定。数字角色另附 numeric 属性。

| 名称 | 类型 | 共用值 / 引用 | 用途 |
| --- | --- | --- | --- |
| `type.body` | typography | {font.family.sans} / {font.size.16} / {font.weight.regular} / {font.lineHeight.body} / {font.letterSpacing.normal} | 正文 |
| `type.caption` | typography | {font.family.sans} / {font.size.14} / {font.weight.regular} / {font.lineHeight.body} / {font.letterSpacing.normal} | 辅助文字、错误说明 |
| `type.label` | typography | {font.family.sans} / {font.size.14} / {font.weight.medium} / {font.lineHeight.label} / {font.letterSpacing.normal} | 控件标签 |
| `type.heading.section` | typography | {font.family.sans} / {font.size.20} / {font.weight.semibold} / {font.lineHeight.heading} / {font.letterSpacing.normal} | 区块标题 |
| `type.heading.panel` | typography | {font.family.sans} / {font.size.24} / {font.weight.semibold} / {font.lineHeight.heading} / {font.letterSpacing.normal} | 面板 / 弹窗标题 |
| `type.heading.page` | typography | {font.family.sans} / {font.size.32} / {font.weight.semibold} / {font.lineHeight.heading} / {font.letterSpacing.normal} | 页面标题；窄屏改用 panel 角色 |
| `type.metric` | typography | {font.family.sans} / {font.size.40} / {font.weight.bold} / {font.lineHeight.tight} / {font.letterSpacing.normal} + {font.numeric.tabular} | 核心数值 |
| `type.code` | typography | {font.family.mono} / {font.size.14} / {font.weight.regular} / {font.lineHeight.body} / {font.letterSpacing.normal} | 代码与标识符 |
| `type.decoration` | typography | {font.family.mono} / {font.size.12} / {font.weight.medium} / {font.lineHeight.label} / {font.letterSpacing.code} | 装饰编号；不能承载必要信息 |

### 3.5 布局与密度角色

密度独立于主题。comfortable / compact 均完整定义；跨密度共用项仍显式列出。

| 名称 | 类型 | comfortable 引用 | compact 引用 | 用途 / 限制 |
| --- | --- | --- | --- | --- |
| `density.control.height` | dimension | {size.control.md} | {size.control.sm} | 单行控件最小高度，长文字可增长 |
| `density.control.paddingX` | dimension | {space.16} | {space.12} | 按钮 / 输入横向内边距 |
| `density.row.paddingY` | dimension | {space.12} | {space.8} | 列表、表格单元格上下内边距 |
| `density.row.gap` | dimension | {space.16} | {space.12} | 行内内容间隔 |
| `density.panel.padding` | dimension | {space.24} | {space.16} | 面板内边距 |
| `density.layout.gap` | dimension | {space.24} | {space.16} | 模块间距 |
| `layout.gutter.narrow` | dimension | {space.16} | {space.16} | 小于 640px 页面边距 |
| `layout.gutter.medium` | dimension | {space.24} | {space.24} | 640–1279px 页面边距 |
| `layout.gutter.wide` | dimension | {space.32} | {space.32} | 至少 1280px 页面边距 |

## 4. 组件 token 映射

共用列引用会在当前主题和密度下解析。`.primary.` 与 `.danger.` 是完整操作变体；其他交互组件遵守下一节状态合同。无独立 token 的属性按 UI/UX 规范直接引用语义角色，不为每个组件复制同一套值。

| 名称 | 类型 | 共用引用 | 用途 / 限制 |
| --- | --- | --- | --- |
| `button.height` | dimension | {density.control.height} | 默认按钮 |
| `button.paddingX` | dimension | {density.control.paddingX} | 横向内边距 |
| `button.gap` | dimension | {space.8} | 图标与文字 |
| `button.radius` | dimension | {radius.none} | 默认形状 |
| `button.type` | typography | {type.label} | 按钮文字 |
| `button.primary.background` | color | {color.action.primary.background} | 主操作 |
| `button.primary.hover` | color | {color.action.primary.hover} | 主操作悬停 |
| `button.primary.pressed` | color | {color.action.primary.pressed} | 主操作按下 |
| `button.primary.foreground` | color | {color.action.primary.foreground} | 主操作文字 |
| `button.primary.border` | color | {color.action.primary.border} | 主操作边界 |
| `button.secondary.background` | color | {color.action.secondary.background} | 普通操作 |
| `button.secondary.foreground` | color | {color.action.secondary.foreground} | 普通操作文字 |
| `button.secondary.border` | color | {color.action.secondary.border} | 普通操作边界 |
| `button.danger.background` | color | {color.action.danger.background} | 危险操作 |
| `button.danger.hover` | color | {color.action.danger.hover} | 危险悬停 |
| `button.danger.pressed` | color | {color.action.danger.pressed} | 危险按下 |
| `button.danger.foreground` | color | {color.action.danger.foreground} | 危险文字 |
| `button.danger.border` | color | {color.action.danger.border} | 危险边界 |
| `input.height` | dimension | {density.control.height} | 单行最小高度 |
| `input.paddingX` | dimension | {density.control.paddingX} | 内边距 |
| `input.radius` | dimension | {radius.subtle} | 输入形状 |
| `input.background` | color | {color.surface.default} | 输入背景 |
| `input.foreground` | color | {color.text.primary} | 值 |
| `input.placeholder` | color | {color.text.muted} | 占位，不替代标签 |
| `input.border` | color | {color.border.control} | 普通输入边界 |
| `input.invalidBorder` | color | {color.feedback.error.border} | 校验错误 |
| `choice.size` | dimension | {size.indicator} | checkbox / radio |
| `choice.checkedBackground` | color | {color.action.primary.background} | 勾选底色 |
| `choice.checkedForeground` | color | {color.text.onAccent} | 勾 / 圆点 |
| `choice.checkedBorder` | color | {color.action.primary.border} | 勾选边界 |
| `switch.width` | dimension | {space.48} | 可见轨道 |
| `switch.height` | dimension | {size.icon.lg} | 可见轨道 |
| `switch.thumbSize` | dimension | {size.icon.md} | 拇指，轨道内边距 2px |
| `switch.onBackground` | color | {color.action.primary.background} | 开启 |
| `switch.offBackground` | color | {color.surface.pressed} | 关闭 |
| `switch.thumb` | color | {color.text.onAccent} | 拇指；两态都用深色 |
| `switch.offBorder` | color | {color.border.strong} | 关闭时的边界与拇指边界 |
| `slider.trackHeight` | dimension | {space.4} | 轨道高度 |
| `slider.thumbSize` | dimension | {size.icon.md} | 拇指，使用独立 44px 触控区域 |
| `slider.fill` | color | {color.progress.fill} | 已选范围 |
| `slider.thumb` | color | {color.action.primary.background} | 拇指，附 primary.border |
| `navigation.itemHeight` | dimension | {density.control.height} | 导航最小高度 |
| `navigation.selectedBackground` | color | {color.selection.background} | 当前项 |
| `navigation.marker` | color | {color.selection.marker} | 2px 选中条 |
| `card.background` | color | {color.surface.default} | 卡片 |
| `card.padding` | dimension | {density.panel.padding} | 卡片内容 |
| `card.border` | color | {color.border.subtle} | 非交互卡片；可选择卡片用 border.control |
| `table.headerBackground` | color | {color.surface.subtle} | 表头 |
| `table.cellPaddingY` | dimension | {density.row.paddingY} | 单元格上下内边距 |
| `table.cellPaddingX` | dimension | {space.16} | 单元格横向内边距 |
| `table.divider` | color | {color.border.subtle} | 行分隔 |
| `badge.radius` | dimension | {radius.pill} | 徽标 |
| `badge.paddingX` | dimension | {space.8} | 徽标横向内边距 |
| `badge.paddingY` | dimension | {space.2} | 徽标上下内边距 |
| `floating.background` | color | {color.surface.raised} | 菜单、提示 |
| `floating.border` | color | {color.border.control} | 浮层边界 |
| `floating.radius` | dimension | {radius.soft} | 小浮层形状 |
| `floating.shadow` | shadow | {shadow.floating} | 浮层阴影 |
| `dialog.background` | color | {color.surface.raised} | 弹窗 / 抽屉背景 |
| `dialog.padding` | dimension | {density.panel.padding} | 弹窗内边距 |
| `dialog.radius` | dimension | {radius.none} | 弹窗形状 |
| `dialog.shadow` | shadow | {shadow.modal} | 弹窗层级 |
| `feedback.gap` | dimension | {space.8} | 图标与说明 |
| `feedback.padding` | dimension | {space.16} | 消息内容 |
| `progress.height` | dimension | {space.4} | 线性进度 |
| `skeleton.radius` | dimension | {radius.subtle} | 骨架形状 |

## 5. 状态组合合同

| 状态 | 配色 / 形状 | 行为 |
| --- | --- | --- |
| default | 组件映射 | 保留可见标签与关键边界 |
| hover | 操作使用对应 hover；普通表面使用 surface.hover | 仅支持悬停的设备使用，不作为唯一发现方式 |
| pressed | 操作使用对应 pressed；普通表面使用 surface.pressed | 不改变外部尺寸，不使内容跳动 |
| selected | selection 背景、前景、2px 边界或标记，增加勾选 / 当前项语义 | 持久数据状态；不能等同焦点 |
| focus-visible | focus.ring 外环 + focus.width + focus.offset | 叠加于 selected / error / hover 之上；不能被 overflow 裁切 |
| disabled | disabled 背景 / 前景 / 边界，忽略 hover / pressed | 禁止激活；说明原因放在可访问文本中 |
| loading | 保留原变体，图标位置显示进度，宽度不变 | 阻止重复提交，保持焦点并公布加载状态 |
| success / warning / error / info | 对应 feedback 三元组 + 图标 + 说明 | 不自动把成功或警告加到所有输入框 |

覆盖次序：disabled 覆盖操作与选择配色；loading 锁定 default 或 selected 外观并暂停 hover / pressed；普通项 selected 优先于 hover / pressed。输入 error 保留错误边界，不改变值文字；focus-visible 总是作为独立外环叠加，包含可聚焦的 loading 项。原生 disabled 控件不获得焦点，原因须在附近展示。

焦点外环需要位于未选中的 surface 或 canvas 上。紧贴其他黄色项时保留 4px 外围空间，使用完整背景色间隔，避免黄环与黄底合并。错误边界与焦点环同时可见，不以换成黄边界消除错误信息。

开关 off 的拇指增加 offBorder 的 1px 描边；on 使用 primary.border 的轨道边框。thumb 通过位置与“开 / 关”文字双重表达状态。禁用且选中时仍保留勾、拇指位置与选中语义，填充改为 disabled。

## 6. 对比度与验收依据

目标：普通文字至少 4.5:1；至少 24px 的普通文字或至少 20px 的粗体文字至少 3:1；关键图标、控件边界与焦点指示至少 3:1。正文默认仍按 4.5:1 设计。装饰分隔线与骨架不作为关键边界验收；不得承载必要信息。对比度数值按本文件定义的 sRGB 值及实际配对计算。

| 配对 | light 最低对比度 | dark 最低对比度 | 检查范围 |
| --- | --- | --- | --- |
| text.primary / 普通表面 | 14.50:1 | 11.51:1 | canvas、default、raised、subtle、hover、pressed、selection |
| text.secondary、text.muted / 普通表面 | 4.58:1 | 4.74:1 | 同上；最深 pressed 底也须通过 |
| action.primary.foreground / 主操作 | 12.81:1 | 12.81:1 | default、hover、pressed |
| action.danger.foreground / 危险操作 | 6.57:1 | 6.57:1 | default、hover、pressed |
| action.link.foreground / 普通表面 | 4.74:1 | 7.13:1 | 同上 |
| feedback.success.foreground / 背景 | 5.00:1 | 7.15:1 | 对应反馈背景与全部普通表面 |
| feedback.warning.foreground / 背景 | 4.60:1 | 7.83:1 | 对应反馈背景与全部普通表面 |
| feedback.error.foreground / 背景 | 5.03:1 | 5.42:1 | 对应反馈背景与全部普通表面 |
| feedback.info.foreground / 背景 | 4.74:1 | 7.07:1 | 对应反馈背景与全部普通表面 |
| border.control / 控件相邻普通表面 | 4.24:1 | 3.33:1 | canvas、default、raised、subtle；pressed 使用 border.strong |
| focus.ring / 外侧普通表面 | 5.23:1 | 12.69:1 | canvas、default、raised、subtle；不直接邻接黄填充 |
| action.primary.border / 按钮外侧 | 5.23:1 | 12.69:1 | 外侧 canvas、default、raised、subtle |
| action.danger.border / 按钮外侧 | 6.06:1 | 6.65:1 | 外侧 canvas、default、raised、subtle |
| selection.border / 背景 | 5.12:1 | 10.34:1 | 选中填充与外侧普通表面 |
| disabled.foreground / disabled.background | 4.85:1 | 6.08:1 | 主动保持禁用内容可读 |
| border.strong / surface.pressed | 4.58:1 | 6.08:1 | 按下的普通操作边界 |

已校验259个token：名称唯一、引用存在、无循环、单一别名类型一致，59个双主题映射完整（56个颜色、3个阴影）；6个密度角色及3个页面边距映射完整。上表覆盖178组颜色配对，文字最低4.58:1，关键边界最低3.33:1。比值保留两位小数，是否通过按未舍入值判断。

计算方式：每个sRGB通道除以255，若不大于0.04045则除以12.92，否则取 `((通道 + 0.055) / 1.055) ^ 2.4`；相对亮度为线性通道的 `0.2126R + 0.7152G + 0.0722B`；对比度为 `(较亮值 + 0.05) / (较暗值 + 0.05)`。关键边界检查组件与外侧相邻面，而不是要求组件自身填充与装饰描边也达到3:1。

验收还包括：引用存在且无循环、语义颜色双主题完整、密度映射完整；设置面板、筛选列表、确认弹窗全部可由本表表达。后续新增背景或新组合时重新计算配对，不假设单一色值天然符合所有背景。
