// JavaScript cho trang sản phẩm
document.addEventListener('DOMContentLoaded', function() {
    // ========== DỮ LIỆU SẢN PHẨM ==========
    const productsData = [
        { id: 1, name: "Bó Hoa Hồng Đỏ", price: 350000, category: "hoa-hong", rating: 4.5, image: "img/hh1.jpg" },
        { id: 2, name: "Hoa Cẩm Chướng", price: 280000, category: "hoa-cuc", rating: 4.0, image: "img/cch1.jpg" },
        { id: 3, name: "Hoa Tulip Hồng", price: 420000, category: "hoa-tulip", rating: 5.0, image: "img/tulip1.jpg" },
        { id: 4, name: "Hoa Lan Trắng", price: 550000, category: "hoa-lan", rating: 4.5, image: "img/lan1.jpg" },
        { id: 5, name: "Hoa Hồng Trắng", price: 380000, category: "hoa-hong", rating: 4.2, image: "img/hh2.jpg" },
        { id: 6, name: "Hoa Hướng Dương", price: 320000, category: "hoa-huong-duong", rating: 4.7, image: "img/hd1.jpg" },
        { id: 7, name: "Hoa Ly Ly", price: 450000, category: "hoa-ly", rating: 4.8, image: "img/lyly1.jpg" },
        { id: 8, name: "Hoa Cúc Trắng", price: 260000, category: "hoa-cuc", rating: 4.1, image: "img/cuc1.jpg" },
        { id: 9, name: "Hoa Hồng Vàng", price: 390000, category: "hoa-hong", rating: 4.6, image: "img/hh3.jpg" },
        { id: 10, name: "Hoa Lan Tím", price: 520000, category: "hoa-lan", rating: 4.9, image: "img/lan2.jpg" },
        { id: 11, name: "Hoa Tulip Vàng", price: 410000, category: "hoa-tulip", rating: 4.3, image: "img/tulip2.jpg" },
        { id: 12, name: "Hoa Cúc Vàng", price: 240000, category: "hoa-cuc", rating: 4.0, image: "img/cuc2.jpg" },
        { id: 13, name: "Hoa Hồng Phấn", price: 370000, category: "hoa-hong", rating: 4.4, image: "img/hh4.jpg" },
        { id: 14, name: "Hoa Ly Hồng", price: 480000, category: "hoa-ly", rating: 4.7, image: "img/lyly2.jpg" },
        { id: 15, name: "Hoa Lan Hồ Điệp", price: 680000, category: "hoa-lan", rating: 5.0, image: "img/lan3.jpg" },
        { id: 16, name: "Hoa Tulip Đỏ", price: 430000, category: "hoa-tulip", rating: 4.6, image: "img/tulip3.jpg" },
        { id: 17, name: "Hoa Cúc Đại Đóa", price: 290000, category: "hoa-cuc", rating: 4.2, image: "img/cuc3.jpg" },
        { id: 18, name: "Hoa Hồng Xanh", price: 510000, category: "hoa-hong", rating: 4.8, image: "img/hh5.jpg" },
        { id: 19, name: "Hoa Hướng Dương Nhỏ", price: 210000, category: "hoa-huong-duong", rating: 4.1, image: "img/hd2.jpg" },
        { id: 20, name: "Hoa Ly Trắng", price: 460000, category: "hoa-ly", rating: 4.5, image: "img/lyly3.jpg" },
        { id: 21, name: "Hoa Lan Vàng", price: 590000, category: "hoa-lan", rating: 4.7, image: "img/lan4.jpg" },
        { id: 22, name: "Hoa Tulip Trắng", price: 440000, category: "hoa-tulip", rating: 4.4, image: "img/tulip4.jpg" },
        { id: 23, name: "Hoa Cúc Tím", price: 270000, category: "hoa-cuc", rating: 4.3, image: "img/cuc4.jpg" },
        { id: 24, name: "Hoa Hồng Cam", price: 360000, category: "hoa-hong", rating: 4.6, image: "img/hh6.jpg" },
        { id: 25, name: "Hoa Ly Vàng", price: 470000, category: "hoa-ly", rating: 4.5, image: "img/lyly4.jpg" }
    ];
    
    // ========== BIẾN TOÀN CỤC ==========
    let currentPage = 1;
    const productsPerPage = 12;
    let filteredProducts = [...productsData];
    let currentSort = 'default';
    let currentCategory = 'all';
    let currentSearch = '';
    
    // ========== DOM ELEMENTS ==========
    const productsGrid = document.getElementById('productsGrid');
    const resultsCount = document.getElementById('resultsCount');
    const pagination = document.getElementById('pagination');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const sortSelect = document.getElementById('sortSelect');
    const categorySelect = document.getElementById('categorySelect');
    
    // ========== HÀM HIỂN THỊ SẢN PHẨM ==========
    function displayProducts() {
        // Tính toán sản phẩm cho trang hiện tại
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToDisplay = filteredProducts.slice(startIndex, endIndex);
        
        // Xóa nội dung cũ
        productsGrid.innerHTML = '';
        
        // Hiển thị sản phẩm
        if (productsToDisplay.length === 0) {
            productsGrid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>Không tìm thấy sản phẩm nào</h3>
                    <p>Hãy thử tìm kiếm với từ khóa khác hoặc danh mục khác.</p>
                </div>
            `;
        } else {
            productsToDisplay.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-grid-card';
    productCard.innerHTML = `
        <div class="product-grid-img">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-grid-info">
            <h3>${product.name}</h3>
            <div class="product-grid-rating">
                ${createRatingStars(product.rating)}
            </div>
            <div class="product-grid-price">${formatPrice(product.price)} VNĐ</div>
            <div class="product-buttons">
                <a href="product-detail.html?id=${product.id}" class="btn">Xem Chi Tiết</a>
                <button class="btn buy-now-btn" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Mua ngay</button>
            </div>
        </div>
    `;
    productsGrid.appendChild(productCard);
});
        }
        
        // Cập nhật số lượng kết quả
        if (resultsCount) {
            resultsCount.textContent = `Hiển thị ${startIndex + 1}-${Math.min(endIndex, filteredProducts.length)} trong tổng số ${filteredProducts.length} sản phẩm`;
        }
        
        // Cập nhật phân trang
        updatePagination();
    }
    
    // ========== HÀM TẠO SAO ĐÁNH GIÁ ==========
    function createRatingStars(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        if (halfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars;
    }
    
    // ========== HÀM CẬP NHẬT PHÂN TRANG ==========
    function updatePagination() {
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        
        // Xóa nội dung cũ
        pagination.innerHTML = '';
        
        // Nếu chỉ có 1 trang thì không hiển thị phân trang
        if (totalPages <= 1) return;
        
        // Nút trang đầu
        if (currentPage > 1) {
            const firstBtn = document.createElement('button');
            firstBtn.className = 'page-btn';
            firstBtn.textContent = '«';
            firstBtn.addEventListener('click', () => {
                currentPage = 1;
                displayProducts();
            });
            pagination.appendChild(firstBtn);
        }
        
        // Nút trang trước
        if (currentPage > 1) {
            const prevBtn = document.createElement('button');
            prevBtn.className = 'page-btn';
            prevBtn.textContent = '‹';
            prevBtn.addEventListener('click', () => {
                currentPage--;
                displayProducts();
            });
            pagination.appendChild(prevBtn);
        }
        
        // Các nút trang
        for (let i = 1; i <= totalPages; i++) {
            // Chỉ hiển thị một số trang xung quanh trang hiện tại
            if (
                i === 1 || 
                i === totalPages || 
                (i >= currentPage - 1 && i <= currentPage + 1)
            ) {
                const pageBtn = document.createElement('button');
                pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
                pageBtn.textContent = i;
                pageBtn.addEventListener('click', () => {
                    currentPage = i;
                    displayProducts();
                });
                pagination.appendChild(pageBtn);
            } else if (
                (i === currentPage - 2 && currentPage > 3) || 
                (i === currentPage + 2 && currentPage < totalPages - 2)
            ) {
                // Thêm dấu "..." để ngăn cách
                const ellipsis = document.createElement('span');
                ellipsis.textContent = '...';
                ellipsis.style.padding = '10px 5px';
                pagination.appendChild(ellipsis);
            }
        }
        
        // Nút trang sau
        if (currentPage < totalPages) {
            const nextBtn = document.createElement('button');
            nextBtn.className = 'page-btn';
            nextBtn.textContent = '›';
            nextBtn.addEventListener('click', () => {
                currentPage++;
                displayProducts();
            });
            pagination.appendChild(nextBtn);
        }
        
        // Nút trang cuối
        if (currentPage < totalPages) {
            const lastBtn = document.createElement('button');
            lastBtn.className = 'page-btn';
            lastBtn.textContent = '»';
            lastBtn.addEventListener('click', () => {
                currentPage = totalPages;
                displayProducts();
            });
            pagination.appendChild(lastBtn);
        }
    }
    
    // ========== HÀM LỌC SẢN PHẨM ==========
    function filterProducts() {
        // Lọc theo danh mục
        if (currentCategory === 'all') {
            filteredProducts = [...productsData];
        } else {
            filteredProducts = productsData.filter(product => product.category === currentCategory);
        }
        
        // Lọc theo từ khóa tìm kiếm
        if (currentSearch.trim() !== '') {
            const searchTerm = currentSearch.toLowerCase();
            filteredProducts = filteredProducts.filter(product => 
                product.name.toLowerCase().includes(searchTerm)
            );
        }
        
        // Sắp xếp sản phẩm
        switch (currentSort) {
            case 'price-asc':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                // Mặc định: sắp xếp theo ID
                filteredProducts.sort((a, b) => a.id - b.id);
        }
        
        // Reset về trang đầu tiên
        currentPage = 1;
        
        // Hiển thị sản phẩm
        displayProducts();
    }
    
    // ========== HÀM TÌM KIẾM ==========
    function handleSearch() {
        currentSearch = searchInput.value;
        filterProducts();
    }
    
    // ========== HÀM SẮP XẾP ==========
    function handleSort() {
        currentSort = sortSelect.value;
        filterProducts();
    }
    
    // ========== HÀM LỌC DANH MỤC ==========
    function handleCategoryFilter() {
        currentCategory = categorySelect.value;
        filterProducts();
    }
    
    // ========== KHỞI TẠO TRANG ==========
    function initProductsPage() {
        // Hiển thị sản phẩm ban đầu
        displayProducts();
        
        // Thêm sự kiện cho tìm kiếm
        if (searchBtn) {
            searchBtn.addEventListener('click', handleSearch);
        }
        
        if (searchInput) {
            searchInput.addEventListener('keyup', function(event) {
                if (event.key === 'Enter') {
                    handleSearch();
                }
            });
        }
        
        // Thêm sự kiện cho sắp xếp
        if (sortSelect) {
            sortSelect.addEventListener('change', handleSort);
        }
        
        // Thêm sự kiện cho lọc danh mục
        if (categorySelect) {
            categorySelect.addEventListener('change', handleCategoryFilter);
        }
    }
    
    // Khởi tạo trang sản phẩm
    initProductsPage();
});
// ========== XỬ LÝ ICON USER CHO TRANG CHI TIẾT ==========
// Kiểm tra và cập nhật trạng thái user khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    // Kiểm tra đăng nhập
    const currentUser = JSON.parse(localStorage.getItem('bloomshop_user')) || null;
    const userIcon = document.querySelector('.fa-user');
    
    if (currentUser && userIcon) {
        userIcon.style.color = '#e91e63';
        userIcon.title = `Xin chào, ${currentUser.username || currentUser.name}`;
    }
});