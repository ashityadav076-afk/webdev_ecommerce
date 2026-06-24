const products = [
  {
    id: 1,
    name: 'boAt Rockerz 550 Pro Bluetooth Headphones',
    category: 'Electronics',
    price: 1799,
    oldPrice: 4990,
    emoji: '🎧',
    bg: 'pi1',
    tag: 'Sale',
    rating: 4.3,
    reviews: 18724,
    brand: 'boAt',
    desc: '40hr battery, 40mm drivers, foldable design'
  },
  {
    id: 2,
    name: "Levi's Men's 511 Slim Fit Jeans Dark Indigo",
    category: 'Fashion',
    price: 1679,
    oldPrice: 2999,
    emoji: '👖',
    bg: 'pi2',
    tag: 'Sale',
    rating: 4.4,
    reviews: 6312,
    brand: "Levi's",
    desc: 'Slim fit, mid-rise, stretch denim, sizes 28-38'
  },
  {
    id: 3,
    name: 'Bajaj Majesty 1000W Dry Iron',
    category: 'Home',
    price: 549,
    oldPrice: 799,
    emoji: '🔌',
    bg: 'pi3',
    tag: 'Best Seller',
    rating: 4.2,
    reviews: 31540,
    brand: 'Bajaj',
    desc: 'Non-stick soleplate, ISI marked, 2-yr warranty'
  },
  {
    id: 4,
    name: 'Nivia Storm Football Size 5',
    category: 'Sports',
    price: 449,
    oldPrice: null,
    emoji: '⚽',
    bg: 'pi4',
    tag: 'New',
    rating: 4.1,
    reviews: 2871,
    brand: 'Nivia',
    desc: '32-panel machine stitched, suitable for all surfaces!'
  },
  {
    id: 5,
    name: 'Redmi Note 13 Pro 5G (8GB+256GB) Coral Purple',
    category: 'Electronics',
    price: 23999,
    oldPrice: 27999,
    emoji: '📱',
    bg: 'pi5',
    tag: 'Sale',
    rating: 4.5,
    reviews: 54203,
    brand: 'Redmi',
    desc: '200MP OIS camera, Snapdragon 7s Gen 2, 5000mAh'
  },
  {
    id: 6,
    name: "Campus Women's Running Shoes White/Pink",
    category: 'Fashion',
    price: 899,
    oldPrice: 1799,
    emoji: '👟',
    bg: 'pi6',
    tag: 'Sale',
    rating: 4.0,
    reviews: 9841,
    brand: 'Campus',
    desc: 'Lightweight mesh upper, cushioned insole, UK 3-8'
  },
  {
    id: 7,
    name: 'Prestige Svachh 5L Pressure Cooker',
    category: 'Home',
    price: 1295,
    oldPrice: 1750,
    emoji: '🍲',
    bg: 'pi7',
    tag: 'Top Pick',
    rating: 4.6,
    reviews: 42300,
    brand: 'Prestige',
    desc: 'Induction compatible, deep lid, 5-yr warranty!'
  },
  {
    id: 8,
    name: 'Cosco Hurricane Badminton Racket Set (4 pcs)',
    category: 'Sports',
    price: 699,
    oldPrice: null,
    emoji: '🏸',
    bg: 'pi8',
    tag: 'New',
    rating: 4.0,
    reviews: 3420,
    brand: 'Cosco',
    desc: 'Includes 4 rackets 3 shuttlecocks + carry bag!'
  },
  {
    id: 9,
    name: 'HP 15s Intel Core i5 13th Gen Laptop (8GB/512GB SSD)',
    category: 'Electronics',
    price: 47990,
    oldPrice: 55990,
    emoji: '💻',
    bg: 'pi1',
    tag: 'Sale',
    rating: 4.4,
    reviews: 12650,
    brand: 'HP',
    desc: '15.6" FHD, Windows 11, backlit keyboard, 8hr battery'
  },
  {
    id: 10,
    name: "Puma Men's T7 Track Jacket Black",
    category: 'Fashion',
    price: 2399,
    oldPrice: 3999,
    emoji: '🧥',
    bg: 'pi2',
    tag: 'Sale',
    rating: 4.3,
    reviews: 4178,
    brand: 'Puma',
    desc: '100% polyester, ribbed cuffs, Puma cat logo, S-2XL'
  },
  {
    id: 11,
    name: 'Havells Cista 1200mm Ceiling Fan Pearl White',
    category: 'Home',
    price: 2790,
    oldPrice: 3200,
    emoji: '🌀',
    bg: 'pi3',
    tag: 'Top Pick',
    rating: 4.5,
    reviews: 9762,
    brand: 'Havells',
    desc: 'BLDC motor, 5-star rated, 28W, saves 65% energy'
  },
  {
    id: 12,
    name: 'Boldfit Gym Gloves with Wrist Support',
    category: 'Sports',
    price: 349,
    oldPrice: 699,
    emoji: '🧤',
    bg: 'pi4',
    tag: 'Sale',
    rating: 4.2,
    reviews: 15023,
    brand: 'Boldfit',
    desc: 'Anti-slip silicone grip, adjustable strap, unisex'
  }
];

let cart = [];
let wishlist = new Set();

function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = list.map(p => `
    <div class="prod-card">
      <div class="prod-img ${p.bg}">
        ${p.emoji}
        <span class="prod-tag ${p.tag === 'Sale' ? 'sale' : p.tag === 'New' ? 'new' : ''}">${p.tag}</span>
        <button class="prod-wishlist ${wishlist.has(p.id) ? 'liked' : ''}" onclick="toggleWishlist(event, ${p.id})">
          ${wishlist.has(p.id) ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="prod-info">
        <div class="prod-category">${p.brand} <span>•</span> ${p.category}</div>
        <div class="prod-name">${p.name}</div>
        <div style="font-size:0.78rem; color:#718096; margin-bottom:8px; line-height:1.4">${p.desc}</div>
        <div class="prod-rating">
          <span class="stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5 - Math.floor(p.rating))}</span>
          <span class="rating-count">${p.rating} (${p.reviews.toLocaleString()} ratings)</span>
        </div>
        <div class="prod-footer">
          <div class="prod-price">
            ${p.oldPrice ? `<span class="old">₹${p.oldPrice.toLocaleString()}</span>` : ''}
            ₹${p.price.toLocaleString()}
            ${p.oldPrice ? `<span style="color: #22c55e; font-size: 0.75rem; font-family:var(--font-body)">(${Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100)}% OFF)</span>` : ''}
          </div>
          <button class="add-to-cart" onclick="addToCart(${p.id})">+ Add</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterProducts(cat) {
  const filtered = products.filter(p => p.category === cat);
  renderProducts(filtered);
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  showToast(`Showing ${cat} products`);
}

function toggleWishlist(e, id) {
  e.stopPropagation();
  if (wishlist.has(id)) {
    wishlist.delete(id);
    showToast('Removed from wishlist');
  } else {
    wishlist.add(id);
    showToast('Added to wishlist');
  }
  renderProducts(products);
}

function addToCart(id) {
  const p = products.find(x => x.id === id);
  const ex = cart.find(x => x.id === id);
  if (ex) {
    ex.qty++;
  } else {
    cart.push({ ...p, qty: 1 });
  }
  updateCartBadge();
  showToast(`${p.emoji} ${p.name.split(' ').slice(0, 3).join(' ')} added!`);
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  updateCartBadge();
  renderCart();
}

function updateCartBadge() {
  const total = cart.reduce((a, x) => a + x.qty, 0);
  document.getElementById('cartBadge').textContent = total;
}

function renderCart() {
  const el = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  
  if (!cart.length) {
    el.innerHTML = '<div class="cart-empty"><div class="cart-empty-emoji">🛒</div><p>Your cart is empty</p></div>';
    footer.style.display = 'none';
    return;
  }
  
  el.innerHTML = cart.map(p => `
    <div class="cart-item">
      <div class="cart-item-emoji">${p.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-price">₹${p.price.toLocaleString()} x ${p.qty}</div>
        <button class="cart-item-remove" onclick="removeFromCart(${p.id})">X Remove</button>
      </div>
    </div>
  `).join('');
  
  const total = cart.reduce((a, x) => a + (x.price * x.qty), 0);
  document.getElementById('cartTotal').textContent = '₹' + total.toLocaleString();
  footer.style.display = 'block';
}

function toggleCart() {
  const overlay = document.getElementById('cartOverlay');
  const sidebar = document.getElementById('cartSidebar');
  
  sidebar.classList.toggle('open');
  const isOpen = sidebar.classList.contains('open');
  overlay.classList.toggle('open', isOpen);
  
  if (isOpen) renderCart();
}

function checkout() {
  showToast('Redirecting to checkout...');
  toggleCart();
}

function subscribeNewsletter() {
  showToast('Subscribed successfully!');
}

let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
}

// Init
renderProducts(products);
