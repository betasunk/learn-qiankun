import { registerMicroApps,start} from 'qiankun';
import Vue from 'vue'
import App from '../App.vue'
new Vue({
  render: (h) => h(App)
}).$mount('#app')

let _appConfig=[
  // {
  //   name: 'base',
  //   entry: '//localhost:8080',
  //   container: '#container',
  //   activeRule: '/base-app',
  //   props: {
  //     name: 'kuitos',
  //   },
  // },
  {
    name: 'bootstrap',
    entry: '//localhost:8081/bootstrap-app/',
    container: '#container',
    activeRule: '/bootstrap-app',
    props: {
      name: 'kuitos',
      container: '#container',
    },
  },
]
registerMicroApps(_appConfig,
    {
      beforeLoad: (app) => console.log('before load', app.name),
      beforeMount: [(app) => console.log('before mount', app.name)],
    },
);

function startMicroApp(){
  start({ 
    prefetch:true,
    singular:false,
    sandbox :{ experimentalStyleIsolation: true }
 })
}

// setDefaultMountApp('/base-app')

startMicroApp()