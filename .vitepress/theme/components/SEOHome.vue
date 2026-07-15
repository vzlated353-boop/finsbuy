<template>
  <div class="seo-home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>Discover Fashion & Lifestyle</h1>
        <p>Your Ultimate Shopping Guide Platform</p>
        <a href="#categories" class="cta-button">Explore Categories</a>
      </div>
    </section>

    <!-- Category Navigation -->
    <section class="category-nav">
      <div class="container">
        <h2>Shop by Category</h2>
        <div class="category-grid">
          <a href="/clothes" class="category-card">
            <div class="category-icon">👕</div>
            <h3>Clothes</h3>
            <p>Placeholder text for clothes category</p>
          </a>
          <a href="/shoes" class="category-card">
            <div class="category-icon">👟</div>
            <h3>Shoes</h3>
            <p>Placeholder text for shoes category</p>
          </a>
          <a href="/watches" class="category-card">
            <div class="category-icon">⌚</div>
            <h3>Watches</h3>
            <p>Placeholder text for watches category</p>
          </a>
          <a href="/bags" class="category-card">
            <div class="category-icon">💼</div>
            <h3>Bags</h3>
            <p>Placeholder text for bags category</p>
          </a>
          <a href="/accessories" class="category-card">
            <div class="category-icon">✨</div>
            <h3>Accessories</h3>
            <p>Placeholder text for accessories category</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Platform Navigation -->
    <section class="platform-nav">
      <div class="container">
        <h2>Shopping Platforms</h2>
        <div class="platform-grid">
          <a href="/platform" class="platform-card">
            <h3>Platform 1</h3>
            <p>Placeholder text for platform</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-choose">
      <div class="container">
        <h2>Why Choose Us?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📂</div>
            <h3>Organized</h3>
            <p>Placeholder text</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h3>Updated</h3>
            <p>Placeholder text</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔍</div>
            <h3>Easy Search</h3>
            <p>Placeholder text</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💰</div>
            <h3>Transparent</h3>
            <p>Placeholder text</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🧭</div>
            <h3>Simple</h3>
            <p>Placeholder text</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📈</div>
            <h3>Growing</h3>
            <p>Placeholder text</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Collections -->
    <section class="featured">
      <div class="container">
        <h2>Featured Collections</h2>
        <div class="collections-grid">
          <a :href="spreadsheetUrl" target="_blank" class="collection-card">
            <h3>Collection 1</h3>
            <p>Placeholder text</p>
          </a>
          <a :href="spreadsheetUrl" target="_blank" class="collection-card">
            <h3>Collection 2</h3>
            <p>Placeholder text</p>
          </a>
          <a :href="spreadsheetUrl" target="_blank" class="collection-card">
            <h3>Collection 3</h3>
            <p>Placeholder text</p>
          </a>
          <a :href="spreadsheetUrl" target="_blank" class="collection-card">
            <h3>Collection 4</h3>
            <p>Placeholder text</p>
          </a>
          <a :href="spreadsheetUrl" target="_blank" class="collection-card">
            <h3>Collection 5</h3>
            <p>Placeholder text</p>
          </a>
          <a :href="spreadsheetUrl" target="_blank" class="collection-card">
            <h3>Collection 6</h3>
            <p>Placeholder text</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Latest Guides -->
    <section class="latest-guides">
      <div class="container">
        <h2>Latest Guides</h2>
        <div class="guides-grid">
          <a href="/blog/article1" class="guide-card">
            <h3>Article 1</h3>
            <p>Placeholder text</p>
          </a>
          <a href="/blog/article2" class="guide-card">
            <h3>Article 2</h3>
            <p>Placeholder text</p>
          </a>
          <a href="/blog/article3" class="guide-card">
            <h3>Article 3</h3>
            <p>Placeholder text</p>
          </a>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq">
      <div class="container">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h3>Question 1?</h3>
            <p>Placeholder answer text</p>
          </div>
          <div class="faq-item">
            <h3>Question 2?</h3>
            <p>Placeholder answer text</p>
          </div>
          <div class="faq-item">
            <h3>Question 3?</h3>
            <p>Placeholder answer text</p>
          </div>
          <div class="faq-item">
            <h3>Question 4?</h3>
            <p>Placeholder answer text</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-section">
            <h4>Categories</h4>
            <ul>
              <li><a href="/clothes">Clothes</a></li>
              <li><a href="/shoes">Shoes</a></li>
              <li><a href="/watches">Watches</a></li>
              <li><a href="/bags">Bags</a></li>
              <li><a href="/accessories">Accessories</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/platform">Platform</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 FansBuy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/10e9euL3y7Bw7GvWUhX2FruG8mJWXz8C7eNwTo69XoQA/edit?gid=999521302#gid=999521302'
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%);
  padding: 80px 20px;
  text-align: center;
}

.hero h1 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #000;
}

.hero p {
  font-size: 24px;
  color: #666;
  margin-bottom: 30px;
}

.cta-button {
  display: inline-block;
  padding: 12px 30px;
  background-color: #8b0000;
  color: white;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #a00000;
  transform: translateY(-2px);
}

/* Sections */
section {
  padding: 60px 20px;
}

section h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
  color: #000;
}

/* Category Navigation */
.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.category-card {
  background: #f9f9f9;
  padding: 30px 20px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  background: #f0f0f0;
}

.category-icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.category-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.category-card p {
  font-size: 14px;
  color: #666;
}

/* Platform Navigation */
.platform-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.platform-card {
  background: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.platform-card:hover {
  transform: translateY(-5px);
  background: #f0f0f0;
}

.platform-card h3 {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.platform-card p {
  font-size: 14px;
  color: #666;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.feature-card {
  background: #f9f9f9;
  padding: 30px 20px;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 36px;
  margin-bottom: 15px;
}

.feature-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.feature-card p {
  font-size: 13px;
  color: #666;
}

/* Collections Grid */
.collections-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.collection-card {
  background: #f9f9f9;
  padding: 25px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.collection-card:hover {
  transform: translateY(-5px);
  background: #f0f0f0;
}

.collection-card h3 {
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.collection-card p {
  font-size: 13px;
  color: #666;
}

/* Guides Grid */
.guides-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.guide-card {
  background: #f9f9f9;
  padding: 25px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.guide-card:hover {
  transform: translateY(-5px);
  background: #f0f0f0;
}

.guide-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.guide-card p {
  font-size: 14px;
  color: #666;
}

/* FAQ Grid */
.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.faq-item {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

.faq-item h3 {
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.faq-item p {
  font-size: 14px;
  color: #666;
}

/* Footer */
.footer {
  background: #1a1a1a;
  color: white;
  padding: 40px 20px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.footer-section h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 8px;
}

.footer-section a {
  color: #999;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #d4af37;
}

.footer-bottom {
  padding-top: 20px;
  border-top: 1px solid #333;
  text-align: center;
  color: #999;
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 32px;
  }

  .hero p {
    font-size: 18px;
  }

  section {
    padding: 40px 15px;
  }

  section h2 {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 24px;
  }

  .hero p {
    font-size: 14px;
  }

  section {
    padding: 30px 10px;
  }

  section h2 {
    font-size: 22px;
  }

  .category-grid,
  .features-grid,
  .collections-grid {
    grid-template-columns: 1fr;
  }
}
</style>
