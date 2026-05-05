
class AgroTechMarketplace {
    constructor() {
        this.cart = [];
        this.products = [
            {
                id: 1,
                name: 'Organic Tomatoes',
                category: 'vegetables',
                price: 4.99,
                unit: 'per kg',
                farmer: 'John Farm',
                description: 'Fresh organic tomatoes grown without pesticides',
                badges: ['organic', 'fresh'],
                image: "https://i.pinimg.com/736x/94/85/eb/9485eb2e53dc2df27269fe4e5b0f181a.jpg"
            },
            {
                id: 2,
                name: 'Free-Range Eggs',
                category: 'dairy',
                price: 6.50,
                unit: 'per dozen',
                farmer: 'Mary\'s Farm',
                description: 'Farm-fresh eggs from free-range chickens',
                badges: ['fresh', 'local'],
                image: 'https://i.pinimg.com/1200x/a6/f1/74/a6f1743901917a98422e197cbeda6d88.jpg'
            },
            {
                id: 3,
                name: 'Fresh Milk',
                category: 'dairy',
                price: 3.25,
                unit: 'per liter',
                farmer: 'Green Valley',
                description: 'Pure fresh milk from grass-fed cows',
                badges: ['fresh', 'organic'],
                image: 'https://i.pinimg.com/736x/d9/01/f2/d901f2ee170d0316007de4e254d07778.jpg'
            },
            {
                id: 4,
                name: 'Organic Carrots',
                category: 'vegetables',
                price: 2.99,
                unit: 'per kg',
                farmer: 'Sunny Acres',
                description: 'Sweet organic carrots perfect for cooking',
                badges: ['organic'],
                image: 'https://i.pinimg.com/736x/cf/6d/69/cf6d693c79d55a650ccbf17e2db5044b.jpg'
            },
            {
                id: 5,
                name: 'Fresh Apples',
                category: 'fruits',
                price: 5.99,
                unit: 'per kg',
                farmer: 'Orchard Hills',
                description: 'Crisp and juicy apples straight from the orchard',
                badges: ['fresh', 'local'],
                image: 'https://i.pinimg.com/736x/41/90/1b/41901b1c05226e911397129c6d743d9c.jpg'
            },
            {
                id: 6,
                name: 'Organic Spinach',
                category: 'vegetables',
                price: 3.75,
                unit: 'per bunch',
                farmer: 'Green Leaf Farm',
                description: 'Nutrient-rich organic spinach leaves',
                badges: ['organic', 'fresh'],
                image: 'https://i.pinimg.com/736x/54/32/d3/5432d3a4d53ba0a76197654d63596aac.jpg'
            },
            {
                id: 7,
                name: 'Farm Honey',
                category: 'pantry',
                price: 12.99,
                unit: 'per jar',
                farmer: 'Bee Happy Farm',
                description: 'Pure raw honey from local beehives',
                badges: ['organic', 'local'],
                image: 'https://i.pinimg.com/736x/97/75/75/97757562f94ea099d38a5157842f247c.jpg'
            },
            {
                id: 8,
                name: 'Fresh Strawberries',
                category: 'fruits',
                price: 7.50,
                unit: 'per basket',
                farmer: 'Berry Fields',
                description: 'Sweet and juicy strawberries picked fresh',
                badges: ['fresh'],
                image: 'https://i.pinimg.com/736x/45/83/ce/4583cecbafc77226032522827730ea90.jpg'
            },
            {
                id: 9,
                name: 'Organic Potatoes',
                category: 'vegetables',
                price: 2.50,
                unit: 'per kg',
                farmer: 'Earth Harvest',
                description: 'Versatile organic potatoes for all your cooking needs',
                badges: ['organic'],
                image: 'https://i.pinimg.com/736x/e3/78/d7/e378d7c9295530c3b2d96a5db2c5bd09.jpg'
            }
        ];

        this.init();
    }

    init() {
        this.renderProducts();
        this.setupEventListeners();
        this.setupFilters();
        this.loadCartFromStorage();
        this.updateCartUI();
    }

    setupEventListeners() {
        // Mobile Menu
        /* const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-link');
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('open');
            });
        } */
       const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-link');
const navItems = document.querySelectorAll('.nav-link a');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
    // when i click a link the hamburger should close
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navMenu.classList.remove('open'); 
        });
    });
}

        // Cart Sidebar Toggles
        const cartBtn = document.getElementById('cartBtn');
        const cartSidebar = document.getElementById('cartSidebar');
        const closeCart = document.getElementById('closeCart');

        if (cartBtn) {
            cartBtn.addEventListener('click', () => {
                cartSidebar.classList.add('opend');
            });
        }

        if (closeCart) {
            closeCart.addEventListener('click', () => {
                cartSidebar.classList.remove('opend');
            });
        }

        // Newsletter
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleNewsletter();
            });
        }

        // Checkout Button Listener
        const checkoutBtn = document.querySelector('.checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                this.checkout();
            });
        }
    }

    renderProducts() {
        const productsGrid = document.getElementById('productsGrid');
        if (!productsGrid) return;

        productsGrid.innerHTML = this.products.map(product => `
            <div class="product-card" data-category="${product.category}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" class="IMG">
                    <div class="product-badges">
                        ${product.badges.map(badge => `<span class="badge ${badge}">${badge}</span>`).join('')}
                    </div>
                    <div class="farmer-info">
                        <i class="fas fa-user-tie"></i> ${product.farmer}
                    </div>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-category">${product.category}</p>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">
                        <span class="current-price">$${product.price}</span>
                        <span class="unit">${product.unit}</span>
                    </div>
                    <button class="btn btn-primary add-to-cart" onclick="agroMarketplace.addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        `).join('');
    }

    setupFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                this.filterProducts(filter);
            });
        });
    }

    filterProducts(category) {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({ ...product, quantity: 1 });
        }

        this.saveCartToStorage();
        this.updateCartUI();
        this.showAddToCartAnimation(productId);
    }

    updateQuantity(productId, newQuantity) {
        if (newQuantity <= 0) {
            this.removeFromCart(productId);
            return;
        }
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            item.quantity = newQuantity;
            this.saveCartToStorage();
            this.updateCartUI();
        }
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCartToStorage();
        this.updateCartUI();
    }

    updateCartUI() {
        const cartCount = document.querySelector('.cart-count');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');

        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCount) {
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        }

        if (cartItems) {
            if (this.cart.length === 0) {
                cartItems.innerHTML = '<div class="empty-cart"><p>Your cart is empty</p></div>';
            } else {
                cartItems.innerHTML = this.cart.map(item => `
                    <div class="cart-item">
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <p class="cart-item-price">$${item.price}</p>
                            <div class="cart-item-controls">
                                <button onclick="agroMarketplace.updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                                <span>${item.quantity}</span>
                                <button onclick="agroMarketplace.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                            </div>
                        </div>
                        <div class="cart-item-actions">
                            <span class="item-total">$${(item.price * item.quantity).toFixed(2)}</span>
                            <button onclick="agroMarketplace.removeFromCart(${item.id})" class="remove-item">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `).join('');
            }
        }

        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        if (cartTotal) cartTotal.textContent = total.toFixed(2);
    }

    showAddToCartAnimation(productId) {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            cartCount.style.animation = 'bounce 0.6s ease';
            setTimeout(() => { cartCount.style.animation = ''; }, 600);
        }
    }

    saveCartToStorage() {
        localStorage.setItem('agroTechCart', JSON.stringify(this.cart));
    }

    loadCartFromStorage() {
        const savedCart = localStorage.getItem('agroTechCart');
        if (savedCart) this.cart = JSON.parse(savedCart);
    }

    handleNewsletter() {
        const button = document.querySelector('.newsletter-form button');
        if (!button) return;
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
        button.disabled = true;
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 3000);
    }

    checkout() {
        if (this.cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        alert(`Order successful!\nTotal: $${total.toFixed(2)}\nYour fresh products are on the way!`);
        this.cart = [];
        this.saveCartToStorage();
        this.updateCartUI();
        document.getElementById('cartSidebar').classList.remove('open');
    }
}

// Initialization
let agroMarketplace;
document.addEventListener('DOMContentLoaded', () => {
    agroMarketplace = new AgroTechMarketplace();

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
    });
});