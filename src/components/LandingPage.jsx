


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
// import SalonOnboarding from './Index';
// import ContactUs from './Contact';
// import Testimonials from './Testimonil';

// const LandingPage = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const categories = [
//     {
//       image: 'https://img.freepik.com/free-photo/two-hairstylers-posing-standing-modern-spacy-beaty-salon_651396-986.jpg?t=st=1740920562~exp=1740924162~hmac=26bfde35eba4051de8539319f724346ba5db833a9b7026a10351ec4c9db174b8&w=1800',
//       title: 'Salon',
//       description: 'Book your next haircut, styling, or beauty treatment at top-rated salons near you.',
//       link: '/salon',
//       service_type: 'Salon',
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1576765607924-3f7b8410a787?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//       title: 'Doctor',
//       description: 'Schedule consultations or check-ups with experienced doctors in just a few clicks.',
//       link: '/doctor',
//       service_type: 'Doctor',
//     },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white">
//       {/* Header */}
//       <header
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//           isScrolled ? 'bg-gray-900 shadow-2xl' : 'bg-transparent'
//         }`}
//       >
//         <Header />
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow pt-32 px-6 sm:px-10 lg:px-20">
//         {/* Hero Section */}
//         <div className="text-center mb-24 relative">
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl rounded-full -z-10"></div>
//           <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold mb-8 animate-slide-up">
//             Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">QuirkyQ</span>
//           </h1>
//           <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in">
//             Your one-stop solution for Salon and Doctor bookings
//           </p>
//           <Link
//             to="/signup"
//             className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-12 py-5 rounded-full font-semibold text-xl hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce-slow"
//           >
//             Explore Now
//           </Link>
//         </div>

//         {/* Categories Section */}
//         <div className="mb-24">
//           <h2 className="text-5xl font-bold text-center mb-16">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {categories.map((category, index) => (
//               <Link
//                 to={category.link}
//                 key={index}
//                 className="relative group rounded-3xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500"
//               >
//                 <img
//                   src={category.image}
//                   alt={category.title}
//                   className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
//                 <div className="absolute bottom-0 left-0 p-8 w-full text-center">
//                   <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
//                     {category.title}
//                   </h3>
//                   <p className="text-lg text-gray-200">{category.description}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </main>

      
//       <SalonOnboarding />
//       <Testimonials/>
//       <ContactUs/>
//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SalonOnboarding from './Index';
import ContactUs from './Contact';
import Testimonials from './Testimonil';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      image: 'https://img.freepik.com/free-photo/two-hairstylers-posing-standing-modern-spacy-beaty-salon_651396-986.jpg?t=st=1740920562~exp=1740924162~hmac=26bfde35eba4051de8539319f724346ba5db833a9b7026a10351ec4c9db174b8&w=1800',
      title: 'Salon',
      description: 'Book your next haircut, styling, or beauty treatment at top-rated salons near you.',
      link: '/salon',
      service_type: 'Salon',
    },
    {
      image: 'https://images.unsplash.com/photo-1576765607924-3f7b8410a787?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      title: 'Doctor',
      description: 'Schedule consultations or check-ups with experienced doctors in just a few clicks.',
      link: '/doctor',
      service_type: 'Doctor',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-gray-900 shadow-2xl' : 'bg-transparent'
        }`}
      >
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-32 px-6 sm:px-10 lg:px-20">
        {/* Hero Section */}
        <div className="text-center mb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl rounded-full -z-10"></div>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold mb-8 animate-slide-up">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">QuirkyQ</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in">
            Your one-stop solution for Salon and Doctor bookings
          </p>
          <Link
            to="/signup"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-12 py-5 rounded-full font-semibold text-xl hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce-slow"
          >
            Explore Now
          </Link>
        </div>

        {/* Categories Section */}
        <div className="mb-24">
          <h2 className="text-5xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {categories.map((category, index) => (
              <Link
                to={category.link}
                key={index}
                className="relative group rounded-3xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full text-center">
                  <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-lg text-gray-200">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <SalonOnboarding />
      <Testimonials/>
      <ContactUs/>
      <Footer />
    </div>
  );
};

export default LandingPage;
