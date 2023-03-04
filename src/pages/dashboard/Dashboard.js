import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { FaUserEdit } from 'react-icons/fa';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { AiOutlineLogout, AiOutlineSetting } from 'react-icons/ai';
import auth from '../../services/authService';
import Meta from '../../components/Meta';

const activeStyle =
  'mb-2 flex w-full items-center h-max gap-3 font-bold bg-[#F1F1F1] py-2 pl-3 rounded-md';
const nonActiveStyle =
  'mb-2 flex w-full items-center h-max gap-3 hover:bg-[#F1F1F1] py-2 pl-3 rounded-md';

const Dashboard = () => {
  const logoutUser = () => {
    auth.logout();
    window.location.href = '/';
  };

  return (
    <div className='flex mt-[1px] bg-secondaryBackground gap-3'>
      <Meta title={'Dashboard - Guard Enforcement'} />
      <div className='hidden lg:flex flex-[15%] bg-white h-screen shadow-lg py-6 border-r-[1px] border-[rgba(0,0,0,0.2)]'>
        <div className='flex flex-col w-full pl-4'>
          <NavLink
            to='/dashboard'
            className={({ isActive }) =>
              isActive ? activeStyle : nonActiveStyle
            }
          >
            <span>
              <BiUser fontSize={22} />
            </span>
            Profile
          </NavLink>
          <NavLink
            to='/dashboard/edit-profile'
            className={({ isActive }) =>
              isActive ? activeStyle : nonActiveStyle
            }
          >
            <span>
              <FaUserEdit fontSize={22} />
            </span>
            Edit Profile
          </NavLink>
          <NavLink
            to='/dashboard/overview'
            className={({ isActive }) =>
              isActive ? activeStyle : nonActiveStyle
            }
          >
            <span>
              <BiUser fontSize={22} />
            </span>
            Overview
          </NavLink>
          <NavLink
            to='/dashboard/manage-users'
            className={({ isActive }) =>
              isActive ? activeStyle : nonActiveStyle
            }
          >
            <span>
              <FiUsers fontSize={22} />
            </span>
            Manage Users
          </NavLink>
          <NavLink
            to='/dashboard/add-user'
            className={({ isActive }) =>
              isActive ? activeStyle : nonActiveStyle
            }
          >
            <span>
              <FiUserPlus fontSize={22} />
            </span>
            Add User
          </NavLink>
          <NavLink
            to='/dashboard/settings'
            className={({ isActive }) =>
              isActive ? activeStyle : nonActiveStyle
            }
          >
            <span>
              <AiOutlineSetting fontSize={22} />
            </span>
            Settings
          </NavLink>
          <span
            onClick={() => logoutUser()}
            className={`${nonActiveStyle} cursor-pointer`}
          >
            <span>
              <AiOutlineLogout fontSize={22} />
            </span>
            Sign Out
          </span>
        </div>
      </div>
      <div className='flex flex-[82%] pl-2 lg:pl-0 pt-2 pr-2'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
