import React from "react";
import logo from "/images/logo.png";

const Footer = () => {
    return (
        <div className="w-full">

          
            <div className="w-full bg-[#37475A] text-white text-sm py-3 text-center cursor-pointer hover:bg-[#485769]">
                Back to top
            </div>

           
            <div className="w-full bg-[#232F3E] text-gray-300 py-10 px-6 md:px-20 grid grid-cols-2 md:grid-cols-4 gap-8">

                <div>
                    <h3 className="text-white font-bold mb-3">Get to Know Us</h3>
                    <p className="footerLink">About Amazon</p>
                    <p className="footerLink">Careers</p>
                    <p className="footerLink">Press Releases</p>
                    <p className="footerLink">Amazon Science</p>
                </div>

                <div>
                    <h3 className="text-white font-bold mb-3">Connect with Us</h3>
                    <p className="footerLink">Facebook</p>
                    <p className="footerLink">Twitter</p>
                    <p className="footerLink">Instagram</p>
                </div>

                <div>
                    <h3 className="text-white font-bold mb-3">Make Money with Us</h3>
                    <p className="footerLink">Sell on Amazon</p>
                    <p className="footerLink">Sell under Amazon Accelerator</p>
                    <p className="footerLink">Protect and Build Your Brand</p>
                    <p className="footerLink">Amazon Global Selling</p>
                </div>

                <div>
                    <h3 className="text-white font-bold mb-3">Let Us Help You</h3>
                    <p className="footerLink">Your Account</p>
                    <p className="footerLink">Returns Centre</p>
                    <p className="footerLink">100% Purchase Protection</p>
                    <p className="footerLink">Help</p>
                </div>

            </div>

           
            <div className="w-full bg-[#232F3E] border-t border-gray-600 py-6 flex items-center justify-center">
                <img className="w-24" src={logo} alt="logo" />
            </div>

           
            <div className="w-full bg-[#131A22] text-gray-400 text-sm py-4 text-center">
                © 2026 Amazon Clone | All Rights Reserved by{" "}
                <span className="hover:text-white cursor-pointer">Govardhan</span>
            </div>

        </div>
    );
};

export default Footer;