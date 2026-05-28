const Model = {
  PRODUCTS: [
    { id: 1, title: "Mens Casual Premium Slim Fit T-Shirts", price: 22.30, category: "men's clothing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrkcoLQOhIUUGQiyVrEM8JehInnK2XSbpdmw&s", rating: 4.1, reviews: 259, description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket." },
    { id: 2, title: "Mens Casual Slim Fit", price: 15.99, category: "men's clothing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63wD20TjbroL4GaLTYJ-Jm_Jh9WBOA48_mQ&s", rating: 4.0, reviews: 187, description: "The color could be slightly different between on the screen and in practice. Slim fit design for a modern and stylish look. Made from premium quality fabric that is soft and breathable. Perfect for casual outings, meetings, and everyday wear." },
    { id: 3, title: "Mens Cotton Jacket", price: 55.99, category: "men's clothing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3C9YaQ1AG_A-OGybJf5tMptpqaBk24eRhQ&s", rating: 4.7, reviews: 312, description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoor. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day." },
    { id: 4, title: "Fjallraven - Foldsack No. 1 Backpack", price: 109.95, category: "men's clothing", image: "https://img.magnific.com/free-photo/short-sleeve-black-t-shirt_1409-2226.jpg?semt=ais_hybrid&w=740&q=80", rating: 3.9, reviews: 120, description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday essentials in the main compartment, and your water bottle in the side pocket." },
    { id: 5, title: "John Hardy Women's Legends Naga Gold & Silver Dragon Bracelet", price: 695.00, category: "jewelery", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-kgbQRw4ODctPUVnes8PFaIKQS7EWZK04QA&s", rating: 4.6, reviews: 400, description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Handcrafted in Bali, Indonesia, this sterling silver and 18K gold bangle was polished to perfection and decorated with a classic dragon-scale texture." },
    { id: 6, title: "Solid Gold Petite Micropave", price: 168.00, category: "jewelery", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73OaLIfGc01Z2dNef73s0RsT2heY3D7Znew&s", rating: 3.9, reviews: 70, description: "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days." },
    { id: 7, title: "White Gold Plated Princess Cut Earrings", price: 9.99, category: "jewelery", image: "https://privilegia.uz/wp-content/uploads/2026/03/photo_2026-04-02_23-45-56-e1775155611763.jpg", rating: 3.0, reviews: 500, description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel." },
    { id: 8, title: "Pierced Owl Rose Gold Plated Stainless Steel", price: 10.99, category: "jewelery", image: "https://www.shutterstock.com/image-illustration/diamond-ring-radian-pear-cut-600nw-2554062037.jpg", rating: 1.9, reviews: 100, description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel." },
    { id: 9, title: "WD 2TB Elements Portable External Hard Drive", price: 64.00, category: "electronics", image: "https://privilegia.uz/wp-content/uploads/2026/04/image-14-scaled-1.png", rating: 3.3, reviews: 203, description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems." },
    { id: 10, title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor", price: 999.99, category: "electronics", image: "https://www.shutterstock.com/image-photo/baguette-diamond-ring-on-white-600nw-2682026455.jpg", rating: 2.2, reviews: 140, description: "49 INCH SUPER ULTRAWIDE: 32:9 ratio with 5120 x 1440 resolution QLED support, an elegant design that combines a wider proportional screen compared to 2 monitors side by side." },
    { id: 11, title: "Silicon Power 256GB SSD 3D NAND", price: 109.00, category: "electronics", image: "https://t3.ftcdn.net/jpg/02/95/12/70/360_F_295127088_IEk7c55MpYFOVv8DCsY8HuPNKupeq1Cz.jpg", rating: 4.8, reviews: 319, description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance." },
    { id: 12, title: "SanDisk SSD PLUS 1TB Internal SSD", price: 109.00, category: "electronics", image: "https://static.vecteezy.com/system/resources/previews/047/080/710/non_2x/luxury-wrist-watch-on-transparent-background-png.png", rating: 2.9, reviews: 470, description: "Easy upgrade for faster boot up, shutdown, application load and response times. Boosts burst write performance, making it ideal for typical PC workloads." },
    { id: 13, title: "Women's 3-in-1 Snowboard Jacket Winter Coats", price: 56.99, category: "women's clothing", image: "https://thumbs.dreamstime.com/b/bangkok-thailand-sep-sony-playstation-s-dualshock-wireless-controller-isolated-white-background-illustrative-editorial-content-127622525.jpg", rating: 2.6, reviews: 235, description: "Note: The Jackets is US standard size, please refer to the size chart before ordering. The 3 in 1 Snowboard Jacket features a waterproof, breathable and reflective taffeta shell material." },
    { id: 14, title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket", price: 29.95, category: "women's clothing", image: "https://c4.wallpaperflare.com/wallpaper/607/778/544/playstation-4-consoles-video-games-sony-wallpaper-preview.jpg", rating: 2.9, reviews: 340, description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (Solid)." },
    { id: 15, title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats", price: 39.99, category: "women's clothing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh6mWQt-XEzw-s1B_mEM5fGO04AePGI3bhA&s", rating: 3.8, reviews: 679, description: "Lightweight perfect for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat." },
    { id: 16, title: "MBJ Women's Solid Short Sleeve Boat Neck V", price: 9.85, category: "women's clothing", image: "https://static.vecteezy.com/system/resources/thumbnails/024/509/430/small/jacket-isolated-on-background-with-generative-ai-png.png", rating: 4.7, reviews: 130, description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline." },
  ],
 
  CATEGORIES: [
    { id: "electronics",     label: "Electronics",     desc: "Browse all electronics products" },
    { id: "jewelery",        label: "Jewelery",         desc: "Browse all jewelery products" },
    { id: "men's clothing",  label: "Men's Clothing",   desc: "Browse all men's clothing products" },
    { id: "women's clothing",label: "Women's Clothing", desc: "Browse all women's clothing products" },
  ],
 
  STYLES: {
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
    },
  },
 
  state: {
    theme: "dark",
    page: "home",
    productId: null,
    productTab: "description",
    cart: [],
    wishlist: [],
    search: "",
    filterCat: "",
    sortBy: "",
    showFilter: false,
    loginForm: { email: "", password: "" },
    loggedIn: false,
  },
 
  getTheme() {
    const t = this.state.theme;
    if (t === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    return t;
  },
  getStyles()     { return this.STYLES[this.getTheme()]; },
 
  getFilteredProducts() {
    let p = this.PRODUCTS;
    if (this.state.search)    p = p.filter(x => x.title.toLowerCase().includes(this.state.search.toLowerCase()));
    if (this.state.filterCat) p = p.filter(x => x.category === this.state.filterCat);
    if (this.state.sortBy === "price-asc")  p = [...p].sort((a, b) => a.price - b.price);
    if (this.state.sortBy === "price-desc") p = [...p].sort((a, b) => b.price - a.price);
    if (this.state.sortBy === "rating")     p = [...p].sort((a, b) => b.rating - a.rating);
    return p;
  },
 
  inWishlist(id) { return this.state.wishlist.some(i => i.id === id); },
  inCart(id)     { return this.state.cart.some(i => i.id === id); },
  cartTotal()    { return this.state.cart.reduce((acc, i) => acc + i.price * i.qty, 0); },
  cartCount()    { return this.state.cart.reduce((acc, i) => acc + i.qty, 0); },
};
 
const Controller = {
  nav(page, extra) {
    Model.state.page = page;
    Model.state.showFilter = false;
    if (extra) Object.assign(Model.state, extra);
    if (page === "product" && Model.state.productId) {
      window.location.hash = `#/product/${Model.state.productId}`;
    } else {
      window.location.hash = `#/${page}`;
    }
    window.scrollTo(0, 0);
    View.render();
  },
 
  navToProduct(id) {
    Model.state.productId = id;
    Model.state.productTab = "description";
    window.location.hash = `#/product/${id}`;
    window.scrollTo(0, 0);
    View.render();
  },
 
  addToCart(product) {
    const ex = Model.state.cart.find(i => i.id === product.id);
    if (ex) Model.state.cart = Model.state.cart.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
    else    Model.state.cart = [...Model.state.cart, { ...product, qty: 1 }];
    View.render();
  },
 
  removeFromCart(id) {
    Model.state.cart = Model.state.cart.filter(i => i.id !== id);
    View.render();
  },
 
  updateQty(id, delta) {
    Model.state.cart = Model.state.cart.map(i =>
      i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i
    );
    View.render();
  },
 
  clearCart() {
    Model.state.cart = [];
    View.render();
  },
 
  toggleWishlist(product) {
    if (Model.inWishlist(product.id)) Model.state.wishlist = Model.state.wishlist.filter(i => i.id !== product.id);
    else                              Model.state.wishlist = [...Model.state.wishlist, product];
    View.render();
  },
 
  setSearch(value) {
    Model.state.search = value;
    View.render();
  },
 
  setFilterCat(value) {
    Model.state.filterCat = value;
    View.render();
  },
 
  setSortBy(value) {
    Model.state.sortBy = value;
    View.render();
  },
 
  clearFilters() {
    Model.state.filterCat = "";
    Model.state.sortBy = "";
    View.render();
  },
 
  toggleFilter() {
    Model.state.showFilter = !Model.state.showFilter;
    View.render();
  },
 
  setTheme(t) {
    Model.state.theme = t;
    View.render();
  },
 
  setProductTab(tab) {
    Model.state.productTab = tab;
    View.render();
    window.scrollTo(0, 0);
  },
 
  login() {
    Model.state.loggedIn = true;
    this.nav("home");
  },
 
  clearWishlist() {
    Model.state.wishlist = [];
    View.render();
  },
 
  updateLoginForm(field, value) {
    Model.state.loginForm[field] = value;
  },
};
 
const View = {
  el(tag, styles, innerHTML, attrs = {}) {
    const elem = document.createElement(tag);
    if (styles) Object.assign(elem.style, styles);
    if (innerHTML !== undefined) elem.innerHTML = innerHTML;
    Object.entries(attrs).forEach(([k, v]) => elem.setAttribute(k, v));
    return elem;
  },
 
  badge(count) {
    return this.el("span", {
      position: "absolute", top: "0", right: "0", background: "#3b82f6",
      color: "#fff", borderRadius: "50%", width: "16px", height: "16px",
      fontSize: "10px", fontWeight: "700", display: "flex",
      alignItems: "center", justifyContent: "center", lineHeight: "1",
    }, count > 9 ? "9+" : count);
  },
 
  iconBtnStyle() {
    const ss = Model.getStyles();
    return { background: "transparent", border: "none", color: ss.textMuted, cursor: "pointer", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", position: "relative" };
  },
 
  dropdownStyle() {
    const ss = Model.getStyles();
    return { position: "absolute", top: "calc(100% + 6px)", right: "0", background: ss.dropBg, border: `1px solid ${ss.dropBorder}`, borderRadius: "8px", padding: "12px 14px", minWidth: "200px", zIndex: "999", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" };
  },
 
  blueBtnStyle: { width: "100%", background: "#3b82f6", color: "#fff", border: "none", borderRadius: "6px", padding: "9px", fontSize: "14px", cursor: "pointer", fontWeight: "500" },
 
  ICON: {
    moon:    `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    heart:   (f) => `<svg width="18" height="18" fill="${f ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    cart:    `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
    cartSm:  `<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
    eye:     `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    user:    `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    filter:  `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
    search:  `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
    trash:   `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
    arrowLeft:`<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>`,
    heartSm: (f, c) => `<svg width="16" height="16" fill="${f ? c : 'none'}" stroke="${c}" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  },
 
  injectStyles() {
    if (document.getElementById("store-styles")) return;
    const style = document.createElement("style");
    style.id = "store-styles";
    style.textContent = `
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
      .product-card { position: relative; overflow: hidden; }
      .product-card .card-overlay {
        position: absolute; inset: 0; background: rgba(0,0,0,0.45);
        display: flex; align-items: center; justify-content: center; gap: 10px;
        opacity: 0; transition: opacity 0.22s ease;
        border-radius: 10px 10px 0 0; top: 0; height: var(--img-h, 220px);
      }
      .product-card:hover .card-overlay { opacity: 1; }
      .overlay-btn {
        width: 44px; height: 44px; border-radius: 8px; border: none; cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        background: rgba(20,28,40,0.9); color: #fff;
        transition: background 0.15s, transform 0.15s; backdrop-filter: blur(4px);
      }
      .overlay-btn:hover { background: #3b82f6; transform: scale(1.08); }
      .wish-corner {
        position: absolute; top: 10px; right: 10px;
        background: rgba(0,0,0,0.45); border: none; border-radius: 50%;
        width: 32px; height: 32px; display: flex; align-items: center;
        justify-content: center; cursor: pointer; z-index: 2; transition: background 0.15s;
      }
      .wish-corner:hover { background: rgba(239,68,68,0.3); }
      .rating-badge {
        position: absolute; top: 10px; left: 10px;
        background: rgba(0,0,0,0.55); color: #fff; font-size: 11px;
        padding: 2px 8px; border-radius: 4px; z-index: 2;
      }
      .product-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
      @media (max-width: 1100px) { .product-grid { grid-template-columns: repeat(3, 1fr); } }
      @media (max-width: 760px)  { .product-grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 480px)  { .product-grid { grid-template-columns: 1fr; } }
      .page-container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
      nav .inner { max-width: 1280px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; height: 56px; }
      .tab-btn { background: transparent; border: 1px solid transparent; border-radius: 6px; padding: 7px 18px; font-size: 14px; cursor: pointer; transition: background 0.15s, border-color 0.15s; }
      .tab-btn.active { border-color: rgba(255,255,255,0.25); }
      .sim-card { cursor: pointer; transition: transform 0.18s; }
      .sim-card:hover { transform: translateY(-3px); }
      .stars { color: #f59e0b; }
    `;
    document.head.appendChild(style);
  },
 
  renderNavbar() {
    const ss = Model.getStyles();
    const { ICON } = this;
    const navbar = this.el("nav", { background: ss.navBg, borderBottom: `1px solid ${ss.navBorder}`, position: "sticky", top: "0", zIndex: "200" });
    const inner = document.createElement("div"); inner.className = "inner";
 
    const left = this.el("div", { display: "flex", alignItems: "center", gap: "28px" });
    const logo = this.el("span", { fontWeight: "700", fontSize: "16px", cursor: "pointer", color: ss.text }, "Store");
    logo.onclick = () => Controller.nav("home");
    left.appendChild(logo);
    const navLinks = this.el("div", { display: "flex", gap: "24px" });
    ["home", "products", "categories"].forEach(p => {
      const link = this.el("span", { fontSize: "14px", cursor: "pointer", color: Model.state.page === p ? ss.text : ss.textMuted, textDecoration: Model.state.page === p ? "underline" : "none", textTransform: "capitalize" }, p.charAt(0).toUpperCase() + p.slice(1));
      link.onclick = () => Controller.nav(p);
      navLinks.appendChild(link);
    });
    left.appendChild(navLinks);
    inner.appendChild(left);
 
    const right = this.el("div", { display: "flex", alignItems: "center", gap: "8px" });
 
    const themeWrap = this.el("div", { position: "relative" });
    const themeBtn  = this.el("button", this.iconBtnStyle(), ICON.moon);
    const themeDrop = this.el("div", { ...this.dropdownStyle(), display: "none" });
    ["Light", "Dark", "System"].forEach(t => {
      const opt = this.el("button", { display: "block", width: "100%", background: Model.state.theme === t.toLowerCase() ? "rgba(59,130,246,0.15)" : "transparent", border: "none", color: ss.text, fontSize: "14px", padding: "8px 14px", textAlign: "left", cursor: "pointer", borderRadius: "4px" }, t);
      opt.onclick = () => Controller.setTheme(t.toLowerCase());
      themeDrop.appendChild(opt);
    });
    let themeTimer;
    themeWrap.onmouseenter = () => { clearTimeout(themeTimer); themeDrop.style.display = "block"; };
    themeWrap.onmouseleave = () => { themeTimer = setTimeout(() => { themeDrop.style.display = "none"; }, 150); };
    themeWrap.appendChild(themeBtn); themeWrap.appendChild(themeDrop);
    right.appendChild(themeWrap);
 
    const wCount = Model.state.wishlist.length;
    const wishWrap = this.el("div", { position: "relative" });
    const wishBtn  = this.el("button", this.iconBtnStyle(), ICON.heart(false));
    wishBtn.onclick = () => Controller.nav("wishlist");
    if (wCount > 0) wishBtn.appendChild(this.badge(wCount));
    const wishDrop = this.el("div", { ...this.dropdownStyle(), display: "none" });
    wishDrop.innerHTML = `<div style="font-weight:600;font-size:14px;margin-bottom:4px;color:${ss.text}">Wishlist (${wCount})</div>`;
    if (wCount === 0) wishDrop.innerHTML += `<div style="font-size:13px;color:${ss.textMuted};margin-bottom:12px">Your wishlist is empty</div>`;
    else {
      const wItems = this.el("div", { marginBottom: "10px" });
      Model.state.wishlist.slice(0, 3).forEach(item => {
        wItems.innerHTML += `<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><img src="${item.image}" style="width:36px;height:36px;object-fit:contain;border-radius:4px;background:#fff"/><div><div style="font-size:12px;color:${ss.text};max-width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${item.title}</div><div style="font-size:12px;color:${ss.textMuted}">$${item.price.toFixed(2)}</div></div></div>`;
      });
      wishDrop.appendChild(wItems);
    }
    const wishViewBtn = this.el("button", this.blueBtnStyle, "View Wishlist");
    wishViewBtn.onclick = () => Controller.nav("wishlist");
    wishDrop.appendChild(wishViewBtn);
    let wishTimer;
    wishWrap.onmouseenter = () => { clearTimeout(wishTimer); wishDrop.style.display = "block"; };
    wishWrap.onmouseleave = () => { wishTimer = setTimeout(() => { wishDrop.style.display = "none"; }, 150); };
    wishWrap.appendChild(wishBtn); wishWrap.appendChild(wishDrop);
    right.appendChild(wishWrap);
 
    const cCount = Model.cartCount();
    const cartWrap = this.el("div", { position: "relative" });
    const cartBtn  = this.el("button", this.iconBtnStyle(), ICON.cart);
    cartBtn.onclick = () => Controller.nav("cart");
    if (cCount > 0) cartBtn.appendChild(this.badge(cCount));
    const cartDrop = this.el("div", { ...this.dropdownStyle(), display: "none" });
    cartDrop.innerHTML = `<div style="font-weight:600;font-size:14px;margin-bottom:4px;color:${ss.text}">Cart (${cCount})</div>`;
    if (cCount === 0) cartDrop.innerHTML += `<div style="font-size:13px;color:${ss.textMuted};margin-bottom:12px">Your cart is empty</div>`;
    else {
      const cItems = this.el("div", { marginBottom: "10px" });
      Model.state.cart.slice(0, 4).forEach(item => {
        const t = item.title.length > 28 ? item.title.slice(0, 28) + "..." : item.title;
        cItems.innerHTML += `<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><img src="${item.image}" style="width:36px;height:36px;object-fit:contain;border-radius:4px;background:#fff"/><div style="flex:1;min-width:0"><div style="font-size:12px;color:${ss.text};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t}</div><div style="font-size:12px;color:${ss.textMuted}">$${item.price.toFixed(2)} × ${item.qty}</div></div></div>`;
      });
      cartDrop.appendChild(cItems);
    }
    const cartViewBtn = this.el("button", this.blueBtnStyle, "View Cart");
    cartViewBtn.onclick = () => Controller.nav("cart");
    cartDrop.appendChild(cartViewBtn);
    let cartTimer;
    cartWrap.onmouseenter = () => { clearTimeout(cartTimer); cartDrop.style.display = "block"; };
    cartWrap.onmouseleave = () => { cartTimer = setTimeout(() => { cartDrop.style.display = "none"; }, 150); };
    cartWrap.appendChild(cartBtn); cartWrap.appendChild(cartDrop);
    right.appendChild(cartWrap);
 
    const loginBtn = this.el("button", { background: "transparent", border: `1px solid ${ss.btnOutline}`, color: ss.text, borderRadius: "6px", padding: "6px 14px", fontSize: "14px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }, `${ICON.user} Login`);
    loginBtn.onclick = () => Controller.nav("login");
    right.appendChild(loginBtn);
 
    inner.appendChild(right);
    navbar.appendChild(inner);
    return navbar;
  },
 
  renderSearchBar() {
    const ss = Model.getStyles();
    const { ICON } = this;
    const wrap = this.el("div", { marginBottom: "24px" });
    const row  = this.el("div", { display: "flex", gap: "12px", marginBottom: "12px" });
 
    const searchWrap = this.el("div", { flex: "1", display: "flex", alignItems: "center", background: ss.inputBg, border: `1px solid ${ss.inputBorder}`, borderRadius: "8px", padding: "0 14px", gap: "8px" });
    searchWrap.innerHTML = `<span style="display:flex">${ICON.search.replace('stroke="currentColor"', `stroke="${ss.textSub}"`)}</span>`;
    const searchInput = this.el("input", { background: "transparent", border: "none", outline: "none", color: ss.text, fontSize: "14px", width: "100%", padding: "10px 0" }, undefined, { placeholder: "Search products...", type: "text", value: Model.state.search });
    searchInput.oninput = e => Controller.setSearch(e.target.value);
    searchWrap.appendChild(searchInput);
    row.appendChild(searchWrap);
    
 
    const filterToggle = this.el("button", { background: ss.inputBg, border: `1px solid ${ss.inputBorder}`, color: ss.text, borderRadius: "8px", padding: "0 18px", fontSize: "14px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }, `${ICON.filter} Filter`);
    filterToggle.onclick = () => Controller.toggleFilter();
    row.appendChild(filterToggle);
    wrap.appendChild(row);
 
    if (Model.state.showFilter) {
      const filterRow = this.el("div", { display: "flex", gap: "10px", flexWrap: "wrap", padding: "12px 14px", background: ss.cardBg, border: `1px solid ${ss.cardBorder}`, borderRadius: "8px" });
 
      const catSelect = this.el("select", { background: ss.inputBg, border: `1px solid ${ss.inputBorder}`, color: ss.text, borderRadius: "6px", padding: "6px 10px", fontSize: "13px" });
      catSelect.innerHTML = `<option value="">All Categories</option>` + Model.CATEGORIES.map(c => `<option value="${c.id}" ${Model.state.filterCat === c.id ? "selected" : ""}>${c.label}</option>`).join("");
      catSelect.onchange = e => Controller.setFilterCat(e.target.value);
      filterRow.appendChild(catSelect);
 
      const sortSelect = this.el("select", { background: ss.inputBg, border: `1px solid ${ss.inputBorder}`, color: ss.text, borderRadius: "6px", padding: "6px 10px", fontSize: "13px" });
      sortSelect.innerHTML = `<option value="">Sort By</option><option value="price-asc" ${Model.state.sortBy === "price-asc" ? "selected" : ""}>Price: Low to High</option><option value="price-desc" ${Model.state.sortBy === "price-desc" ? "selected" : ""}>Price: High to Low</option><option value="rating" ${Model.state.sortBy === "rating" ? "selected" : ""}>Top Rated</option>`;
      sortSelect.onchange = e => Controller.setSortBy(e.target.value);
      filterRow.appendChild(sortSelect);
 
      const clearBtn = this.el("button", { background: "transparent", border: `1px solid ${ss.inputBorder}`, color: ss.textMuted, borderRadius: "6px", padding: "6px 12px", fontSize: "13px", cursor: "pointer" }, "Clear");
      clearBtn.onclick = () => Controller.clearFilters();
      filterRow.appendChild(clearBtn);
      wrap.appendChild(filterRow);
    }
    return wrap;
  },   
  renderProductCard(product) {
    const ss = Model.getStyles();
    const { ICON } = this;
    const wished = Model.inWishlist(product.id);
    const carted = Model.inCart(product.id);
 
    const card = this.el("div", { background: ss.cardBg, border: `1px solid ${ss.cardBorder}`, borderRadius: "10px", overflow: "hidden", display: "flex", flexDirection: "column" });
    card.className = "product-card";
 
    const imgWrap = this.el("div", { position: "relative", background: "#fff", height: "220px", display: "flex", alignItems: "center", justifyContent: "center" });
    const img = this.el("img", { maxHeight: "200px", maxWidth: "100%", objectFit: "contain", padding: "16px" });
    img.src = product.image; img.alt = product.title;
    imgWrap.appendChild(img);
 
    const wishBtn = document.createElement("button");
    wishBtn.className = "wish-corner";
    wishBtn.style.color = wished ? "#ef4444" : "#fff";
    wishBtn.innerHTML = ICON.heartSm(wished, wished ? "#ef4444" : "#fff");
    wishBtn.onclick = e => { e.stopPropagation(); Controller.toggleWishlist(product); };
    imgWrap.appendChild(wishBtn);
 
    const ratingBadge = document.createElement("span");
    ratingBadge.className = "rating-badge";
    ratingBadge.innerHTML = `★ ${product.rating}`;
    imgWrap.appendChild(ratingBadge);
 
    const overlay = document.createElement("div");
    overlay.className = "card-overlay";
 
    const eyeBtn = document.createElement("button");
    eyeBtn.className = "overlay-btn"; eyeBtn.innerHTML = ICON.eye; eyeBtn.title = "View product";
    eyeBtn.onclick = e => { e.stopPropagation(); Controller.navToProduct(product.id); };
 
    const cartOverlayBtn = document.createElement("button");
    cartOverlayBtn.className = "overlay-btn"; cartOverlayBtn.innerHTML = ICON.cartSm; cartOverlayBtn.title = "Add to cart";
    cartOverlayBtn.onclick = e => { e.stopPropagation(); Controller.addToCart(product); };
 
    overlay.appendChild(eyeBtn); overlay.appendChild(cartOverlayBtn);
    imgWrap.appendChild(overlay);
    card.appendChild(imgWrap);
 
    const body = this.el("div", { padding: "12px 14px", flex: "1", display: "flex", flexDirection: "column", gap: "6px" });
    const title = this.el("div", { fontSize: "13px", color: ss.text, lineHeight: "1.4", flex: "1" }, product.title.length > 52 ? product.title.slice(0, 52) + "..." : product.title);
    const price = this.el("div", { fontSize: "16px", fontWeight: "700", color: ss.text }, `$${product.price.toFixed(2)}`);
    const addBtn = this.el("button", { ...this.blueBtnStyle, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", background: carted ? "#1d4ed8" : "#3b82f6" }, `${ICON.cartSm} ${carted ? "Add More" : "Add to Cart"}`);
    addBtn.onclick = () => Controller.addToCart(product);
 
    body.appendChild(title); body.appendChild(price); body.appendChild(addBtn);
    card.appendChild(body);
    return card;
  },
 
  renderProductGrid(products) {
    const grid = document.createElement("div");
    grid.className = "product-grid";
    products.forEach(p => grid.appendChild(this.renderProductCard(p)));
    return grid;
  },
 
  renderHomePage() {
    const page = this.el("div", { paddingBottom: "40px" });
    const wrap = document.createElement("div"); wrap.className = "page-container";
    wrap.appendChild(this.el("h1", { fontSize: "24px", fontWeight: "700", margin: "28px 0 20px" }, "Online Store"));
    wrap.appendChild(this.renderSearchBar());
    wrap.appendChild(this.renderProductGrid(Model.getFilteredProducts()));
    page.appendChild(wrap);
    return page;
  },
 
  renderProductsPage() {
    const page = this.el("div", { paddingBottom: "40px" });
    const wrap = document.createElement("div"); wrap.className = "page-container";
    wrap.appendChild(this.el("h1", { fontSize: "24px", fontWeight: "700", margin: "28px 0 20px" }, "Products"));
    wrap.appendChild(this.renderSearchBar());
    wrap.appendChild(this.renderProductGrid(Model.getFilteredProducts()));
    page.appendChild(wrap);
    return page;
  },
 
  renderCategoriesPage() {
    const ss = Model.getStyles();
    const page = this.el("div", { paddingBottom: "40px" });
    const wrap = document.createElement("div"); wrap.className = "page-container";
    wrap.appendChild(this.el("h1", { fontSize: "24px", fontWeight: "700", margin: "28px 0 24px" }, "Categories"));
    const grid = this.el("div", { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" });
    Model.CATEGORIES.forEach(c => {
      const card = this.el("div", { background: ss.cardBg, border: `1px solid ${ss.cardBorder}`, borderRadius: "10px", padding: "24px" });
      card.appendChild(this.el("div", { fontSize: "18px", fontWeight: "700", marginBottom: "6px", color: ss.text }, c.label));
      card.appendChild(this.el("div", { fontSize: "13px", color: ss.textMuted, marginBottom: "16px" }, c.desc));
      const btn = this.el("button", { width: "100%", background: "transparent", border: `1px solid ${ss.btnOutline}`, color: ss.text, borderRadius: "6px", padding: "9px", fontSize: "14px", cursor: "pointer", fontWeight: "500" }, "View Products");
      btn.onclick = () => { Model.state.filterCat = c.id; Controller.nav("products"); };
      card.appendChild(btn);
      grid.appendChild(card);
    });
    wrap.appendChild(grid);
    page.appendChild(wrap);
    return page;
  },
 
  renderProductPage() {
    const ss = Model.getStyles();
    const { ICON } = this;
    const product = Model.PRODUCTS.find(p => p.id === Model.state.productId);
    if (!product) { Controller.nav("products"); return this.el("div", {}, ""); }
 
    const wished  = Model.inWishlist(product.id);
    const similar = Model.PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
 
    const page = this.el("div", { paddingBottom: "60px" });
    const wrap = document.createElement("div"); wrap.className = "page-container";
 
    const back = this.el("div", { display: "flex", alignItems: "center", gap: "6px", color: ss.textMuted, fontSize: "14px", cursor: "pointer", padding: "20px 0 24px", width: "fit-content" }, `${ICON.arrowLeft} Back to products`);
    back.onclick = () => Controller.nav("products");
    wrap.appendChild(back);
 
    const layout = this.el("div", { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" });
 
    const imgSide = this.el("div", { background: "#fff", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "460px", padding: "32px" });
    const bigImg = this.el("img", { maxWidth: "100%", maxHeight: "400px", objectFit: "contain" });
    bigImg.src = product.image; bigImg.alt = product.title;
    imgSide.appendChild(bigImg);
    layout.appendChild(imgSide);
 
    const info = document.createElement("div");
 
    const catTag = this.el("span", { background: ss.cardBg, border: `1px solid ${ss.cardBorder}`, borderRadius: "20px", padding: "3px 12px", fontSize: "12px", color: ss.textMuted }, product.category);
    info.appendChild(catTag);
    info.appendChild(this.el("h1", { fontSize: "26px", fontWeight: "700", margin: "12px 0 8px", lineHeight: "1.3", color: ss.text }, product.title));
 
    const starsEl = this.el("div", { display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" });
    let starsHtml = '<span class="stars">';
    for (let i = 0; i < 5; i++) starsHtml += i < Math.floor(product.rating) ? "★" : "☆";
    starsHtml += "</span>";
    starsEl.innerHTML = starsHtml + `<span style="font-size:14px;color:${ss.textMuted}">${product.rating} (${product.reviews} reviews)</span>`;
    info.appendChild(starsEl);
    info.appendChild(this.el("div", { fontSize: "28px", fontWeight: "800", color: ss.text, marginBottom: "20px" }, `$${product.price.toFixed(2)}`));
 
    const tabsWrap = this.el("div", { display: "flex", gap: "4px", borderBottom: `1px solid ${ss.cardBorder}`, marginBottom: "16px" });
    ["description", "details", "shipping"].forEach(tab => {
      const btn = document.createElement("button");
      btn.className = `tab-btn${Model.state.productTab === tab ? " active" : ""}`;
      btn.style.color = Model.state.productTab === tab ? ss.text : ss.textMuted;
      btn.style.background = Model.state.productTab === tab ? ss.cardBg : "transparent";
      btn.style.borderColor = Model.state.productTab === tab ? ss.cardBorder : "transparent";
      btn.textContent = tab.charAt(0).toUpperCase() + tab.slice(1);
      btn.onclick = () => Controller.setProductTab(tab);
      tabsWrap.appendChild(btn);
    });
    info.appendChild(tabsWrap);
 
    let tabContent = "";
    if (Model.state.productTab === "description") tabContent = product.description;
    else if (Model.state.productTab === "details") tabContent = `Category: ${product.category}\nRating: ${product.rating} / 5\nReviews: ${product.reviews}\nPrice: $${product.price.toFixed(2)}`;
    else tabContent = "Standard shipping: 5–7 business days\nExpress shipping: 2–3 business days\nFree shipping on orders over $50.\nReturn policy: 30-day returns accepted.";
    info.appendChild(this.el("p", { fontSize: "14px", color: ss.textMuted, lineHeight: "1.75", marginBottom: "24px", whiteSpace: "pre-line" }, tabContent));
 
    const qtyRow = this.el("div", { display: "flex", alignItems: "center", gap: "16px" });
    qtyRow.appendChild(this.el("span", { fontSize: "14px", fontWeight: "500", color: ss.text }, "Quantity"));
    const qtyControl = this.el("div", { display: "flex", alignItems: "center", border: `1px solid ${ss.qtyBorder}`, borderRadius: "8px", overflow: "hidden" });
    let liveQty = 1;
    const qtyDisplay = this.el("span", { padding: "0 18px", fontSize: "15px", color: ss.text, minWidth: "44px", textAlign: "center", display: "inline-block" }, "1");
    const minusBtn = this.el("button", { background: ss.qtyBg, border: "none", color: ss.text, width: "36px", height: "36px", cursor: "pointer", fontSize: "18px" }, "−");
    minusBtn.onclick = () => { liveQty = Math.max(1, liveQty - 1); qtyDisplay.textContent = liveQty; };
    const plusBtn = this.el("button", { background: ss.qtyBg, border: "none", color: ss.text, width: "36px", height: "36px", cursor: "pointer", fontSize: "18px" }, "+");
    plusBtn.onclick = () => { liveQty++; qtyDisplay.textContent = liveQty; };
    qtyControl.appendChild(minusBtn); qtyControl.appendChild(qtyDisplay); qtyControl.appendChild(plusBtn);
    qtyRow.appendChild(qtyControl);
    info.appendChild(qtyRow);
 
    const actionRow = this.el("div", { display: "flex", gap: "10px", marginTop: "16px", alignItems: "center" });
    const bigAddBtn = this.el("button", { flex: "1", background: "#3b82f6", color: "#fff", border: "none", borderRadius: "8px", padding: "12px 0", fontSize: "15px", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }, `${ICON.cart} Add to Cart`);
    bigAddBtn.onclick = () => { for (let i = 0; i < liveQty; i++) Controller.addToCart(product); };
    const wishToggle = this.el("button", { width: "44px", height: "44px", border: `1px solid ${ss.cardBorder}`, background: "transparent", borderRadius: "8px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: wished ? "#ef4444" : ss.textMuted }, ICON.heartSm(wished, wished ? "#ef4444" : ss.textMuted));
    wishToggle.onclick = () => Controller.toggleWishlist(product);
    actionRow.appendChild(bigAddBtn); actionRow.appendChild(wishToggle);
    info.appendChild(actionRow);
 
    layout.appendChild(info);
    wrap.appendChild(layout);
 
    if (similar.length > 0) {
      const simSection = this.el("div", { marginTop: "56px" });
      simSection.appendChild(this.el("h2", { fontSize: "20px", fontWeight: "700", marginBottom: "20px", color: ss.text }, "Similar Products"));
      const simGrid = document.createElement("div"); simGrid.className = "product-grid";
      similar.forEach(p => { const card = this.renderProductCard(p); card.classList.add("sim-card"); simGrid.appendChild(card); });
      simSection.appendChild(simGrid);
      wrap.appendChild(simSection);
    }
    page.appendChild(wrap);
    return page;
  },
 
  renderCartPage() {
    const ss = Model.getStyles();
    const { ICON } = this;
    const page = this.el("div", { paddingBottom: "40px" });
    const wrap = document.createElement("div"); wrap.className = "page-container";
    wrap.appendChild(this.el("h1", { fontSize: "24px", fontWeight: "700", margin: "28px 0 24px", color: ss.text }, "Shopping Cart"));
 
    if (Model.state.cart.length === 0) {
      const empty = this.el("div", { color: ss.textMuted, fontSize: "16px" }, "Your cart is empty. ");
      const link = this.el("span", { color: "#3b82f6", cursor: "pointer" }, "Continue shopping →");
      link.onclick = () => Controller.nav("products");
      empty.appendChild(link);
      wrap.appendChild(empty); page.appendChild(wrap);
      return page;
    }
 
    const grid = this.el("div", { display: "grid", gridTemplateColumns: "1fr 320px", gap: "24px", alignItems: "start" });
    const itemsWrap = document.createElement("div");
 
    Model.state.cart.forEach(item => {
      const row = this.el("div", { display: "flex", alignItems: "center", gap: "16px", padding: "16px 0", borderBottom: `1px solid ${ss.cardBorder}` });
      const img = this.el("img", { width: "80px", height: "80px", objectFit: "contain", background: "#fff", borderRadius: "8px", padding: "6px" });
      img.src = item.image; img.alt = item.title;
      row.appendChild(img);
 
      const info = document.createElement("div"); info.style.flex = "1";
      info.appendChild(this.el("div", { fontSize: "14px", fontWeight: "500", marginBottom: "4px", color: ss.text }, item.title));
      info.appendChild(this.el("div", { fontSize: "13px", color: ss.textMuted }, `$${item.price.toFixed(2)}`));
 
      const qtyRow = this.el("div", { display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" });
      const mb = this.el("button", { background: ss.qtyBg, border: `1px solid ${ss.qtyBorder}`, color: ss.text, width: "28px", height: "28px", borderRadius: "6px", cursor: "pointer", fontSize: "16px" }, "−");
      mb.onclick = () => Controller.updateQty(item.id, -1);
      const qsp = this.el("span", { fontSize: "14px", minWidth: "20px", textAlign: "center", color: ss.text }, item.qty);
      const pb = this.el("button", { background: ss.qtyBg, border: `1px solid ${ss.qtyBorder}`, color: ss.text, width: "28px", height: "28px", borderRadius: "6px", cursor: "pointer", fontSize: "16px" }, "+");
      pb.onclick = () => Controller.updateQty(item.id, 1);
      const rb = this.el("button", { background: "transparent", border: "none", color: ss.textMuted, cursor: "pointer", padding: "0 4px" }, ICON.trash);
      rb.onclick = () => Controller.removeFromCart(item.id);
      qtyRow.appendChild(mb); qtyRow.appendChild(qsp); qtyRow.appendChild(pb); qtyRow.appendChild(rb);
      info.appendChild(qtyRow);
      row.appendChild(info);
      row.appendChild(this.el("div", { fontSize: "16px", fontWeight: "600", color: ss.text }, `$${(item.price * item.qty).toFixed(2)}`));
      itemsWrap.appendChild(row);
    });
 
    const btnRow = this.el("div", { display: "flex", gap: "12px", marginTop: "16px" });
    const clrBtn = this.el("button", { background: "transparent", border: `1px solid ${ss.btnOutline}`, color: ss.text, borderRadius: "6px", padding: "8px 16px", fontSize: "14px", cursor: "pointer" }, "Clear Cart");
    clrBtn.onclick = () => Controller.clearCart();
    const cntBtn = this.el("button", { background: "transparent", border: `1px solid ${ss.btnOutline}`, color: ss.text, borderRadius: "6px", padding: "8px 16px", fontSize: "14px", cursor: "pointer" }, "Continue Shopping");
    cntBtn.onclick = () => Controller.nav("products");
    btnRow.appendChild(clrBtn); btnRow.appendChild(cntBtn);
    itemsWrap.appendChild(btnRow);
    grid.appendChild(itemsWrap);
 
    const ct = Model.cartTotal(); const tax = ct * 0.1; const total = ct + tax;
    const summary = this.el("div", { background: ss.summaryBg, border: `1px solid ${ss.cardBorder}`, borderRadius: "10px", padding: "20px" });
    summary.appendChild(this.el("div", { fontSize: "16px", fontWeight: "700", marginBottom: "16px", color: ss.text }, "Order Summary"));
    [["Subtotal", `$${ct.toFixed(2)}`], ["Shipping", "Free"], ["Tax", `$${tax.toFixed(2)}`]].forEach(([label, val]) => {
      const r = this.el("div", { display: "flex", justifyContent: "space-between", marginBottom: "10px", fontSize: "14px" });
      r.appendChild(this.el("span", { color: ss.textMuted }, label));
      r.appendChild(this.el("span", { color: ss.text }, val));
      summary.appendChild(r);
    });
    const totalRow = this.el("div", { borderTop: `1px solid ${ss.cardBorder}`, paddingTop: "14px", display: "flex", justifyContent: "space-between", fontWeight: "700", fontSize: "16px", marginBottom: "16px", color: ss.text });
    totalRow.appendChild(this.el("span", {}, "Total"));
    totalRow.appendChild(this.el("span", {}, `$${total.toFixed(2)}`));
    summary.appendChild(totalRow);
    const chkBtn = this.el("button", { ...this.blueBtnStyle, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }, "Checkout →");
    summary.appendChild(chkBtn);
    grid.appendChild(summary);
    wrap.appendChild(grid);
    page.appendChild(wrap);
    return page;
  },
 
  renderWishlistPage() {
    const ss = Model.getStyles();
    const page = this.el("div", { paddingBottom: "40px" });
    const wrap = document.createElement("div"); wrap.className = "page-container";
    const header = this.el("div", { display: "flex", justifyContent: "space-between", alignItems: "center", margin: "28px 0 24px" });
    header.appendChild(this.el("h1", { fontSize: "24px", fontWeight: "700", color: ss.text }, `My Wishlist (${Model.state.wishlist.length} items)`));
    if (Model.state.wishlist.length > 0) {
      const clrBtn = this.el("button", { background: "transparent", border: `1px solid ${ss.btnOutline}`, color: ss.text, borderRadius: "6px", padding: "8px 16px", fontSize: "14px", cursor: "pointer" }, "Clear Wishlist");
      clrBtn.onclick = () => Controller.clearWishlist();
      header.appendChild(clrBtn);
    }
    wrap.appendChild(header);
    if (Model.state.wishlist.length === 0) { wrap.appendChild(this.el("div", { color: ss.textMuted }, "Your wishlist is empty.")); }
    else wrap.appendChild(this.renderProductGrid(Model.state.wishlist));
    page.appendChild(wrap);
    return page;
  },
 
  renderLoginPage() {
    const ss = Model.getStyles();
    const wrap = this.el("div", { display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 24px" });
    const card = this.el("div", { background: ss.cardBg, border: `1px solid ${ss.cardBorder}`, borderRadius: "12px", padding: "32px", width: "100%", maxWidth: "440px" });
    card.appendChild(this.el("h2", { fontSize: "22px", fontWeight: "700", marginBottom: "6px", color: ss.text }, "Login"));
    card.appendChild(this.el("p", { color: ss.textMuted, fontSize: "14px", marginBottom: "24px" }, "Enter your credentials to access your account"));
 
    const mkField = (label, type, placeholder, field) => {
      const w = this.el("div", { marginBottom: "16px" });
      w.appendChild(this.el("label", { display: "block", fontSize: "14px", fontWeight: "500", marginBottom: "6px", color: ss.text }, label));
      const input = this.el("input", { width: "100%", background: ss.inputBg, border: `1px solid ${ss.inputBorder}`, borderRadius: "6px", padding: "10px 14px", color: ss.text, fontSize: "14px", outline: "none", boxSizing: "border-box" }, undefined, { type, placeholder, value: Model.state.loginForm[field] });
      input.oninput = e => Controller.updateLoginForm(field, e.target.value);
      w.appendChild(input);
      return w;
    };
    card.appendChild(mkField("Email",    "email",    "your@email.com", "email"));
    card.appendChild(mkField("Password", "password", "••••••••",       "password"));
 
    const loginBtn = this.el("button", { ...this.blueBtnStyle, marginBottom: "16px" }, "Login");
    loginBtn.onclick = () => Controller.login();
    card.appendChild(loginBtn);
    card.appendChild(this.el("div", { textAlign: "center", fontSize: "14px", color: ss.textMuted }, `Don't have an account? <span style="color:#3b82f6;cursor:pointer">Register</span>`));
    wrap.appendChild(card);
    return wrap;
  },
  
  renderFooter() {
    const ss = Model.getStyles();
    const footer = this.el("footer", { background: ss.footerBg, padding: "40px 0 24px", marginTop: "40px", borderTop: `1px solid ${ss.navBorder}` });
    const wrap = document.createElement("div"); wrap.className = "page-container";
    const grid = this.el("div", { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "32px", marginBottom: "32px" });
 
    const brand = document.createElement("div");
    brand.appendChild(this.el("div", { fontWeight: "700", fontSize: "16px", marginBottom: "10px", color: ss.text }, "Store"));
    brand.appendChild(this.el("div", { fontSize: "13px", color: ss.textMuted, lineHeight: "1.6", marginBottom: "12px" }, "Your one-stop shop for all your shopping needs. Quality products, competitive prices, and exceptional service."));
    const socials = this.el("div", { display: "flex", gap: "12px" });
    ["F","I","T","Y"].forEach(ico => socials.appendChild(this.el("div", { width: "28px", height: "28px", border: `1px solid ${ss.btnOutline}`, borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "11px", color: ss.textMuted }, ico)));
    brand.appendChild(socials); grid.appendChild(brand);
 
    const shop = document.createElement("div");
    shop.appendChild(this.el("div", { fontWeight: "600", fontSize: "14px", marginBottom: "12px", color: ss.text }, "Shop"));
    ["All Products","Categories","Wishlist","Cart"].forEach(l => {
      const link = this.el("div", { fontSize: "13px", color: ss.textMuted, marginBottom: "8px", cursor: "pointer" }, l);
      link.onclick = () => Controller.nav(l.toLowerCase().replace(" ", ""));
      shop.appendChild(link);
    });
    grid.appendChild(shop);
 
    const account = document.createElement("div");
    account.appendChild(this.el("div", { fontWeight: "600", fontSize: "14px", marginBottom: "12px", color: ss.text }, "Account"));
    ["Login","Register","My Account","Order History"].forEach(l => account.appendChild(this.el("div", { fontSize: "13px", color: ss.textMuted, marginBottom: "8px", cursor: "pointer" }, l)));
    grid.appendChild(account);
 
    const contact = document.createElement("div");
    contact.appendChild(this.el("div", { fontWeight: "600", fontSize: "14px", marginBottom: "12px", color: ss.text }, "Contact"));
    ["📍 123 Shopping Street, Retail City, 10001","📞 (123) 456-7890","✉️ info@store.com"].forEach(l => contact.appendChild(this.el("div", { fontSize: "13px", color: ss.textMuted, marginBottom: "8px" }, l)));
    grid.appendChild(contact);
 
    wrap.appendChild(grid);
    const bottom = this.el("div", { borderTop: `1px solid ${ss.navBorder}`, paddingTop: "16px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" });
    bottom.appendChild(this.el("div", { fontSize: "12px", color: ss.textSub }, "© 2023 Store. All rights reserved."));
    const links = this.el("div", { display: "flex", gap: "16px" });
    ["Privacy Policy","Terms of Service","Shipping Policy"].forEach(l => links.appendChild(this.el("span", { fontSize: "12px", color: ss.textSub, cursor: "pointer" }, l)));
    bottom.appendChild(links);
    wrap.appendChild(bottom);
    footer.appendChild(wrap);
    return footer;
  },
  
  render() {
    this.injectStyles();
    const ss = Model.getStyles();
    const app = document.getElementById("app");
    app.innerHTML = "";
    app.style.background = ss.bg;
    app.style.minHeight   = "100vh";
    app.style.color       = ss.text;
 
    app.appendChild(this.renderNavbar());
 
    const pages = {
      home:       () => this.renderHomePage(),
      products:   () => this.renderProductsPage(),
      categories: () => this.renderCategoriesPage(),
      cart:       () => this.renderCartPage(),
      wishlist:   () => this.renderWishlistPage(),
      login:      () => this.renderLoginPage(),
      product:    () => this.renderProductPage(),
    };
    const pageRenderer = pages[Model.state.page];
    if (pageRenderer) app.appendChild(pageRenderer());
 
    app.appendChild(this.renderFooter());
  },
};
 
function handleRoute() {
  const hash = window.location.hash || "#/home";
  const match = hash.match(/#\/product\/(\d+)/);
  if (match) {
    Model.state.page = "product";
    Model.state.productId = parseInt(match[1]);
    Model.state.productTab = "description";
  } else {
    Model.state.page = hash.replace("#/", "") || "home";
  }
  View.render();
}
 
window.addEventListener("hashchange", handleRoute);
handleRoute();









// const Model = {
//   PRODUCTS: [
//     { id: 1, title: "Mens Casual Premium Slim Fit T-Shirts", price: 22.30, category: "men's clothing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrkcoLQOhIUUGQiyVrEM8JehInnK2XSbpdmw&s", rating: 4.1, reviews: 259, description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket." },
//     { id: 2, title: "Mens Casual Slim Fit", price: 15.99, category: "men's clothing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63wD20TjbroL4GaLTYJ-Jm_Jh9WBOA48_mQ&s", rating: 4.0, reviews: 187, description: "The color could be slightly different between on the screen and in practice. Slim fit design for a modern and stylish look. Made from premium quality fabric that is soft and breathable. Perfect for casual outings, meetings, and everyday wear." },
//     { id: 3, title: "Mens Cotton Jacket", price: 55.99, category: "men's clothing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3C9YaQ1AG_A-OGybJf5tMptpqaBk24eRhQ&s", rating: 4.7, reviews: 312, description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoor. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day." },
//     { id: 4, title: "Fjallraven - Foldsack No. 1 Backpack", price: 109.95, category: "men's clothing", image: "https://img.magnific.com/free-photo/short-sleeve-black-t-shirt_1409-2226.jpg?semt=ais_hybrid&w=740&q=80", rating: 3.9, reviews: 120, description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday essentials in the main compartment, and your water bottle in the side pocket." },
//     { id: 5, title: "John Hardy Women's Legends Naga Gold & Silver Dragon Bracelet", price: 695.00, category: "jewelery", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-kgbQRw4ODctPUVnes8PFaIKQS7EWZK04QA&s", rating: 4.6, reviews: 400, description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Handcrafted in Bali, Indonesia, this sterling silver and 18K gold bangle was polished to perfection and decorated with a classic dragon-scale texture." },
//     { id: 6, title: "Solid Gold Petite Micropave", price: 168.00, category: "jewelery", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73OaLIfGc01Z2dNef73s0RsT2heY3D7Znew&s", rating: 3.9, reviews: 70, description: "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days." },
//     { id: 7, title: "White Gold Plated Princess Cut Earrings", price: 9.99, category: "jewelery", image: "https://privilegia.uz/wp-content/uploads/2026/03/photo_2026-04-02_23-45-56-e1775155611763.jpg", rating: 3.0, reviews: 500, description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel." },
//     { id: 8, title: "Pierced Owl Rose Gold Plated Stainless Steel", price: 10.99, category: "jewelery", image: "https://www.shutterstock.com/image-illustration/diamond-ring-radian-pear-cut-600nw-2554062037.jpg", rating: 1.9, reviews: 100, description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel." },
//     { id: 9, title: "WD 2TB Elements Portable External Hard Drive", price: 64.00, category: "electronics", image: "https://privilegia.uz/wp-content/uploads/2026/04/image-14-scaled-1.png", rating: 3.3, reviews: 203, description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems." },
//     { id: 10, title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor", price: 999.99, category: "electronics", image: "https://www.shutterstock.com/image-photo/baguette-diamond-ring-on-white-600nw-2682026455.jpg", rating: 2.2, reviews: 140, description: "49 INCH SUPER ULTRAWIDE: 32:9 ratio with 5120 x 1440 resolution QLED support, an elegant design that combines a wider proportional screen compared to 2 monitors side by side." },
//     { id: 11, title: "Silicon Power 256GB SSD 3D NAND", price: 109.00, category: "electronics", image: "https://t3.ftcdn.net/jpg/02/95/12/70/360_F_295127088_IEk7c55MpYFOVv8DCsY8HuPNKupeq1Cz.jpg", rating: 4.8, reviews: 319, description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance." },
//     { id: 12, title: "SanDisk SSD PLUS 1TB Internal SSD", price: 109.00, category: "electronics", image: "https://static.vecteezy.com/system/resources/previews/047/080/710/non_2x/luxury-wrist-watch-on-transparent-background-png.png", rating: 2.9, reviews: 470, description: "Easy upgrade for faster boot up, shutdown, application load and response times. Boosts burst write performance, making it ideal for typical PC workloads." },
//     { id: 13, title: "Women's 3-in-1 Snowboard Jacket Winter Coats", price: 56.99, category: "women's clothing", image: "https://thumbs.dreamstime.com/b/bangkok-thailand-sep-sony-playstation-s-dualshock-wireless-controller-isolated-white-background-illustrative-editorial-content-127622525.jpg", rating: 2.6, reviews: 235, description: "Note: The Jackets is US standard size, please refer to the size chart before ordering. The 3 in 1 Snowboard Jacket features a waterproof, breathable and reflective taffeta shell material." },
//     { id: 14, title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket", price: 29.95, category: "women's clothing", image: "https://c4.wallpaperflare.com/wallpaper/607/778/544/playstation-4-consoles-video-games-sony-wallpaper-preview.jpg", rating: 2.9, reviews: 340, description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (Solid)." },
//     { id: 15, title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats", price: 39.99, category: "women's clothing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh6mWQt-XEzw-s1B_mEM5fGO04AePGI3bhA&s", rating: 3.8, reviews: 679, description: "Lightweight perfect for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat." },
//     { id: 16, title: "MBJ Women's Solid Short Sleeve Boat Neck V", price: 9.85, category: "women's clothing", image: "https://static.vecteezy.com/system/resources/thumbnails/024/509/430/small/jacket-isolated-on-background-with-generative-ai-png.png", rating: 4.7, reviews: 130, description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline." },
//   ],
 
//   CATEGORIES: [
//     { id: "electronics",     label: "Electronics",     desc: "Browse all electronics products" },
//     { id: "jewelery",        label: "Jewelery",         desc: "Browse all jewelery products" },
//     { id: "men's clothing",  label: "Men's Clothing",   desc: "Browse all men's clothing products" },
//     { id: "women's clothing",label: "Women's Clothing", desc: "Browse all women's clothing products" },
//   ],
 
//   STYLES: {
//     dark: {
//       bg: "#0d1117", navBg: "#0d1117", navBorder: "rgba(255,255,255,0.08)",
//       text: "#fff", textMuted: "rgba(255,255,255,0.55)", textSub: "rgba(255,255,255,0.35)",
//       cardBg: "#131920", cardBorder: "rgba(255,255,255,0.1)",
//       inputBg: "#0d1117", inputBorder: "rgba(255,255,255,0.2)",
//       dropBg: "#1a2030", dropBorder: "rgba(255,255,255,0.12)",
//       footerBg: "#0a0f16", btnOutline: "rgba(255,255,255,0.3)",
//       qtyBg: "#1a2030", qtyBorder: "rgba(255,255,255,0.15)",
//       summaryBg: "#131920",
//     },
//     light: {
//       bg: "#f5f5f5", navBg: "#ffffff", navBorder: "rgba(0,0,0,0.1)",
//       text: "#111", textMuted: "rgba(0,0,0,0.55)", textSub: "rgba(0,0,0,0.35)",
//       cardBg: "#ffffff", cardBorder: "rgba(0,0,0,0.1)",
//       inputBg: "#ffffff", inputBorder: "rgba(0,0,0,0.2)",
//       dropBg: "#ffffff", dropBorder: "rgba(0,0,0,0.12)",
//       footerBg: "#e8e8e8", btnOutline: "rgba(0,0,0,0.3)",
//       qtyBg: "#f0f0f0", qtyBorder: "rgba(0,0,0,0.15)",
//       summaryBg: "#ffffff",
//     },
//   },
 
//   state: {
//     theme: "dark",
//     page: "home",
//     productId: null,
//     productTab: "description",
//     cart: [],
//     wishlist: [],
//     search: "",
//     filterCat: "",
//     sortBy: "",
//     showFilter: false,
//     loginForm: { email: "", password: "" },
//     loggedIn: false,
//   },
 
//   getTheme() {
//     const t = this.state.theme;
//     if (t === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
//     return t;
//   },
//   getStyles()     { return this.STYLES[this.getTheme()]; },
 
//   getFilteredProducts() {
//     let p = this.PRODUCTS;
//     if (this.state.search)    p = p.filter(x => x.title.toLowerCase().includes(this.state.search.toLowerCase()));
//     if (this.state.filterCat) p = p.filter(x => x.category === this.state.filterCat);
//     if (this.state.sortBy === "price-asc")  p = [...p].sort((a, b) => a.price - b.price);
//     if (this.state.sortBy === "price-desc") p = [...p].sort((a, b) => b.price - a.price);
//     if (this.state.sortBy === "rating")     p = [...p].sort((a, b) => b.rating - a.rating);
//     return p;
//   },
 
//   inWishlist(id) { return this.state.wishlist.some(i => i.id === id); },
//   inCart(id)     { return this.state.cart.some(i => i.id === id); },
//   cartTotal()    { return this.state.cart.reduce((acc, i) => acc + i.price * i.qty, 0); },
//   cartCount()    { return this.state.cart.reduce((acc, i) => acc + i.qty, 0); },
// };
 
// const Controller = {
//   nav(page, extra) {
//     Model.state.page = page;
//     Model.state.showFilter = false;
//     if (extra) Object.assign(Model.state, extra);
//     window.scrollTo(0, 0);
//     View.render();
//   },
 
//   addToCart(product) {
//     const ex = Model.state.cart.find(i => i.id === product.id);
//     if (ex) Model.state.cart = Model.state.cart.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
//     else    Model.state.cart = [...Model.state.cart, { ...product, qty: 1 }];
//     View.render();
//   },
 
//   removeFromCart(id) {
//     Model.state.cart = Model.state.cart.filter(i => i.id !== id);
//     View.render();
//   },
 
//   updateQty(id, delta) {
//     Model.state.cart = Model.state.cart.map(i =>
//       i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i
//     );
//     View.render();
//   },
 
//   clearCart() {
//     Model.state.cart = [];
//     View.render();
//   },
 
//   toggleWishlist(product) {
//     if (Model.inWishlist(product.id)) Model.state.wishlist = Model.state.wishlist.filter(i => i.id !== product.id);
//     else                              Model.state.wishlist = [...Model.state.wishlist, product];
//     View.render();
//   },
 
//   setSearch(value) {
//     Model.state.search = value;
//     View.render();
//   },
 
//   setFilterCat(value) {
//     Model.state.filterCat = value;
//     View.render();
//   },
 
//   setSortBy(value) {
//     Model.state.sortBy = value;
//     View.render();
//   },
 
//   clearFilters() {
//     Model.state.filterCat = "";
//     Model.state.sortBy = "";
//     View.render();
//   },
 
//   toggleFilter() {
//     Model.state.showFilter = !Model.state.showFilter;
//     View.render();
//   },
 
//   setTheme(t) {
//     Model.state.theme = t;
//     View.render();
//   },
 
//   setProductTab(tab) {
//     Model.state.productTab = tab;
//     View.render();
//     window.scrollTo(0, 0);
//   },
 
//   login() {
//     Model.state.loggedIn = true;
//     this.nav("home");
//   },
 
//   clearWishlist() {
//     Model.state.wishlist = [];
//     View.render();
//   },
 
//   updateLoginForm(field, value) {
//     Model.state.loginForm[field] = value;
//   },
// };
 
// const View = {
//   el(tag, styles, innerHTML, attrs = {}) {
//     const elem = document.createElement(tag);
//     if (styles) Object.assign(elem.style, styles);
//     if (innerHTML !== undefined) elem.innerHTML = innerHTML;
//     Object.entries(attrs).forEach(([k, v]) => elem.setAttribute(k, v));
//     return elem;
//   },
 
//   badge(count) {
//     return this.el("span", {
//       position: "absolute", top: "0", right: "0", background: "#3b82f6",
//       color: "#fff", borderRadius: "50%", width: "16px", height: "16px",
//       fontSize: "10px", fontWeight: "700", display: "flex",
//       alignItems: "center", justifyContent: "center", lineHeight: "1",
//     }, count > 9 ? "9+" : count);
//   },
 
//   iconBtnStyle() {
//     const ss = Model.getStyles();
//     return { background: "transparent", border: "none", color: ss.textMuted, cursor: "pointer", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", position: "relative" };
//   },
 
//   dropdownStyle() {
//     const ss = Model.getStyles();
//     return { position: "absolute", top: "calc(100% + 6px)", right: "0", background: ss.dropBg, border: `1px solid ${ss.dropBorder}`, borderRadius: "8px", padding: "12px 14px", minWidth: "200px", zIndex: "999", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" };
//   },
 
//   blueBtnStyle: { width: "100%", background: "#3b82f6", color: "#fff", border: "none", borderRadius: "6px", padding: "9px", fontSize: "14px", cursor: "pointer", fontWeight: "500" },
 
//   ICON: {
//     moon:    `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
//     heart:   (f) => `<svg width="18" height="18" fill="${f ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
//     cart:    `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
//     cartSm:  `<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
//     eye:     `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
//     user:    `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
//     filter:  `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
//     search:  `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
//     trash:   `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
//     arrowLeft:`<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>`,
//     heartSm: (f, c) => `<svg width="16" height="16" fill="${f ? c : 'none'}" stroke="${c}" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
//   },
 
//   injectStyles() {
//     if (document.getElementById("store-styles")) return;
//     const style = document.createElement("style");
//     style.id = "store-styles";
//     style.textContent = `
//       * { box-sizing: border-box; margin: 0; padding: 0; }
//       body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
//       .product-card { position: relative; overflow: hidden; }
//       .product-card .card-overlay {
//         position: absolute; inset: 0; background: rgba(0,0,0,0.45);
//         display: flex; align-items: center; justify-content: center; gap: 10px;
//         opacity: 0; transition: opacity 0.22s ease;
//         border-radius: 10px 10px 0 0; top: 0; height: var(--img-h, 220px);
//       }
//       .product-card:hover .card-overlay { opacity: 1; }
//       .overlay-btn {
//         width: 44px; height: 44px; border-radius: 8px; border: none; cursor: pointer;
//         display: flex; align-items: center; justify-content: center;
//         background: rgba(20,28,40,0.9); color: #fff;
//         transition: background 0.15s, transform 0.15s; backdrop-filter: blur(4px);
//       }
//       .overlay-btn:hover { background: #3b82f6; transform: scale(1.08); }
//       .wish-corner {
//         position: absolute; top: 10px; right: 10px;
//         background: rgba(0,0,0,0.45); border: none; border-radius: 50%;
//         width: 32px; height: 32px; display: flex; align-items: center;
//         justify-content: center; cursor: pointer; z-index: 2; transition: background 0.15s;
//       }
//       .wish-corner:hover { background: rgba(239,68,68,0.3); }
//       .rating-badge {
//         position: absolute; top: 10px; left: 10px;
//         background: rgba(0,0,0,0.55); color: #fff; font-size: 11px;
//         padding: 2px 8px; border-radius: 4px; z-index: 2;
//       }
//       .product-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
//       @media (max-width: 1100px) { .product-grid { grid-template-columns: repeat(3, 1fr); } }
//       @media (max-width: 760px)  { .product-grid { grid-template-columns: repeat(2, 1fr); } }
//       @media (max-width: 480px)  { .product-grid { grid-template-columns: 1fr; } }
//       .page-container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
//       nav .inner { max-width: 1280px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; height: 56px; }
//       .tab-btn { background: transparent; border: 1px solid transparent; border-radius: 6px; padding: 7px 18px; font-size: 14px; cursor: pointer; transition: background 0.15s, border-color 0.15s; }
//       .tab-btn.active { border-color: rgba(255,255,255,0.25); }
//       .sim-card { cursor: pointer; transition: transform 0.18s; }
//       .sim-card:hover { transform: translateY(-3px); }
//       .stars { color: #f59e0b; }
//     `;
//     document.head.appendChild(style);
//   },
 
//   renderNavbar() {
//     const ss = Model.getStyles();
//     const { ICON } = this;
//     const navbar = this.el("nav", { background: ss.navBg, borderBottom: `1px solid ${ss.navBorder}`, position: "sticky", top: "0", zIndex: "200" });
//     const inner = document.createElement("div"); inner.className = "inner";
 
//     const left = this.el("div", { display: "flex", alignItems: "center", gap: "28px" });
//     const logo = this.el("span", { fontWeight: "700", fontSize: "16px", cursor: "pointer", color: ss.text }, "Store");
//     logo.onclick = () => Controller.nav("home");
//     left.appendChild(logo);
//     const navLinks = this.el("div", { display: "flex", gap: "24px" });
//     ["home", "products", "categories"].forEach(p => {
//       const link = this.el("span", { fontSize: "14px", cursor: "pointer", color: Model.state.page === p ? ss.text : ss.textMuted, textDecoration: Model.state.page === p ? "underline" : "none", textTransform: "capitalize" }, p.charAt(0).toUpperCase() + p.slice(1));
//       link.onclick = () => Controller.nav(p);
//       navLinks.appendChild(link);
//     });
//     left.appendChild(navLinks);
//     inner.appendChild(left);
 
//     const right = this.el("div", { display: "flex", alignItems: "center", gap: "8px" });
 
//     const themeWrap = this.el("div", { position: "relative" });
//     const themeBtn  = this.el("button", this.iconBtnStyle(), ICON.moon);
//     const themeDrop = this.el("div", { ...this.dropdownStyle(), display: "none" });
//     ["Light", "Dark", "System"].forEach(t => {
//       const opt = this.el("button", { display: "block", width: "100%", background: Model.state.theme === t.toLowerCase() ? "rgba(59,130,246,0.15)" : "transparent", border: "none", color: ss.text, fontSize: "14px", padding: "8px 14px", textAlign: "left", cursor: "pointer", borderRadius: "4px" }, t);
//       opt.onclick = () => Controller.setTheme(t.toLowerCase());
//       themeDrop.appendChild(opt);
//     });
//     let themeTimer;
//     themeWrap.onmouseenter = () => { clearTimeout(themeTimer); themeDrop.style.display = "block"; };
//     themeWrap.onmouseleave = () => { themeTimer = setTimeout(() => { themeDrop.style.display = "none"; }, 150); };
//     themeWrap.appendChild(themeBtn); themeWrap.appendChild(themeDrop);
//     right.appendChild(themeWrap);
 
//     const wCount = Model.state.wishlist.length;
//     const wishWrap = this.el("div", { position: "relative" });
//     const wishBtn  = this.el("button", this.iconBtnStyle(), ICON.heart(false));
//     wishBtn.onclick = () => Controller.nav("wishlist");
//     if (wCount > 0) wishBtn.appendChild(this.badge(wCount));
//     const wishDrop = this.el("div", { ...this.dropdownStyle(), display: "none" });
//     wishDrop.innerHTML = `<div style="font-weight:600;font-size:14px;margin-bottom:4px;color:${ss.text}">Wishlist (${wCount})</div>`;
//     if (wCount === 0) wishDrop.innerHTML += `<div style="font-size:13px;color:${ss.textMuted};margin-bottom:12px">Your wishlist is empty</div>`;
//     else {
//       const wItems = this.el("div", { marginBottom: "10px" });
//       Model.state.wishlist.slice(0, 3).forEach(item => {
//         wItems.innerHTML += `<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><img src="${item.image}" style="width:36px;height:36px;object-fit:contain;border-radius:4px;background:#fff"/><div><div style="font-size:12px;color:${ss.text};max-width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${item.title}</div><div style="font-size:12px;color:${ss.textMuted}">$${item.price.toFixed(2)}</div></div></div>`;
//       });
//       wishDrop.appendChild(wItems);
//     }
//     const wishViewBtn = this.el("button", this.blueBtnStyle, "View Wishlist");
//     wishViewBtn.onclick = () => Controller.nav("wishlist");
//     wishDrop.appendChild(wishViewBtn);
//     let wishTimer;
//     wishWrap.onmouseenter = () => { clearTimeout(wishTimer); wishDrop.style.display = "block"; };
//     wishWrap.onmouseleave = () => { wishTimer = setTimeout(() => { wishDrop.style.display = "none"; }, 150); };
//     wishWrap.appendChild(wishBtn); wishWrap.appendChild(wishDrop);
//     right.appendChild(wishWrap);
 
//     const cCount = Model.cartCount();
//     const cartWrap = this.el("div", { position: "relative" });
//     const cartBtn  = this.el("button", this.iconBtnStyle(), ICON.cart);
//     cartBtn.onclick = () => Controller.nav("cart");
//     if (cCount > 0) cartBtn.appendChild(this.badge(cCount));
//     const cartDrop = this.el("div", { ...this.dropdownStyle(), display: "none" });
//     cartDrop.innerHTML = `<div style="font-weight:600;font-size:14px;margin-bottom:4px;color:${ss.text}">Cart (${cCount})</div>`;
//     if (cCount === 0) cartDrop.innerHTML += `<div style="font-size:13px;color:${ss.textMuted};margin-bottom:12px">Your cart is empty</div>`;
//     else {
//       const cItems = this.el("div", { marginBottom: "10px" });
//       Model.state.cart.slice(0, 4).forEach(item => {
//         const t = item.title.length > 28 ? item.title.slice(0, 28) + "..." : item.title;
//         cItems.innerHTML += `<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><img src="${item.image}" style="width:36px;height:36px;object-fit:contain;border-radius:4px;background:#fff"/><div style="flex:1;min-width:0"><div style="font-size:12px;color:${ss.text};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t}</div><div style="font-size:12px;color:${ss.textMuted}">$${item.price.toFixed(2)} × ${item.qty}</div></div></div>`;
//       });
//       cartDrop.appendChild(cItems);
//     }
//     const cartViewBtn = this.el("button", this.blueBtnStyle, "View Cart");
//     cartViewBtn.onclick = () => Controller.nav("cart");
//     cartDrop.appendChild(cartViewBtn);
//     let cartTimer;
//     cartWrap.onmouseenter = () => { clearTimeout(cartTimer); cartDrop.style.display = "block"; };
//     cartWrap.onmouseleave = () => { cartTimer = setTimeout(() => { cartDrop.style.display = "none"; }, 150); };
//     cartWrap.appendChild(cartBtn); cartWrap.appendChild(cartDrop);
//     right.appendChild(cartWrap);
 
//     const loginBtn = this.el("button", { background: "transparent", border: `1px solid ${ss.btnOutline}`, color: ss.text, borderRadius: "6px", padding: "6px 14px", fontSize: "14px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }, `${ICON.user} Login`);
//     loginBtn.onclick = () => Controller.nav("login");
//     right.appendChild(loginBtn);
 
//     inner.appendChild(right);
//     navbar.appendChild(inner);
//     return navbar;
//   },
 
//   renderSearchBar() {
//     const ss = Model.getStyles();
//     const { ICON } = this;
//     const wrap = this.el("div", { marginBottom: "24px" });
//     const row  = this.el("div", { display: "flex", gap: "12px", marginBottom: "12px" });
 
//     const searchWrap = this.el("div", { flex: "1", display: "flex", alignItems: "center", background: ss.inputBg, border: `1px solid ${ss.inputBorder}`, borderRadius: "8px", padding: "0 14px", gap: "8px" });
//     searchWrap.innerHTML = `<span style="display:flex">${ICON.search.replace('stroke="currentColor"', `stroke="${ss.textSub}"`)}</span>`;
//     const searchInput = this.el("input", { background: "transparent", border: "none", outline: "none", color: ss.text, fontSize: "14px", width: "100%", padding: "10px 0" }, undefined, { placeholder: "Search products...", type: "text", value: Model.state.search });
//     searchInput.oninput = e => Controller.setSearch(e.target.value);
//     searchWrap.appendChild(searchInput);
//     row.appendChild(searchWrap);
 
//     const filterToggle = this.el("button", { background: ss.inputBg, border: `1px solid ${ss.inputBorder}`, color: ss.text, borderRadius: "8px", padding: "0 18px", fontSize: "14px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }, `${ICON.filter} Filter`);
//     filterToggle.onclick = () => Controller.toggleFilter();
//     row.appendChild(filterToggle);
//     wrap.appendChild(row);
 
//     if (Model.state.showFilter) {
//       const filterRow = this.el("div", { display: "flex", gap: "10px", flexWrap: "wrap", padding: "12px 14px", background: ss.cardBg, border: `1px solid ${ss.cardBorder}`, borderRadius: "8px" });
 
//       const catSelect = this.el("select", { background: ss.inputBg, border: `1px solid ${ss.inputBorder}`, color: ss.text, borderRadius: "6px", padding: "6px 10px", fontSize: "13px" });
//       catSelect.innerHTML = `<option value="">All Categories</option>` + Model.CATEGORIES.map(c => `<option value="${c.id}" ${Model.state.filterCat === c.id ? "selected" : ""}>${c.label}</option>`).join("");
//       catSelect.onchange = e => Controller.setFilterCat(e.target.value);
//       filterRow.appendChild(catSelect);
 
//       const sortSelect = this.el("select", { background: ss.inputBg, border: `1px solid ${ss.inputBorder}`, color: ss.text, borderRadius: "6px", padding: "6px 10px", fontSize: "13px" });
//       sortSelect.innerHTML = `<option value="">Sort By</option><option value="price-asc" ${Model.state.sortBy === "price-asc" ? "selected" : ""}>Price: Low to High</option><option value="price-desc" ${Model.state.sortBy === "price-desc" ? "selected" : ""}>Price: High to Low</option><option value="rating" ${Model.state.sortBy === "rating" ? "selected" : ""}>Top Rated</option>`;
//       sortSelect.onchange = e => Controller.setSortBy(e.target.value);
//       filterRow.appendChild(sortSelect);
 
//       const clearBtn = this.el("button", { background: "transparent", border: `1px solid ${ss.inputBorder}`, color: ss.textMuted, borderRadius: "6px", padding: "6px 12px", fontSize: "13px", cursor: "pointer" }, "Clear");
//       clearBtn.onclick = () => Controller.clearFilters();
//       filterRow.appendChild(clearBtn);
//       wrap.appendChild(filterRow);
//     }
//     return wrap;
//   },
 
//   renderProductCard(product) {
//     const ss = Model.getStyles();
//     const { ICON } = this;
//     const wished = Model.inWishlist(product.id);
//     const carted = Model.inCart(product.id);
 
//     const card = this.el("div", { background: ss.cardBg, border: `1px solid ${ss.cardBorder}`, borderRadius: "10px", overflow: "hidden", display: "flex", flexDirection: "column" });
//     card.className = "product-card";
 
//     const imgWrap = this.el("div", { position: "relative", background: "#fff", height: "220px", display: "flex", alignItems: "center", justifyContent: "center" });
//     const img = this.el("img", { maxHeight: "200px", maxWidth: "100%", objectFit: "contain", padding: "16px" });
//     img.src = product.image; img.alt = product.title;
//     imgWrap.appendChild(img);
 
//     const wishBtn = document.createElement("button");
//     wishBtn.className = "wish-corner";
//     wishBtn.style.color = wished ? "#ef4444" : "#fff";
//     wishBtn.innerHTML = ICON.heartSm(wished, wished ? "#ef4444" : "#fff");
//     wishBtn.onclick = e => { e.stopPropagation(); Controller.toggleWishlist(product); };
//     imgWrap.appendChild(wishBtn);
 
//     const ratingBadge = document.createElement("span");
//     ratingBadge.className = "rating-badge";
//     ratingBadge.innerHTML = `★ ${product.rating}`;
//     imgWrap.appendChild(ratingBadge);
 
//     const overlay = document.createElement("div");
//     overlay.className = "card-overlay";
 
//     const eyeBtn = document.createElement("button");
//     eyeBtn.className = "overlay-btn"; eyeBtn.innerHTML = ICON.eye; eyeBtn.title = "View product";
//     eyeBtn.onclick = e => { e.stopPropagation(); Model.state.productTab = "description"; Controller.nav("product", { productId: product.id }); };
 
//     const cartOverlayBtn = document.createElement("button");
//     cartOverlayBtn.className = "overlay-btn"; cartOverlayBtn.innerHTML = ICON.cartSm; cartOverlayBtn.title = "Add to cart";
//     cartOverlayBtn.onclick = e => { e.stopPropagation(); Controller.addToCart(product); };
 
//     overlay.appendChild(eyeBtn); overlay.appendChild(cartOverlayBtn);
//     imgWrap.appendChild(overlay);
//     card.appendChild(imgWrap);
 
//     const body = this.el("div", { padding: "12px 14px", flex: "1", display: "flex", flexDirection: "column", gap: "6px" });
//     const title = this.el("div", { fontSize: "13px", color: ss.text, lineHeight: "1.4", flex: "1" }, product.title.length > 52 ? product.title.slice(0, 52) + "..." : product.title);
//     const price = this.el("div", { fontSize: "16px", fontWeight: "700", color: ss.text }, `$${product.price.toFixed(2)}`);
//     const addBtn = this.el("button", { ...this.blueBtnStyle, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", background: carted ? "#1d4ed8" : "#3b82f6" }, `${ICON.cartSm} ${carted ? "Add More" : "Add to Cart"}`);
//     addBtn.onclick = () => Controller.addToCart(product);
 
//     body.appendChild(title); body.appendChild(price); body.appendChild(addBtn);
//     card.appendChild(body);
//     return card;
//   },
 
//   renderProductGrid(products) {
//     const grid = document.createElement("div");
//     grid.className = "product-grid";
//     products.forEach(p => grid.appendChild(this.renderProductCard(p)));
//     return grid;
//   },
 
//   renderHomePage() {
//     const page = this.el("div", { paddingBottom: "40px" });
//     const wrap = document.createElement("div"); wrap.className = "page-container";
//     wrap.appendChild(this.el("h1", { fontSize: "24px", fontWeight: "700", margin: "28px 0 20px" }, "Online Store"));
//     wrap.appendChild(this.renderSearchBar());
//     wrap.appendChild(this.renderProductGrid(Model.getFilteredProducts()));
//     page.appendChild(wrap);
//     return page;
//   },
 
//   renderProductsPage() {
//     const page = this.el("div", { paddingBottom: "40px" });
//     const wrap = document.createElement("div"); wrap.className = "page-container";
//     wrap.appendChild(this.el("h1", { fontSize: "24px", fontWeight: "700", margin: "28px 0 20px" }, "Products"));
//     wrap.appendChild(this.renderSearchBar());
//     wrap.appendChild(this.renderProductGrid(Model.getFilteredProducts()));
//     page.appendChild(wrap);
//     return page;
//   },
 
//   renderCategoriesPage() {
//     const ss = Model.getStyles();
//     const page = this.el("div", { paddingBottom: "40px" });
//     const wrap = document.createElement("div"); wrap.className = "page-container";
//     wrap.appendChild(this.el("h1", { fontSize: "24px", fontWeight: "700", margin: "28px 0 24px" }, "Categories"));
//     const grid = this.el("div", { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" });
//     Model.CATEGORIES.forEach(c => {
//       const card = this.el("div", { background: ss.cardBg, border: `1px solid ${ss.cardBorder}`, borderRadius: "10px", padding: "24px" });
//       card.appendChild(this.el("div", { fontSize: "18px", fontWeight: "700", marginBottom: "6px", color: ss.text }, c.label));
//       card.appendChild(this.el("div", { fontSize: "13px", color: ss.textMuted, marginBottom: "16px" }, c.desc));
//       const btn = this.el("button", { width: "100%", background: "transparent", border: `1px solid ${ss.btnOutline}`, color: ss.text, borderRadius: "6px", padding: "9px", fontSize: "14px", cursor: "pointer", fontWeight: "500" }, "View Products");
//       btn.onclick = () => { Model.state.filterCat = c.id; Controller.nav("products"); };
//       card.appendChild(btn);
//       grid.appendChild(card);
//     });
//     wrap.appendChild(grid);
//     page.appendChild(wrap);
//     return page;
//   },
 
//   renderProductPage() {
//     const ss = Model.getStyles();
//     const { ICON } = this;
//     const product = Model.PRODUCTS.find(p => p.id === Model.state.productId);
//     if (!product) { Controller.nav("products"); return this.el("div", {}, ""); }
 
//     const wished  = Model.inWishlist(product.id);
//     const similar = Model.PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
 
//     const page = this.el("div", { paddingBottom: "60px" });
//     const wrap = document.createElement("div"); wrap.className = "page-container";
 
//     const back = this.el("div", { display: "flex", alignItems: "center", gap: "6px", color: ss.textMuted, fontSize: "14px", cursor: "pointer", padding: "20px 0 24px", width: "fit-content" }, `${ICON.arrowLeft} Back to products`);
//     back.onclick = () => Controller.nav("products");
//     wrap.appendChild(back);
 
//     const layout = this.el("div", { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" });
 
//     const imgSide = this.el("div", { background: "#fff", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "460px", padding: "32px" });
//     const bigImg = this.el("img", { maxWidth: "100%", maxHeight: "400px", objectFit: "contain" });
//     bigImg.src = product.image; bigImg.alt = product.title;
//     imgSide.appendChild(bigImg);
//     layout.appendChild(imgSide);
 
//     const info = document.createElement("div");
 
//     const catTag = this.el("span", { background: ss.cardBg, border: `1px solid ${ss.cardBorder}`, borderRadius: "20px", padding: "3px 12px", fontSize: "12px", color: ss.textMuted }, product.category);
//     info.appendChild(catTag);
//     info.appendChild(this.el("h1", { fontSize: "26px", fontWeight: "700", margin: "12px 0 8px", lineHeight: "1.3", color: ss.text }, product.title));
 
//     const starsEl = this.el("div", { display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" });
//     let starsHtml = '<span class="stars">';
//     for (let i = 0; i < 5; i++) starsHtml += i < Math.floor(product.rating) ? "★" : "☆";
//     starsHtml += "</span>";
//     starsEl.innerHTML = starsHtml + `<span style="font-size:14px;color:${ss.textMuted}">${product.rating} (${product.reviews} reviews)</span>`;
//     info.appendChild(starsEl);
//     info.appendChild(this.el("div", { fontSize: "28px", fontWeight: "800", color: ss.text, marginBottom: "20px" }, `$${product.price.toFixed(2)}`));
 
//     const tabsWrap = this.el("div", { display: "flex", gap: "4px", borderBottom: `1px solid ${ss.cardBorder}`, marginBottom: "16px" });
//     ["description", "details", "shipping"].forEach(tab => {
//       const btn = document.createElement("button");
//       btn.className = `tab-btn${Model.state.productTab === tab ? " active" : ""}`;
//       btn.style.color = Model.state.productTab === tab ? ss.text : ss.textMuted;
//       btn.style.background = Model.state.productTab === tab ? ss.cardBg : "transparent";
//       btn.style.borderColor = Model.state.productTab === tab ? ss.cardBorder : "transparent";
//       btn.textContent = tab.charAt(0).toUpperCase() + tab.slice(1);
//       btn.onclick = () => Controller.setProductTab(tab);
//       tabsWrap.appendChild(btn);
//     });
//     info.appendChild(tabsWrap);
 
//     let tabContent = "";
//     if (Model.state.productTab === "description") tabContent = product.description;
//     else if (Model.state.productTab === "details") tabContent = `Category: ${product.category}\nRating: ${product.rating} / 5\nReviews: ${product.reviews}\nPrice: $${product.price.toFixed(2)}`;
//     else tabContent = "Standard shipping: 5–7 business days\nExpress shipping: 2–3 business days\nFree shipping on orders over $50.\nReturn policy: 30-day returns accepted.";
//     info.appendChild(this.el("p", { fontSize: "14px", color: ss.textMuted, lineHeight: "1.75", marginBottom: "24px", whiteSpace: "pre-line" }, tabContent));
 
//     const qtyRow = this.el("div", { display: "flex", alignItems: "center", gap: "16px" });
//     qtyRow.appendChild(this.el("span", { fontSize: "14px", fontWeight: "500", color: ss.text }, "Quantity"));
//     const qtyControl = this.el("div", { display: "flex", alignItems: "center", border: `1px solid ${ss.qtyBorder}`, borderRadius: "8px", overflow: "hidden" });
//     let liveQty = 1;
//     const qtyDisplay = this.el("span", { padding: "0 18px", fontSize: "15px", color: ss.text, minWidth: "44px", textAlign: "center", display: "inline-block" }, "1");
//     const minusBtn = this.el("button", { background: ss.qtyBg, border: "none", color: ss.text, width: "36px", height: "36px", cursor: "pointer", fontSize: "18px" }, "−");
//     minusBtn.onclick = () => { liveQty = Math.max(1, liveQty - 1); qtyDisplay.textContent = liveQty; };
//     const plusBtn = this.el("button", { background: ss.qtyBg, border: "none", color: ss.text, width: "36px", height: "36px", cursor: "pointer", fontSize: "18px" }, "+");
//     plusBtn.onclick = () => { liveQty++; qtyDisplay.textContent = liveQty; };
//     qtyControl.appendChild(minusBtn); qtyControl.appendChild(qtyDisplay); qtyControl.appendChild(plusBtn);
//     qtyRow.appendChild(qtyControl);
//     info.appendChild(qtyRow);
 
//     const actionRow = this.el("div", { display: "flex", gap: "10px", marginTop: "16px", alignItems: "center" });
//     const bigAddBtn = this.el("button", { flex: "1", background: "#3b82f6", color: "#fff", border: "none", borderRadius: "8px", padding: "12px 0", fontSize: "15px", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }, `${ICON.cart} Add to Cart`);
//     bigAddBtn.onclick = () => { for (let i = 0; i < liveQty; i++) Controller.addToCart(product); };
//     const wishToggle = this.el("button", { width: "44px", height: "44px", border: `1px solid ${ss.cardBorder}`, background: "transparent", borderRadius: "8px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: wished ? "#ef4444" : ss.textMuted }, ICON.heartSm(wished, wished ? "#ef4444" : ss.textMuted));
//     wishToggle.onclick = () => Controller.toggleWishlist(product);
//     actionRow.appendChild(bigAddBtn); actionRow.appendChild(wishToggle);
//     info.appendChild(actionRow);
 
//     layout.appendChild(info);
//     wrap.appendChild(layout);
 
//     if (similar.length > 0) {
//       const simSection = this.el("div", { marginTop: "56px" });
//       simSection.appendChild(this.el("h2", { fontSize: "20px", fontWeight: "700", marginBottom: "20px", color: ss.text }, "Similar Products"));
//       const simGrid = document.createElement("div"); simGrid.className = "product-grid";
//       similar.forEach(p => { const card = this.renderProductCard(p); card.classList.add("sim-card"); simGrid.appendChild(card); });
//       simSection.appendChild(simGrid);
//       wrap.appendChild(simSection);
//     }
 
//     page.appendChild(wrap);
//     return page;
//   },
 
//   renderCartPage() {
//     const ss = Model.getStyles();
//     const { ICON } = this;
//     const page = this.el("div", { paddingBottom: "40px" });
//     const wrap = document.createElement("div"); wrap.className = "page-container";
//     wrap.appendChild(this.el("h1", { fontSize: "24px", fontWeight: "700", margin: "28px 0 24px", color: ss.text }, "Shopping Cart"));
 
//     if (Model.state.cart.length === 0) {
//       const empty = this.el("div", { color: ss.textMuted, fontSize: "16px" }, "Your cart is empty. ");
//       const link = this.el("span", { color: "#3b82f6", cursor: "pointer" }, "Continue shopping →");
//       link.onclick = () => Controller.nav("products");
//       empty.appendChild(link);
//       wrap.appendChild(empty); page.appendChild(wrap);
//       return page;
//     }
 
//     const grid = this.el("div", { display: "grid", gridTemplateColumns: "1fr 320px", gap: "24px", alignItems: "start" });
//     const itemsWrap = document.createElement("div");
 
//     Model.state.cart.forEach(item => {
//       const row = this.el("div", { display: "flex", alignItems: "center", gap: "16px", padding: "16px 0", borderBottom: `1px solid ${ss.cardBorder}` });
//       const img = this.el("img", { width: "80px", height: "80px", objectFit: "contain", background: "#fff", borderRadius: "8px", padding: "6px" });
//       img.src = item.image; img.alt = item.title;
//       row.appendChild(img);
 
//       const info = document.createElement("div"); info.style.flex = "1";
//       info.appendChild(this.el("div", { fontSize: "14px", fontWeight: "500", marginBottom: "4px", color: ss.text }, item.title));
//       info.appendChild(this.el("div", { fontSize: "13px", color: ss.textMuted }, `$${item.price.toFixed(2)}`));
 
//       const qtyRow = this.el("div", { display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" });
//       const mb = this.el("button", { background: ss.qtyBg, border: `1px solid ${ss.qtyBorder}`, color: ss.text, width: "28px", height: "28px", borderRadius: "6px", cursor: "pointer", fontSize: "16px" }, "−");
//       mb.onclick = () => Controller.updateQty(item.id, -1);
//       const qsp = this.el("span", { fontSize: "14px", minWidth: "20px", textAlign: "center", color: ss.text }, item.qty);
//       const pb = this.el("button", { background: ss.qtyBg, border: `1px solid ${ss.qtyBorder}`, color: ss.text, width: "28px", height: "28px", borderRadius: "6px", cursor: "pointer", fontSize: "16px" }, "+");
//       pb.onclick = () => Controller.updateQty(item.id, 1);
//       const rb = this.el("button", { background: "transparent", border: "none", color: ss.textMuted, cursor: "pointer", padding: "0 4px" }, ICON.trash);
//       rb.onclick = () => Controller.removeFromCart(item.id);
//       qtyRow.appendChild(mb); qtyRow.appendChild(qsp); qtyRow.appendChild(pb); qtyRow.appendChild(rb);
//       info.appendChild(qtyRow);
//       row.appendChild(info);
//       row.appendChild(this.el("div", { fontSize: "16px", fontWeight: "600", color: ss.text }, `$${(item.price * item.qty).toFixed(2)}`));
//       itemsWrap.appendChild(row);
//     });

//     const btnRow = this.el("div", { display: "flex", gap: "12px", marginTop: "16px" });
//     const clrBtn = this.el("button", { background: "transparent", border: `1px solid ${ss.btnOutline}`, color: ss.text, borderRadius: "6px", padding: "8px 16px", fontSize: "14px", cursor: "pointer" }, "Clear Cart");
//     clrBtn.onclick = () => Controller.clearCart();
//     const cntBtn = this.el("button", { background: "transparent", border: `1px solid ${ss.btnOutline}`, color: ss.text, borderRadius: "6px", padding: "8px 16px", fontSize: "14px", cursor: "pointer" }, "Continue Shopping");
//     cntBtn.onclick = () => Controller.nav("products");
//     btnRow.appendChild(clrBtn); btnRow.appendChild(cntBtn);
//     itemsWrap.appendChild(btnRow);
//     grid.appendChild(itemsWrap);
 
//     const ct = Model.cartTotal(); const tax = ct * 0.1; const total = ct + tax;
//     const summary = this.el("div", { background: ss.summaryBg, border: `1px solid ${ss.cardBorder}`, borderRadius: "10px", padding: "20px" });
//     summary.appendChild(this.el("div", { fontSize: "16px", fontWeight: "700", marginBottom: "16px", color: ss.text }, "Order Summary"));
//     [["Subtotal", `$${ct.toFixed(2)}`], ["Shipping", "Free"], ["Tax", `$${tax.toFixed(2)}`]].forEach(([label, val]) => {
//       const r = this.el("div", { display: "flex", justifyContent: "space-between", marginBottom: "10px", fontSize: "14px" });
//       r.appendChild(this.el("span", { color: ss.textMuted }, label));
//       r.appendChild(this.el("span", { color: ss.text }, val));
//       summary.appendChild(r);
//     });
//     const totalRow = this.el("div", { borderTop: `1px solid ${ss.cardBorder}`, paddingTop: "14px", display: "flex", justifyContent: "space-between", fontWeight: "700", fontSize: "16px", marginBottom: "16px", color: ss.text });
//     totalRow.appendChild(this.el("span", {}, "Total"));
//     totalRow.appendChild(this.el("span", {}, `$${total.toFixed(2)}`));
//     summary.appendChild(totalRow);
//     const chkBtn = this.el("button", { ...this.blueBtnStyle, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }, "Checkout →");
//     summary.appendChild(chkBtn);
//     grid.appendChild(summary);
//     wrap.appendChild(grid);
//     page.appendChild(wrap);
//     return page;
//   },

//   renderWishlistPage() {
//     const ss = Model.getStyles();
//     const page = this.el("div", { paddingBottom: "40px" });
//     const wrap = document.createElement("div"); wrap.className = "page-container";
//     const header = this.el("div", { display: "flex", justifyContent: "space-between", alignItems: "center", margin: "28px 0 24px" });
//     header.appendChild(this.el("h1", { fontSize: "24px", fontWeight: "700", color: ss.text }, `My Wishlist (${Model.state.wishlist.length} items)`));
//     if (Model.state.wishlist.length > 0) {
//       const clrBtn = this.el("button", { background: "transparent", border: `1px solid ${ss.btnOutline}`, color: ss.text, borderRadius: "6px", padding: "8px 16px", fontSize: "14px", cursor: "pointer" }, "Clear Wishlist");
//       clrBtn.onclick = () => Controller.clearWishlist();
//       header.appendChild(clrBtn);
//     }
//     wrap.appendChild(header);
//     if (Model.state.wishlist.length === 0) { wrap.appendChild(this.el("div", { color: ss.textMuted }, "Your wishlist is empty.")); }
//     else wrap.appendChild(this.renderProductGrid(Model.state.wishlist));
//     page.appendChild(wrap);
//     return page;
//   },
 

//   renderLoginPage() {
//     const ss = Model.getStyles();
//     const wrap = this.el("div", { display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 24px" });
//     const card = this.el("div", { background: ss.cardBg, border: `1px solid ${ss.cardBorder}`, borderRadius: "12px", padding: "32px", width: "100%", maxWidth: "440px" });
//     card.appendChild(this.el("h2", { fontSize: "22px", fontWeight: "700", marginBottom: "6px", color: ss.text }, "Login"));
//     card.appendChild(this.el("p", { color: ss.textMuted, fontSize: "14px", marginBottom: "24px" }, "Enter your credentials to access your account"));
 
//     const mkField = (label, type, placeholder, field) => {
//       const w = this.el("div", { marginBottom: "16px" });
//       w.appendChild(this.el("label", { display: "block", fontSize: "14px", fontWeight: "500", marginBottom: "6px", color: ss.text }, label));
//       const input = this.el("input", { width: "100%", background: ss.inputBg, border: `1px solid ${ss.inputBorder}`, borderRadius: "6px", padding: "10px 14px", color: ss.text, fontSize: "14px", outline: "none", boxSizing: "border-box" }, undefined, { type, placeholder, value: Model.state.loginForm[field] });
//       input.oninput = e => Controller.updateLoginForm(field, e.target.value);
//       w.appendChild(input);
//       return w;
//     };
//     card.appendChild(mkField("Email",    "email",    "your@email.com", "email"));
//     card.appendChild(mkField("Password", "password", "••••••••",       "password"));
 
//     const loginBtn = this.el("button", { ...this.blueBtnStyle, marginBottom: "16px" }, "Login");
//     loginBtn.onclick = () => Controller.login();
//     card.appendChild(loginBtn);
//     card.appendChild(this.el("div", { textAlign: "center", fontSize: "14px", color: ss.textMuted }, `Don't have an account? <span style="color:#3b82f6;cursor:pointer">Register</span>`));
//     wrap.appendChild(card);
//     return wrap;
//   },
  
//   renderFooter() {
//     const ss = Model.getStyles();
//     const footer = this.el("footer", { background: ss.footerBg, padding: "40px 0 24px", marginTop: "40px", borderTop: `1px solid ${ss.navBorder}` });
//     const wrap = document.createElement("div"); wrap.className = "page-container";
//     const grid = this.el("div", { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "32px", marginBottom: "32px" });
 
//     const brand = document.createElement("div");
//     brand.appendChild(this.el("div", { fontWeight: "700", fontSize: "16px", marginBottom: "10px", color: ss.text }, "Store"));
//     brand.appendChild(this.el("div", { fontSize: "13px", color: ss.textMuted, lineHeight: "1.6", marginBottom: "12px" }, "Your one-stop shop for all your shopping needs. Quality products, competitive prices, and exceptional service."));
//     const socials = this.el("div", { display: "flex", gap: "12px" });
//     ["F","I","T","Y"].forEach(ico => socials.appendChild(this.el("div", { width: "28px", height: "28px", border: `1px solid ${ss.btnOutline}`, borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "11px", color: ss.textMuted }, ico)));
//     brand.appendChild(socials); grid.appendChild(brand);
 
//     const shop = document.createElement("div");
//     shop.appendChild(this.el("div", { fontWeight: "600", fontSize: "14px", marginBottom: "12px", color: ss.text }, "Shop"));
//     ["All Products","Categories","Wishlist","Cart"].forEach(l => {
//       const link = this.el("div", { fontSize: "13px", color: ss.textMuted, marginBottom: "8px", cursor: "pointer" }, l);
//       link.onclick = () => Controller.nav(l.toLowerCase().replace(" ", ""));
//       shop.appendChild(link);
//     });
//     grid.appendChild(shop);
 
//     const account = document.createElement("div");
//     account.appendChild(this.el("div", { fontWeight: "600", fontSize: "14px", marginBottom: "12px", color: ss.text }, "Account"));
//     ["Login","Register","My Account","Order History"].forEach(l => account.appendChild(this.el("div", { fontSize: "13px", color: ss.textMuted, marginBottom: "8px", cursor: "pointer" }, l)));
//     grid.appendChild(account);
 
//     const contact = document.createElement("div");
//     contact.appendChild(this.el("div", { fontWeight: "600", fontSize: "14px", marginBottom: "12px", color: ss.text }, "Contact"));
//     ["📍 123 Shopping Street, Retail City, 10001","📞 (123) 456-7890","✉️ info@store.com"].forEach(l => contact.appendChild(this.el("div", { fontSize: "13px", color: ss.textMuted, marginBottom: "8px" }, l)));
//     grid.appendChild(contact);
 
//     wrap.appendChild(grid);
//     const bottom = this.el("div", { borderTop: `1px solid ${ss.navBorder}`, paddingTop: "16px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" });
//     bottom.appendChild(this.el("div", { fontSize: "12px", color: ss.textSub }, "© 2023 Store. All rights reserved."));
//     const links = this.el("div", { display: "flex", gap: "16px" });
//     ["Privacy Policy","Terms of Service","Shipping Policy"].forEach(l => links.appendChild(this.el("span", { fontSize: "12px", color: ss.textSub, cursor: "pointer" }, l)));
//     bottom.appendChild(links);
//     wrap.appendChild(bottom);
//     footer.appendChild(wrap);
//     return footer;
//   },
  
//   render() {
//     this.injectStyles();
//     const ss = Model.getStyles();
//     const app = document.getElementById("app");
//     app.innerHTML = "";
//     app.style.background = ss.bg;
//     app.style.minHeight   = "100vh";
//     app.style.color       = ss.text;
 
//     app.appendChild(this.renderNavbar());
 

//     const pages = {
//       home:       () => this.renderHomePage(),
//       products:   () => this.renderProductsPage(),
//       categories: () => this.renderCategoriesPage(),
//       cart:       () => this.renderCartPage(),
//       wishlist:   () => this.renderWishlistPage(),
//       login:      () => this.renderLoginPage(),
//       product:    () => this.renderProductPage(),
//     };
//     const pageRenderer = pages[Model.state.page];
//     if (pageRenderer) app.appendChild(pageRenderer());
 
//     app.appendChild(this.renderFooter());
//   },
// };

// View.render();






