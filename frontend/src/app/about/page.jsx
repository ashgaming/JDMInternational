import Image from "next/image"
import { Briefcase, Users, HelpingHand, GraduationCap, ChevronRight, Github, Linkedin, Twitter } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}

      <section className="relative bg-slate-900 py-20 text-white md:py-28">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg"
            alt="Agricultural landscape"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">About TrueValue Global</h1>
            <p className="text-lg text-slate-300 md:text-xl">
              Your trusted partner in Indian Goods exports since 2025.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">Who We Are</h2>
            <div className="space-y-6 text-lg">
              <p>
                TrueValue Global was founded in 2025 with a vision to become a leading exporter of premium Indian commodities to markets worldwide.
              </p>
              <p>
                Based in India, we leverage cutting-edge logistics solutions to ensure timely and secure delivery of goods to clients across Asia, Europe, and the Americas.
              </p>
            </div>

            <h2 className="my-6 text-center text-3xl font-bold md:text-4xl">Premium Product Range</h2>
            <div className="space-y-6 text-lg">
              <p>
                Our product portfolio includes high-quality agricultural produce and specialty goods, curated to meet the exacting standards of international buyers.              </p>
              <p>
                We maintain rigorous quality control at every stage of the supply chain to guarantee consistency and compliance with international regulations.              </p>
            </div>

            <h2 className="my-6 text-center text-3xl font-bold md:text-4xl">Why Choose Us</h2>
            <h3 className="my-6 text-left text-xl font-bold md:text-2xl">Customer-First Approach</h3>
            <div className="space-y-6 text-lg">
              <p>
                At TrueValue Global, customer satisfaction is our highest priority, and we strive to build long-term partnerships through transparent communication and personalized service.              </p>

              <p> Our strategic partnerships with trusted producers and freight carriers allow us to offer competitive pricing without compromising on quality              </p>
            </div>

            <h2 className="my-6 text-center text-3xl font-bold md:text-4xl">Sustainability & Ethics</h2>
            <h3 className="my-6 text-left text-xl font-bold md:text-2xl"> Responsible Sourcing </h3>
            <div className="space-y-6 text-lg">
              <p>
                We adhere to sustainable and ethical sourcing practices to support local communities and protect the environment.
              </p>

              <p>
                Our dedicated export specialists provide end-to-end support, from documentation and customs clearance to real-time shipment tracking.
              </p>
            </div>


            <h2 className="my-6 text-center text-3xl font-bold md:text-4xl">Global Expertise</h2>
            <h3 className="my-6 text-left text-xl font-bold md:text-2xl">Market Intelligence</h3>
            <div className="space-y-6 text-lg">
              <p>
                By staying abreast of global market trends and regulatory changes, we proactively adapt our strategies to keep our clients ahead of the competition.
              </p>
            </div>


            <h2 className="my-6 text-center text-3xl font-bold md:text-4xl">Get in Touch</h2>
            <div className="space-y-6 text-lg">
              <p>
              Contact us today to discover how TrueValue Global can elevate your supply chain with reliable export solutions tailored to your business needs.              </p>
            </div>
          </div>




        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-slate-50 py-16 dark:bg-slate-900/30 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Mission & Values</h2>
            <p className="mx-auto max-w-5xl text-lg text-muted-foreground">
              Guided by principles that prioritize quality, sustainability, and partnership.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:translate-y-[-5px] dark:bg-card">
              <div className="mb-4 rounded-full bg-green-100 p-3 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Excellence</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards for product quality and service delivery, ensuring complete satisfaction for all stakeholders.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:translate-y-[-5px] dark:bg-card">
              <div className="mb-4 rounded-full bg-green-100 p-3 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Partnership</h3>
              <p className="text-muted-foreground">
                We build lasting relationships with producers, buyers, and service providers based on mutual respect and shared goals.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:translate-y-[-5px] dark:bg-card">
              <div className="mb-4 rounded-full bg-green-100 p-3 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                <HelpingHand className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Sustainability</h3>
              <p className="text-muted-foreground">
                We promote environmentally responsible practices throughout our supply chain, ensuring a positive impact on our planet.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:translate-y-[-5px] dark:bg-card">
              <div className="mb-4 rounded-full bg-green-100 p-3 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously seek new solutions and approaches to improve our services and create more value for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Team Section */}
      <section className="py-16 md:py-24">


        <section className="relative min-h-screen text-black overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mt-10 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl ">Our Leadership</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Meet the experienced professionals guiding our global operations.
              </p>
            </div>
            {/* Background gradient circles */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-600/20 rounded-full blur-3xl"></div>

            {/* Content wrapper */}
            <div className="relative min-h-screen flex items-center">
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  {/* Image content - spans 5 columns on large screens */}
                  <div className="lg:col-span-5 order-1 lg:order-none">
                    <div className="relative max-w-md mx-auto lg:max-w-none">
                      {/* Decorative elements */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-10 blur-3xl"></div>
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-75 blur-lg"></div>

                      {/* Main image */}
                      <div className="relative rounded-full overflow-hidden border border-white/10 aspect-square mt-20 lg:mt-0">
                        <img
                          src={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                          alt="Profile Picture"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Experience badge */}
                      <div className="scale-50 sm:scale-100 absolute -right-14 sm:-right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-green-500 p-1 rounded-2xl">
                        <div className="px-6 py-4 bg-[#0A101D] rounded-xl text-white">
                          <p className="text-sm font-medium">Experience</p>
                          <p className="text-2xl font-bold">5+ Years</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-8 order-2 lg:order-none text-center lg:text-left">
                    <div className="space-y-4">
                      <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                        <span className="relative">
                          <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                            Abhishek Kamble
                          </span>
                        </span>
                      </h1>
                      <h2 className="text-2xl lg:text-4xl text-black font-light">Founder And CEO</h2>
                    </div>

                    <p className="text-xl max-w-3xl mx-auto lg:mx-0 leading-relaxed pb-5 md:pb-0">
                      Crafting digital experiences that blend innovative design with cutting-edge technology.
                      As the CEO and Founder of our export agency, let's transform your vision into reality.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </section>
    </>
  )
}