import Image from "next/image"
import { Briefcase, Users, HelpingHand, GraduationCap } from "lucide-react"

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
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">About AgroExport</h1>
            <p className="text-lg text-slate-300 md:text-xl">
              Your trusted partner in global agricultural exports since 2005.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">Our Story</h2>
            <div className="space-y-6 text-lg">
              <p>
                Founded in 2005, AgroExport began with a simple mission: to help local farmers access global markets. What started as a small operation has grown into a leading agricultural export agency serving over 45 countries worldwide.
              </p>
              <p>
                Our founder, John Anderson, was a third-generation farmer who saw the untapped potential of international markets. After struggling to navigate complex export regulations himself, he established AgroExport to create a streamlined pathway for agricultural producers to sell their goods globally.
              </p>
              <p>
                Today, we're proud to work with thousands of producers ranging from family farms to large cooperatives. Our team of export specialists, logistics experts, and market analysts work together to ensure seamless delivery of premium agricultural products to international buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-slate-50 py-16 dark:bg-slate-900/30 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Mission & Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
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
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Leadership Team</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Meet the experienced professionals guiding our global operations.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Robert Johnson",
                role: "CEO & Founder",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
                bio: "With over 25 years in agricultural exports, Robert leads our global strategy and operations."
              },
              {
                name: "Maria Garcia",
                role: "Chief Operations Officer",
                image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
                bio: "Maria oversees our complex logistics network, ensuring timely deliveries worldwide."
              },
              {
                name: "David Chen",
                role: "Head of Market Analysis",
                image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg",
                bio: "David's expertise in international markets helps our clients maximize their export potential."
              },
              {
                name: "Sarah Patel",
                role: "Quality Assurance Director",
                image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
                bio: "Sarah ensures all products meet the highest international standards and compliance requirements."
              }
            ].map((member, index) => (
              <div key={index} className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-card">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                  <p className="mb-3 text-sm text-green-600 dark:text-green-400">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}