<template>
  <footer class="site-footer">
    <div class="site-footer-inner">
      <p class="site-footer-line">
        FansBuy - Your Trusted Fashion &amp; Lifestyle Guide |
        <a href="https://bestfansbuy.com/sitemap.xml" target="_blank" rel="noopener">Sitemap</a>
      </p>
      <p class="site-footer-line">
        Copyright &copy; 2026 FansBuy |
        <a href="https://bestfansbuy.com/">Home</a> |
        <a href="https://bestfansbuy.com/blog">Blog</a>
      </p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.site-footer {
  background: #f5f5f5;
  padding: 24px 20px;
  text-align: center;
  border-top: 1px solid #e0e0e0;
}

.site-footer-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.site-footer-line {
  margin: 0;
  padding: 4px 0;
  font-size: 14px;
  color: #666;
  line-height: 1.8;
}

.site-footer-line a {
  color: #666;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.site-footer-line a:hover {
  color: #8B0000;
}

@media (max-width: 480px) {
  .site-footer-line {
    font-size: 13px;
  }
}
</style>
