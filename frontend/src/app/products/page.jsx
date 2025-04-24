import Image from "next/image"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Tag, Filter, Search } from "lucide-react"

export default function ProductsPage() {
  const productCategories = [
    {
      id: "grains",
      name: "Grains & Cereals",
      products: [
        {
          id: 1,
          name: "Premium Wheat",
          image: "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg",
          description: "High-quality wheat varieties suitable for premium flour production, bread, pasta, and pastry applications.",
          certifications: ["Organic", "Non-GMO"]
        },
        {
          id: 2,
          name: "Whole Grain Rice",
          image: "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg",
          description: "Nutrient-rich rice varieties including Basmati, Jasmine, and specialty types sourced from premier growing regions.",
          certifications: ["Sustainable", "Quality Assured"]
        },
        {
          id: 3,
          name: "Premium Barley",
          image: "https://images.pexels.com/photos/533982/pexels-photo-533982.jpeg",
          description: "Malting-grade and feed barley cultivated in optimal growing conditions for superior quality and yield.",
          certifications: ["Non-GMO"]
        }
      ]
    },
    {
      id: "fruits",
      name: "Fresh Fruits",
      products: [
        {
          id: 4,
          name: "Organic Citrus",
          image: "https://images.pexels.com/photos/952360/pexels-photo-952360.jpeg",
          description: "Fresh oranges, lemons, grapefruits, and specialty citrus fruits cultivated with organic farming practices.",
          certifications: ["Organic", "Pesticide-Free"]
        },
        {
          id: 5,
          name: "Premium Berries",
          image: "https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg",
          description: "Hand-picked strawberries, blueberries, and raspberries packed at peak ripeness for maximum flavor and shelf life.",
          certifications: ["Sustainable", "Quality Assured"]
        },
        {
          id: 6,
          name: "Tropical Fruits",
          image: "https://images.pexels.com/photos/3746517/pexels-photo-3746517.jpeg",
          description: "Exotic mangoes, papayas, dragon fruit, and other tropical varieties sourced from ideal growing environments.",
          certifications: ["Farm Direct"]
        }
      ]
    },
    {
      id: "vegetables",
      name: "Vegetables",
      products: [
        {
          id: 7,
          name: "Fresh Greens",
          image: "https://images.pexels.com/photos/1352252/pexels-photo-1352252.jpeg",
          description: "Nutritious leafy vegetables including kale, spinach, and specialty salad varieties with extended shelf life.",
          certifications: ["Organic", "Pesticide-Free"]
        },
        {
          id: 8,
          name: "Root Vegetables",
          image: "https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg",
          description: "Premium potatoes, carrots, and other root vegetables in various grades for retail and processing markets.",
          certifications: ["Quality Assured"]
        },
        {
          id: 9,
          name: "Greenhouse Tomatoes",
          image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg",
          description: "Year-round supply of greenhouse-grown tomatoes in multiple varieties with consistent quality and flavor.",
          certifications: ["Sustainable", "Non-GMO"]
        }
      ]
    },
    {
      id: "specialty",
      name: "Specialty Products",
      products: [
        {
          id: 10,
          name: "Premium Coffee",
          image: "https://images.pexels.com/photos/34085/pexels-photo.jpg",
          description: "Single-origin Arabica and Robusta coffee beans from sustainable plantations with distinctive flavor profiles.",
          certifications: ["Fair Trade", "Organic"]
        },
        {
          id: 11,
          name: "Exotic Spices",
          image: "https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg",
          description: "Carefully sourced spices including turmeric, cardamom, saffron, and unique blends for culinary applications.",
          certifications: ["Pure Origin", "Quality Assured"]
        },
        {
          id: 12,
          name: "Specialty Nuts",
          image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg",
          description: "Premium almonds, cashews, pistachios, and nut mixes for retail and ingredient applications.",
          certifications: ["Organic", "Non-GMO"]
        }
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 text-white md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Our Products</h1>
            <p className="text-lg text-slate-300 md:text-xl">
              Discover our extensive range of premium agricultural exports sourced from trusted producers.
            </p>
          </div>
        </div>
      </section>

      {/* Product Search & Filter */}
      {/* <section className="border-b py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            {/* Search Bar * /}
            <div className="relative md:max-w-md md:flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-lg border border-input bg-background py-2 pl-10 pr-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            
            {/* Filter Buttons * /}
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                Categories
              </Button>
              <Button variant="outline" size="sm">Certifications</Button>
              <Button variant="outline" size="sm">Origin</Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Products by Category */}
      {productCategories.map((category) => (
        <section key={category.id} id={category.id} className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="mb-8 text-3xl font-bold">{category.name}</h2>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {category.products.map((product) => (
                <div key={product.id} className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl dark:bg-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {product.certifications.map((cert, index) => (
                        <span key={index} className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold">{product.name}</h3>
                    <p className="mb-4 text-muted-foreground">{product.description}</p>
                    <div className="flex justify-between">
                      <Link href={`/products/${product.id}`}>
                        <Button variant="outline" size="sm">View Details</Button>
                      </Link>
                      <Button variant="accent" size="sm">Request Quote</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      {/* <section className="bg-green-50 py-16 dark:bg-green-950/20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 text-center shadow-md dark:bg-card">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Need a Custom Solution?</h2>
            <p className="mb-6 text-muted-foreground">
              Can't find exactly what you're looking for? Our team can help source specific agricultural products to meet your unique requirements.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button variant="accent" size="lg">Contact Our Team</Button>
              </Link>
              <Button variant="outline" size="lg">Download Catalog</Button>
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}