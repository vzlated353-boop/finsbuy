---
title: Pants & Jeans - Product Table
description: Browse our pants and jeans collection with product details, pricing, and batch information.
---

<script setup>
import TablePage from '../.vitepress/theme/components/TablePage.vue'

const tableData = [
  { name: 'Gallery Dept Flare Jeans', brand: 'Gallery Dept', price: '$95', batch: 'V2.0', link: '' },
  { name: 'Amiri MX1 Jeans', brand: 'Amiri', price: '$105', batch: 'V1.8', link: '' },
  { name: 'Ralph Lauren Classic Fit Chinos', brand: 'Ralph Lauren', price: '$65', batch: 'V3.1', link: '' },
  { name: 'Stone Island Cargo Pants', brand: 'Stone Island', price: '$85', batch: 'V2.3', link: '' },
  { name: 'Essentials Drawstring Pants', brand: 'Essentials', price: '$55', batch: 'V2.5', link: '' },
]
</script>

<TablePage
  title="Pants & Jeans"
  description="Straight, slim, relaxed, and tapered fits. Denim, cargo, track pants, and chinos for every style preference."
  backLink="/clothes"
  backLabel="Clothes"
  :tableData="tableData"
/>
