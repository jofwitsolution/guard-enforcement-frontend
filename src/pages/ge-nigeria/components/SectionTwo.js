import React, { useState } from 'react';
import styles from '../../../styles/tailwind';

const SectionTwo = () => {
  const [team] = useState([
    {
      name: 'Olusegun Ayanbajo',
      position: 'CEO and Founder',
      image: 'https://via.placeholder.com/150',
      bio: 'Olusegun Ayanbajo is the CEO and founder of Guard Enforcement. He has over 15 years of experience in the security industry and is an expert in creating effective and tailored security solutions.',
    },
    {
      name: 'Jane Doe',
      position: 'Director of Operations',
      image: 'https://via.placeholder.com/150',
      bio: 'Jane Doe is the Director of Operations at Guard Enforcement. She has a wealth of experience in managing security teams and is dedicated to ensuring the highest quality of service for our clients.',
    },
    {
      name: 'Robert Johnson',
      position: 'Head of Training and Development',
      image: 'https://via.placeholder.com/150',
      bio: 'Robert Johnson is the Head of Training and Development at Guard Enforcement. He is responsible for designing and delivering training programs for our security professionals to ensure they are equipped with the skills and knowledge they need to excel in their roles.',
    },
  ]);

  return (
    <section className='pb-2 pt-8 md:py-[3rem]'>
      <div className={`${styles.maxWidth}`}>
        <div className='mx-auto px-4'>
          <h2 className='text-center text-2xl font-medium mb-4'>Our Team</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {team.map((member, index) => (
              <div
                key={index}
                className='bg-white p-4 md:p-8 rounded-lg shadow-lg'
              >
                <img
                  src={member.image}
                  className='w-full h-48 rounded-lg object-cover'
                  alt={member.name}
                />
                <h3 className='text-lg font-medium mt-4'>{member.name}</h3>
                <p className='text-gray-700'>{member.position}</p>
                <p className='text-gray-700'>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
