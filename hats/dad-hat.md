---
title: Dad Hats - Product Table
description: Browse our dad hats collection with product details, pricing, and batch information.
---

<script setup>
import TablePage from '../.vitepress/theme/components/TablePage.vue'

const tableData = [
  { name: 'Ralph Lauren Polo Dad Hat', brand: 'Ralph Lauren', price: '$35', batch: 'V3.0', link: '' },
  { name: 'Stussy Stock Dad Hat', brand: 'Stussy', price: '$38', batch: 'V2.5', link: '' },
  { name: 'Supreme Box Logo Dad Hat', brand: 'Supreme', price: '$50', batch: 'V2.8', link: '' },
  { name: 'Bape Shark Dad Hat', brand: 'Bape', price: '$45', batch: 'V2.0', link: '' },
  { name: 'Corteiz Alcatraz Dad Hat', brand: 'Corteiz', price: '$42', batch: 'V1.9', link: '' },
]
</script>

<TablePage
  title="Dad Hats"
  description="Unstructured, low-profile caps with a curved brim. Relaxed fit with an adjustable strap for everyday comfort."
  backLink="/hats"
  backLabel="Hats"
  :tableData="tableData"
/>
