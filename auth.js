// JavaScript xử lý đăng nhập/đăng ký
document.addEventListener('DOMContentLoaded', function() {
    // ========== BIẾN TOÀN CỤC ==========
    let currentUser = JSON.parse(localStorage.getItem('bloomshop_user')) || null;
    
    // ========== DOM ELEMENTS ==========
    // Modal đăng nhập/đăng ký
    const authModal = document.getElementById('authModal');
    const closeAuth = document.getElementById('closeAuth');
    const userIcon = document.querySelector('.fa-user');
    
    // Tabs
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const authTitle = document.getElementById('authTitle');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    // Form inputs
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const registerName = document.getElementById('registerName');
    const registerEmail = document.getElementById('registerEmail');
    const registerPhone = document.getElementById('registerPhone');
    const registerPassword = document.getElementById('registerPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    
    // Buttons
    const loginFormBtn = document.querySelector('#loginForm .auth-btn');
    const registerFormBtn = document.querySelector('#registerForm .auth-btn');
    
    // Password toggles
    const toggleLoginPassword = document.getElementById('toggleLoginPassword');
    const toggleRegisterPassword = document.getElementById('toggleRegisterPassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    
    // Modal thông báo
    const notificationModal = document.getElementById('notificationModal');
    const notificationIcon = document.getElementById('notificationIcon');
    const notificationTitle = document.getElementById('notificationTitle');
    const notificationMessage = document.getElementById('notificationMessage');
    const notificationClose = document.getElementById('notificationClose');
    
    // ========== KHỞI TẠO TRANG ==========
    function initAuth() {
        // Kiểm tra nếu đã đăng nhập
        if (currentUser) {
            updateUserUI();
        }
        
        // Thêm sự kiện cho icon user
        if (userIcon) {
            userIcon.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (currentUser) {
                    // Nếu đã đăng nhập, hiển thị menu user
                    toggleUserMenu();
                } else {
                    // Nếu chưa đăng nhập, hiển thị modal đăng nhập
                    openAuthModal('login');
                }
            });
        }
        
        // Đóng modal khi click nút đóng
        if (closeAuth) {
            closeAuth.addEventListener('click', closeAuthModal);
        }
        
        // Đóng modal khi click bên ngoài
        if (authModal) {
            authModal.addEventListener('click', function(e) {
                if (e.target === authModal) {
                    closeAuthModal();
                }
            });
        }
        
        // Chuyển tab
        if (loginTab) {
            loginTab.addEventListener('click', function() {
                switchAuthTab('login');
            });
        }
        
        if (registerTab) {
            registerTab.addEventListener('click', function() {
                switchAuthTab('register');
            });
        }
        
        // Xử lý đăng nhập
        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                handleLogin();
            });
        }
        
        // Xử lý đăng ký
        if (registerForm) {
            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                handleRegister();
            });
        }
        
        // Xử lý hiển thị/ẩn mật khẩu
        if (toggleLoginPassword) {
            toggleLoginPassword.addEventListener('click', function() {
                togglePasswordVisibility(loginPassword, toggleLoginPassword);
            });
        }
        
        if (toggleRegisterPassword) {
            toggleRegisterPassword.addEventListener('click', function() {
                togglePasswordVisibility(registerPassword, toggleRegisterPassword);
            });
        }
        
        if (toggleConfirmPassword) {
            toggleConfirmPassword.addEventListener('click', function() {
                togglePasswordVisibility(confirmPassword, toggleConfirmPassword);
            });
        }
        
        // Đóng modal thông báo
        if (notificationClose) {
            notificationClose.addEventListener('click', function() {
                notificationModal.classList.remove('active');
            });
        }
        
        // Đóng modal thông báo khi click bên ngoài
        if (notificationModal) {
            notificationModal.addEventListener('click', function(e) {
                if (e.target === notificationModal) {
                    notificationModal.classList.remove('active');
                }
            });
        }
    }
    
    // ========== HÀM MỞ MODAL ĐĂNG NHẬP/ĐĂNG KÝ ==========
    function openAuthModal(tab = 'login') {
        if (authModal) {
            authModal.classList.add('active');
            switchAuthTab(tab);
        }
    }
    
    // ========== HÀM ĐÓNG MODAL ĐĂNG NHẬP/ĐĂNG KÝ ==========
    function closeAuthModal() {
        if (authModal) {
            authModal.classList.remove('active');
        }
    }
    
    // ========== HÀM CHUYỂN TAB ==========
    function switchAuthTab(tab) {
        // Cập nhật tabs
        if (loginTab && registerTab) {
            loginTab.classList.remove('active');
            registerTab.classList.remove('active');
            
            if (tab === 'login') {
                loginTab.classList.add('active');
                if (authTitle) authTitle.textContent = 'Đăng Nhập';
            } else {
                registerTab.classList.add('active');
                if (authTitle) authTitle.textContent = 'Đăng Ký';
            }
        }
        
        // Cập nhật forms
        if (loginForm && registerForm) {
            loginForm.classList.remove('active');
            registerForm.classList.remove('active');
            
            if (tab === 'login') {
                loginForm.classList.add('active');
            } else {
                registerForm.classList.add('active');
            }
        }
        
        // Reset forms
        if (tab === 'login') {
            if (loginForm) loginForm.reset();
        } else {
            if (registerForm) registerForm.reset();
        }
    }
    
    // ========== HÀM XỬ LÝ ĐĂNG NHẬP ==========
    function handleLogin() {
        const email = loginEmail.value.trim();
        const password = loginPassword.value.trim();
        
        // Kiểm tra dữ liệu
        if (!email || !password) {
            showNotification('error', 'Lỗi', 'Vui lòng nhập đầy đủ thông tin');
            return;
        }
        
        // Kiểm tra định dạng email
        if (!validateEmail(email)) {
            showNotification('error', 'Lỗi', 'Email không hợp lệ');
            return;
        }
        
        // Lấy danh sách user từ localStorage
        const users = JSON.parse(localStorage.getItem('bloomshop_users')) || [];
        
        // Tìm user
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            // Đăng nhập thành công
            currentUser = {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone
            };
            
            // Lưu thông tin đăng nhập
            localStorage.setItem('bloomshop_user', JSON.stringify(currentUser));
            
            // Cập nhật giao diện
            updateUserUI();
            
            // Đóng modal
            closeAuthModal();
            
            // Hiển thị thông báo
            showNotification('success', 'Thành công', `Chào mừng ${user.name} đã quay trở lại!`);
            
            // Reset form
            loginForm.reset();
        } else {
            // Sai thông tin
            showNotification('error', 'Lỗi', 'Email hoặc mật khẩu không chính xác');
        }
    }
    
function handleRegister() {
    const name = registerName.value.trim();
    const username = registerUsername.value.trim(); // Thêm dòng này
    const email = registerEmail.value.trim();
    const phone = registerPhone.value.trim();
    const password = registerPassword.value.trim();
    const confirm = confirmPassword.value.trim();
    
    // Kiểm tra dữ liệu
    if (!name || !username || !email || !phone || !password || !confirm) { // Thêm username
        showNotification('error', 'Lỗi', 'Vui lòng nhập đầy đủ thông tin');
        return;
    }
    
    // Kiểm tra username
    if (!validateUsername(username)) {
        showNotification('error', 'Lỗi', 'Tên đăng nhập chỉ được chứa chữ cái, số và dấu gạch dưới (3-20 ký tự)');
        return;
    }
    
    // Kiểm tra định dạng email
    if (!validateEmail(email)) {
        showNotification('error', 'Lỗi', 'Email không hợp lệ');
        return;
    }
    
    // Kiểm tra số điện thoại
    if (!validatePhone(phone)) {
        showNotification('error', 'Lỗi', 'Số điện thoại không hợp lệ');
        return;
    }
    
    // Kiểm tra mật khẩu
    if (password.length < 6) {
        showNotification('error', 'Lỗi', 'Mật khẩu phải có ít nhất 6 ký tự');
        return;
    }
    
    // Kiểm tra xác nhận mật khẩu
    if (password !== confirm) {
        showNotification('error', 'Lỗi', 'Mật khẩu xác nhận không khớp');
        return;
    }
    
    // Kiểm tra điều khoản
    const acceptTerms = document.getElementById('acceptTerms');
    if (!acceptTerms.checked) {
        showNotification('error', 'Lỗi', 'Vui lòng đồng ý với điều khoản dịch vụ');
        return;
    }
    
    // Lấy danh sách user từ localStorage
    const users = JSON.parse(localStorage.getItem('bloomshop_users')) || [];
    
    // Kiểm tra email đã tồn tại chưa
    const existingEmail = users.find(u => u.email === email);
    if (existingEmail) {
        showNotification('error', 'Lỗi', 'Email này đã được đăng ký');
        return;
    }
    
    // Kiểm tra username đã tồn tại chưa
    const existingUsername = users.find(u => u.username === username);
    if (existingUsername) {
        showNotification('error', 'Lỗi', 'Tên đăng nhập này đã được sử dụng');
        return;
    }
    
    // Tạo user mới
    const newUser = {
        id: Date.now(),
        name: name,
        username: username, // Thêm username
        email: email,
        phone: phone,
        password: password,
        createdAt: new Date().toISOString()
    };
    
    // Thêm user vào danh sách
    users.push(newUser);
    localStorage.setItem('bloomshop_users', JSON.stringify(users));
    
    // Tự động đăng nhập
    currentUser = {
        id: newUser.id,
        name: newUser.name,
        username: newUser.username, // Thêm username
        email: newUser.email,
        phone: newUser.phone
    };
    
    localStorage.setItem('bloomshop_user', JSON.stringify(currentUser));
    
    // Cập nhật giao diện
    updateUserUI();
    
    // Đóng modal
    closeAuthModal();
    
    // Hiển thị thông báo
    showNotification('success', 'Thành công', `Chào mừng ${username} đến với BloomShop!`);
    
    // Reset form
    registerForm.reset();
}

// ========== HÀM KIỂM TRA USERNAME ==========
function validateUsername(username) {
    const re = /^[a-zA-Z0-9_]{3,20}$/;
    return re.test(username);
}
    
    // ========== HÀM ĐĂNG XUẤT ==========
    function handleLogout() {
        // Xóa thông tin user
        localStorage.removeItem('bloomshop_user');
        currentUser = null;
        
        // Cập nhật giao diện
        updateUserUI();
        
        // Đóng menu user
        const userMenu = document.querySelector('.user-menu');
        if (userMenu) {
            userMenu.classList.remove('active');
        }
        
        // Hiển thị thông báo
        showNotification('success', 'Thành công', 'Đã đăng xuất thành công');
    }
    
    // ========== HÀM CẬP NHẬT GIAO DIỆN USER ==========
    function updateUserUI() {
        const header = document.querySelector('header');
        const userIcon = document.querySelector('.fa-user');
        
        if (currentUser) {
            // Thêm class cho header
            if (header) {
                header.classList.add('user-logged-in');
            }
            
            // Thay đổi icon user
            if (userIcon) {
                userIcon.style.color = '#e91e63';
                userIcon.title = `Xin chào, ${currentUser.name}`;
            }
            
            // Tạo hoặc cập nhật menu user
            createUserMenu();
        } else {
            // Xóa class cho header
            if (header) {
                header.classList.remove('user-logged-in');
            }
            
            // Đặt lại icon user
            if (userIcon) {
                userIcon.style.color = '';
                userIcon.title = 'Tài khoản';
            }
            
            // Xóa menu user nếu có
            const userMenu = document.querySelector('.user-menu');
            if (userMenu) {
                userMenu.remove();
            }
        }
    }
    
    // ========== HÀM TẠO MENU USER ==========
    function createUserMenu() {
        // Xóa menu cũ nếu có
        const oldMenu = document.querySelector('.user-menu');
        if (oldMenu) {
            oldMenu.remove();
        }
        
        // Tạo menu mới
        const userIconContainer = document.querySelector('.header-icons .fa-user').parentElement;
        const userMenu = document.createElement('div');
        userMenu.className = 'user-menu';
        userMenu.innerHTML = `
            <div class="user-menu-header" style="padding: 15px 20px; background-color: #f9f7f7; border-bottom: 1px solid #e0e0e0;">
                <div style="font-weight: 600; color: #2d5a27;">${currentUser.name}</div>
                <div style="font-size: 14px; color: #777;">${currentUser.email}</div>
            </div>
                <a href="account.html" class="user-menu-item">
                <i class="fas fa-user-circle"></i> Thông tin tài khoản
                </a>
            <a href="#" class="user-menu-item">
                <i class="fas fa-shopping-bag"></i> Đơn hàng của tôi
            </a>
            <div class="user-menu-item" id="logoutBtn" style="cursor: pointer; color: #e91e63;">
                <i class="fas fa-sign-out-alt"></i> Đăng xuất
            </div>
        `;
        
        // Thêm menu vào DOM
        userIconContainer.appendChild(userMenu);
        
        // Thêm sự kiện cho nút đăng xuất
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', handleLogout);
        }
        
        // Thêm sự kiện đóng menu khi click bên ngoài
        document.addEventListener('click', function(e) {
            if (!userIconContainer.contains(e.target)) {
                userMenu.classList.remove('active');
            }
        });
    }
    
    // ========== HÀM HIỂN THỊ/ẨN MENU USER ==========
    function toggleUserMenu() {
        const userMenu = document.querySelector('.user-menu');
        if (userMenu) {
            userMenu.classList.toggle('active');
        }
    }
    
    // ========== HÀM HIỂN THỊ/ẨN MẬT KHẨU ==========
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
    
    // ========== HÀM HIỂN THỊ THÔNG BÁO ==========
    function showNotification(type, title, message) {
        // Cập nhật icon và màu sắc
        notificationIcon.className = 'fas';
        
        if (type === 'success') {
            notificationIcon.classList.add('fa-check-circle', 'success');
        } else if (type === 'error') {
            notificationIcon.classList.add('fa-exclamation-circle', 'error');
        } else {
            notificationIcon.classList.add('fa-info-circle', 'info');
        }
        
        // Cập nhật tiêu đề và nội dung
        notificationTitle.textContent = title;
        notificationMessage.textContent = message;
        
        // Hiển thị modal
        notificationModal.classList.add('active');
    }
    
    // ========== HÀM KIỂM TRA EMAIL ==========
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // ========== HÀM KIỂM TRA SỐ ĐIỆN THOẠI ==========
    function validatePhone(phone) {
        const re = /^[0-9]{10,11}$/;
        return re.test(phone);
    }
    
    // ========== HÀM TOÀN CỤC ĐỂ MỞ MODAL ĐĂNG NHẬP ==========
    window.openLoginModal = function() {
        openAuthModal('login');
    };
    
    window.openRegisterModal = function() {
        openAuthModal('register');
    };
    
    // ========== KHỞI TẠO ==========
    initAuth();
});