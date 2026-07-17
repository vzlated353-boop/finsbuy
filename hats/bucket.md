---
title: Bucket Hats - Product Table
description: Browse our bucket hats collection with product details, pricing, and batch information.
---

<script setup>
import TablePage from '../.vitepress/theme/components/TablePage.vue'

const tableData = [
  { name: 'Stussy Stock Bucket Hat', brand: 'Stussy', price: '$40', batch: 'V2.5', link: '' },
  { name: 'Supreme Box Logo Bucket Hat', brand: 'Supreme', price: '$60', batch: 'V2.8', link: '' },
  { name: 'Bape Shark Bucket Hat', brand: 'Bape', price: '$55', batch: 'V2.0', link: '' },
  { name: 'Corteiz Alcatraz Bucket Hat', brand: 'Corteiz', price: '$45', batch: 'V1.9', link: '' },
  { name: 'Ralph Lauren Bucket Hat', brand: 'Ralph Lauren', price: '$50', batch: 'V2.2', link: '' },
]
</script>

<TablePage
  title="Bucket Hats"
  description="Wide-brimmed hats for sun protection and style. Made from cotton, nylon, or denim for different looks."
  backLink="/hats"
  backLabel="Hats"
  :tableData="tableData"
/>
