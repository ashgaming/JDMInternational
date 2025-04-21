"use client"

import React, { useRef, useEffect, useState } from "react"
import { GlobeLock, PackageCheck, FileCheck2, Truck as TruckFront, BarChart3, BadgeCheck } from "lucide-react"


function ServiceCard({ title, description, icon, delay }) {
  const cardRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div 
      ref={cardRef}
      className={`group rounded-lg bg-white p-6 shadow-md transition-all duration-700 hover:shadow-lg dark:bg-card ${
        isVisible 
          ? "translate-y-0 opacity-100" 
          : "translate-y-16 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-4 rounded-full bg-green-100 p-3 text-green-700 transition-transform duration-300 group-hover:scale-110 dark:bg-green-900/30 dark:text-green-400">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

export function ServicesSection() {
  const services = [
    {
      title: "Global Market Access",
      description: "Connect with buyers worldwide through our established network and market intelligence.",
      icon: <GlobeLock className="h-8 w-8" />,
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control ensures your products meet international standards and regulations.",
      icon: <BadgeCheck className="h-8 w-8" />,
    },
    {
      title: "Export Documentation",
      description: "Complete management of complex paperwork and compliance requirements for smooth exports.",
      icon: <FileCheck2 className="h-8 w-8" />,
    },
    {
      title: "Logistics Solutions",
      description: "End-to-end transportation and warehouse solutions optimized for agricultural products.",
      icon: <TruckFront className="h-8 w-8" />,
    },
    {
      title: "Packaging Services",
      description: "Custom packaging solutions that preserve quality and comply with destination requirements.",
      icon: <PackageCheck className="h-8 w-8" />,
    },
    {
      title: "Market Analysis",
      description: "Data-driven insights on market trends, pricing strategies, and growth opportunities.",
      icon: <BarChart3 className="h-8 w-8" />,
    },
  ]

  return (
    <section className="bg-slate-50 py-20 dark:bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Export Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive export solutions tailored to agricultural producers, ensuring seamless access to global markets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}