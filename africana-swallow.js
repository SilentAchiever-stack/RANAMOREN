// Africana Swallow Restaurant JavaScript
class AfricanaSwallow {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('africana-cart')) || [];
        this.menuItems = [];

        this.init();
    }

    init() {
        this.createMenuItems();
        this.setupEventListeners();
        this.renderMenu();
        this.updateCartUI();
        this.setupSmoothScrolling();
    }

    createMenuItems() {
        this.menuItems = [
            // Rice Dishes
            {
                id: 1,
                name: "Jollof Rice",
                category: "rice",
                price: 2500,
                description: "The crown jewel of West African cuisine. Perfectly seasoned rice cooked in rich tomato sauce with aromatic spices.",
                image: "https://i.pinimg.com/1200x/e3/d4/e9/e3d4e9461a93889cd0224b0387b3e9cb.jpg",
                popular: true
            },
            {
                id: 2,
                name: "Fried Rice",
                category: "rice",
                price: 2800,
                description: "Colorful mixed rice with vegetables, chicken, and prawns. A delightful fusion of flavors and textures.",
                image: "https://i.pinimg.com/736x/3c/1e/ac/3c1eac3384402a669fc7c7c769132712.jpg",
                popular: false
            },
            {
                id: 3,
                name: "Coconut Rice",
                category: "rice",
                price: 2200,
                description: "Fragrant rice cooked in rich coconut milk with subtle spices. A creamy and aromatic delight.",
                image: "https://i.pinimg.com/1200x/77/ac/ec/77acec5a999fe6a5baa90bc54ca544e8.jpg",
                popular: false
            },
            {
                id: 4,
                name: "Ofada Rice",
                category: "rice",
                price: 3000,
                description: "Local Nigerian rice served with spicy ofada sauce. An authentic taste of tradition.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2J99EC0RBHY-WxKxDKGiPH2DwBjegc4rSHA&s",
                popular: false
            },

            // Swallow
            {
                id: 5,
                name: "Pounded Yam",
                category: "swallow",
                price: 2500,
                description: "Smooth, stretchy perfection made from fresh yam. The ultimate comfort food served with your choice of soup.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOD_PHNa9sVktSnfmiGhNF0_Ual93JfDKhg&s",
                popular: true
            },
            {
                id: 6,
                name: "Amala",
                category: "swallow",
                price: 2000,
                description: "Traditional Yoruba delicacy made from yam flour. Dark, smooth, and incredibly satisfying.",
                image: "https://i.pinimg.com/1200x/01/e3/bd/01e3bddec2ef693e3ef996b92abef817.jpg",
                popular: true
            },
            {
                id: 7,
                name: "Eba (Garri)",
                category: "swallow",
                price: 1200,
                description: "Classic Nigerian staple made from cassava flour. Simple, filling, and perfect with any soup.",
                image: "https://i.pinimg.com/736x/2e/5f/42/2e5f425614604166648b365b6a80508e.jpg",
                popular: false
            },
            {
                id: 8,
                name: "Fufu",
                category: "swallow",
                price: 1600,
                description: "Soft and stretchy made from cassava and plantain. A beloved West African staple.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxcZHznfr226YVRP6c22dP0S3nZ0cfeM_o_Q&s",
                popular: false
            },
            {
                id: 9,
                name: "Wheat",
                category: "swallow",
                price: 2000,
                description: "Light and fluffy swallow made from wheat flour. A healthier alternative that's equally delicious.",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5MeLNBDllHY9RVkqRRC1erCSS02rRpvt_VQ&s",
                popular: false
            },

            // Soups
            {
                id: 10,
                name: "Egusi Soup",
                category: "soup",
                price: 3500,
                description: "Rich melon seed soup with assorted meat, fish, and vegetables. A Nigerian classic that's hearty and flavorful.",
                image: "https://i.pinimg.com/1200x/fb/61/02/fb6102f6d78e91574759bef766adb36e.jpg",
                popular: true
            },
            {
                id: 11,
                name: "Ewedu Soup",
                category: "soup",
                price: 1800,
                description: "Smooth jute leaf soup traditionally served with amala. Light, nutritious, and incredibly tasty.",
                image: "https://i.ytimg.com/vi/Xclxoyn-I74/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAOR5GpIeM3LRwY5FcVa9gqrpZNSA",
                popular: true
            },
            {
                id: 12,
                name: "Okra Soup",
                category: "soup",
                price: 2200,
                description: "Thick, hearty soup made with fresh okra, assorted meat, and seafood. Comfort in a bowl.",
                image: "https://i.pinimg.com/1200x/31/af/77/31af7766796ad1d84baca6e115d653b7.jpg",
                popular: false
            },
            {
                id: 13,
                name: "Bitter Leaf Soup",
                category: "soup",
                price: 3000,
                description: "Traditional soup made with bitter leaf vegetables, palm nut, and assorted protein. Rich and medicinal.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHCsazVMlcSMzVzZWJvatxR2bzOkJZNW2x9Q&s",
                popular: false
            },
            {
                id: 14,
                name: "Pepper Soup",
                category: "soup",
                price: 4000,
                description: "Spicy, aromatic soup with goat meat or fish. Perfect for cold days and special occasions.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJ88UrNyOBTZ53Npuzs-hIBQtKxXCcAw9mQ&s",
                popular: false
            },
            {
                id: 15,
                name: "Vegetable Soup",
                category: "soup",
                price: 3000,
                description: "Nutritious soup packed with fresh vegetables, palm oil, and your choice of protein.",
                image: "https://i.pinimg.com/1200x/fb/61/02/fb6102f6d78e91574759bef766adb36e.jpg",
                popular: false
            },

            // Sides
            {
                id: 16,
                name: "Plantain (Dodo)",
                category: "sides",
                price: 800,
                description: "Sweet fried plantain slices. The perfect side dish that complements any meal.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlK8bzrKoQbxzCpMKX7QCgS9zOXZLXLxWmxA&s",
                popular: true
            },
            {
                id: 17,
                name: "Moi Moi",
                category: "sides",
                price: 1000,
                description: "Steamed bean pudding with eggs, fish, and spices. A protein-rich delicacy wrapped in leaves.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxX7vTUdeXj-JiPSav22nf8fFvW02F1_l2g&s",
                popular: false
            },
            {
                id: 18,
                name: "Akara",
                category: "sides",
                price: 500,
                description: "Deep-fried bean cakes that are crispy outside and soft inside. Perfect breakfast or snack.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0V07Yuedssx0UGgj9wk2Qz5vMal6GU1fo8w&s",
                popular: false
            },
            {
                id: 19,
                name: "Yam Porridge",
                category: "sides",
                price: 1700,
                description: "Hearty yam cooked with vegetables, palm oil, and spices. A complete meal in itself.",
                image: "https://cdn.tasteatlas.com/images/dishes/517d5a36d38749cf8e6119d3ddfa80ad.jpg?w=600",
                popular: false
            },
            {
                id: 20,
                name: "Beans Porridge",
                category: "sides",
                price: 1800,
                description: "Nutritious beans cooked with plantain, palm oil, and aromatic spices.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJmZnriPgTY1RinA_enZqX7DyR0jIac-HuPA&s",
                popular: false
            }
        ];
    }

    setupEventListeners() {
        // Cart functionality
        document.getElementById('cartBtn').addEventListener('click', () => this.toggleCart());
        document.getElementById('closeCart').addEventListener('click', () => this.toggleCart());
        document.getElementById('clearCart').addEventListener('click', () => this.clearCart());
        document.getElementById('checkoutBtn').addEventListener('click', () => this.checkout());

        // Menu category filtering
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.filterMenu(e.target.dataset.category);
            });
        });

        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = link.getAttribute('href').substring(1);
                    window.location.hash = link.getAttribute('href');
                    requestAnimationFrame(() => {
                        const section = document.getElementById(target);
                        if (section) {
                            const header = document.querySelector('.header');
                            let headerHeight = 0;
                            if (header) {
                                const styles = window.getComputedStyle(header);
                                headerHeight = header.offsetHeight + parseInt(styles.marginBottom || 0);
                            }
                            const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10;
                            window.scrollTo({
                                top: targetPosition,
                                behavior: 'smooth'
                            });
                        }
                    });
                    this.setActiveNavLink(link);
                    // Close mobile menu and overlay if open
                    const navMenu = document.querySelector('.nav-menu');
                    const overlay = document.getElementById('menuOverlay');
                    if (window.innerWidth <= 375 && navMenu && navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        if (overlay) overlay.remove();
                    }
                });
        });

        // Reservation form
        document.getElementById('reservationForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleReservation();
        });

        // Mobile menu toggle
        const menuToggleBtn = document.getElementById('menu-Toggle');
        const navMenu = document.querySelector('.nav-menu');
        if (menuToggleBtn && navMenu) {
            menuToggleBtn.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                // Add overlay for mobile menu
                if (navMenu.classList.contains('active')) {
                    let overlay = document.getElementById('menuOverlay');
                    if (!overlay) {
                        overlay = document.createElement('div');
                        overlay.id = 'menuOverlay';
                        overlay.style.position = 'fixed';
                        overlay.style.top = '0';
                        overlay.style.left = '0';
                        overlay.style.width = '100vw';
                        overlay.style.height = '100vh';
                        overlay.style.background = 'rgba(0,0,0,0.3)';
                        overlay.style.zIndex = '1000';
                        document.body.appendChild(overlay);
                    }
                    overlay.onclick = () => {
                        navMenu.classList.remove('active');
                        overlay.remove();
                    };
                } else {
                    const overlay = document.getElementById('menuOverlay');
                    if (overlay) overlay.remove();
                }
            });
        }
        // Hide nav-menu on scroll for small screens
        window.addEventListener('scroll', () => {
            if (window.innerWidth <= 375) {
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const overlay = document.getElementById('menuOverlay');
                    if (overlay) overlay.remove();
                }
            }
        });

        // Close modals when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModals();
            }
        });
    }

    renderMenu(items = this.menuItems) {
        const menuGrid = document.getElementById('menuGrid');
        menuGrid.innerHTML = '';

        items.forEach(item => {
            const menuCard = this.createMenuCard(item);
            menuGrid.appendChild(menuCard);
        });
    }

    /* createMenuCard(item) {
        const card = document.createElement('div');
        card.className = 'menu-item';
        card.innerHTML = `
            <div class="menu-item-image">
                <span style="font-size: 4rem;">${menuItems.image}</span>
                ${item.popular ? '<div class="popular-badge">Popular</div>' : ''}
            </div>
            <div class="menu-item-info">
                <div class="menu-item-category">${item.category}</div>
                <div class="menu-item-name">${item.name}</div>
                <div class="menu-item-description">${item.description}</div>
                <div class="menu-item-footer">
                    <div class="menu-item-price">₦${item.price.toLocaleString()}</div>
                    <button class="add-to-cart" onclick="restaurant.addToCart(${item.id})">
                        <i class="fas fa-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;

        return card;
    }
 */
createMenuCard(item) {
    const card = document.createElement('div');
    card.className = 'menu-item';
    card.innerHTML = `
        <div class="menu-item-image">
            <img class="IMG" src="${item.image}" alt="${item.name}" style="width: 100%; height: 200px; object-fit: cover;">
            ${item.popular ? '<div class="popular-badge">Popular</div>' : ''}
        </div>
        <div class="menu-item-info">
            <div class="menu-item-category">${item.category}</div>
            <div class="menu-item-name">${item.name}</div>
            <div class="menu-item-description">${item.description}</div>
            <div class="menu-item-footer">
                <div class="menu-item-price">₦${item.price.toLocaleString()}</div>
                <button class="add-to-cart" onclick="restaurant.addToCart(${item.id})">
                    <i class="fas fa-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `;

    return card
}
    filterMenu(category) {
        if (category === 'all') {
            this.renderMenu();
        } else {
            const filteredItems = this.menuItems.filter(item => item.category === category);
            this.renderMenu(filteredItems);
        };
    }

    addToCart(itemId) {
        const item = this.menuItems.find(i => i.id === itemId);
        if (!item) return;

        const existingItem = this.cart.find(cartItem => cartItem.id === itemId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                ...item,
                quantity: 1
            });
        }

        this.saveCart();
        this.updateCartUI();
        this.showToast(`${item.name} added to cart!`);
    }

    removeFromCart(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
        this.saveCart();
        this.updateCartUI();
        this.renderCartItems();
    }

    updateQuantity(itemId, change) {
        const item = this.cart.find(item => item.id === itemId);
        if (!item) return;

        item.quantity += change;

        if (item.quantity <= 0) {
            this.removeFromCart(itemId);
        } else {
            this.saveCart();
            this.updateCartUI();
            this.renderCartItems();
        }
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
        this.updateCartUI();
        this.renderCartItems();
        this.showToast('Cart cleared!');
    }

    updateCartUI() {
        const cartCount = document.getElementById('cartCount');
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;

        const cartTotal = document.getElementById('cartTotal');
        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toLocaleString();
    }

    toggleCart() {
        const cartModal = document.getElementById('cartModal');
        cartModal.classList.toggle('show');

        if (cartModal.classList.contains('show')) {
            this.renderCartItems();
        }
    }

    renderCartItems() {
        const cartItems = document.getElementById('cartItems');

        if (this.cart.length === 0) {
            cartItems.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: #666;">
                    <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem; color: #ccc;"></i>
                    <p>Your cart is empty</p>
                    <p style="font-size: 0.9rem; margin-top: 0.5rem;">Add some delicious African dishes!</p>
                </div>
            `;
            return;
        }

        cartItems.innerHTML = '';

        this.cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
           <div class="cart-item-image"><img src="${item.image}" alt="${item.name}" style="width: 50px; height: 60px; object-fit: cover;border-radius:50%;">
    </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₦${item.price.toLocaleString()}</div>
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="restaurant.updateQuantity(${item.id}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span style="margin: 0 0.5rem; font-weight: 600;">${item.quantity}</span>
                    <button class="quantity-btn" onclick="restaurant.updateQuantity(${item.id}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <button class="quantity-btn" onclick="restaurant.removeFromCart(${item.id})" style="color: #ff6b35;">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartItems.appendChild(cartItem);
        });
     };
 
      checkout() {
        if (this.cart.length === 0) {
            this.showToast('Your cart is empty!');
            return;
        }

        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const itemCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);

      // Simulate order processing
      this.showToast('Processing your order...')

        setTimeout(() => {
            this.cart = [];
            this.saveCart();
            this.updateCartUI();
            this.toggleCart();
           alert(`Order placed successfully! Total: ₦${total.toLocaleString()} for ${itemCount} item(s). We'll call you soon!`);
        },2000);
    }   

    /* this.showToast('processing your order');
   this.showToast(`Order placed successfully! Total: ₦${total.toLocaleString()} for ${itemCount} items. We'll call you soon!`);
        }, 2000);
        this.showToast(`we'll call you!`);
        }, 2000);


        setTimeout(() => {
            this.cart = [];
            this.saveCart();
            this.updateCartUI();
            this.toggleCart();
            this.showToast(`Order placed successfully! Total: ₦${total.toLocaleString()} for ${itemCount} items. We'll call you soon!`);
        }, 2000); */
  

           /*  this.saveCart();
            this.updateCartUI();
            this.toggleCart();this.showToast(`Order placed successfully! Total: ₦${total.toLocaleString()} for ${itemCount} items. We'll call you soon!`);
        }, 2000); */


    handleReservation() {
        const formData = new FormData(document.getElementById('reservationForm'));
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;

        if (!name || !email || !phone || !date || !time || !guests) {
            this.showToast('Please fill in all fields');
            return;
        }

        // Simulate reservation processing
        this.showToast('Processing your reservation...');

        setTimeout(() => {
            document.getElementById('reservationForm').reset();
            this.showToast(`Reservation confirmed for ${name} on ${date} at ${time} for ${guests} guests. We'll call you to confirm!`);
        }, 1500);
    }

    saveCart() {
        localStorage.setItem('africana-cart', JSON. stringify (this.cart));
    }

    showToast(message) {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');

        toastMessage.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    };

    closeModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('show');
        });
    };

    scrollToSection(sectionId) {
        window.location.hash = '#' + sectionId;
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = section.offsetTop - headerHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }, 10);
    };

    setActiveNavLink(activeLink) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    };

    setupSmoothScrolling() {
        // Update active nav link on scroll
        window.addEventListener('scroll', () => {
            const sections = ['home', 'featured', 'menu', 'about', 'contact'];
            const headerHeight = document.querySelector('.header').offsetHeight;

            let currentSection = '';

            sections.forEach(sectionId => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop - headerHeight - 100;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                        currentSection = sectionId;
                    }
                }
            });

            if (currentSection) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentSection}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    /* toggleMobileMenu() {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.classList.toggle('active');
        }
    }  */

toggleMobileMenu(){
        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.scrollToSection(targetId);

                // Close mobile menu
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
            });
        });
}
 }




// Global functions for onclick handlers
function scrollToSection(sectionId) {
    restaurant.scrollToSection(sectionId);
}

// Initialize the restaurant after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality (ades-cosmetics pattern)
    const hamburger = document.getElementById('hamburgerMenu');
    const navMenu = document.getElementById('navMenu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    // Close menu on link click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    window.restaurant = new AfricanaSwallow();
});
document.addEventListener('DOMContentLoaded', () => {
    // Set minimum date for reservations to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }

    // Add popular badge styles
    const style = document.createElement('style');
    style.textContent = `
        .popular-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background: #ffd700;
            color: #2c5530;
            padding: 0.25rem 0.75rem;
            border-radius: 15px;
            font-size: 0.75rem;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .menu-item-image {
            position: relative;
        }
    `;
    document.head.appendChild(style);
});
       /*  const links = document.getElementById("nav-menu");
        const ham = document.getElementById("ham");

        if (ham && links) {
            ham.addEventListener('click', () => {
                links.classList.toggle("open"); // Use "active" to match most CSS patterns
            });
        } */
 
    const navMenu = document.getElementById("nav-menu");
    const ham = document.getElementById("ham");
    const navLinks = document.querySelectorAll("#nav-menu a");

    if (ham && navMenu) {
        ham.addEventListener('click', () => {
            navMenu.classList.toggle("open");
        });
    }

    //  Close my menu when any link  is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove("open");
        });
    });
