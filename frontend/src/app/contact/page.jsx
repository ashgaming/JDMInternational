"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Check
} from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: ""
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 text-white md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Contact Us</h1>
            <p className="text-lg text-slate-300 md:text-xl">
              Get in touch with our export specialists to discuss your agricultural export needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="order-2 lg:order-1">
                <h2 className="mb-6 text-2xl font-bold md:text-3xl">Get In Touch</h2>
                
                <div className="mb-8 space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-green-100 p-3 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Our Headquarters</h3>
                      <address className="not-italic text-muted-foreground">
                        123 Export Avenue<br />
                        Farmington, CA 94538<br />
                        United States
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-green-100 p-3 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Email Us</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:info@agroexport.com" className="hover:text-green-600 dark:hover:text-green-400">
                          info@agroexport.com
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="mailto:sales@agroexport.com" className="hover:text-green-600 dark:hover:text-green-400">
                          sales@agroexport.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-green-100 p-3 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Call Us</h3>
                      <p className="text-muted-foreground">
                        Main: <a href="tel:+15551234567" className="hover:text-green-600 dark:hover:text-green-400">+1 (555) 123-4567</a>
                      </p>
                      <p className="text-muted-foreground">
                        Sales: <a href="tel:+15551234568" className="hover:text-green-600 dark:hover:text-green-400">+1 (555) 123-4568</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-green-100 p-3 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM PST</p>
                      <p className="text-muted-foreground">Saturday: 9:00 AM - 1:00 PM PST</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg bg-slate-100 p-6 dark:bg-slate-800/50">
                  <h3 className="mb-3 font-semibold">International Offices</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    We have regional representatives in Europe, Asia, and South America.
                    Contact our headquarters for international inquiries.
                  </p>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="order-1 rounded-lg bg-white p-6 shadow-md dark:bg-card md:p-8 lg:order-2">
                <h2 className="mb-6 text-2xl font-bold md:text-3xl">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center rounded-lg bg-green-50 p-8 text-center dark:bg-green-900/20">
                    <div className="mb-4 rounded-full bg-green-100 p-3 text-green-700 dark:bg-green-900/50 dark:text-green-400">
                      <Check className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting AgroExport. One of our export specialists will be in touch with you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium">
                          Full Name*
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">
                          Email Address*
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label htmlFor="company" className="mb-2 block text-sm font-medium">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium">
                        Message*
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Please describe your export needs or questions..."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="accent" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50766.63468745423!2d-121.99246145!3d37.5482697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc0d8ff70124b%3A0xa531d3a7753504d8!2sFremont%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1653661615011!5m2!1sen!2sca"
              height="450"
              style={{ border: 0, width: "100%" }}
              allowFullScreen={false}
              loading="lazy"
              title="AgroExport Headquarters Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}