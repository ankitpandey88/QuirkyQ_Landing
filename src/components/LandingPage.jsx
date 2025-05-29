


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
//             Welcome to{" "}
//             <span className="inline-block animate-pulse">
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
//                 QuirkyQ
//               </span>
//             </span>
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

//       <Testimonials />
//       <ContactUs />
//       <Footer />
//     </div>
//   );
// };

// export default LandingPage; 
// import React, { useEffect, useState } from 'react';
// import { Search } from 'lucide-react';

// import Header from './Header';
// import Footer from './Footer';
// import SalonOnboarding from './Index';
// import ContactUs from './Contact';
// import Testimonials from './Testimonil';

// const LandingPage = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [currentBgIndex, setCurrentBgIndex] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');

//   // Background images for rotation
//   const backgroundImages = [
//     'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Salon interior
//     'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Doctor consultation
//     'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'  // Medical equipment
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Rotate background images every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
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

//   const handleSearch = () => {
//     // Add your search logic here
//     console.log('Searching for:', searchQuery);
//   };

//   return (
//     <div className="min-h-screen flex flex-col text-white relative overflow-hidden">
//       {/* Dynamic Background with Overlay */}
//       <div className="absolute inset-0 -z-20">
//         {backgroundImages.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentBgIndex ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <img
//               src={image}
//               alt={`Background ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
//       </div>

//       {/* Header */}
//       <header
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//           isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
//         }`}
//       >
//         <Header />
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow pt-32 px-6 sm:px-10 lg:px-20 relative z-10">
//         {/* Hero Section with Search Bar */}
//         <div className="text-center mb-24 relative">
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl rounded-full -z-10"></div>
          
//           <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold mb-8 animate-pulse">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
//               QuirkyQ
//             </span>
//           </h1>
          
//           <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-12">
//             Your one-stop solution for Salon and Doctor bookings
//           </p>

//           {/* Search Bar */}
//           <div className="max-w-2xl mx-auto mb-10">
//             <div className="relative">
//               <div className="relative">
//                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
//                 <input
//                   type="text"
//                   placeholder="Search for salons, doctors, or services..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-14 pr-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
//                 />
//                 <button
//                   onClick={handleSearch}
//                   className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300"
//                 >
//                   Search
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div
//             onClick={() => window.location.href = '/signup'}
//             className="inline-block cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 text-white px-12 py-5 rounded-full font-semibold text-xl hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
//           >
//             Explore Now
//           </div>
//         </div>

//         {/* Categories Section */}
//         <div className="mb-24">
//           <h2 className="text-5xl font-bold text-center mb-16">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {categories.map((category, index) => (
//               <div
//                 onClick={() => window.location.href = category.link}
//                 key={index}
//                 className="relative group rounded-3xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm bg-white/5 border border-white/10 cursor-pointer"
//               >
//                 <img
//                   src={category.image}
//                   alt={category.title}
//                   className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
//                 <div className="absolute bottom-0 left-0 p-8 w-full text-center">
//                   <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
//                     {category.title}
//                   </h3>
//                   <p className="text-lg text-gray-200">{category.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>

//       <SalonOnboarding />
//       <Testimonials />
//       <ContactUs />
//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;



import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';

// Mock components - replace with your actual imports
import Header from './Header';
import Footer from './Footer';
import SalonOnboarding from './Index';
import ContactUs from './Contact';
import Testimonials from './Testimonil';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Background images for rotation
  const backgroundImages = [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Salon interior
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Doctor consultation
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'  // Medical equipment
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rotate background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
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

  const handleSearch = () => {
    // Add your search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen flex flex-col text-white relative overflow-hidden">
      {/* Dynamic Background with Overlay */}
      <div className="absolute inset-0 -z-20">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBgIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
        }`}
      >
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-32 px-6 sm:px-10 lg:px-20 relative z-10">
        {/* Hero Section with Search Bar */}
        <div className="text-center mb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl rounded-full -z-10"></div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold mb-8 animate-pulse">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              QuirkyQ
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-12">
            Your one-stop solution for Salon and Doctor bookings
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search for salons, doctors, or services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <div
            onClick={() => window.location.href = '/signup'}
            className="inline-block cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 text-white px-12 py-5 rounded-full font-semibold text-xl hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Explore Now
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-24">
          <h2 className="text-5xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {categories.map((category, index) => (
              <div
                onClick={() => window.location.href = category.link}
                key={index}
                className="relative group rounded-3xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm bg-white/5 border border-white/10 cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full text-center">
                  <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-lg text-gray-200">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Components with solid background to hide the rotating background */}
      <div className="relative z-10 bg-gray-900">
        <SalonOnboarding />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;