"use client";
import { useState, useRef, useEffect } from 'react';
import logo from '../../assests/Logo.png';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    const Navlink = [
        {
            title : 'home',
            path : '/'
        },
        {
            title : 'about',
            path : '/about'
        },
        {
            title : 'appoinment',
            path : '/appoinment'
        },
        {
            title : 'Login',
            path : '/Login'
        },
       
    ]

    return (
        <div className={`fixed top-0 bg-red-600 left-0 right-0 z-50 transition-colors duration-300 pt-3 ${isScrolled ? 'bg-black bg-opacity-10' : 'bg-transparent'}`}>
            <nav className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 py-2 text-white">
                <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                    <Image src={logo} alt="logo" className="w-32" />
                </div>
                <ul className="hidden items-center justify-between gap-10 md:flex">
                  {
                    Navlink.map((nav)=><Link key={nav.path} href={nav.path}>
                    
                        <li className="group flex cursor-pointer flex-col">
                            {nav.title}<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-white transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    
                    </Link>)
                  }
                </ul>
                <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                    {dropDownState && (
                        <ul className="z-10 gap-2 bg-[#393E46] absolute right-0 top-11 flex w-[200px] flex-col rounded-lg text-base">
                            <li className="cursor-pointer px-6 py-2 text-white rounded-t-lg hover:bg-sky-600">Home</li>
                            <li className="cursor-pointer px-6 py-2 text-white hover:bg-sky-600">Services</li>
                            <li className="cursor-pointer px-6 py-2 text-white hover:bg-sky-600">About</li>
                            <li className="cursor-pointer px-6 py-2 text-white hover:bg-sky-600">Contact</li>
                            <li className="cursor-pointer px-6 py-2 text-white hover:bg-sky-600">Login</li>
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
