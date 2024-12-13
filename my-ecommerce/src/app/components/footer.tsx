import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-[#FFFF]'>
      <footer className="bg-base-200 text-base-content p-6 sm:p-10 ">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* First Column: Address */}
          <div className="text-center sm:text-left">
            <p className="text-gray-500">
              400 University Drive Suite 200<br />
              Coral Gables, 33134 USA
            </p>
            {/* <p className="mt-8 text-black">
              2022 Meubel House. All rights reserved.
            </p> */}
          </div>

          {/* Second Column: Navigation Links */}
          <div className="text-center sm:text-left">
            <h6 className="footer-title text-gray-500">Links</h6>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="link link-hover text-black ">
                Home
              </Link>
              <Link href="/shop" className="link link-hover text-black ">
                Shop
              </Link>
              <Link href="/about" className="link link-hover text-black">
                About
              </Link>
              <Link href="/contact" className="link link-hover text-black">
                Contact
              </Link>
            </nav>
          </div>

          {/* Third Column: Help Links */}
          <div className="text-center sm:text-left">
            <h6 className="footer-title text-gray-500">Help</h6>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="link link-hover text-black">
                Payment Options
              </Link>
              <Link href="/" className="link link-hover text-black">
                Returns
              </Link>
              <Link href="/" className="link link-hover text-black">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Fourth Column: Newsletter */}
          <div className="text-center sm:text-left">
            <h6 className="footer-title text-gray-500">Newsletter</h6>
            <form className="mt-4">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="input input-bordered w-full sm:w-auto flex-grow line-clamp-2"
                />
              <button type='button' className="btn btn-primary w-full sm:w-auto text-[#000] underline"
  style={{ textUnderlineOffset: "5px" }}>
  Subscribe
</button>

              </div>
            </form>
          </div>
        </div>
        <hr className='mt-7 border-gray-400' />
            <h2 className='ml-7 mb-5 mt-12 text-[#000]'>2022 Meubel House. All rights reverved</h2>
      </footer>
    </div>
  );
};

export default Footer;
