---
title: Jackets & Outerwear - Product Table
description: Browse our jackets and outerwear collection with product details, pricing, and batch information.
---

<script setup>
import TablePage from '../.vitepress/theme/components/TablePage.vue'

const tableData = [
  { name: 'The North Face Nuptse Jacket', brand: 'The North Face', price: '$110', batch: 'V2.5', link: '' },
  { name: 'Canada Goose Langford Parka', brand: 'Canada Goose', price: '$150', batch: 'V1.8', link: '' },
  { name: 'Stone Island Soft Shell Jacket', brand: 'Stone Island', price: '$120', batch: 'V2.0', link: '' },
  { name: 'Moncler Maya Down Jacket', brand: 'Moncler', price: '$140', batch: 'V1.5', link: '' },
  { name: 'Burberry Check Hooded Jacket', brand: 'Burberry', price: '$130', batch: 'V2.2', link: '' },
]
</script>

<TablePage
  title="Jackets & Outerwear"
  description="Windbreakers, puffer jackets, denim jackets, and more. Functional and stylish pieces for all weather conditions."
  backLink="/clothes"
  backLabel="Clothes"
  :tableData="tableData"
/>
