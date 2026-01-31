// Dữ liệu mẫu cho tài khoản
if (!localStorage.getItem('bloomshop_orders')) {
    const sampleOrders = [
        {
            id: 'BS2023001',
            date: new Date('2023-10-15').toISOString(),
            items: [
                { id: 1, name: 'Bó Hoa Hồng Đỏ', price: 350000, quantity: 1 },
                { id: 2, name: 'Hoa Cẩm Chướng', price: 280000, quantity: 2 }
            ],
            total: 910000,
            status: 'delivered'
        },
        {
            id: 'BS2023002',
            date: new Date('2023-11-20').toISOString(),
            items: [
                { id: 3, name: 'Hoa Tulip Hồng', price: 420000, quantity: 1 }
            ],
            total: 420000,
            status: 'pending'
        }
    ];
    localStorage.setItem('bloomshop_orders', JSON.stringify(sampleOrders));
}

if (!localStorage.getItem('bloomshop_wishlist')) {
    const sampleWishlist = [
        { id: 4, name: 'Hoa Lan Trắng', price: 550000, image: 'img/lan1.jpg' },
        { id: 5, name: 'Hoa Hồng Trắng', price: 380000, image: 'img/hh2.jpg' },
        { id: 6, name: 'Hoa Hướng Dương', price: 320000, image: 'img/hd1.jpg' }
    ];
    localStorage.setItem('bloomshop_wishlist', JSON.stringify(sampleWishlist));
}