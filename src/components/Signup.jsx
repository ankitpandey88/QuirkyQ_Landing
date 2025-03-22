



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaUser, FaLock, FaEnvelope, FaCity, FaPhone } from 'react-icons/fa';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [city, setCity] = useState('');
//   const [loading, setLoading] = useState(false); // Loader state
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Show loader

//     const userData = {
//       name,
//       mobile_number: mobileNumber,
//       email,
//       city,
//       password,
//     };

//     try {
//       const response = await axios.post('https://quirky-backend.vercel.app/api/users/signup', userData, {
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (response.data.message === "User registered successfully") {
//         toast.success('Signup successful! Redirecting to login...');
//         setTimeout(() => {
//           setLoading(false); // Hide loader
//           navigate('/login');
//         }, 2000);
//       }
//     } catch (error) {
//       setLoading(false); // Hide loader
//       if (error.response && error.response.data.message === "User already exists") {
//         toast.error('User already exists! Try logging in.');
//       } else {
//         toast.error('Signup failed. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-50 to-purple-100 px-4">
//       <div className="w-full max-w-xl bg-white p-10 rounded-xl shadow-xl">
//         <Link to="/quirkyQ">
//           <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">Sign Up for QuirkyQ</h2>
//         </Link>
//         <form onSubmit={handleSignup}>
//           <div className="grid grid-cols-1 w-[32rem] md:grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">Full Name</label>
//               <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
//                 <span className="px-3 text-gray-500"><FaUser /></span>
//                 <input 
//                   type="text" 
//                   className="w-full p-3 focus:outline-none" 
//                   placeholder="Enter your full name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">Email</label>
//               <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
//                 <span className="px-3 text-gray-500"><FaEnvelope /></span>
//                 <input 
//                   type="email" 
//                   className="w-full p-3 focus:outline-none" 
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">Mobile Number</label>
//               <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
//                 <span className="px-3 text-gray-500"><FaPhone /></span>
//                 <input 
//                   type="tel" 
//                   className="w-full p-3 focus:outline-none" 
//                   placeholder="Enter your mobile number"
//                   value={mobileNumber}
//                   onChange={(e) => setMobileNumber(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">City</label>
//               <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
//                 <span className="px-3 text-gray-500"><FaCity /></span>
//                 <input 
//                   type="text" 
//                   className="w-full p-3 focus:outline-none" 
//                   placeholder="Enter your city"
//                   value={city}
//                   onChange={(e) => setCity(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 font-medium mb-2">Password</label>
//             <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
//               <span className="px-3 text-gray-500"><FaLock /></span>
//               <input 
//                 type="password" 
//                 className="w-full p-3 focus:outline-none" 
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//           </div>
//           <button 
//             type="submit" 
//             className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition duration-300 flex items-center justify-center"
//             disabled={loading}
//           >
//             {loading ? (
//               <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8H4z"></path>
//               </svg>
//             ) : "Sign Up"}
//           </button>
//         </form>
//         <p className="text-center text-gray-600 mt-4">
//           Already have an account? <Link to="/login" className="text-purple-600 hover:underline">Login</Link>
//         </p>
//       </div>
//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaCity, FaPhone } from 'react-icons/fa';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Validation functions
  const handleNameChange = (e) => {
    const value = e.target.value;
    // Allow only letters and spaces
    if (/^[A-Za-z\s]*$/.test(value)) {
      setName(value);
    }
  };

  const handleMobileChange = (e) => {
    const value = e.target.value.replace('+91', ''); // Remove +91 for validation
    // Allow only digits, max 10
    if (/^\d{0,10}$/.test(value)) {
      setMobileNumber(value);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    // Prevent spaces
    if (!/\s/.test(value)) {
      setPassword(value);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Additional validation before submission
    if (!name) {
      toast.error('Please enter your name', { position: "top-right" });
      setLoading(false);
      return;
    }
    if (!email) {
      toast.error('Please enter your email', { position: "top-right" });
      setLoading(false);
      return;
    }
    if (mobileNumber.length !== 10) {
      toast.error('Mobile number must be exactly 10 digits', { position: "top-right" });
      setLoading(false);
      return;
    }
    if (!city) {
      toast.error('Please enter your city', { position: "top-right" });
      setLoading(false);
      return;
    }
    if (!password) {
      toast.error('Please enter your password', { position: "top-right" });
      setLoading(false);
      return;
    }

    const userData = {
      name,
      mobile_number: `+91${mobileNumber}`,
      email,
      city,
      password,
    };

    try {
      const response = await axios.post('https://quirky-backend.vercel.app/api/users/signup', userData, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.data.message === "User registered successfully") {
        toast.success('Signup successful! Redirecting to login...', { position: "top-right" });
        setTimeout(() => {
          setLoading(false);
          navigate('/login');
        }, 2000);
      }
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.data.message === "User already exists") {
        toast.error('User already exists! Try logging in.', { position: "top-right" });
      } else {
        toast.error('Signup failed. Please try again.', { position: "top-right" });
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 px-4">
      <div className="w-full max-w-xl bg-gray-800 p-10 rounded-2xl shadow-2xl transform transition-all duration-500 hover:shadow-purple-500/50 animate-fade-in">
        <Link to="/quirkyQ">
          <h2 className="text-4xl font-extrabold text-center text-white mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Sign Up for QuirkyQ
            </span>
          </h2>
        </Link>
        <form onSubmit={handleSignup} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="relative group">
              <label className="block text-gray-300 font-medium mb-2 transition-all duration-300 group-focus-within:text-purple-400">
                Full Name
              </label>
              <div className="flex items-center border border-gray-600 rounded-full overflow-hidden bg-gray-700 group-focus-within:border-purple-500 transition-all duration-300">
                <span className="px-4 text-gray-400 group-focus-within:text-purple-400">
                  <FaUser />
                </span>
                <input
                  type="text"
                  className="w-full p-3 bg-transparent text-gray-200 focus:outline-none placeholder-gray-500"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative group">
              <label className="block text-gray-300 font-medium mb-2 transition-all duration-300 group-focus-within:text-purple-400">
                Email
              </label>
              <div className="flex items-center border border-gray-600 rounded-full overflow-hidden bg-gray-700 group-focus-within:border-purple-500 transition-all duration-300">
                <span className="px-4 text-gray-400 group-focus-within:text-purple-400">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  className="w-full p-3 bg-transparent text-gray-200 focus:outline-none placeholder-gray-500"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Mobile Number */}
            <div className="relative group">
              <label className="block text-gray-300 font-medium mb-2 transition-all duration-300 group-focus-within:text-purple-400">
                Mobile Number
              </label>
              <div className="flex items-center border border-gray-600 rounded-full overflow-hidden bg-gray-700 group-focus-within:border-purple-500 transition-all duration-300">
                <span className="px-4 text-gray-400 group-focus-within:text-purple-400">
                  <FaPhone />
                </span>
                <span className="px-2 text-gray-200 bg-gray-600">+91</span>
                <input
                  type="tel"
                  className="w-full p-3 bg-transparent text-gray-200 focus:outline-none placeholder-gray-500"
                  placeholder="Enter 10-digit number"
                  value={mobileNumber}
                  onChange={handleMobileChange}
                  maxLength={10}
                  required
                />
              </div>
            </div>

            {/* City */}
            <div className="relative group">
              <label className="block text-gray-300 font-medium mb-2 transition-all duration-300 group-focus-within:text-purple-400">
                City
              </label>
              <div className="flex items-center border border-gray-600 rounded-full overflow-hidden bg-gray-700 group-focus-within:border-purple-500 transition-all duration-300">
                <span className="px-4 text-gray-400 group-focus-within:text-purple-400">
                  <FaCity />
                </span>
                <input
                  type="text"
                  className="w-full p-3 bg-transparent text-gray-200 focus:outline-none placeholder-gray-500"
                  placeholder="Enter your city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="relative group">
            <label className="block text-gray-300 font-medium mb-2 transition-all duration-300 group-focus-within:text-purple-400">
              Password
            </label>
            <div className="flex items-center border border-gray-600 rounded-full overflow-hidden bg-gray-700 group-focus-within:border-purple-500 transition-all duration-300">
              <span className="px-4 text-gray-400 group-focus-within:text-purple-400">
                <FaLock />
              </span>
              <input
                type="password"
                className="w-full p-3 bg-transparent text-gray-200 focus:outline-none placeholder-gray-500"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center space-x-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                </svg>
                <span>Signing Up...</span>
              </span>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium">
            Login
          </Link>
        </p>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Signup;