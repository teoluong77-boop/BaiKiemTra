

import { products } from "./models/product.ts"; 
import React from "react";
import { useNavigate } from "react-router-dom";

const ListProducts_SP = () => { 
  const navigate = useNavigate();
  return (
    <div style={{ padding: "20px" }}>
      <h2>🍜 Danh sách Món ăn Việt Nam</h2> 
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/sanpham/${p.id}`)}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              cursor: 'pointer',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{ height: "180px", width: "100%", objectFit: "cover", borderRadius: '4px' }} 
            />
            <h4 style={{ margin: '10px 0 5px 0' }}>{p.title}</h4>
            <p style={{ fontWeight: 'bold', color: '#c0392b' }}>
              {p.price.toLocaleString('vi-VN')} VND 
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ListProducts_SP;