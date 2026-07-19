import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'
import GlobalNavbar from './components/GlobalNavbar.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h('div', [
      h(GlobalNavbar),
      h(DefaultTheme.Layout),
      h(SiteFooter)
    ])
  }
}
