<template>
  <div class="fansbuy-home">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">FansBuy</div>
        <ul class="nav-links">
          <li><a href="#home" class="nav-link active">Home</a></li>
          <li><a href="#shoes" class="nav-link">Shoes</a></li>
          <li><a href="#tshirts" class="nav-link">T-shirts</a></li>
          <li><a href="#hoodies" class="nav-link">Hoodies-Sweaters</a></li>
          <li><a href="#jackets" class="nav-link">Jackets</a></li>
          <li><a href="#pants" class="nav-link">Pants-Shorts</a></li>
          <li><a href="#headwear" class="nav-link">Headwear</a></li>
          <li><a href="#accessories" class="nav-link">Accessories</a></li>
          <li><a href="#other" class="nav-link">Other-Stuff</a></li>
          <li><a href="https://docs.google.com/spreadsheets/d/10e9euL3y7Bw7GvWUhX2FruG8mJWXz8C7eNwTo69XoQA/edit?gid=2068242972#gid=2068242972" target="_blank" class="nav-link spreadsheet-link">Spreadsheet</a></li>
        </ul>
      </div>
    </nav>

    <!-- 1. Hero Banner -->
    <section id="hero" class="hero-banner">
      <div class="hero-content">
        <h1 class="hero-title">FansBuy Spreadsheet</h1>
        <p class="hero-subtitle">Your Ultimate Fashion Discovery Platform</p>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">50,000+</span>
            <span class="stat-label">Products</span>
          </div>
          <div class="stat">
            <span class="stat-number">15+</span>
            <span class="stat-label">Categories</span>
          </div>
          <div class="stat">
            <span class="stat-number">Daily</span>
            <span class="stat-label">Updates</span>
          </div>
        </div>
        <a href="https://docs.google.com/spreadsheets/d/10e9euL3y7Bw7GvWUhX2FruG8mJWXz8C7eNwTo69XoQA/edit?gid=2068242972#gid=2068242972" target="_blank" class="cta-button primary">Browse Spreadsheet</a>
      </div>
    </section>

    <!-- 2. What is FansBuy Spreadsheet? -->
    <section id="what-is" class="content-section">
      <div class="section-container">
        <h2 class="section-title">What is FansBuy Spreadsheet?</h2>
        <div class="content-grid">
          <div class="content-block">
            <h3>The Definition</h3>
            <p>FansBuy Spreadsheet is a comprehensive, organized collection of over 50,000 fashion products meticulously curated and updated daily. It's your one-stop destination for discovering fashion items across multiple categories and price points.</p>
          </div>
          <div class="content-block">
            <h3>Why Use a Spreadsheet?</h3>
            <p>Unlike traditional e-commerce sites, our spreadsheet format offers unparalleled flexibility. Search, filter, and sort products exactly how you want. Compare prices, brands, and categories in seconds without navigating through multiple pages.</p>
          </div>
          <div class="content-block">
            <h3>What's Included</h3>
            <p>Each product entry contains: Product Name, Category, Price, High-Quality Images, Direct Purchase Links, Brand Information, Tags, and Updated Availability Status. Everything you need to make informed purchasing decisions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Why Choose FansBuy? -->
    <section id="why-choose" class="features-section">
      <div class="section-container">
        <h2 class="section-title">Why Choose FansBuy?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📂</div>
            <h3>Organized Categories</h3>
            <p>Browse through 15+ clearly organized categories including Shoes, Clothing, Accessories, Watches, and more.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h3>Daily Updates</h3>
            <p>New products added every day. Stay ahead of trends with our constantly refreshed inventory.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔍</div>
            <h3>Easy Product Discovery</h3>
            <p>Find exactly what you're looking for with powerful search and filter capabilities in our spreadsheet.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💰</div>
            <h3>Transparent Pricing</h3>
            <p>All prices clearly displayed in USD. No hidden fees. Know exactly what you're paying.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🧭</div>
            <h3>Simple Navigation</h3>
            <p>Intuitive layout makes it easy for anyone to browse and find products, regardless of tech experience.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📈</div>
            <h3>Growing Library</h3>
            <p>Our product collection continuously expands. More brands, more items, more choices every week.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Explore Categories -->
    <section id="categories" class="categories-section">
      <div class="section-container">
        <h2 class="section-title">Explore Categories</h2>
        <div class="categories-grid">
          <div v-for="category in categories" :key="category.id" class="category-card">
            <div class="category-icon">{{ category.icon }}</div>
            <h3>{{ category.name }}</h3>
            <p>{{ category.description }}</p>
            <a :href="category.link" class="category-link">Explore →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Popular Brands -->
    <section id="brands" class="brands-section">
      <div class="section-container">
        <h2 class="section-title">Popular Brands</h2>
        <p class="section-subtitle">Discover fashion from the world's most sought-after brands</p>
        <div class="brands-grid">
          <div v-for="brand in brands" :key="brand" class="brand-item">
            {{ brand }}
          </div>
        </div>
      </div>
    </section>

    <!-- 6. What's Inside the Spreadsheet -->
    <section id="inside" class="content-section">
      <div class="section-container">
        <h2 class="section-title">What's Inside the Spreadsheet</h2>
        <div class="columns-grid">
          <div v-for="column in spreadsheetColumns" :key="column" class="column-item">
            <div class="column-icon">📋</div>
            <p>{{ column }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. How It Works -->
    <section id="how-it-works" class="steps-section">
      <div class="section-container">
        <h2 class="section-title">How It Works</h2>
        <div class="steps-grid">
          <div v-for="(step, index) in steps" :key="index" class="step-card">
            <div class="step-number">{{ index + 1 }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. Featured Collections -->
    <section id="collections" class="collections-section">
      <div class="section-container">
        <h2 class="section-title">Featured Collections</h2>
        <div class="collections-grid">
          <div v-for="collection in collections" :key="collection" class="collection-card">
            <div class="collection-badge">{{ collection }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. Why Buyers Trust FansBuy -->
    <section id="trust" class="trust-section">
      <div class="section-container">
        <h2 class="section-title">Why Buyers Trust FansBuy</h2>
        <div class="trust-grid">
          <div v-for="reason in trustReasons" :key="reason" class="trust-item">
            <div class="trust-checkmark">✓</div>
            <p>{{ reason }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 10. FAQ -->
    <section id="faq" class="faq-section">
      <div class="section-container">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="faq-grid">
          <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
            <h3 class="faq-question">{{ faq.question }}</h3>
            <p class="faq-answer">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 11. Footer CTA -->
    <section id="footer-cta" class="footer-cta-section">
      <div class="section-container">
        <h2 class="cta-title">Ready to explore thousands of fashion finds?</h2>
        <p class="cta-subtitle">Browse the FansBuy Spreadsheet and discover organized collections across shoes, clothing, accessories, and more.</p>
        <a href="https://docs.google.com/spreadsheets/d/10e9euL3y7Bw7GvWUhX2FruG8mJWXz8C7eNwTo69XoQA/edit?gid=2068242972#gid=2068242972" target="_blank" class="cta-button primary large">Start Browsing Now</a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 FansBuy. All rights reserved.</p>
        <p>Discover fashion. Explore categories. Find your style.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// 分类结构定义
const categoryStructure = {
  'Clothing': ['T-shirt', 'Hoodie', 'Sweatshirt', 'Sweater', 'Down Jacket', 'Shorts Set', 'Jacket', 'Waistcoat', 'Down Vest', 'Tracksuit', 'ZIP Sweater', 'Jersey', 'Suit'],
  'Pants': ['Shorts', 'Underwear', 'Jeans', 'Sweatpants', 'Pants'],
  'Shoes': ['Nike Dunk', 'Crocs Shoes', 'ALEXANDER MCQUEE', 'Jordan 4', 'Nike Air Max 95', 'Nike Football Boots', 'Dior B27', 'Nike Max Plus TN', 'Dior B30', 'Off-white', 'Golden Goose', 'Adidas', 'Balenciaga', 'Asics', 'Nike Air Max 97', 'Lanvin', 'Burberry', 'Dunk SB x Off-white', 'Dior B22', 'Dior B23', 'NB 9060', 'Yeezy 350', 'Timberland', 'Bape', 'Nike Shox TL', 'Yeezy Slippers', 'Nike Air Max 95 Corteiz', 'Nike Skepta\'s Tailwind', 'Valentino', 'Nike AF1 Low \'07'],
  'Watches': ['Rolex Watches', 'Cartier Watches', 'Audemars Piguet Watches', 'Tissot Watches', 'S9–S10 Ultra2 Watches'],
  'Accessories': ['Belt', 'Wallet', 'Cap', 'Perfume', 'Bag', 'Glasses', 'Hat', 'Phone Case', 'Bracelet', 'Socks', 'Necklace', 'Scarf', 'Beanie', 'Headphones', 'Backpack', 'Mask', 'Sound Equipment', 'Travel Bag', 'Balaclava']
}

// 响应式状态
const selectedPrimary = ref('Clothing')
const selectedSecondary = ref(null)

// 计算属性
const primaryCategories = computed(() => Object.keys(categoryStructure))

const secondaryCategories = computed(() => {
  return selectedPrimary.value ? categoryStructure[selectedPrimary.value] : []
})

// 示例商品数据（框架）
const products = [
  {
    id: 7572836729,
    badge: 'hot',
    name: 'Stone Island Sweater',
    price: '$16.32',
    primaryCategory: 'Clothing',
    secondaryCategory: 'Sweater',
    image: 'https://si.geilicdn.com/pcitem901908374288-70d600000193b0a41fa30a231316_1600_1600.jpg',
    link: 'https://fansbuy.com/item-micro-7572836729.html?promotionCode=R0dfTU9DRzA2VTk'
  },
  {
    id: 7572864219,
    badge: 'hot',
    name: 'Ralph Lauren T-shirt',
    price: '$11.37',
    primaryCategory: 'Clothing',
    secondaryCategory: 'T-shirt',
    image: 'https://si.geilicdn.com/open1624782517-1624782517-755000000194ead414340a22d234_1920_1920.jpg',
    link: 'https://fansbuy.com/item-micro-7572864219.html?promotionCode=R0dfTU9DRzA2VTk'
  },
  {
    id: 7572812731,
    badge: 'new',
    name: 'Nike Nocta T-shirt',
    price: '$11.37',
    primaryCategory: 'Clothing',
    secondaryCategory: 'T-shirt',
    image: 'https://si.geilicdn.com/open1624782517-1624782517-02a900000196a570751c0a23b4de_800_800.jpg',
    link: 'https://fansbuy.com/item-micro-7572812731.html?promotionCode=R0dfTU9DRzA2VTk'
  },
  {
    id: 7574744386,
    badge: 'value',
    name: 'Bape T-shirt',
    price: '$16.32',
    primaryCategory: 'Clothing',
    secondaryCategory: 'T-shirt',
    image: 'https://si.geilicdn.com/open1875660057-252808396-7ede000001919e4cc1270a22d234_1097_1097.jpg',
    link: 'https://fansbuy.com/item-micro-7574744386.html?promotionCode=R0dfTU9DRzA2VTk'
  },
  {
    id: 7574795754,
    badge: 'hot',
    name: 'Ralph Lauren Polo',
    price: '$11.54',
    primaryCategory: 'Clothing',
    secondaryCategory: 'T-shirt',
    image: 'https://si.geilicdn.com/open1831483949-1831483949-7e2b0000019bd58a54dc0aa08245-unadjust_326_349.png',
    link: 'https://fansbuy.com/item-micro-7574795754.html?promotionCode=R0dfTU9DRzA2VTk'
  },
  {
    id: 7574705188,
    badge: 'value',
    name: 'Ralph Lauren Polo',
    price: '$13.05',
    primaryCategory: 'Clothing',
    secondaryCategory: 'T-shirt',
    image: 'https://si.geilicdn.com/pcitem901903640419-78f900000192e730b7050a239846_1920_1920.jpg',
    link: 'https://fansbuy.com/item-micro-7574705188.html?promotionCode=R0dfTU9DRzA2VTk'
  },
  {
    id: 7574805716,
    badge: 'hot',
    name: 'Jersey',
    price: '$11.37',
    primaryCategory: 'Clothing',
    secondaryCategory: 'Jersey',
    image: 'https://si.geilicdn.com/open1831483949-1831483949-131b0000019bd5ba10480a22d249-unadjust_323_323.png',
    link: 'https://fansbuy.com/item-micro-7574805716.html?promotionCode=R0dfTU9DRzA2VTk'
  },
  {
    id: 7572844599,
    badge: 'new',
    name: 'Jersey',
    price: '$16.32',
    primaryCategory: 'Clothing',
    secondaryCategory: 'Jersey',
    image: 'https://si.geilicdn.com/open1624782517-1624782517-7fe300000199e2ad8bc90aa006e9-unadjust_1031_1031.png',
    link: 'https://fansbuy.com/item-micro-7572844599.html?promotionCode=R0dfTU9DRzA2VTk'
  },
  {
    id: 7574738806,
    badge: 'value',
    name: 'Jersey',
    price: '$14.84',
    primaryCategory: 'Clothing',
    secondaryCategory: 'Jersey',
    image: 'https://si.geilicdn.com/open1624782517-1624782517-48c300000199e2ada7310aa081c2-unadjust_978_978.png',
    link: 'https://fansbuy.com/item-micro-7574738806.html?promotionCode=R0dfTU9DRzA2VTk'
  },
  {
    id: 7572793335,
    badge: 'hot',
    name: 'Hellstar T-shirt',
    price: '$11.21',
    primaryCategory: 'Clothing',
    secondaryCategory: 'T-shirt',
    image: 'https://si.geilicdn.com/open1718289365-1234478995-545800000194966be72b0a232357_1600_1600.jpg',
    link: 'https://fansbuy.com/item-micro-7572793335.html?promotionCode=R0dfTU9DRzA2VTk'
  }
]

// 过滤后的商品
const filteredProducts = computed(() => {
  return products.filter(product => {
    const matchesPrimary = product.primaryCategory === selectedPrimary.value
    const matchesSecondary = selectedSecondary.value === null || product.secondaryCategory === selectedSecondary.value
    return matchesPrimary && matchesSecondary
  })
})

// 方法
function selectPrimaryCategory(category) {
  selectedPrimary.value = category
  selectedSecondary.value = null
}

function selectSecondaryCategory(subcategory) {
  selectedSecondary.value = subcategory
}

function trackClick(product) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'view_item', {
      'items': [{
        'item_id': product.id,
        'item_name': product.name,
        'price': product.price,
        'item_category': product.primaryCategory,
        'item_subcategory': product.secondaryCategory
      }]
    })
  }
  
  if (typeof LA !== 'undefined' && LA.track) {
    LA.track('product_click', {
      'product_id': product.id,
      'product_name': product.name,
      'product_price': product.price,
      'product_category': product.primaryCategory,
      'product_subcategory': product.secondaryCategory
    })
  }
}

const categories = [
  { id: 1, name: 'Shoes', description: 'Sneakers, boots, and more', icon: '👟', link: '#shoes' },
  { id: 2, name: 'T-Shirts', description: 'Casual and graphic tees', icon: '👕', link: '#tshirts' },
  { id: 3, name: 'Hoodies & Sweaters', description: 'Cozy and stylish layers', icon: '🧥', link: '#hoodies' },
  { id: 4, name: 'Jackets', description: 'Outerwear for every season', icon: '🧥', link: '#jackets' },
  { id: 5, name: 'Pants & Shorts', description: 'Bottoms for all occasions', icon: '👖', link: '#pants' },
  { id: 6, name: 'Headwear', description: 'Hats, caps, and beanies', icon: '🧢', link: '#headwear' },
  { id: 7, name: 'Accessories', description: 'Bags, belts, watches, and more', icon: '💼', link: '#accessories' },
  { id: 8, name: 'Watches', description: 'Luxury and casual timepieces', icon: '⌚', link: '#watches' },
  { id: 9, name: 'Other Stuff', description: 'Unique finds and more', icon: '🎁', link: '#other' }
]

const brands = [
  'Nike', 'Jordan', 'Adidas', 'Louis Vuitton', 'Dior', 'Gucci', 'Chrome Hearts',
  'Palm Angels', 'Stussy', 'Moncler', 'Trapstar', 'Essentials', 'Amiri', 'Stone Island'
]

const spreadsheetColumns = [
  'Product Name',
  'Category',
  'Price',
  'Product Images',
  'Purchase Link',
  'Brand',
  'Tags',
  'Updated Information'
]

const steps = [
  { title: 'Open the Spreadsheet', description: 'Access our comprehensive product database with a single click.' },
  { title: 'Browse Categories', description: 'Navigate through organized categories to find what interests you.' },
  { title: 'Compare Products', description: 'Use spreadsheet features to compare prices, brands, and specifications.' },
  { title: 'Select Your Favorites', description: 'Mark items you love and create your personal wishlist.' },
  { title: 'Purchase Through FansBuy', description: 'Click direct links to purchase from our trusted partners.' }
]

const collections = [
  'Best Sneakers',
  'Trending Hoodies',
  'Summer Essentials',
  'Luxury Fashion',
  'Budget Finds',
  'New Arrivals'
]

const trustReasons = [
  'Large Product Collection - Over 50,000 items from top brands',
  'Daily Updated Listings - Fresh inventory every single day',
  'Organized Navigation - Easy-to-use category structure',
  'Easy Product Discovery - Powerful search and filter tools',
  'Continuously Growing Database - New brands and products weekly'
]

const faqs = [
  {
    question: 'What is FansBuy Spreadsheet?',
    answer: 'FansBuy Spreadsheet is a curated collection of over 50,000 fashion products organized by category, updated daily, and designed for easy browsing and comparison.'
  },
  {
    question: 'How often is it updated?',
    answer: 'Our spreadsheet is updated daily with new products, price changes, and availability updates to ensure you always have the latest information.'
  },
  {
    question: 'What products can I find?',
    answer: 'We cover shoes, clothing, accessories, watches, and more from popular brands like Nike, Dior, Gucci, and many others.'
  },
  {
    question: 'How do I browse the spreadsheet?',
    answer: 'Simply click the "Browse Spreadsheet" button to access our Google Sheets. Use filters and search to find exactly what you\'re looking for.'
  },
  {
    question: 'Is the spreadsheet free to access?',
    answer: 'Yes! The FansBuy Spreadsheet is completely free to access and browse. No registration or payment required.'
  }
]

onMounted(() => {
  const ga4Script = document.createElement('script')
  ga4Script.async = true
  ga4Script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XTJTTBZTPM'
  document.head.appendChild(ga4Script)

  const la51Script = document.createElement('script')
  la51Script.charset = 'UTF-8'
  la51Script.src = '//sdk.51.la/js-sdk-pro.min.js'
  la51Script.onload = function() {
    if (typeof LA !== 'undefined') {
      LA.init({id:"3QY7P2FXzSiNjyje",ck:"3QY7P2FXzSiNjyje"})
    }
  }
  document.head.appendChild(la51Script)
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  width: 100%;
  max-width: 100%;
}

.fansbuy-home {
  width: 100%;
  background-color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

/* Hide VitePress default navbar */
:deep(.VPNav) {
  display: none !important;
}

/* Navigation */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  padding: 12px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.nav-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  overflow-x: auto;
}

.nav-brand {
  font-size: 24px;
  font-weight: 700;
  color: #d4af37;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 15px;
  overflow-x: auto;
  flex-wrap: nowrap;
  flex: 1;
  min-width: 0;
}

.nav-link {
  text-decoration: none;
  color: #666;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.nav-link:hover {
  color: #000;
}

.nav-link.active {
  color: #d4af37;
  border-bottom: 2px solid #d4af37;
}

.spreadsheet-link {
  background-color: #8b0000;
  color: #fff !important;
  padding: 6px 12px;
  border-radius: 4px;
}

.spreadsheet-link:hover {
  background-color: #a00000;
}

/* Hero Banner */
.hero-banner {
  background: linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%);
  padding: 80px 20px;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  color: #000;
  margin-bottom: 10px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 24px;
  color: #666;
  margin-bottom: 30px;
  font-weight: 300;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 32px;
  font-weight: 700;
  color: #d4af37;
}

.stat-label {
  font-size: 14px;
  color: #666;
  margin-top: 5px;
}

.cta-button {
  display: inline-block;
  padding: 12px 30px;
  background-color: #8b0000;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.cta-button:hover {
  background-color: #a00000;
  transform: translateY(-2px);
}

.cta-button.large {
  padding: 16px 40px;
  font-size: 18px;
}

/* Sections */
.content-section,
.features-section,
.categories-section,
.brands-section,
.steps-section,
.collections-section,
.trust-section,
.faq-section,
.footer-cta-section {
  padding: 60px 20px;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  color: #000;
  margin-bottom: 40px;
  text-align: center;
}

.section-subtitle {
  font-size: 18px;
  color: #666;
  text-align: center;
  margin-bottom: 30px;
}

/* Content Grid */
.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.content-block {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.content-block h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #000;
}

.content-block p {
  font-size: 14px;
  line-height: 1.6;
  color: #555;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.feature-card {
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.feature-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #000;
}

.feature-card p {
  font-size: 14px;
  line-height: 1.6;
  color: #555;
}

/* Categories Grid */
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.category-card {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.category-card:hover {
  background-color: #f0f0f0;
  transform: translateY(-3px);
}

.category-icon {
  font-size: 36px;
  margin-bottom: 12px;
}

.category-card h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #000;
}

.category-card p {
  font-size: 13px;
  color: #666;
  margin-bottom: 12px;
}

.category-link {
  font-size: 13px;
  color: #d4af37;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.category-link:hover {
  color: #8b0000;
}

/* Brands Section */
.brands-section {
  background-color: #f9f9f9;
}

.brands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.brand-item {
  padding: 15px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  transition: all 0.3s ease;
}

.brand-item:hover {
  border-color: #d4af37;
  background-color: #fffbf0;
}

/* Columns Grid */
.columns-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.column-item {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  text-align: center;
}

.column-icon {
  font-size: 32px;
  margin-bottom: 10px;
}

.column-item p {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

/* Steps Grid */
.steps-section {
  background-color: #f9f9f9;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.step-card {
  padding: 25px;
  background-color: #fff;
  border-radius: 8px;
  text-align: center;
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #d4af37;
  color: #fff;
  border-radius: 50%;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 15px;
}

.step-card h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #000;
}

.step-card p {
  font-size: 14px;
  line-height: 1.6;
  color: #555;
}

/* Collections Grid */
.collections-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.collection-card {
  padding: 30px;
  background: linear-gradient(135deg, #d4af37 0%, #c9a227 100%);
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.collection-card:hover {
  transform: scale(1.05);
}

.collection-badge {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
}

/* Trust Section */
.trust-section {
  background-color: #f9f9f9;
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.trust-item {
  display: flex;
  gap: 15px;
  padding: 15px;
  background-color: #fff;
  border-radius: 6px;
}

.trust-checkmark {
  font-size: 24px;
  color: #00aa44;
  font-weight: 700;
  flex-shrink: 0;
}

.trust-item p {
  font-size: 14px;
  line-height: 1.6;
  color: #333;
}

/* FAQ Section */
.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.faq-item {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.faq-question {
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.faq-answer {
  font-size: 14px;
  line-height: 1.6;
  color: #555;
}

/* Footer CTA */
.footer-cta-section {
  background: linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%);
  text-align: center;
}

.cta-title {
  font-size: 36px;
  font-weight: 700;
  color: #000;
  margin-bottom: 15px;
}

.cta-subtitle {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Footer */
.footer {
  background-color: #1a1a1a;
  color: #fff;
  padding: 30px 20px;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content p {
  font-size: 14px;
  margin: 5px 0;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 32px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .section-title {
    font-size: 28px;
  }

  .nav-links {
    gap: 10px;
    font-size: 13px;
  }

  .nav-link {
    font-size: 13px;
    padding: 6px 10px;
  }

  .nav-brand {
    font-size: 18px;
  }

  .hero-stats {
    gap: 15px;
  }

  .stat-number {
    font-size: 24px;
  }

  .stat-label {
    font-size: 12px;
  }

  .categories-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
  }

  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
  }

  .content-grid {
    grid-template-columns: 1fr;
  }

  .content-section,
  .features-section,
  .categories-section,
  .brands-section,
  .steps-section,
  .collections-section,
  .trust-section,
  .faq-section,
  .footer-cta-section {
    padding: 40px 15px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 22px;
  }

  .hero-subtitle {
    font-size: 14px;
  }

  .section-title {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .nav-container {
    flex-direction: row;
    gap: 8px;
    overflow-x: auto;
    padding: 0 10px;
  }

  .nav-brand {
    font-size: 14px;
    flex-shrink: 0;
  }

  .nav-links {
    gap: 5px;
    font-size: 10px;
  }

  .nav-link {
    font-size: 10px;
    padding: 4px 6px;
  }

  .spreadsheet-link {
    padding: 3px 6px;
    font-size: 10px;
  }

  .hero-banner {
    padding: 40px 15px;
  }

  .hero-stats {
    gap: 10px;
    margin: 15px 0;
  }

  .stat-number {
    font-size: 18px;
  }

  .stat-label {
    font-size: 9px;
  }

  .cta-button {
    padding: 10px 20px;
    font-size: 13px;
  }

  .categories-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 8px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .brands-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .content-grid {
    grid-template-columns: 1fr;
  }

  .content-section,
  .features-section,
  .categories-section,
  .brands-section,
  .steps-section,
  .collections-section,
  .trust-section,
  .faq-section,
  .footer-cta-section {
    padding: 25px 12px;
  }

  .feature-card {
    padding: 20px;
  }

  .category-card {
    padding: 15px;
  }

  .step-card {
    padding: 20px;
  }

  .faq-item {
    padding: 15px;
  }

  .cta-title {
    font-size: 24px;
  }

  .cta-subtitle {
    font-size: 14px;
  }
}
</style>
