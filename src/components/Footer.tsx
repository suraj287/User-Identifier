import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 absolute bottom-0 w-full">
      <div className="container px-4 flex justify-between ">
        <p className="text-sm">© {new Date().getFullYear()} Hy-vee. All rights reserved.</p>
        <ul className="flex space-x-3">
          <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;