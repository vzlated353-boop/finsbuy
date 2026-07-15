<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>About FansBuy</h1>
        <p>Placeholder subtitle for about page</p>
      </div>
    </section>

    <!-- About Content -->
    <section class="about-content">
      <div class="container">
        <h2>Our Mission</h2>
        <p>Placeholder mission statement. This section explains the core purpose and values of FansBuy.</p>

        <h2 style="margin-top: 40px;">Our Story</h2>
        <p>Placeholder story text. This section tells the history and background of FansBuy.</p>

        <h2 style="margin-top: 40px;">What We Do</h2>
        <p>Placeholder description of services. This section explains what FansBuy offers to users.</p>

        <h2 style="margin-top: 40px;">Why We're Different</h2>
        <div class="features-grid">
          <div class="feature">
            <h3>Feature 1</h3>
            <p>Placeholder text</p>
          </div>
          <div class="feature">
            <h3>Feature 2</h3>
            <p>Placeholder text</p>
          </div>
          <div class="feature">
            <h3>Feature 3</h3>
            <p>Placeholder text</p>
          </div>
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

/* About Content */
.about-content {
  padding: 60px 20px;
  max-width: 900px;
  margin: 0 auto;
}

.about-content h2 {
  font-size: 32px;
  font-weight: 700;
  color: #000;
  margin-bottom: 15px;
}

.about-content p {
  font-size: 16px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 15px;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.feature {
  background: #f9f9f9;
  padding: 25px;
  border-radius: 8px;
}

.feature h3 {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.feature p {
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

  .about-content h2 {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 24px;
  }

  .hero p {
    font-size: 14px;
  }

  .about-content {
    padding: 40px 15px;
  }

  .about-content h2 {
    font-size: 20px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
