import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

import vueDevTools from 'vite-plugin-vue-devtools'

// 自动导入依赖如 Vue 里的 ref... 或者 React 里的 useState... 或者其他被支持的框架
import AutoImport from 'unplugin-auto-import/vite'

// 自动导入组件，无需手动导入
import Components from 'unplugin-vue-components/vite'

/**
 * 便捷转换 URL
 * @param path 相对路径
 * @returns 绝对路径
 */
const transformToURL = (path: string) => {
	return fileURLToPath(new URL(path, import.meta.url))
}

export default defineConfig({
	vite: {
		plugins: [
			vueDevTools(),
			AutoImport({
				imports: ['vue', 'vitepress'],
				dts: transformToURL('../types/auto-imports.d.ts')
			}),
			Components({
				dirs: [transformToURL('../components'), transformToURL('../views')],
				extensions: ['vue', 'md'],
				include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
				dts: fileURLToPath(
					// @ts-ignore
					new URL('../types/components.d.ts', import.meta.url)
				)
			})
		],
		resolve: {
			alias: [
				{
					find: '@',
					replacement: transformToURL('../../theme')
				},
				{
					find: /^.*\/VPFeature\.vue$/,
					replacement: transformToURL('../components/VPFeature.vue')
				}
			]
		}
	}
})
