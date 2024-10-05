import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="w-full md:w-[90%] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* Company Column */}
                <div>
                    <h4 className="font-semibold text-lg mb-4">Company</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-purple-500">Manifesto 2.0</a></li>
                        <li><a href="#" className="hover:text-purple-500">Team & Leadership</a></li>
                        <li><a href="#" className="hover:text-purple-500">Founder's Letters</a></li>
                    
                    </ul>
                    <h4 className="font-semibold text-lg my-4">Legal</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-purple-500">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-purple-500">Terms of Services</a></li>
                    </ul>
                
                </div>
                
                {/* About Column */}
                <div>
                    <h4 className="font-semibold text-lg mb-4">About</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-purple-500">Our Story</a></li>
                   
                    </ul>
                    <h4 className="font-semibold text-lg my-4">Address</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-purple-500">Remote First Kigali, Rwanda</a></li>
                   
                    </ul>
                    <h4 className="font-semibold text-lg my-4">Contacts</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-purple-500">+25073702699</a></li>
                        <li><a href="#" className="hover:text-purple-500">codextrem.global@gmail.com</a></li>
                   
                    </ul>
                </div>
                
                {/* Connect Column */}
                <div>
                    <h4 className="font-semibold text-lg mb-4">Connect</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-purple-500">Become a Sponsor</a></li>
                        <li><a href="#" className="hover:text-purple-500">Become a Partner</a></li>
                        <li><a href="#" className="hover:text-purple-500">Submit a Problem Statement</a></li>
                        <h4 className="font-semibold text-lg my-4">Socials</h4>
                        <li className="flex space-x-4">
                       
                            <a href="#" className="hover:text-purple-500"><FaFacebook /></a>
                            <a href="#" className="hover:text-purple-500"><FaTwitter /></a>
                            <a href="#" className="hover:text-purple-500"><FaLinkedin /></a>
                            <a href="#" className="hover:text-purple-500"><FaInstagram /></a>
                        </li>
                    </ul>
                </div>
                
              
                <div>
                    <h4 className="font-semibold text-lg mb-4">Products & Service</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-purple-500">Trove</a></li>
                        <li><a href="#" className="hover:text-purple-500">Hackathons</a></li>
                        <li><a href="#" className="hover:text-purple-500">Buildathons</a></li>
                        <li><a href="#" className="hover:text-purple-500">Summer of Code (soon)</a></li>
                        <li><a href="#" className="hover:text-purple-500">Void Space (soon)</a></li>
                     

                    </ul>
                    <h4 className="font-semibold text-lg my-4">Solutions</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-purple-500">Case Studies</a></li>
                        <li><a href="#" className="hover:text-purple-500">Startups</a></li>
                   
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                <p>&copy; {new Date().getFullYear()} CodeXtreme. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
