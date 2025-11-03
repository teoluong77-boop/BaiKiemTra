

import React from "react";
import { Link } from "react-router-dom"; 

const MenuTop = () => {
  return (
    
    <div className="menu_top"> 
      {}
      <ul style={{ 
        display: 'flex', 
        listStyle: 'none', 
        padding: 0, 
        margin: 0 
      }}> 
        {}
        <li><Link to="/trang1" style={{ color: '#fff', padding: '0 10px', textDecoration: 'none' }}>Danh sách Món ăn</Link></li>
        <li><Link to="/sanpham/1" style={{ color: '#fff', padding: '0 10px', textDecoration: 'none' }}>Chi tiết Món ăn</Link></li>
        <li><a target="_blank" href="https://youtu.be/c9GfHgMk1ac?si=SBwghblnXHtG5N_5" rel="noopener noreferrer" style={{ color: '#fff', padding: '0 10px', textDecoration: 'none' }}>Công thức Phở</a></li>
        <li><a target="_blank" href="https://www.who.int/vietnam/health-topics/food-safety" rel="noopener noreferrer" style={{ color: '#fff', padding: '0 10px', textDecoration: 'none' }}>An toàn VSTP</a></li>
        <li><a target="_blank" href="https://www.tripadvisor.com/Restaurants-g293924-Vietnam.html" rel="noopener noreferrer" style={{ color: '#fff', padding: '0 10px', textDecoration: 'none' }}>Xem Đánh giá</a></li>
        <li><a target="_blank" href="https://www.vietnamtourism.gov.vn/" rel="noopener noreferrer" style={{ color: '#fff', padding: '0 10px', textDecoration: 'none' }}>Tài nguyên Ẩm thực</a></li>
        <li><a target="_blank" href="https://www.bbcgoodfood.com/" rel="noopener noreferrer" style={{ color: '#fff', padding: '0 10px', textDecoration: 'none' }}>Thư viện Công thức</a></li>
        <li><a target="_blank" href="https://vietnam.travel/" rel="noopener noreferrer" style={{ color: '#fff', padding: '0 10px', textDecoration: 'none' }}>E-Brochure Món Việt</a></li>
        <li><Link to="/lien-he" style={{ color: '#fff', padding: '0 10px', textDecoration: 'none' }}>Liên hệ</Link></li>
      </ul>
    </div>
  );
};
export default MenuTop;