

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { AiFillStar } from 'react-icons/ai';
// import { HiLocationMarker } from 'react-icons/hi';
// import { BsCalendar } from 'react-icons/bs';1
// import { FaArrowLeft, FaPhoneAlt, FaStore } from 'react-icons/fa';
// import { toast, Toaster } from 'react-hot-toast';
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
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState(''); // 'online' or 'store'

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

//   const getMinDate = () => {
//     const today = new Date();
//     const dd = String(today.getDate()).padStart(2, '0');
//     const mm = String(today.getMonth() + 1).padStart(2, '0');
//     const yyyy = today.getFullYear();
//     return `${yyyy}-${mm}-${dd}`;
//   };

//   const validateForm = () => {
//     if (selectedServices.length === 0) {
//       toast.error('Please select at least one service');
//       return false;
//     }
//     if (!selectedDate) {
//       toast.error('Please select a date');
//       return false;
//     }
//     if (!selectedTime) {
//       toast.error('Please select a time slot');
//       return false;
//     }
//     if (!name.trim()) {
//       toast.error('Please enter your name');
//       return false;
//     }
//     if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
//       toast.error('Please enter a valid email');
//       return false;
//     }
//     return true;
//   };

//   const handleOnlinePayment = async () => {
//     if (!validateForm()) return;
//     setPaymentMethod('online');
//     await createBooking();
//   };

//   const handlePayAtStore = async () => {
//     if (!validateForm()) return;
//     setPaymentMethod('store');
//     await createBooking();
//   };

//   const createBooking = async () => {
//     const bookingData = {
//       name: name,
//       email: email,
//       salonId: id,
//       salonName: salon.enterprise_name,
//       services: selectedServices.map(service => ({
//         name: service.service_name,
//         price: service.service_price
//       })),
//       date: selectedDate,
//       time: selectedTime,
//       totalAmount: totalAmount,
//       paymentMethod: paymentMethod
//     };

//     try {
//       const response = await axios.post(
//         'https://quirky-backend.vercel.app/api/book',
//         bookingData,
//         { headers: { 'Content-Type': 'application/json' } }
//       );

//       if (response.data.message === "Booking confirmation email sent!") {
//         toast.success('Booking confirmed! Confirmation sent to your email.');
        
//         if (paymentMethod === 'online') {
//           // Proceed to online payment
//           handlePayment();
//         } else {
//           // For store payment, redirect after delay
//           setTimeout(() => {
//             navigate('/salon');
//           }, 2000);
//         }
//       } else {
//         toast.error(response.data.message || 'Booking failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Booking error:', error);
//       toast.error(error.response?.data?.message || 'Booking failed. Please try again.');
//     }
//   };

//   const handlePayment = async () => {
//     const totalAmount = selectedServices.reduce((sum, service) => sum + parseFloat(service.service_price), 0);

//     try {
//       const { data } = await axios.post('https://quirky-backend.vercel.app/api/payment/create-order', {
//         amount: totalAmount * 100,
//         currency: 'INR'
//       });

//       const options = {
//         key: 'rzp_live_CW3A67eVfhqgaj',
//         amount: data.amount,
//         currency: data.currency,
//         name: salon.enterprise_name,
//         description: 'Payment for salon services',
//         order_id: data.id,
//         prefill: {
//           name: name,
//           email: email,
//         },
//         handler: async (response) => {
//           const body = {
//             order_id: data.id,
//             payment_id: response.razorpay_payment_id,
//             signature: response.razorpay_signature
//           };

//           try {
//             const result = await axios.post('https://quirky-backend.vercel.app/api/payment/verify-payment', body);
//             if (result.data.success) {
//               toast.success('Payment Successful!');
//               setTimeout(() => {
//                 navigate('/payment-success');
//               }, 1500);
//             } else {
//               toast.error('Payment Verification Failed');
//             }
//           } catch (error) {
//             console.error('Verification error:', error);
//             toast.error('Payment verification failed');
//           }
//         },
//         theme: {
//           color: '#3399cc'
//         }
//       };

//       const razorpay = new window.Razorpay(options);
//       razorpay.on('payment.failed', (response) => {
//         toast.error(`Payment failed: ${response.error.description}`);
//       });
//       razorpay.open();
//     } catch (error) {
//       console.error('Payment error:', error);
//       toast.error('Payment initialization failed. Please try again.');
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
//       <Toaster position="top-right" reverseOrder={false} />
      
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
//             onClick={() => navigate(-1)}
//             className="absolute top-4 right-4 z-10 flex items-center bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg animate-fade-in"
//           >
//             <FaArrowLeft className="mr-2" /> Back
//           </button>

//           <img
//             src={salon.exterior_image || 'https://via.placeholder.com/800x400'}
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
//                 <div className="flex items-center">
//                   <FaPhoneAlt className="h-5 w-5 mr-1" />
//                   <span>{salon.contact_number}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-gray-800 p-6 rounded-3xl shadow-lg mb-10">
//           <h2 className="text-2xl font-bold text-white mb-4 animate-fade-in">About</h2>
//           <p className="text-gray-300">{salon.personal_intro || 'No description available'}</p>
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
//                     {service.service_description && (
//                       <p className="text-gray-300 mt-2 text-sm">{service.service_description}</p>
//                     )}
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-300">No services available at the moment.</p>
//               )}
//             </div>
//           </div>

//           <div className="lg:col-span-1">
//             <div className="bg-gray-800 p-6 rounded-3xl shadow-lg sticky top-28">
//               <h2 className="text-xl font-bold text-white mb-5 animate-fade-in">Book Appointment</h2>

//               <div className="mb-5">
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
//                   placeholder="Your full name"
//                 />
//               </div>

//               <div className="mb-5">
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
//                   placeholder="your@email.com"
//                 />
//               </div>

//               <div className="mb-5">
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Appointment Date</label>
//                 <div className="relative">
//                   <BsCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                   <input
//                     type="date"
//                     min={getMinDate()}
//                     className="w-full pl-10 pr-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
//                     value={selectedDate}
//                     onChange={(e) => setSelectedDate(e.target.value)}
//                   />
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Time Slot</label>
//                 <select
//                   className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
//                   value={selectedTime}
//                   onChange={(e) => setSelectedTime(e.target.value)}
//                 >
//                   <option value="">Select a time</option>
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
//                     <div className="pt-2 mt-2 border-t border-gray-600 flex justify-between font-semibold">
//                       <span>Total:</span>
//                       <span>₹{totalAmount.toFixed(2)}</span>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               <div className="flex flex-col space-y-4">
//                 <button
//                   onClick={handleOnlinePayment}
//                   className={`w-full py-3 px-4 rounded-full text-white font-medium transition-all duration-300 shadow-md ${
//                     selectedServices.length > 0 && selectedDate && selectedTime && name && email
//                       ? 'bg-purple-600 hover:bg-purple-700 hover:shadow-lg'
//                       : 'bg-gray-600 cursor-not-allowed'
//                   }`}
//                   disabled={selectedServices.length === 0 || !selectedDate || !selectedTime || !name || !email}
//                 >
//                   Pay Online (₹{totalAmount.toFixed(2)})
//                 </button>

//                 <button
//                   onClick={handlePayAtStore}
//                   className={`w-full py-3 px-4 rounded-full text-white font-medium transition-all duration-300 shadow-md flex items-center justify-center ${
//                     selectedServices.length > 0 && selectedDate && selectedTime && name && email
//                       ? 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
//                       : 'bg-gray-600 cursor-not-allowed'
//                   }`}
//                   disabled={selectedServices.length === 0 || !selectedDate || !selectedTime || !name || !email}
//                 >
//                   <FaStore className="mr-2" />
//                   Pay at Store (₹{totalAmount.toFixed(2)})
//                 </button>
//               </div>
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
import { FaArrowLeft, FaPhoneAlt, FaStore } from 'react-icons/fa';
import { toast, Toaster } from 'react-hot-toast';
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
  const [paymentMethod, setPaymentMethod] = useState(''); // 'online' or 'Cash'

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

  const getMinDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  const validateForm = () => {
    if (selectedServices.length === 0) {
      toast.error('Please select at least one service');
      return false;
    }
    if (!selectedDate) {
      toast.error('Please select a date');
      return false;
    }
    if (!selectedTime) {
      toast.error('Please select a time slot');
      return false;
    }
    if (!name.trim()) {
      toast.error('Please enter your name');
      return false;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email');
      return false;
    }
    return true;
  };

  const handleOnlinePayment = async () => {
    if (!validateForm()) return;
    setPaymentMethod('online');
    await createBooking();
  };

  const handlePayAtStore = async () => {
    if (!validateForm()) return;
    setPaymentMethod('Cash');
    await createBooking();
  };

  // const createBooking = async () => {
  //   const bookingData = {
  //     name: name,
  //     email: email,
  //     salonId: id,
  //     salonName: salon.enterprise_name,
  //     date: selectedDate,
  //     time: selectedTime,
  //     paymentMethod: paymentMethod,
  //     totalAmount: totalAmount,
  //     services: selectedServices.map(service => ({
  //       name: service.service_name,
  //       price: service.service_price
  //     }))
  //   };

  //   try {
  //     const response = await axios.post(
  //       'https://quirky-backend.vercel.app/api/bookings-details',
  //       bookingData,
  //       { headers: { 'Content-Type': 'application/json' } }
  //     );

  //     if (response.data.message === "Booking successful") {
  //       toast.success('Booking confirmed!');
        
  //       if (paymentMethod === 'online') {
  //         // Proceed to online payment
  //         handlePayment();
  //       } else {
  //         // For store payment, redirect after delay
  //         setTimeout(() => {
  //           navigate('/salon');
  //         }, 2000);
  //       }
  //     } else {
  //       toast.error(response.data.message || 'Booking failed. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Booking error:', error);
  //     toast.error(error.response?.data?.message || 'Booking failed. Please try again.');
  //   }
  // };

  const createBooking = async () => {
    const bookingData = {
      name: name,
      email: email,
      salonId: id,
      salonName: salon.enterprise_name,
      date: selectedDate,
      time: selectedTime,
      paymentMethod: paymentMethod,
      totalAmount: totalAmount,
      services: selectedServices.map(service => ({
        name: service.service_name,
        price: service.service_price
      }))
    };
  
    try {
      const response = await axios.post(
        'https://quirky-backend.vercel.app/api/bookings-details',
        bookingData,
        { headers: { 'Content-Type': 'application/json' } }
      );
  
      if (response.data.message === "Booking successful") {
        toast.success('Booking confirmed!');
        
        // Send booking confirmation email
        try {
          const emailData = {
            name: name,
            email: email
          };
          
          await axios.post(
            'https://quirky-backend.vercel.app/api/booking-email',
            emailData,
            { headers: { 'Content-Type': 'application/json' } }
          );
          
          console.log('Confirmation email sent successfully');
        } catch (emailError) {
          console.error('Failed to send confirmation email:', emailError);
          // Don't show error to user as booking was still successful
        }
  
        if (paymentMethod === 'online') {
          // Proceed to online payment
          handlePayment();
        } else {
          // For store payment, redirect after delay
          setTimeout(() => {
            navigate('/salon');
          }, 2000);
        }
      } else {
        toast.error(response.data.message || 'Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      toast.error(error.response?.data?.message || 'Booking failed. Please try again.');
    }
  };
  
  const handlePayment = async () => {
    const totalAmount = selectedServices.reduce((sum, service) => sum + parseFloat(service.service_price), 0);

    try {
      const { data } = await axios.post('https://quirky-backend.vercel.app/api/payment/create-order', {
        amount: totalAmount * 100,
        currency: 'INR'
      });

      const options = {
        key: 'rzp_live_CW3A67eVfhqgaj',
        amount: data.amount,
        currency: data.currency,
        name: salon.enterprise_name,
        description: 'Payment for salon services',
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

          try {
            const result = await axios.post('https://quirky-backend.vercel.app/api/payment/verify-payment', body);
            if (result.data.success) {
              toast.success('Payment Successful!');
              setTimeout(() => {
                navigate('/payment-success');
              }, 1500);
            } else {
              toast.error('Payment Verification Failed');
            }
          } catch (error) {
            console.error('Verification error:', error);
            toast.error('Payment verification failed');
          }
        },
        theme: {
          color: '#3399cc'
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.on('payment.failed', (response) => {
        toast.error(`Payment failed: ${response.error.description}`);
      });
      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Payment initialization failed. Please try again.');
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
      <Toaster position="top-right" reverseOrder={false} />
      
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
            onClick={() => navigate(-1)}
            className="absolute top-4 right-4 z-10 flex items-center bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg animate-fade-in"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>

          <img
            src={salon.exterior_image || 'https://via.placeholder.com/800x400'}
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
                <div className="flex items-center">
                  <FaPhoneAlt className="h-5 w-5 mr-1" />
                  <span>{salon.contact_number}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-3xl shadow-lg mb-10">
          <h2 className="text-2xl font-bold text-white mb-4 animate-fade-in">About</h2>
          <p className="text-gray-300">{salon.personal_intro || 'No description available'}</p>
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
                    {service.service_description && (
                      <p className="text-gray-300 mt-2 text-sm">{service.service_description}</p>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-300">No services available at the moment.</p>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-800 p-6 rounded-3xl shadow-lg sticky top-28">
              <h2 className="text-xl font-bold text-white mb-5 animate-fade-in">Book Appointment</h2>

              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-300 mb-2">Appointment Date</label>
                <div className="relative">
                  <BsCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    min={getMinDate()}
                    className="w-full pl-10 pr-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">Time Slot</label>
                <select
                  className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  <option value="">Select a time</option>
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
                    <div className="pt-2 mt-2 border-t border-gray-600 flex justify-between font-semibold">
                      <span>Total:</span>
                      <span>₹{totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col space-y-4">
                <button
                  onClick={handleOnlinePayment}
                  className={`w-full py-3 px-4 rounded-full text-white font-medium transition-all duration-300 shadow-md ${
                    selectedServices.length > 0 && selectedDate && selectedTime && name && email
                      ? 'bg-purple-600 hover:bg-purple-700 hover:shadow-lg'
                      : 'bg-gray-600 cursor-not-allowed'
                  }`}
                  disabled={selectedServices.length === 0 || !selectedDate || !selectedTime || !name || !email}
                >
                  Pay Online (₹{totalAmount.toFixed(2)})
                </button>

                <button
                  onClick={handlePayAtStore}
                  className={`w-full py-3 px-4 rounded-full text-white font-medium transition-all duration-300 shadow-md flex items-center justify-center ${
                    selectedServices.length > 0 && selectedDate && selectedTime && name && email
                      ? 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
                      : 'bg-gray-600 cursor-not-allowed'
                  }`}
                  disabled={selectedServices.length === 0 || !selectedDate || !selectedTime || !name || !email}
                >
                  <FaStore className="mr-2" />
                  Pay at Store (₹{totalAmount.toFixed(2)})
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SalonDetails;