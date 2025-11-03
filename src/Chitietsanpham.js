

import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { products } from "./models/product.ts"; 

const Chitietsanpham = () => { 
  const { id } = useParams(); 
  const navigate = useNavigate();
  

  const food = products.find(p => p.id === parseInt(id));

  if (!food) {
    return <h2>Không tìm thấy Món ăn này.</h2>;
  }

  return (
    <div className="product-detail-container" style={{ padding: '40px', maxWidth: '800px', margin: 'auto' }}>
      <button onClick={() => navigate(-1)} className="back-button" style={{ marginBottom: '20px' }}>
        &larr; Quay lại Danh sách Món ăn
      </button>

      <div className="product-detail-card" style={{ display: 'flex', gap: '30px' }}>
        <div className="detail-image" style={{ width: '40%' }}>
          <img src={food.image} alt={food.title} style={{ width: '100%', borderRadius: '8px' }} />
        </div>
        
        <div className="detail-info" style={{ width: '60%' }}>
          <h1>{food.title}</h1>
          
          <p className="detail-price" style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#e74c3c' }}>
            Giá: {food.price.toLocaleString('vi-VN')} VND
          </p>

          <p className="detail-category">Danh mục: {food.category}</p>
          
          <h3 className="detail-description-title">Mô tả:</h3>
          <p className="detail-description-content">{food.description}</p>
          
          <p className="detail-rating">
            Đánh giá: ⭐️ {food.rating.rate} / 5 ({food.rating.count} lượt)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chitietsanpham;