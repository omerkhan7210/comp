import React from 'react'


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      {/* Top border */}
      <div className="border-t border-gray-500"></div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {/* Left-aligned Logo */}
        <div className="flex flex-col items-start">
          <img
            src="/assets/img/logo.png"
            alt="Logo"
            className="h-12 mb-4"
          />
        
        </div>

        {/* Pages Column */}
        <div>
          <h3 className="font-bold text-lg mb-4">Pages</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Policies Column */}
        <div>
          <h3 className="font-bold text-lg mb-4">Policies</h3>
          <ul className="space-y-2">
            <li>
              <a href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/refund" className="hover:text-white transition">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="/cookies" className="hover:text-white transition">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons Column */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer
