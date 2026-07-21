<template>
  <div class="blog-page">
    <div class="blog-container">
      <!-- Left: Article Cards (4/5) -->
      <main class="blog-main">
        <div class="blog-header">
          <h1 class="blog-title">Blog</h1>
          <p class="blog-desc">Guides, reviews, and insights to help you shop smarter on FansBuy.</p>
        </div>

        <div
          v-for="series in articleSeries"
          :key="series.name"
          class="series-section"
        >
          <h2 class="series-title">{{ series.name }}</h2>
          <div class="article-grid">
            <a
              v-for="article in series.articles"
              :key="article.link"
              :href="article.link"
              class="article-card"
            >
              <h3 class="article-title">{{ article.title }}</h3>
              <p class="article-excerpt">{{ article.excerpt }}</p>
              <span class="article-read-more">Read more &rarr;</span>
            </a>
          </div>
        </div>
      </main>

      <!-- Right: Recommended Sidebar (1/5) -->
      <aside class="blog-sidebar">
        <h2 class="sidebar-title">Recommended</h2>
        <div
          v-for="series in recommendedSeries"
          :key="series.name"
          class="sidebar-group"
        >
          <h3 class="sidebar-group-title">{{ series.name }}</h3>
          <ul class="sidebar-links">
            <li v-for="article in series.articles" :key="article.link">
              <a :href="article.link">{{ article.title }}</a>
            </li>
          </ul>
        </div>
      </aside>
    </div>

    <!-- Explore More -->
    <section class="explore-more">
      <div class="explore-container">
        <h2 class="explore-title">Explore More</h2>
        <div class="explore-grid">
          <a href="/" class="explore-card">
            <div class="explore-icon">&#127968;</div>
            <h3>Home</h3>
            <p>Return to the homepage for a full overview of our site.</p>
          </a>
          <a href="/about" class="explore-card">
            <div class="explore-icon">&#8505;</div>
            <h3>About</h3>
            <p>Learn more about our mission and how we help you find the best products.</p>
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
            <div class="explore-icon">🧢</div>
            <h3>Hats</h3>
            <p>Find the perfect cap, beanie, or bucket hat.</p>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const articleSeries = [
  {
    name: 'Getting Started',
    articles: [
      {
        title: 'Fansbuy for Beginners',
        excerpt: 'Complete beginner guide to getting started with Fansbuy, from account creation to first purchase.',
        link: '/fansbuy%20for%20beginners/',
      },
      {
        title: 'Fansbuy How to Use',
        excerpt: 'Step-by-step platform guide covering account setup, browsing, ordering, and payment.',
        link: '/fansbuy%20how%20to%20use/',
      },
      {
        title: 'Fansbuy Getting Started',
        excerpt: 'Everything new users need to know about navigating the Fansbuy platform.',
        link: '/fansbuy%20getting%20started/',
      },
      {
        title: 'Fansbuy Account Setup',
        excerpt: 'Detailed guide to creating and configuring your Fansbuy account for optimal shopping.',
        link: '/fansbuy%20account%20setup/',
      },
      {
        title: 'Fansbuy Shipping Guide',
        excerpt: 'Comprehensive overview of shipping methods, delivery times, and costs.',
        link: '/fansbuy%20shipping%20guide/',
      },
      {
        title: 'Fansbuy Payment Guide',
        excerpt: 'Learn about all payment methods, balance top-up, and transaction security.',
        link: '/fansbuy%20payment%20guide/',
      },
    ],
  },
  {
    name: 'Top Categories',
    articles: [
      {
        title: 'Fansbuy Sneakers',
        excerpt: 'Complete guide to sneakers available on Fansbuy, including Nike, Jordan, Adidas, and more.',
        link: '/fansbuy%20sneakers/',
      },
      {
        title: 'Fansbuy Clothes',
        excerpt: 'Explore streetwear, hoodies, t-shirts, jeans, and seasonal clothing collections.',
        link: '/fansbuy%20clothes/',
      },
      {
        title: 'Fansbuy Hoodies',
        excerpt: 'Premium hoodies from top brands with quality specs, pricing, and sizing information.',
        link: '/fansbuy%20hoodies/',
      },
      {
        title: 'Fansbuy T-Shirts',
        excerpt: 'Branded t-shirts guide covering fabrics, fits, and popular streetwear options.',
        link: '/fansbuy%20t-shirts/',
      },
      {
        title: 'Fansbuy Bags',
        excerpt: 'Backpacks, handbags, wallets, and crossbody bags with quality comparisons.',
        link: '/fansbuy%20bags/',
      },
      {
        title: 'Fansbuy Accessories',
        excerpt: 'Hats, sunglasses, jewelry, socks, and essential accessories to complete your style.',
        link: '/fansbuy%20accessories/',
      },
    ],
  },
  {
    name: 'Popular Brands',
    articles: [
      {
        title: 'Fansbuy Nike',
        excerpt: 'Complete Nike collection guide: Air Force 1, Air Max, Dunk, TN, and tech fleece.',
        link: '/fansbuy%20nike/',
      },
      {
        title: 'Fansbuy Jordan',
        excerpt: 'Jordan 1, 3, 4, 5, 11 and more with quality data and sizing tips.',
        link: '/fansbuy%20jordan/',
      },
      {
        title: 'Fansbuy Adidas',
        excerpt: 'Adidas sneakers including Samba, Gazelle, Superstar, and Yeezy collections.',
        link: '/fansbuy%20adidas/',
      },
      {
        title: 'Fansbuy Chrome Hearts',
        excerpt: 'Premium Chrome Hearts hoodies, t-shirts, jeans, and accessories guide.',
        link: '/fansbuy%20chrome%20hearts/',
      },
      {
        title: 'Fansbuy Essentials',
        excerpt: 'Fear of God Essentials collection: hoodies, t-shirts, joggers, and shorts.',
        link: '/fansbuy%20essentials/',
      },
      {
        title: 'Fansbuy Palm Angels',
        excerpt: 'Luxury streetwear from Palm Angels with hoodies, tracksuits, and jeans.',
        link: '/fansbuy%20palm%20angels/',
      },
    ],
  },
  {
    name: 'Save Money',
    articles: [
      {
        title: 'Fansbuy Budget Picks',
        excerpt: 'Best products under $25 with quality data and buyer satisfaction ratings.',
        link: '/fansbuy%20budget%20picks/',
      },
      {
        title: 'Fansbuy Coupon',
        excerpt: 'Latest discount codes, coupon strategies, and seasonal deals on Fansbuy.',
        link: '/fansbuy%20coupon/',
      },
      {
        title: 'Fansbuy Best Deals',
        excerpt: 'Curated list of the best value products across all categories.',
        link: '/fansbuy%20best%20deals/',
      },
      {
        title: 'Fansbuy Cheap Sneakers',
        excerpt: 'Affordable sneaker options with quality comparisons and buyer reviews.',
        link: '/fansbuy%20cheap%20sneakers/',
      },
      {
        title: 'Fansbuy Budget Hoodies',
        excerpt: 'Quality hoodies at budget-friendly prices with detailed specifications.',
        link: '/fansbuy%20budget%20hoodies/',
      },
      {
        title: 'Fansbuy Save Money',
        excerpt: 'Complete money-saving guide with shopping hacks and bulk buying tips.',
        link: '/fansbuy%20save%20money/',
      },
    ],
  },
  {
    name: 'Trust & Safety',
    articles: [
      {
        title: 'Is Fansbuy Legit',
        excerpt: 'Comprehensive trust analysis with user reviews and platform reliability data.',
        link: '/is%20fansbuy%20legit/',
      },
      {
        title: 'Fansbuy Legit Check',
        excerpt: 'Step-by-step quality verification and authenticity checking guide.',
        link: '/fansbuy%20legit%20check/',
      },
      {
        title: 'Fansbuy QC Photos',
        excerpt: 'How to read quality check photos and verify product condition before shipping.',
        link: '/fansbuy%20qc%20photos/',
      },
      {
        title: 'Fansbuy Reviews',
        excerpt: 'Aggregated user reviews and satisfaction ratings across all product categories.',
        link: '/fansbuy%20reviews/',
      },
      {
        title: 'Fansbuy Reddit',
        excerpt: 'Real user experiences and discussions from the Reddit community.',
        link: '/fansbuy%20reddit/',
      },
      {
        title: 'Fansbuy vs Kakobuy',
        excerpt: 'Detailed platform comparison covering pricing, shipping, and service quality.',
        link: '/fansbuy%20vs%20kakobuy/',
      },
    ],
  },
  {
    name: 'Spreadsheet & Tools',
    articles: [
      {
        title: 'Fansbuy Spreadsheet',
        excerpt: 'Complete guide to using the Fansbuy spreadsheet for product research.',
        link: '/fansbuy%20spreadsheet/',
      },
      {
        title: 'Fansbuy Spreadsheet Best',
        excerpt: 'Top-rated products from the spreadsheet with quality pass rates.',
        link: '/fansbuy%20spreadsheet%20best/',
      },
      {
        title: 'Fansbuy Spreadsheet 2026',
        excerpt: 'Latest spreadsheet updates with new products and quality data for 2026.',
        link: '/fansbuy%20spreadsheet%202026/',
      },
      {
        title: 'Fansbuy Spreadsheet Nike',
        excerpt: 'Nike products in the spreadsheet with pricing and quality comparisons.',
        link: '/fansbuy%20spreadsheet%20nike/',
      },
      {
        title: 'Fansbuy Spreadsheet Jordan',
        excerpt: 'Jordan collection data from the spreadsheet with batch information.',
        link: '/fansbuy%20spreadsheet%20jordan/',
      },
      {
        title: 'Fansbuy Spreadsheet Link',
        excerpt: 'How to access and navigate the Fansbuy spreadsheet effectively.',
        link: '/fansbuy%20spreadsheet%20link/',
      },
    ],
  },
  {
    name: 'Regional & International',
    articles: [
      {
        title: 'Fansbuy UK',
        excerpt: 'Complete guide for UK buyers including shipping, customs, and payment methods.',
        link: '/fansbuy%20uk/',
      },
      {
        title: 'Fansbuy Canada',
        excerpt: 'Canadian buyer guide with shipping options and duty information.',
        link: '/fansbuy%20canada/',
      },
      {
        title: 'Fansbuy Australia',
        excerpt: 'Australian shipping guide with delivery times and customs handling.',
        link: '/fansbuy%20australia/',
      },
      {
        title: 'Fansbuy Europe',
        excerpt: 'European buyer guide covering EU countries and shipping regulations.',
        link: '/fansbuy%20europe/',
      },
      {
        title: 'Fansbuy Polska',
        excerpt: 'Polish buyer guide with local payment methods and shipping options.',
        link: '/fansbuy%20polska/',
      },
      {
        title: 'Fansbuy International Shipping',
        excerpt: 'Global shipping guide covering all supported countries and regions.',
        link: '/fansbuy%20international%20shipping/',
      },
    ],
  },
]

const recommendedSeries = [
  {
    name: 'Getting Started',
    articles: [
      { title: 'Fansbuy for Beginners', link: '/fansbuy%20for%20beginners/' },
      { title: 'How to Use', link: '/fansbuy%20how%20to%20use/' },
      { title: 'Shipping Guide', link: '/fansbuy%20shipping%20guide/' },
    ],
  },
  {
    name: 'Top Categories',
    articles: [
      { title: 'Sneakers', link: '/fansbuy%20sneakers/' },
      { title: 'Hoodies', link: '/fansbuy%20hoodies/' },
      { title: 'Clothes', link: '/fansbuy%20clothes/' },
    ],
  },
  {
    name: 'Popular Brands',
    articles: [
      { title: 'Nike', link: '/fansbuy%20nike/' },
      { title: 'Jordan', link: '/fansbuy%20jordan/' },
      { title: 'Adidas', link: '/fansbuy%20adidas/' },
    ],
  },
  {
    name: 'Save Money',
    articles: [
      { title: 'Budget Picks', link: '/fansbuy%20budget%20picks/' },
      { title: 'Coupon', link: '/fansbuy%20coupon/' },
      { title: 'Best Deals', link: '/fansbuy%20best%20deals/' },
    ],
  },
  {
    name: 'Trust & Safety',
    articles: [
      { title: 'Is Fansbuy Legit?', link: '/is%20fansbuy%20legit/' },
      { title: 'Legit Check', link: '/fansbuy%20legit%20check/' },
      { title: 'QC Photos', link: '/fansbuy%20qc%20photos/' },
    ],
  },
  {
    name: 'Spreadsheet',
    articles: [
      { title: 'Spreadsheet Guide', link: '/fansbuy%20spreadsheet/' },
      { title: 'Best Products', link: '/fansbuy%20spreadsheet%20best/' },
      { title: '2026 Updates', link: '/fansbuy%20spreadsheet%202026/' },
    ],
  },
]
</script>

<style scoped>
.blog-page {
  min-height: 100vh;
  background: #fafafa;
  padding-top: 24px;
}

.blog-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 32px;
  align-items: start;
}

/* ---- Main Content ---- */
.blog-main {
  min-width: 0;
}

.blog-header {
  margin-bottom: 40px;
}

.blog-title {
  font-size: 36px;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 8px 0;
  letter-spacing: -0.5px;
}

.blog-desc {
  font-size: 16px;
  color: #666;
  margin: 0;
  line-height: 1.6;
}

/* ---- Series Section ---- */
.series-section {
  margin-bottom: 48px;
}

.series-title {
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 20px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #d4af37;
  display: inline-block;
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

/* ---- Article Card ---- */
.article-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 20px;
  text-decoration: none;
  transition: all 0.25s ease;
  cursor: pointer;
}

.article-card:hover {
  border-color: #d4af37;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.article-title {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 8px 0;
  line-height: 1.4;
}

.article-excerpt {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin: 0 0 12px 0;
  flex-grow: 1;
}

.article-read-more {
  font-size: 13px;
  font-weight: 600;
  color: #d4af37;
  transition: color 0.2s ease;
}

.article-card:hover .article-read-more {
  color: #b8960c;
}

/* ---- Sidebar ---- */
.blog-sidebar {
  position: sticky;
  top: 80px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 24px 20px;
}

.sidebar-title {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 20px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #d4af37;
}

.sidebar-group {
  margin-bottom: 20px;
}

.sidebar-group:last-child {
  margin-bottom: 0;
}

.sidebar-group-title {
  font-size: 13px;
  font-weight: 700;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 8px 0;
}

.sidebar-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-links li {
  margin-bottom: 6px;
}

.sidebar-links a {
  font-size: 14px;
  color: #333;
  text-decoration: none;
  line-height: 1.4;
  transition: color 0.2s ease;
}

.sidebar-links a:hover {
  color: #d4af37;
}

/* ---- Responsive ---- */
@media (max-width: 900px) {
  .blog-container {
    grid-template-columns: 1fr;
  }

  .blog-sidebar {
    position: static;
    order: -1;
  }

  .article-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .blog-title {
    font-size: 28px;
  }

  .blog-container {
    padding: 0 16px;
  }

  .article-card {
    padding: 16px;
  }

  .explore-grid {
    grid-template-columns: 1fr;
  }
}

/* Explore More */
.explore-more {
  background: #f8f9fa;
  padding: 64px 0;
  margin-top: 48px;
}

.explore-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.explore-title {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 40px;
}

.explore-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
</style>
