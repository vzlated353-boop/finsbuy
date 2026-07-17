---
title: Slides & Sandals - Product Table
description: Browse our slides and sandals collection with product details, pricing, and batch information.
---

<script setup>
import TablePage from '../.vitepress/theme/components/TablePage.vue'

const tableData = [
  { name: 'Nike Benassi', brand: 'Nike', price: '$35', batch: 'V4.0', link: '' },
  { name: 'Adidas Adilette', brand: 'Adidas', price: '$40', batch: 'V3.5', link: '' },
  { name: 'Yeezy Slide', brand: 'Yeezy', price: '$55', batch: 'V2.1', link: '' },
  { name: 'Birkenstock Arizona', brand: 'Birkenstock', price: '$60', batch: 'V2.8', link: '' },
  { name: 'Reef Fanning', brand: 'Reef', price: '$45', batch: 'V1.9', link: '' },
]
</script>

<TablePage
  title="Slides & Sandals"
  description="Comfortable slip-on footwear for casual wear. Easy to pair with any outfit for a relaxed look."
  backLink="/shoes"
  backLabel="Shoes"
  :tableData="tableData"
/>
