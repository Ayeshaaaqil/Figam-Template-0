'use client'
import Link from 'next/link';
import { Search, Heart, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  // State for toggling mobile navigation
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-[#FBEBB5] shadow-sm'>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-800">

        </Link>

        {/* Desktop Navigation (hidden on small screens) */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
          <Link href="/shop" className="text-gray-600 hover:text-gray-800">Shop</Link>
          <Link href="/" className="text-gray-600 hover:text-gray-800">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          {/* Profile Icon */}
          <Link href="/profile" className="text-gray-600 hover:text-gray-800">
            <User className="w-6 h-6" />
          </Link>

          {/* Search Icon */}
          <button
            aria-label="Search"
            className="text-gray-600 hover:text-gray-800"
          >
            <Search size={20} />
          </button>

          {/* Wishlist Icon */}
          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="text-gray-600 hover:text-gray-800"
          >
            <Heart size={20} />
          </Link>

          {/* Cart Icon */}
          <Link
            href="/cart"
            className="text-gray-600 hover:text-gray-800 relative"
          >
            <ShoppingCart className="w-6 h-6" />
          </Link>

          {/* Mobile Menu Button (visible on small screens) */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-800"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* Hamburger Icon */}
            <div className="w-6 h-6 flex flex-col justify-between space-y-1">
              <span className="block w-full h-0.5 bg-gray-800"></span>
              <span className="block w-full h-0.5 bg-gray-800"></span>
              <span className="block w-full h-0.5 bg-gray-800"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation (visible only when toggled) */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-50 shadow-md">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-800 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="text-gray-600 hover:text-gray-800 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-800 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-800 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};