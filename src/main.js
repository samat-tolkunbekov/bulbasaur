import { createApp } from 'vue'
import App from './components/pages/AppView.vue'
import router from './router'
import store from './store/modules/pomodoro'

createApp(App).use(store).use(router).mount('#app')
