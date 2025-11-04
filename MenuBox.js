// File: src/layouts/MenuBox.js (ĐÃ HOÀN TẤT 5 MỤC CHÍNH VÀ FIX LỖI VỊ TRÍ)

import React from 'react';
import { Link } from 'react-router-dom'; 

const MenuBox = () => {
    // Style cho submenu (Buộc ẩn đi, position, và width TRẢI DÀI)
    const subMenuStyle = { 
        position: 'absolute', 
        display: 'none', 
        top: '100%', 
        // ⚠️ FIX LỖI: Căn giữa Megamenu (left: 50% và transform)
        left: '50%', 
        transform: 'translateX(-50%)', 
        width: '1200px', // ĐẨY RỘNG CHO CẢ KHỐI (Khớp với container_main)
        zIndex: 9999, // ĐẨY LÊN TRÊN
        backgroundColor: '#fff', 
        border: '1px solid #ccc',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        padding: '0' 
    }; 
    
    // ⚠️ FIX LỖI MENU DỌC: Thêm lại style cho thẻ li Menu Bar (phải là relative và inline-block)
    const listItemStyle = { 
        position: 'relative', 
        display: 'inline-block', // BẮT BUỘC ĐỂ MENU CHÍNH NẰM NGANG
        margin: '0 5px' 
    }; 
    
    // ⚠️ FIX LỖI MEGABOX DỌC: Thêm lại style cho Megamenu Container (Buộc hiển thị cột)
    const megamenuContainerStyle = {
        display: 'flex', 
        flexWrap: 'wrap', 
        padding: '20px',
        width: '100%',
        listStyle: 'none' 
    };
    
    // Style cho mục con trong Megamenu (25% = 4 cột)
    const subMenuItemStyle = { 
        width: '25%', 
        padding: '10px 15px', 
        listStyle: 'none', 
        boxSizing: 'border-box'
    };
    
    // Style cho link trong submenu (Đảm bảo chữ rõ ràng)
    const subMenuLinkStyle = { 
        color: '#333', 
        fontSize: '14px',
        textDecoration: 'none',
        display: 'block'
    };

    return (
        <div className="box_menu">
            <nav id="menu" className="menu">
                <ul>
                    {/* MENU 1: GIỚI THIỆU ẨM THỰC VIỆT */}
                    <li className="icon_menu active" style={listItemStyle}>
                        <Link to="/gioi-thieu-am-thuc" title="Giới thiệu ẩm thực">GIỚI THIỆU ẨM THỰC</Link>
                        <ul style={subMenuStyle}>
                            <div className="container_main" style={megamenuContainerStyle}>
                                <li style={subMenuItemStyle}><a href="https://vietnam.travel/things-to-do/vietnam-food-guide" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> TẦM NHÌN - SỨ MẠNG</a></li>
                                <li style={subMenuItemStyle}><a href="https://www.tasteatlas.com/most-popular-dishes-in-vietnam" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> GIÁ TRỊ CỐT LÕI</a></li>
                                <li style={subMenuItemStyle}><a href="https://vietnam.travel/things-to-do/vietnam-food-guide" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> LỊCH SỬ HÌNH THÀNH PHÁT TRIỂN</a></li>
                                <li style={subMenuItemStyle}><a href="https://vietnam.travel/things-to-do/vietnam-food-guide" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> CƠ SỞ ĐÀO TẠO</a></li>
                                <li style={subMenuItemStyle}><a href="https://www.cnn.com/travel/article/vietnam-best-dishes/index.html" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> THÀNH TỰU</a></li>
                                <li style={subMenuItemStyle}><a href="https://www.youtube.com/user/vovworld" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> TRIẾT LÍ GIÁO DỤC</a></li>
                                <li style={subMenuItemStyle}><a href="https://vietnam.travel/" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> BAN GIÁM HIỆU</a></li>
                                <li style={subMenuItemStyle}><a href="https://vietnam.travel/" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> KHOA/PHÒNG/TRUNG TÂM</a></li>
                            </div>
                        </ul>
                    </li>

                    {/* MENU 2: CHƯƠNG TRÌNH HỌC */}
                    <li className="icon_menu " style={listItemStyle}>
                        <Link to="/danh-muc-mon-an" title="Danh mục món ăn">CHƯƠNG TRÌNH HỌC</Link>
                        <ul style={subMenuStyle}>
                            <div className="container_main" style={megamenuContainerStyle}>
                                <li style={subMenuItemStyle}><a href="https://www.bbcgoodfood.com/recipes/collection/vietnamese-recipes" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> Đào tạo đại học</a></li>
                                <li style={subMenuItemStyle}><a href="https://www.allrecipes.com/" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> Đào tạo sau đại học</a></li>
                                <li style={subMenuItemStyle}><a href="https://www.bbcgoodfood.com/recipes/collection/vietnamese-recipes" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> ĐÀO TẠO VĂN BẰNG 2</a></li>
                                <li style={subMenuItemStyle}><a href="https://www.bbcgoodfood.com/recipes/collection/vietnamese-recipes" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> KHUNG CHƯƠNG TRÌNH ĐÀO TẠO</a></li>
                            </div>
                        </ul>
                    </li>
                    
                    {/* MENU 3: TRẢI NGHIỆM SINH VIÊN */}
                    <li className="icon_menu " style={listItemStyle}>
                        <Link to="/trai-nghiem-am-thuc" title="Trải nghiệm ẩm thực">TRẢI NGHIỆM SINH VIÊN</Link>
                        <ul style={subMenuStyle}>
                            <div className="container_main" style={megamenuContainerStyle}>
                                <li style={subMenuItemStyle}><a href="https://www.tripadvisor.com/Restaurants-g293924-Vietnam.html" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> THÔNG BÁO</a></li>
                                <li style={subMenuItemStyle}><a href="https://www.eater.com/vietnam-food-guide" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> HOẠT ĐỘNG SINH VIÊN</a></li>
                            </div>
                        </ul>
                    </li>

                    {/* MENU 4: BẢN TIN & SỰ KIỆN */}
                    <li className="icon_menu " style={listItemStyle}>
                        <Link to="/tin-tuc-am-thuc" title="Tin tức ẩm thực">BẢN TIN &amp; SỰ KIỆN</Link>
                        <ul style={subMenuStyle}>
                            <div className="container_main" style={megamenuContainerStyle}>
                                <li style={subMenuItemStyle}><a href="https://www.eater.com/vietnam-food-guide" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> Góc báo chí</a></li>
                                <li style={subMenuItemStyle}><a href="https://www.eater.com/vietnam-food-guide" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> TẠP CHÍ KHOA HỌC</a></li>
                            </div>
                        </ul>
                    </li>

                    {/* MENU 5: TUYỂN DỤNG - VIỆC LÀM */}
                    <li className="icon_menu " style={listItemStyle}>
                        <Link to="/tuyen-dung-nghe-bep" title="Cơ hội nghề bếp">TUYỂN DỤNG - VIỆC LÀM</Link>
                        <ul style={subMenuStyle}>
                            <div className="container_main" style={megamenuContainerStyle}>
                                <li style={subMenuItemStyle}><a href="https://www.careerlink.vn/tim-viec-lam/nha-hang-khach-san" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> Tuyển Dụng GDU </a></li>
                                <li style={subMenuItemStyle}><a href="https://www.careerlink.vn/tim-viec-lam/nha-hang-khach-san" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> Tuyển Dụng Ngành Bếp</a></li>
                            </div>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default MenuBox;