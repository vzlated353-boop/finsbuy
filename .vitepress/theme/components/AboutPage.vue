<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>About {{ brand.name }}</h1>
        <p>{{ frontmatter.heroSubtitle }}</p>
      </div>
    </section>

    <!-- Introduction -->
    <section class="about-content">
      <div class="container">
        <h2>Who We Are</h2>
        <p>{{ frontmatter.introduction }}</p>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="mission-section">
      <div class="container">
        <div class="mission-grid">
          <div v-for="item in frontmatter.mission" :key="item.title" class="mission-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Trust Us -->
    <section class="trust-section">
      <div class="container">
        <h2 class="section-title">Why Trust Us</h2>
        <div class="features-grid">
          <div v-for="item in frontmatter.whyTrustUs" :key="item.title" class="feature-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="contact-section">
      <div class="container">
        <h2 class="section-title">Get in Touch</h2>
        <div class="contact-grid">
          <div v-for="item in frontmatter.contactInfo" :key="item.type" class="contact-card">
            <div class="contact-type">{{ item.type }}</div>
            <div class="contact-value">{{ item.value }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
import { siteConfig } from '../site-config.js'

const { frontmatter } = useData()
const brand = siteConfig.brand
</script>

<style scoped>
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

.hero h1 {
  font-size: 48px;
  font-weight: 800;
  color: #d4af37;
  margin-bottom: 16px;
}

.hero p {
  font-size: 20px;
  color: rgba(255,255,255,0.8);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* About Content */
.about-content {
  padding: 64px 20px;
}

.about-content h2 {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 20px;
}

.about-content p {
  font-size: 16px;
  color: #555;
  line-height: 1.8;
  max-width: 800px;
}

/* Mission */
.mission-section {
  padding: 0 20px 64px;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.mission-card {
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 28px;
}

.mission-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #8B0000;
  margin-bottom: 10px;
}

.mission-card p {
  font-size: 14px;
  color: #555;
  line-height: 1.7;
}

/* Trust Section */
.trust-section {
  padding: 0 20px 64px;
}

.section-title {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 40px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.feature-card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.2s ease;
}

.feature-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}

.feature-card h3 {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.feature-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* Contact */
.contact-section {
  padding: 0 20px 64px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.contact-card {
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
}

.contact-type {
  font-size: 12px;
  font-weight: 600;
  color: #8B0000;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.contact-value {
  font-size: 15px;
  color: #333;
  font-weight: 500;
}

@media (max-width: 768px) {
  .hero { padding: 48px 20px; }
  .hero h1 { font-size: 32px; }
  .hero p { font-size: 16px; }
  .section-title { font-size: 24px; }
  .about-content h2 { font-size: 24px; }
  .features-grid { grid-template-columns: 1fr; }
  .mission-grid { grid-template-columns: 1fr; }
}
</style>
