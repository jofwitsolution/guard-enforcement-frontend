import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import styles from '../../styles/tailwind';
import { getUserProfile } from '../../services/userService';
import DashboardLoading from '../../components/loaders/DashboardLoading';
import { toDateString } from '../../utils/dateHelper';

const Profile = ({ user }) => {
  const [fullName, setFullName] = useState('');
  const [userProfile, setUserProfile] = useState({
    email: '',
    identityNumber: '',
    role: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    imageUrl: '',
    country: '',
    createdAt: '',
    updatedAt: '',
  });
  const [userProfileLoading, setUserProfileLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await getUserProfile(user.id);
        console.log(data);
        const profile = data.profile;
        setUserProfile({ ...data, profile: undefined, ...profile });
        setFullName(`${profile.firstName} ${profile.lastName}`);
        setUserProfileLoading(false);
      } catch (error) {
        // console.error(error);
      }
    };

    getUser();
  }, [user]);

  const handleChange = (e) => {
    const newUserProfile = { ...userProfile };
    newUserProfile[e.target.name] = e.target.value;
    setUserProfile(newUserProfile);
  };

  if (userProfileLoading) {
    return <DashboardLoading />;
  }

  return (
    <div className='w-full'>
      <div className='h-[140px] bg-primary rounded-t-lg'></div>
      <div className=' bg-white rounded-b-lg shadow-md px-4 pb-5 mb-2'>
        <span className='inline-block text-[100px] md:text-[130px] rounded-[50%] bg-white p-1 mt-[-32px] md:mt-[-42px] ml-[3%]'>
          <FaUserCircle />
        </span>
        <div className='flex flex-col sm:flex-row justify-between w-full mt-3'>
          <div>
            <div className='text-[1.5rem] font-bold'>{fullName}</div>
            <div className='font-semibold'>
              ID: {userProfile?.identityNumber}
            </div>
            <div className='mt-2'>
              Join GE on {toDateString(userProfile.createdAt)}
            </div>
            <div>Last updated {toDateString(userProfile.updatedAt)}</div>
          </div>

          <div className='flex gap-3 mt-4 sm:mt-0'>
            <span className={`${styles.buttonThree}`}>Cancel</span>
            <span className={`${styles.buttonFour}`}>Save</span>
          </div>
        </div>
        <div className='sm:grid sm:place-content-center mt-5 md:mt-10'>
          <div className=''>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4'>
              <div className=''>
                <label htmlFor='firstName' className='block'>
                  First name
                </label>
                <input
                  type='text'
                  name='firstName'
                  value={userProfile.firstName}
                  className='bg-secondaryBackground border-black border rounded pl-2 py-1 w-full sm:w-[normal]'
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label htmlFor='lastName' className='block'>
                  Last name
                </label>
                <input
                  type='text'
                  name='lastName'
                  value={userProfile.lastName}
                  className='bg-secondaryBackground border-black border rounded pl-2 py-1 w-full sm:w-[normal]'
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block'>
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                value={userProfile.email}
                className='bg-secondaryBackground border-black border rounded pl-2 py-1 w-full'
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='phone' className='block'>
                Phone
              </label>
              <input
                type='tel'
                name='phone'
                id='phone'
                value={userProfile.phone}
                className='bg-secondaryBackground border-black border rounded pl-2 py-1 w-full'
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='address' className='block'>
                Address
              </label>
              <input
                type='text'
                name='address'
                id='address'
                value={userProfile.address}
                className='bg-secondaryBackground border-black border rounded pl-2 py-1 w-full'
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='country' className='block'>
                Country
              </label>
              <input
                type='text'
                name='country'
                id='country'
                value={userProfile.country}
                className='bg-secondaryBackground border-black border rounded pl-2 py-1 w-full'
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='role' className='block'>
                Role
              </label>
              <input
                type='text'
                name='role'
                id='role'
                value={userProfile.role}
                className='bg-secondaryBackground border-black border rounded pl-2 py-1 w-full'
                onChange={(e) => handleChange(e)}
                disabled={!user.isAdmin}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
