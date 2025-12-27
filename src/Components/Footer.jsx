import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#001229] text-gray-400 py-12 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <h2 className="text-white text-2xl font-bold mb-4">
              Smart<span className="text-[#a855f7]">Deals</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Your trusted marketplace for authentic local products. Discover
              the best deals from across Bangladesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">
              Categories
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Fashion
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home & Living
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Groceries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">
              Contact & Support
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-gray-500">📧</span>
                <span>support@Smartdeals.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gray-500">📞</span>
                <span>+880 123 456 789</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500">📍</span>
                <span>123 Commerce Street, Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">
              Social Links
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <span className="text-xs font-bold">𝕏</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <span className="text-xs font-bold">in</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <span className="text-xs font-bold">f</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© 2025 SmartDeals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
