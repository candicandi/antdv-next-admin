import AntdvNext from 'antdv-next'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { registerDefaultComponentProps } from './components/Global/defaultComponentProps'
import { setupDirectives } from './directives'
import i18n from './locales'
import router from './router'
import { setupMockInterceptor } from './utils/mockInterceptor'

// Import global styles
import 'antdv-next/dist/reset.css'
import './assets/styles/global.css'
import './assets/styles/variables.css'
import './assets/styles/animations.css'

// Enable client-side mock interceptor for production builds on static hosting
setupMockInterceptor()

const app = createApp(App)

// Register plugins
app.use(createPinia())
app.use(AntdvNext)
app.use(router)
app.use(i18n)
registerDefaultComponentProps(app)

// Register custom directives
setupDirectives(app)

app.mount('#app')
