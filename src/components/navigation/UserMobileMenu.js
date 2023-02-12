import React from 'react';
import { AiFillCloseCircle, AiOutlineLogout } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { BsFillRecordCircleFill } from 'react-icons/bs';
import auth from '../../services/authService';

const notActiveStyle =
  'px-5 flex items-center gap-3 font-semibold hover:text-primary transition-all duration-200 ease-in-out capitalize';

const UserMobileMenu = ({ toggleMobileMenu, setToggleMobileMenu }) => {
  const handleCloseSidebar = () => {
    if (toggleMobileMenu) setToggleMobileMenu(false);
  };

  return (
    <>
      {toggleMobileMenu && (
        <div className='text-white lg:hidden fixed z-[2000] top-0 w-4/5 bg-blackBackground h-screen overflow-y-auto shadow-md animate-slide-in'>
          <div className='absolute w-full flex justify-between items-center p-2'>
            <div className='text-primary text-2xl font-semibold font-mono'></div>
            <AiFillCloseCircle
              fontSize={30}
              className='cursor-pointer text-secondary'
              onClick={() => setToggleMobileMenu(false)}
            />
          </div>

          <div className='flex flex-col gap-5 mt-20'>
            <NavLink
              to='/'
              className={`${notActiveStyle}`}
              onClick={() => handleCloseSidebar()}
            >
              <BsFillRecordCircleFill fontSize={20} className='text-primary' />
              HOME
            </NavLink>
            <hr />
            <NavLink
              to='/'
              className={`${notActiveStyle}`}
              onClick={() => handleCloseSidebar()}
            >
              <BsFillRecordCircleFill fontSize={20} className='text-primary' />
              Profile
            </NavLink>
            <hr />
            <NavLink
              to='/'
              className={`${notActiveStyle}`}
              onClick={() => handleCloseSidebar()}
            >
              <BsFillRecordCircleFill fontSize={20} className='text-primary' />
              HOME
            </NavLink>
            <hr />
            <NavLink
              to='/'
              className={`${notActiveStyle}`}
              onClick={() => handleCloseSidebar()}
            >
              <BsFillRecordCircleFill fontSize={20} className='text-primary' />
              HOME
            </NavLink>
            <hr />
            <a
              href='/'
              className={`${notActiveStyle}`}
              onClick={() => {
                handleCloseSidebar();
                auth.logout();
              }}
            >
              <AiOutlineLogout fontSize={20} className='text-primary' />
              SIGN OUT
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default UserMobileMenu;
