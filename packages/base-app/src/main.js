import 'zone.js' // 暂时解决qiankun内存泄露问题

// 引人公共样式
// import '@haic/common-css/src/styles/index.scss'
// import './icon-font/iconfont.js'

import './register-microapp' // 注册并启动微应用

// 解决document.body.appendChild导致qiankun样式隔离失效问题
// const { addOperationNode } = require('@haic/mark-append-plugin')
// addOperationNode.default()

// 修复elementUI tooltips报错问题
// import { fixGetComputedStyle } from './utils/fix-element-ui'
// fixGetComputedStyle()

window.addEventListener('single-spa:first-mount', () => {
  console.log('第一个应用已挂载')
})
