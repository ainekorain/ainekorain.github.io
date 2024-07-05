import { defineConfig } from 'vitepress'
import viteConfig from './theme/configs/vite-config'

export default defineConfig({
	title: '猫雨の博客',
	description: '一个自说自话的地方',
	themeConfig: {
		socialLinks: [{ icon: 'github', link: 'https://github.com/ainekorain' }]
	},

	srcDir: './src',

	...viteConfig
})
