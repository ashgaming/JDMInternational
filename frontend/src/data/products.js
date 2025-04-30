export const productCategories = [
    {
        id: "grains",
        name: "Grains & Cereals",
        products: [
            {
                id: 1,
                name: "Premium Wheat",
                image: "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg",
                description: "High-quality wheat varieties suitable for premium flour production, bread, pasta, and pastry applications.",
                certifications: ["Organic", "Non-GMO"],
                pricePer1000kg: 800,
                unit: "metric ton", // $800 per 1000 kg
                specifications: ['Gluten Content: 12%', 'Moisture Content: 13%', 'Protein Content: 14%']
            },
            {
                id: 2,
                name: "Whole Grain Rice",
                image: "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg",
                description: "Nutrient-rich rice varieties including Basmati, Jasmine, and specialty types sourced from premier growing regions.",
                certifications: ["Sustainable", "Quality Assured"],
                pricePer1000kg: 1200,
                unit: "metric ton", // $1,200 per 1000 kg, aligns with basmati export price
                specifications: ['Grain Length: 6.5mm', 'Moisture Content: 14%', 'Aroma: Natural Basmati Aroma']
            },
            {
                id: 3,
                name: "Premium Barley",
                image: "https://images.pexels.com/photos/533982/pexels-photo-533982.jpeg",
                description: "Malting-grade and feed barley cultivated in optimal growing conditions for superior quality and yield.",
                certifications: ["Non-GMO"],
                pricePer1000kg: 650,
                unit: "metric ton", // $650 per 1000 kg
                specifications: ['Moisture Content: 12%', 'Protein Content: 11%', 'Test Weight: 65 kg/hl']
            }
        ]
    },
    {
        id: "fruits",
        name: "Fresh Fruits",
        products: [
            {
                id: 6,
                name: "Tropical Fruits",
                image: "https://images.pexels.com/photos/3746517/pexels-photo-3746517.jpeg",
                description: "Exotic mangoes, papayas, dragon fruit, and other tropical varieties sourced from ideal growing environments.",
                certifications: ["Farm Direct"],
                pricePer1000kg: 4000,
                unit: "metric ton", // $4,000 per 1000 kg
                specifications: ['Ripeness: 90%', 'Sugar Content: 15%', 'Color: Bright Yellow/Red']
            }
        ]
    },
    {
        id: "vegetables",
        name: "Vegetables",
        products: [
            {
                id: 8,
                name: "Root Vegetables",
                image: "https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg",
                description: "Premium potatoes, carrots, and other root vegetables in various grades for retail and processing markets.",
                certifications: ["Quality Assured"],
                pricePer1000kg: 1200,
                unit: "metric ton", // $1,200 per 1000 kg
                specifications: ['Size: 50-70mm', 'Moisture Content: 80%', 'Color: Bright Orange/Yellow']
            },
            {
                id: 9,
                name: "Greenhouse Tomatoes",
                image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg",
                description: "Year-round supply of greenhouse-grown tomatoes in multiple varieties with consistent quality and flavor.",
                certifications: ["Sustainable", "Non-GMO"],
                pricePer1000kg: 3000,
                unit: "metric ton", // $3,000 per 1000 kg
                specifications: ['Size: 150-200g', 'Color: Bright Red', 'Brix Level: 6-8%']
            }
        ]
    },
    {
        id: "specialty",
        name: "Specialty Products",
        products: [
            {
                id: 11,
                name: "Exotic Spices",
                image: "https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg",
                description: "Carefully sourced spices including turmeric, cardamom, saffron, and unique blends for culinary applications.",
                certifications: ["Pure Origin", "Quality Assured"],
                pricePer1000kg: 20000,
                unit: "metric ton" ,// $20,000 per 1000 kg
                specifications: ['Moisture Content: 10%', 'Color: Bright Yellow/Red', 'Aroma: Strong']
            },
            {
                id: 12,
                name: "Specialty Nuts",
                image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg",
                description: "Premium almonds, cashews, pistachios, and nut mixes for retail and ingredient applications.",
                certifications: ["Organic", "Non-GMO"],
                pricePer1000kg: 12000,
                unit: "metric ton" ,// $12,000 per 1000 kg
                specifications: ['Size: 20-25mm', 'Moisture Content: 5%', 'Color: Light Brown']
            }
        ]
    }
];