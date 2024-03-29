import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

console.log('window.__POWERED_BY_QIANKUN__===',window.__POWERED_BY_QIANKUN__);


export async function bootstrap(props) {
  // renderApp(props)
  console.log('props===',props);
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  renderApp(props)
  // 标记当前启动形式为微服务启动
  console.log('props',props);
}

export async function unmount() {
  
}

function renderApp(props={}) {
  console.log('props===',props);
  const {container} =props
  new Vue({
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if(!window.__POWERED_BY_QIANKUN__){
  renderApp()
}

