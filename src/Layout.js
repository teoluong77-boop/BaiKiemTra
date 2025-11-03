

import React from "react"; 
import { Outlet, Link } from "react-router-dom";
import MenuTop from "./layouts/MenuTop"; 
import MenuBox from "./layouts/MenuBox";
import Footer from "./layouts/Footer"; 

const Layout = () => {
    return (
        <div id="container">
            <header id="header">
                {/* 1. HEADER TOP (BLUE BAR) */}
                <div className="header_top" style={{ background: '#183761', padding: '8px 0' }}>
                    <div className="container_main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        
                        {/* ICON NHỎ BÊN TRÁI (Giữ nguyên) */}
                        <div className="small_icon" style={{ maxWidth: '50px' }}> 
                            <Link to="/">
                                <img 
                                    src="https://giadinh.edu.vn/upload/photo/logofooter-8814.png" 
                                    alt="Icon" 
                                    style={{ height: '30px' }} 
                                />
                            </Link>
                        </div>
                        
                        {/* MENUTOP (LINKS BÊN PHẢI) */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <MenuTop /> 
                            <div className="search-menu">{/* Khu vực Tìm kiếm / User */}</div>
                        </div>
                    </div>
                </div>

                {/* 2. HEADER CHÍNH (WHITE BAR) - LOGO LỚN VÀ MENU CHÍNH */}
                <div className="header">
                    <div className="container_main">
                        {}
                        <div className="logo">
                            <Link to="/">
                                <img 
                                    src="https://giadinh.edu.vn/upload/photo/logofooter-8814.png" 
                                    alt="Gia Dinh University Logo" 
                                    style={{ height: 'auto', maxHeight: '70px' }} 
                                />
                            </Link>
                        </div>
                        
                        {}
                        <nav id="main_menu" style={{ position: 'relative', flexGrow: 1, display: 'flex', justifyContent: 'center' }}> 
                            <MenuBox /> 
                        </nav>
                        
                        <div className="menu_mobile">{/* ... */}</div>
                    </div>
                </div>
            </header>

            <main id="main_content"><Outlet /></main>
            <Footer />
        </div>
    );
};
export default Layout;