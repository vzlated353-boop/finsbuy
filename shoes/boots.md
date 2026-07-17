---
title: Boots - Product Table
description: Browse our boots collection with product details, pricing, and batch information.
---

<script setup>
import TablePage from '../.vitepress/theme/components/TablePage.vue'

const tableData = [
  { name: 'Timberland 6-Inch Premium', brand: 'Timberland', price: '$120', batch: 'V2.5', link: '' },
  { name: 'Dr. Martens 1460', brand: 'Dr. Martens', price: '$110', batch: 'V3.1', link: '' },
  { name: 'Red Wing Iron Ranger', brand: 'Red Wing', price: '$130', batch: 'V1.8', link: '' },
  { name: 'UGG Classic Short II', brand: 'UGG', price: '$100', batch: 'V2.2', link: '' },
  { name: 'Blundstone 550', brand: 'Blundstone', price: '$115', batch: 'V1.5', link: '' },
]
</script>

<TablePage
  title="Boots"
  description="From work boots to fashion boots. Durable construction with weather-resistant materials for all-season wear."
  backLink="/shoes"
  backLabel="Shoes"
  :tableData="tableData"
/>
