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
    },

    {
        id: "Cereals",
        name: "Cereals & Pulses",
        products: [
            {
                "id": 1,
                "name": "Basmati Rice",
                "image": "https://spicecheck24.com/cdn/shop/collections/basmati-rice.png?v=1699856755&width=1024",
                "description": "Premium long-grain aromatic rice known for its fragrance and delicate flavor, ideal for biryani and pulao.",
                "certifications": ["Organic", "Non-GMO"],
                "pricePer1000kg": 1200,
                "unit": "metric ton",
                "specifications": ["Grain Length: 7.5mm", "Moisture Content: 12%", "Broken Grains: <5%"]
            },
            {
                "id": 2,
                "name": "Non-Basmati Rice",
                "image": "https://img1.exportersindia.com/product_images/bc-full/2020/8/7405500/sona-masoori-raw-non-basmati-rice-1597926537-5559693.jpeg",
                "description": "Versatile medium-grain rice suitable for everyday meals, including curries and stir-fries.",
                "certifications": ["Non-GMO"],
                "pricePer1000kg": 600,
                "unit": "metric ton",
                "specifications": ["Grain Length: 5.5mm", "Moisture Content: 13%", "Broken Grains: <10%"]
            },
            {
                "id": 3,
                "name": "Premium Wheat",
                "image": "https://tiimg.tistatic.com/fp/1/007/531/10-moisture-premium-wheat-seed-for-making-flour-roti--812.jpg",
                "description": "High-quality wheat varieties suitable for premium flour production, bread, pasta, and pastry applications.",
                "certifications": ["Organic", "Non-GMO"],
                "pricePer1000kg": 800,
                "unit": "metric ton",
                "specifications": ["Gluten Content: 12%", "Moisture Content: 13%", "Protein Content: 14%"]
            },
            {
                "id": 4,
                "name": "Maize",
                "image": "https://www.keshrinandan.com/wp-content/uploads/2015/08/ke_maize_nutrition.jpg",
                "description": "High-yield maize ideal for animal feed, industrial use, and food products like cornmeal and snacks.",
                "certifications": ["Non-GMO"],
                "pricePer1000kg": 500,
                "unit": "metric ton",
                "specifications": ["Moisture Content: 14%", "Foreign Matter: <2%", "Protein Content: 9%"]
            },
            {
                "id": 5,
                "name": "Moong Lentils",
                "image": "https://static.vecteezy.com/system/resources/previews/024/561/302/non_2x/yellow-moong-mung-dal-lentil-pulse-bean-photo.JPG",
                "description": "Green moong lentils rich in protein, perfect for dals, soups, and sprouts.",
                "certifications": ["Organic", "Non-GMO"],
                "pricePer1000kg": 900,
                "unit": "metric ton",
                "specifications": ["Moisture Content: 10%", "Foreign Matter: <1%", "Protein Content: 24%"]
            },
            {
                "id": 6,
                "name": "Masoor Lentils",
                "image": "http://www.daringgourmet.com/wp-content/uploads/2013/06/Masoor-Dal-prep-1.jpg",
                "description": "Red masoor lentils known for quick cooking, ideal for curries and lentil soups.",
                "certifications": ["Organic"],
                "pricePer1000kg": 850,
                "unit": "metric ton",
                "specifications": ["Moisture Content: 11%", "Foreign Matter: <1%", "Protein Content: 25%"]
            },
            {
                "id": 7,
                "name": "Chana Lentils",
                "image": "https://societacofica.com.au/wp-content/uploads/2015/07/01-Chana-Dal2.jpg",
                "description": "Chana lentils (chickpeas) used in hummus, curries, and snacks, high in fiber and protein.",
                "certifications": ["Non-GMO"],
                "pricePer1000kg": 950,
                "unit": "metric ton",
                "specifications": ["Moisture Content: 12%", "Foreign Matter: <1%", "Protein Content: 20%"]
            }
        ]
    },

    {
        id: "Fresh Fruits & Vegetables",
        name: "Fresh Fruits & Vegetables",
        products: [
            {
                "id": 1,
                "name": "Mango",
                "image": "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg",
                "description": "Premium quality mangoes, sweet and juicy, ideal for fresh consumption, juicing, and export markets.",
                "certifications": ["Organic", "Non-GMO"],
                "pricePer1000kg": 1500,
                "unit": "metric ton",
                "specifications": ["Brix Level: 14-18%", "Moisture Content: 80%", "Average Weight: 250-350g"]
            },
            {
                "id": 2,
                "name": "Banana",
                "image": "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg",
                "description": "High-quality green bananas, perfect for ripening, suitable for international markets and long-distance shipping.",
                "certifications": ["Non-GMO"],
                "pricePer1000kg": 700,
                "unit": "metric ton",
                "specifications": ["Length: 15-25cm", "Moisture Content: 75%", "Shelf Life: 20-30 days"]
            },
            {
                "id": 3,
                "name": "Grapes",
                "image": "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg",
                "description": "Fresh, seedless grapes with a sweet-tart flavor, ideal for fresh consumption and export to premium markets.",
                "certifications": ["Organic"],
                "pricePer1000kg": 2000,
                "unit": "metric ton",
                "specifications": ["Brix Level: 16-20%", "Berry Size: 18-22mm", "Moisture Content: 80%"]
            },
            {
                "id": 4,
                "name": "Onion",
                "image": "https://thefederal.com/file/2019/09/onions-at-vegetable-market-picture-id1135657897.jpg",
                "description": "Crisp, pungent onions suitable for cooking, salads, and export, with excellent storage and transport qualities.",
                "certifications": ["Non-GMO"],
                "pricePer1000kg": 400,
                "unit": "metric ton",
                "specifications": ["Size: 50-70mm", "Moisture Content: 85%", "Shelf Life: 2-3 months"]
            },
            {
                "id": 5,
                "name": "Tomato",
                "image": "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg",                "description": "Vibrant red tomatoes, firm and flavorful, ideal for fresh markets, processing, and export.",
                "certifications": ["Organic", "Non-GMO"],
                "pricePer1000kg": 600,
                "unit": "metric ton",
                "specifications": ["Size: 50-60mm", "Moisture Content: 90%", "Acidity: 0.4-0.6%"]
            },
            {
                "id": 6,
                "name": "Capsicum",
                "image": "https://images.indianexpress.com/2023/09/Capsicum.jpg",
                "description": "Colorful bell peppers (red, yellow, green), crisp and sweet, perfect for culinary use and export.",
                "certifications": ["Non-GMO"],
                "pricePer1000kg": 900,
                "unit": "metric ton",
                "specifications": ["Size: 80-100mm", "Moisture Content: 92%", "Shelf Life: 3-4 weeks"]
            }
        ]
    },

    {
        id: "Spices & Herbs",
        name: "Spices & Herbs",
        products: [
            {
                "id": 1,
                "name": "Turmeric",
                "image": "https://i0.wp.com/blog.biostarus.com/wp-content/uploads/2016/04/turmeric-pwdr-root.png?ssl=1",
                "description": "Vibrant yellow spice with earthy flavor, ideal for curries, sauces, and health supplements.",
                "certifications": ["Organic", "Non-GMO"],
                "pricePer1000kg": 1200,
                "unit": "metric ton",
                "specifications": ["Curcumin Content: 3-5%", "Moisture Content: 10%", "Purity: 98%"]
            },
            {
                "id": 2,
                "name": "Cumin",
                "image": "https://cdn.britannica.com/59/219359-050-662D86EA/Cumin-Spice.jpg",
                "description": "Warm, aromatic seeds used in spice blends, curries, and Middle Eastern dishes.",
                "certifications": ["Organic", "Non-GMO"],
                "pricePer1000kg": 1500,
                "unit": "metric ton",
                "specifications": ["Volatile Oil: 2.5-4%", "Moisture Content: 9%", "Purity: 99%"]
            },
            {
                "id": 3,
                "name": "Coriander",
                "image": "https://www.pngmart.com/files/22/Coriander-PNG-Isolated-Photo.png",
                "description": "Citrusy and mild seeds, perfect for seasoning, pickling, and curry powders.",
                "certifications": ["Organic", "Non-GMO"],
                "pricePer1000kg": 900,
                "unit": "metric ton",
                "specifications": ["Volatile Oil: 0.4-1.8%", "Moisture Content: 10%", "Purity: 98%"]
            },
            {
                "id": 4,
                "name": "Cardamom",
                "image": "https://herbsandspicesaustralia.com/wp-content/uploads/2018/11/green_cardamom.jpg",
                "description": "Sweet and floral green pods, used in desserts, teas, and savory dishes.",
                "certifications": ["Organic", "Non-GMO"],
                "pricePer1000kg": 2500,
                "unit": "metric ton",
                "specifications": ["Volatile Oil: 3-8%", "Moisture Content: 12%", "Purity: 99%"]
            },
            {
                "id": 5,
                "name": "Cloves",
                "image": "https://cdn.britannica.com/27/171027-050-7F7889C9/flower-buds-clove-tree.jpg",
                "description": "Intense, warm spice for baking, spice blends, and medicinal applications.",
                "certifications": ["Organic", "Non-GMO"],
                "pricePer1000kg": 2000,
                "unit": "metric ton",
                "specifications": ["Volatile Oil: 15-20%", "Moisture Content: 10%", "Purity: 98%"]
            },
            {
                "id": 6,
                "name": "Black Pepper",
                "image": "https://aberfoyle.lk/wp-content/uploads/2020/12/pepper-seeds.jpg",
                "description": "Pungent and spicy peppercorns, essential for seasoning and culinary applications.",
                "certifications": ["Organic", "Non-GMO"],
                "pricePer1000kg": 1800,
                "unit": "metric ton",
                "specifications": ["Piperine Content: 4-6%", "Moisture Content: 12%", "Purity: 99%"]
            }
        ]
    },
/*
    {
        id: "Oilseeds & Oils",
        name: "Oilseeds & Oils",
        products: [
            {
              "id": 21,
              "name": "Groundnut",
              "image": "https://www.bestoilpressmachines.com/uploads/allimg/peanut-groundnut.jpg",
              "description": "Cold-pressed groundnut oil with a mild nutty flavor, ideal for frying and cooking.",
              "certifications": ["Cold Pressed", "Quality Assured"],
              "pricePer1000kg": 18000,
              "unit": "metric ton",
              "specifications": ["Moisture Content: 0.1%", "Color: Light Yellow", "Aroma: Mild Nutty"]
            },
            {
              "id": 22,
              "name": "Mustard",
              "image": "https://organicshandy.com/wp-content/uploads/2018/10/mustard-oil.jpg",
              "description": "Pure mustard oil extracted from quality mustard seeds, known for its strong aroma and sharp flavor.",
              "certifications": ["Cold Pressed", "Lab Tested"],
              "pricePer1000kg": 19000,
              "unit": "metric ton",
              "specifications": ["Moisture Content: 0.2%", "Color: Amber Yellow", "Aroma: Pungent"]
            },
            {
              "id": 23,
              "name": "Sesame",
              "image": "https://ibio.co.th/products/image/catalog/Sesamum%20Indicum%20(Sesame)%20Seed%20Oil.jpg",
              "description": "Naturally extracted sesame oil rich in antioxidants, commonly used in Asian cuisines.",
              "certifications": ["Organic Certified", "Cold Pressed"],
              "pricePer1000kg": 25000,
              "unit": "metric ton",
              "specifications": ["Moisture Content: 0.1%", "Color: Golden Brown", "Aroma: Distinct Nutty"]
            },
            {
              "id": 24,
              "name": "Sunflower Oil",
              "image": "https://www.deltawilmar.com/wp-content/uploads/2017/03/banner-sunflower-oil-1024x678.jpg",
              "description": "Refined sunflower oil with high vitamin E content, suitable for light frying and baking.",
              "certifications": ["Refined", "Non-GMO"],
              "pricePer1000kg": 17000,
              "unit": "metric ton",
              "specifications": ["Moisture Content: 0.05%", "Color: Pale Yellow", "Aroma: Neutral"]
            },
            {
              "id": 25,
              "name": "Soybean",
              "image": "https://oilseedproducts.co.nz/wp-content/uploads/2018/08/soybean-oil.jpg",
              "description": "Versatile and affordable soybean oil widely used in industrial food production and cooking.",
              "certifications": ["Refined", "ISO Certified"],
              "pricePer1000kg": 16000,
              "unit": "metric ton",
              "specifications": ["Moisture Content: 0.1%", "Color: Light Golden", "Aroma: Mild"]
            }
          ]
          
    },
    {
        id: "Animal Products",
        name: "Animal Products",
        products: [
            {
                "id": 1,
                "name": "Skimmed Milk Powder (SMP)",
                "image": "https://www.fitsa-group.com/wp-content/uploads/2021/11/Product-page-Skimmed-milk-powders-1.jpg",
                "description": "High-quality skimmed milk powder produced by spray-drying fresh pasteurized skim milk, ideal for baking, confectionery, and nutritional products.",
                "certifications": ["FSSAI Certified", "HACCP", "ISO 22000"],
                "pricePer1000kg": 2500,
                "unit": "metric ton",
                "specifications": ["Moisture Content: ≤5%", "Protein Content: ≥34%", "Fat Content: ≤1.25%"],
                "exportAgencyWebsite": "https://www.alphamilk.in"
            },
            {
                "id": 2,
                "name": "Whole Milk Powder (WMP)",
                "image": "https://5.imimg.com/data5/PC/RI/MY-9072664/whole-milk-powder-28wmp-29-500x500.jpg",
                "description": "Premium whole milk powder with rich flavor, suitable for dairy beverages, ice cream, and chocolate manufacturing.",
                "certifications": ["FSSAI Certified", "HALAL", "ISO 9001"],
                "pricePer1000kg": 3500,
                "unit": "metric ton",
                "specifications": ["Moisture Content: ≤4%", "Fat Content: ≥26%", "Protein Content: ≥24%"],
                "exportAgencyWebsite": "https://www.milkfoodltd.com"
            },
            {
                "id": 3,
                "name": "Butter",
                "image": "https://www.thedailymeal.com/img/gallery/yes-there-is-a-difference-between-east-and-west-coast-butter/intro-1676380758.jpg",
                "description": "Creamy, unsalted butter made from fresh cream, perfect for baking, cooking, and spreads.",
                "certifications": ["FSSAI Certified", "AGMARK", "ISO 22000"],
                "pricePer1000kg": 4500,
                "unit": "metric ton",
                "specifications": ["Fat Content: ≥82%", "Moisture Content: ≤16%", "Salt Content: None"],
                "exportAgencyWebsite": "https://www.paramdairy.com"
            },
            {
                "id": 4,
                "name": "Ghee (Clarified Butter)",
                "image": "https://i.ytimg.com/vi/7wTjpM-qm_I/maxresdefault.jpg",
                "description": "Pure clarified butter with a rich, nutty flavor, crafted from high-quality butter, ideal for cooking and traditional dishes.",
                "certifications": ["FSSAI Certified", "HALAL", "APEDA"],
                "pricePer1000kg": 6000,
                "unit": "metric ton",
                "specifications": ["Fat Content: ≥99%", "Moisture Content: ≤0.5%", "Free Fatty Acids: ≤0.5%"],
                "exportAgencyWebsite": "https://www.yuvarajuagroimpex.com"
            },
            {
                "id": 5,
                "name": "Fresh Cheese",
                "image": "https://1.bp.blogspot.com/-I8rQyMZ7wfE/XSMT2Er74BI/AAAAAAAAHwk/izQuT2w46JkGPmIOKt08JfiFa1V2St6jQCLcBGAs/s1600/Cheese_Simple_2.jpg",
                "description": "Soft, fresh cheese made from pasteurized cow’s milk, suitable for culinary applications and direct consumption.",
                "certifications": ["FSSAI Certified", "ISO 22000", "HACCP"],
                "pricePer1000kg": 4000,
                "unit": "metric ton",
                "specifications": ["Moisture Content: ≤60%", "Fat Content: ≥20%", "pH: 5.0-5.5"],
                "exportAgencyWebsite": "https://www.verka.coop"
            }
        ]
    },

    {
        id: "Processed & Value-added Foods",
        name: "Processed & Value-added Foods",
        products: [
            {
                "id": 1,
                "name": "Pickles",
                "image": "https://cdn.pixabay.com/photo/2020/07/31/15/40/cucumber-5453364_1280.jpg",
                "description": "Tangy and spicy pickles made from fresh mangoes, lemons, and mixed vegetables, preserved with natural spices and cold-pressed oils.",
                "certifications": ["FSSAI Certified", "Organic", "APEDA"],
                "pricePer1000kg": 3000,
                "unit": "metric ton",
                "specifications": ["Moisture Content: ≤15%", "Acidity: 1.5-2%", "Oil: Cold-pressed Mustard"],
                "exportAgencyWebsite": "https://www.jandhyalafoods.in"
            },
            {
                "id": 2,
                "name": "Papads",
                "image": "https://www.thukralfoods.com/wp-content/uploads/2022/03/papad-fully-spicy.jpg",
                "description": "Crispy papads made from urid dal and rice flour, infused with black pepper and byadgi chilly, perfect as a snack or meal accompaniment.",
                "certifications": ["FSSAI Certified", "HACCP", "Vegan"],
                "pricePer1000kg": 2000,
                "unit": "metric ton",
                "specifications": ["Moisture Content: ≤10%", "Thickness: 0.8-1.2mm", "Spice Level: Medium"],
                "exportAgencyWebsite": "https://www.agrawalpapad.com"
            },
            {
                "id": 3,
                "name": "Chutneys",
                "image": "https://img2.exportersindia.com/product_images/bc-full/dir_80/2370564/pickles-chutney-753543.jpg",
                "description": "Flavorful chutneys crafted from mango, tomato, and tropical fruits, blended with spices, sugar, and vinegar for a sweet-spicy taste.",
                "certifications": ["FSSAI Certified", "ISO 22000", "Vegan"],
                "pricePer1000kg": 3500,
                "unit": "metric ton",
                "specifications": ["Sugar Content: 30-40%", "Acidity: 1-1.5%", "Shelf Life: 9 months"],
                "exportAgencyWebsite": "https://www.mrsoldbuckspantry.com.au"
            },
            {
                "id": 4,
                "name": "Biscuits",
                "image": "https://static.toiimg.com/photo/88698517.cms",
                "description": "Crunchy biscuits in assorted flavors like butter, coconut, and cardamom, baked with premium ingredients for a delightful snack.",
                "certifications": ["FSSAI Certified", "HALAL", "ISO 9001"],
                "pricePer1000kg": 2500,
                "unit": "metric ton",
                "specifications": ["Moisture Content: ≤5%", "Fat Content: 15-20%", "Sugar Content: 20-25%"],
                "exportAgencyWebsite": "https://www.parleproducts.com"
            },
            {
                "id": 5,
                "name": "Confectionery",
                "image": "https://d3qpa3na1ei3ef.cloudfront.net/wp-content/uploads/sites/2/2019/01/AdobeStock_190744445.jpeg",
                "description": "Assorted confectionery including hard candies, toffees, and jaggery-based sweets, made with natural sweeteners and flavors.",
                "certifications": ["FSSAI Certified", "ISO 22000", "APEDA"],
                "pricePer1000kg": 4000,
                "unit": "metric ton",
                "specifications": ["Sugar Content: 50-60%", "Moisture Content: ≤8%", "Shelf Life: 12 months"],
                "exportAgencyWebsite": "https://www.haldiram.com"
            },
            {
                "id": 6,
                "name": "Dried Fruits",
                "image": "https://img.freepik.com/premium-photo/assorted-candied-berries-dried-fruits-nuts-seeds-top-view-healthy-food-background_84485-2116.jpg?w=2000",
                "description": "Premium dried fruits including almonds, cashews, raisins, and dried apricots, sourced from organic farms for natural sweetness.",
                "certifications": ["FSSAI Certified", "Organic", "ISO 22000"],
                "pricePer1000kg": 8000,
                "unit": "metric ton",
                "specifications": ["Moisture Content: ≤12%", "Purity: ≥99%", "Size: Uniform"],
                "exportAgencyWebsite": "https://www.nutraj.com"
            }
        ]
    },

    {
        id: "Nuts & Oil Meals",
        name: "Nuts & Oil Meals",
        products: [
            {
                "id": 1,
                "name": "Cashew",
                "image": "https://visimex.com/wp-content/uploads/2020/03/raw-cashew-s10vn-3.jpg",
                "description": "Premium whole cashews, sourced from organic farms, ideal for snacking, baking, or culinary applications.",
                "certifications": ["FSSAI Certified", "Organic", "ISO 22000"],
                "pricePer1000kg": 12000,
                "unit": "metric ton",
                "specifications": ["Moisture Content: ≤6%", "Purity: ≥99%", "Size: W320"],
                "exportAgencyWebsite": "https://www.nutraj.com"
            },
            {
                "id": 2,
                "name": "Almond",
                "image": "https://images8.alphacoders.com/367/367275.jpg",
                "description": "High-quality almonds with a rich, nutty flavor, perfect for confectionery, baking, or direct consumption.",
                "certifications": ["FSSAI Certified", "Organic", "HALAL"],
                "pricePer1000kg": 10000,
                "unit": "metric ton",
                "specifications": ["Moisture Content: ≤7%", "Purity: ≥99%", "Size: 23/25"],
                "exportAgencyWebsite": "https://www.royalnutcompany.com.au"
            },
            {
                "id": 3,
                "name": "Groundnut Cake",
                "image": "https://img-global.cpcdn.com/recipes/a459201f9f90c774/1200x630cq70/photo.jpg",
                "description": "Nutritious groundnut cake, a byproduct of oil extraction, rich in protein and used as livestock feed.",
                "certifications": ["FSSAI Certified", "HACCP", "ISO 9001"],
                "pricePer1000kg": 500,
                "unit": "metric ton",
                "specifications": ["Protein Content: 40-50%", "Moisture Content: ≤10%", "Oil Content: 6-8%"],
                "exportAgencyWebsite": "https://www.bfel.in"
            },
            {
                "id": 4,
                "name": "Soybean Meal",
                "image": "https://soyagrainsalliance.org/wp-content/uploads/2019/03/soybean-meal.jpg",
                "description": "High-protein soybean meal, derived from de-oiled soybeans, widely used as a feed ingredient for poultry and livestock.",
                "certifications": ["FSSAI Certified", "ISO 22000", "NON-GMO"],
                "pricePer1000kg": 600,
                "unit": "metric ton",
                "specifications": ["Protein Content: ≥48%", "Moisture Content: ≤12%", "Fiber Content: ≤7%"],
                "exportAgencyWebsite": "https://www.soya-food.com"
            },
            {
                "id": 5,
                "name": "Rapeseed Meal",
                "image": "https://targetbaits.co.uk/media/catalog/product/cache/4b3d09da2a11a5f8044d9f52a504a074/r/a/rapeseed_meel_dsc_0025_adjusted-001.jpg",
                "description": "Protein-rich rapeseed meal, a byproduct of oil extraction, suitable for ruminant and poultry feed with low glucosinolate content.",
                "certifications": ["FSSAI Certified", "HACCP", "ISO 22000"],
                "pricePer1000kg": 550,
                "unit": "metric ton",
                "specifications": ["Protein Content: 35-40%", "Moisture Content: ≤12%", "Fiber Content: ≤12%"],
                "exportAgencyWebsite": "https://www.polskieziarno.pl"
            }
        ]
    },

    {
        id: "Floriculture & Seeds",
        name: "Floriculture & Seeds",
        products: [
            {
                "id": 1,
                "name": "Roses",
                "image": "https://images5.fanpop.com/image/photos/29800000/roses-roses-29831525-1920-1285.jpg",
                "description": "Vibrant and fragrant roses in various colors, perfect for ornamental gardens, bouquets, and landscaping.",
                "certifications": ["Organic", "GlobalGAP", "ISO 22000"],
                "pricePer1000kg": 15000,
                "unit": "metric ton",
                "specifications": ["Stem Length: 50-70 cm", "Bloom Size: 5-7 cm", "Shelf Life: 10-14 days"],
                "exportAgencyWebsite": "https://www.floraholland.com"
            },
            {
                "id": 2,
                "name": "Orchids",
                "image": "https://www.thespruce.com/thmb/p88DUIhAqar9z9cf4zk_EulJRTA=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/VandaOrchid-GettyImages-809893688-326259c8b1f14f9f8b2ee2da0f9f511b.jpg",
                "description": "Exotic orchids with delicate blooms, ideal for floral arrangements, home decor, and greenhouse cultivation.",
                "certifications": ["Organic", "Fair Trade", "ISO 9001"],
                "pricePer1000kg": 25000,
                "unit": "metric ton",
                "specifications": ["Bloom Size: 6-10 cm", "Stem Length: 40-60 cm", "Shelf Life: 14-21 days"],
                "exportAgencyWebsite": "https://www.anthura.nl"
            },
            {
                "id": 3,
                "name": "Lilies",
                "image": "https://www.thespruce.com/thmb/LCyupmFhZf0tXxj6TpBwWS6ZSfo=/3867x2578/filters:fill(auto,1)/GettyImages-153342142-56a75f045f9b58b7d0e9bee6.jpg",
                "description": "Elegant lilies with large, fragrant blooms, suitable for cut flowers, events, and garden planting.",
                "certifications": ["GlobalGAP", "MPS Certified", "ISO 22000"],
                "pricePer1000kg": 18000,
                "unit": "metric ton",
                "specifications": ["Stem Length: 80-100 cm", "Bloom Size: 15-20 cm", "Shelf Life: 10-12 days"],
                "exportAgencyWebsite": "https://www.dutchlily.com"
            },
            {
                "id": 4,
                "name": "Vegetable Seeds (Tomato)",
                "image": "https://m.media-amazon.com/images/I/71DYmqoq-VL._SL1024_.jpg",
                "description": "High-yield tomato seeds with resistance to common diseases, suitable for commercial and home gardening.",
                "certifications": ["Organic", "Non-GMO", "ISTA Certified"],
                "pricePer1000kg": 50000,
                "unit": "metric ton",
                "specifications": ["Germination Rate: ≥85%", "Purity: ≥98%", "Moisture Content: ≤8%"],
                "exportAgencyWebsite": "https://www.rijkzwaan.com"
            },
            {
                "id": 5,
                "name": "Vegetable Seeds (Cucumber)",
                "image": "https://www.jacksonsnurseries.co.uk/images/detailed/10/Cucumber_Marketmore_Seeds_Unwins_Vegetable_Cropping.jpg",
                "description": "Premium cucumber seeds for high productivity, ideal for greenhouse and open-field cultivation.",
                "certifications": ["Organic", "Non-GMO", "ISTA Certified"],
                "pricePer1000kg": 45000,
                "unit": "metric ton",
                "specifications": ["Germination Rate: ≥90%", "Purity: ≥99%", "Moisture Content: ≤7%"],
                "exportAgencyWebsite": "https://www.seminis.com"
            },
            {
                "id": 6,
                "name": "Flower Bulbs",
                "image": "https://www.thespruce.com/thmb/zjhHMNrGynnLVl-_F97tmWo24Hg=/3717x2412/filters:fill(auto,1)/spring-blooming-bulbs-1402261-hero-1e504c3eeb8048c0aacabdb82686c979.jpg",
                "description": "Healthy flower bulbs including tulips, daffodils, and hyacinths, perfect for seasonal planting and landscaping.",
                "certifications": ["GlobalGAP", "Organic", "ISO 9001"],
                "pricePer1000kg": 8000,
                "unit": "metric ton",
                "specifications": ["Bulb Size: 10-12 cm", "Moisture Content: ≤15%", "Disease-Free"],
                "exportAgencyWebsite": "https://www.bulb.com"
            }
        ]
    },

    {
        id: "Organic Products",
        name: "Organic Products",
        products: [
            {
                "id": 1,
                "name": "Organic Cereals",
                "image": "https://thumbs.dreamstime.com/b/vegan-meal-healthy-organic-cereals-wooden-background-vegan-meal-healthy-organic-cereals-wooden-background-studio-photon-101195128.jpg",
                "description": "Premium organic cereals including quinoa, oats, and millet, grown without synthetic pesticides or fertilizers, ideal for healthy diets.",
                "certifications": ["USDA Organic", "EU Organic", "Non-GMO"],
                "pricePer1000kg": 3000,
                "unit": "metric ton",
                "specifications": ["Moisture Content: ≤12%", "Purity: ≥99%", "Protein Content: 10-14%"],
                "exportAgencyWebsite": "https://www.naturespath.com"
            },
            {
                "id": 2,
                "name": "Organic Spices",
                "image": "https://www.japc.lk/images/about/1.jpg",
                "description": "Carefully sourced organic spices including turmeric, cumin, and coriander, cultivated sustainably for rich flavor and aroma.",
                "certifications": ["USDA Organic", "Fair Trade", "ISO 22000"],
                "pricePer1000kg": 22000,
                "unit": "metric ton",
                "specifications": ["Moisture Content: ≤10%", "Purity: ≥98%", "Volatile Oil: 2-5%"],
                "exportAgencyWebsite": "https://www.organicspices.com"
            },
            {
                "id": 3,
                "name": "Organic Fruits & Vegetables",
                "image": "https://thumbs.dreamstime.com/b/fresh-organic-fruits-vegetables-abundance-36300677.jpg",
                "description": "Fresh organic fruits and vegetables including apples, carrots, and spinach, grown using eco-friendly farming practices.",
                "certifications": ["USDA Organic", "GlobalGAP", "Non-GMO"],
                "pricePer1000kg": 5000,
                "unit": "metric ton",
                "specifications": ["Moisture Content: 80-90%", "Shelf Life: 15-30 days", "Pesticide-Free"],
                "exportAgencyWebsite": "https://www.earthboundfarm.com"
            }
        ]
    },*/

];