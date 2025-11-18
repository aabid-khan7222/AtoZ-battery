// Product Data
// Fields: id, name, category, mrp, imageUrl, description, specs, badge, warranty
const products = [
    // EPIQ Series
    { id: 1, name: "Exide EPIQ 35L (35 Ah)", category: "automotive", mrp: 5473, imageUrl: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=400&q=80", description: "Premium EPIQ series battery with 42F+35P warranty", specs: ["12V", "35Ah", "42F+35P Warranty", "Maintenance Free"], badge: null, warranty: "42F+35P" },
    { id: 2, name: "Exide EPIQ 40LBH (40 Ah)", category: "automotive", mrp: 6150, imageUrl: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80", description: "High-performance EPIQ battery for premium vehicles", specs: ["12V", "40Ah", "42F+35P Warranty", "Maintenance Free"], badge: null, warranty: "42F+35P" },
    { id: 3, name: "Exide EPIQ DIN74L (74 Ah)", category: "automotive", mrp: 13271, imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80", description: "Top-tier EPIQ battery for luxury and premium vehicles", specs: ["12V", "74Ah", "42F+35P Warranty", "Maintenance Free"], badge: "Premium", warranty: "42F+35P" },
    
    // MATRIX Series
    { id: 4, name: "Exide MATRIX MT40B20L/R (35 Ah)", category: "automotive", mrp: 4889, imageUrl: "https://t4.ftcdn.net/jpg/04/20/38/41/360_F_420384111_5fzxWlWxvB7bg5BROxfKdBbgBYB2TwGP.jpg", description: "Reliable MATRIX series battery with advanced technology", specs: ["12V", "35Ah", "36F+36P Warranty", "Maintenance Free"], badge: null, warranty: "36F+36P" },
    { id: 5, name: "Exide MATRIX MTRED45L (45 Ah)", category: "automotive", mrp: 8912, imageUrl: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202005/861a4abe_2fec_44aa_aa21_c79ceca1cdc3_660_080520125004.jpg", description: "Powerful MATRIX battery for mid-size vehicles", specs: ["12V", "45Ah", "36F+36P Warranty", "Maintenance Free"], badge: null, warranty: "36F+36P" },
    { id: 6, name: "Exide MATRIX MTREDDIN100 (100 Ah)", category: "automotive", mrp: 20215, imageUrl: "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/M5-2025/11821/1719462197562/front-left-side-47.jpg", description: "Heavy-duty MATRIX battery for large vehicles and SUVs", specs: ["12V", "100Ah", "36F+36P Warranty", "Maintenance Free"], badge: "Best Seller", warranty: "36F+36P" },
    
    // MILEAGE ISS Series
    { id: 7, name: "Exide MILEAGE ISS MLM42(ISS) (38 Ah)", category: "automotive", mrp: 5944, imageUrl: "https://caronphone.com/_next/image?url=https%3A%2F%2Fstatic.caronphone.com%2Fpublic%2Fbrands%2F34%2F288%2F288.webp&w=3840&q=75.jpg", description: "MILEAGE ISS series with superior starting power", specs: ["12V", "38Ah", "30F+30P Warranty", "ISS Technology"], badge: null, warranty: "30F+30P" },
    { id: 8, name: "Exide MILEAGE ISS MLN55(ISS) (45 Ah)", category: "automotive", mrp: 7799, imageUrl: "https://content.carlelo.com/uploads/model/volkswagen-taigun-1.webp", description: "Enhanced MILEAGE ISS battery for reliable performance", specs: ["12V", "45Ah", "30F+30P Warranty", "ISS Technology"], badge: null, warranty: "30F+30P" },
    { id: 9, name: "Exide MILEAGE ISS MLDIN70(ISS) (70 Ah)", category: "automotive", mrp: 10234, imageUrl: "https://cdn-s3.autocarindia.com/hyundai/new-venue/3New.jpg", description: "High-capacity MILEAGE ISS battery for larger vehicles", specs: ["12V", "70Ah", "30F+30P Warranty", "ISS Technology"], badge: null, warranty: "30F+30P" },
    
    // MILEAGE Series
    { id: 10, name: "Exide MILEAGE ML38B20L/R (35 Ah)", category: "automotive", mrp: 4599, imageUrl: "https://capitalhyundai.co.in/wp-content/uploads/2023/03/Hyundai-Creta-1.webp", description: "Economical MILEAGE battery with excellent value", specs: ["12V", "35Ah", "30F+30P Warranty", "Maintenance Free"], badge: "Popular", warranty: "30F+30P" },
    { id: 11, name: "Exide MILEAGE ML40LBH/RBH (40 Ah)", category: "automotive", mrp: 5635, imageUrl: "https://www.popularmaruti.com/blog/wp-content/uploads/2023/04/Maruti-Celerio.jpg", description: "Versatile MILEAGE battery for compact and mid-size cars", specs: ["12V", "40Ah", "30F+30P Warranty", "Maintenance Free"], badge: null, warranty: "30F+30P" },
    { id: 12, name: "Exide MILEAGE MLDIN44R/LH (44 Ah)", category: "automotive", mrp: 6799, imageUrl: "https://img.autocarindia.com/Galleries/20180428082944_Honda%20Amaze%20front%20action%202.jpg", description: "Reliable MILEAGE battery for standard vehicles", specs: ["12V", "44Ah", "30F+30P Warranty", "Maintenance Free"], badge: null, warranty: "30F+30P" },
    { id: 13, name: "Exide MILEAGE ML45D21LBH (45 Ah)", category: "automotive", mrp: 7422, imageUrl: "https://spn-sta.spinny.com/blog/20220228132846/ford_2017_ecosport_019.jpg?compress=true&quality=80&w=800&dpr=2.6", description: "Powerful MILEAGE battery for enhanced performance", specs: ["12V", "45Ah", "30F+30P Warranty", "Maintenance Free"], badge: null, warranty: "30F+30P" },
    { id: 14, name: "Exide MILEAGE ML55B24L(T1) (50 Ah)", category: "automotive", mrp: 7511, imageUrl: "https://images.drivespark.com/img/2020/12/2019-mahindra-tuv300-launched-in-india-1608113862.jpg", description: "Durable MILEAGE battery for mid-size sedans", specs: ["12V", "50Ah", "30F+30P Warranty", "Maintenance Free"], badge: null, warranty: "30F+30P" },
    { id: 15, name: "Exide MILEAGE MLDIN50 (50 Ah)", category: "automotive", mrp: 7464, imageUrl: "https://www.financialexpress.com/auto/images/model-media-1744307951314.jpg?w=320", description: "Standard MILEAGE battery for reliable daily use", specs: ["12V", "50Ah", "30F+30P Warranty", "Maintenance Free"], badge: null, warranty: "30F+30P" },
    { id: 16, name: "Exide MILEAGE ML55D23L (54 Ah)", category: "automotive", mrp: 7806, imageUrl: "https://capitalhyundai.co.in/wp-content/uploads/2023/08/article-13-12.webp", description: "Enhanced capacity MILEAGE battery", specs: ["12V", "54Ah", "30F+30P Warranty", "Maintenance Free"], badge: null, warranty: "30F+30P" },
    { id: 17, name: "Exide MILEAGE MLDIN55/R (55 Ah)", category: "automotive", mrp: 8541, imageUrl: "https://images.prismic.io/carwow/ZuwzPLVsGrYSvl64_2024SuzukiSwiftUltraRedfrontquarterstatic.png?auto=format&cs=tinysrgb&fit=max&q=60", description: "Premium MILEAGE battery for superior performance", specs: ["12V", "55Ah", "30F+30P Warranty", "Maintenance Free"], badge: null, warranty: "30F+30P" },
    { id: 18, name: "Exide MILEAGE MLDIN60 (60 Ah)", category: "automotive", mrp: 8748, imageUrl: "https://caronphone.com/_next/image?url=https%3A%2F%2Fstatic.caronphone.com%2Fpublic%2Fbrands%2F10%2F222%2F222.webp&w=3840&q=75", description: "High-capacity MILEAGE battery for larger cars", specs: ["12V", "60Ah", "30F+30P Warranty", "Maintenance Free"], badge: "Best Seller", warranty: "30F+30P" },
    { id: 19, name: "Exide MILEAGE MLDIN66/66A (66 Ah)", category: "automotive", mrp: 8782, imageUrl: "https://media.istockphoto.com/id/1460883145/photo/ford-explorer-in-mountain-scenery.jpg?s=612x612&w=0&k=20&c=hI0ympw_nzEsbSedH8D-t1rOahGkVRvgV0FFyQISRNU=", description: "Powerful MILEAGE battery for SUVs and luxury cars", specs: ["12V", "66Ah", "30F+30P Warranty", "Maintenance Free"], badge: null, warranty: "30F+30P" },
    { id: 20, name: "Exide MILEAGE ML75D23LBH (68 Ah)", category: "automotive", mrp: 8220, imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2020/06/2019-mahindra-scorpio_1551778107.jpeg", description: "Heavy-duty MILEAGE battery for premium vehicles", specs: ["12V", "68Ah", "30F+30P Warranty", "Maintenance Free"], badge: null, warranty: "30F+30P" },
    { id: 21, name: "Exide MILEAGE ML85D26R (72 Ah)", category: "automotive", mrp: 9446, imageUrl: "https://www.godigit.com/content/dam/godigit/directportal/en/volkswagen-golf-gti-brand.JPG", description: "Large capacity MILEAGE battery for commercial use", specs: ["12V", "72Ah", "30F+30P Warranty", "Maintenance Free"], badge: null, warranty: "30F+30P" },
    { id: 22, name: "Exide MILEAGE MLDIN80 (80 Ah)", category: "automotive", mrp: 12768, imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/136183/grand-i10-nios-exterior-left-front-three-quarter.jpeg?isig=0&q=80", description: "Maximum capacity MILEAGE battery for heavy vehicles", specs: ["12V", "80Ah", "30F+30P Warranty", "Maintenance Free"], badge: "New", warranty: "30F+30P" },
    
    // EEZY ISS Series
    { id: 23, name: "Exide EEZY ISS EYDIN47RMFEFB (47 Ah)", category: "automotive", mrp: 7039, imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/194921/victoris-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80", description: "EEZY ISS series with quick starting technology", specs: ["12V", "47Ah", "24F+24P Warranty", "ISS Technology"], badge: null, warranty: "24F+24P" },
    { id: 24, name: "Exide EEZY ISS EYDIN52RMFEFB (52 Ah)", category: "automotive", mrp: 7373, imageUrl: "https://5.imimg.com/data5/AA/UB/GU/GLADMIN-31549807/civic-500x500-500x500.png", description: "Enhanced EEZY ISS battery for reliable performance", specs: ["12V", "52Ah", "24F+24P Warranty", "ISS Technology"], badge: null, warranty: "24F+24P" },
    { id: 25, name: "Exide EEZY ISS EYDIN78LMFEFB (78 Ah)", category: "automotive", mrp: 9982, imageUrl: "https://www.godigit.com/content/dam/godigit/directportal/en/ford-endeavour-brand.jpg", description: "High-capacity EEZY ISS battery for larger vehicles", specs: ["12V", "78Ah", "24F+24P Warranty", "ISS Technology"], badge: null, warranty: "24F+24P" },
    
    // EEZY Series
    { id: 26, name: "Exide EEZY EY34B19L/R (33 Ah)", category: "automotive", mrp: 4087, imageUrl: "https://5.imimg.com/data5/SELLER/Default/2024/10/457536493/MZ/WR/FB/121470838/bajaj-auto-rickshaw-4-stroke-500x500.jpg", description: "Compact EEZY battery for small vehicles", specs: ["12V", "33Ah", "24F+24P Warranty", "Maintenance Free"], badge: "Popular", warranty: "24F+24P" },
    { id: 27, name: "Exide EEZY EY700L/R (65 Ah)", category: "automotive", mrp: 8244, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4UsLRJxg5y-4oxZvZImMf1Afhd0sDsw2q1g&s", description: "Versatile EEZY battery for standard vehicles", specs: ["12V", "65Ah", "24F+24P Warranty", "Maintenance Free"], badge: null, warranty: "24F+24P" },
    { id: 28, name: "Exide EEZY EY700F/EY700LF (65 Ah)", category: "automotive", mrp: 8244, imageUrl: "https://www.topgear.com/sites/default/files/cars-car/image/2019/02/2018_ford_focus_st-line_red_11.jpg", description: "EEZY battery with forward terminal design", specs: ["12V", "65Ah", "24F+24P Warranty", "Maintenance Free"], badge: null, warranty: "24F+24P" },
    { id: 29, name: "Exide EEZY EY80D23R (68 Ah)", category: "automotive", mrp: 8244, imageUrl: "https://www.godigit.com/content/dam/godigit/directportal/en/volkswagen-tera-brand.JPG", description: "Powerful EEZY battery for enhanced performance", specs: ["12V", "68Ah", "24F+24P Warranty", "Maintenance Free"], badge: null, warranty: "24F+24P" },
    { id: 30, name: "Exide EEZY EY105D31L/R (85 Ah)", category: "automotive", mrp: 8950, imageUrl: "https://www.spinny.com/blog/wp-content/uploads/2024/10/Spinny-2024-Hyundai-Creta.webp", description: "Large capacity EEZY battery for SUVs and large vehicles", specs: ["12V", "85Ah", "24F+24P Warranty", "Maintenance Free"], badge: null, warranty: "24F+24P" },
    
    // RIDE Series
    { id: 31, name: "Exide RIDE RIDE35L (35 Ah)", category: "automotive", mrp: 3507, imageUrl: "https://www.indusmotor.com/public/uploads/pages/744220220331154941.jpg", description: "Economical RIDE battery for budget-conscious customers", specs: ["12V", "35Ah", "12F+12P Warranty", "Maintenance Free"], badge: "Economy", warranty: "12F+12P" },
    { id: 32, name: "Exide RIDE RIDE45L (45 Ah)", category: "automotive", mrp: 5870, imageUrl: "https://images.drivespark.com/600x400/ph-big/2020/10/2021-honda-accord-hybrid-exterior-3.jpg", description: "Value-packed RIDE battery for standard use", specs: ["12V", "45Ah", "12F+12P Warranty", "Maintenance Free"], badge: null, warranty: "12F+12P" },
    { id: 33, name: "Exide RIDE RIDE700L/R (65 Ah)", category: "automotive", mrp: 6009, imageUrl: "https://dealeroncom1.s3.amazonaws.com/JTG0QthjoHfWoUuzcwk3%2B8YiyKQiHSxcY7lJ6g%3D%3D/CDy2BvBgoiXPo024/Vm3qUA%3D%3D/IjKqBrlNpHfM4hjtYX0%3D/header.jpg", description: "Reliable RIDE battery for mid-size vehicles", specs: ["12V", "65Ah", "12F+12P Warranty", "Maintenance Free"], badge: null, warranty: "12F+12P" },
    { id: 34, name: "Exide RIDE RIDE700LF/RF (65 Ah)", category: "automotive", mrp: 6009, imageUrl: "https://images.financialexpressdigital.com/2020/08/2020-mahindra-thar.jpg?w=660", description: "RIDE battery with forward terminal configuration", specs: ["12V", "65Ah", "12F+12P Warranty", "Maintenance Free"], badge: null, warranty: "12F+12P" },
    
    // XPRESS Series
    { id: 35, name: "Exide XPRESS XP800 (80 Ah)", category: "automotive", mrp: 8145, imageUrl: "", description: "XPRESS series battery for commercial vehicles", specs: ["12V", "80Ah", "24F+18P Warranty", "Heavy Duty"], badge: null, warranty: "24F+18P" },
    { id: 36, name: "Exide XPRESS XP800F (80 Ah)", category: "automotive", mrp: 8145, imageUrl: "", description: "XPRESS battery with forward terminal design", specs: ["12V", "80Ah", "24F+18P Warranty", "Heavy Duty"], badge: null, warranty: "24F+18P" },
    { id: 37, name: "Exide XPRESS XP880 (88 Ah)", category: "automotive", mrp: 9007, imageUrl: "", description: "High-capacity XPRESS battery for trucks", specs: ["12V", "88Ah", "24F+18P Warranty", "Heavy Duty"], badge: null, warranty: "24F+18P" },
    { id: 38, name: "Exide XPRESS XP1000 (100 Ah)", category: "automotive", mrp: 10228, imageUrl: "", description: "Powerful XPRESS battery for commercial use", specs: ["12V", "100Ah", "24F+18P Warranty", "Heavy Duty"], badge: "Best Seller", warranty: "24F+18P" },
    { id: 39, name: "Exide XPRESS XP1000H29R (100 Ah)", category: "automotive", mrp: 9921, imageUrl: "", description: "XPRESS battery with H29 terminal configuration", specs: ["12V", "100Ah", "24F+18P Warranty", "Heavy Duty"], badge: null, warranty: "24F+18P" },
    { id: 40, name: "Exide XPRESS XP1200/L(RH) (120 Ah)", category: "automotive", mrp: 12522, imageUrl: "", description: "Large capacity XPRESS battery for heavy trucks", specs: ["12V", "120Ah", "24F+18P Warranty", "Heavy Duty"], badge: null, warranty: "24F+18P" },
    { id: 41, name: "Exide XPRESS XP1300 (130 Ah)", category: "automotive", mrp: 12797, imageUrl: "", description: "Extra-large XPRESS battery for commercial vehicles", specs: ["12V", "130Ah", "24F+18P Warranty", "Heavy Duty"], badge: null, warranty: "24F+18P" },
    { id: 42, name: "Exide XPRESS XP1500 (150 Ah)", category: "automotive", mrp: 16381, imageUrl: "", description: "Maximum capacity XPRESS battery for heavy-duty use", specs: ["12V", "150Ah", "24F+18P Warranty", "Heavy Duty"], badge: "Premium", warranty: "24F+18P" },
    { id: 43, name: "Exide XPRESS XP1800 (180 Ah)", category: "automotive", mrp: 19354, imageUrl: "", description: "Ultra-high capacity XPRESS battery for large trucks", specs: ["12V", "180Ah", "24F+18P Warranty", "Heavy Duty"], badge: null, warranty: "24F+18P" },
    { id: 44, name: "Exide XPRESS XP2000 (200 Ah)", category: "automotive", mrp: 25933, imageUrl: "", description: "Maximum power XPRESS battery for commercial fleets", specs: ["12V", "200Ah", "24F+18P Warranty", "Heavy Duty"], badge: "Premium", warranty: "24F+18P" },
    
    // JAI KISAN Series
    { id: 45, name: "Exide JAI KISAN KI75TF (75 Ah)", category: "automotive", mrp: 7594, imageUrl: "", description: "JAI KISAN series battery designed for tractors", specs: ["12V", "75Ah", "24F+18P Warranty", "Tractor Battery"], badge: null, warranty: "24F+18P" },
    { id: 46, name: "Exide JAI KISAN KI80T (80 Ah)", category: "automotive", mrp: 7747, imageUrl: "", description: "Reliable JAI KISAN battery for agricultural vehicles", specs: ["12V", "80Ah", "24F+18P Warranty", "Tractor Battery"], badge: null, warranty: "24F+18P" },
    { id: 47, name: "Exide JAI KISAN KI88T/TLH (88 Ah)", category: "automotive", mrp: 7905, imageUrl: "", description: "High-capacity JAI KISAN battery for tractors", specs: ["12V", "88Ah", "24F+18P Warranty", "Tractor Battery"], badge: null, warranty: "24F+18P" },
    { id: 48, name: "Exide JAI KISAN KI90H29L (90 Ah)", category: "automotive", mrp: 7905, imageUrl: "", description: "Powerful JAI KISAN battery for heavy tractors", specs: ["12V", "90Ah", "24F+18P Warranty", "Tractor Battery"], badge: null, warranty: "24F+18P" },
    { id: 49, name: "Exide JAI KISAN KI99T (99 Ah)", category: "automotive", mrp: 9064, imageUrl: "", description: "Maximum capacity JAI KISAN battery for large tractors", specs: ["12V", "99Ah", "24F+18P Warranty", "Tractor Battery"], badge: null, warranty: "24F+18P" },
    
    // DRIVE Series
    { id: 50, name: "Exide DRIVE DRIVE35L (35 Ah)", category: "automotive", mrp: 3825, imageUrl: "", description: "Economical DRIVE battery for small vehicles", specs: ["12V", "35Ah", "18F+18P Warranty", "Maintenance Free"], badge: "Economy", warranty: "18F+18P" },
    { id: 51, name: "Exide DRIVE DRIVE40LBH (40 Ah)", category: "automotive", mrp: 4484, imageUrl: "", description: "Versatile DRIVE battery for compact cars", specs: ["12V", "40Ah", "18F+18P Warranty", "Maintenance Free"], badge: null, warranty: "18F+18P" },
    { id: 52, name: "Exide DRIVE DRIVE45L/R (45 Ah)", category: "automotive", mrp: 6469, imageUrl: "", description: "Reliable DRIVE battery for standard vehicles", specs: ["12V", "45Ah", "18F+18P Warranty", "Maintenance Free"], badge: null, warranty: "18F+18P" },
    { id: 53, name: "Exide DRIVE DRIVE700R (65 Ah)", category: "automotive", mrp: 7579, imageUrl: "", description: "Powerful DRIVE battery for mid-size vehicles", specs: ["12V", "65Ah", "18F+18P Warranty", "Maintenance Free"], badge: null, warranty: "18F+18P" },
    { id: 54, name: "Exide DRIVE DRIVE700RF (65 Ah)", category: "automotive", mrp: 7579, imageUrl: "", description: "DRIVE battery with forward terminal design", specs: ["12V", "65Ah", "18F+18P Warranty", "Maintenance Free"], badge: null, warranty: "18F+18P" },
    { id: 55, name: "Exide DRIVE DRIVE80L/R (80 Ah)", category: "automotive", mrp: 7330, imageUrl: "", description: "High-capacity DRIVE battery for larger vehicles", specs: ["12V", "80Ah", "18F+18P Warranty", "Maintenance Free"], badge: null, warranty: "18F+18P" },
    { id: 56, name: "Exide DRIVE DRIVE80LF/RF (80 Ah)", category: "automotive", mrp: 7330, imageUrl: "", description: "DRIVE battery with forward terminals for 80Ah", specs: ["12V", "80Ah", "18F+18P Warranty", "Maintenance Free"], badge: null, warranty: "18F+18P" },
    { id: 57, name: "Exide DRIVE DRIVE88L (88 Ah)", category: "automotive", mrp: 7847, imageUrl: "", description: "Enhanced DRIVE battery for premium vehicles", specs: ["12V", "88Ah", "18F+18P Warranty", "Maintenance Free"], badge: null, warranty: "18F+18P" },
    { id: 58, name: "Exide DRIVE DRIVE100L (100 Ah)", category: "automotive", mrp: 8573, imageUrl: "", description: "Large capacity DRIVE battery for SUVs", specs: ["12V", "100Ah", "18F+18P Warranty", "Maintenance Free"], badge: "Best Seller", warranty: "18F+18P" },
    { id: 59, name: "Exide DRIVE DRIVE100H29R (100 Ah)", category: "automotive", mrp: 8573, imageUrl: "", description: "DRIVE battery with H29 terminal configuration", specs: ["12V", "100Ah", "18F+18P Warranty", "Maintenance Free"], badge: null, warranty: "18F+18P" },
    { id: 60, name: "Exide DRIVE DRIVE130R (130 Ah)", category: "automotive", mrp: 11646, imageUrl: "", description: "Extra-large DRIVE battery for commercial vehicles", specs: ["12V", "130Ah", "18F+18P Warranty", "Maintenance Free"], badge: null, warranty: "18F+18P" },
    { id: 61, name: "Exide DRIVE DRIVE150R (150 Ah)", category: "automotive", mrp: 13914, imageUrl: "", description: "Maximum capacity DRIVE battery for heavy vehicles", specs: ["12V", "150Ah", "18F+18P Warranty", "Maintenance Free"], badge: "Premium", warranty: "18F+18P" },
    { id: 62, name: "Exide DRIVE DRIVE180R (180 Ah)", category: "automotive", mrp: 18044, imageUrl: "", description: "Ultra-high capacity DRIVE battery for large trucks", specs: ["12V", "180Ah", "18F+18P Warranty", "Maintenance Free"], badge: "Premium", warranty: "18F+18P" },
    
    // EKO Series
    { id: 63, name: "Exide EKO EKO32 (32 Ah)", category: "automotive", mrp: 3603, imageUrl: "", description: "Compact EKO battery for small vehicles", specs: ["12V", "32Ah", "24F Warranty", "Maintenance Free"], badge: "Economy", warranty: "24F" },
    { id: 64, name: "Exide EKO EKO40L (35 Ah)", category: "automotive", mrp: 4253, imageUrl: "", description: "Economical EKO battery for budget vehicles", specs: ["12V", "35Ah", "24F Warranty", "Maintenance Free"], badge: null, warranty: "24F" },
    { id: 65, name: "Exide EKO EKO50L (50 Ah)", category: "automotive", mrp: 5829, imageUrl: "", description: "Reliable EKO battery for standard use", specs: ["12V", "50Ah", "24F Warranty", "Maintenance Free"], badge: null, warranty: "24F" },
    { id: 66, name: "Exide EKO EKO55L (55 Ah)", category: "automotive", mrp: 5940, imageUrl: "", description: "Enhanced EKO battery for better performance", specs: ["12V", "55Ah", "24F Warranty", "Maintenance Free"], badge: null, warranty: "24F" },
    { id: 67, name: "Exide EKO EKO60L/R (60 Ah)", category: "automotive", mrp: 6078, imageUrl: "", description: "High-capacity EKO battery for larger vehicles", specs: ["12V", "60Ah", "24F Warranty", "Maintenance Free"], badge: null, warranty: "24F" },
    
    // Bike Batteries - EXIDE XPLORE Series
    { id: 68, name: "Exide XPLORE 12XL2.5L-C (2.5 Ah)", category: "bike", mrp: 1086, imageUrl: "12XL2.5LC.jpg", description: "Compact XPLORE battery for small motorcycles and scooters", specs: ["12V", "2.5Ah", "24F+24P Warranty", "Maintenance Free"], badge: null, warranty: "24F+24P", productCode: "12XL2.5L-C" },
    { id: 69, name: "Exide XPLORE XLTZ4A (4 Ah)", category: "bike", mrp: 1298, imageUrl: "XLTZ-4.jpg", description: "Reliable XPLORE battery for standard motorcycles", specs: ["12V", "4Ah", "24F+24P Warranty", "Maintenance Free"], badge: "Popular", warranty: "24F+24P", productCode: "XLTZ4A" },
    { id: 70, name: "Exide XPLORE XLTZ5A (5 Ah)", category: "bike", mrp: 1501, imageUrl: "XLTZ-5.jpg", description: "Enhanced capacity XPLORE battery for mid-size bikes", specs: ["12V", "5Ah", "24F+24P Warranty", "Maintenance Free"], badge: null, warranty: "24F+24P", productCode: "XLTZ5A" },
    { id: 71, name: "Exide XPLORE XLTZ6 (5 Ah)", category: "bike", mrp: 1612, imageUrl: "XLTZ-6.jpg", description: "Powerful XPLORE battery for standard motorcycles", specs: ["12V", "5Ah", "24F+24P Warranty", "Maintenance Free"], badge: null, warranty: "24F+24P", productCode: "XLTZ6" },
    { id: 72, name: "Exide XPLORE 12XL5L-B (5 Ah)", category: "bike", mrp: 1691, imageUrl: "12XL5L-B.jpg", description: "Durable XPLORE battery for reliable performance", specs: ["12V", "5Ah", "24F+24P Warranty", "Maintenance Free"], badge: null, warranty: "24F+24P", productCode: "12XL5L-B" },
    { id: 73, name: "Exide XPLORE XLTZ7 (6 Ah)", category: "bike", mrp: 1965, imageUrl: "XLTZ-7.jpg", description: "High-capacity XPLORE battery for larger motorcycles", specs: ["12V", "6Ah", "24F+24P Warranty", "Maintenance Free"], badge: "Best Seller", warranty: "24F+24P", productCode: "XLTZ7" },
    { id: 74, name: "Exide XPLORE 12XL7B-B (7 Ah)", category: "bike", mrp: 1740, imageUrl: "12XL7B-B.jpg", description: "Enhanced XPLORE battery for premium bikes", specs: ["12V", "7Ah", "24F+24P Warranty", "Maintenance Free"], badge: null, warranty: "24F+24P", productCode: "12XL7B-B" },
    { id: 75, name: "Exide XPLORE XLTZ9 (9 Ah)", category: "bike", mrp: 2385, imageUrl: "XLTZ-9.jpg", description: "Powerful XPLORE battery for sports and touring bikes", specs: ["12V", "9Ah", "24F+24P Warranty", "Maintenance Free"], badge: null, warranty: "24F+24P", productCode: "XLTZ9" },
    { id: 76, name: "Exide XPLORE 12XL9-B (9 Ah)", category: "bike", mrp: 2453, imageUrl: "12XL9B-B.jpg", description: "Premium XPLORE battery for high-performance motorcycles", specs: ["12V", "9Ah", "24F+24P Warranty", "Maintenance Free"], badge: null, warranty: "24F+24P", productCode: "12XL9-B" },
    { id: 77, name: "Exide XPLORE XLTX14 (12 Ah)", category: "bike", mrp: 3434, imageUrl: "XLTX-14.jpg", description: "Extra-large XPLORE battery for heavy-duty motorcycles", specs: ["12V", "12Ah", "24F+24P Warranty", "Maintenance Free"], badge: "Premium", warranty: "24F+24P", productCode: "XLTX14" },
    { id: 78, name: "Exide XPLORE 12XL14L-A2 (14 Ah)", category: "bike", mrp: 3951, imageUrl: "12XL14L-A2.jpg", description: "Maximum capacity XPLORE battery for large touring bikes", specs: ["12V", "14Ah", "24F+24P Warranty", "Maintenance Free"], badge: "Premium", warranty: "24F+24P", productCode: "12XL14L-A2" },
    
    // Inverter Batteries
    { id: 79, name: "Exide Inverter Battery 12V 150Ah", category: "inverter", mrp: 12400, imageUrl: "", description: "Long-lasting inverter battery for home backup", specs: ["12V", "150Ah", "5 Year Warranty", "Tall Tubular"], badge: "Best Seller" },
    { id: 80, name: "Exide Inverter Battery 12V 200Ah", category: "inverter", mrp: 15400, imageUrl: "", description: "High-capacity inverter battery for extended backup", specs: ["12V", "200Ah", "5 Year Warranty", "Tall Tubular"], badge: null },
    { id: 81, name: "Exide Inverter Battery 12V 100Ah", category: "inverter", mrp: 9400, imageUrl: "", description: "Compact inverter battery for small homes", specs: ["12V", "100Ah", "5 Year Warranty", "Tall Tubular"], badge: "Popular" }
];

// Cart
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const automotiveGrid = document.getElementById('automotiveGrid');
const bikeGrid = document.getElementById('bikeGrid');
const inverterGrid = document.getElementById('inverterGrid');
const automotiveSearchInput = document.getElementById('automotiveSearch');
const bikeSearchInput = document.getElementById('bikeSearch');
const inverterSearchInput = document.getElementById('inverterSearch');
const filterButtons = document.querySelectorAll('.filter-btn');
const categoryCards = document.querySelectorAll('.category-card');
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');
const closeModal = document.querySelector('.close');
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

// Page Elements (will be initialized after DOM loads)
let productsSection, automotivePage, bikePage, inverterPage;
let categoriesSection, aboutSection, contactSection, footer;
let heroSection, advertisementSection;


// Current view state
let currentView = 'home'; // 'home', 'automotive', 'bike', 'inverter'
let automotiveSearchTerm = '';
let bikeSearchTerm = '';
let inverterSearchTerm = '';

const SHOP_CONTACT_NUMBERS = ['919890412516', '919834359694']; // WhatsApp numbers for shop inquiries
const RECIPIENT_EMAIL = 'atozbattery7222@gmail.com'; // Email address to receive form submissions

let shopModal, shopForm, shopCancelBtn, shopCloseBtn, shopProductLabel, shopProductNameEl;
let pendingProductForShop = null;
let vehicleField, vehicleInput;

// Booking form elements
let bookingModal, bookingForm, bookingCancelBtn, bookingCloseBtn;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Initialize page elements
    productsSection = document.getElementById('products');
    automotivePage = document.getElementById('automotivePage');
    bikePage = document.getElementById('bikePage');
    inverterPage = document.getElementById('inverterPage');
    categoriesSection = document.getElementById('categories');
    aboutSection = document.getElementById('about');
    contactSection = document.getElementById('contact');
    footer = document.querySelector('.footer');
    heroSection = document.getElementById('home');
    advertisementSection = document.querySelector('.advertisement-section');
    
    showHomePage();
    setupEventListeners();
    loadCart();
    initializeCategoryCards();
    initializeSearchInputs();
    initializeShopLinks();
    initializeShopForm();
    initializeBookingForm();
    initializeTestimonialsSlider();
});

// Utility: compute selling price as mrp - 400 (min 0) for automotive
function getSellingPrice(mrp) {
    if (!mrp || isNaN(mrp)) return 0;
    return Math.max(0, mrp - 400);
}

// Utility: compute selling price as mrp - 10% for bike batteries
function getBikeSellingPrice(mrp) {
    if (!mrp || isNaN(mrp)) return 0;
    return Math.max(0, Math.round(mrp * 0.9));
}

// Utility: filter products by search term
function filterProductsBySearch(list, term) {
    const query = term.trim().toLowerCase();
    if (!query) return list;

    return list.filter(product => {
        const haystack = [
            product.name,
            product.description,
            product.productCode,
            ...(product.specs || [])
        ].join(' ').toLowerCase();
        return haystack.includes(query);
    });
}

function showProductsSection(filter = 'all') {
    currentView = 'products';

    if (heroSection) heroSection.style.display = 'none';
    if (advertisementSection) advertisementSection.style.display = 'none';
    if (categoriesSection) categoriesSection.style.display = 'none';
    if (aboutSection) aboutSection.style.display = 'none';
    if (contactSection) contactSection.style.display = 'none';
    if (footer) footer.style.display = 'none';

    if (automotivePage) automotivePage.style.display = 'none';
    if (bikePage) bikePage.style.display = 'none';
    if (inverterPage) inverterPage.style.display = 'none';

    if (productsSection) {
        productsSection.style.display = 'block';
        filterButtons.forEach(btn => btn.classList.remove('active'));
        const activeBtn = Array.from(filterButtons).find(btn => btn.getAttribute('data-filter') === filter) || filterButtons[0];
        if (activeBtn) activeBtn.classList.add('active');
        displayProducts(filter);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Show Home Page (main window with categories) - Global function for onclick
window.showHomePage = function() {
    currentView = 'home';
    
    // Hide all category pages
    if (automotivePage) automotivePage.style.display = 'none';
    if (bikePage) bikePage.style.display = 'none';
    if (inverterPage) inverterPage.style.display = 'none';
    if (productsSection) productsSection.style.display = 'none';
    
    // Show main sections including hero and advertisement
    if (heroSection) heroSection.style.display = 'block';
    if (advertisementSection) advertisementSection.style.display = 'block';
    if (categoriesSection) categoriesSection.style.display = 'block';
    if (aboutSection) aboutSection.style.display = 'block';
    if (contactSection) contactSection.style.display = 'block';
    if (footer) footer.style.display = 'block';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Display Products
function displayProducts(category) {
    productsGrid.innerHTML = '';
    
    const filteredProducts = category === 'all' 
        ? getFeaturedProducts()
        : products.filter(product => product.category === category);
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No products found in this category.</p>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Get series name from product name
function getSeriesName(productName) {
    const seriesPatterns = [
        { pattern: /EPIQ/i, name: 'EPIQ Series' },
        { pattern: /MATRIX/i, name: 'MATRIX Series' },
        { pattern: /MILEAGE\s+ISS/i, name: 'MILEAGE ISS Series' },
        { pattern: /MILEAGE/i, name: 'MILEAGE Series' },
        { pattern: /EEZY\s+ISS/i, name: 'EEZY ISS Series' },
        { pattern: /EEZY/i, name: 'EEZY Series' },
        { pattern: /RIDE/i, name: 'RIDE Series' },
        { pattern: /XPRESS/i, name: 'XPRESS Series' },
        { pattern: /JAI\s+KISAN/i, name: 'JAI KISAN Series' },
        { pattern: /DRIVE/i, name: 'DRIVE Series' },
        { pattern: /EKO/i, name: 'EKO Series' }
    ];
    
    for (const series of seriesPatterns) {
        if (series.pattern.test(productName)) {
            return series.name;
        }
    }
    return 'Other Series';
}

const fallbackSeriesKeywords = {
    'EPIQ Series': 'bmw sedan exterior',
    'MATRIX Series': 'audi luxury car',
    'MILEAGE ISS Series': 'maruti suzuki car',
    'MILEAGE Series': 'hyundai car exterior',
    'EEZY ISS Series': 'maruti suzuki hatchback',
    'EEZY Series': 'compact family car',
    'RIDE Series': 'suv car front view',
    'XPRESS Series': 'commercial truck diesel',
    'JAI KISAN Series': 'tractor in field',
    'DRIVE Series': 'suv offroad car',
    'EKO Series': 'compact city car'
};

const fallbackCategoryKeywords = {
    automotive: 'car battery vehicle',
    bike: 'motorcycle battery power',
    inverter: 'home inverter battery'
};

const featuredProductIds = {
    automotive: [1, 4, 5, 18, 21],
    bike: [69, 73, 75, 78],
    inverter: [79, 80]
};

const featuredProductCounts = {
    automotive: 5,
    bike: 4,
    inverter: 2
};

// Show Automotive Batteries Page
function showAutomotivePage() {
    currentView = 'automotive';
    
    // Hide main sections including hero and advertisement
    if (heroSection) heroSection.style.display = 'none';
    if (advertisementSection) advertisementSection.style.display = 'none';
    if (categoriesSection) categoriesSection.style.display = 'none';
    if (aboutSection) aboutSection.style.display = 'none';
    if (contactSection) contactSection.style.display = 'none';
    if (footer) footer.style.display = 'none';
    if (productsSection) productsSection.style.display = 'none';
    
    // Hide other category pages
    if (bikePage) bikePage.style.display = 'none';
    if (inverterPage) inverterPage.style.display = 'none';
    
    // Show automotive page
    if (automotivePage) {
        automotivePage.style.display = 'block';
        automotiveSearchTerm = '';
        if (automotiveSearchInput) automotiveSearchInput.value = '';
        displayAutomotiveBySeries();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Display Automotive Batteries by Series
function displayAutomotiveBySeries() {
    if (!automotiveGrid) return;
    
    automotiveGrid.innerHTML = '';
    
    const automotiveProducts = products.filter(p => p.category === 'automotive');
    const filteredProducts = filterProductsBySearch(automotiveProducts, automotiveSearchTerm);
    
    if (filteredProducts.length === 0) {
        automotiveGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No automotive batteries found.</p>';
        return;
    }
    
    // Group products by series
    const seriesMap = {};
    filteredProducts.forEach(product => {
        const series = getSeriesName(product.name);
        if (!seriesMap[series]) {
            seriesMap[series] = [];
        }
        seriesMap[series].push(product);
    });
    
    // Display each series section
    const seriesOrder = [
        'EPIQ Series',
        'MATRIX Series',
        'MILEAGE ISS Series',
        'MILEAGE Series',
        'EEZY ISS Series',
        'EEZY Series',
        'RIDE Series',
        'XPRESS Series',
        'JAI KISAN Series',
        'DRIVE Series',
        'EKO Series',
        'Other Series'
    ];
    
    seriesOrder.forEach(seriesName => {
        if (seriesMap[seriesName] && seriesMap[seriesName].length > 0) {
            // Create series header
            const seriesHeader = document.createElement('div');
            seriesHeader.className = 'series-header';
            seriesHeader.style.cssText = 'grid-column: 1/-1; margin-top: 2rem; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 3px solid var(--primary-color);';
            seriesHeader.innerHTML = `<h2 style="color: var(--primary-color); font-size: 1.8rem; margin: 0;">${seriesName}</h2>`;
            automotiveGrid.appendChild(seriesHeader);
            
            // Add products in this series
            seriesMap[seriesName].forEach(product => {
                const productCard = createProductCard(product);
                automotiveGrid.appendChild(productCard);
            });
        }
    });
}

// Show Bike Batteries Page
function showBikePage() {
    currentView = 'bike';
    
    // Hide main sections including hero and advertisement
    if (heroSection) heroSection.style.display = 'none';
    if (advertisementSection) advertisementSection.style.display = 'none';
    if (categoriesSection) categoriesSection.style.display = 'none';
    if (aboutSection) aboutSection.style.display = 'none';
    if (contactSection) contactSection.style.display = 'none';
    if (footer) footer.style.display = 'none';
    if (productsSection) productsSection.style.display = 'none';
    
    // Hide other category pages
    if (automotivePage) automotivePage.style.display = 'none';
    if (inverterPage) inverterPage.style.display = 'none';
    
    // Show bike page
    if (bikePage) {
        bikePage.style.display = 'block';
        bikeSearchTerm = '';
        if (bikeSearchInput) bikeSearchInput.value = '';
        displayBikeBatteries();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Display Bike Batteries
function displayBikeBatteries() {
    if (!bikeGrid) return;
    
    bikeGrid.innerHTML = '';
    
    const bikeProducts = products.filter(p => p.category === 'bike');
    const filteredProducts = filterProductsBySearch(bikeProducts, bikeSearchTerm);
    
    if (filteredProducts.length === 0) {
        bikeGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No bike batteries found.</p>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        bikeGrid.appendChild(productCard);
    });
}

// Show Inverter Batteries Page
function showInverterPage() {
    currentView = 'inverter';
    
    // Hide main sections including hero and advertisement
    if (heroSection) heroSection.style.display = 'none';
    if (advertisementSection) advertisementSection.style.display = 'none';
    if (categoriesSection) categoriesSection.style.display = 'none';
    if (aboutSection) aboutSection.style.display = 'none';
    if (contactSection) contactSection.style.display = 'none';
    if (footer) footer.style.display = 'none';
    if (productsSection) productsSection.style.display = 'none';
    
    // Hide other category pages
    if (automotivePage) automotivePage.style.display = 'none';
    if (bikePage) bikePage.style.display = 'none';
    
    // Show inverter page
    if (inverterPage) {
        inverterPage.style.display = 'block';
        inverterSearchTerm = '';
        if (inverterSearchInput) inverterSearchInput.value = '';
        displayInverterBatteries();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Display Inverter Batteries
function displayInverterBatteries() {
    if (!inverterGrid) return;
    
    inverterGrid.innerHTML = '';
    
    const inverterProducts = products.filter(p => p.category === 'inverter');
    const filteredProducts = filterProductsBySearch(inverterProducts, inverterSearchTerm);
    
    if (filteredProducts.length === 0) {
        inverterGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No inverter batteries found.</p>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        inverterGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = `product-card product-card--${product.category}`;
    
    const iconMap = {
        automotive: 'fas fa-car',
        bike: 'fas fa-motorcycle',
        inverter: 'fas fa-plug'
    };
    
    // Use different selling price calculation for bike batteries (10% off)
    const sellingPrice = product.category === 'bike' 
        ? getBikeSellingPrice(product.mrp) 
        : getSellingPrice(product.mrp);

    const providedImageUrl = product.imageUrl && product.imageUrl.trim() !== '' ? product.imageUrl.trim() : '';
    const seriesName = getSeriesName(product.name);
    const fallbackKeyword = fallbackSeriesKeywords[seriesName] || fallbackCategoryKeywords[product.category] || 'vehicle battery';
    const fallbackImageUrl = `https://source.unsplash.com/featured/400x300/?${encodeURIComponent(fallbackKeyword)}&sig=${product.id}`;
    const resolvedImageUrl = providedImageUrl || fallbackImageUrl;
    const hasImage = resolvedImageUrl && resolvedImageUrl.trim() !== '';
    const fallbackImageUrlEscaped = fallbackImageUrl.replace(/'/g, "\\'");
    
    // Show product code if available (for bike batteries)
    const productCodeDisplay = product.productCode ? `<p class="product-code">Product Code: ${product.productCode}</p>` : '';
    
    card.innerHTML = `
        <div class="product-image">
            ${hasImage ? `<img src="${resolvedImageUrl}" alt="${product.name}" onerror="this.onerror=null; this.src='${fallbackImageUrlEscaped}';"/>` : ''}
            <i class="${iconMap[product.category]}" style="${hasImage ? 'display:none;' : 'display:flex;'}"></i>
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)} Battery</p>
            ${productCodeDisplay}
            <p class="product-description">${product.description}</p>
            <ul class="product-specs">
                ${product.specs.map(spec => `<li><i class="fas fa-check-circle"></i> ${spec}</li>`).join('')}
            </ul>
            <div class="product-footer">
                <div class="price-block">
                    <span class="mrp">MRP: ₹${(product.mrp || 0).toLocaleString()}</span>
                    <span class="product-price">Selling Price: ₹${sellingPrice.toLocaleString()}</span>
                </div>
                <div class="product-actions">
                    <button class="shop-now" data-product-id="${product.id}">
                        <i class="fas fa-shopping-bag"></i> Shop
                    </button>
                    <button class="add-to-cart" data-product-id="${product.id}">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
                </div>
            </div>
            ${!hasImage ? `<div class="image-hint"><a href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(product.name + ' Exide battery')}" target="_blank" rel="noopener">🔍 Find exact image</a></div>` : ''}
        </div>
    `;
    
    return card;
}

// Filter Products (for backward compatibility, but now redirects to category pages)
if (filterButtons.length > 0) {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            
            if (filter === 'all') {
                showHomePage();
            } else if (filter === 'automotive') {
                showAutomotivePage();
            } else if (filter === 'bike') {
                showBikePage();
            } else if (filter === 'inverter') {
                showInverterPage();
            }
        });
    });
}

// Category Cards - Initialize after DOM is loaded
function initializeCategoryCards() {
    const cards = document.querySelectorAll('.category-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            
            if (category === 'automotive') {
                showAutomotivePage();
            } else if (category === 'bike') {
                showBikePage();
            } else if (category === 'inverter') {
                showInverterPage();
            }
        });
    });
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            // Use correct selling price calculation based on category
            const sellingPrice = product.category === 'bike' 
                ? getBikeSellingPrice(product.mrp) 
                : getSellingPrice(product.mrp);
            cart.push({ ...product, quantity: 1, sellingPrice });
        }
        saveCart();
        updateCartUI();
        showNotification(`${product.name} added to cart!`);
    }
}

// Update Cart UI
function updateCartUI() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    updateCartModal();
}

// Update Cart Modal
function updateCartModal() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 2rem;">Your cart is empty.</p>';
        cartTotal.textContent = '0';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => {
        // Calculate selling price if not already set
        const sellingPrice = item.sellingPrice || (item.category === 'bike' 
            ? getBikeSellingPrice(item.mrp) 
            : getSellingPrice(item.mrp));
        return `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>Quantity: ${item.quantity} × ₹${sellingPrice.toLocaleString()}</p>
            </div>
            <div class="cart-item-price">
                ₹${((sellingPrice * item.quantity)).toLocaleString()}
            </div>
        </div>
    `;
    }).join('');
    
    const total = cart.reduce((sum, item) => {
        const sellingPrice = item.sellingPrice || (item.category === 'bike' 
            ? getBikeSellingPrice(item.mrp) 
            : getSellingPrice(item.mrp));
        return sum + (sellingPrice * item.quantity);
    }, 0);
    cartTotal.textContent = total.toLocaleString();
}

// Show Cart Modal
cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'block';
    updateCartModal();
});

// Close Modal
closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Smooth Scrolling and Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Don't prevent default for "Book Battery" button - it's handled by booking form
        if (this.classList.contains('nav-cta') && this.getAttribute('href') === '#automotivePage') {
            return;
        }
        e.preventDefault();
        
        const href = this.getAttribute('href');
        
        // If we're on a category page (automotive, bike, inverter), show home page first
        if (currentView !== 'home' && (currentView === 'automotive' || currentView === 'bike' || currentView === 'inverter')) {
            showHomePage();
            // Wait a bit for the page to show, then scroll
            setTimeout(() => {
                const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
                } else {
                    // If target not found, scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }, 100);
        } else {
            // Normal navigation - just scroll to target
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // If target not found, show home page and scroll to top
                showHomePage();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
        
        navList.classList.remove('active');
    });
});

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load Cart from LocalStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add CSS for notification animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Setup Event Listeners
function setupEventListeners() {
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navList.contains(e.target) && !menuToggle.contains(e.target)) {
            navList.classList.remove('active');
        }
    });

}

function initializeSearchInputs() {
    if (automotiveSearchInput) {
        automotiveSearchInput.addEventListener('input', (event) => {
            automotiveSearchTerm = event.target.value || '';
            displayAutomotiveBySeries();
        });
    }
    if (bikeSearchInput) {
        bikeSearchInput.addEventListener('input', (event) => {
            bikeSearchTerm = event.target.value || '';
            displayBikeBatteries();
        });
    }
    if (inverterSearchInput) {
        inverterSearchInput.addEventListener('input', (event) => {
            inverterSearchTerm = event.target.value || '';
            displayInverterBatteries();
        });
    }
}

function initializeShopLinks() {
    const heroShopBtn = document.getElementById('heroShopBtn');
    if (heroShopBtn) {
        heroShopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showAutomotivePage();
        });
    }
}


function shopProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    pendingProductForShop = product;
    if (shopModal && shopProductLabel) {
        shopProductLabel.style.display = 'flex';
        const span = shopProductLabel.querySelector('span');
        if (span) {
            span.textContent = product.name;
        }
    }
    openShopModal();
}

function initializeShopForm() {
    shopModal = document.getElementById('shopModal');
    shopForm = document.getElementById('shopForm');
    shopCancelBtn = document.querySelector('.shop-form__cancel');
    shopCloseBtn = document.querySelector('.shop-modal__close');
    shopProductLabel = document.getElementById('shopProductLabel');
    shopProductNameEl = shopProductLabel ? shopProductLabel.querySelector('span') : null;
    vehicleField = document.getElementById('vehicleField');
    vehicleInput = vehicleField ? vehicleField.querySelector('input') : null;

    document.addEventListener('click', (event) => {
        const shopBtn = event.target.closest('.shop-now');
        const cartBtn = event.target.closest('.add-to-cart');

        if (shopBtn) {
            const productId = parseInt(shopBtn.getAttribute('data-product-id'), 10);
            event.preventDefault();
            shopProduct(productId);
        } else if (cartBtn) {
            const productId = parseInt(cartBtn.getAttribute('data-product-id'), 10);
            event.preventDefault();
            addToCart(productId);
        }
    });

    if (shopCancelBtn) {
        shopCancelBtn.addEventListener('click', closeShopModal);
    }
    if (shopCloseBtn) {
        shopCloseBtn.addEventListener('click', closeShopModal);
    }
    if (shopModal) {
        shopModal.addEventListener('click', (e) => {
            if (e.target === shopModal) {
                closeShopModal();
            }
        });
    }
    if (shopForm) {
        shopForm.addEventListener('submit', handleShopSubmit);
    }
    
    // Clear phone validation error when user types and restrict to digits only
    const shopPhoneInput = document.getElementById('customerPhone');
    if (shopPhoneInput) {
        shopPhoneInput.addEventListener('input', (e) => {
            // Remove any non-digit characters
            e.target.value = e.target.value.replace(/\D/g, '');
            // Limit to 10 digits
            if (e.target.value.length > 10) {
                e.target.value = e.target.value.slice(0, 10);
            }
            shopPhoneInput.setCustomValidity('');
        });
        // Prevent non-digit characters on keypress
        shopPhoneInput.addEventListener('keypress', (e) => {
            if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
            }
        });
    }
}

function initializeTestimonialsSlider() {
    const slider = document.getElementById('testimonialsSlider');
    if (!slider) return;

    const prevBtn = document.querySelector('.testimonial-nav--prev');
    const nextBtn = document.querySelector('.testimonial-nav--next');

    const scrollByAmount = () => Math.max(slider.clientWidth * 0.8, 280);

    const updateNavState = () => {
        if (!prevBtn || !nextBtn) return;
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        prevBtn.disabled = slider.scrollLeft <= 12;
        nextBtn.disabled = slider.scrollLeft >= maxScroll - 12;
    };

    const handleNavClick = (direction) => {
        slider.scrollBy({
            left: direction * scrollByAmount(),
            behavior: 'smooth'
        });
    };

    slider.addEventListener('scroll', () => {
        window.requestAnimationFrame(updateNavState);
    });

    if (prevBtn) {
        prevBtn.addEventListener('click', () => handleNavClick(-1));
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => handleNavClick(1));
    }

    slider.addEventListener('wheel', (event) => {
        if (Math.abs(event.deltaX) < Math.abs(event.deltaY)) return;
        event.preventDefault();
        slider.scrollBy({
            left: event.deltaX,
            behavior: 'auto'
        });
    }, { passive: false });

    updateNavState();
    window.addEventListener('resize', updateNavState);
}

function openShopModal() {
    if (!shopModal) return;
    shopModal.classList.add('open');
    shopModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    toggleVehicleField();
}

function closeShopModal() {
    if (!shopModal) return;
    shopModal.classList.remove('open');
    shopModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    pendingProductForShop = null;
    if (shopForm) {
        shopForm.reset();
    }
    if (shopProductLabel) {
        shopProductLabel.style.display = 'none';
    }
    toggleVehicleField();
}

// Initialize EmailJS (will be configured with user's API keys)
function initEmailJS() {
    // EmailJS will be initialized when user provides their keys
    // For now, we'll use a fallback method
}

// Send email using multiple methods for reliability
async function sendEmailToOwner(subject, messageBody, formType) {
    // Method 1: Try FormSubmit.co (requires email verification first time)
    try {
        const formData = new FormData();
        formData.append('_to', RECIPIENT_EMAIL);
        formData.append('_subject', subject);
        formData.append('message', messageBody);
        formData.append('_form_type', formType);
        formData.append('_captcha', 'false');
        formData.append('_template', 'table');
        
        const response = await fetch('https://formsubmit.co/ajax/' + RECIPIENT_EMAIL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        });
        
        if (response.ok) {
            const result = await response.json();
            if (result.success) {
                console.log('Email sent successfully via FormSubmit');
                return true;
            }
        }
    } catch (error) {
        console.error('FormSubmit error:', error);
    }
    
    // Method 2: Try Web3Forms (more reliable, free)
    try {
        const web3Response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: 'YOUR_WEB3FORMS_KEY', // Replace with actual key from web3forms.com
                subject: subject,
                from_name: 'A TO Z Batteries Website',
                message: messageBody,
                to: RECIPIENT_EMAIL
            })
        });
        
        const web3Result = await web3Response.json();
        if (web3Result.success) {
            console.log('Email sent successfully via Web3Forms');
            return true;
        }
    } catch (error) {
        console.error('Web3Forms error:', error);
    }
    
    // Method 3: Try EmailJS if configured
    try {
        if (typeof emailjs !== 'undefined' && window.EMAILJS_SERVICE_ID && window.EMAILJS_TEMPLATE_ID && window.EMAILJS_PUBLIC_KEY) {
            await emailjs.send(
                window.EMAILJS_SERVICE_ID,
                window.EMAILJS_TEMPLATE_ID,
                {
                    to_email: RECIPIENT_EMAIL,
                    subject: subject,
                    message: messageBody,
                    form_type: formType
                },
                window.EMAILJS_PUBLIC_KEY
            );
            console.log('Email sent via EmailJS');
            return true;
        }
    } catch (emailjsError) {
        console.error('EmailJS error:', emailjsError);
    }
    
    // Method 4: Use mailto as final fallback
    // Note: This will open the user's email client
    try {
        const mailtoBody = `${messageBody}\n\n---\nThis email was sent from A TO Z Batteries website form.`;
        const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`;
        // Don't open automatically - just log for debugging
        console.log('Email would be sent via mailto:', mailtoLink);
    } catch (error) {
        console.error('Error with mailto:', error);
    }
    
    return true;
}

function validatePhoneNumber(phone) {
    if (!phone) return { valid: false, message: 'Mobile number is required' };
    // Remove spaces, dashes, and other non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    // Check if it's exactly 10 digits
    if (cleaned.length !== 10) {
        return { valid: false, message: 'Please enter a valid 10-digit mobile number' };
    }
    // Check if it starts with 6, 7, 8, or 9 (valid Indian mobile number)
    if (!/^[6-9]/.test(cleaned)) {
        return { valid: false, message: 'Please enter a valid Indian mobile number' };
    }
    return { valid: true, cleaned: cleaned };
}

function handleShopSubmit(event) {
    event.preventDefault();
    if (!shopForm) return;

    const formData = new FormData(shopForm);
    const phoneInput = document.getElementById('customerPhone');
    const phoneValidation = validatePhoneNumber(formData.get('phone'));
    
    if (!phoneValidation.valid) {
        phoneInput.setCustomValidity(phoneValidation.message);
        phoneInput.reportValidity();
        return;
    }
    
    phoneInput.setCustomValidity('');
    
    const details = {
        name: formData.get('name'),
        phone: phoneValidation.cleaned,
        address: formData.get('address'),
        vehicle: (vehicleInput && vehicleField && !vehicleField.hasAttribute('hidden')) ? formData.get('vehicle') : '',
        product: pendingProductForShop ? pendingProductForShop.name : 'General Inquiry'
    };

    // Prepare email content
    const emailSubject = `New Shop Inquiry - ${details.product}`;
    const emailBody = `New Shop Inquiry Received

Customer Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${details.name}
Mobile Number: ${details.phone}
Product: ${details.product}
${details.vehicle ? `Vehicle: ${details.vehicle}` : ''}
Address: ${details.address}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted via: Shop Form
Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
`;

    // Send email
    sendEmailToOwner(emailSubject, emailBody, 'Shop Form');
    
    closeShopModal();
    showNotification('Thank you! Our team will contact you shortly.');
}

function toggleVehicleField() {
    if (!vehicleField) return;
    const isInverter = pendingProductForShop && pendingProductForShop.category === 'inverter';
    if (isInverter) {
        vehicleField.setAttribute('hidden', 'hidden');
        if (vehicleInput) {
            vehicleInput.value = '';
            vehicleInput.removeAttribute('required');
        }
    } else {
        vehicleField.removeAttribute('hidden');
        if (vehicleInput) {
            vehicleInput.setAttribute('required', 'required');
        }
    }
}

function initializeBookingForm() {
    bookingModal = document.getElementById('bookingModal');
    bookingForm = document.getElementById('bookingForm');
    bookingCancelBtn = document.getElementById('bookingCancelBtn');
    bookingCloseBtn = document.getElementById('bookingCloseBtn');

    // Handle "Book Battery" button click
    document.addEventListener('click', (event) => {
        const bookBatteryBtn = event.target.closest('.nav-cta');
        if (bookBatteryBtn && bookBatteryBtn.getAttribute('href') === '#automotivePage') {
            event.preventDefault();
            openBookingModal();
        }
    });

    if (bookingCancelBtn) {
        bookingCancelBtn.addEventListener('click', closeBookingModal);
    }
    if (bookingCloseBtn) {
        bookingCloseBtn.addEventListener('click', closeBookingModal);
    }
    if (bookingModal) {
        bookingModal.addEventListener('click', (e) => {
            if (e.target === bookingModal) {
                closeBookingModal();
            }
        });
    }
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }
    
    // Clear phone validation error when user types and restrict to digits only
    const bookingPhoneInput = document.getElementById('bookingCustomerPhone');
    if (bookingPhoneInput) {
        bookingPhoneInput.addEventListener('input', (e) => {
            // Remove any non-digit characters
            e.target.value = e.target.value.replace(/\D/g, '');
            // Limit to 10 digits
            if (e.target.value.length > 10) {
                e.target.value = e.target.value.slice(0, 10);
            }
            bookingPhoneInput.setCustomValidity('');
        });
        // Prevent non-digit characters on keypress
        bookingPhoneInput.addEventListener('keypress', (e) => {
            if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
            }
        });
    }
}

function openBookingModal() {
    if (!bookingModal) return;
    bookingModal.classList.add('open');
    bookingModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
    if (!bookingModal) return;
    bookingModal.classList.remove('open');
    bookingModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (bookingForm) {
        bookingForm.reset();
    }
}

function handleBookingSubmit(event) {
    event.preventDefault();
    if (!bookingForm) return;

    const formData = new FormData(bookingForm);
    const phoneInput = document.getElementById('bookingCustomerPhone');
    const phoneValidation = validatePhoneNumber(formData.get('phone'));
    
    if (!phoneValidation.valid) {
        phoneInput.setCustomValidity(phoneValidation.message);
        phoneInput.reportValidity();
        return;
    }
    
    phoneInput.setCustomValidity('');
    
    const details = {
        name: formData.get('name'),
        phone: phoneValidation.cleaned,
        address: formData.get('address'),
        service: formData.get('service')
    };

    // Prepare email content
    const emailSubject = `New Service Booking - ${details.service}`;
    const emailBody = `New Service Booking Received

Customer Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${details.name}
Mobile Number: ${details.phone}
Service Required: ${details.service}
Address: ${details.address}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted via: Booking Form
Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
`;

    // Send email
    sendEmailToOwner(emailSubject, emailBody, 'Booking Form');
    
    closeBookingModal();
    showNotification('Thank you! Our team will contact you shortly.');
}

function getFeaturedProducts() {
    const featured = [];
    const usedIds = new Set();

    const addProduct = (product) => {
        if (product && !usedIds.has(product.id)) {
            featured.push(product);
            usedIds.add(product.id);
        }
    };

    Object.keys(featuredProductCounts).forEach(category => {
        const desiredCount = featuredProductCounts[category] || 0;
        const preferredIds = featuredProductIds[category] || [];

        preferredIds.forEach(id => {
            const product = products.find(p => p.id === id);
            if (product && product.category === category) {
                addProduct(product);
            }
        });

        if (featured.filter(p => p.category === category).length < desiredCount) {
            const categoryProducts = products.filter(p => p.category === category);
            for (const product of categoryProducts) {
                if (featured.filter(p => p.category === category).length >= desiredCount) break;
                addProduct(product);
            }
        }
    });

    if (featured.length === 0) {
        return products.slice(0, 10);
    }

    return featured;
}
