import React from 'react';
import {
  AiFillCloseCircle,
  AiOutlineTeam,
  AiOutlineLogout,
  AiOutlineLogin,
} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { HiHome, HiOfficeBuilding } from 'react-icons/hi';
import { MdMiscellaneousServices, MdOutlineContacts } from 'react-icons/md';
import { ImOffice } from 'react-icons/im';
import { FaUserCircle } from 'react-icons/fa';
import auth from '../../services/authService';

const activeStyle =
  'px-5 flex items-center gap-3 font-semibold hover:text-primary border-r-4 border-white  transition-all duration-200 ease-in-out capitalize';
const notActiveStyle =
  'px-5 flex items-center gap-3 font-semibold hover:text-primary transition-all duration-200 ease-in-out capitalize';

const Sidebar = ({
  toggleSidebar,
  setToggleSidebar,
  setToggleMobileMenu,
  user,
}) => {
  const handleCloseSidebar = () => {
    if (toggleSidebar) setToggleSidebar(false);
  };

  return (
    <>
      {toggleSidebar && (
        <div className='text-white lg:hidden fixed z-[2000] top-0 w-4/5 bg-blackBackground h-screen overflow-y-auto shadow-md animate-slide-in'>
          <div className='absolute w-full flex justify-between items-center p-2'>
            <div className='text-primary text-2xl font-semibold font-mono'></div>
            <AiFillCloseCircle
              fontSize={30}
              className='cursor-pointer text-secondary'
              onClick={() => setToggleSidebar(false)}
            />
          </div>

          <div className='flex flex-col gap-5 mt-20'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? `${activeStyle}` : `${notActiveStyle}`
              }
              onClick={() => handleCloseSidebar()}
            >
              <HiHome fontSize={20} className='text-primary' />
              HOME
            </NavLink>
            <hr />
            <NavLink
              to='/our-company'
              className={({ isActive }) =>
                isActive ? `${activeStyle}` : `${notActiveStyle}`
              }
              onClick={() => handleCloseSidebar()}
            >
              <ImOffice fontSize={20} className='text-primary' />
              OUR COMPANY
            </NavLink>
            <hr />
            <NavLink
              to='/guardenforcement-usa'
              className={({ isActive }) =>
                isActive ? `${activeStyle}` : `${notActiveStyle}`
              }
              onClick={() => handleCloseSidebar()}
            >
              <HiOfficeBuilding fontSize={20} className='text-primary' />
              GE USA
            </NavLink>
            <hr />
            <NavLink
              to='/guardenforcement-nigeria'
              className={({ isActive }) =>
                isActive ? `${activeStyle}` : `${notActiveStyle}`
              }
              onClick={() => handleCloseSidebar()}
            >
              <HiOfficeBuilding fontSize={20} className='text-primary' />
              GE NIGERIA
            </NavLink>
            <hr />
            <NavLink
              to='/services'
              className={({ isActive }) =>
                isActive ? `${activeStyle}` : `${notActiveStyle}`
              }
              onClick={() => handleCloseSidebar()}
            >
              <MdMiscellaneousServices fontSize={20} className='text-primary' />
              SERVICES
            </NavLink>
            <hr />
            <NavLink
              to='/recruitments'
              className={({ isActive }) =>
                isActive ? `${activeStyle}` : `${notActiveStyle}`
              }
              onClick={() => handleCloseSidebar()}
            >
              <AiOutlineTeam fontSize={20} className='text-primary' />
              RECRUITMENTS
            </NavLink>
            <hr />
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                isActive ? `${activeStyle}` : `${notActiveStyle}`
              }
              onClick={() => handleCloseSidebar()}
            >
              <MdOutlineContacts fontSize={20} className='text-primary' />
              CONTACT
            </NavLink>
            <hr />
            {!user && (
              <>
                <NavLink
                  to='/login'
                  className={({ isActive }) =>
                    isActive ? `${activeStyle}` : `${notActiveStyle}`
                  }
                  onClick={() => handleCloseSidebar()}
                >
                  <AiOutlineLogin fontSize={20} className='text-primary' />
                  LOG IN
                </NavLink>
                <hr />
              </>
            )}

            {user && (
              <>
                <span
                  className={`${notActiveStyle}`}
                  onClick={() => {
                    handleCloseSidebar();
                    setToggleMobileMenu(true);
                  }}
                >
                  <FaUserCircle fontSize={20} className='text-primary' />
                  USER
                </span>
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
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
