import Image from "next/image"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Search, Calendar, User, Tag, Clock } from "lucide-react"

export default function BlogPage() {
  const featuredPosts = [
    {
      id: 1,
      title: "Global Agricultural Trade Trends for 2025",
      excerpt: "Explore the emerging patterns and market shifts that will define agricultural exports in the coming year.",
      image: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg",
      author: "Robert Johnson",
      date: "April 15, 2025",
      category: "Market Insights",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Sustainable Packaging Solutions for Fresh Produce",
      excerpt: "How innovative packaging technologies are extending shelf life while reducing environmental impact.",
      image: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg",
      author: "Maria Garcia",
      date: "April 3, 2025",
      category: "Sustainability",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Navigating Export Regulations: A Comprehensive Guide",
      excerpt: "Understanding the complex web of international trade regulations for agricultural exporters.",
      image: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg",
      author: "David Chen",
      date: "March 28, 2025",
      category: "Regulations",
      readTime: "10 min read"
    }
  ]

  const recentPosts = [
    {
      id: 4,
      title: "Climate Change Adaptation Strategies for Agricultural Exporters",
      excerpt: "How forward-thinking producers are adapting to changing climate conditions to maintain export quality and consistency.",
      image: "https://images.pexels.com/photos/408262/pexels-photo-408262.jpeg",
      author: "Sarah Patel",
      date: "March 22, 2025",
      category: "Climate & Environment",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Digital Transformation in Agricultural Supply Chains",
      excerpt: "Exploring how blockchain, IoT, and AI are revolutionizing transparency and efficiency in global agricultural trade.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
      author: "Michael Wong",
      date: "March 15, 2025",
      category: "Technology",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Emerging Markets: Export Opportunities in Southeast Asia",
      excerpt: "Analysis of growing demand for premium agricultural products in rapidly developing Southeast Asian economies.",
      image: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg",
      author: "Linda Nguyen",
      date: "March 10, 2025",
      category: "Market Insights",
      readTime: "8 min read"
    },
    {
      id: 7,
      title: "Quality Control Best Practices for Agricultural Exports",
      excerpt: "Essential systems and protocols to ensure consistent quality in agricultural products bound for international markets.",
      image: "https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg",
      author: "James Wilson",
      date: "March 5, 2025",
      category: "Quality Assurance",
      readTime: "6 min read"
    },
    {
      id: 8,
      title: "The Role of Trade Agreements in Agricultural Exports",
      excerpt: "How recent trade deals are creating new opportunities and challenges for agricultural exporters.",
      image: "https://images.pexels.com/photos/1181250/pexels-photo-1181250.jpeg",
      author: "Robert Johnson",
      date: "February 28, 2025",
      category: "Policy & Trade",
      readTime: "7 min read"
    },
    {
      id: 9,
      title: "Building Resilient Supply Chains for Agricultural Exports",
      excerpt: "Strategies for developing robust supply chains that can withstand disruptions and ensure continuous market access.",
      image: "https://images.pexels.com/photos/941555/pexels-photo-941555.jpeg",
      author: "Maria Garcia",
      date: "February 22, 2025",
      category: "Logistics",
      readTime: "8 min read"
    }
  ]

  const categories = [
    "Market Insights",
    "Sustainability",
    "Regulations",
    "Technology",
    "Logistics",
    "Quality Assurance",
    "Climate & Environment",
    "Policy & Trade"
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 text-white md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Agricultural Export Insights</h1>
            <p className="text-lg text-slate-300 md:text-xl">
              Expert analysis, market trends, and practical advice for agricultural exporters.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="border-b py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative md:max-w-md md:flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search blog posts..."
                className="w-full rounded-lg border border-input bg-background py-2 pl-10 pr-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 5).map((category, index) => (
                <Link 
                  key={index} 
                  href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Button variant="outline" size="sm">
                    {category}
                  </Button>
                </Link>
              ))}
              <Button variant="outline" size="sm">More+</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="mb-8 text-3xl font-bold">Featured Articles</h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <div key={post.id} className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl dark:bg-card">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-green-600 dark:group-hover:text-green-400">
                    {post.title}
                  </h3>
                  
                  <p className="mb-4 text-muted-foreground">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="bg-slate-50 py-16 dark:bg-slate-900/10">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="mb-8 text-3xl font-bold">Recent Articles</h2>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <div key={post.id} className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl dark:bg-card">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-sm">Read article</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  
                  <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-green-600 dark:group-hover:text-green-400">
                    {post.title}
                  </h3>
                  
                  <p className="mb-4 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                    
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">Load More Articles</Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-green-700 py-16 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-3xl rounded-lg bg-white/10 p-8 backdrop-blur-sm">
            <div className="text-center">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">Subscribe to Our Newsletter</h2>
              <p className="mb-6 text-green-100">
                Stay updated with the latest trends, insights, and opportunities in agricultural exports.
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-lg border-white/20 bg-white/10 p-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button className="bg-white text-green-700 hover:bg-green-50">
                  Subscribe
                </Button>
              </div>
              
              <p className="mt-4 text-sm text-green-100">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}