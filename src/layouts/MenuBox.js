

import React from 'react';
import { Link } from 'react-router-dom'; 

const MenuBox = () => {
    
    const subMenuStyle = { 
        position: 'absolute', 
        display: 'none', 
        top: '100%', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        width: '1200px', 
        zIndex: 9999, 
        backgroundColor: '#fff', 
        border: '1px solid #ccc',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        padding: '0' 
    }; 
    
    const listItemStyle = { 
        position: 'relative', 
        display: 'inline-block', 
        margin: '0 5px' 
    }; 
    
    
    const mainLinkStyle = {
        textDecoration: 'none', 
        color: '#333', 
        padding: '10px',
        fontWeight: 'bold' 
    };
    
    
    const megamenuContainerStyle = {
        display: 'flex', 
        flexWrap: 'wrap', 
        padding: '20px',
        width: '100%',
        listStyle: 'none' 
    };
    
    
    const subMenuItemStyle = { 
        width: '25%', 
        padding: '10px 15px', 
        listStyle: 'none', 
        boxSizing: 'border-box'
    };
    
    
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
                        <Link to="/gioi-thieu-am-thuc" title="Giới thiệu ẩm thực" style={mainLinkStyle}>GIỚI THIỆU ẨM THỰC</Link>
                        <ul style={subMenuStyle}>
                            <div className="container_main" style={megamenuContainerStyle}>
                                {/* NỘI DUNG ĐÃ SỬA SANG ẨM THỰC */}
                                <li style={subMenuItemStyle}><a href="https://vietnam.travel/things-to-do/vietnam-food-guide" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> TINH HOA ẨM THỰC VIỆT</a></li>
                                <li style={subMenuItemStyle}><a href="https://www.tasteatlas.com/most-popular-dishes-in-vietnam" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> NGUYÊN LIỆU CỐT LÕI</a></li>
                                <li style={subMenuItemStyle}><a href="https://vietnam.travel/things-to-do/vietnam-food-guide" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> LỊCH SỬ PHÁT TRIỂN</a></li>
                                <li style={subMenuItemStyle}><a href="https://vietnam.travel/things-to-do/vietnam-food-guide" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> ẨM THỰC VÙNG MIỀN</a></li>
                                <li style={subMenuItemStyle}><a href="https://www.cnn.com/travel/article/vietnam-best-dishes/index.html" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> BẢN ĐỒ MÓN ĂN</a></li>
                                <li style={subMenuItemStyle}><a href="https://www.youtube.com/user/vovworld" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> TIÊU CHUẨN AN TOÀN</a></li>
                                <li style={subMenuItemStyle}><a href="https://guide.michelin.com/vn/en/article/features/a-brief-history-of-vietnamese-pho" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> ĐẦU BẾP NỔI TIẾNG</a></li>
                                <li style={subMenuItemStyle}><a href="https://www.goodfood.com.au/recipes/vietnamese-recipes" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> SÁCH VÀ TÀI LIỆU</a></li>
                            </div>
                        </ul>
                    </li>

                    {/* MENU 2: CÔNG THỨC & MÓN ĂN */}
                    <li className="icon_menu " style={listItemStyle}>
                        <Link to="/danh-muc-mon-an" title="Danh mục món ăn" style={mainLinkStyle}>CÔNG THỨC &amp; MÓN ĂN</Link>
                        <ul style={subMenuStyle}>
                            <div className="container_main" style={megamenuContainerStyle}>
                                <li style={subMenuItemStyle}><a href="https://www.bbcgoodfood.com/recipes/collection/vietnamese-recipes" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> Món Ăn Miền Bắc</a></li>
                                <li style={subMenuItemStyle}><a href="https://www.allrecipes.com/recipes/704/world-cuisine/asian/vietnamese/" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> Món Ăn Miền Trung</a></li>
                                <li style={subMenuItemStyle}><a href="https://www.loveandlemons.com/vietnamese-recipes/" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> Món Ăn Miền Nam</a></li>
                                <li style={subMenuItemStyle}><a href="https://www.bonappetit.com/recipes/vietnamese/slideshow/vietnamese-vegetarian-recipes" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> Món Chay</a></li>
                            </div>
                        </ul>
                    </li>
                    
                    {/* MENU 3: ĐÁNH GIÁ & TRẢI NGHIỆM */}
                    <li className="icon_menu " style={listItemStyle}>
                        <Link to="/trai-nghiem-am-thuc" title="Trải nghiệm ẩm thực" style={mainLinkStyle}>ĐÁNH GIÁ &amp; TRẢI NGHIỆM</Link>
                        <ul style={subMenuStyle}>
                            <div className="container_main" style={megamenuContainerStyle}>
                                <li style={subMenuItemStyle}><a href="https://www.tripadvisor.com/Restaurants-g293924-Vietnam.html" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> Review Nhà Hàng (Tripadvisor)</a></li>
                                <li style={subMenuItemStyle}><a href="https://www.eater.com/vietnam-food-guide" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> Ẩm Thực Đường Phố (Eater)</a></li>
                                <li style={subMenuItemStyle}><a href="https://guide.michelin.com/vn/en/selection/vietnam/restaurants" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> Sao Michelin Việt Nam</a></li>
                            </div>
                        </ul>
                    </li>

                    {/* MENU 4: BẢN TIN & SỰ KIỆN */}
                    <li className="icon_menu " style={listItemStyle}>
                        <Link to="/tin-tuc-am-thuc" title="Tin tức ẩm thực" style={mainLinkStyle}>BẢN TIN &amp; SỰ KIỆN</Link>
                        <ul style={subMenuStyle}>
                            <div className="container_main" style={megamenuContainerStyle}>
                                <li style={subMenuItemStyle}><a href="https://e.vnexpress.net/news/travel/food" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> Tin tức Ẩm thực (VnExpress)</a></li>
                                <li style={subMenuItemStyle}><a href="https://vietnam.travel/things-to-do/food-and-drink-events" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> Lễ hội Ẩm thực (Vietnam Travel)</a></li>
                            </div>
                        </ul>
                    </li>

                    {/* MENU 5: TUYỂN DỤNG - VIỆC LÀM */}
                    <li className="icon_menu " style={listItemStyle}>
                        <Link to="/tuyen-dung-nghe-bep" title="Cơ hội nghề bếp" style={mainLinkStyle}>TUYỂN DỤNG - VIỆC LÀM</Link>
                        <ul style={subMenuStyle}>
                            <div className="container_main" style={megamenuContainerStyle}>
                                <li style={subMenuItemStyle}><a href="https://www.careerlink.vn/tim-viec-lam/nha-hang-khach-san" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> Tuyển Dụng Ngành Bếp (CareerLink)</a></li>
                                <li style={subMenuItemStyle}><a href="https://www.hoteljob.vn/" target="_blank" rel="noopener noreferrer" style={subMenuLinkStyle}><i className="far fa-angle-right"></i> Cơ Hội Ngành F&B (HotelJob)</a></li>
                            </div>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default MenuBox;