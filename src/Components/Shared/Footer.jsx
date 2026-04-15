import React from 'react';
import { Link } from 'react-router';
import facebookImg from '../../assets/facebook.png'
import instagramImg from '../../assets/instagram.png'
import twitterImg from '../../assets/twitter.png'
import footerLogo from '../../assets/logo-xl.png'


const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        
        {/* Title */}
          <img src={footerLogo} alt='keenkeeper' className='mx-auto text-center mb-4'/>
        

        {/* Subtitle */}
        <p className="text-gray-200 max-w-3xl mx-auto text-[16px] mb-4">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mb-10">
          <p className="text-[20px] font-medium text-[#FFFFFF] mb-3">
            Social Links
          </p>

          <div className="flex justify-center gap-4">

            <Link to="#">
              <div className="hover:scale-110 transition">
                <img
                  src={facebookImg}
                  alt="facebookIcon"
                  className="w-10 h-10"
                />
              </div>
            </Link>

            <Link to="#">
              <div className="hover:scale-110 transition">
                <img
                  src={instagramImg}
                  alt="instagramIcon"
                  className="w-10 h-10"
                />
              </div>
            </Link>

            <Link to="#">
              <div className="hover:scale-110 transition">
                <img
                  src={twitterImg}
                  alt="twitterIcon"
                  className="w-10 h-10"
                />
              </div>
            </Link>

          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-200">
          
          <p>
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <Link to="/privacy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms of Service
            </Link>

            <Link to="/cookies">
              Cookies
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;