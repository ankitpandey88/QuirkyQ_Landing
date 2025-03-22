

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { FaArrowLeft } from 'react-icons/fa';
// import Footer from '../components/Footer';
// import Navbar from './Navbar';

// const Salon = () => {
//   const [location, setLocation] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [salons, setSalons] = useState([]);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);

//     axios
//       .get('https://quirky-backend.vercel.app/api/admin/vendors', {
//         headers: { 'Content-Type': 'application/json' },
//       })
//       .then((response) => {
//         const filteredSalons = response.data
//           .filter((vendor) => vendor.service_type === 'Salon' && vendor.status === 'approved')
//           .map((salon) => ({
//             id: salon.id,
//             name: salon.enterprise_name,
//             image: salon.exterior_image,
//             rating: 4.5,
//             contact: salon.contact_number,
//             address: salon.full_address,
//             email: salon.email,
//             description: salon.personal_intro,
//           }));
//         setSalons(filteredSalons);
//       })
//       .catch((error) => console.error('Error fetching salons:', error))
//       .finally(() => setLoading(false));

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const filteredSalons = salons.filter((salon) =>
//     salon.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
//       <header
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//           isScrolled ? 'bg-gray-900 shadow-2xl' : 'bg-transparent'
//         }`}
//       >
//         <Navbar />
//       </header>

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
//         <div className="flex justify-between items-center mb-8 animate-fade-in">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
//             Find Your <span className="text-purple-400">Perfect Salon</span>
//           </h1>
//           <button
//             onClick={() => navigate('/dashboard')}
//             className="flex items-center bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
//           >
//             <FaArrowLeft className="mr-2" /> Back
//           </button>
//         </div>

//         <div className="flex gap-6 mb-10 animate-slide-up">
//           <input
//             type="text"
//             placeholder="Enter your location"
//             className="flex-1 p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Search salons..."
//             className="flex-1 p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>

//         {loading ? (
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-400 mx-auto"></div>
//             <p className="text-lg text-gray-300 mt-4">Loading salons...</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {filteredSalons.length > 0 ? (
//               filteredSalons.map((salon) => (
//                 <div
//                   key={salon.id}
//                   className="bg-gradient-to-br from-gray-700 to-indigo-700 p-5 rounded-3xl shadow-lg hover:shadow-xl hover:bg-gray-600 transition-all duration-300 cursor-pointer transform hover:scale-105"
//                   onClick={() => navigate(`/salon/${salon.id}`)}
//                 >
//                   <img
//                     src={salon.image}
//                     alt={salon.name}
//                     className="w-full h-48 object-cover rounded-2xl mb-4 transform hover:scale-110 transition-transform duration-500"
//                   />
//                   <h3 className="text-xl font-semibold text-white mb-2">{salon.name}</h3>
//                   <p className="text-sm text-gray-300">Rating: {salon.rating} ★</p>
//                   <p className="text-sm text-gray-300">📞 {salon.contact}</p>
//                   <p className="text-sm text-gray-300">📍 {salon.address}</p>
//                   <p className="text-sm text-gray-200 mt-3 line-clamp-2">{salon.description}</p>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center text-lg text-gray-300 col-span-full animate-fade-in">
//                 No approved salons found.
//               </p>
//             )}
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Salon;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from './Navbar';

const Salon = () => {
  const [location, setLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [salons, setSalons] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    axios
      .get('https://quirky-backend.vercel.app/api/admin/vendors', {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        const filteredSalons = response.data
          .filter((vendor) => vendor.service_type === 'Salon' && vendor.status === 'approved')
          .map((salon) => ({
            id: salon.id,
            name: salon.enterprise_name,
            image: salon.exterior_image,
            rating: 4.5,
            contact: salon.contact_number,
            address: salon.full_address,
            email: salon.email,
            description: salon.personal_intro,
          }));
        setSalons(filteredSalons);
      })
      .catch((error) => console.error('Error fetching salons:', error))
      .finally(() => setLoading(false));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredSalons = salons.filter((salon) =>
    salon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-gray-900 shadow-2xl' : 'bg-transparent'
        }`}
      >
        <Navbar />
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Discover <span className="text-purple-400">Top Salons</span>
          </h1>
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
        </div>

        {/* Search Inputs */}
        <div className="flex gap-6 mb-10 animate-slide-up">
          <input
            type="text"
            placeholder="Enter your location"
            className="flex-1 p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search salons..."
            className="flex-1 p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Carousel Section */}
        {loading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-400 mx-auto"></div>
            <p className="text-lg text-gray-300 mt-4">Loading salons...</p>
          </div>
        ) : (
          <div className="relative">
            {filteredSalons.length > 0 ? (
              <div
                className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory scrollbar-hide border-none bg-transparent"
              >
                {filteredSalons.map((salon) => (
                  <div
                    key={salon.id}
                    className="min-w-[300px] bg-gradient-to-br from-gray-700 to-indigo-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 snap-center cursor-pointer group border-none"
                    onClick={() => navigate(`/salon/${salon.id}`)}
                  >
                    {/* Image with Overlay Effect */}
                    <div className="relative">
                      <img
                        src={salon.image}
                        alt={salon.name}
                        className="w-full h-40 object-cover rounded-t-2xl transition-opacity duration-300 group-hover:opacity-80"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <p className="text-white font-semibold">View Details</p>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-1">{salon.name}</h3>
                      <p className="text-sm text-gray-300 flex items-center">
                        <span className="text-purple-400 mr-1">★</span> {salon.rating}
                      </p>
                      <p className="text-sm text-gray-300 truncate">📍 {salon.address}</p>
                      <p className="text-sm text-gray-200 mt-2 line-clamp-1">{salon.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-lg text-gray-300 animate-fade-in">
                No approved salons found.
              </p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Salon;