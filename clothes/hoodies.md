---
title: Hoodies & Sweatshirts - Product Table
description: Browse our hoodies and sweatshirts collection with product details, pricing, and batch information.
---

<script setup>
import TablePage from '../.vitepress/theme/components/TablePage.vue'

const tableData = [
  { name: 'Essentials Fear of God Hoodie', brand: 'Essentials', price: '$65', batch: 'V2.0', link: '' },
  { name: 'Supreme Box Logo Hoodie', brand: 'Supreme', price: '$85', batch: 'V3.5', link: '' },
  { name: 'Bape Shark Hoodie', brand: 'Bape', price: '$95', batch: 'V2.3', link: '' },
  { name: 'Trapstar Decoded Hoodie', brand: 'Trapstar', price: '$75', batch: 'V1.9', link: '' },
  { name: 'Corteiz Alcatraz Hoodie', brand: 'Corteiz', price: '$70', batch: 'V2.1', link: '' },
]
</script>

<TablePage
  title="Hoodies & Sweatshirts"
  description="Pullover and zip-up styles in fleece, French terry, and heavyweight cotton. Perfect for layering in any season."
  backLink="/clothes"
  backLabel="Clothes"
  :tableData="tableData"
/>
