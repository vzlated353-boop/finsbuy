---
title: Casual Sneakers - Product Table
description: Browse our casual sneakers collection with product details, pricing, and batch information.
---

<script setup>
import TablePage from '../.vitepress/theme/components/TablePage.vue'

const tableData = [
  { name: 'Nike Air Force 1 Low', brand: 'Nike', price: '$75', batch: 'V5.0', link: '' },
  { name: 'Adidas Stan Smith', brand: 'Adidas', price: '$65', batch: 'V3.2', link: '' },
  { name: 'New Balance 574', brand: 'New Balance', price: '$70', batch: 'V2.8', link: '' },
  { name: 'Converse Chuck Taylor All Star', brand: 'Converse', price: '$55', batch: 'V4.5', link: '' },
  { name: 'Vans Old Skool', brand: 'Vans', price: '$60', batch: 'V3.0', link: '' },
]
</script>

<TablePage
  title="Casual Sneakers"
  description="Everyday lifestyle sneakers from classic silhouettes to modern designs. Versatile enough for any occasion."
  backLink="/shoes"
  backLabel="Shoes"
  :tableData="tableData"
/>
