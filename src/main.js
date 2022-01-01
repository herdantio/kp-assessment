import { createApp } from 'vue'
import App from './App.vue'
import root from './store/index.js'

import './index.css'
import { createStore } from 'vuex'

const store = createStore(root)

createApp(App).use(store).mount('#app')
