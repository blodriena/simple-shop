const params = new URLSearchParams(window.location.search);
const id = params.get('id') || '1';
 
const THEMES = {
  dark: {
    bg: '#0d1117', navBg: '#0d1117', navBorder: 'rgba(255,255,255,0.08)',
    text: '#fff', textMuted: 'rgba(255,255,255,0.55)', textSub: 'rgba(255,255,255,0.35)',
    cardBg: '#131920', cardBorder: 'rgba(255,255,255,0.1)',
    inputBg: '#0d1117', inputBorder: 'rgba(255,255,255,0.2)',
    dropBg: '#1a2030', dropBorder: 'rgba(255,255,255,0.12)',
    footerBg: '#0a0f16', btnOutline: 'rgba(255,255,255,0.3)',
    qtyBg: '#1a2030', qtyBorder: 'rgba(255,255,255,0.15)',
    tabActiveBg: '#1e293b', tabActiveBorder: 'rgba(255,255,255,0.35)',
    tabColor: 'rgba(255,255,255,0.6)',
    breadcrumb: 'rgba(255,255,255,0.45)',
    thumbBorder: 'rgba(255,255,255,0.15)', thumbActiveBorder: '#3b82f6',
  },
  light: {
    bg: '#f5f5f5', navBg: '#ffffff', navBorder: 'rgba(0,0,0,0.1)',
    text: '#111', textMuted: 'rgba(0,0,0,0.55)', textSub: 'rgba(0,0,0,0.35)',
    cardBg: '#ffffff', cardBorder: 'rgba(0,0,0,0.1)',
    inputBg: '#ffffff', inputBorder: 'rgba(0,0,0,0.2)',
    dropBg: '#ffffff', dropBorder: 'rgba(0,0,0,0.12)',
    footerBg: '#e8e8e8', btnOutline: 'rgba(0,0,0,0.3)',
    qtyBg: '#f0f0f0', qtyBorder: 'rgba(0,0,0,0.15)',
    tabActiveBg: '#e2e8f0', tabActiveBorder: 'rgba(0,0,0,0.2)',
    tabColor: 'rgba(0,0,0,0.5)',
    breadcrumb: 'rgba(0,0,0,0.45)',
    thumbBorder: 'rgba(0,0,0,0.15)', thumbActiveBorder: '#3b82f6',
  }
};
 
let theme = 'dark';
function s() { return THEMES[theme]; }
 
let product = null;
let related = [];
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
let activeTab = 'description';
let qty = 1;
let activeThumb = 0;
 
function saveCart() { localStorage.setItem('cart', JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem('wishlist', JSON.stringify(wishlist)); }
 
function addToCart(p, amount) {
  amount = amount || 1;
  const ex = cart.find(i => i.id === p.id);
  if (ex) ex.qty += amount;
  else cart.push({ ...p, qty: amount });
  saveCart();
}
function toggleWishlist(p) {
  const idx = wishlist.findIndex(i => i.id === p.id);
  if (idx > -1) wishlist.splice(idx, 1);
  else wishlist.push(p);
  saveWishlist();
}
function inWishlist(id) { return wishlist.some(i => i.id === id); }
function inCart(id) { return cart.some(i => i.id === id); }
function cartCount() { return cart.reduce((a, i) => a + i.qty, 0); }
 
function el(tag, styles, html, attrs) {
  const elem = document.createElement(tag);
  if (styles) Object.assign(elem.style, styles);
  if (html !== undefined) elem.innerHTML = html;
  if (attrs) Object.keys(attrs).forEach(k => elem.setAttribute(k, attrs[k]));
  return elem;
}
function applyStyles(elem, styles) { Object.assign(elem.style, styles); }
 
function renderStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) stars += '<span style="color:#f59e0b">&#9733;</span>';
    else if (i - rating < 1) stars += '<span style="color:#f59e0b">&#9734;</span>';
    else stars += '<span style="color:rgba(255,255,255,0.2)">&#9733;</span>';
  }
  return stars;
}
 
const ICON = {
  moon: '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  heart: f => `<svg width="18" height="18" fill="${f ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  cart: '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
  cartSm: '<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
  user: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  arrowLeft: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
  share: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
  check: '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>',
  truck: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  refresh: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>',
  shield: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
};
 
function renderNavbar() {
  const ss = s();
  const nav = el('nav', {
    background: ss.navBg, borderBottom: `1px solid ${ss.navBorder}`,
    padding: '0 24px', display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', height: '56px',
    position: 'sticky', top: '0', zIndex: '200'
  });
 
  const left = el('div', { display: 'flex', alignItems: 'center', gap: '28px' });
  const logo = el('span', { fontWeight: '700', fontSize: '16px', cursor: 'pointer', color: ss.text }, 'Store');
  logo.onclick = () => { window.location.href = 'index.html'; };
  left.appendChild(logo);
  const links = el('div', { display: 'flex', gap: '24px' });
  [['Home', 'index.html'], ['Products', 'index.html'], ['Categories', 'index.html']].forEach(([label, href]) => {
    const a = el('a', { fontSize: '14px', color: ss.textMuted, textDecoration: 'none', cursor: 'pointer' }, label, { href });
    links.appendChild(a);
  });
  left.appendChild(links);
  nav.appendChild(left);
 
  const right = el('div', { display: 'flex', alignItems: 'center', gap: '8px' });
 
  const themeWrap = el('div', { position: 'relative' });
  const themeBtn = el('button', { background: 'transparent', border: 'none', color: ss.textMuted, cursor: 'pointer', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px' }, ICON.moon);
  const themeDrop = el('div', { position: 'absolute', top: 'calc(100% + 6px)', right: '0', background: ss.dropBg, border: `1px solid ${ss.dropBorder}`, borderRadius: '8px', padding: '8px', minWidth: '120px', zIndex: '999', boxShadow: '0 8px 24px rgba(0,0,0,0.3)', display: 'none' });
  ['Light', 'Dark', 'System'].forEach(t => {
    const opt = el('button', { display: 'block', width: '100%', background: theme === t.toLowerCase() ? 'rgba(59,130,246,0.15)' : 'transparent', border: 'none', color: ss.text, fontSize: '14px', padding: '8px 14px', textAlign: 'left', cursor: 'pointer', borderRadius: '4px' }, t);
    opt.onclick = () => { theme = t.toLowerCase() === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : t.toLowerCase(); renderPage(); };
    themeDrop.appendChild(opt);
  });
  let themeTimer;
  themeWrap.onmouseenter = () => { clearTimeout(themeTimer); themeDrop.style.display = 'block'; };
  themeWrap.onmouseleave = () => { themeTimer = setTimeout(() => { themeDrop.style.display = 'none'; }, 150); };
  themeWrap.appendChild(themeBtn); themeWrap.appendChild(themeDrop);
  right.appendChild(themeWrap);
 
  const wBtn = el('button', { background: 'transparent', border: 'none', color: ss.textMuted, cursor: 'pointer', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', position: 'relative' }, ICON.heart(false));
  if (wishlist.length > 0) {
    const b = el('span', { position: 'absolute', top: '0', right: '0', background: '#3b82f6', color: '#fff', borderRadius: '50%', width: '16px', height: '16px', fontSize: '10px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' }, wishlist.length > 9 ? '9+' : String(wishlist.length));
    wBtn.appendChild(b);
  }
  right.appendChild(wBtn);
 
  const cCount = cartCount();
  const cBtn = el('button', { background: 'transparent', border: 'none', color: ss.textMuted, cursor: 'pointer', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', position: 'relative' }, ICON.cart);
  if (cCount > 0) {
    const b = el('span', { position: 'absolute', top: '0', right: '0', background: '#3b82f6', color: '#fff', borderRadius: '50%', width: '16px', height: '16px', fontSize: '10px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' }, cCount > 9 ? '9+' : String(cCount));
    cBtn.appendChild(b);
  }
  right.appendChild(cBtn);
 
  const loginBtn = el('button', { background: 'transparent', border: `1px solid ${ss.btnOutline}`, color: ss.text, borderRadius: '6px', padding: '6px 14px', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }, ICON.user + ' Login');
  right.appendChild(loginBtn);
 
  nav.appendChild(right);
  return nav;
}
 
function renderBreadcrumb() {
  const ss = s();
  const wrap = el('div', { padding: '14px 24px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: ss.breadcrumb, borderBottom: `1px solid ${ss.navBorder}` });
  const home = el('a', { color: ss.breadcrumb, textDecoration: 'none', cursor: 'pointer' }, 'Home', { href: 'index.html' });
  const sep1 = el('span', { color: ss.textSub }, '/');
  const cat = el('a', { color: ss.breadcrumb, textDecoration: 'none', cursor: 'pointer', textTransform: 'capitalize' }, product ? product.category : '...', { href: 'index.html' });
  const sep2 = el('span', { color: ss.textSub }, '/');
  const current = el('span', { color: ss.text, fontWeight: '500' }, product ? (product.title.length > 40 ? product.title.slice(0, 40) + '...' : product.title) : '...');
  wrap.appendChild(home); wrap.appendChild(sep1); wrap.appendChild(cat);
  wrap.appendChild(sep2); wrap.appendChild(current);
  return wrap;
}
 
function renderSkeleton() {
  const ss = s();
  const wrap = el('div', { padding: '32px 24px' });
  const layout = el('div', { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' });
  const imgSkel = el('div', { background: ss.cardBg, borderRadius: '12px', height: '460px', animation: 'pulse 1.5s infinite' });
  const detailSkel = el('div', { display: 'flex', flexDirection: 'column', gap: '16px' });
  [60, 200, 80, 60, 120, 200].forEach(h => {
    detailSkel.appendChild(el('div', { background: ss.cardBg, borderRadius: '6px', height: h + 'px' }));
  });
  layout.appendChild(imgSkel); layout.appendChild(detailSkel);
  wrap.appendChild(layout);
  return wrap;
}
 
function renderProduct() {
  const ss = s();
  if (!product) return renderSkeleton();
 
  const wished = inWishlist(product.id);
  const carted = inCart(product.id);
 
  const section = el('section', { padding: '32px 24px' });
 
  const grid = el('div', { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' });
 
  const galleryCol = el('div', { display: 'flex', gap: '14px' });
 
  const thumbList = el('div', { display: 'flex', flexDirection: 'column', gap: '10px' });
  const thumbImages = [product.image, product.image, product.image];
  thumbImages.forEach((imgSrc, i) => {
    const thumb = el('button', {
      background: '#fff', border: `2px solid ${i === activeThumb ? ss.thumbActiveBorder : ss.thumbBorder}`,
      borderRadius: '8px', padding: '6px', width: '70px', height: '70px',
      cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
      transition: 'border-color 0.15s'
    });
    const tImg = el('img', { width: '100%', height: '100%', objectFit: 'contain' });
    tImg.src = imgSrc;
    thumb.appendChild(tImg);
    thumb.onclick = () => {
      activeThumb = i;
      renderPage();
    };
    thumbList.appendChild(thumb);
  });
  galleryCol.appendChild(thumbList);
 
  const mainImgWrap = el('div', { flex: '1', background: '#fff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px', minHeight: '420px', position: 'relative' });
  const mainImg = el('img', { maxHeight: '360px', maxWidth: '100%', objectFit: 'contain' });
  mainImg.src = thumbImages[activeThumb];
  mainImg.alt = product.title;
  mainImgWrap.appendChild(mainImg);
 
  const shareBtn = el('button', { position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.08)', border: 'none', borderRadius: '6px', width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#666' }, ICON.share);
  mainImgWrap.appendChild(shareBtn);
  galleryCol.appendChild(mainImgWrap);
 
  grid.appendChild(galleryCol);
 
  const details = el('div', { display: 'flex', flexDirection: 'column', gap: '18px' });
 
  const catBadge = el('span', {
    fontSize: '12px', color: ss.textMuted, background: ss.cardBg,
    border: `1px solid ${ss.cardBorder}`, borderRadius: '20px',
    padding: '4px 12px', display: 'inline-block', textTransform: 'capitalize'
  }, product.category);
  details.appendChild(catBadge);
 
  details.appendChild(el('h1', { fontSize: '22px', fontWeight: '700', color: ss.text, lineHeight: '1.35' }, product.title));
 
  const ratingRow = el('div', { display: 'flex', alignItems: 'center', gap: '10px' });
  ratingRow.innerHTML = renderStars(product.rating.rate) +
    `<span style="font-size:14px;color:${ss.textMuted}">${product.rating.rate} (${product.rating.count} reviews)</span>`;
  details.appendChild(ratingRow);
 
  // Price
  const priceRow = el('div', { display: 'flex', alignItems: 'baseline', gap: '10px' });
  priceRow.appendChild(el('span', { fontSize: '30px', fontWeight: '700', color: ss.text }, `$${product.price.toFixed(2)}`));
  // Fake original price (20% more)
  const fakeOriginal = (product.price * 1.2).toFixed(2);
  priceRow.appendChild(el('span', { fontSize: '16px', color: ss.textMuted, textDecoration: 'line-through' }, `$${fakeOriginal}`));
  priceRow.appendChild(el('span', { fontSize: '13px', background: '#16a34a22', color: '#22c55e', padding: '3px 8px', borderRadius: '4px', fontWeight: '600' }, '20% OFF'));
  details.appendChild(priceRow);
 
  // Divider
  details.appendChild(el('div', { borderTop: `1px solid ${ss.cardBorder}`, marginTop: '2px' }));
 
  // Tabs
  const tabsWrap = el('div', { display: 'flex', gap: '8px' });
  const tabContent = el('div', { fontSize: '14px', color: ss.textMuted, lineHeight: '1.75', marginTop: '2px', minHeight: '80px' });
 
  function setTab(t) {
    activeTab = t;
    tabsWrap.querySelectorAll('.tab-btn').forEach(b => {
      b.style.background = 'transparent';
      b.style.color = ss.tabColor;
      b.style.borderColor = `1px solid ${ss.thumbBorder}`;
    });
    const active = tabsWrap.querySelector(`[data-tab="${t}"]`);
    if (active) {
      active.style.background = ss.tabActiveBg;
      active.style.color = ss.text;
    }
    if (t === 'description') {
      tabContent.textContent = product.description;
    } else if (t === 'details') {
      tabContent.innerHTML = `
        <strong style="color:${ss.text}">Category:</strong> ${product.category}<br>
        <strong style="color:${ss.text}">Rating:</strong> ${product.rating.rate}/5 (${product.rating.count} reviews)<br>
        <strong style="color:${ss.text}">Price:</strong> $${product.price.toFixed(2)}<br>
        <strong style="color:${ss.text}">Product ID:</strong> #${product.id}
      `;
    } else {
      tabContent.innerHTML = `
        <strong style="color:${ss.text}">Free Shipping</strong> on orders over $50<br><br>
        Standard delivery: 3–5 business days<br>
        Express delivery: 1–2 business days<br><br>
        30-day hassle-free returns. No questions asked.
      `;
    }
  }
 
  ['description', 'details', 'shipping'].forEach(t => {
    const btn = el('button', {
      padding: '8px 18px', border: `1px solid ${ss.thumbBorder}`,
      background: t === activeTab ? ss.tabActiveBg : 'transparent',
      color: t === activeTab ? ss.text : ss.tabColor,
      borderRadius: '6px', cursor: 'pointer', fontSize: '14px', transition: 'all 0.15s'
    }, t.charAt(0).toUpperCase() + t.slice(1), { 'data-tab': t });
    btn.className = 'tab-btn';
    btn.onclick = () => setTab(t);
    tabsWrap.appendChild(btn);
  });
  details.appendChild(tabsWrap);
  setTab(activeTab);
  details.appendChild(tabContent);
 
  // Quantity
  const qtySection = el('div', { display: 'flex', alignItems: 'center', gap: '16px' });
  qtySection.appendChild(el('span', { fontSize: '14px', fontWeight: '500', color: ss.text }, 'Quantity'));
  const qtyControls = el('div', { display: 'flex', alignItems: 'center', gap: '10px', background: ss.qtyBg, border: `1px solid ${ss.qtyBorder}`, borderRadius: '8px', padding: '4px 8px' });
  const minusBtn = el('button', { background: 'transparent', border: 'none', color: ss.text, width: '28px', height: '28px', borderRadius: '4px', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }, '&#8722;');
  const qtySpan = el('span', { fontSize: '16px', minWidth: '28px', textAlign: 'center', color: ss.text, fontWeight: '600' }, String(qty));
  const plusBtn = el('button', { background: 'transparent', border: 'none', color: ss.text, width: '28px', height: '28px', borderRadius: '4px', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }, '+');
  minusBtn.onclick = () => { if (qty > 1) { qty--; qtySpan.textContent = String(qty); } };
  plusBtn.onclick = () => { qty++; qtySpan.textContent = String(qty); };
  qtyControls.appendChild(minusBtn); qtyControls.appendChild(qtySpan); qtyControls.appendChild(plusBtn);
  qtySection.appendChild(qtyControls);
  details.appendChild(qtySection);
 
  // Add to Cart + Wishlist
  const actionsRow = el('div', { display: 'flex', gap: '10px' });
  const addBtn = el('button', {
    flex: '1', background: carted ? '#1d4ed8' : '#3b82f6', color: '#fff',
    border: 'none', borderRadius: '8px', padding: '14px 20px',
    fontSize: '15px', cursor: 'pointer', fontWeight: '600',
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
    transition: 'background 0.15s'
  }, ICON.cartSm + (carted ? ' Add More' : ' Add to Cart'));
  addBtn.onclick = () => { addToCart(product, qty); renderPage(); };
  addBtn.onmouseenter = () => { addBtn.style.background = '#2563eb'; };
  addBtn.onmouseleave = () => { addBtn.style.background = carted ? '#1d4ed8' : '#3b82f6'; };
 
  const wishBtn = el('button', {
    width: '50px', height: '50px',
    background: wished ? '#ef444422' : ss.cardBg,
    border: `1px solid ${wished ? '#ef4444' : ss.cardBorder}`,
    color: wished ? '#ef4444' : ss.textMuted,
    borderRadius: '8px', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'all 0.15s'
  }, ICON.heart(wished));
  wishBtn.onclick = () => { toggleWishlist(product); renderPage(); };
 
  actionsRow.appendChild(addBtn); actionsRow.appendChild(wishBtn);
  details.appendChild(actionsRow);
 
  // Trust badges
  const badges = el('div', { display: 'flex', gap: '16px', flexWrap: 'wrap', paddingTop: '4px' });
  [
    [ICON.truck, 'Free shipping over $50'],
    [ICON.refresh, '30-day returns'],
    [ICON.shield, '2-year warranty'],
  ].forEach(([icon, label]) => {
    const badge = el('div', { display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: ss.textMuted });
    badge.innerHTML = `<span style="color:#3b82f6">${icon}</span> ${label}`;
    badges.appendChild(badge);
  });
  details.appendChild(badges);
 
  grid.appendChild(details);
  section.appendChild(grid);
  return section;
}
 
function renderRelated() {
  const ss = s();
  if (!related.length) return el('div');
 
  const section = el('div', { padding: '0 24px 40px' });
  section.appendChild(el('h2', { fontSize: '20px', fontWeight: '700', marginBottom: '20px', color: ss.text }, 'Related Products'));
 
  const grid = el('div', { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' });
  related.forEach(p => {
    const card = el('div', {
      background: ss.cardBg, border: `1px solid ${ss.cardBorder}`,
      borderRadius: '10px', overflow: 'hidden', cursor: 'pointer',
      transition: 'transform 0.15s, box-shadow 0.15s'
    });
    card.onmouseenter = () => { card.style.transform = 'translateY(-3px)'; card.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)'; };
    card.onmouseleave = () => { card.style.transform = ''; card.style.boxShadow = ''; };
    card.onclick = () => { window.location.href = `single.html?id=${p.id}`; };
 
    const imgWrap = el('div', { background: '#fff', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px' });
    const img = el('img', { maxHeight: '170px', maxWidth: '100%', objectFit: 'contain' });
    img.src = p.image; img.alt = p.title;
    imgWrap.appendChild(img);
    card.appendChild(imgWrap);
 
    const body = el('div', { padding: '12px' });
    body.appendChild(el('div', { fontSize: '13px', color: ss.text, fontWeight: '500', marginBottom: '6px', lineHeight: '1.4' }, p.title.length > 45 ? p.title.slice(0,45)+'...' : p.title));
    const row = el('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'center' });
    row.innerHTML = `<span style="font-size:15px;font-weight:700;color:${ss.text}">$${p.price.toFixed(2)}</span>`;
    row.innerHTML += `<span style="font-size:12px;color:#f59e0b">${renderStars(p.rating.rate)}</span>`;
    body.appendChild(row);
    const addBtn = el('button', { marginTop: '10px', width: '100%', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '6px', padding: '8px', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }, ICON.cartSm + ' Add to Cart');
    addBtn.onclick = e => { e.stopPropagation(); addToCart(p); renderPage(); };
    body.appendChild(addBtn);
    card.appendChild(body);
    grid.appendChild(card);
  });
  section.appendChild(grid);
  return section;
}
 
function renderFooter() {
  const ss = s();
  const footer = el('footer', { background: ss.footerBg, padding: '40px 24px 24px', borderTop: `1px solid ${ss.navBorder}` });
  const grid = el('div', { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', marginBottom: '32px' });
 
  const brand = el('div');
  brand.appendChild(el('div', { fontWeight: '700', fontSize: '16px', marginBottom: '10px', color: ss.text }, 'Store'));
  brand.appendChild(el('div', { fontSize: '13px', color: ss.textMuted, lineHeight: '1.6', marginBottom: '12px' }, 'Your one-stop shop for all your shopping needs.'));
  grid.appendChild(brand);
 
  const shop = el('div');
  shop.appendChild(el('div', { fontWeight: '600', fontSize: '14px', marginBottom: '12px', color: ss.text }, 'Shop'));
  ['All Products', 'Categories', 'Wishlist', 'Cart'].forEach(l => {
    shop.appendChild(el('div', { fontSize: '13px', color: ss.textMuted, marginBottom: '8px', cursor: 'pointer' }, l));
  });
  grid.appendChild(shop);
 
  const account = el('div');
  account.appendChild(el('div', { fontWeight: '600', fontSize: '14px', marginBottom: '12px', color: ss.text }, 'Account'));
  ['Login', 'Register', 'My Account', 'Order History'].forEach(l => {
    account.appendChild(el('div', { fontSize: '13px', color: ss.textMuted, marginBottom: '8px', cursor: 'pointer' }, l));
  });
  grid.appendChild(account);
 
  const contact = el('div');
  contact.appendChild(el('div', { fontWeight: '600', fontSize: '14px', marginBottom: '12px', color: ss.text }, 'Contact'));
  ['📍 123 Shopping Street', '📞 (123) 456-7890', '✉️ info@store.com'].forEach(l => {
    contact.appendChild(el('div', { fontSize: '13px', color: ss.textMuted, marginBottom: '8px' }, l));
  });
  grid.appendChild(contact);
  footer.appendChild(grid);
 
  const bottom = el('div', { borderTop: `1px solid ${ss.navBorder}`, paddingTop: '16px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' });
  bottom.appendChild(el('div', { fontSize: '12px', color: ss.textSub }, '© 2023 Store. All rights reserved.'));
  footer.appendChild(bottom);
  return footer;
}
 
function renderPage() {
  const ss = s();
  document.body.style.background = ss.bg;
  document.body.style.color = ss.text;
  if (product) document.title = product.title;
 
  const root = document.getElementById('root');
  root.innerHTML = '';
  root.appendChild(renderNavbar());
  root.appendChild(renderBreadcrumb());
  root.appendChild(renderProduct());
  root.appendChild(renderRelated());
  root.appendChild(renderFooter());
}
 
function init() {
  renderPage(); 
 
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(data => {
      product = data;
      document.title = product.title;
 
      fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(product.category)}`)
        .then(res => res.json())
        .then(cats => {
          related = cats.filter(p => p.id !== product.id).slice(0, 4);
          renderPage();
        });
 
      renderPage();
    })
    .catch(err => {
      console.error('Failed to fetch product:', err);
      const root = document.getElementById('root');
      root.innerHTML = '<div style="padding:40px;text-align:center;color:rgba(255,255,255,0.5)">Failed to load product. Please try again.</div>';
    });
}
 
init();