

import React from "react";
import { Link } from "react-router-dom"; 

const Footer = () => {
  return (
    <>
      {}
      <div className="footer_main" style={{ 
          padding: '30px 0', 
          backgroundColor: '#fff', 
          borderTop: '1px solid #eee' 
      }}>
        {}
        <div className="container_main" style={{ 
            textAlign: 'center' // Căn giữa tất cả
        }}>
          
          {}
          <div className="logo_footer" style={{ 
              maxWidth: '250px', 
              display: 'inline-block' // Căn giữa logo
          }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img 
                src="https://giadinh.edu.vn/upload/photo/logofooter-8814.png" 
                alt="Gia Dinh University Logo" 
                style={{ height: 'auto', maxHeight: '70px' }}
              />
            </Link>
          </div>

          {}
          <div className="content_footer" style={{ 
              textAlign: 'center', // Đã sửa: Căn giữa text
              maxWidth: '500px', 
              margin: '15px auto 0 auto' // Thêm margin để tách logo và text
          }}>
            <h2 style={{ margin: '0 0 10px 0', color: '#183761', fontSize: '18px' }}>
                WEBSITE ẨM THỰC VIỆT NAM
            </h2>
            <p style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#555' }}>
                Địa chỉ tham khảo: 123 Đường Món Ăn, Phường Đặc Sản, Quận Ngon, TP.HCM
            </p>
            <p style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#555' }}>
                Hotline Đặt Món: 0901 234 567 - 0888 765 432
            </p>
            <p style={{ margin: '0', fontSize: '14px', color: '#555' }}>
                Email: lienhe@monanviet.vn
            </p>
          </div>

        </div>
      </div>

      {}
      <div className="footer_copyright" style={{ padding: '15px 0', backgroundColor: '#183761', color: '#fff' }}>
        <div className="container_main" style={{ 
            textAlign: 'center' 
        }}>
          <p style={{ margin: '0', fontSize: '14px' }}>
            © 2024 Dự án Giữa Kỳ - Món ăn Việt. | <Link to="/sitemap" style={{ color: '#fff', textDecoration: 'none' }}>Sitemap</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;