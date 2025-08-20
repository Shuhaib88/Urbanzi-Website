export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 sm:py-14 lg:py-16 px-4 mt-16 sm:mt-18 lg:mt-20 footer_bg">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mb-8 sm:mb-10 lg:mb-12">
          
          {/* Company Info */}
          <div className="sm:col-span-1">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 leading-tight">
              URBANZI<br />SOLUTIONS
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Clarity gives you the blocks and components you need to create a truly professional website.
            </p>
          </div>

          {/* Company Links */}
          <div className="sm:col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-300 mb-3 sm:mb-4 uppercase tracking-wider">
              COMPANY
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="/home" className="text-gray-400 hover:text-white text-sm transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Our Clients</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Product</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="sm:col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-300 mb-3 sm:mb-4 uppercase tracking-wider">
              SERVICES
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="/webdevelopment" className="text-gray-400 hover:text-white text-sm transition-colors">Web development</a></li>
              <li><a href="/app_development" className="text-gray-400 hover:text-white text-sm transition-colors">Mobile app development</a></li>
              <li><a href="/software_development" className="text-gray-400 hover:text-white text-sm transition-colors">Software development</a></li>
              <li><a href="/seo" className="text-gray-400 hover:text-white text-sm transition-colors">SEO</a></li>
              <li><a href="/digital_marketing" className="text-gray-400 hover:text-white text-sm transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">ERP Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">CRM Development</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="sm:col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-300 mb-3 sm:mb-4 uppercase tracking-wider">
              HELP
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Customer Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Delivery Details</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter Section - Original Size Maintained */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-1">
            <h3 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">
              NEWSLETTER
            </h3>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © Copyright 2025, All Rights Reserved by
            </p>
            <p className="text-gray-400 text-sm">
              URBANZI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
