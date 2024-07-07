import { defineConfig } from 'vitepress'
import viteConfig from './theme/configs/vite-config'

export default defineConfig({
	title: '猫雨の博客',
	titleTemplate: '更新版',
	description: '一个自说自话的地方',
	lang: 'zh-CN',
	head: [['link', { rel: 'icon', href: 'favicon.png' }]],

	themeConfig: {
		socialLinks: [{ icon: 'github', link: 'https://github.com/ainekorain' }],
		editLink: {
			pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
			text: '在 GitHub 上编辑此页面'
		},

		footer: {
			message: '禁止非法转载',
			copyright: `版权所有 © 2018-${new Date().getFullYear()} 猫雨`
		},

		docFooter: {
			prev: '上一页',
			next: '下一页'
		},

		outline: {
			label: '页面导航'
		},

		lastUpdated: {
			text: '最后更新于',
			formatOptions: {
				dateStyle: 'short',
				timeStyle: 'medium'
			}
		}
	},

	markdown: {
		image: {
			// 默认禁用图片懒加载
			lazyLoading: true
		}
	},

	lastUpdated: true,
	cleanUrls: true,
	srcDir: './src',

	...viteConfig
})
