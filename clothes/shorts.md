---
title: Shorts - Product Table
description: Browse our shorts collection with product details, pricing, and batch information.
---

<script setup>
import TablePage from '../.vitepress/theme/components/TablePage.vue'

const tableData = [
  { name: 'Nike Sportswear Club Shorts', brand: 'Nike', price: '$35', batch: 'V2.0', link: '' },
  { name: 'Ralph Lauren Polo Shorts', brand: 'Ralph Lauren', price: '$45', batch: 'V2.5', link: '' },
  { name: 'Stone Island Swim Shorts', brand: 'Stone Island', price: '$55', batch: 'V1.5', link: '' },
  { name: 'Bape ABC Camo Shorts', brand: 'Bape', price: '$50', batch: 'V1.8', link: '' },
  { name: 'Corteiz Alcatraz Shorts', brand: 'Corteiz', price: '$40', batch: 'V2.1', link: '' },
]
</script>

<TablePage
  title="Shorts"
  description="Athletic, cargo, denim, and casual shorts. Comfortable options for warm weather and active lifestyles."
  backLink="/clothes"
  backLabel="Clothes"
  :tableData="tableData"
/>
