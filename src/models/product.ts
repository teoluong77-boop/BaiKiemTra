

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export const products: Product[] = [
  {
    id: 1,
    title: "Phở Bò Tái Lăn",
    price: 65000,
    description: "Phở bò truyền thống Hà Nội với nước dùng trong, ngọt thanh, thơm mùi gừng nướng và hồi quế. Bò được xào lăn nhanh với tỏi trước khi cho vào tô.",
    category: "Món nước",
    image: "https://bizweb.dktcdn.net/thumb/grande/100/493/671/articles/hinh-anh-web-58.jpg?v=1727146043333", 
    rating: { rate: 4.8, count: 950 },
  },
  {
    id: 2,
    title: "Bánh Mì Thịt Nướng",
    price: 30000,
    description: "Bánh mì giòn rụm kẹp thịt heo nướng than hoa, patê, chả lụa, rau dưa chua và rau thơm. Vị đậm đà và đầy đủ dinh dưỡng.",
    category: "Món khô",
    image: "https://cdn.tgdd.vn/Files/2021/08/20/1376583/cach-lam-banh-mi-thit-nuong-cuc-don-gian-bang-chai-nhua-co-san-tai-nha-202108201640593483.jpg", 
    rating: { rate: 4.9, count: 1250 },
  },
  {
    id: 3,
    title: "Bún Chả Hà Nội",
    price: 45000,
    description: "Thịt lợn ba chỉ và chả băm nướng trên than hồng, ăn kèm bún, rau sống tươi ngon...",
    category: "Món nước",
    image: "https://daiductai.vn/upload/filemanager/B%C3%BAn%20ch%E1%BA%A3/bun-cha.jpg", 
    rating: { rate: 4.7, count: 820 },
  },
  {
    id: 4,
    title: "Gỏi Cuốn Tôm Thịt",
    price: 15000,
    description: "Tôm, thịt luộc, bún tươi và rau xà lách được cuốn trong bánh tráng mỏng. Ăn kèm nước chấm tương đen đậu phộng béo ngậy.",
    category: "Món khai vị",
    image: "https://www.cet.edu.vn/wp-content/uploads/2018/11/goi-cuon-tom-thit.jpg", 
    rating: { rate: 4.6, count: 700 },
  },
  {
    id: 5,
    title: "Bún Bò Huế Đặc Biệt",
    price: 60000,
    description: "Món bún cay nồng của miền Trung với nước dùng đậm vị sả và mắm ruốc, ăn kèm thịt bò, chả cua và tiết heo.",
    category: "Món nước",
    image: "https://daivietourist.vn/wp-content/uploads/2025/04/quan-bun-bo-hue-1.jpg", 
    rating: { rate: 4.5, count: 650 },
  },
  {
    id: 6,
    title: "Bánh Xèo Miền Tây",
    price: 40000,
    description: "Chiếc bánh mỏng, giòn tan với lớp bột nghệ vàng ươm, nhân tôm, thịt heo và giá đỗ. Ăn kèm rau sống và nước chấm chua ngọt.",
    category: "Món bánh",
    image: "https://cdn.tgdd.vn/Files/2017/02/24/953891/3-cach-lam-banh-xeo-mien-tay-thom-ngon-gion-rum-202303031501527280.jpg", 
    rating: { rate: 4.4, count: 580 },
  },
  {
    id: 7,
    title: "Cao Lầu Hội An",
    price: 45000,
    description: "Đặc sản của Hội An, mì sợi dai được ngâm tro củi tràm, ăn kèm thịt xá xíu, da heo chiên giòn và nước sốt sệt đặc trưng.",
    category: "Món khô",
    image: "https://statics.vinwonders.com/cao-lau-hoi-an-1_1631093015.jpg", 
    rating: { rate: 4.7, count: 910 },
  },
  {
    id: 8,
    title: "Cơm Tấm Sườn Bì Chả",
    price: 55000,
    description: "Cơm tấm hạt dẻo thơm, ăn kèm sườn nướng mật ong, bì (thịt heo thái sợi), chả trứng hấp và nước mắm ớt chua ngọt.",
    category: "Món cơm",
    image: "https://statics.vinwonders.com/com-tam-ngon-o-sai-gon-0_1630562640.jpg", 
    rating: { rate: 4.8, count: 1500 },
  },
  {
    id: 9,
    title: "Chè Ba Màu",
    price: 25000,
    description: "Món tráng miệng thanh mát với ba lớp đậu xanh, đậu đỏ, và thạch lá dứa, ăn cùng nước cốt dừa béo ngậy và đá bào.",
    category: "Món tráng miệng",
    image: "https://media.phunutoday.vn/files/upload_images/2016/07/18/ch-3-mau-phunutoday.jpg", 
    rating: { rate: 4.6, count: 610 },
  },
  {
    id: 10,
    title: "Bánh Khọt Vũng Tàu",
    price: 35000,
    description: "Bánh nhỏ hình chén làm từ bột gạo, nước cốt dừa, có nhân tôm, ăn kèm với rau xà lách và cải xanh để cuốn.",
    category: "Món bánh",
    image: "https://cdn.tgdd.vn/Files/2021/03/24/1337824/top-5-quan-banh-khot-ngon-nhat-vung-tau-ma-ban-nen-thu-202201061117494732.jpg", 
    rating: { rate: 4.3, count: 550 },
  },
  {
    id: 11,
    title: "Nước Mía Giải Khát",
    price: 15000,
    description: "Thức uống giải khát phổ biến, được ép trực tiếp từ cây mía tươi, thường thêm chút tắc (quất) để tăng hương vị.",
    category: "Đồ uống",
    image: "https://cdn.tgdd.vn/Files/2020/04/14/1249119/3-cach-lam-nuoc-mia-ep-thom-ep-cam-ep-dau-tay-ng-1-760x367.jpg", 
    rating: { rate: 4.7, count: 1100 },
  },
  {
    id: 12,
    title: "Lẩu Mắm Miền Tây",
    price: 180000,
    description: "Món lẩu đặc trưng với nước dùng nấu từ mắm cá linh, ăn kèm với thịt, cá, tôm và hơn 20 loại rau đồng đặc trưng của miền Tây Nam Bộ.",
    category: "Món lẩu",
    image: "https://gcs.tripi.vn/public-tripi/tripi-feed/img/473527ifG/image-cach-nau-lau-mam-mien-tay-que-ngoai-164982848733254.jpg", 
    rating: { rate: 4.5, count: 450 },
  },
];