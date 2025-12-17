// Products Data
const productsData = [
    {
        id: 'tomato-premium-lagos',
        title: 'Fresh Tomatoes - Premium Grade',
        description: 'Sun-ripened, harvest-fresh tomatoes. Perfect for retail, restaurants, or processing. Sourced directly from verified farmers with strict quality control standards.',
        image: 'img/tomato.png',
        thumbnail1: 'img/tomato.png',
        thumbnail2: 'img/vegetable_picking.png',
        thumbnail3: 'img/farmerpicking.png',
        badges: [
            { type: 'organic', text: 'Grade A' },
            { type: 'trending', text: '12 orders today' },
            { type: 'certified', text: 'Verified Farmer' }
        ],
        price: '₦5.99',
        priceOld: '₦7.50',
        priceSave: 'Save 20%',
        stock: 'Only 3 pallets left',
        location: 'Lagos State, Nigeria',
        volume: '800-1,000 kg per pallet',
        features: [
            '✓ Premium Grade A quality',
            '✓ Harvest-fresh, sun-ripened',
            '✓ Verified farmer source',
            '✓ Bulk pricing available',
            '✓ Fast delivery options'
        ],
        fullDescription: 'Our Premium Grade A tomatoes are carefully selected from the finest harvests. These sun-ripened tomatoes are perfect for retail distribution, restaurant use, or food processing. Each batch undergoes strict quality control to ensure consistent size, color, and freshness. Grown by verified farmers using sustainable practices, these tomatoes are harvested at peak ripeness and delivered fresh to maintain their quality and flavor. Ideal for bulk buyers looking for reliable, consistent supply.',
        specifications: {
            grade: 'Premium Grade A',
            weightPerPallet: '800-1,000 kg',
            packaging: 'Standard pallet configuration',
            storage: 'Cool, dry place recommended',
            shelfLife: '7-10 days from delivery'
        },
        shipping: [
            '✓ Standard delivery: 3-5 business days',
            '✓ Express delivery: 1-2 business days (additional fee)',
            '✓ Temperature-controlled transport available',
            '✓ Delivery tracking included',
            '✓ Free delivery on orders over 5 pallets'
        ]
    },
    {
        id: 'mango-export-abuja',
        title: 'Sweet Mangoes - Export Quality',
        description: 'Premium, sweet mangoes perfect for export or high-end retail. Strict quality control, certified organic.',
        image: 'img/mango.png',
        thumbnail1: 'img/mango.png',
        thumbnail2: 'img/fruits.png',
        thumbnail3: 'img/fruit_group.png',
        badges: [
            { type: 'certified', text: 'Export Grade' },
            { type: 'trending', text: '8 orders today' },
            { type: 'certified', text: 'Verified Farmer' }
        ],
        price: '₦7.49',
        priceOld: null,
        priceSave: null,
        stock: 'In stock',
        location: 'Abuja FCT, Nigeria',
        volume: '10,000-12,000 kg per truckload',
        features: [
            '✓ Export-grade quality',
            '✓ Certified organic',
            '✓ Sweet, premium variety',
            '✓ Strict quality control',
            '✓ Bulk truckload pricing'
        ],
        fullDescription: 'Our Export Quality mangoes are grown specifically for international markets and high-end retail. These premium mangoes undergo rigorous quality control to meet export standards. Each fruit is hand-selected for optimal ripeness, size, and sweetness. Perfect for export businesses, premium grocery stores, or specialty food retailers looking for the finest quality mangoes.',
        specifications: {
            grade: 'Export Grade',
            weightPerTruckload: '10,000-12,000 kg',
            packaging: 'Truckload configuration',
            storage: 'Temperature-controlled storage recommended',
            shelfLife: '10-14 days from delivery'
        },
        shipping: [
            '✓ Standard delivery: 3-5 business days',
            '✓ Express delivery: 1-2 business days (additional fee)',
            '✓ Temperature-controlled transport available',
            '✓ Export documentation support',
            '✓ Free delivery on orders over 2 truckloads'
        ]
    },
    {
        id: 'cassava-processing-ph',
        title: 'Fresh Cassava Roots - Processing Grade',
        description: 'High-quality cassava suitable for garri processing, flour production, or direct sale. Consistent supply.',
        image: 'img/cassava.png',
        thumbnail1: 'img/cassava.png',
        thumbnail2: 'img/industry_picking.png',
        thumbnail3: 'img/packing_fruit.png',
        badges: [
            { type: 'organic', text: 'Processing Grade' },
            { type: 'trending', text: '18 orders today' },
            { type: 'certified', text: 'Verified Farmer' }
        ],
        price: '₦3.99',
        priceOld: '₦4.99',
        priceSave: 'Save 20%',
        stock: 'In stock',
        location: 'Port Harcourt, Nigeria',
        volume: '20,000-25,000 kg per container',
        features: [
            '✓ Processing-grade quality',
            '✓ Consistent supply',
            '✓ Ideal for garri production',
            '✓ Flour production ready',
            '✓ Bulk container pricing'
        ],
        fullDescription: 'High-quality cassava roots perfect for processing into garri, flour, or other cassava-based products. These roots are harvested at optimal maturity for processing, ensuring maximum yield and quality. Sourced from verified farmers with consistent supply chains, making them ideal for processing facilities and large-scale operations.',
        specifications: {
            grade: 'Processing Grade',
            weightPerContainer: '20,000-25,000 kg',
            packaging: 'Container configuration',
            storage: 'Cool, dry storage recommended',
            shelfLife: '14-21 days from delivery'
        },
        shipping: [
            '✓ Standard delivery: 5-7 business days',
            '✓ Express delivery: 2-3 business days (additional fee)',
            '✓ Container transport available',
            '✓ Delivery tracking included',
            '✓ Free delivery on orders over 3 containers'
        ]
    },
    {
        id: 'tomato-premium-kano',
        title: 'Fresh Tomatoes - Premium Grade',
        description: 'Sun-ripened, harvest-fresh tomatoes. Perfect for retail, restaurants, or processing.',
        image: 'img/tomato.png',
        thumbnail1: 'img/tomato.png',
        thumbnail2: 'img/vegetable_picking.png',
        thumbnail3: 'img/farmerpicking.png',
        badges: [
            { type: 'organic', text: 'Grade A' },
            { type: 'trending', text: '15 orders today' },
            { type: 'certified', text: 'Verified Farmer' }
        ],
        price: '₦6.25',
        priceOld: null,
        priceSave: null,
        stock: 'In stock',
        location: 'Kano State, Nigeria',
        volume: '800-1,000 kg per pallet',
        features: [
            '✓ Premium Grade A quality',
            '✓ Harvest-fresh, sun-ripened',
            '✓ Verified farmer source',
            '✓ Bulk pricing available',
            '✓ Fast delivery options'
        ],
        fullDescription: 'Premium Grade A tomatoes from Kano State, known for excellent growing conditions. These sun-ripened tomatoes are perfect for retail distribution, restaurant use, or food processing. Each batch undergoes strict quality control to ensure consistent size, color, and freshness.',
        specifications: {
            grade: 'Premium Grade A',
            weightPerPallet: '800-1,000 kg',
            packaging: 'Standard pallet configuration',
            storage: 'Cool, dry place recommended',
            shelfLife: '7-10 days from delivery'
        },
        shipping: [
            '✓ Standard delivery: 4-6 business days',
            '✓ Express delivery: 2-3 business days (additional fee)',
            '✓ Temperature-controlled transport available',
            '✓ Delivery tracking included',
            '✓ Free delivery on orders over 5 pallets'
        ]
    },
    {
        id: 'mango-export-ogun',
        title: 'Sweet Mangoes - Export Quality',
        description: 'Premium, sweet mangoes perfect for export or high-end retail. Strict quality control, certified organic.',
        image: 'img/mango.png',
        thumbnail1: 'img/mango.png',
        thumbnail2: 'img/fruits.png',
        thumbnail3: 'img/fruit_group.png',
        badges: [
            { type: 'certified', text: 'Export Grade' },
            { type: 'trending', text: '5 orders today' },
            { type: 'certified', text: 'Verified Farmer' }
        ],
        price: '₦8.00',
        priceOld: null,
        priceSave: null,
        stock: 'In stock',
        location: 'Ogun State, Nigeria',
        volume: '10,000-12,000 kg per truckload',
        features: [
            '✓ Export-grade quality',
            '✓ Certified organic',
            '✓ Sweet, premium variety',
            '✓ Strict quality control',
            '✓ Bulk truckload pricing'
        ],
        fullDescription: 'Export Quality mangoes from Ogun State. These premium mangoes are grown specifically for international markets and high-end retail. Each fruit is hand-selected for optimal ripeness, size, and sweetness.',
        specifications: {
            grade: 'Export Grade',
            weightPerTruckload: '10,000-12,000 kg',
            packaging: 'Truckload configuration',
            storage: 'Temperature-controlled storage recommended',
            shelfLife: '10-14 days from delivery'
        },
        shipping: [
            '✓ Standard delivery: 3-5 business days',
            '✓ Express delivery: 1-2 business days (additional fee)',
            '✓ Temperature-controlled transport available',
            '✓ Export documentation support',
            '✓ Free delivery on orders over 2 truckloads'
        ]
    },
    {
        id: 'cassava-processing-rivers',
        title: 'Fresh Cassava Roots - Processing Grade',
        description: 'High-quality cassava suitable for garri processing, flour production, or direct sale. Consistent supply.',
        image: 'img/cassava.png',
        thumbnail1: 'img/cassava.png',
        thumbnail2: 'img/industry_picking.png',
        thumbnail3: 'img/packing_fruit.png',
        badges: [
            { type: 'organic', text: 'Processing Grade' },
            { type: 'trending', text: '10 orders today' },
            { type: 'certified', text: 'Verified Farmer' }
        ],
        price: '₦4.25',
        priceOld: null,
        priceSave: null,
        stock: 'In stock',
        location: 'Rivers State, Nigeria',
        volume: '20,000-25,000 kg per container',
        features: [
            '✓ Processing-grade quality',
            '✓ Consistent supply',
            '✓ Ideal for garri production',
            '✓ Flour production ready',
            '✓ Bulk container pricing'
        ],
        fullDescription: 'High-quality cassava roots from Rivers State, perfect for processing into garri, flour, or other cassava-based products. These roots are harvested at optimal maturity for processing, ensuring maximum yield and quality.',
        specifications: {
            grade: 'Processing Grade',
            weightPerContainer: '20,000-25,000 kg',
            packaging: 'Container configuration',
            storage: 'Cool, dry storage recommended',
            shelfLife: '14-21 days from delivery'
        },
        shipping: [
            '✓ Standard delivery: 5-7 business days',
            '✓ Express delivery: 2-3 business days (additional fee)',
            '✓ Container transport available',
            '✓ Delivery tracking included',
            '✓ Free delivery on orders over 3 containers'
        ]
    }
];

// Function to get product by ID
function getProductById(id) {
    return productsData.find(product => product.id === id) || productsData[0];
}

// Function to get all products
function getAllProducts() {
    return productsData;
}

