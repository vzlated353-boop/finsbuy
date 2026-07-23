<template>
  <div class="article-cta-injected"></div>
</template>

<script setup>
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

function injectShoppingButton() {
  // Remove any previously injected button
  const existing = document.querySelector('.article-cta-shopping-btn')
  if (existing) existing.remove()

  // Find the Spreadsheet button (first link after h1)
  const spreadsheetBtn = document.querySelector(
    '.vp-doc h1 + p a[href*="docs.google.com/spreadsheets"], .vp-doc h1 + p a[href*="spreadsheet"]'
  )
  if (!spreadsheetBtn) return

  // Create Start shopping button
  const shopBtn = document.createElement('a')
  shopBtn.href = 'https://repsootd.com/'
  shopBtn.target = '_blank'
  shopBtn.rel = 'nofollow'
  shopBtn.className = 'article-cta-shopping-btn'
  shopBtn.textContent = 'Start shopping'

  // Insert after Spreadsheet button with a spacer
  const spacer = document.createElement('span')
  spacer.className = 'article-cta-spacer'
  spacer.innerHTML = '&nbsp;&nbsp;'

  spreadsheetBtn.parentNode.insertBefore(spacer, spreadsheetBtn.nextSibling)
  spreadsheetBtn.parentNode.insertBefore(shopBtn, spacer.nextSibling)
}

onMounted(() => {
  nextTick(() => injectShoppingButton())
})

watch(() => route.path, () => {
  nextTick(() => injectShoppingButton())
})
</script>

<style scoped>
.article-cta-injected {
  display: none;
}
</style>
