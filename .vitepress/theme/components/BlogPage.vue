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
const articleSeries = [
  {
    name: 'Buying Guides',
    articles: [
      {
        title: 'Fansbuy How to Use',
        excerpt: 'Complete step-by-step guide to navigating the FansBuy platform, from account setup to placing your first order.',
        link: '/fansbuy%20how%20to%20use/',
      },
      {
        title: 'Fansbuy Shipping Guide',
        excerpt: 'Everything you need to know about shipping methods, delivery timelines, and customs handling.',
        link: '/fansbuy%20shipping%20guide/',
      },
      {
        title: 'Fansbuy Sizing Guide',
        excerpt: 'Navigate sizing across brands with our comprehensive measurement charts and fit recommendations.',
        link: '/fansbuy%20sizing%20guide/',
      },
      {
        title: 'Fansbuy QC Photos',
        excerpt: 'Learn how to inspect quality check photos and identify potential issues before shipping.',
        link: '/fansbuy%20qc%20photos/',
      },
      {
        title: 'Fansbuy Legit Check',
        excerpt: 'Step-by-step verification process to ensure product quality matches listing descriptions.',
        link: '/fansbuy%20legit%20check/',
      },
      {
        title: 'Is Fansbuy Legit?',
        excerpt: 'An honest look at platform reliability, trust indicators, and what real buyers say.',
        link: '/is%20fansbuy%20legit/',
      },
    ],
  },
  {
    name: 'Category Guides',
    articles: [
      {
        title: 'Fansbuy Sneakers',
        excerpt: 'Top-selling sneakers with real order data, quality pass rates, and brand comparisons.',
        link: '/fansbuy%20sneakers/',
      },
      {
        title: 'Fansbuy Hoodies',
        excerpt: 'Premium streetwear hoodies from Supreme, Essentials, Palm Angels and more.',
        link: '/fansbuy%20hoodies/',
      },
      {
        title: 'Fansbuy T-Shirts',
        excerpt: 'Complete guide to branded tees with fabric breakdowns and sizing tips.',
        link: '/fansbuy%20t-shirts/',
      },
      {
        title: 'Fansbuy Bags',
        excerpt: 'From travel bags to backpacks, explore quality specs and pricing across all styles.',
        link: '/fansbuy%20bags/',
      },
      {
        title: 'Fansbuy Accessories',
        excerpt: 'Hats, jewelry, sunglasses, and more — the essentials to complete your look.',
        link: '/fansbuy%20accessories/',
      },
      {
        title: 'Fansbuy Watches',
        excerpt: 'Luxury and everyday timepieces with detailed specs and quality comparisons.',
        link: '/fansbuy%20watches/',
      },
      {
        title: 'Fansbuy Jeans',
        excerpt: 'Denim guide covering fits, fabrics, and the best brands available on FansBuy.',
        link: '/fansbuy%20jeans/',
      },
    ],
  },
  {
    name: 'Brand Deep Dives',
    articles: [
      {
        title: 'Fansbuy Nike',
        excerpt: 'Explore the full Nike collection — Air Max, AF1, Dunks, and more with real data.',
        link: '/fansbuy%20nike/',
      },
      {
        title: 'Fansbuy Jordan',
        excerpt: 'Jordan 1 through 14, hoodies, and shorts — everything Jordan on FansBuy.',
        link: '/fansbuy%20jordan/',
      },
      {
        title: 'Fansbuy Stussy',
        excerpt: 'OG streetwear essentials from the brand that started it all.',
        link: '/fansbuy%20stussy/',
      },
      {
        title: 'Fansbuy Essentials',
        excerpt: 'Fear of God Essentials hoodies, tees, and shorts with fit and quality details.',
        link: '/fansbuy%20essentials/',
      },
      {
        title: 'Fansbuy Palm Angels',
        excerpt: 'Luxury streetwear from Palm Angels — hoodies, tees, shorts, and seasonal drops.',
        link: '/fansbuy%20palm%20angels/',
      },
      {
        title: 'Fansbuy Chrome Hearts',
        excerpt: 'Premium Chrome Hearts pieces including jeans, hoodies, and accessories.',
        link: '/fansbuy%20chrome%20hearts/',
      },
      {
        title: 'Fansbuy Adidas',
        excerpt: 'Adidas sneakers, tees, and tracksuits with quality and pricing insights.',
        link: '/fansbuy%20adidas/',
      },
    ],
  },
  {
    name: 'Platform Comparisons',
    articles: [
      {
        title: 'Fansbuy vs Kakobuy',
        excerpt: 'Head-to-head comparison of features, pricing, and shipping across both platforms.',
        link: '/fansbuy%20vs%20kakobuy/',
      },
      {
        title: 'Fansbuy vs Oopbuy',
        excerpt: 'Which platform offers better value? We compare key metrics side by side.',
        link: '/fansbuy%20vs%20oopbuy/',
      },
      {
        title: 'Fansbuy vs Litbuy',
        excerpt: 'Service fees, shipping speeds, and product range compared in detail.',
        link: '/fansbuy%20vs%20litbuy/',
      },
      {
        title: 'Fansbuy vs Usfans',
        excerpt: 'A comprehensive look at how FansBuy stacks up against Usfans.',
        link: '/fansbuy%20vs%20usfans/',
      },
    ],
  },
  {
    name: 'Shopping Tips',
    articles: [
      {
        title: 'Fansbuy Coupon',
        excerpt: 'Save money with the latest coupon codes and discount strategies.',
        link: '/fansbuy%20coupon/',
      },
      {
        title: 'Fansbuy Budget Picks',
        excerpt: 'The best products under $25 that deliver quality without breaking the bank.',
        link: '/fansbuy%20budget%20picks/',
      },
      {
        title: 'Fansbuy Best Sellers',
        excerpt: 'Top-performing products ranked by order volume and buyer satisfaction.',
        link: '/fansbuy%20best%20sellers/',
      },
      {
        title: 'Fansbuy Luxury Finds',
        excerpt: 'Premium products worth the investment — curated from verified listings.',
        link: '/fansbuy%20luxury%20finds/',
      },
      {
        title: 'Fansbuy for Resellers',
        excerpt: 'Sourcing strategies, margin tips, and bulk ordering advice for resellers.',
        link: '/fansbuy%20for%20resellers/',
      },
      {
        title: 'Fansbuy for Beginners',
        excerpt: 'New to FansBuy? Start here with everything you need for your first order.',
        link: '/fansbuy%20for%20beginners/',
      },
    ],
  },
  {
    name: 'Community & Resources',
    articles: [
      {
        title: 'Fansbuy Reddit',
        excerpt: 'What the Reddit community says about FansBuy — real experiences and tips.',
        link: '/fansbuy%20reddit/',
      },
      {
        title: 'Fansbuy Telegram',
        excerpt: 'Join the FansBuy Telegram community for real-time updates and deals.',
        link: '/fansbuy%20telegram/',
      },
      {
        title: 'Fansbuy Reviews',
        excerpt: 'Aggregated buyer feedback with satisfaction ratings across all categories.',
        link: '/fansbuy%20reviews/',
      },
      {
        title: 'Fansbuy Alternative',
        excerpt: 'Looking for alternatives? Compare FansBuy with other shopping agents.',
        link: '/fansbuy%20alternative/',
      },
    ],
  },
]

const recommendedSeries = [
  {
    name: 'Getting Started',
    articles: [
      { title: 'How to Use', link: '/fansbuy%20how%20to%20use/' },
      { title: 'For Beginners', link: '/fansbuy%20for%20beginners/' },
    ],
  },
  {
    name: 'Top Categories',
    articles: [
      { title: 'Sneakers', link: '/fansbuy%20sneakers/' },
      { title: 'Hoodies', link: '/fansbuy%20hoodies/' },
    ],
  },
  {
    name: 'Popular Brands',
    articles: [
      { title: 'Nike', link: '/fansbuy%20nike/' },
      { title: 'Jordan', link: '/fansbuy%20jordan/' },
    ],
  },
  {
    name: 'Save Money',
    articles: [
      { title: 'Budget Picks', link: '/fansbuy%20budget%20picks/' },
      { title: 'Coupons', link: '/fansbuy%20coupon/' },
    ],
  },
  {
    name: 'Trust & Safety',
    articles: [
      { title: 'Is Fansbuy Legit?', link: '/is%20fansbuy%20legit/' },
      { title: 'QC Photos', link: '/fansbuy%20qc%20photos/' },
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
