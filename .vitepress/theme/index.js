import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'
import GlobalNavbar from './components/GlobalNavbar.vue'
import SiteFooter from './components/SiteFooter.vue'
import ArticleNavigation from './components/ArticleNavigation.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(ArticleNavigation),
      'layout-bottom': () => h(SiteFooter)
    })
  },
  enhanceApp({ app }) {
    app.component('GlobalNavbar', GlobalNavbar)
  }
}
