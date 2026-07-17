---
title: Basketball Shoes - Product Table
description: Browse our basketball shoes collection with product details, pricing, and batch information.
---

<script setup>
import TablePage from '../.vitepress/theme/components/TablePage.vue'

const tableData = [
  { name: 'Jordan 1 Retro High OG', brand: 'Jordan', price: '$110', batch: 'V4.1', link: '' },
  { name: 'Nike LeBron 21', brand: 'Nike', price: '$105', batch: 'V2.3', link: '' },
  { name: 'Adidas Harden Vol. 7', brand: 'Adidas', price: '$95', batch: 'V1.9', link: '' },
  { name: 'Under Armour Curry 11', brand: 'Under Armour', price: '$100', batch: 'V2.0', link: '' },
  { name: 'Puma MB.03', brand: 'Puma', price: '$90', batch: 'V1.5', link: '' },
]
</script>

<TablePage
  title="Basketball Shoes"
  description="High-performance basketball shoes with ankle support, court grip, and impact protection. Find the perfect pair for your game."
  backLink="/shoes"
  backLabel="Shoes"
  :tableData="tableData"
/>
