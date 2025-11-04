// File: src/AdminPage.js (Đã sửa để thêm chức năng Login)

import React, { useState } from 'react';
import AdminLogin from './AdminLogin'; // Import component Login
// Import AdminPage đã sửa ở các bước trước

const AdminPage = () => {
    // State mới để quản lý trạng thái đăng nhập
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    // MÁNG DỮ LIỆU MẪU (BẠN CÓ THỂ THÊM CODE CRUD Ở ĐÂY NẾU CHƯA CÓ)
    const [dishes, setDishes] = useState([
        { id: 1, name: 'Phở Bò', category: 'Món nước', price: '40.000 VNĐ' },
        { id: 2, name: 'Bánh Mì', category: 'Món ăn nhanh', price: '25.000 VNĐ' },
    ]);

    // Hàm CRUD (Mô phỏng - Cần hoàn thiện nếu chưa có)
    const handleCreate = () => { /* ... code CRUD ... */ };
    const handleEdit = () => { /* ... code CRUD ... */ };
    const handleDelete = (id) => { /* ... code CRUD ... */ 
        const updatedDishes = dishes.filter(dish => dish.id !== id);
        setDishes(updatedDishes);
        alert(`Đã xóa món ăn có ID: ${id}`);
    };

    // --- LOGIC HIỂN THỊ ---
    
    // Nếu chưa đăng nhập, hiển thị trang Login
    if (!isLoggedIn) {
        return <AdminLogin onLoginSuccess={() => setIsLoggedIn(true)} />;
    }

    // Nếu đã đăng nhập, hiển thị Dashboard chính thức
    return (
        <div className="container" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>🔑 Quản Trị Danh Sách Món Ăn</h2>
                <button 
                    onClick={() => setIsLoggedIn(false)} // Nút Đăng xuất
                    style={{ backgroundColor: '#ccc', color: '#333' }}
                >
                    Đăng Xuất
                </button>
            </div>
            
            {/* Nút Thêm Mới (Chỉ hiển thị khi đã đăng nhập) */}
            <button 
                onClick={handleCreate} 
                style={{ 
                    padding: '10px 20px', 
                    backgroundColor: '#4CAF50', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px', 
                    cursor: 'pointer',
                    marginBottom: '20px'
                }}
            >
                ➕ Thêm Món Ăn Mới
            </button>

            {/* Bảng Hiển Thị Dữ Liệu (Chỉ hiển thị khi đã đăng nhập) */}
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                {/* ... code bảng và các hàm Edit/Delete ... */}
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>ID</th>
                        <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>Tên Món</th>
                        <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>Giá</th>
                        <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>Thao Tác</th>
                    </tr>
                </thead>
                <tbody>
                    {dishes.map((dish) => (
                        <tr key={dish.id}>
                            <td style={{ border: '1px solid #ddd', padding: '12px' }}>{dish.id}</td>
                            <td style={{ border: '1px solid #ddd', padding: '12px' }}>{dish.name}</td>
                            <td style={{ border: '1px solid #ddd', padding: '12px' }}>{dish.category}</td>
                            <td style={{ border: '1px solid #ddd', padding: '12px' }}>{dish.price}</td>
                            <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>
                                <button onClick={() => handleEdit(dish)} style={{ marginRight: '10px', backgroundColor: '#2196F3' }}>Sửa</button>
                                <button onClick={() => handleDelete(dish.id)} style={{ backgroundColor: '#f44336' }}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPage;