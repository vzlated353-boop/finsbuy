<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-inner">
        <h1 class="hero-title">{{ brand.name }}</h1>
        <p class="hero-subtitle">{{ brand.tagline }}</p>
        <p class="hero-desc">{{ brand.description }}</p>
        <!-- Category Buttons -->
        <div class="hero-buttons">
          <a
            v-for="cat in categories"
            :key="cat.id"
            :href="`/${cat.id}`"
            class="hero-btn"
          >
            <span class="btn-icon">{{ cat.icon }}</span>
            <span class="btn-text">{{ cat.name }}</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Announcement -->
    <section class="announcement-bar" v-if="announcement">
      <div class="container">
        <span class="announcement-icon">&#128227;</span>
        <span>{{ announcement }}</span>
      </div>
    </section>

    <!-- Category Cards -->
    <section class="categories-section">
      <div class="container">
        <h2 class="section-title">Explore Categories</h2>
        <div class="category-grid">
          <a
            v-for="cat in categories"
            :key="cat.id"
            :href="`/${cat.id}`"
            class="category-card"
          >
            <div class="cat-icon">{{ cat.icon }}</div>
            <h3>{{ cat.name }}</h3>
            <p>{{ cat.description }}</p>
            <div class="cat-subcount" v-if="cat.subcategories">{{ cat.subcategories.length }} subcategories</div>
          </a>
        </div>
      </div>
    </section>

    <!-- Quick Links -->
    <section class="quick-links">
      <div class="container">
        <h2 class="section-title">Quick Access</h2>
        <div class="links-grid">
          <a :href="links.spreadsheet" target="_blank" class="quick-link-card">
            <div class="ql-icon">&#128203;</div>
            <h3>Product Spreadsheet</h3>
            <p>Browse the full product catalog with prices, links, and QC photos.</p>
          </a>
          <a href="/about" class="quick-link-card">
            <div class="ql-icon">&#8505;</div>
            <h3>About Us</h3>
            <p>Learn more about our mission and how we help you find the best products.</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Explore More -->
    <section class="explore-more">
      <div class="container">
        <h2 class="section-title">Explore More</h2>
        <div class="explore-grid">
          <a href="/about" class="explore-card">
            <div class="explore-icon">&#8505;</div>
            <h3>About</h3>
            <p>Learn more about our mission and how we help you find the best products.</p>
          </a>
          <a href="/blog" class="explore-card">
            <div class="explore-icon">&#128218;</div>
            <h3>Blog</h3>
            <p>Read our latest guides, reviews, and shopping tips.</p>
          </a>
          <a href="/shoes" class="explore-card">
            <div class="explore-icon">&#128095;</div>
            <h3>Shoes</h3>
            <p>Discover the best sneakers, boots, and casual footwear.</p>
          </a>
          <a href="/clothes" class="explore-card">
            <div class="explore-icon">&#128085;</div>
            <h3>Clothes</h3>
            <p>Explore streetwear, hoodies, jackets, and more.</p>
          </a>
          <a href="/hats" class="explore-card">
            <div class="explore-icon">&#129509;</div>
            <h3>Hats</h3>
            <p>Find the perfect cap, beanie, or bucket hat.</p>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { siteConfig } from '../site-config.js'

const brand = siteConfig.brand
const categories = siteConfig.categories
const announcement = siteConfig.announcement
const links = siteConfig.links
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero */
.hero {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  padding: 80px 20px;
  text-align: center;
}

.hero-inner {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 48px;
  font-weight: 800;
  color: #d4af37;
  margin-bottom: 16px;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 22px;
  color: #fff;
  font-weight: 400;
  margin-bottom: 16px;
}

.hero-desc {
  font-size: 16px;
  color: rgba(255,255,255,0.7);
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto;
}

/* Hero Buttons */
.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: rgba(255,255,255,0.1);
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 12px;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.hero-btn:hover {
  background: rgba(212,175,55,0.2);
  border-color: #d4af37;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(212,175,55,0.3);
}

.btn-icon {
  font-size: 20px;
}

.btn-text {
  letter-spacing: 0.5px;
}

/* Announcement */
.announcement-bar {
  background: #fff8e1;
  border-bottom: 1px solid #ffe082;
  padding: 12px 20px;
  text-align: center;
}

.announcement-bar .container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  color: #6d4c00;
}

.announcement-icon {
  font-size: 16px;
}

/* Categories */
.categories-section {
  padding: 64px 0;
}

.section-title {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 40px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.category-card {
  display: block;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 32px 24px;
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
}

.category-card:hover {
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  transform: translateY(-4px);
  border-color: #d4af37;
}

.cat-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.category-card h3 {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.category-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
}

.cat-subcount {
  display: inline-block;
  padding: 4px 14px;
  background: #f5f5f5;
  border-radius: 20px;
  font-size: 12px;
  color: #888;
  font-weight: 500;
}

/* Quick Links */
.quick-links {
  padding: 0 0 64px;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.quick-link-card {
  display: block;
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 32px 24px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.quick-link-card:hover {
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}

.ql-icon {
  font-size: 36px;
  margin-bottom: 12px;
}

.quick-link-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.quick-link-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* Explore More */
.explore-more {
  background: #f8f9fa;
  padding: 64px 0;
}

.explore-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.explore-card {
  display: block;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 28px 20px;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
}

.explore-card:hover {
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  transform: translateY(-4px);
  border-color: #d4af37;
}

.explore-icon {
  font-size: 40px;
  margin-bottom: 12px;
}

.explore-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.explore-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .hero { padding: 48px 20px; }
  .hero-title { font-size: 32px; }
  .hero-subtitle { font-size: 18px; }
  .section-title { font-size: 24px; }
  .category-grid { grid-template-columns: 1fr; }
  .links-grid { grid-template-columns: 1fr; }
  .explore-grid { grid-template-columns: 1fr; }
}
</style>
