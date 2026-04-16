import React from 'react';
import logoImg from "../../assets/logo.png"
import { NavLink } from 'react-router';
import { RiHome2Line } from 'react-icons/ri';
import { IoTimeOutline } from 'react-icons/io5';
import { PiChartLineUp } from 'react-icons/pi';
const Navbar = () => {
    return (
        <nav className='shadow'>
            <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-4 
              py-[18px] md:py-[20px] lg:py-[23px] 
               px-5 md:px-10 lg:px-[80px] 
               container mx-auto'>

                {/* Logo */}
                <div className='w-full md:w-auto flex justify-center md:justify-start'>
                    <img
                        src={logoImg}
                        alt='HERO.IO'
                        className='w-[120px] md:w-[130px] lg:w-[200px]'
                    />
                </div>

                {/* Menu */}
                <ul className='flex justify-center md:justify-end gap-1 md:gap-2 lg:gap-3 w-full md:w-auto'>

                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                `block text-center 
            w-25 md:w-28 lg:w-32
            ${isActive
                                    ? "bg-[#244D3F] text-white text-[14px] p-2  lg:p-3  md:p-3 font-semibold rounded-sm"
                                    : "text-[#64748B] font-medium text-[14px] p-2 lg:p-3 md:p-3"
                                }`
                            }
                        >
                            <div className='flex justify-center items-center gap-2'>
                                <RiHome2Line className='md:text-2xl lg:text-2xl' />Home
                            </div>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to='/timeline'
                            className={({ isActive }) =>
                                `block text-center 
            w-25 md:w-28 lg:w-32
            ${isActive
                                    ? "bg-[#244D3F] text-white text-[14px] p-2  lg:p-3  md:p-3 font-semibold rounded-sm"
                                    : "text-[#64748B] font-medium text-[14px] p-2 lg:p-3 md:p-3"
                                }`
                            }
                        >
                            <div className='flex justify-center items-center gap-2'>
                                <IoTimeOutline className=' md:text-2xl lg:text-2xl' /> Timeline
                            </div>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to='/stats'
                            className={({ isActive }) =>
                                `block text-center 
            w-25 md:w-28 lg:w-32
            ${isActive
                                    ? "bg-[#244D3F] text-white text-[14px] p-2  lg:p-3  md:p-3 font-semibold rounded-sm"
                                    : "text-[#64748B] font-medium text-[14px] p-2 lg:p-3 md:p-3"
                                }`
                            }
                        >
                            <div className='flex justify-center items-center gap-2'>
                                <PiChartLineUp className='md:text-2xl lg:text-2xl' /> Stats
                            </div>
                        </NavLink>
                    </li>

                </ul>

            </div>
        </nav>
    );
};

export default Navbar;