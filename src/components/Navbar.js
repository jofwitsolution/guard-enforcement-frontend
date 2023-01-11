import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaEnvelope, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { HiMenu } from 'react-icons/hi';

const Navbar = ({ setToggleSidebar }) => {
  return (
    <nav className='bg-blackBackground'>
      <div className='hidden md:block border-b-[rgba(255,255,255,.1)] border-b-[0.1px]'>
        <div className='max-w-[1200px] mx-auto flex justify-between items-center px-[35px] h-[55px]'>
          <div className='flex gap-5'>
            <a
              href='http://www.facebook.com'
              className='text-gray hover:text-primary'
              target={'-blank'}
              rel='noreferrer'
            >
              <FaFacebookF fontSize={18} />{' '}
            </a>
            <a
              href='http://www.twitter.com'
              className='text-gray hover:text-primary'
              target={'-blank'}
              rel='noreferrer'
            >
              <FaTwitter fontSize={18} />{' '}
            </a>
            <a
              href='http://www.instagram.com'
              className='text-gray hover:text-primary'
              target={'-blank'}
              rel='noreferrer'
            >
              <AiFillInstagram fontSize={18} />{' '}
            </a>
          </div>
          <div className='flex gap-8'>
            <a href='tel: +1 (510) 706-1906' className='text-white'>
              <span className='text-gray hover:text-primary mr-2'>
                Call Us:
              </span>
              +1 (510) 706-1906
            </a>
            <a
              href='mailto: info@guardenforcement.com'
              className='text-white flex justify-center items-center'
            >
              <FaEnvelope
                fontSize={18}
                className='text-gray hover:text-primary mr-2'
              />{' '}
              info@guardenforcement.com
            </a>
          </div>
        </div>
      </div>

      <div className='max-w-[1200px] mx-auto flex justify-between items-center px-[35px] text-white h-[80px] md:h-[90px]'>
        <div className='text-xl'>
          <a href='/'>Guard Enforcement</a>{' '}
        </div>
        <div className='hidden lg:flex justify-center gap-8 items-center text-white'>
          <div className=''>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'text-primary' : 'hover:text-primary'
              }
            >
              HOME
            </NavLink>
          </div>
          <div className='relative group'>
            <NavLink
              to='#'
              className={({ isActive }) =>
                isActive
                  ? 'hover:text-primary flex items-center'
                  : 'hover:text-primary flex items-center'
              }
            >
              ABOUT <BiChevronDown fontSize={20} />
            </NavLink>
            <div className='hidden group-hover:block absolute top-5 -left-5 text-black bg-white w-[200px] z-[2000]'>
              <div>
                <NavLink
                  className='inline-block w-full py-3 pl-3 hover:bg-primaryBackground hover:text-white transition-all duration-300 ease-in-out'
                  to='/our-company'
                >
                  OUR COMPANY
                </NavLink>
              </div>
              <div>
                <NavLink
                  className='inline-block w-full py-3 pl-3 hover:bg-primaryBackground hover:text-white transition-all duration-300 ease-in-out'
                  to='/pricing'
                >
                  PRICING
                </NavLink>
              </div>
              <div>
                <NavLink
                  className='inline-block w-full py-3 pl-3 hover:bg-primaryBackground hover:text-white transition-all duration-300 ease-in-out'
                  to='/guardenforcement-usa'
                >
                  GE USA
                </NavLink>
              </div>
              <div>
                <NavLink
                  className='inline-block w-full py-3 pl-3 hover:bg-primaryBackground hover:text-white transition-all duration-300 ease-in-out'
                  to='/guardenforcement-nigeria'
                >
                  GE NIGERIA
                </NavLink>
              </div>
            </div>
          </div>
          <div className=''>
            <NavLink
              to='/services'
              className={({ isActive }) =>
                isActive ? 'text-primary' : 'hover:text-primary'
              }
            >
              SERVICES
            </NavLink>
          </div>
          <div className=''>
            <NavLink
              to='/recruitments'
              className={({ isActive }) =>
                isActive ? 'text-primary' : 'hover:text-primary'
              }
            >
              RECRUITMENTS
            </NavLink>
          </div>
          <div className=''>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                isActive ? 'text-primary' : 'hover:text-primary'
              }
            >
              CONTACT
            </NavLink>
          </div>
          <div className=''>
            <NavLink
              to='/login'
              className={({ isActive }) =>
                isActive
                  ? 'text-primary'
                  : 'border-2 border-primary rounded-xl px-4 py-2 transition-all duration-300 ease-in-out hover:bg-primaryBackground'
              }
            >
              LOG IN
            </NavLink>
          </div>
        </div>
        <div className='flex lg:hidden'>
          <HiMenu
            fontSize={30}
            onClick={() => setToggleSidebar(true)}
            className='cursor-pointer'
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
