


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { AiFillStar } from 'react-icons/ai';
// import { HiLocationMarker } from 'react-icons/hi';
// import { BsCalendar } from 'react-icons/bs';
// import { FaArrowLeft, FaPhoneAlt } from 'react-icons/fa';
// import Footer from '../components/Footer';
// import Navbar from './Navbar';

// const SalonDetails = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [salon, setSalon] = useState(null);
//   const [services, setServices] = useState([]);
//   const [selectedService, setSelectedService] = useState(null);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);

//     axios
//       .get(`https://quirky-backend.vercel.app/api/vendors/${id}`)
//       .then((response) => {
//         const salonData = response.data;
//         setSalon(salonData);

//         if (salonData.email) {
//           const data = JSON.stringify({ email: salonData.email });
//           axios
//             .post('https://quirky-backend.vercel.app/api/getVendorServicesByEmail', data, {
//               headers: { 'Content-Type': 'application/json' },
//             })
//             .then((response) => {
//               setServices(response.data.services || []);
//             })
//             .catch((error) => console.error('Error fetching services:', error))
//             .finally(() => setLoading(false));
//         } else {
//           console.error('Email not found in salon data');
//           setLoading(false);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching salon:', error);
//         setLoading(false);
//       });

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [id]);

//   const handleBooking = () => {
//     if (selectedService && selectedDate && selectedTime) {
//       navigate('/payment');
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-400"></div>
//       </div>
//     );
//   }

//   if (!salon) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
//         <p className="text-center text-lg text-gray-300">Salon not found.</p>
//       </div>
//     );
//   }

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
//         {/* Salon Hero Section with Back Button on Right */}
//         <div className="relative h-80 rounded-3xl overflow-hidden mb-10">
//           <button
//             onClick={() => navigate('/salon')}
//             className="absolute top-4 right-4 z-10 flex items-center bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg animate-fade-in"
//           >
//             <FaArrowLeft className="mr-2" /> Back
//           </button>

//           <img
//             src={salon.exterior_image}
//             alt={salon.enterprise_name}
//             className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 flex items-end">
//             <div className="p-8">
//               <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 animate-slide-up">
//                 {salon.enterprise_name}
//               </h1>
//               <div className="flex items-center space-x-4 text-gray-200">
//                 <div className="flex items-center">
//                   <AiFillStar className="h-5 w-5 text-yellow-400 mr-1" />
//                   <span>4.5</span>
//                 </div>
//                 <div className="flex items-center">
//                   <HiLocationMarker className="h-5 w-5 mr-1" />
//                   <span className="line-clamp-1">{salon.full_address}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* About & Contact Section */}
//         <div className="bg-gray-800 p-6 rounded-3xl shadow-lg mb-10">
//           <h2 className="text-2xl font-bold text-white mb-4 animate-fade-in">About</h2>
//           <p className="text-gray-300">{salon.personal_intro}</p>
//           <h3 className="text-xl font-bold text-white mt-6">Contact</h3>
//           <p className="text-gray-300 flex items-center">
//             <FaPhoneAlt className="mr-2" /> {salon.contact_number}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//           {/* Services List */}
//           <div className="lg:col-span-2">
//             <h2 className="text-2xl font-bold text-white mb-6 animate-fade-in">Services</h2>
//             <div className="space-y-5">
//               {services.length > 0 ? (
//                 services.map((service) => (
//                   <div
//                     key={service.service_name}
//                     className={`p-5 rounded-3xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${
//                       selectedService?.service_name === service.service_name
//                         ? 'bg-gradient-to-br from-purple-600 to-purple-700 scale-105'
//                         : 'bg-gradient-to-br from-gray-700 to-indigo-700 hover:bg-gray-600'
//                     }`}
//                     onClick={() => setSelectedService(service)}
//                   >
//                     <div className="flex justify-between items-center">
//                       <h3 className="text-lg font-semibold text-white">{service.service_name}</h3>
//                       <div className="text-lg font-semibold text-gray-200">₹{service.service_price}</div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-300">No services available at the moment.</p>
//               )}
//             </div>
//           </div>

//           {/* Booking Section */}
//           <div className="lg:col-span-1">
//             <div className="bg-gray-800 p-6 rounded-3xl shadow-lg">
//               <h2 className="text-xl font-bold text-white mb-5 animate-fade-in">Book Appointment</h2>

//               {/* Date Selection */}
//               <div className="mb-5">
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Select Date</label>
//                 <div className="relative">
//                   <BsCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                   <input
//                     type="date"
//                     className="w-full pl-10 pr-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
//                     value={selectedDate}
//                     onChange={(e) => setSelectedDate(e.target.value)}
//                   />
//                 </div>
//               </div>

//               {/* Time Selection */}
//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Select Time</label>
//                 <select
//                   className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
//                   value={selectedTime}
//                   onChange={(e) => setSelectedTime(e.target.value)}
//                 >
//                   <option value="">Choose a time</option>
//                   <option value="09:00">9:00 AM</option>
//                   <option value="10:00">10:00 AM</option>
//                   <option value="11:00">11:00 AM</option>
//                   <option value="12:00">12:00 PM</option>
//                   <option value="13:00">1:00 PM</option>
//                   <option value="14:00">2:00 PM</option>
//                   <option value="15:00">3:00 PM</option>
//                   <option value="16:00">4:00 PM</option>
//                   <option value="17:00">5:00 PM</option>
//                 </select>
//               </div>

//               {/* Booking Summary */}
//               {selectedService && (
//                 <div className="mb-6 p-4 bg-gray-700 rounded-2xl">
//                   <h3 className="text-lg font-semibold text-white mb-3">Booking Summary</h3>
//                   <div className="space-y-2 text-sm text-gray-300">
//                     <div className="flex justify-between">
//                       <span>Service:</span>
//                       <span className="font-medium">{selectedService.service_name}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Duration:</span>
//                       <span className="font-medium">Not specified</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Price:</span>
//                       <span className="font-medium">₹{selectedService.service_price}</span>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               <button
//                 className={`w-full py-3 px-4 rounded-full text-white font-medium transition-all duration-300 shadow-md ${
//                   selectedService && selectedDate && selectedTime
//                     ? 'bg-purple-600 hover:bg-purple-700 hover:shadow-lg'
//                     : 'bg-gray-600 cursor-not-allowed'
//                 }`}
//                 onClick={handleBooking}
//                 disabled={!selectedService || !selectedDate || !selectedTime}
//               >
//                 Proceed to Payment
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default SalonDetails;

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { AiFillStar } from 'react-icons/ai';
// import { HiLocationMarker } from 'react-icons/hi';
// import { BsCalendar } from 'react-icons/bs';
// import { FaArrowLeft, FaPhoneAlt } from 'react-icons/fa';
// import Footer from '../components/Footer';
// import Navbar from './Navbar';

// const SalonDetails = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [salon, setSalon] = useState(null);
//   const [services, setServices] = useState([]);
//   const [selectedServices, setSelectedServices] = useState([]);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);

//     axios
//       .get(`https://quirky-backend.vercel.app/api/vendors/${id}`)
//       .then((response) => {
//         const salonData = response.data;
//         setSalon(salonData);

//         if (salonData.email) {
//           const data = JSON.stringify({ email: salonData.email });
//           axios
//             .post('https://quirky-backend.vercel.app/api/getVendorServicesByEmail', data, {
//               headers: { 'Content-Type': 'application/json' },
//             })
//             .then((response) => {
//               setServices(response.data.services || []);
//             })
//             .catch((error) => console.error('Error fetching services:', error))
//             .finally(() => setLoading(false));
//         } else {
//           console.error('Email not found in salon data');
//           setLoading(false);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching salon:', error);
//         setLoading(false);
//       });

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [id]);

//   const handleServiceSelection = (service) => {
//     setSelectedServices((prev) =>
//       prev.some((s) => s.service_name === service.service_name)
//         ? prev.filter((s) => s.service_name !== service.service_name)
//         : [...prev, service]
//     );
//   };

//   const handleBooking = () => {
//     if (selectedServices.length > 0 && selectedDate && selectedTime) {
//       navigate('/payment');
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-400"></div>
//       </div>
//     );
//   }

//   if (!salon) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
//         <p className="text-center text-lg text-gray-300">Salon not found.</p>
//       </div>
//     );
//   }

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
//         <div className="relative h-80 rounded-3xl overflow-hidden mb-10">
//           <button
//             onClick={() => navigate('/salon')}
//             className="absolute top-4 right-4 z-10 flex items-center bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg animate-fade-in"
//           >
//             <FaArrowLeft className="mr-2" /> Back
//           </button>

//           <img
//             src={salon.exterior_image}
//             alt={salon.enterprise_name}
//             className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 flex items-end">
//             <div className="p-8">
//               <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 animate-slide-up">
//                 {salon.enterprise_name}
//               </h1>
//               <div className="flex items-center space-x-4 text-gray-200">
//                 <div className="flex items-center">
//                   <AiFillStar className="h-5 w-5 text-yellow-400 mr-1" />
//                   <span>4.5</span>
//                 </div>
//                 <div className="flex items-center">
//                   <HiLocationMarker className="h-5 w-5 mr-1" />
//                   <span className="line-clamp-1">{salon.full_address}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-gray-800 p-6 rounded-3xl shadow-lg mb-10">
//           <h2 className="text-2xl font-bold text-white mb-4 animate-fade-in">About</h2>
//           <p className="text-gray-300">{salon.personal_intro}</p>
//           <h3 className="text-xl font-bold text-white mt-6">Contact</h3>
//           <p className="text-gray-300 flex items-center">
//             <FaPhoneAlt className="mr-2" /> {salon.contact_number}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//           <div className="lg:col-span-2">
//             <h2 className="text-2xl font-bold text-white mb-6 animate-fade-in">Services</h2>
//             <div className="space-y-5">
//               {services.length > 0 ? (
//                 services.map((service) => (
//                   <div
//                     key={service.service_name}
//                     className={`p-5 rounded-3xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${
//                       selectedServices.some((s) => s.service_name === service.service_name)
//                         ? 'bg-gradient-to-br from-purple-600 to-purple-700 scale-105'
//                         : 'bg-gradient-to-br from-gray-700 to-indigo-700 hover:bg-gray-600'
//                     }`}
//                     onClick={() => handleServiceSelection(service)}
//                   >
//                     <div className="flex justify-between items-center">
//                       <h3 className="text-lg font-semibold text-white">{service.service_name}</h3>
//                       <div className="text-lg font-semibold text-gray-200">₹{service.service_price}</div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-300">No services available at the moment.</p>
//               )}
//             </div>
//           </div>

//           <div className="lg:col-span-1">
//             <div className="bg-gray-800 p-6 rounded-3xl shadow-lg">
//               <h2 className="text-xl font-bold text-white mb-5 animate-fade-in">Book Appointment</h2>

//               <div className="mb-5">
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Select Date</label>
//                 <div className="relative">
//                   <BsCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                   <input
//                     type="date"
//                     className="w-full pl-10 pr-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
//                     value={selectedDate}
//                     onChange={(e) => setSelectedDate(e.target.value)}
//                   />
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Select Time</label>
//                 <select
//                   className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
//                   value={selectedTime}
//                   onChange={(e) => setSelectedTime(e.target.value)}
//                 >
//                   <option value="">Choose a time</option>
//                   <option value="09:00">9:00 AM</option>
//                   <option value="10:00">10:00 AM</option>
//                   <option value="11:00">11:00 AM</option>
//                   <option value="12:00">12:00 PM</option>
//                   <option value="13:00">1:00 PM</option>
//                   <option value="14:00">2:00 PM</option>
//                   <option value="15:00">3:00 PM</option>
//                   <option value="16:00">4:00 PM</option>
//                   <option value="17:00">5:00 PM</option>
//                 </select>
//               </div>

//               {selectedServices.length > 0 && (
//                 <div className="mb-6 p-4 bg-gray-700 rounded-2xl">
//                   <h3 className="text-lg font-semibold text-white mb-3">Booking Summary</h3>
//                   <div className="space-y-2 text-sm text-gray-300">
//                     {selectedServices.map((service) => (
//                       <div key={service.service_name} className="flex justify-between">
//                         <span>{service.service_name}</span>
//                         <span className="font-medium">₹{service.service_price}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               <button
//                 className={`w-full py-3 px-4 rounded-full text-white font-medium transition-all duration-300 shadow-md ${
//                   selectedServices.length > 0 && selectedDate && selectedTime
//                     ? 'bg-purple-600 hover:bg-purple-700 hover:shadow-lg'
//                     : 'bg-gray-600 cursor-not-allowed'
//                 }`}
//                 onClick={handleBooking}
//                 disabled={selectedServices.length === 0 || !selectedDate || !selectedTime}
//               >
//                 Proceed to Payment
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default SalonDetails;

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { AiFillStar } from 'react-icons/ai';
// import { HiLocationMarker } from 'react-icons/hi';
// import { BsCalendar } from 'react-icons/bs';
// import { FaArrowLeft, FaPhoneAlt } from 'react-icons/fa';
// import Footer from '../components/Footer';
// import Navbar from './Navbar';

// const SalonDetails = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [salon, setSalon] = useState(null);
//   const [services, setServices] = useState([]);
//   const [selectedServices, setSelectedServices] = useState([]);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);

//     axios
//       .get(`https://quirky-backend.vercel.app/api/vendors/${id}`)
//       .then((response) => {
//         const salonData = response.data;
//         setSalon(salonData);

//         if (salonData.email) {
//           const data = JSON.stringify({ email: salonData.email });
//           axios
//             .post('https://quirky-backend.vercel.app/api/getVendorServicesByEmail', data, {
//               headers: { 'Content-Type': 'application/json' },
//             })
//             .then((response) => {
//               setServices(response.data.services || []);
//             })
//             .catch((error) => console.error('Error fetching services:', error))
//             .finally(() => setLoading(false));
//         } else {
//           console.error('Email not found in salon data');
//           setLoading(false);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching salon:', error);
//         setLoading(false);
//       });

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [id]);

//   const handleServiceSelection = (service) => {
//     setSelectedServices((prev) =>
//       prev.some((s) => s.service_name === service.service_name)
//         ? prev.filter((s) => s.service_name !== service.service_name)
//         : [...prev, service]
//     );
//   };

//   const handleBooking = () => {
//     if (selectedServices.length > 0 && selectedDate && selectedTime) {
//       navigate('/payment');
//     }
//   };

//   const totalAmount = selectedServices.reduce((sum, service) => sum + parseFloat(service.service_price), 0);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-400"></div>
//       </div>
//     );
//   }

//   if (!salon) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
//         <p className="text-center text-lg text-gray-300">Salon not found.</p>
//       </div>
//     );
//   }

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
//         <div className="relative h-80 rounded-3xl overflow-hidden mb-10">
//           <button
//             onClick={() => navigate('/salon')}
//             className="absolute top-4 right-4 z-10 flex items-center bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg animate-fade-in"
//           >
//             <FaArrowLeft className="mr-2" /> Back
//           </button>

//           <img
//             src={salon.exterior_image}
//             alt={salon.enterprise_name}
//             className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 flex items-end">
//             <div className="p-8">
//               <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 animate-slide-up">
//                 {salon.enterprise_name}
//               </h1>
//               <div className="flex items-center space-x-4 text-gray-200">
//                 <div className="flex items-center">
//                   <AiFillStar className="h-5 w-5 text-yellow-400 mr-1" />
//                   <span>4.5</span>
//                 </div>
//                 <div className="flex items-center">
//                   <HiLocationMarker className="h-5 w-5 mr-1" />
//                   <span className="line-clamp-1">{salon.full_address}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-gray-800 p-6 rounded-3xl shadow-lg mb-10">
//           <h2 className="text-2xl font-bold text-white mb-4 animate-fade-in">About</h2>
//           <p className="text-gray-300">{salon.personal_intro}</p>
//           <h3 className="text-xl font-bold text-white mt-6">Contact</h3>
//           <p className="text-gray-300 flex items-center">
//             <FaPhoneAlt className="mr-2" /> {salon.contact_number}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//           <div className="lg:col-span-2">
//             <h2 className="text-2xl font-bold text-white mb-6 animate-fade-in">Services</h2>
//             <div className="space-y-5">
//               {services.length > 0 ? (
//                 services.map((service) => (
//                   <div
//                     key={service.service_name}
//                     className={`p-5 rounded-3xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${
//                       selectedServices.some((s) => s.service_name === service.service_name)
//                         ? 'bg-gradient-to-br from-purple-600 to-purple-700 scale-105'
//                         : 'bg-gradient-to-br from-gray-700 to-indigo-700 hover:bg-gray-600'
//                     }`}
//                     onClick={() => handleServiceSelection(service)}
//                   >
//                     <div className="flex justify-between items-center">
//                       <h3 className="text-lg font-semibold text-white">{service.service_name}</h3>
//                       <div className="text-lg font-semibold text-gray-200">₹{service.service_price}</div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-300">No services available at the moment.</p>
//               )}
//             </div>
//           </div>

//           <div className="lg:col-span-1">
//             <div className="bg-gray-800 p-6 rounded-3xl shadow-lg">
//               <h2 className="text-xl font-bold text-white mb-5 animate-fade-in">Book Appointment</h2>

//               <div className="mb-5">
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Select Date</label>
//                 <div className="relative">
//                   <BsCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                   <input
//                     type="date"
//                     className="w-full pl-10 pr-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
//                     value={selectedDate}
//                     onChange={(e) => setSelectedDate(e.target.value)}
//                   />
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Select Time</label>
//                 <select
//                   className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
//                   value={selectedTime}
//                   onChange={(e) => setSelectedTime(e.target.value)}
//                 >
//                   <option value="">Choose a time</option>
//                   <option value="09:00">9:00 AM</option>
//                   <option value="10:00">10:00 AM</option>
//                   <option value="11:00">11:00 AM</option>
//                   <option value="12:00">12:00 PM</option>
//                   <option value="13:00">1:00 PM</option>
//                   <option value="14:00">2:00 PM</option>
//                   <option value="15:00">3:00 PM</option>
//                   <option value="16:00">4:00 PM</option>
//                   <option value="17:00">5:00 PM</option>
//                 </select>
//               </div>

//               {selectedServices.length > 0 && (
//                 <div className="mb-6 p-4 bg-gray-700 rounded-2xl">
//                   <h3 className="text-lg font-semibold text-white mb-3">Booking Summary</h3>
//                   <div className="space-y-2 text-sm text-gray-300">
//                     {selectedServices.map((service) => (
//                       <div key={service.service_name} className="flex justify-between">
//                         <span>{service.service_name}</span>
//                         <span className="font-medium">₹{service.service_price}</span>
//                       </div>
//                     ))}
//                     <div className="flex justify-between font-semibold">
//                       <span>Total:</span>
//                       <span>₹{totalAmount.toFixed(2)}</span>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               <button
//                 className={`w-full py-3 px-4 rounded-full text-white font-medium transition-all duration-300 shadow-md ${
//                   selectedServices.length > 0 && selectedDate && selectedTime
//                     ? 'bg-purple-600 hover:bg-purple-700 hover:shadow-lg'
//                     : 'bg-gray-600 cursor-not-allowed'
//                 }`}
//                 onClick={handleBooking}
//                 disabled={selectedServices.length === 0 || !selectedDate || !selectedTime}
//               >
//                 Proceed to Payment (₹{totalAmount.toFixed(2)})
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default SalonDetails;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiFillStar } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import { BsCalendar } from 'react-icons/bs';
import { FaArrowLeft, FaPhoneAlt } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from './Navbar';

const SalonDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [salon, setSalon] = useState(null);
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    axios
      .get(`https://quirky-backend.vercel.app/api/vendors/${id}`)
      .then((response) => {
        const salonData = response.data;
        setSalon(salonData);

        if (salonData.email) {
          const data = JSON.stringify({ email: salonData.email });
          axios
            .post('https://quirky-backend.vercel.app/api/getVendorServicesByEmail', data, {
              headers: { 'Content-Type': 'application/json' },
            })
            .then((response) => {
              setServices(response.data.services || []);
            })
            .catch((error) => console.error('Error fetching services:', error))
            .finally(() => setLoading(false));
        } else {
          console.error('Email not found in salon data');
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching salon:', error);
        setLoading(false);
      });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  const handleServiceSelection = (service) => {
    setSelectedServices((prev) =>
      prev.some((s) => s.service_name === service.service_name)
        ? prev.filter((s) => s.service_name !== service.service_name)
        : [...prev, service]
    );
  };

  const handleBooking = async () => {
    if (selectedServices.length === 0 || !selectedDate || !selectedTime || !name || !email) {
      alert('Please fill all fields and select at least one service.');
      return;
    }

    const totalAmount = selectedServices.reduce((sum, service) => sum + parseFloat(service.service_price), 0);

    try {
      // Step 1: Create an order
      const { data } = await axios.post('https://quirky-backend.vercel.app/api/payment/create-order', {
        amount: totalAmount * 1, // Amount in paise (1 INR = 100 paise)
        currency: 'INR'
      });

      const options = {
        key: 'rzp_live_CW3A67eVfhqgaj', // Razorpay Key ID
        amount: data.amount,
        currency: data.currency,
        name: 'My Shop',
        description: 'Test Payment',
        order_id: data.id,
        prefill: {
          name: name,
          email: email,
        },
        handler: async (response) => {
          const body = {
            order_id: data.id,
            payment_id: response.razorpay_payment_id,
            signature: response.razorpay_signature
          };

          // Step 2: Verify Payment
          const result = await axios.post('https://quirky-backend.vercel.app/api/payment/verify-payment', body);

          if (result.data.success) {
            alert('Payment Successful');
            navigate('/payment-success'); // Redirect to a success page
          } else {
            alert('Payment Verification Failed');
          }
        },
        theme: {
          color: '#3399cc'
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed');
    }
  };

  const totalAmount = selectedServices.reduce((sum, service) => sum + parseFloat(service.service_price), 0);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-400"></div>
      </div>
    );
  }

  if (!salon) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <p className="text-center text-lg text-gray-300">Salon not found.</p>
      </div>
    );
  }

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
        <div className="relative h-80 rounded-3xl overflow-hidden mb-10">
          <button
            onClick={() => navigate('/salon')}
            className="absolute top-4 right-4 z-10 flex items-center bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg animate-fade-in"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>

          <img
            src={salon.exterior_image}
            alt={salon.enterprise_name}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 flex items-end">
            <div className="p-8">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 animate-slide-up">
                {salon.enterprise_name}
              </h1>
              <div className="flex items-center space-x-4 text-gray-200">
                <div className="flex items-center">
                  <AiFillStar className="h-5 w-5 text-yellow-400 mr-1" />
                  <span>4.5</span>
                </div>
                <div className="flex items-center">
                  <HiLocationMarker className="h-5 w-5 mr-1" />
                  <span className="line-clamp-1">{salon.full_address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-3xl shadow-lg mb-10">
          <h2 className="text-2xl font-bold text-white mb-4 animate-fade-in">About</h2>
          <p className="text-gray-300">{salon.personal_intro}</p>
          <h3 className="text-xl font-bold text-white mt-6">Contact</h3>
          <p className="text-gray-300 flex items-center">
            <FaPhoneAlt className="mr-2" /> {salon.contact_number}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6 animate-fade-in">Services</h2>
            <div className="space-y-5">
              {services.length > 0 ? (
                services.map((service) => (
                  <div
                    key={service.service_name}
                    className={`p-5 rounded-3xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${
                      selectedServices.some((s) => s.service_name === service.service_name)
                        ? 'bg-gradient-to-br from-purple-600 to-purple-700 scale-105'
                        : 'bg-gradient-to-br from-gray-700 to-indigo-700 hover:bg-gray-600'
                    }`}
                    onClick={() => handleServiceSelection(service)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-white">{service.service_name}</h3>
                      <div className="text-lg font-semibold text-gray-200">₹{service.service_price}</div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-300">No services available at the moment.</p>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-800 p-6 rounded-3xl shadow-lg">
              <h2 className="text-xl font-bold text-white mb-5 animate-fade-in">Book Appointment</h2>

              {/* Name Input */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Input */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              {/* Date Selection Field */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-300 mb-2">Select Date</label>
                <div className="relative">
                  <BsCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">Select Time Slot</label>
                <select
                  className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  <option value="">Choose a time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </div>

              {selectedServices.length > 0 && (
                <div className="mb-6 p-4 bg-gray-700 rounded-2xl">
                  <h3 className="text-lg font-semibold text-white mb-3">Booking Summary</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    {selectedServices.map((service) => (
                      <div key={service.service_name} className="flex justify-between">
                        <span>{service.service_name}</span>
                        <span className="font-medium">₹{service.service_price}</span>
                      </div>
                    ))}
                    <div className="flex justify-between font-semibold">
                      <span>Total:</span>
                      <span>₹{totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}

              <button
                className={`w-full py-3 px-4 rounded-full text-white font-medium transition-all duration-300 shadow-md ${
                  selectedServices.length > 0 && selectedDate && selectedTime && name && email
                    ? 'bg-purple-600 hover:bg-purple-700 hover:shadow-lg'
                    : 'bg-gray-600 cursor-not-allowed'
                }`}
                onClick={handleBooking}
                disabled={selectedServices.length === 0 || !selectedDate || !selectedTime || !name || !email}
              >
                Proceed to Payment (₹{totalAmount.toFixed(2)})
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SalonDetails;