import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../services/authService';

function UserMenu({ handleShowMenu, userIconRef, user }) {
  const logoutUser = () => {
    auth.logout();
    window.location.href = '/';
  };

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !userIconRef.current.contains(event.target)
      ) {
        handleShowMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, handleShowMenu, userIconRef]);

  const name = `${user?.lastName}   ${user?.firstName}`;

  return (
    <>
      <span
        ref={ref}
        className='absolute top-[40px] right-[0px] w-[200px] shadow-lg bg-white py-4'
      >
        <ul className='px-2 text-blackText'>
          <li>
            <Link
              to={'/dashboard'}
              className='hover:bg-secondaryBackground inline-block mx-auto w-[100%] pl-4 py-2 rounded-md'
            >
              {name}
            </Link>
          </li>
          <li className='border border-[rgba(0,0,0,0.13)] my-2'></li>
          <li>
            <Link
              to={'/dashboard'}
              className='hover:bg-secondaryBackground inline-block mx-auto w-[100%] pl-4 py-2 rounded-md'
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to={'/dashboard/edit-profile'}
              className='hover:bg-secondaryBackground inline-block mx-auto w-[100%] pl-4 py-2 rounded-md'
            >
              Edit Profile
            </Link>
          </li>
          <li>
            <Link
              to={'/dashboard/settings'}
              className='hover:bg-secondaryBackground inline-block mx-auto w-[100%] pl-4 py-2 rounded-md'
            >
              Settings
            </Link>
          </li>
          <li className='border border-[rgba(0,0,0,0.13)] my-2'></li>
          <li>
            <span
              onClick={() => logoutUser()}
              className='hover:bg-secondaryBackground inline-block mx-auto w-[100%] pl-4 py-2 rounded-md cursor-pointer'
            >
              Sign Out
            </span>
          </li>
        </ul>
      </span>
    </>
  );
}

export default UserMenu;
