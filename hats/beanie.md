---
title: Beanies - Product Table
description: Browse our beanies collection with product details, pricing, and batch information.
---

<script setup>
import TablePage from '../.vitepress/theme/components/TablePage.vue'

const tableData = [
  { name: 'Carhartt Acrylic Watch Hat', brand: 'Carhartt', price: '$25', batch: 'V4.0', link: '' },
  { name: 'Supreme Box Logo Beanie', brand: 'Supreme', price: '$45', batch: 'V3.2', link: '' },
  { name: 'Stussy Stock Beanie', brand: 'Stussy', price: '$35', batch: 'V2.5', link: '' },
  { name: 'Bape Shark Beanie', brand: 'Bape', price: '$40', batch: 'V2.0', link: '' },
  { name: 'Corteiz Alcatraz Beanie', brand: 'Corteiz', price: '$38', batch: 'V1.8', link: '' },
]
</script>

<TablePage
  title="Beanies"
  description="Knit caps for cold weather. Available in ribbed, cuffed, and slouchy styles. Warm and versatile for winter wear."
  backLink="/hats"
  backLabel="Hats"
  :tableData="tableData"
/>
