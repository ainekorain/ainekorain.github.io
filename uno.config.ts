//访问 Vite 开发服务器中的 localhost:5173/__unocss 以查看检查器。
import {
	defineConfig,
	presetAttributify, // 属性化
	presetIcons, // 图标
	presetTypography, // 排版
	presetUno, // 基础预设，可以使用 WindCSS 和 TailwindCSS 的原子化工具
	presetWebFonts, // 网络字体
	transformerDirectives, // 指令转换器
	transformerVariantGroup // 变体组转换器
} from 'unocss'

export default defineConfig({
	shortcuts: [],
	theme: {},
	presets: [presetUno(), presetAttributify(), presetIcons(), presetTypography(), presetWebFonts()],
	transformers: [transformerDirectives(), transformerVariantGroup()]
})
