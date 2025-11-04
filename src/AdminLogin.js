// File: src/AdminLogin.js (Tạo mới)

import React, { useState } from 'react';

const AdminLogin = ({ onLoginSuccess }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // MẬT KHẨU MẪU: 'admin123'
    const CORRECT_PASSWORD = 'admin123'; 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === CORRECT_PASSWORD) {
            // Gọi hàm từ AdminPage để chuyển sang trạng thái đã đăng nhập
            onLoginSuccess(); 
        } else {
            setError('Mật khẩu không đúng. Vui lòng thử lại.');
        }
    };

    return (
        <div style={{ padding: '50px', maxWidth: '400px', margin: '50px auto', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <h2>🔐 Đăng Nhập Admin</h2>
            <p style={{ color: '#f00' }}>{error}</p>
            <form onSubmit={handleSubmit}>
                <label style={{ display: 'block', marginBottom: '8px', textAlign: 'left' }}>Mật khẩu:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Nhập mật khẩu (admin123)"
                    required
                    style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }}
                />
                <button 
                    type="submit"
                    style={{ width: '100%', padding: '10px', backgroundColor: '#183761', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                >
                    Đăng Nhập
                </button>
            </form>
        </div>
    );
};

export default AdminLogin;