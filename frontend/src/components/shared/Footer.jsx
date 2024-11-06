// import React from 'react';
// import { FaTwitter, FaFacebookF, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

// const Footer = () => {
//     return (
//         <footer 
//             style={{ 
//                 background: 'linear-gradient(to right, #68d391, #4299e1)',  // Green-400 to blue-500 gradient
//                 padding: '60px 0',
//                 textAlign: 'center',
//                 color: '#ffffff',
//                 borderTop: '2px solid rgba(255, 255, 255, 0.2)',
//                 boxShadow: '0 -1px 10px rgba(0, 0, 0, 0.2)',
//             }}
//         >
//             <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
//                 <h2 style={{ fontSize: '26px', marginBottom: '20px', fontWeight: 'bold', color: '#ffffff' }}>
//                     KIIT Training and Placement
//                 </h2>
//                 <p style={{ fontSize: '15px', margin: '10px 0', color: '#e0e0e0' }}>
//                     &copy; 2024 All rights reserved.
//                 </p>

//                 <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '20px', alignItems: 'center' }}>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff' }}>
//                         <FaEnvelope size={18} />
//                         <a href="mailto:kiit@kiit.ac.in" style={{ color: '#ffffff', textDecoration: 'underline' }}>
//                             kiit@kiit.ac.in
//                         </a>
//                     </div>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff' }}>
//                         <FaPhoneAlt size={18} />
//                         <a href="tel:+91912447613" style={{ color: '#ffffff', textDecoration: 'underline' }}>
//                             +91 91244-7613
//                         </a>
//                     </div>
//                 </div>

//                 <div style={{ margin: '40px 0' }}>
//                     <p style={{ fontSize: '18px', color: '#ffffff', marginBottom: '15px', fontWeight: '600' }}>Connect with us</p>
//                     <div style={{ display: 'flex', justifyContent: 'center', gap: '25px' }}>
//                         <a 
//                             href="https://twitter.com/kiit_placement" 
//                             target="_blank" 
//                             rel="noopener noreferrer" 
//                             style={{ color: '#ffffff', transition: 'transform 0.3s' }} 
//                             onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
//                             onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
//                         >
//                             <FaTwitter size={30} />
//                         </a>
//                         <a 
//                             href="https://www.facebook.com/kiit.training.and.placement" 
//                             target="_blank" 
//                             rel="noopener noreferrer" 
//                             style={{ color: '#ffffff', transition: 'transform 0.3s' }} 
//                             onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
//                             onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
//                         >
//                             <FaFacebookF size={30} />
//                         </a>
//                         <a 
//                             href="https://www.linkedin.com/company/kiit-training-and-placement/" 
//                             target="_blank" 
//                             rel="noopener noreferrer" 
//                             style={{ color: '#ffffff', transition: 'transform 0.3s' }} 
//                             onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
//                             onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
//                         >
//                             <FaLinkedinIn size={30} />
//                         </a>
//                     </div>
//                 </div>

//                 <ul style={{ listStyle: 'none', padding: 0, marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '30px' }}>
//                     <li>
//                         <a 
//                             href="/privacy-policy" 
//                             style={{ color: '#ffffff', textDecoration: 'underline', transition: 'color 0.3s' }}
//                             onMouseOver={(e) => e.currentTarget.style.color = '#e0e0e0'}
//                             onMouseOut={(e) => e.currentTarget.style.color = '#ffffff'}
//                         >
//                             Privacy Policy
//                         </a>
//                     </li>
//                     <li>
//                         <a 
//                             href="/terms-of-service" 
//                             style={{ color: '#ffffff', textDecoration: 'underline', transition: 'color 0.3s' }}
//                             onMouseOver={(e) => e.currentTarget.style.color = '#e0e0e0'}
//                             onMouseOut={(e) => e.currentTarget.style.color = '#ffffff'}
//                         >
//                             Terms of Service
//                         </a>
//                     </li>
//                     <li>
//                         <a 
//                             href="/faqs" 
//                             style={{ color: '#ffffff', textDecoration: 'underline', transition: 'color 0.3s' }}
//                             onMouseOver={(e) => e.currentTarget.style.color = '#e0e0e0'}
//                             onMouseOut={(e) => e.currentTarget.style.color = '#ffffff'}
//                         >
//                             FAQs
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         </footer>
//     );
// };

// export default Footer;


import React, { useState } from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
    const [email, setEmail] = useState(''); // State for email input

    const handleEmailChange = (e) => {
        setEmail(e.target.value); // Update email state on input change
    };

    const handleSubscribe = () => {
        if (email) {
            alert(`Thank you for subscribing with ${email}!`); // Show subscribed email
            setEmail(''); // Clear the input after subscription
        } else {
            alert('Please enter a valid email address.'); // Alert if input is empty
        }
    };

    return (
        <footer 
            style={{ 
                background: 'linear-gradient(to right, #68d391, #4299e1)', 
                padding: '60px 0',
                textAlign: 'center',
                color: '#ffffff',
                borderTop: '2px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 -1px 10px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <h2 style={{ fontSize: '30px', marginBottom: '20px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    KIIT Training and Placement Cell
                </h2>
                <p style={{ fontSize: '16px', margin: '10px 0', color: '#e0e0e0' }}>
                    &copy; 2024 All rights reserved.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '20px', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff' }}>
                        <FaEnvelope size={18} />
                        <a 
                            href="mailto:kiit@kiit.ac.in" 
                            style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500' }} // Changed to no underline
                        >
                            kiit@kiit.ac.in
                        </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff' }}>
                        <FaPhoneAlt size={18} />
                        <a 
                            href="tel:+91912447613" 
                            style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500' }} // Changed to no underline
                        >
                            +91 91244-7613
                        </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff' }}>
                        <FaMapMarkerAlt size={18} />
                        <a 
                            href="https://www.google.com/maps/search/?api=1&query=KIIT+Campus,+Bhubaneswar,+Odisha" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500' }} // Changed to no underline
                        >
                            KIIT Campus, Bhubaneswar, Odisha
                        </a>
                    </div>
                </div>

                <div style={{ margin: '40px 0' }}>
                    <p style={{ fontSize: '18px', color: '#ffffff', marginBottom: '15px', fontWeight: '600' }}>Connect with us</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '25px' }}>
                        <a 
                            href="https://twitter.com/kiit_placement" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Twitter" 
                            style={{ color: '#ffffff', transition: 'transform 0.3s' }} 
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <FaTwitter size={30} />
                        </a>
                        <a 
                            href="https://www.facebook.com/kiit.training.and.placement" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Facebook" 
                            style={{ color: '#ffffff', transition: 'transform 0.3s' }} 
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <FaFacebookF size={30} />
                        </a>
                        <a 
                            href="https://www.linkedin.com/company/kiit-training-and-placement/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="LinkedIn" 
                            style={{ color: '#ffffff', transition: 'transform 0.3s' }} 
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <FaLinkedinIn size={30} />
                        </a>
                    </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '30px' }}>
                    <li>
                        <Link 
                            to="/privacy-policy" // Use Link component for routing
                            style={{ color: '#ffffff', textDecoration: 'underline', transition: 'color 0.3s', fontWeight: '500' }}
                            onMouseOver={(e) => e.currentTarget.style.color = '#e0e0e0'}
                            onMouseOut={(e) => e.currentTarget.style.color = '#ffffff'}
                        >
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/terms-of-service" // Use Link component for routing
                            style={{ color: '#ffffff', textDecoration: 'underline', transition: 'color 0.3s', fontWeight: '500' }}
                            onMouseOver={(e) => e.currentTarget.style.color = '#e0e0e0'}
                            onMouseOut={(e) => e.currentTarget.style.color = '#ffffff'}
                        >
                            Terms of Service
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/faqs" // Use Link component for routing
                            style={{ color: '#ffffff', textDecoration: 'underline', transition: 'color 0.3s', fontWeight: '500' }}
                            onMouseOver={(e) => e.currentTarget.style.color = '#e0e0e0'}
                            onMouseOut={(e) => e.currentTarget.style.color = '#ffffff'}
                        >
                            FAQs
                        </Link>
                    </li>
                </ul>

                <div style={{ marginTop: '40px' }}>
                    <p style={{ fontSize: '18px', color: '#ffffff', fontWeight: '600', marginBottom: '15px' }}>Subscribe to our Newsletter</p>
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email} // Set input value from state
                        onChange={handleEmailChange} // Update state on input change
                        style={{ padding: '10px', width: '250px', borderRadius: '5px', border: 'none' }} 
                    />
                    <button 
                        style={{ marginLeft: '10px', padding: '10px 15px', background: '#ffffff', color: '#4299e1', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                        onClick={handleSubscribe} // Call subscribe function on click
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

