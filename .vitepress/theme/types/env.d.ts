/// <reference types="vite/client" />
declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent
	export default component
}

// UnoCSS 属性化类型定义
import type { AttributifyAttributes } from '@unocss/preset-attributify'
declare module '@vue/runtime-dom' {
	interface HTMLAttributes extends AttributifyAttributes {}
}
