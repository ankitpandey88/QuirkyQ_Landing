


import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./auth/ProtectedRoute";

import LandingPage from "./components/LandingPage";
import Login from "./auth/Login";
import VendorOnboard from "./components/VendorOnboard";
import Signup from "./components/Signup";
import Dashboard from "./pages/Dashboard";
import Salon from "./pages/Salon";
import Doctor from "./pages/Doctor";
import { AuthProvider } from "./auth/AuthContext";
import SalonDetails from "./pages/SalonDetails";
import DocterDetails from "./pages/DocterDetails";
import ContactUs from "./components/ContactUs";
import Apporaval from "./components/Apporaval";
import AdminLogin from "./auth/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminService from "./components/admin/AdminService";

// const App = () => {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <ToastContainer autoClose={1800} />
//         <Routes>
//           <Route path="/" element={<Navigate to="/quirkyQ" replace />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/professional" element={<VendorOnboard />} />
//           <Route path="/quirkyQ" element={<LandingPage />} />
//           <Route path="/contact-us" element={<ContactUs />} />
          
//           {/* ✅ Apply Protected Route to these pages */}
//           <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
//           <Route path="/salon" element={<ProtectedRoute><Salon /></ProtectedRoute>} />
//           <Route path="/salon/:id" element={<ProtectedRoute><SalonDetails /></ProtectedRoute>} />
//           <Route path="/doctor" element={<ProtectedRoute><Doctor /></ProtectedRoute>} />
//           <Route path="/doctors/:id" element={<ProtectedRoute><DocterDetails /></ProtectedRoute>} />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// };

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <AuthProvider>
        <BrowserRouter>
          <ToastContainer autoClose={1800} />
          <Routes>
            <Route path="/" element={<Navigate to="/quirkyQ" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/professional" element={<VendorOnboard />} />
            <Route path="/quirkyQ" element={<LandingPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/Approval" element={<Apporaval />} />

            <Route path="/salon" element={<Salon />} />
            <Route path="/salon/:id" element={<SalonDetails />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/doctors/:id" element={<DocterDetails />} />

            {/* ✅ Apply Protected Route to these pages */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            {/* <Route path="/salon" element={<ProtectedRoute><Salon /></ProtectedRoute>} />
            <Route path="/salon/:id" element={<ProtectedRoute><SalonDetails /></ProtectedRoute>} />
            <Route path="/doctor" element={<ProtectedRoute><Doctor /></ProtectedRoute>} />
            <Route path="/doctors/:id" element={<ProtectedRoute><DocterDetails /></ProtectedRoute>} /> */}
            <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
            <Route path="/admin-service" element={<ProtectedRoute><AdminService /></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;




// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [amount, setAmount] = useState('');

//     const handlePayment = async () => {
//         if (!name || !email || !amount) {
//             alert('Please fill all fields');
//             return;
//         }

//         try {
//             // ✅ Step 1: Create an order
//             const { data } = await axios.post('http://localhost:3000/api/payment/create-order', {
//                 amount: amount, // Amount in INR (in rupees)
//                 currency: 'INR'
//             });

//             const options = {
//                 key: 'rzp_live_CW3A67eVfhqgaj', // Razorpay Key ID
//                 amount: data.amount,
//                 currency: data.currency,
//                 name: 'My Shop',
//                 description: 'Test Payment',
//                 order_id: data.id,
//                 prefill: {
//                     name: name,
//                     email: email,
//                 },
//                 handler: async (response) => {
//                     const body = {
//                         order_id: data.id,
//                         payment_id: response.razorpay_payment_id,
//                         signature: response.razorpay_signature
//                     };

//                     // ✅ Step 2: Verify Payment
//                     const result = await axios.post('http://localhost:3000/api/payment/verify-payment', body);

//                     if (result.data.success) {
//                         alert('Payment Successful');
//                     } else {
//                         alert('Payment Verification Failed');
//                     }
//                 },
//                 theme: {
//                     color: '#3399cc'
//                 }
//             };

//             const razorpay = new window.Razorpay(options);
//             razorpay.open();
//         } catch (error) {
//             console.error('Payment error:', error);
//             alert('Payment failed');
//         }
//     };

//     return (
//         <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', border: '1px solid #ccc', borderRadius: '10px' }}>
//             <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Make Payment</h2>
            
//             {/* Name Input */}
//             <div style={{ marginBottom: '15px' }}>
//                 <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Enter your name"
//                     style={{
//                         width: '100%',
//                         padding: '10px',
//                         borderRadius: '5px',
//                         border: '1px solid #ccc'
//                     }}
//                 />
//             </div>

//             {/* Email Input */}
//             <div style={{ marginBottom: '15px' }}>
//                 <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter your email"
//                     style={{
//                         width: '100%',
//                         padding: '10px',
//                         borderRadius: '5px',
//                         border: '1px solid #ccc'
//                     }}
//                 />
//             </div>

//             {/* Amount Input */}
//             <div style={{ marginBottom: '15px' }}>
//                 <label style={{ display: 'block', marginBottom: '5px' }}>Amount (INR):</label>
//                 <input
//                     type="number"
//                     value={amount}
//                     onChange={(e) => setAmount(e.target.value)}
//                     placeholder="Enter amount"
//                     style={{
//                         width: '100%',
//                         padding: '10px',
//                         borderRadius: '5px',
//                         border: '1px solid #ccc'
//                     }}
//                 />
//             </div>

//             {/* Submit Button */}
//             <button
//                 onClick={handlePayment}
//                 style={{
//                     width: '100%',
//                     padding: '12px',
//                     backgroundColor: '#4CAF50',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '5px',
//                     cursor: 'pointer',
//                     fontSize: '16px'
//                 }}
//             >
//                 Pay Now
//             </button>
//         </div>
//     );
// };

// export default App;
