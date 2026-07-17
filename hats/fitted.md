---
title: Fitted Caps - Product Table
description: Browse our fitted caps collection with product details, pricing, and batch information.
---

<script setup>
import TablePage from '../.vitepress/theme/components/TablePage.vue'

const tableData = [
  { name: 'New Era 59FIFTY Fitted', brand: 'New Era', price: '$40', batch: 'V3.5', link: '' },
  { name: 'Supreme Box Logo Fitted', brand: 'Supreme', price: '$65', batch: 'V2.5', link: '' },
  { name: 'Bape Shark Fitted', brand: 'Bape', price: '$55', batch: 'V2.0', link: '' },
  { name: 'Stussy Stock Fitted', brand: 'Stussy', price: '$45', batch: 'V2.8', link: '' },
  { name: 'Corteiz Alcatraz Fitted', brand: 'Corteiz', price: '$48', batch: 'V1.9', link: '' },
]
</script>

<TablePage
  title="Fitted Caps"
  description="Structured caps with a fixed size. Premium construction with no adjustable strap for a clean, tailored look."
  backLink="/hats"
  backLabel="Hats"
  :tableData="tableData"
/>
