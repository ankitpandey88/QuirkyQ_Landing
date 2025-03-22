// import React from 'react';
// import { FaEnvelope, FaPhoneAlt, FaHeart } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-white shadow-lg py-4 mt-6">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
//         <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10">
//           <div className="flex items-center space-x-3">
//             <FaEnvelope className="text-2xl text-purple-600" />
//             <p className="text-lg text-gray-700">support@quirkyq.com</p>
//           </div>
//           <div className="flex items-center space-x-3">
//             <FaPhoneAlt className="text-2xl text-purple-600" />
//             <p className="text-lg text-gray-700">+123 456 7890</p>
//           </div>
//         </div>
//         <div className="mt-6 border-t border-gray-300 pt-4">
//           <p className="text-sm flex justify-center items-center space-x-1 text-gray-700">
//             <span>&copy; {new Date().getFullYear()} QuirkyQ. Made with</span>
//             <FaHeart className="text-red-500" />
//             <span>by QuirkyQ Team.</span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaHeart, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-12 mt-8 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold tracking-tight animate-pulse">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                QuirkyQ
              </span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering your wellness journey with seamless bookings and top-notch services.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="flex items-center space-x-3 group">
              <FaEnvelope className="text-2xl text-purple-400 transform group-hover:scale-110 transition-transform duration-300" />
              <p className="text-lg text-gray-200 group-hover:text-purple-300 transition-colors duration-300">
                support@quirkyq.com
              </p>
            </div>
            <div className="flex items-center space-x-3 group">
              <FaPhoneAlt className="text-2xl text-purple-400 transform group-hover:scale-110 transition-transform duration-300" />
              <p className="text-lg text-gray-200 group-hover:text-purple-300 transition-colors duration-300">
                +123 456 7890
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <p className="text-lg font-semibold text-gray-200">Follow Us</p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-110"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6">
          <p className="text-sm flex justify-center items-center space-x-2 text-gray-400 animate-fade-in">
            <span>© {new Date().getFullYear()} QuirkyQ. Made with</span>
            <FaHeart className="text-red-500 animate-bounce" />
            <span>by the QuirkyQ Team.</span>
          </p>
        </div>
      </div>

      {/* Optional Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-75"></div>
    </footer>
  );
};

export default Footer;
