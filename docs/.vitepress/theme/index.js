import DefaultTheme from 'vitepress/theme'
import CustomLayout from './CustomLayout.vue'
import EmailLink from './EmailLink.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app }) {
    app.component('EmailLink', EmailLink)
  },
}
