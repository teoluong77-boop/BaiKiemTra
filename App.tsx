// File: src/App.tsx (ĐÃ HOÀN TẤT ROUTING VÀ SỬA LỖI IMPORT)

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./styles.css";

// @ts-ignore
import Home from "./Home";
// @ts-ignore
import Layout from "./Layout";
// @ts-ignore
import Trang1 from "./Trang1"; 
// @ts-ignore
import Trang2 from "./Trang2"; 
// @ts-ignore
import ListProduct from "./ListProduct";

// @ts-ignore
import ListProducts_SP from "./ListProducts_SP"; // Trang chủ mặc định

//@ts-ignore
import Chitietsanpham from "./Chitietsanpham"; // Trang chi tiết chính

//@ts-ignore
import ProductDetail from "./ProductDetail";

// ✅ IMPORT TRANG ADMIN MỚI
// @ts-ignore
import AdminPage from "./pages/AdminPage"; 


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Index Route: Trang chủ mặc định */}
          <Route index element={<ListProducts_SP />} /> 
          
          {/* Route Danh sách Món ăn */}
          <Route path="trang1" element={<Trang1 />} />
          
          {/* Route Trang Chi tiết (Trang2) - Giữ để khớp bài mẫu */}
          <Route path="trang2" element={<Trang2 />} /> 
          
          {/* Route ADMIN MỚI */}
          <Route path="admin" element={<AdminPage />} /> 

          {/* Route Chi tiết Sản phẩm (Theo ID) */}
          <Route path="sanpham/:id" element={<Chitietsanpham />} /> 
          <Route path="detail/:id" element={<ProductDetail />} />
          
          {/* Thêm các Route khác nếu cần */}
          {/* Route 404 */}
          <Route path="*" element={<h2>404 | Không tìm thấy trang</h2>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}