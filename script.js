// JavaScript chính cho cửa hàng hoa
document.addEventListener('DOMContentLoaded', function() {
    // ========== QUẢN LÝ GIỎ HÀNG ==========
    const cartIcon = document.getElementById('cartIcon');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.getElementById('closeCart');
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartTotal = document.getElementById('cartTotal');
    const totalAmount = document.getElementById('totalAmount');
    const cartCount = document.getElementById('cartCount');
    const checkoutBtn = document.getElementById('checkoutBtn');
    // Thêm sự kiện cho icon user (nếu chưa có trong auth.js)
const userIcon = document.querySelector('.fa-user');
if (userIcon && !userIcon.hasAttribute('data-auth-initialized')) {
    userIcon.setAttribute('data-auth-initialized', 'true');
    userIcon.addEventListener('click', function(e) {
        e.preventDefault();
        // Nếu auth.js đã được tải, nó sẽ xử lý sự kiện này
    });
}
    
    let cart = JSON.parse(localStorage.getItem('bloomshop_cart')) || [];
    
    // Mở/đóng giỏ hàng
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            cartModal.classList.add('active');
            updateCartDisplay();
        });
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', function() {
            cartModal.classList.remove('active');
        });
    }
    
    // Đóng modal khi click bên ngoài
    if (cartModal) {
        cartModal.addEventListener('click', function(e) {
            if (e.target === cartModal) {
                cartModal.classList.remove('active');
            }
        });
    }
    
    // Lưu giỏ hàng vào localStorage
    function saveCartToStorage() {
        localStorage.setItem('bloomshop_cart', JSON.stringify(cart));
        updateCartCount();
    }
    
    // Cập nhật số lượng hiển thị trên icon giỏ hàng
    function updateCartCount() {
        if (cartCount) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    }
    
    // Cập nhật hiển thị giỏ hàng trong modal
    function updateCartDisplay() {
        if (!cartItems) return;
        
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartEmpty.style.display = 'block';
            cartTotal.style.display = 'none';
            if (checkoutBtn) checkoutBtn.style.display = 'none';
        } else {
            cartEmpty.style.display = 'none';
            cartTotal.style.display = 'flex';
            if (checkoutBtn) checkoutBtn.style.display = 'block';
            
            let total = 0;
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-img">
                        <img src="https://images.unsplash.com/photo-${getProductImage(item.id)}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" alt="${item.name}">
                    </div>
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p class="cart-item-price">${formatPrice(item.price)} VNĐ x ${item.quantity}</p>
                        <p class="cart-item-remove" data-id="${item.id}">Xóa</p>
                    </div>
                `;
                
                cartItems.appendChild(cartItem);
            });
            
            // Cập nhật tổng tiền
            if (totalAmount) totalAmount.textContent = formatPrice(total) + ' VNĐ';
            
            // Thêm sự kiện xóa sản phẩm
            const removeButtons = document.querySelectorAll('.cart-item-remove');
            removeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const id = this.getAttribute('data-id');
                    removeFromCart(id);
                });
            });
        }
    }
    
    // Thêm sản phẩm vào giỏ hàng
    window.addToCart = function(id, name, price, quantity = 1) {
        const existingItem = cart.find(item => item.id === id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: id,
                name: name,
                price: price,
                quantity: quantity
            });
        }
        
        saveCartToStorage();
        updateCartDisplay();
        showNotification(`Đã thêm ${name} vào giỏ hàng`);
    };
    
    // Xóa sản phẩm khỏi giỏ hàng
    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        saveCartToStorage();
        updateCartDisplay();
        showNotification('Đã xóa sản phẩm khỏi giỏ hàng');
    }
    
    // Lấy hình ảnh sản phẩm theo ID
    function getProductImage(id) {
        const images = {
            '1': '1562552476-8ace4b4d5c56',
            '2': '1464207687429-7505649dae38',
            '3': '1530014708987-9c6d6a5da81e',
            '4': '1559788557-7b47d3a20d7a',
            '5': '1516049668015-46c3d1328d87',
            '6': '1567178395904-a6fcdd2e5b81',
            '7': '1519681393784-d120267933ba',
            '8': '1606041002880-53e95246f36e',
            '9': '1519378058457-4c29a0a2efac',
            '10': '1545240740-89fb5b5ffb5be'
        };
        return images[id] || '1562552476-8ace4b4d5c56';
    }
    
    // Định dạng giá tiền
    window.formatPrice = function(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    
    // Hiển thị thông báo
    window.showNotification = function(message) {
        // Tạo phần tử thông báo
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background-color: #4CAF50;
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            z-index: 3000;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s;
        `;
        
        // Thêm CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        
        // Xóa thông báo sau 3 giây
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
            if (style.parentNode) {
                document.head.removeChild(style);
            }
        }, 3000);
    };
    
    // Xử lý thanh toán
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length > 0) {
                alert('Cảm ơn bạn đã đặt hàng! Tổng số tiền là: ' + totalAmount.textContent + '\nChúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.');
                cart = [];
                saveCartToStorage();
                updateCartDisplay();
                cartModal.classList.remove('active');
            }
        });
    }
    
    // Cuộn mượt đến các phần (chỉ cho các liên kết nội bộ)
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Cập nhật menu active (chỉ cho các liên kết nội bộ)
                    document.querySelectorAll('nav a').forEach(link => {
                        if (link.getAttribute('href').startsWith('#')) {
                            link.classList.remove('active');
                        }
                    });
                    this.classList.add('active');
                }
            }
        });
    });
    
    // Cập nhật menu active khi cuộn
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
        
        // Xử lý menu cho trang chủ
        const homeLink = document.querySelector('nav a[href="index.html"]');
        const productsLink = document.querySelector('nav a[href="products.html"]');
        
        if (window.location.pathname.includes('products.html') && productsLink) {
            // Trang sản phẩm
            productsLink.classList.add('active');
            if (homeLink) homeLink.classList.remove('active');
        } else if (homeLink && current === '') {
            // Trang chủ, không cuộn
            homeLink.classList.add('active');
            if (productsLink) productsLink.classList.remove('active');
        }
    });
    
    // Khởi tạo giỏ hàng khi trang được tải
    updateCartCount();
    updateCartDisplay();
        // ========== XỬ LÝ NÚT "MUA NGAY" ==========
    function handleBuyNowClick(productId, productName, productPrice) {
        // Thêm sản phẩm vào giỏ hàng
        addToCart(productId, productName, productPrice, 1);
        
        // Mở modal giỏ hàng sau 0.5 giây
        setTimeout(() => {
            if (cartModal) {
                cartModal.classList.add('active');
                updateCartDisplay();
            }
        }, 500);
    }
    
    // Thêm sự kiện cho nút "Mua ngay" (event delegation)
    document.addEventListener('click', function(e) {
        // Kiểm tra nếu click vào nút "Mua ngay" hoặc phần tử con của nó
        const buyNowBtn = e.target.closest('.buy-now-btn');
        
        if (buyNowBtn) {
            e.preventDefault();
            
            const productId = buyNowBtn.getAttribute('data-id');
            const productName = buyNowBtn.getAttribute('data-name');
            const productPrice = parseInt(buyNowBtn.getAttribute('data-price'));
            
            handleBuyNowClick(productId, productName, productPrice);
        }
    });
});
