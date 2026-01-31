// JavaScript cho trang thông tin tài khoản
document.addEventListener('DOMContentLoaded', function() {
    // ========== BIẾN TOÀN CỤC ==========
    let currentUser = JSON.parse(localStorage.getItem('bloomshop_user')) || null;
    let orders = JSON.parse(localStorage.getItem('bloomshop_orders')) || [];
    let wishlist = JSON.parse(localStorage.getItem('bloomshop_wishlist')) || [];
    let addresses = JSON.parse(localStorage.getItem('bloomshop_addresses')) || [];
    
    // ========== DOM ELEMENTS ==========
    // Menu
    const accountMenuItems = document.querySelectorAll('.account-menu-item');
    const accountSections = document.querySelectorAll('.account-section');
    
    // Thông tin người dùng
    const userFullName = document.getElementById('userFullName');
    const userEmail = document.getElementById('userEmail');
    const userPhone = document.getElementById('userPhone');
    const userJoinDate = document.getElementById('userJoinDate');
    const userAvatar = document.getElementById('userAvatar');
    
    // Thống kê
    const orderCount = document.getElementById('orderCount');
    const wishlistCount = document.getElementById('wishlistCount');
    
    // Form chỉnh sửa thông tin
    const editProfileForm = document.getElementById('editProfileForm');
    const editName = document.getElementById('editName');
    const editEmail = document.getElementById('editEmail');
    const editPhone = document.getElementById('editPhone');
    const editAddress = document.getElementById('editAddress');
    const editBirthday = document.getElementById('editBirthday');
    
    // Đơn hàng
    const ordersTableBody = document.getElementById('ordersTableBody');
    
    // Sản phẩm yêu thích
    const wishlistGrid = document.getElementById('wishlistGrid');
    
    // Sổ địa chỉ
    const addressGrid = document.getElementById('addressGrid');
    const addAddressBtn = document.getElementById('addAddressBtn');
    
    // Đổi mật khẩu
    const changePasswordForm = document.getElementById('changePasswordForm');
    const currentPassword = document.getElementById('currentPassword');
    const newPassword = document.getElementById('newPassword');
    const confirmNewPassword = document.getElementById('confirmNewPassword');
    const toggleCurrentPassword = document.getElementById('toggleCurrentPassword');
    const toggleNewPassword = document.getElementById('toggleNewPassword');
    const toggleConfirmNewPassword = document.getElementById('toggleConfirmNewPassword');
    
    // ========== KHỞI TẠO TRANG ==========
    function initAccountPage() {
        // Kiểm tra đăng nhập
        if (!currentUser) {
            // Chưa đăng nhập, chuyển hướng về trang chủ
            window.location.href = 'index.html';
            return;
        }
        
        // Tải dữ liệu người dùng
        loadUserData();
        
        // Tải dữ liệu đơn hàng
        loadOrders();
        
        // Tải sản phẩm yêu thích
        loadWishlist();
        
        // Tải địa chỉ
        loadAddresses();
        
        // Thêm sự kiện cho menu
        accountMenuItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Xóa active của tất cả
                accountMenuItems.forEach(i => i.classList.remove('active'));
                accountSections.forEach(s => s.classList.remove('active'));
                
                // Thêm active cho mục được chọn
                this.classList.add('active');
                
                // Hiển thị section tương ứng
                const sectionId = this.getAttribute('data-section');
                document.getElementById(`${sectionId}-section`).classList.add('active');
            });
        });
        
        // Xử lý form chỉnh sửa thông tin
        if (editProfileForm) {
            editProfileForm.addEventListener('submit', handleEditProfile);
        }
        
        // Xử lý form đổi mật khẩu
        if (changePasswordForm) {
            changePasswordForm.addEventListener('submit', handleChangePassword);
        }
        
        // Xử lý thêm địa chỉ mới
        if (addAddressBtn) {
            addAddressBtn.addEventListener('click', handleAddAddress);
        }
        
        // Xử lý hiển thị/ẩn mật khẩu
        if (toggleCurrentPassword) {
            toggleCurrentPassword.addEventListener('click', function() {
                togglePasswordVisibility(currentPassword, toggleCurrentPassword);
            });
        }
        
        if (toggleNewPassword) {
            toggleNewPassword.addEventListener('click', function() {
                togglePasswordVisibility(newPassword, toggleNewPassword);
            });
        }
        
        if (toggleConfirmNewPassword) {
            toggleConfirmNewPassword.addEventListener('click', function() {
                togglePasswordVisibility(confirmNewPassword, toggleConfirmNewPassword);
            });
        }
    }
    
    // ========== HÀM TẢI DỮ LIỆU NGƯỜI DÙNG ==========
    function loadUserData() {
        if (currentUser) {
            // Hiển thị thông tin người dùng
            if (userFullName) userFullName.textContent = currentUser.name || 'Nguyễn Văn A';
            if (userEmail) userEmail.textContent = currentUser.email || 'nguyenvana@email.com';
            if (userPhone) userPhone.textContent = currentUser.phone || '0123456789';
            if (userJoinDate) userJoinDate.textContent = formatDate(currentUser.createdAt) || '01/01/2023';
            
            // Cập nhật form chỉnh sửa
            if (editName) editName.value = currentUser.name || '';
            if (editEmail) editEmail.value = currentUser.email || '';
            if (editPhone) editPhone.value = currentUser.phone || '';
            if (editAddress) editAddress.value = currentUser.address || '';
            if (editBirthday) editBirthday.value = currentUser.birthday || '';
            
            // Cập nhật radio gender
            if (currentUser.gender) {
                const genderRadio = document.querySelector(`input[name="gender"][value="${currentUser.gender}"]`);
                if (genderRadio) genderRadio.checked = true;
            }
            
            // Cập nhật avatar nếu có
            if (currentUser.avatar && userAvatar) {
                userAvatar.src = currentUser.avatar;
            }
        }
    }
    
    // ========== HÀM TẢI ĐƠN HÀNG ==========
    function loadOrders() {
        if (orders.length === 0) return;
        
        // Cập nhật số lượng đơn hàng
        if (orderCount) orderCount.textContent = orders.length;
        
        // Xóa nội dung cũ
        ordersTableBody.innerHTML = '';
        
        // Hiển thị đơn hàng
        orders.forEach(order => {
            const row = document.createElement('tr');
            
            // Định dạng ngày
            const orderDate = formatDate(order.date);
            
            // Định dạng trạng thái
            let statusClass = '';
            switch(order.status) {
                case 'delivered': statusClass = 'status-delivered'; break;
                case 'pending': statusClass = 'status-pending'; break;
                case 'cancelled': statusClass = 'status-cancelled'; break;
            }
            
            row.innerHTML = `
                <td>#${order.id}</td>
                <td>${orderDate}</td>
                <td>${order.items.length} sản phẩm</td>
                <td>${formatPrice(order.total)} VNĐ</td>
                <td><span class="order-status ${statusClass}">${getStatusText(order.status)}</span></td>
                <td><a href="#" class="btn" style="padding: 5px 10px; font-size: 12px;">Xem chi tiết</a></td>
            `;
            
            ordersTableBody.appendChild(row);
        });
    }
    
    // ========== HÀM TẢI SẢN PHẨM YÊU THÍCH ==========
    function loadWishlist() {
        if (wishlist.length === 0) return;
        
        // Cập nhật số lượng
        if (wishlistCount) wishlistCount.textContent = wishlist.length;
        
        // Xóa nội dung cũ
        wishlistGrid.innerHTML = '';
        
        // Hiển thị sản phẩm yêu thích
        wishlist.forEach(product => {
            const item = document.createElement('div');
            item.className = 'wishlist-item';
            item.innerHTML = `
                <div class="remove-wishlist" data-id="${product.id}">
                    <i class="fas fa-times"></i>
                </div>
                <div class="wishlist-item-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="wishlist-item-info">
                    <div class="wishlist-item-name">${product.name}</div>
                    <div class="wishlist-item-price">${formatPrice(product.price)} VNĐ</div>
                    <a href="product-detail.html?id=${product.id}" class="btn" style="padding: 8px; font-size: 12px; width: 100%;">Xem chi tiết</a>
                </div>
            `;
            
            wishlistGrid.appendChild(item);
        });
        
        // Thêm sự kiện xóa sản phẩm yêu thích
        const removeButtons = document.querySelectorAll('.remove-wishlist');
        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                removeFromWishlist(productId);
            });
        });
    }
    
    // ========== HÀM TẢI ĐỊA CHỈ ==========
    function loadAddresses() {
        if (addresses.length === 0) {
            // Nếu chưa có địa chỉ, tạo địa chỉ mẫu
            addresses = [
                {
                    id: 1,
                    type: 'home',
                    name: currentUser.name || 'Nguyễn Văn A',
                    phone: currentUser.phone || '0123456789',
                    address: '123 Đường Hoa Hồng, Phường 1, Quận 1, TP.HCM',
                    isDefault: true
                }
            ];
            localStorage.setItem('bloomshop_addresses', JSON.stringify(addresses));
        }
        
        // Xóa nội dung cũ
        addressGrid.innerHTML = '';
        
        // Hiển thị địa chỉ
        addresses.forEach(address => {
            const addressCard = document.createElement('div');
            addressCard.className = `address-card ${address.isDefault ? 'default' : ''}`;
            
            let typeText = '';
            switch(address.type) {
                case 'home': typeText = 'Địa chỉ nhà'; break;
                case 'office': typeText = 'Địa chỉ văn phòng'; break;
                case 'other': typeText = 'Địa chỉ khác'; break;
            }
            
            addressCard.innerHTML = `
                <div class="address-type">${typeText} ${address.isDefault ? '- Mặc định' : ''}</div>
                <h4>${address.name}</h4>
                <p>${address.phone}</p>
                <p>${address.address}</p>
                <div class="address-actions">
                    <button class="btn btn-edit" data-id="${address.id}" style="padding: 8px 15px; font-size: 14px;">Chỉnh sửa</button>
                    <button class="btn btn-delete" data-id="${address.id}" style="padding: 8px 15px; font-size: 14px;">Xóa</button>
                </div>
            `;
            
            addressGrid.appendChild(addressCard);
        });
        
        // Thêm sự kiện cho nút chỉnh sửa và xóa
        const editButtons = document.querySelectorAll('.btn-edit');
        const deleteButtons = document.querySelectorAll('.btn-delete');
        
        editButtons.forEach(button => {
            button.addEventListener('click', function() {
                const addressId = this.getAttribute('data-id');
                editAddress(addressId);
            });
        });
        
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const addressId = this.getAttribute('data-id');
                deleteAddress(addressId);
            });
        });
    }
    
    // ========== HÀM XỬ LÝ CHỈNH SỬA THÔNG TIN ==========
    function handleEditProfile(e) {
        e.preventDefault();
        
        // Lấy dữ liệu từ form
        const name = editName.value.trim();
        const email = editEmail.value.trim();
        const phone = editPhone.value.trim();
        const address = editAddress.value.trim();
        const birthday = editBirthday.value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        
        // Kiểm tra dữ liệu
        if (!name || !email || !phone) {
            showNotification('error', 'Lỗi', 'Vui lòng nhập đầy đủ thông tin bắt buộc');
            return;
        }
        
        // Kiểm tra email
        if (!validateEmail(email)) {
            showNotification('error', 'Lỗi', 'Email không hợp lệ');
            return;
        }
        
        // Cập nhật thông tin người dùng
        currentUser.name = name;
        currentUser.email = email;
        currentUser.phone = phone;
        currentUser.address = address;
        currentUser.birthday = birthday;
        currentUser.gender = gender;
        
        // Lưu vào localStorage
        localStorage.setItem('bloomshop_user', JSON.stringify(currentUser));
        
        // Cập nhật giao diện
        loadUserData();
        
        // Hiển thị thông báo
        showNotification('success', 'Thành công', 'Cập nhật thông tin thành công');
    }
    
    // ========== HÀM XỬ LÝ ĐỔI MẬT KHẨU ==========
    function handleChangePassword(e) {
        e.preventDefault();
        
        const currentPass = currentPassword.value;
        const newPass = newPassword.value;
        const confirmPass = confirmNewPassword.value;
        
        // Kiểm tra dữ liệu
        if (!currentPass || !newPass || !confirmPass) {
            showNotification('error', 'Lỗi', 'Vui lòng nhập đầy đủ thông tin');
            return;
        }
        
        // Kiểm tra mật khẩu mới
        if (newPass.length < 6) {
            showNotification('error', 'Lỗi', 'Mật khẩu mới phải có ít nhất 6 ký tự');
            return;
        }
        
        // Kiểm tra xác nhận mật khẩu
        if (newPass !== confirmPass) {
            showNotification('error', 'Lỗi', 'Mật khẩu xác nhận không khớp');
            return;
        }
        
        // Lấy danh sách user từ localStorage
        const users = JSON.parse(localStorage.getItem('bloomshop_users')) || [];
        
        // Tìm user hiện tại
        const userIndex = users.findIndex(u => u.email === currentUser.email);
        
        if (userIndex !== -1) {
            // Kiểm tra mật khẩu hiện tại
            if (users[userIndex].password !== currentPass) {
                showNotification('error', 'Lỗi', 'Mật khẩu hiện tại không đúng');
                return;
            }
            
            // Cập nhật mật khẩu
            users[userIndex].password = newPass;
            localStorage.setItem('bloomshop_users', JSON.stringify(users));
            
            // Reset form
            changePasswordForm.reset();
            
            // Hiển thị thông báo
            showNotification('success', 'Thành công', 'Đổi mật khẩu thành công');
        }
    }
    
    // ========== HÀM XỬ LÝ THÊM ĐỊA CHỈ MỚI ==========
    function handleAddAddress() {
        // Tạo địa chỉ mới
        const newAddress = {
            id: Date.now(),
            type: 'home',
            name: currentUser.name || 'Nguyễn Văn A',
            phone: currentUser.phone || '0123456789',
            address: 'Nhập địa chỉ mới...',
            isDefault: false
        };
        
        addresses.push(newAddress);
        localStorage.setItem('bloomshop_addresses', JSON.stringify(addresses));
        
        // Tải lại danh sách địa chỉ
        loadAddresses();
        
        // Hiển thị thông báo
        showNotification('success', 'Thành công', 'Đã thêm địa chỉ mới');
    }
    
    // ========== HÀM XÓA SẢN PHẨM YÊU THÍCH ==========
    function removeFromWishlist(productId) {
        wishlist = wishlist.filter(item => item.id !== productId);
        localStorage.setItem('bloomshop_wishlist', JSON.stringify(wishlist));
        
        // Cập nhật giao diện
        loadWishlist();
        
        // Cập nhật số lượng
        if (wishlistCount) wishlistCount.textContent = wishlist.length;
        
        // Hiển thị thông báo
        showNotification('success', 'Thành công', 'Đã xóa sản phẩm khỏi danh sách yêu thích');
    }
    
    // ========== HÀM CHỈNH SỬA ĐỊA CHỈ ==========
    function editAddress(addressId) {
        const address = addresses.find(a => a.id == addressId);
        if (!address) return;
        
        const newAddress = prompt('Chỉnh sửa địa chỉ:', address.address);
        if (newAddress && newAddress.trim() !== '') {
            address.address = newAddress.trim();
            localStorage.setItem('bloomshop_addresses', JSON.stringify(addresses));
            loadAddresses();
            showNotification('success', 'Thành công', 'Đã cập nhật địa chỉ');
        }
    }
    
    // ========== HÀM XÓA ĐỊA CHỈ ==========
    function deleteAddress(addressId) {
        if (confirm('Bạn có chắc chắn muốn xóa địa chỉ này?')) {
            addresses = addresses.filter(a => a.id != addressId);
            localStorage.setItem('bloomshop_addresses', JSON.stringify(addresses));
            loadAddresses();
            showNotification('success', 'Thành công', 'Đã xóa địa chỉ');
        }
    }
    
    // ========== HÀM HỖ TRỢ ==========
    function formatDate(dateString) {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('vi-VN');
    }
    
    function getStatusText(status) {
        switch(status) {
            case 'delivered': return 'Đã giao';
            case 'pending': return 'Đang xử lý';
            case 'cancelled': return 'Đã hủy';
            default: return 'Đang xử lý';
        }
    }
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function togglePasswordVisibility(passwordInput, toggleIcon) {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.classList.remove('fa-eye');
            toggleIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            toggleIcon.classList.remove('fa-eye-slash');
            toggleIcon.classList.add('fa-eye');
        }
    }
    
    function showNotification(type, title, message) {
        // Sử dụng notification modal từ auth.js nếu có
        if (typeof window.showNotification === 'function') {
            window.showNotification(`${title}: ${message}`);
        } else {
            // Tạo thông báo đơn giản
            alert(`${title}: ${message}`);
        }
    }
    
    function formatPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    
    // ========== KHỞI TẠO ==========
    initAccountPage();
});