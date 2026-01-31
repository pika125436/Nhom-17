// Dữ liệu chi tiết sản phẩm
const productDetails = {
    1: {
        name: "Bó Hoa Hồng Đỏ",
        price: 350000,
        category: "Hoa Tình Yêu",
        stock: "Còn hàng",
        code: "BS001",
        description: "Bó hoa hồng đỏ tươi gồm 12 bông hồng nhập khẩu từ Ecuador, kết hợp với lá dương xỉ và hoa baby trắng tạo nên một tác phẩm nghệ thuật sang trọng và lãng mạn. Hoa được cắt tỉa cẩn thận và bảo quản trong điều kiện tốt nhất để giữ được độ tươi lâu.",
        images: [
            "img/hh1.jpg",
            "img/hh1.jpg",
            "img/hh1.jpg"
        ],
        relatedProducts: [2, 3, 5, 9]
    },
    2: {
        name: "Hoa Cẩm Chướng",
        price: 280000,
        category: "Hoa Sinh Nhật",
        stock: "Còn hàng",
        code: "BS002",
        description: "Bó hoa cẩm chướng nhiều màu sắc tươi tắn, phù hợp để tặng trong các dịp sinh nhật, kỷ niệm. Hoa có độ bền cao, giữ được vẻ đẹp trong nhiều ngày. Kết hợp với lá xanh tạo nên bó hoa cân đối và hài hòa.",
        images: [
            "img/cch1.jpg",
            "img/cch1.jpg",
            "img/cch1.jpg"
        ],
        relatedProducts: [1, 8, 12, 17]
    },
    3: {
        name: "Hoa Tulip Hồng",
        price: 420000,
        category: "Hoa Tình Yêu",
        stock: "Còn hàng",
        code: "BS003",
        description: "Hoa tulip hồng nhập khẩu từ Hà Lan, biểu tượng của tình yêu và sự lãng mạn. Những bông hoa tulip với màu hồng pastel dịu dàng, thích hợp để bày trong phòng khách hoặc làm quà tặng cho người thương.",
        images: [
            "img/tulip1.jpg",
            "img/tulip1.jpg",
            "img/tulip1.jpg"
        ],
        relatedProducts: [1, 11, 16, 22]
    },
    4: {
        name: "Hoa Lan Trắng",
        price: 550000,
        category: "Hoa Khai Trương",
        stock: "Còn hàng",
        code: "BS004",
        description: "Chậu hoa lan trắng sang trọng, phù hợp để trang trí văn phòng, khai trương cửa hàng hoặc làm quà tặng cao cấp. Hoa lan có tuổi thọ cao, có thể chơi được trong nhiều tuần với chế độ chăm sóc đúng cách.",
        images: [
            "img/lan1.jpg",
            "img/lan1.jpg",
            "img/lan1.jpg"
        ],
        relatedProducts: [10, 15, 21, 4]
    },
    5: {
        name: "Hoa Hồng Trắng",
        price: 380000,
        category: "Hoa Tình Yêu",
        stock: "Còn hàng",
        code: "BS005",
        description: "Bó hoa hồng trắng tinh khôi, biểu tượng của sự thuần khiết và tình yêu trong sáng. Những bông hồng trắng được kết hợp khéo léo với lá xanh tạo nên vẻ đẹp thanh tao và trang nhã.",
        images: [
            "img/hh2.jpg",
            "img/hh2.jpg",
            "img/hh2.jpg"
        ],
        relatedProducts: [1, 9, 13, 24]
    },
    6: {
        name: "Hoa Hướng Dương",
        price: 320000,
        category: "Hoa Chúc Mừng",
        stock: "Còn hàng",
        code: "BS006",
        description: "Bó hoa hướng dương rực rỡ, mang đến năng lượng tích cực và niềm vui. Hoa hướng dương biểu tượng cho sự lạc quan, nhiệt huyết và sức sống mãnh liệt.",
        images: [
            "img/hd1.jpg",
            "img/hd1.jpg",
            "img/hd1.jpg"
        ],
        relatedProducts: [8, 12, 17, 19]
    },
    7: {
        name: "Hoa Ly Ly",
        price: 450000,
        category: "Hoa Trang Trí",
        stock: "Còn hàng",
        code: "BS007",
        description: "Hoa ly trắng tinh khiết với hương thơm dịu nhẹ, thích hợp để trang trí phòng khách, phòng ngủ hoặc làm quà tặng trong các dịp quan trọng.",
        images: [
            "img/lyly1.jpg",
            "img/lyly1.jpg",
            "img/lyly1.jpg"
        ],
        relatedProducts: [14, 20, 25, 4]
    },
    8: {
        name: "Hoa Cúc Trắng",
        price: 260000,
        category: "Hoa Tưởng Niệm",
        stock: "Còn hàng",
        code: "BS008",
        description: "Bó hoa cúc trắng thanh khiết, thường được sử dụng trong các dịp tưởng niệm, thể hiện lòng thành kính và sự tiếc thương sâu sắc.",
        images: [
            "img/cuc1.jpg",
            "img/cuc1.jpg",
            "img/cuc1.jpg"
        ],
        relatedProducts: [2, 12, 17, 23]
    },
    9: {
        name: "Hoa Hồng Vàng",
        price: 390000,
        category: "Hoa Tình Yêu",
        stock: "Còn hàng",
        code: "BS009",
        description: "Hoa hồng vàng rực rỡ, biểu tượng của tình bạn chân thành, niềm vui và sự ấm áp. Thích hợp để tặng bạn bè, đồng nghiệp trong các dịp đặc biệt.",
        images: [
            "img/hh3.jpg",
            "img/hh3.jpg",
            "img/hh3.jpg"
        ],
        relatedProducts: [1, 5, 13, 18]
    },
    10: {
        name: "Hoa Lan Tím",
        price: 520000,
        category: "Hoa Khai Trương",
        stock: "Còn hàng",
        code: "BS010",
        description: "Chậu hoa lan tím quý phái, màu tím biểu tượng cho sự sang trọng, thành công và may mắn. Thích hợp để trang trí văn phòng hoặc làm quà tặng doanh nghiệp.",
        images: [
            "img/lan2.jpg",
            "img/lan2.jpg",
            "img/lan2.jpg"
        ],
        relatedProducts: [4, 15, 21, 10]
    },
    11: {
        name: "Hoa Tulip Vàng",
        price: 410000,
        category: "Hoa Trang Trí",
        stock: "Còn hàng",
        code: "BS011",
        description: "Hoa tulip vàng tươi sáng, mang đến không gian ấm áp và tràn đầy năng lượng. Thích hợp để trang trí nhà cửa, văn phòng trong những ngày xuân.",
        images: [
            "img/tulip2.jpg",
            "img/tulip2.jpg",
            "img/tulip2.jpg"
        ],
        relatedProducts: [3, 16, 22, 11]
    },
    12: {
        name: "Hoa Cúc Vàng",
        price: 240000,
        category: "Hoa Chúc Mừng",
        stock: "Còn hàng",
        code: "BS012",
        description: "Bó hoa cúc vàng rực rỡ, tượng trưng cho sự trường thọ, may mắn và tài lộc. Thích hợp để tặng trong các dịp mừng thọ, khai trương.",
        images: [
            "img/cuc2.jpg",
            "img/cuc2.jpg",
            "img/cuc2.jpg"
        ],
        relatedProducts: [2, 8, 17, 23]
    },
    13: {
        name: "Hoa Hồng Phấn",
        price: 370000,
        category: "Hoa Tình Yêu",
        stock: "Còn hàng",
        code: "BS013",
        description: "Hoa hồng phấn dịu dàng với sắc hồng pastel ngọt ngào, biểu tượng của sự lãng mạn, dịu dàng và nữ tính. Thích hợp để tặng người yêu, vợ hoặc bạn gái.",
        images: [
            "img/hh4.jpg",
            "img/hh4.jpg",
            "img/hh4.jpg"
        ],
        relatedProducts: [1, 5, 9, 24]
    },
    14: {
        name: "Hoa Ly Hồng",
        price: 480000,
        category: "Hoa Trang Trí",
        stock: "Còn hàng",
        code: "BS014",
        description: "Hoa ly hồng quyến rũ với màu hồng đậm và hương thơm nồng nàn, tạo điểm nhấn sang trọng cho không gian sống. Thích hợp để trang trí phòng khách, phòng ăn.",
        images: [
            "img/lyly2.jpg",
            "img/lyly2.jpg",
            "img/lyly2.jpg"
        ],
        relatedProducts: [7, 20, 25, 14]
    },
    15: {
        name: "Hoa Lan Hồ Điệp",
        price: 680000,
        category: "Hoa Cao Cấp",
        stock: "Còn hàng",
        code: "BS015",
        description: "Chậu hoa lan hồ điệp cao cấp, vương giả và sang trọng. Đây là loại hoa biểu tượng cho sự giàu có, thành đạt và quyền lực. Thích hợp làm quà tặng sếp, đối tác.",
        images: [
            "img/lan3.jpg",
            "img/lan3.jpg",
            "img/lan3.jpg"
        ],
        relatedProducts: [4, 10, 21, 15]
    },
    16: {
        name: "Hoa Tulip Đỏ",
        price: 430000,
        category: "Hoa Tình Yêu",
        stock: "Còn hàng",
        code: "BS016",
        description: "Hoa tulip đỏ rực lửa, biểu tượng của tình yêu nồng cháy và đam mê. Đây là món quà lãng mạn hoàn hảo để thể hiện tình cảm chân thành.",
        images: [
            "img/tulip3.jpg",
            "img/tulip3.jpg",
            "img/tulip3.jpg"
        ],
        relatedProducts: [1, 3, 11, 22]
    },
    17: {
        name: "Hoa Cúc Đại Đóa",
        price: 290000,
        category: "Hoa Chúc Mừng",
        stock: "Còn hàng",
        code: "BS017",
        description: "Hoa cúc đại đóa với những bông hoa to, màu sắc rực rỡ, tượng trưng cho sự viên mãn, tròn đầy và hạnh phúc. Thích hợp để chúc mừng sinh nhật, tốt nghiệp.",
        images: [
            "img/cuc3.jpg",
            "img/cuc3.jpg",
            "img/cuc3.jpg"
        ],
        relatedProducts: [2, 8, 12, 23]
    },
    18: {
        name: "Hoa Hồng Xanh",
        price: 510000,
        category: "Hoa Độc Đáo",
        stock: "Còn hàng",
        code: "BS018",
        description: "Hoa hồng xanh độc đáo và hiếm có, tượng trưng cho điều kỳ diệu, bí ẩn và những điều không thể. Là món quà đặc biệt dành cho những người đặc biệt.",
        images: [
            "img/hh5.jpg",
            "img/hh5.jpg",
            "img/hh5.jpg"
        ],
        relatedProducts: [1, 9, 13, 24]
    },
    19: {
        name: "Hoa Hướng Dương Nhỏ",
        price: 210000,
        category: "Hoa Để Bàn",
        stock: "Còn hàng",
        code: "BS019",
        description: "Bó hoa hướng dương nhỏ xinh, thích hợp để trang trí bàn làm việc, bàn học hoặc bàn ăn. Mang lại năng lượng tích cực và tươi mới cho không gian nhỏ.",
        images: [
            "img/hd2.jpg",
            "img/hd2.jpg",
            "img/hd2.jpg"
        ],
        relatedProducts: [6, 8, 12, 17]
    },
    20: {
        name: "Hoa Ly Trắng",
        price: 460000,
        category: "Hoa Trang Trí",
        stock: "Còn hàng",
        code: "BS020",
        description: "Hoa ly trắng tinh khôi với hương thơm thanh khiết, tạo cảm giác thư thái và bình yên. Thích hợp để trang trí phòng ngủ, phòng thiền hoặc không gian nghỉ ngơi.",
        images: [
            "img/lyly3.jpg",
            "img/lyly3.jpg",
            "img/lyly3.jpg"
        ],
        relatedProducts: [7, 14, 25, 20]
    },
    21: {
        name: "Hoa Lan Vàng",
        price: 590000,
        category: "Hoa Cao Cấp",
        stock: "Còn hàng",
        code: "BS021",
        description: "Chậu hoa lan vàng quý phái, biểu tượng của sự giàu sang, thịnh vượng và thành công. Màu vàng của hoa lan mang lại may mắn và tài lộc cho gia chủ.",
        images: [
            "img/lan4.jpg",
            "img/lan4.jpg",
            "img/lan4.jpg"
        ],
        relatedProducts: [4, 10, 15, 21]
    },
    22: {
        name: "Hoa Tulip Trắng",
        price: 440000,
        category: "Hoa Trang Trí",
        stock: "Còn hàng",
        code: "BS022",
        description: "Hoa tulip trắng tinh khiết, thanh tao và trang nhã. Màu trắng của hoa tulip tượng trưng cho sự trong sáng, thuần khiết và tình yêu vĩnh cửu.",
        images: [
            "img/tulip4.jpg",
            "img/tulip4.jpg",
            "img/tulip4.jpg"
        ],
        relatedProducts: [3, 11, 16, 22]
    },
    23: {
        name: "Hoa Cúc Tím",
        price: 270000,
        category: "Hoa Tưởng Niệm",
        stock: "Còn hàng",
        code: "BS023",
        description: "Bó hoa cúc tím trang nghiêm và tôn kính, thường được sử dụng trong các nghi lễ tưởng niệm. Màu tím của hoa cúc thể hiện sự tiếc thương và lòng thành kính.",
        images: [
            "img/cuc4.jpg",
            "img/cuc4.jpg",
            "img/cuc4.jpg"
        ],
        relatedProducts: [2, 8, 12, 17]
    },
    24: {
        name: "Hoa Hồng Cam",
        price: 360000,
        category: "Hoa Tình Yêu",
        stock: "Còn hàng",
        code: "BS024",
        description: "Hoa hồng cam rực rỡ, biểu tượng của sự nhiệt huyết, đam mê và lòng say mê. Màu cam của hoa hồng thể hiện tình yêu nồng nhiệt và mãnh liệt.",
        images: [
            "img/hh6.jpg",
            "img/hh6.jpg",
            "img/hh6.jpg"
        ],
        relatedProducts: [1, 5, 9, 13]
    },
    25: {
        name: "Hoa Ly Vàng",
        price: 470000,
        category: "Hoa Trang Trí",
        stock: "Còn hàng",
        code: "BS025",
        description: "Hoa ly vàng tươi sáng với hương thơm dịu nhẹ, mang đến không gian ấm áp và tràn đầy năng lượng. Thích hợp để trang trí phòng khách, phòng họp.",
        images: [
            "img/lyly4.jpg",
            "img/lyly4.jpg",
            "img/lyly4.jpg"
        ],
        relatedProducts: [7, 14, 20, 25]
    }
};
// Dữ liệu sản phẩm để hiển thị sản phẩm liên quan
const productsData = [
    { id: 1, name: "Bó Hoa Hồng Đỏ", price: 350000, image: "img/hh1.jpg" },
    { id: 2, name: "Hoa Cẩm Chướng", price: 280000, image: "img/cch1.jpg" },
    { id: 3, name: "Hoa Tulip Hồng", price: 420000, image: "img/tulip1.jpg" },
    { id: 4, name: "Hoa Lan Trắng", price: 550000, image: "img/lan1.jpg" },
    { id: 5, name: "Hoa Hồng Trắng", price: 380000, image: "img/hh2.jpg" },
    { id: 9, name: "Hoa Hồng Vàng", price: 390000, image: "img/hh3.jpg" },
    { id: 8, name: "Hoa Cúc Trắng", price: 260000, image: "img/cuc1.jpg" },
    { id: 11, name: "Hoa Tulip Vàng", price: 410000, image: "img/tulip2.jpg" },
    { id: 12, name: "Hoa Cúc Vàng", price: 240000, image: "img/cuc2.jpg" },
    { id: 15, name: "Hoa Lan Hồ Điệp", price: 680000, image: "img/lan3.jpg" },
    { id: 16, name: "Hoa Tulip Đỏ", price: 430000, image: "img/tulip3.jpg" },
    { id: 17, name: "Hoa Cúc Đại Đóa", price: 290000, image: "img/cuc3.jpg" }
];

// DOM Elements
const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const productDescription = document.getElementById('productDescription');
const productCategory = document.getElementById('productCategory');
const productStock = document.getElementById('productStock');
const productCode = document.getElementById('productCode');
const productMainImage = document.getElementById('productMainImage');
const productThumbnails = document.getElementById('productThumbnails');
const productNameBreadcrumb = document.getElementById('productNameBreadcrumb');
const relatedProducts = document.getElementById('relatedProducts');
const addToCartDetail = document.getElementById('addToCartDetail');
const buyNowBtn = document.getElementById('buyNowBtn');
const decreaseQuantity = document.getElementById('decreaseQuantity');
const increaseQuantity = document.getElementById('increaseQuantity');
const quantityInput = document.getElementById('quantityInput');

// Hàm lấy ID sản phẩm từ URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id')) || 1;
}

// Hàm định dạng giá tiền
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Hàm hiển thị chi tiết sản phẩm
function displayProductDetail() {
    const productId = getProductIdFromURL();
    const product = productDetails[productId] || productDetails[1];
    
    // Cập nhật thông tin sản phẩm
    productName.textContent = product.name;
    productPrice.textContent = formatPrice(product.price) + " VNĐ";
    productDescription.textContent = product.description;
    productCategory.textContent = product.category;
    productStock.textContent = product.stock;
    productCode.textContent = product.code;
    productNameBreadcrumb.textContent = product.name;
    
    // Cập nhật hình ảnh chính
    productMainImage.src = `${product.images[0]}`;
    productMainImage.alt = product.name;
    
    // Tạo thumbnails
    productThumbnails.innerHTML = '';
    product.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `product-thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.innerHTML = `<img src="${image}" alt="${product.name}">`;
        
        // Thêm sự kiện click cho thumbnail
        thumbnail.addEventListener('click', () => {
            // Cập nhật hình ảnh chính
            productMainImage.src = `${image}`;
            
            // Cập nhật trạng thái active
            document.querySelectorAll('.product-thumbnail').forEach(thumb => {
                thumb.classList.remove('active');
            });
            thumbnail.classList.add('active');
        });
        
        productThumbnails.appendChild(thumbnail);
    });
    
    // Hiển thị sản phẩm liên quan
    displayRelatedProducts(product.relatedProducts);
    
    // Thêm sự kiện cho nút thêm vào giỏ hàng
    addToCartDetail.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        addToCart(productId, product.name, product.price, quantity);
        showNotification(`Đã thêm ${quantity} ${product.name} vào giỏ hàng`);
    });
    
    // Thêm sự kiện cho nút mua ngay
    buyNowBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        addToCart(productId, product.name, product.price, quantity);
        showNotification(`Đã thêm ${quantity} ${product.name} vào giỏ hàng`);
        
        // Mở giỏ hàng sau 1 giây
        setTimeout(() => {
            document.getElementById('cartModal').classList.add('active');
        }, 1000);
    });
}

// Hàm hiển thị sản phẩm liên quan
function displayRelatedProducts(relatedIds) {
    // Lọc sản phẩm liên quan
    const relatedProductsData = productsData.filter(product => 
        relatedIds.includes(product.id)
    );
    
    // Hiển thị tối đa 4 sản phẩm
    const productsToShow = relatedProductsData.slice(0, 4);
    
    // Tạo HTML cho sản phẩm liên quan
    relatedProducts.innerHTML = '';
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <p class="product-price">${formatPrice(product.price)} VNĐ</p>
                <a href="product-detail.html?id=${product.id}" class="btn">Xem Chi Tiết</a>
            </div>
        `;
        relatedProducts.appendChild(productCard);
    });
}

// Hàm thêm vào giỏ hàng (sử dụng từ script.js)
function addToCart(id, name, price, quantity) {
    // Kiểm tra xem hàm addToCart đã được định nghĩa trong script.js chưa
    if (typeof window.addToCart === 'function') {
        // Nếu đã có hàm addToCart toàn cục, sử dụng nó
        for (let i = 0; i < quantity; i++) {
            window.addToCart(id, name, price);
        }
    } else {
        // Nếu chưa có, tạo giỏ hàng tạm thời
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
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
        
        // Lưu vào localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Cập nhật số lượng trên icon giỏ hàng
        updateCartCount();
    }
}

// Hàm cập nhật số lượng giỏ hàng
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

// Hàm hiển thị thông báo
function showNotification(message) {
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
        document.body.removeChild(notification);
        document.head.removeChild(style);
    }, 3000);
}

// Sự kiện khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    // Hiển thị chi tiết sản phẩm
    displayProductDetail();
    
    // Cập nhật số lượng giỏ hàng từ localStorage
    updateCartCount();
    
    // Thêm sự kiện cho nút tăng/giảm số lượng
    decreaseQuantity.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
    
    increaseQuantity.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue < 20) {
            quantityInput.value = currentValue + 1;
        }
    });
    
    // Thêm sự kiện cho input số lượng
    quantityInput.addEventListener('change', () => {
        let value = parseInt(quantityInput.value);
        if (isNaN(value) || value < 1) {
            quantityInput.value = 1;
        } else if (value > 20) {
            quantityInput.value = 20;
        }
    });
});
