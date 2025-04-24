"use client"

import React, { useRef, useEffect, useState } from "react"
import { Globe, Users, TrendingUp, Award } from "lucide-react"
import {cn} from "../lib/utils"

function StatCard({ icon, value, label, delay }) {
  const [counted, setCounted] = useState("0")
  const statRef = useRef(null)
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

    if (statRef.current) {
      observer.observe(statRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const target = parseInt(value.replace(/\D/g, ""))
    let start = 0
    const duration = 2000
    const startTime = Date.now()

    const updateCount = () => {
      const currentTime = Date.now()
      const elapsedTime = currentTime - startTime
      
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        start = Math.floor(easeOutQuart * target)
        
        // Format with commas
        setCounted(start.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
        requestAnimationFrame(updateCount)
      } else {
        setCounted(value)
      }
    }

    const timer = setTimeout(() => {
      requestAnimationFrame(updateCount)
    }, delay)

    return () => clearTimeout(timer)
  }, [isVisible, value, delay])

  return (
    <div 
      ref={statRef}
      className={cn(
        "flex flex-col items-center rounded-lg p-6 text-center transition-all duration-700",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-4 rounded-full bg-green-100 p-4 text-green-700 dark:bg-green-900/30 dark:text-green-400">
        {icon}
      </div>
      <div className="text-4xl font-bold text-slate-800 dark:text-slate-200">{counted}</div>
      <p className="mt-2 text-muted-foreground">{label}</p>
    </div>
  )
}

export function StatsSection() {
  const stats = [
    {
      icon: <Globe className="h-8 w-8" />,
      value: "45+",
      label: "Countries Served",
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "2,500+",
      label: "Global Clients",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: "1,000+",
      label: "Products",
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: "18",
      label: "Years of Excellence",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  )
}