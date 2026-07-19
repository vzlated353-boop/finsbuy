<template>
  <footer class="site-footer">
    <p class="site-footer-line">
      FansBuy - Your Trusted Fashion &amp; Lifestyle Guide |
      <a href="https://bestfansbuy.com/sitemap.xml" target="_blank" rel="noopener">Sitemap</a>
    </p>
    <p class="site-footer-line">
      Copyright &copy; 2026 FansBuy
    </p>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.site-footer {
  background: #f0f0f0;
  padding: 20px 16px;
  text-align: center;
}

.site-footer-line {
  margin: 0;
  padding: 3px 0;
  font-size: 14px;
  color: #555;
  line-height: 1.6;
}

.site-footer-line a {
  color: #555;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.site-footer-line a:hover {
  color: #8B0000;
}

@media (max-width: 480px) {
  .site-footer-line {
    font-size: 12px;
  }
}
</style>
