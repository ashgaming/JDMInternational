import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">TrueValue Glabal</h3>
            <p className="mb-4 text-slate-300">
              Your trusted partner in goods export solutions, connecting manifaculure to global markets since 2025.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-400" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="text-white hover:text-green-400" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-white hover:text-green-400" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-white hover:text-green-400" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div> */}
          </div>
          
          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-green-400">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-green-400">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-green-400">Services</Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-green-400">Products</Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-green-400">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-green-400">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-xl font-bold">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products#grains" className="text-slate-300 hover:text-green-400">Grains & Cereals</Link>
              </li>
              <li>
                <Link href="/products#fruits" className="text-slate-300 hover:text-green-400">Fresh Fruits</Link>
              </li>
              <li>
                <Link href="/products#vegetables" className="text-slate-300 hover:text-green-400">Vegetables</Link>
              </li>
              <li>
                <Link href="/products#nuts" className="text-slate-300 hover:text-green-400">Nuts & Seeds</Link>
              </li>
              <li>
                <Link href="/products#spices" className="text-slate-300 hover:text-green-400">Spices & Herbs</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-green-400" />
                <span className="text-slate-300">Pune , India</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-green-400" />
                <span className="text-slate-300"> +91 xx xxxx xxxx </span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-green-400" />
                <a href="mailto:info@agroexport.com" className="text-slate-300 hover:text-green-400">
                  info@truevalueglobal.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} TrueValue_Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}