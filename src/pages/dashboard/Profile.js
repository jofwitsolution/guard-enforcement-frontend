import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import styles from '../../styles/tailwind';
import { getUserProfile } from '../../services/userService';

const Profile = ({ user }) => {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await getUserProfile(user.id);
        console.log(data);
        setUserProfile(data);
      } catch (error) {
        // console.error(error);
      }
    };

    getUser();
  }, [user]);

  const fullName = `${userProfile?.profile?.lastName} ${userProfile?.profile?.firstName}`;
  return (
    <div className='w-full'>
      <div className='h-[140px] bg-primary rounded-t-lg'></div>
      <div className=' bg-white rounded-b-lg shadow-md px-4'>
        <span className='inline-block text-[100px] md:text-[130px] rounded-[50%] bg-white p-1 mt-[-32px] md:mt-[-42px] ml-[3%]'>
          <FaUserCircle />
        </span>
        <div className='flex flex-col sm:flex-row justify-between w-full mt-3'>
          <div>
            <div className='text-[1.5rem] font-bold'>{fullName}</div>
            <div className='font-semibold'>
              ID: {userProfile?.identityNumber}
            </div>
          </div>

          <div className='flex gap-3 mt-4 sm:mt-0'>
            <span className={`${styles.buttonThree}`}>Cancel</span>
            <span className={`${styles.buttonFour}`}>Save</span>
          </div>
        </div>
        <div className='grid place-content-center mt-6'>
          <div>hdhdjdhj</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
