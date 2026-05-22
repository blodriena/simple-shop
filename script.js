const PRODUCTS = [
  { id: 1, title: "Mens Casual Premium Slim Fit T-Shirts", price: 22.30, category: "men's clothing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrkcoLQOhIUUGQiyVrEM8JehInnK2XSbpdmw&s", rating: 4.1 },
  { id: 2, title: "Mens Casual Slim Fit", price: 15.99, category: "men's clothing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63wD20TjbroL4GaLTYJ-Jm_Jh9WBOA48_mQ&s", rating: 4.0 },
  { id: 3, title: "Mens Cotton Jacket", price: 55.99, category: "men's clothing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3C9YaQ1AG_A-OGybJf5tMptpqaBk24eRhQ&s", rating: 4.7 },
  { id: 4, title: "Fjallraven - Foldsack No. 1 Backpack", price: 109.95, category: "men's clothing", image: "https://img.magnific.com/free-photo/short-sleeve-black-t-shirt_1409-2226.jpg?semt=ais_hybrid&w=740&q=80", rating: 3.9 },
  { id: 5, title: "John Hardy Women's Legends Naga Gold & Silver Dragon Bracelet", price: 695.00, category: "jewelery", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-kgbQRw4ODctPUVnes8PFaIKQS7EWZK04QA&s", rating: 4.6 },
  { id: 6, title: "Solid Gold Petite Micropave", price: 168.00, category: "jewelery", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73OaLIfGc01Z2dNef73s0RsT2heY3D7Znew&s", rating: 3.9 },
  { id: 7, title: "White Gold Plated Princess Cut Earrings", price: 9.99, category: "jewelery", image: "https://privilegia.uz/wp-content/uploads/2026/03/photo_2026-04-02_23-45-56-e1775155611763.jpg", rating: 3.0 },
  { id: 8, title: "Pierced Owl Rose Gold Plated Stainless Steel", price: 10.99, category: "jewelery", image: "https://www.shutterstock.com/image-illustration/diamond-ring-radian-pear-cut-600nw-2554062037.jpg", rating: 1.9 },
  { id: 9, title: "WD 2TB Elements Portable External Hard Drive", price: 64.00, category: "electronics", image: "https://privilegia.uz/wp-content/uploads/2026/04/image-14-scaled-1.png", rating: 3.3 },
  { id: 10, title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor", price: 999.99, category: "electronics", image: "https://www.shutterstock.com/image-photo/baguette-diamond-ring-on-white-600nw-2682026455.jpg", rating: 2.2 },
  { id: 11, title: "Silicon Power 256GB SSD 3D NAND", price: 109.00, category: "electronics", image: "https://t3.ftcdn.net/jpg/02/95/12/70/360_F_295127088_IEk7c55MpYFOVv8DCsY8HuPNKupeq1Cz.jpg", rating: 4.8 },
  { id: 12, title: "SanDisk SSD PLUS 1TB Internal SSD", price: 109.00, category: "electronics", image: "https://static.vecteezy.com/system/resources/previews/047/080/710/non_2x/luxury-wrist-watch-on-transparent-background-png.png", rating: 2.9 },
  { id: 13, title: "Women's 3-in-1 Snowboard Jacket Winter Coats", price: 56.99, category: "women's clothing", image: "https://thumbs.dreamstime.com/b/bangkok-thailand-sep-sony-playstation-s-dualshock-wireless-controller-isolated-white-background-illustrative-editorial-content-127622525.jpg", rating: 2.6 },
  { id: 14, title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket", price: 29.95, category: "women's clothing", image: "https://c4.wallpaperflare.com/wallpaper/607/778/544/playstation-4-consoles-video-games-sony-wallpaper-preview.jpg", rating: 2.9 },
  { id: 15, title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats", price: 39.99, category: "women's clothing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh6mWQt-XEzw-s1B_mEM5fGO04AePGI3bhA&s", rating: 3.8 },
  { id: 16, title: "MBJ Women's Solid Short Sleeve Boat Neck V", price: 9.85, category: "women's clothing", image: "https://static.vecteezy.com/system/resources/thumbnails/024/509/430/small/jacket-isolated-on-background-with-generative-ai-png.png", rating: 4.7 },
];
 
const CATEGORIES = [
  { id: "electronics", label: "Electronics", desc: "Browse all electronics products" },
  { id: "jewelery", label: "Jewelery", desc: "Browse all jewelery products" },
  { id: "men's clothing", label: "Men's Clothing", desc: "Browse all men's clothing products" },
  { id: "women's clothing", label: "Women's Clothing", desc: "Browse all women's clothing products" },
];
 
const STYLES = {
  dark: {
    bg: "#0d1117", navBg: "#0d1117", navBorder: "rgba(255,255,255,0.08)",
    text: "#fff", textMuted: "rgba(255,255,255,0.55)", textSub: "rgba(255,255,255,0.35)",
    cardBg: "#131920", cardBorder: "rgba(255,255,255,0.1)",
    inputBg: "#0d1117", inputBorder: "rgba(255,255,255,0.2)",
    dropBg: "#1a2030", dropBorder: "rgba(255,255,255,0.12)",
    footerBg: "#0a0f16", btnOutline: "rgba(255,255,255,0.3)",
    qtyBg: "#1a2030", qtyBorder: "rgba(255,255,255,0.15)",
    summaryBg: "#131920",
  },
  light: {
    bg: "#f5f5f5", navBg: "#ffffff", navBorder: "rgba(0,0,0,0.1)",
    text: "#111", textMuted: "rgba(0,0,0,0.55)", textSub: "rgba(0,0,0,0.35)",
    cardBg: "#ffffff", cardBorder: "rgba(0,0,0,0.1)",
    inputBg: "#ffffff", inputBorder: "rgba(0,0,0,0.2)",
    dropBg: "#ffffff", dropBorder: "rgba(0,0,0,0.12)",
    footerBg: "#e8e8e8", btnOutline: "rgba(0,0,0,0.3)",
    qtyBg: "#f0f0f0", qtyBorder: "rgba(0,0,0,0.15)",
    summaryBg: "#ffffff",
  }
};
 
let state = {
  theme: "dark",
  page: "home",
  cart: [],
  wishlist: [],
  search: "",
  filterCat: "",
  sortBy: "",
  showFilter: false,
  loginForm: { email: "", password: "" },
  loggedIn: false,
};
 
function getEffectiveTheme(t) {
  if (t === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  return t;
}
function s() { return STYLES[getEffectiveTheme(state.theme)]; }
 
function addToCart(product) {
  const ex = state.cart.find(i => i.id === product.id);
  if (ex) state.cart = state.cart.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
  else state.cart = [...state.cart, { ...product, qty: 1 }];
  render();
}
function removeFromCart(id) { state.cart = state.cart.filter(i => i.id !== id); render(); }
function updateQty(id, delta) { state.cart = state.cart.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i); render(); }
function clearCart() { state.cart = []; render(); }
function toggleWishlist(product) {
  if (state.wishlist.find(i => i.id === product.id)) state.wishlist = state.wishlist.filter(i => i.id !== product.id);
  else state.wishlist = [...state.wishlist, product];
  render();
}
function inWishlist(id) { return state.wishlist.some(i => i.id === id); }
function inCart(id) { return state.cart.some(i => i.id === id); }
function cartTotal() { return state.cart.reduce((acc, i) => acc + i.price * i.qty, 0); }
function cartCount() { return state.cart.reduce((acc, i) => acc + i.qty, 0); }
function nav(p) { state.page = p; state.showFilter = false; render(); }
 
function filterProducts() {
  let p = PRODUCTS;
  if (state.search) p = p.filter(x => x.title.toLowerCase().includes(state.search.toLowerCase()));
  if (state.filterCat) p = p.filter(x => x.category === state.filterCat);
  if (state.sortBy === "price-asc") p = [...p].sort((a, b) => a.price - b.price);
  if (state.sortBy === "price-desc") p = [...p].sort((a, b) => b.price - a.price);
  if (state.sortBy === "rating") p = [...p].sort((a, b) => b.rating - a.rating);
  return p;
}
 
function applyStyles(el, styles) {
  Object.assign(el.style, styles);
}
function iconBtnStyle(active) {
  return { background: active ? "rgba(255,255,255,0.1)" : "transparent", border: "none", color: active ? "#fff" : s().textMuted, cursor: "pointer", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", position: "relative" };
}
function dropdownStyle() {
  return { position: "absolute", top: "calc(100% + 6px)", right: "0", background: s().dropBg, border: `1px solid ${s().dropBorder}`, borderRadius: "8px", padding: "12px 14px", minWidth: "200px", zIndex: "999", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" };
}
const blueBtnStyle = { width: "100%", background: "#3b82f6", color: "#fff", border: "none", borderRadius: "6px", padding: "9px", fontSize: "14px", cursor: "pointer", fontWeight: "500" };
 
const ICON = {
  moon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  heart: (filled) => `<svg width="18" height="18" fill="${filled ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  cart: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  cartSm: `<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  user: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  filter: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  search: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  trash: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
  heartSm: (filled, color) => `<svg width="16" height="16" fill="${filled ? color : 'none'}" stroke="${color}" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
};
 
function el(tag, styles, innerHTML, attrs = {}) {
  const elem = document.createElement(tag);
  if (styles) applyStyles(elem, styles);
  if (innerHTML !== undefined) elem.innerHTML = innerHTML;
  Object.entries(attrs).forEach(([k, v]) => elem.setAttribute(k, v));
  return elem;
}
 
function renderBadge(count) {
  const b = el("span", { position: "absolute", top: "0", right: "0", background: "#3b82f6", color: "#fff", borderRadius: "50%", width: "16px", height: "16px", fontSize: "10px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: "1" }, count > 9 ? "9+" : count);
  return b;
}
 
function renderNavbar() {
  const ss = s();
  const navbar = el("nav", {
    background: ss.navBg, borderBottom: `1px solid ${ss.navBorder}`,
    padding: "0 24px", display: "flex", alignItems: "center",
    justifyContent: "space-between", height: "56px",
    position: "sticky", top: "0", zIndex: "200"
  });
 
  // Left
  const left = el("div", { display: "flex", alignItems: "center", gap: "28px" });
  const logo = el("span", { fontWeight: "700", fontSize: "16px", cursor: "pointer" }, "Store");
  logo.onclick = () => nav("home");
  left.appendChild(logo);
 
  const navLinks = el("div", { display: "flex", gap: "24px" });
  ["home", "products", "categories"].forEach(p => {
    const link = el("span", {
      fontSize: "14px", cursor: "pointer",
      color: state.page === p ? ss.text : ss.textMuted,
      textDecoration: state.page === p ? "underline" : "none",
      textTransform: "capitalize"
    }, p.charAt(0).toUpperCase() + p.slice(1));
    link.onclick = () => nav(p);
    navLinks.appendChild(link);
  });
  left.appendChild(navLinks);
  navbar.appendChild(left);
 
  // Right
  const right = el("div", { display: "flex", alignItems: "center", gap: "8px" });
 
  // Theme dropdown
  const themeWrap = el("div", { position: "relative" });
  const themeBtn = el("button", iconBtnStyle(false), ICON.moon);
  themeBtn.setAttribute("aria-label", "Theme");
  const themeDrop = el("div", { ...dropdownStyle(), display: "none" });
  ["Light", "Dark", "System"].forEach(t => {
    const opt = el("button", {
      display: "block", width: "100%",
      background: state.theme === t.toLowerCase() ? "rgba(59,130,246,0.15)" : "transparent",
      border: "none", color: ss.text, fontSize: "14px", padding: "8px 14px",
      textAlign: "left", cursor: "pointer", borderRadius: "4px"
    }, t);
    opt.onclick = () => { state.theme = t.toLowerCase(); render(); };
    themeDrop.appendChild(opt);
  });
  let themeTimer;
  themeWrap.onmouseenter = () => { clearTimeout(themeTimer); themeDrop.style.display = "block"; };
  themeWrap.onmouseleave = () => { themeTimer = setTimeout(() => { themeDrop.style.display = "none"; }, 150); };
  themeWrap.appendChild(themeBtn);
  themeWrap.appendChild(themeDrop);
  right.appendChild(themeWrap);
 
  // Wishlist dropdown
  const wCount = state.wishlist.length;
  const wishWrap = el("div", { position: "relative" });
  const wishBtn = el("button", iconBtnStyle(false), ICON.heart(false));
  wishBtn.setAttribute("aria-label", "Wishlist");
  wishBtn.onclick = () => nav("wishlist");
  if (wCount > 0) wishBtn.appendChild(renderBadge(wCount));
  const wishDrop = el("div", { ...dropdownStyle(), display: "none" });
  wishDrop.innerHTML = `<div style="font-weight:600;font-size:14px;margin-bottom:4px;color:${ss.text}">Wishlist (${wCount})</div>`;
  if (wCount === 0) {
    wishDrop.innerHTML += `<div style="font-size:13px;color:${ss.textMuted};margin-bottom:12px">Your wishlist is empty</div>`;
  } else {
    const wItems = el("div", { marginBottom: "10px" });
    state.wishlist.slice(0, 3).forEach(item => {
      wItems.innerHTML += `<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><img src="${item.image}" style="width:36px;height:36px;object-fit:contain;border-radius:4px;background:#fff"/><div><div style="font-size:12px;color:${ss.text};max-width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${item.title}</div><div style="font-size:12px;color:${ss.textMuted}">$${item.price.toFixed(2)}</div></div></div>`;
    });
    wishDrop.appendChild(wItems);
  }
  const wishViewBtn = el("button", blueBtnStyle, "View Wishlist");
  wishViewBtn.onclick = () => nav("wishlist");
  wishDrop.appendChild(wishViewBtn);
  let wishTimer;
  wishWrap.onmouseenter = () => { clearTimeout(wishTimer); wishDrop.style.display = "block"; };
  wishWrap.onmouseleave = () => { wishTimer = setTimeout(() => { wishDrop.style.display = "none"; }, 150); };
  wishWrap.appendChild(wishBtn);
  wishWrap.appendChild(wishDrop);
  right.appendChild(wishWrap);
 
  // Cart dropdown
  const cCount = cartCount();
  const cartWrap = el("div", { position: "relative" });
  const cartBtn = el("button", iconBtnStyle(false), ICON.cart);
  cartBtn.setAttribute("aria-label", "Cart");
  cartBtn.onclick = () => nav("cart");
  if (cCount > 0) cartBtn.appendChild(renderBadge(cCount));
  const cartDrop = el("div", { ...dropdownStyle(), display: "none" });
  cartDrop.innerHTML = `<div style="font-weight:600;font-size:14px;margin-bottom:4px;color:${ss.text}">Cart (${cCount})</div>`;
  if (cCount === 0) {
    cartDrop.innerHTML += `<div style="font-size:13px;color:${ss.textMuted};margin-bottom:12px">Your cart is empty</div>`;
  } else {
    const cItems = el("div", { marginBottom: "10px" });
    state.cart.slice(0, 4).forEach(item => {
      const title = item.title.length > 28 ? item.title.slice(0, 28) + "..." : item.title;
      cItems.innerHTML += `<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><img src="${item.image}" style="width:36px;height:36px;object-fit:contain;border-radius:4px;background:#fff"/><div style="flex:1;min-width:0"><div style="font-size:12px;color:${ss.text};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${title}</div><div style="font-size:12px;color:${ss.textMuted}">$${item.price.toFixed(2)} × ${item.qty}</div></div></div>`;
    });
    cartDrop.appendChild(cItems);
  }
  const cartViewBtn = el("button", blueBtnStyle, "View Cart");
  cartViewBtn.onclick = () => nav("cart");
  cartDrop.appendChild(cartViewBtn);
  let cartTimer;
  cartWrap.onmouseenter = () => { clearTimeout(cartTimer); cartDrop.style.display = "block"; };
  cartWrap.onmouseleave = () => { cartTimer = setTimeout(() => { cartDrop.style.display = "none"; }, 150); };
  cartWrap.appendChild(cartBtn);
  cartWrap.appendChild(cartDrop);
  right.appendChild(cartWrap);
 
  // Login button
  const loginBtn = el("button", {
    background: "transparent", border: `1px solid ${ss.btnOutline}`, color: ss.text,
    borderRadius: "6px", padding: "6px 14px", fontSize: "14px", cursor: "pointer",
    display: "flex", alignItems: "center", gap: "6px"
  }, `${ICON.user} Login`);
  loginBtn.onclick = () => nav("login");
  right.appendChild(loginBtn);
 
  navbar.appendChild(right);
  return navbar;
}
 
function renderSearchBar() {
  const ss = s();
  const wrap = el("div", { marginBottom: "24px" });
 
  const row = el("div", { display: "flex", gap: "12px", marginBottom: "12px" });
 
  const searchWrap = el("div", { flex: "1", display: "flex", alignItems: "center", background: ss.inputBg, border: `1px solid ${ss.inputBorder}`, borderRadius: "8px", padding: "0 14px", gap: "8px" });
  searchWrap.innerHTML = `<span style="display:flex">${ICON.search.replace('stroke="currentColor"', `stroke="${ss.textSub}"`)}</span>`;
  const searchInput = el("input", { background: "transparent", border: "none", outline: "none", color: ss.text, fontSize: "14px", width: "100%", padding: "10px 0" }, undefined, { placeholder: "Search products...", type: "text", value: state.search });
  searchInput.oninput = e => { state.search = e.target.value; render(); };
  searchWrap.appendChild(searchInput);
  row.appendChild(searchWrap);
 
  const filterToggle = el("button", {
    background: ss.inputBg, border: `1px solid ${ss.inputBorder}`, color: ss.text,
    borderRadius: "8px", padding: "0 18px", fontSize: "14px", cursor: "pointer",
    display: "flex", alignItems: "center", gap: "6px"
  }, `${ICON.filter} Filter`);
  filterToggle.onclick = () => { state.showFilter = !state.showFilter; render(); };
  row.appendChild(filterToggle);
  wrap.appendChild(row);
 
  if (state.showFilter) {
    const filterRow = el("div", {
      display: "flex", gap: "10px", flexWrap: "wrap", padding: "12px 14px",
      background: ss.cardBg, border: `1px solid ${ss.cardBorder}`, borderRadius: "8px"
    });
 
    const catSelect = el("select", { background: ss.inputBg, border: `1px solid ${ss.inputBorder}`, color: ss.text, borderRadius: "6px", padding: "6px 10px", fontSize: "13px" });
    catSelect.innerHTML = `<option value="">All Categories</option>` + CATEGORIES.map(c => `<option value="${c.id}" ${state.filterCat === c.id ? "selected" : ""}>${c.label}</option>`).join("");
    catSelect.onchange = e => { state.filterCat = e.target.value; render(); };
    filterRow.appendChild(catSelect);
 
    const sortSelect = el("select", { background: ss.inputBg, border: `1px solid ${ss.inputBorder}`, color: ss.text, borderRadius: "6px", padding: "6px 10px", fontSize: "13px" });
    sortSelect.innerHTML = `<option value="">Sort By</option><option value="price-asc" ${state.sortBy === "price-asc" ? "selected" : ""}>Price: Low to High</option><option value="price-desc" ${state.sortBy === "price-desc" ? "selected" : ""}>Price: High to Low</option><option value="rating" ${state.sortBy === "rating" ? "selected" : ""}>Top Rated</option>`;
    sortSelect.onchange = e => { state.sortBy = e.target.value; render(); };
    filterRow.appendChild(sortSelect);
 
    const clearBtn = el("button", {
      background: "transparent", border: `1px solid ${ss.inputBorder}`, color: ss.textMuted,
      borderRadius: "6px", padding: "6px 12px", fontSize: "13px", cursor: "pointer"
    }, "Clear");
    clearBtn.onclick = () => { state.filterCat = ""; state.sortBy = ""; render(); };
    filterRow.appendChild(clearBtn);
    wrap.appendChild(filterRow);
  }
 
  return wrap;
}
 
function renderProductCard(product) {
  const ss = s();
  const wished = inWishlist(product.id);
  const carted = inCart(product.id);
 
  const card = el("div", {
    background: ss.cardBg, border: `1px solid ${ss.cardBorder}`,
    borderRadius: "10px", overflow: "hidden", display: "flex", flexDirection: "column"
  });
 
  const imgWrap = el("div", { position: "relative", background: "#fff", height: "220px", display: "flex", alignItems: "center", justifyContent: "center" });
  const img = el("img", { maxHeight: "200px", maxWidth: "100%", objectFit: "contain", padding: "16px" });
  img.src = product.image; img.alt = product.title;
  imgWrap.appendChild(img);
 
  const wishBtn = el("button", {
    position: "absolute", top: "10px", right: "10px", background: "rgba(0,0,0,0.4)",
    border: "none", borderRadius: "50%", width: "32px", height: "32px",
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer", color: wished ? "#ef4444" : "#fff"
  }, ICON.heartSm(wished, wished ? "#ef4444" : "#fff"));
  wishBtn.onclick = () => toggleWishlist(product);
  imgWrap.appendChild(wishBtn);
 
  const ratingBadge = el("span", {
    position: "absolute", top: "10px", left: "10px", background: "rgba(0,0,0,0.5)",
    color: "#fff", fontSize: "11px", padding: "2px 8px", borderRadius: "4px"
  }, `★ ${product.rating}`);
  imgWrap.appendChild(ratingBadge);
  card.appendChild(imgWrap);
 
  const body = el("div", { padding: "12px 14px", flex: "1", display: "flex", flexDirection: "column", gap: "6px" });
  const title = el("div", { fontSize: "13px", color: ss.text, lineHeight: "1.4", flex: "1" }, product.title.length > 50 ? product.title.slice(0, 50) + "..." : product.title);
  const price = el("div", { fontSize: "16px", fontWeight: "700", color: ss.text }, `$${product.price.toFixed(2)}`);
  const addBtn = el("button", {
    ...blueBtnStyle, display: "flex", alignItems: "center", justifyContent: "center",
    gap: "6px", background: carted ? "#1d4ed8" : "#3b82f6"
  }, `${ICON.cartSm} ${carted ? "Add More" : "Add to Cart"}`);
  addBtn.onclick = () => addToCart(product);
 
  body.appendChild(title);
  body.appendChild(price);
  body.appendChild(addBtn);
  card.appendChild(body);
  return card;
}
 
function renderProductGrid(products) {
  const grid = el("div", { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" });
  products.forEach(p => grid.appendChild(renderProductCard(p)));
  return grid;
}
 
function renderHomePage() {
  const ss = s();
  const page = el("div", { padding: "24px" });
  page.appendChild(el("h1", { fontSize: "24px", fontWeight: "700", marginBottom: "20px" }, "Online Store"));
  page.appendChild(renderSearchBar());
  page.appendChild(renderProductGrid(filterProducts()));
  return page;
}
 
function renderProductsPage() {
  const page = el("div", { padding: "24px" });
  page.appendChild(el("h1", { fontSize: "24px", fontWeight: "700", marginBottom: "20px" }, "Products"));
  page.appendChild(renderSearchBar());
  page.appendChild(renderProductGrid(filterProducts()));
  return page;
}
 
function renderCategoriesPage() {
  const ss = s();
  const page = el("div", { padding: "24px" });
  page.appendChild(el("h1", { fontSize: "24px", fontWeight: "700", marginBottom: "24px" }, "Categories"));
  const grid = el("div", { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" });
  CATEGORIES.forEach(c => {
    const card = el("div", { background: ss.cardBg, border: `1px solid ${ss.cardBorder}`, borderRadius: "10px", padding: "24px" });
    card.appendChild(el("div", { fontSize: "18px", fontWeight: "700", marginBottom: "6px" }, c.label));
    card.appendChild(el("div", { fontSize: "13px", color: ss.textMuted, marginBottom: "16px" }, c.desc));
    const btn = el("button", {
      width: "100%", background: "transparent", border: `1px solid ${ss.btnOutline}`,
      color: ss.text, borderRadius: "6px", padding: "9px", fontSize: "14px",
      cursor: "pointer", fontWeight: "500"
    }, "View Products");
    btn.onclick = () => { state.filterCat = c.id; nav("products"); };
    card.appendChild(btn);
    grid.appendChild(card);
  });
  page.appendChild(grid);
  return page;
}
 
function renderCartPage() {
  const ss = s();
  const page = el("div", { padding: "24px" });
  page.appendChild(el("h1", { fontSize: "24px", fontWeight: "700", marginBottom: "24px" }, "Shopping Cart"));
 
  if (state.cart.length === 0) {
    const empty = el("div", { color: ss.textMuted, fontSize: "16px" }, "Your cart is empty. ");
    const link = el("span", { color: "#3b82f6", cursor: "pointer" }, "Continue shopping →");
    link.onclick = () => nav("products");
    empty.appendChild(link);
    page.appendChild(empty);
    return page;
  }
 
  const grid = el("div", { display: "grid", gridTemplateColumns: "1fr 320px", gap: "24px", alignItems: "start" });
 
  // Items
  const itemsWrap = el("div");
  state.cart.forEach(item => {
    const row = el("div", { display: "flex", alignItems: "center", gap: "16px", padding: "16px 0", borderBottom: `1px solid ${ss.cardBorder}` });
    const img = el("img", { width: "80px", height: "80px", objectFit: "contain", background: "#fff", borderRadius: "8px", padding: "6px" });
    img.src = item.image; img.alt = item.title;
    row.appendChild(img);
 
    const info = el("div", { flex: "1" });
    info.appendChild(el("div", { fontSize: "14px", fontWeight: "500", marginBottom: "4px" }, item.title));
    info.appendChild(el("div", { fontSize: "13px", color: ss.textMuted }, `$${item.price.toFixed(2)}`));
 
    const qtyRow = el("div", { display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" });
    const minusBtn = el("button", { background: ss.qtyBg, border: `1px solid ${ss.qtyBorder}`, color: ss.text, width: "28px", height: "28px", borderRadius: "6px", cursor: "pointer", fontSize: "16px" }, "−");
    minusBtn.onclick = () => updateQty(item.id, -1);
    const qtySpan = el("span", { fontSize: "14px", minWidth: "20px", textAlign: "center" }, item.qty);
    const plusBtn = el("button", { background: ss.qtyBg, border: `1px solid ${ss.qtyBorder}`, color: ss.text, width: "28px", height: "28px", borderRadius: "6px", cursor: "pointer", fontSize: "16px" }, "+");
    plusBtn.onclick = () => updateQty(item.id, 1);
    const removeBtn = el("button", { background: "transparent", border: "none", color: ss.textMuted, cursor: "pointer", padding: "0 4px" }, ICON.trash);
    removeBtn.onclick = () => removeFromCart(item.id);
    qtyRow.appendChild(minusBtn); qtyRow.appendChild(qtySpan); qtyRow.appendChild(plusBtn); qtyRow.appendChild(removeBtn);
    info.appendChild(qtyRow);
    row.appendChild(info);
    row.appendChild(el("div", { fontSize: "16px", fontWeight: "600" }, `$${(item.price * item.qty).toFixed(2)}`));
    itemsWrap.appendChild(row);
  });
 
  const btnRow = el("div", { display: "flex", gap: "12px", marginTop: "16px" });
  const clearBtn = el("button", { background: "transparent", border: `1px solid ${ss.btnOutline}`, color: ss.text, borderRadius: "6px", padding: "8px 16px", fontSize: "14px", cursor: "pointer" }, "Clear Cart");
  clearBtn.onclick = clearCart;
  const contBtn = el("button", { background: "transparent", border: `1px solid ${ss.btnOutline}`, color: ss.text, borderRadius: "6px", padding: "8px 16px", fontSize: "14px", cursor: "pointer" }, "Continue Shopping");
  contBtn.onclick = () => nav("products");
  btnRow.appendChild(clearBtn); btnRow.appendChild(contBtn);
  itemsWrap.appendChild(btnRow);
  grid.appendChild(itemsWrap);
 
  // Summary
  const ct = cartTotal(); const tax = ct * 0.1; const total = ct + tax;
  const summary = el("div", { background: ss.summaryBg, border: `1px solid ${ss.cardBorder}`, borderRadius: "10px", padding: "20px" });
  summary.appendChild(el("div", { fontSize: "16px", fontWeight: "700", marginBottom: "16px" }, "Order Summary"));
  [["Subtotal", `$${ct.toFixed(2)}`], ["Shipping", "Free"], ["Tax", `$${tax.toFixed(2)}`]].forEach(([label, val]) => {
    const row = el("div", { display: "flex", justifyContent: "space-between", marginBottom: "10px", fontSize: "14px" });
    row.appendChild(el("span", { color: ss.textMuted }, label));
    row.appendChild(el("span", {}, val));
    summary.appendChild(row);
  });
  const totalRow = el("div", { borderTop: `1px solid ${ss.cardBorder}`, paddingTop: "14px", display: "flex", justifyContent: "space-between", fontWeight: "700", fontSize: "16px", marginBottom: "16px" });
  totalRow.appendChild(el("span", {}, "Total"));
  totalRow.appendChild(el("span", {}, `$${total.toFixed(2)}`));
  summary.appendChild(totalRow);
  const checkoutBtn = el("button", { ...blueBtnStyle, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }, "Checkout →");
  summary.appendChild(checkoutBtn);
  grid.appendChild(summary);
 
  page.appendChild(grid);
  return page;
}
 
function renderWishlistPage() {
  const ss = s();
  const page = el("div", { padding: "24px" });
  const header = el("div", { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" });
  header.appendChild(el("h1", { fontSize: "24px", fontWeight: "700" }, `My Wishlist (${state.wishlist.length} items)`));
  if (state.wishlist.length > 0) {
    const clearBtn = el("button", { background: "transparent", border: `1px solid ${ss.btnOutline}`, color: ss.text, borderRadius: "6px", padding: "8px 16px", fontSize: "14px", cursor: "pointer" }, "Clear Wishlist");
    clearBtn.onclick = () => { state.wishlist = []; render(); };
    header.appendChild(clearBtn);
  }
  page.appendChild(header);
 
  if (state.wishlist.length === 0) {
    page.appendChild(el("div", { color: ss.textMuted }, "Your wishlist is empty."));
    return page;
  }
 
  const grid = el("div", { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" });
  state.wishlist.forEach(product => {
    const card = el("div", { background: ss.cardBg, border: `1px solid ${ss.cardBorder}`, borderRadius: "10px", overflow: "hidden" });
    const imgWrap = el("div", { background: "#fff", height: "220px", display: "flex", alignItems: "center", justifyContent: "center" });
    const img = el("img", { maxHeight: "200px", maxWidth: "100%", objectFit: "contain", padding: "16px" });
    img.src = product.image; img.alt = product.title;
    imgWrap.appendChild(img);
    card.appendChild(imgWrap);
 
    const body = el("div", { padding: "12px 14px" });
    body.appendChild(el("div", { fontSize: "13px", color: ss.text, marginBottom: "6px" }, product.title.length > 50 ? product.title.slice(0, 50) + "..." : product.title));
    body.appendChild(el("div", { fontSize: "16px", fontWeight: "700", marginBottom: "10px" }, `$${product.price.toFixed(2)}`));
 
    const btnRow = el("div", { display: "flex", gap: "8px" });
    const addBtn = el("button", { ...blueBtnStyle, flex: "1", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }, `${ICON.cartSm} Add to Cart`);
    addBtn.onclick = () => addToCart(product);
    const removeBtn = el("button", {
      background: "transparent", border: `1px solid ${ss.btnOutline}`, color: ss.textMuted,
      borderRadius: "6px", width: "36px", cursor: "pointer",
      display: "flex", alignItems: "center", justifyContent: "center"
    }, ICON.trash);
    removeBtn.onclick = () => toggleWishlist(product);
    btnRow.appendChild(addBtn); btnRow.appendChild(removeBtn);
    body.appendChild(btnRow);
    card.appendChild(body);
    grid.appendChild(card);
  });
  page.appendChild(grid);
  return page;
}
 
function renderLoginPage() {
  const ss = s();
  const wrap = el("div", { display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 24px" });
  const card = el("div", { background: ss.cardBg, border: `1px solid ${ss.cardBorder}`, borderRadius: "12px", padding: "32px", width: "100%", maxWidth: "440px" });
  card.appendChild(el("h2", { fontSize: "22px", fontWeight: "700", marginBottom: "6px" }, "Login"));
  card.appendChild(el("p", { color: ss.textMuted, fontSize: "14px", marginBottom: "24px" }, "Enter your credentials to access your account"));
 
  // Email
  const emailLabel = el("label", { display: "block", fontSize: "14px", fontWeight: "500", marginBottom: "6px" }, "Email");
  const emailInput = el("input", { width: "100%", background: ss.inputBg, border: `1px solid ${ss.inputBorder}`, borderRadius: "6px", padding: "10px 14px", color: ss.text, fontSize: "14px", outline: "none", boxSizing: "border-box" }, undefined, { type: "email", placeholder: "your@email.com", value: state.loginForm.email });
  emailInput.oninput = e => { state.loginForm.email = e.target.value; };
  const emailWrap = el("div", { marginBottom: "16px" });
  emailWrap.appendChild(emailLabel); emailWrap.appendChild(emailInput);
  card.appendChild(emailWrap);
 
  // Password
  const passLabel = el("label", { display: "block", fontSize: "14px", fontWeight: "500", marginBottom: "6px" }, "Password");
  const passInput = el("input", { width: "100%", background: ss.inputBg, border: `1px solid ${ss.inputBorder}`, borderRadius: "6px", padding: "10px 14px", color: ss.text, fontSize: "14px", outline: "none", boxSizing: "border-box" }, undefined, { type: "password", placeholder: "••••••••", value: state.loginForm.password });
  passInput.oninput = e => { state.loginForm.password = e.target.value; };
  const passWrap = el("div", { marginBottom: "20px" });
  passWrap.appendChild(passLabel); passWrap.appendChild(passInput);
  card.appendChild(passWrap);
 
  const loginBtn = el("button", { ...blueBtnStyle, marginBottom: "16px" }, "Login");
  loginBtn.onclick = () => { state.loggedIn = true; nav("home"); };
  card.appendChild(loginBtn);
  card.appendChild(el("div", { textAlign: "center", fontSize: "14px", color: ss.textMuted }, `Don't have an account? <span style="color:#3b82f6;cursor:pointer">Register</span>`));
  wrap.appendChild(card);
  return wrap;
}
 
function renderFooter() {
  const ss = s();
  const footer = el("footer", { background: ss.footerBg, padding: "40px 24px 24px", marginTop: "40px", borderTop: `1px solid ${ss.navBorder}` });
  const grid = el("div", { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "32px", marginBottom: "32px" });
 
  // Brand
  const brand = el("div");
  brand.appendChild(el("div", { fontWeight: "700", fontSize: "16px", marginBottom: "10px" }, "Store"));
  brand.appendChild(el("div", { fontSize: "13px", color: ss.textMuted, lineHeight: "1.6", marginBottom: "12px" }, "Your one-stop shop for all your shopping needs. Quality products, competitive prices, and exceptional service."));
  const socials = el("div", { display: "flex", gap: "12px" });
  ["F", "I", "T", "Y"].forEach(ico => {
    socials.appendChild(el("div", { width: "28px", height: "28px", border: `1px solid ${ss.btnOutline}`, borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "11px", color: ss.textMuted }, ico));
  });
  brand.appendChild(socials);
  grid.appendChild(brand);
 
  // Shop
  const shop = el("div");
  shop.appendChild(el("div", { fontWeight: "600", fontSize: "14px", marginBottom: "12px" }, "Shop"));
  ["All Products", "Categories", "Wishlist", "Cart"].forEach(l => {
    const link = el("div", { fontSize: "13px", color: ss.textMuted, marginBottom: "8px", cursor: "pointer" }, l);
    link.onclick = () => nav(l.toLowerCase().replace(" ", ""));
    shop.appendChild(link);
  });
  grid.appendChild(shop);
 
  // Account
  const account = el("div");
  account.appendChild(el("div", { fontWeight: "600", fontSize: "14px", marginBottom: "12px" }, "Account"));
  ["Login", "Register", "My Account", "Order History"].forEach(l => {
    account.appendChild(el("div", { fontSize: "13px", color: ss.textMuted, marginBottom: "8px", cursor: "pointer" }, l));
  });
  grid.appendChild(account);
 
  // Contact
  const contact = el("div");
  contact.appendChild(el("div", { fontWeight: "600", fontSize: "14px", marginBottom: "12px" }, "Contact"));
  ["📍 123 Shopping Street, Retail City, 10001", "📞 (123) 456-7890", "✉️ info@store.com"].forEach(l => {
    contact.appendChild(el("div", { fontSize: "13px", color: ss.textMuted, marginBottom: "8px" }, l));
  });
  grid.appendChild(contact);
  footer.appendChild(grid);
 
  const bottom = el("div", { borderTop: `1px solid ${ss.navBorder}`, paddingTop: "16px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" });
  bottom.appendChild(el("div", { fontSize: "12px", color: ss.textSub }, "© 2023 Store. All rights reserved."));
  const links = el("div", { display: "flex", gap: "16px" });
  ["Privacy Policy", "Terms of Service", "Shipping Policy"].forEach(l => {
    links.appendChild(el("span", { fontSize: "12px", color: ss.textSub, cursor: "pointer" }, l));
  });
  bottom.appendChild(links);
  footer.appendChild(bottom);
  return footer;
}
 
function render() {
  const ss = s();
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.style.background = ss.bg;
  app.style.minHeight = "100vh";
  app.style.color = ss.text;
 
  app.appendChild(renderNavbar());
 
  if (state.page === "home") app.appendChild(renderHomePage());
  else if (state.page === "products") app.appendChild(renderProductsPage());
  else if (state.page === "categories") app.appendChild(renderCategoriesPage());
  else if (state.page === "cart") app.appendChild(renderCartPage());
  else if (state.page === "wishlist") app.appendChild(renderWishlistPage());
  else if (state.page === "login") app.appendChild(renderLoginPage());
 
  app.appendChild(renderFooter());
}
 
render();






