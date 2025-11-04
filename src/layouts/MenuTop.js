// File: src/layouts/MenuTop.js (ĐÃ THÊM MỤC ADMIN VÀ BỎ GẠCH CHÂN)

import React from "react";
import { Link } from "react-router-dom"; 

const MenuTop = () => {
  // Style áp dụng cho tất cả Link (bỏ gạch chân và màu trắng)
  const linkStyle = { color: '#fff', padding: '0 10px', textDecoration: 'none' };

  return (
    // THẺ BỌC CHÍNH
    <div className="menu_top"> 
      {/* UL: BUỘC HIỂN THỊ NGANG (Menu Bar) */}
      <ul style={{ 
        display: 'flex', 
        listStyle: 'none', 
        padding: 0, 
        margin: 0 
      }}> 
        
        {/* ✅ MỤC MỚI: QUẢN TRỊ ADMIN */}
        <li>
          <Link 
            to="/admin" 
            style={{ 
              ...linkStyle, 
              fontWeight: 'bold', 
              color: '#ffeb3b' // Màu vàng nổi bật cho Admin
            }}
          >
            QUẢN TRỊ ADMIN
          </Link>
        </li>
        
        {/* CÁC MỤC GỐC CÒN LẠI (ĐÃ SỬA LINK VÀ BỎ GẠCH CHÂN) */}
        <li><Link to="/trang1" style={linkStyle}>Danh sách Món ăn</Link></li>
        <li><Link to="/sanpham/1" style={linkStyle}>Chi tiết Món ăn</Link></li>
        <li><a target="_blank" href="https://www.youtube.com/watch?v=FjI6iHn9p4w" rel="noopener noreferrer" style={linkStyle}>Công thức Phở</a></li>
        <li><a target="_blank" href="https://www.who.int/vietnam/health-topics/food-safety" rel="noopener noreferrer" style={linkStyle}>An toàn VSTP</a></li>
        <li><a target="_blank" href="https://www.tripadvisor.com/Restaurants-g293924-Vietnam.html" rel="noopener noreferrer" style={linkStyle}>Xem Đánh giá</a></li>
        <li><a target="_blank" href="https://www.vietnamtourism.gov.vn/" rel="noopener noreferrer" style={linkStyle}>Tài nguyên Ẩm thực</a></li>
        <li><a target="_blank" href="https://www.bbcgoodfood.com/" rel="noopener noreferrer" style={linkStyle}>Thư viện Công thức</a></li>
        <li><a target="_blank" href="https://vietnam.travel/" rel="noopener noreferrer" style={linkStyle}>E-Brochure Món Việt</a></li>
        <li><Link to="/lien-he" style={linkStyle}>Liên hệ</Link></li>
      </ul>
    </div>
  );
};
export default MenuTop;