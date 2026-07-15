<template>
  <div class="platform-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>Platform Overview</h1>
        <p>Placeholder subtitle for platform</p>
      </div>
    </section>

    <!-- Platform Overview -->
    <section class="overview">
      <div class="container">
        <h2>About This Platform</h2>
        <p>Placeholder introduction text for the platform. This section provides an overview of what the platform offers and its key features.</p>
      </div>
    </section>

    <!-- Advantages -->
    <section class="advantages">
      <div class="container">
        <h2>Key Advantages</h2>
        <div class="advantages-grid">
          <div class="advantage-card">
            <div class="advantage-icon">✓</div>
            <h3>Advantage 1</h3>
            <p>Placeholder text describing the advantage</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">✓</div>
            <h3>Advantage 2</h3>
            <p>Placeholder text describing the advantage</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">✓</div>
            <h3>Advantage 3</h3>
            <p>Placeholder text describing the advantage</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">✓</div>
            <h3>Advantage 4</h3>
            <p>Placeholder text describing the advantage</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
      <div class="container">
        <h2>How It Works</h2>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">1</div>
            <h3>Step 1</h3>
            <p>Placeholder text for step 1</p>
          </div>
          <div class="step-card">
            <div class="step-number">2</div>
            <h3>Step 2</h3>
            <p>Placeholder text for step 2</p>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <h3>Step 3</h3>
            <p>Placeholder text for step 3</p>
          </div>
          <div class="step-card">
            <div class="step-number">4</div>
            <h3>Step 4</h3>
            <p>Placeholder text for step 4</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Recommended Categories -->
    <section class="categories">
      <div class="container">
        <h2>Recommended Categories</h2>
        <div class="categories-grid">
          <router-link to="/clothes" class="category-card">
            <h3>Clothes</h3>
            <p>Placeholder text</p>
          </router-link>
          <router-link to="/shoes" class="category-card">
            <h3>Shoes</h3>
            <p>Placeholder text</p>
          </router-link>
          <router-link to="/watches" class="category-card">
            <h3>Watches</h3>
            <p>Placeholder text</p>
          </router-link>
          <router-link to="/bags" class="category-card">
            <h3>Bags</h3>
            <p>Placeholder text</p>
          </router-link>
          <router-link to="/accessories" class="category-card">
            <h3>Accessories</h3>
            <p>Placeholder text</p>
          </router-link>
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
        </div>
      </div>
    </section>

    <!-- Related Articles -->
    <section class="related">
      <div class="container">
        <h2>Related Articles</h2>
        <div class="articles-grid">
          <router-link to="/blog/article1" class="article-card">
            <h3>Article 1</h3>
            <p>Placeholder text</p>
          </router-link>
          <router-link to="/blog/article2" class="article-card">
            <h3>Article 2</h3>
            <p>Placeholder text</p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 FansBuy. All rights reserved.</p>
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

/* Overview */
.overview p {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

/* Advantages Grid */
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.advantage-card {
  background: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
}

.advantage-icon {
  font-size: 36px;
  color: #d4af37;
  margin-bottom: 15px;
}

.advantage-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.advantage-card p {
  font-size: 14px;
  color: #666;
}

/* Steps Grid */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.step-card {
  background: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
}

.step-number {
  display: inline-block;
  width: 50px;
  height: 50px;
  background: #d4af37;
  color: white;
  border-radius: 50%;
  line-height: 50px;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
}

.step-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.step-card p {
  font-size: 14px;
  color: #666;
}

/* Categories Grid */
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.category-card {
  background: #f9f9f9;
  padding: 25px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  background: #f0f0f0;
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

/* Articles Grid */
.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.article-card {
  background: #f9f9f9;
  padding: 25px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.article-card:hover {
  transform: translateY(-5px);
  background: #f0f0f0;
}

.article-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.article-card p {
  font-size: 14px;
  color: #666;
}

/* Footer */
.footer {
  background: #1a1a1a;
  color: white;
  padding: 40px 20px;
  text-align: center;
}

.footer p {
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

  .advantages-grid,
  .steps-grid,
  .categories-grid,
  .faq-grid,
  .articles-grid {
    grid-template-columns: 1fr;
  }
}
</style>
