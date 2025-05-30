import Image from "next/image"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import { GlobeLock, PackageCheck, FileCheck2, Truck as TruckFront, BarChart3, BadgeCheck, CheckCircle2 } from "lucide-react"

export default function ServicesPage() {
  const servicesData = [
    {
      id: "market-access",
      title: "Global Market Access",
      description: "Connect with buyers worldwide through our established network spanning 45+ countries across 6 continents.",
      icon: <GlobeLock className="h-12 w-12" />,
      image: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg",
      benefits: [
        "Access to exclusive buyer networks in key markets",
        "Regional specialists with deep local knowledge",
        "Market entry strategies tailored to your products",
        "Cultural guidance and business protocol consulting",
        "Continuous market opportunity identification"
      ]
    },
    {
      id: "quality",
      title: "Quality Assurance",
      description: "Rigorous quality control ensures your products meet international standards and regulations for global acceptance.",
      icon: <BadgeCheck className="h-12 w-12" />,
      image: "https://images.pexels.com/photos/7129140/pexels-photo-7129140.jpeg",
      benefits: [
        "Pre-shipment inspection and quality verification",
        "Compliance with international food safety standards",
        "Laboratory testing and certification services",
        "Quality management system implementation",
        "Traceability systems and documentation"
      ]
    },
    {
      id: "documentation",
      title: "Export Documentation",
      description: "Complete management of complex paperwork and compliance requirements for smooth international trade.",
      icon: <FileCheck2 className="h-12 w-12" />,
      image: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg",
      benefits: [
        "Certificates of Origin preparation",
        "Phytosanitary and health certificates",
        "Export license and permits management",
        "Customs documentation and declarations",
        "Electronic documentation systems integration"
      ]
    },
    {
      id: "logistics",
      title: "Logistics Solutions",
      description: "End-to-end transportation and warehouse solutions optimized for agricultural products in all environments.",
      icon: <TruckFront className="h-12 w-12" />,
      image: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg",
      benefits: [
        "Temperature-controlled transportation",
        "Optimized shipping routes and carriers",
        "Warehouse and distribution management",
        "Real-time shipment tracking and monitoring",
        "Cost-effective consolidation services"
      ]
    },
    // {
    //   id: "packaging",
    //   title: "Packaging Services",
    //   description: "Custom packaging solutions that preserve quality and comply with destination country requirements.",
    //   icon: <PackageCheck className="h-12 w-12" />,
    //   image: "https://images.pexels.com/photos/5025473/pexels-photo-5025473.jpeg",
    //   benefits: [
    //     "Climate-appropriate packaging development",
    //     "Compliance with import country regulations",
    //     "Sustainable packaging options",
    //     "Private labeling and co-packing services",
    //     "Shelf-life optimization technologies"
    //   ]
    // },
    // {
    //   id: "market-analysis",
    //   title: "Market Analysis",
    //   description: "Data-driven insights on market trends, pricing strategies, and growth opportunities to maximize export potential.",
    //   icon: <BarChart3 className="h-12 w-12" />,
    //   image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
    //   benefits: [
    //     "Competitive landscape assessment",
    //     "Demand forecasting and trend analysis",
    //     "Pricing strategy development",
    //     "Market segmentation and targeting",
    //     "ROI analysis and performance metrics"
    //   ]
    // }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-20 text-white md:py-28">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/1556796/pexels-photo-1556796.jpeg"
            alt="Agricultural export services"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Our Export Services</h1>
            <p className="text-lg text-slate-300 md:text-xl">
              Comprehensive export solutions tailored to agricultural producers, ensuring seamless access to global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Export Solutions</h2>
            <p className="text-lg text-muted-foreground">
              From farm to global markets, we handle every aspect of the export process so you can focus on what you do best: producing quality agricultural products.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-xl dark:bg-card"
              >
                <div className="mb-4 rounded-full bg-green-100 p-3 text-green-700 transition-transform duration-300 group-hover:scale-110 dark:bg-green-900/30 dark:text-green-400">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Service Sections */}
      {servicesData.map((service, index) => (
        <section
          id={service.id}
          key={service.id}
          className={`py-20 ${index % 2 === 0 ? "bg-slate-50 dark:bg-slate-900/10" : ""}`}
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className={`${index % 2 === 1 ? "md:order-last" : ""}`}>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="h-auto max-h-[400px] w-full object-cover"
                  />
                </div>
              </div>
              
              <div>
                <div className="mb-6 rounded-full bg-green-100 p-4 w-fit text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  {service.icon}
                </div>
                <h2 className="mb-4 text-3xl font-bold">{service.title}</h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  {service.description}
                </p>
                
                <h3 className="mb-4 text-xl font-semibold">Benefits</h3>
                <ul className="mb-8 space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-green-600 dark:text-green-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="bg-green-700 py-20 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Export Process</h2>
            <p className="text-lg text-green-100">
              A systematic approach that ensures efficiency, compliance, and success at every stage of the export journey.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "We analyze your products, capabilities, and goals to develop a customized export strategy."
              },
              {
                step: "02",
                title: "Market Selection",
                description: "Identifying the most promising markets for your specific agricultural products."
              },
              {
                step: "03",
                title: "Compliance",
                description: "Ensuring all documentation, certifications, and standards are met for target markets."
              },
              {
                step: "04",
                title: "Execution",
                description: "Managing logistics, building relationships, and facilitating successful trade."
              }
            ].map((phase, index) => (
              <div key={index} className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-4 rounded-full bg-white w-12 h-12 flex items-center justify-center text-green-700 font-bold text-xl">
                  {phase.step}
                </div>
                <h3 className="mb-2 text-xl font-bold">{phase.title}</h3>
                <p className="text-green-100">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our agricultural export services.
            </p>
          </div>
          
          <div className="mx-auto max-w-4xl divide-y">
            {[
              {
                question: "How can I place an order with TrueValue Global?",
                answer: "Simply fill out the order form on our Request a Quote page or email your requirements directly to info@truevalueglobal.com. Our team will confirm availability, pricing, and next steps within one business day."
              },
              {
                question: "What shipping methods do you offer?",
                answer: "Sea freight (Full Container Load): Ideal for larger volumes, with transit times ranging from 2–8 weeks depending on destination and routing"
              },
              {
                question: "what are the typical transit times?",
                answer: "Air freight: Best for smaller, time-sensitive shipments, with transit times of 1–4 days to most markets  ."
              },
              {
                question: "How do you ensure product quality and freshness in transit?",
                answer: "We partner with accredited labs and on-site inspectors for pre-shipment testing and grading, ensuring compliance with pesticide residue and microbial standards . All produce is packed and shipped under a continuous cold chain at –1.5 °C to +14 °C, with temperature logging and real-time alerts to prevent spoilage."
              },
              {
                question: " What documentation and certifications do you provide with each shipment?",
                answer: "Phytosanitary Certificates and Health Certificates as required by destination countries. FDA Export Documentation (for U.S. imports) and other sanitary/quality documents mandated by local authorities. "
              },
              {
                question: "What payment terms and methods do you offer?",
                answer: "We accept Letter of Credit, Advance Payment, and Open Account terms, tailored to the client’s history and order size. Payment can be made in USD, EUR, or INR via bank transfer, SWIFT, or trade finance instruments."
              },
              {
                question: "What is the minimum order quantity and lead time for shipments?",
                answer: "Sea freight orders typically start at one full container load (FCL), which maximizes cost-efficiency. Air freight orders can start from 100 kg, with total door-to-door lead times of 3–7 days "
              },
              {
                question: "How do you ensure compliance with import regulations in destination markets?",
                answer: "We monitor import alerts, residue tolerances, and labeling standards from bodies like the FDA and APEDA to prevent customs holds. Our team prepares and reviews all export permits, commercial invoices, and packing lists in accordance with FSIS/USDA guidelines when applicable  "
              },
              {
                question: "How can I track my shipment once it’s dispatched?",
                answer: "All clients receive real-time tracking links via our online portal, plus milestone email/SMS alerts for dispatch, in-transit, and delivery statuses."
              },
              {
                question: "What support do you provide after delivery?",
                answer: "Our after-sales team handles quality feedback, claims processing, and customs inquiries. You can reach them at support@truevalueglobal.com or via our 24/7 helpline."
              },
            ].map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="mb-3 text-xl font-bold">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Export Your Agricultural Products?</h2>
            <p className="mb-8 text-lg text-slate-300">
              Our team is ready to discuss your specific export needs and create a customized solution for your business.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="/contact">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Contact Our Team
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Download Service Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}