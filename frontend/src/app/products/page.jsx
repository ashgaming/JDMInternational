"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Tag, Filter, Search } from "lucide-react"
import ProductInquiryForm from "../../components/ProductInquiryForm"
import { useState } from "react"
import { set } from "date-fns"
import ProductDetails from "../../components/ProductDetails"
import { productCategories } from "../../data/products"

export default function ProductsPage() {
 

  const [isProductInquiryFormOpen, setProductInquiryFormOpen] = useState(false)
  const [ProductInquiryData, setProductInquiryData] = useState(null)

  const [ProductDetailsData, setProductDetailsData] = useState(null)

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

      {ProductInquiryData && <ProductInquiryForm product={ProductInquiryData} onClose={() => setProductInquiryData(null)} />}
      { ProductDetailsData && <ProductDetails product={ProductDetailsData} onClose={() => setProductDetailsData(null)} />}
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
                      {/* <Link href={`/products/${product.id}`}>
                      </Link> */}
                      <Button variant="outline" size="sm" onClick={() => {
                        setProductDetailsData(product)
                      }}>View Details</Button>
                      <Button variant="accent" size="sm" onClick={() => {
                        setProductInquiryData(product.name)
                        setProductInquiryFormOpen(!isProductInquiryFormOpen)
                      }
                      }>Request Quote</Button>
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