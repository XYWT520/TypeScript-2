import { createApp } from 'vue'
// 导入 pinia
import { createPinia } from 'pinia'
import App from './App.vue'
import './styles/index.css'
// 创建 pinia
const pinia = createPinia()

//挂载 pinia
createApp(App).use(pinia).mount('#app')
