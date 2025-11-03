// File: src/App.tsx (Đã sửa lỗi WEBPACK_DEFAULT_EXPORT)

// Bỏ các @ts-ignore nếu không cần thiết, hoặc import trực tiếp tên component

import "./styles.css";


import Footer from "./layouts/Footer"; 
import MenuBox from "./layouts/MenuBox"; 
import MenuTop from "./layouts/MenuTop"; 


import Home from "./Home";
import Layout from "./Layout";
import Trang1 from "./Trang1"; 
import Trang2 from "./Trang2"; 
import ListProduct from "./ListProduct";
import ListProducts_SP from "./ListProducts_SP";
import Chitietsanpham from "./Chitietsanpham";
import ProductDetail from "./ProductDetail";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Giữ nguyên cấu trúc Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<ListProducts_SP />} />
          <Route path="trang1" element={<Trang1 />} />
          <Route path="trang2" element={<Trang2 />} />
          <Route path="sanpham/:id" element={<Chitietsanpham />} />
          <Route path="detail/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}