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
        link: '/fansbuy%20how%20to%20use%202026-07-17/',
      },
      {
        title: 'Fansbuy Shipping Guide',
        excerpt: 'Everything you need to know about shipping methods, delivery timelines, and customs handling.',
        link: '/fansbuy%20shipping%20guide%202026-07-17/',
      },
      {
        title: 'Fansbuy Sizing Guide',
        excerpt: 'Navigate sizing across brands with our comprehensive measurement charts and fit recommendations.',
        link: '/fansbuy%20sizing%20guide%202026-07-17/',
      },
      {
        title: 'Fansbuy QC Photos',
        excerpt: 'Learn how to inspect quality check photos and identify potential issues before shipping.',
        link: '/fansbuy%20qc%20photos%202026-07-17/',
      },
      {
        title: 'Fansbuy Legit Check',
        excerpt: 'Step-by-step verification process to ensure product quality matches listing descriptions.',
        link: '/fansbuy%20legit%20check%202026-07-17/',
      },
      {
        title: 'Is Fansbuy Legit?',
        excerpt: 'An honest look at platform reliability, trust indicators, and what real buyers say.',
        link: '/is%20fansbuy%20legit%202026-07-17/',
      },
    ],
  },
  {
    name: 'Category Guides',
    articles: [
      {
        title: 'Fansbuy Sneakers',
        excerpt: 'Top-selling sneakers with real order data, quality pass rates, and brand comparisons.',
        link: '/fansbuy%20sneakers%202026-07-17/',
      },
      {
        title: 'Fansbuy Hoodies',
        excerpt: 'Premium streetwear hoodies from Supreme, Essentials, Palm Angels and more.',
        link: '/fansbuy%20hoodies%202026-07-17/',
      },
      {
        title: 'Fansbuy T-Shirts',
        excerpt: 'Complete guide to branded tees with fabric breakdowns and sizing tips.',
        link: '/fansbuy%20t-shirts%202026-07-17/',
      },
      {
        title: 'Fansbuy Bags',
        excerpt: 'From travel bags to backpacks, explore quality specs and pricing across all styles.',
        link: '/fansbuy%20bags%202026-07-17/',
      },
      {
        title: 'Fansbuy Accessories',
        excerpt: 'Hats, jewelry, sunglasses, and more — the essentials to complete your look.',
        link: '/fansbuy%20accessories%202026-07-17/',
      },
      {
        title: 'Fansbuy Watches',
        excerpt: 'Luxury and everyday timepieces with detailed specs and quality comparisons.',
        link: '/fansbuy%20watches%202026-07-17/',
      },
      {
        title: 'Fansbuy Jeans',
        excerpt: 'Denim guide covering fits, fabrics, and the best brands available on FansBuy.',
        link: '/fansbuy%20jeans%202026-07-17/',
      },
    ],
  },
  {
    name: 'Brand Deep Dives',
    articles: [
      {
        title: 'Fansbuy Nike',
        excerpt: 'Explore the full Nike collection — Air Max, AF1, Dunks, and more with real data.',
        link: '/fansbuy%20nike%202026-07-17/',
      },
      {
        title: 'Fansbuy Jordan',
        excerpt: 'Jordan 1 through 14, hoodies, and shorts — everything Jordan on FansBuy.',
        link: '/fansbuy-jordan-2026-07-17/',
      },
      {
        title: 'Fansbuy Stussy',
        excerpt: 'OG streetwear essentials from the brand that started it all.',
        link: '/fansbuy-stussy-2026-07-17/',
      },
      {
        title: 'Fansbuy Essentials',
        excerpt: 'Fear of God Essentials hoodies, tees, and shorts with fit and quality details.',
        link: '/fansbuy-essentials-2026-07-17/',
      },
      {
        title: 'Fansbuy Palm Angels',
        excerpt: 'Luxury streetwear from Palm Angels — hoodies, tees, shorts, and seasonal drops.',
        link: '/fansbuy-palm-angels-2026-07-17/',
      },
      {
        title: 'Fansbuy Chrome Hearts',
        excerpt: 'Premium Chrome Hearts pieces including jeans, hoodies, and accessories.',
        link: '/fansbuy-chrome-hearts-2026-07-17/',
      },
      {
        title: 'Fansbuy Adidas',
        excerpt: 'Adidas sneakers, tees, and tracksuits with quality and pricing insights.',
        link: '/fansbuy-adidas-2026-07-17/',
      },
    ],
  },
  {
    name: 'Platform Comparisons',
    articles: [
      {
        title: 'Fansbuy vs Kakobuy',
        excerpt: 'Head-to-head comparison of features, pricing, and shipping across both platforms.',
        link: '/fansbuy-vs-kakobuy-2026-07-17/',
      },
      {
        title: 'Fansbuy vs Oopbuy',
        excerpt: 'Which platform offers better value? We compare key metrics side by side.',
        link: '/fansbuy-vs-oopbuy-2026-07-17/',
      },
      {
        title: 'Fansbuy vs Litbuy',
        excerpt: 'Service fees, shipping speeds, and product range compared in detail.',
        link: '/fansbuy-vs-litbuy-2026-07-17/',
      },
      {
        title: 'Fansbuy vs Usfans',
        excerpt: 'A comprehensive look at how FansBuy stacks up against Usfans.',
        link: '/fansbuy-vs-usfans-2026-07-17/',
      },
    ],
  },
  {
    name: 'Shopping Tips',
    articles: [
      {
        title: 'Fansbuy Coupon',
        excerpt: 'Save money with the latest coupon codes and discount strategies.',
        link: '/fansbuy-coupon-2026-07-17/',
      },
      {
        title: 'Fansbuy Budget Picks',
        excerpt: 'The best products under $25 that deliver quality without breaking the bank.',
        link: '/fansbuy-budget-picks-2026-07-17/',
      },
      {
        title: 'Fansbuy Best Sellers',
        excerpt: 'Top-performing products ranked by order volume and buyer satisfaction.',
        link: '/fansbuy-best-sellers-2026-07-17/',
      },
      {
        title: 'Fansbuy Luxury Finds',
        excerpt: 'Premium products worth the investment — curated from verified listings.',
        link: '/fansbuy-luxury-finds-2026-07-17/',
      },
      {
        title: 'Fansbuy for Resellers',
        excerpt: 'Sourcing strategies, margin tips, and bulk ordering advice for resellers.',
        link: '/fansbuy-for-resellers-2026-07-17/',
      },
      {
        title: 'Fansbuy for Beginners',
        excerpt: 'New to FansBuy? Start here with everything you need for your first order.',
        link: '/fansbuy-for-beginners-2026-07-17/',
      },
    ],
  },
  {
    name: 'Community & Resources',
    articles: [
      {
        title: 'Fansbuy Reddit',
        excerpt: 'What the Reddit community says about FansBuy — real experiences and tips.',
        link: '/fansbuy-reddit-2026-07-17/',
      },
      {
        title: 'Fansbuy Telegram',
        excerpt: 'Join the FansBuy Telegram community for real-time updates and deals.',
        link: '/fansbuy-telegram-2026-07-17/',
      },
      {
        title: 'Fansbuy Reviews',
        excerpt: 'Aggregated buyer feedback with satisfaction ratings across all categories.',
        link: '/fansbuy-reviews-2026-07-17/',
      },
      {
        title: 'Fansbuy Alternative',
        excerpt: 'Looking for alternatives? Compare FansBuy with other shopping agents.',
        link: '/fansbuy-alternative-2026-07-17/',
      },
    ],
  },
]

const recommendedSeries = [
  {
    name: 'Getting Started',
    articles: [
      { title: 'How to Use', link: '/fansbuy-how-to-use-2026-07-17/' },
      { title: 'For Beginners', link: '/fansbuy-for-beginners-2026-07-17/' },
    ],
  },
  {
    name: 'Top Categories',
    articles: [
      { title: 'Sneakers', link: '/fansbuy-sneakers-2026-07-17/' },
      { title: 'Hoodies', link: '/fansbuy-hoodies-2026-07-17/' },
    ],
  },
  {
    name: 'Popular Brands',
    articles: [
      { title: 'Nike', link: '/fansbuy-nike-2026-07-17/' },
      { title: 'Jordan', link: '/fansbuy-jordan-2026-07-17/' },
    ],
  },
  {
    name: 'Save Money',
    articles: [
      { title: 'Budget Picks', link: '/fansbuy-budget-picks-2026-07-17/' },
      { title: 'Coupons', link: '/fansbuy-coupon-2026-07-17/' },
    ],
  },
  {
    name: 'Trust & Safety',
    articles: [
      { title: 'Is Fansbuy Legit?', link: '/is-fansbuy-legit-2026-07-17/' },
      { title: 'QC Photos', link: '/fansbuy-qc-photos-2026-07-17/' },
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
}
</style>
