import React, { useState, useEffect } from 'react';
import styles from '../../../styles/tailwind';

const SectionThree = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials] = useState([
    {
      text: 'Guard Enforcement provided top-notch security for our event. Their team was professional and attentive, and we felt very safe with them on the job.',
      name: 'John Smith',
      title: 'Event Organizer',
    },
    {
      text: "We've been using Guard Enforcement for our office security for several years now and they have never let us down. Their team is reliable and always goes the extra mile to ensure our safety.",
      name: 'Jane Doe',
      title: 'Office Manager',
    },
    {
      text: "Guard Enforcement's team was instrumental in helping us identify and address security vulnerabilities in our facility. We now have a much stronger security system in place thanks to them.",
      name: 'Robert Johnson',
      title: 'Facility Manager',
    },
  ]);

  const intervalId = setInterval(() => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  }, 5000);

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  const [careers] = useState([
    {
      title: 'Security Guard',
      responsibilities:
        'Patrolling and monitoring of assigned location, Responding to security incidents and emergencies, Writing detailed incident reports',
      requirements:
        'Valid security guard license, Strong communication and interpersonal skills, Ability to remain calm under pressure',
    },
    {
      title: 'Surveillance and Alarm System Technician',
      responsibilities:
        'Installing, configuring, and maintaining surveillance and alarm systems, Troubleshooting and resolving technical issues, Providing training to end users',
      requirements:
        'Experience with surveillance and alarm systems, Strong technical skills, Ability to work independently and as part of a team',
    },
    {
      title: 'Security Consultant',
      responsibilities:
        'Conducting security assessments, Designing and implementing security plans, Providing training and education to clients',
      requirements:
        'Experience in security consulting, Strong analytical and problem-solving skills, Excellent communication and presentation abilities',
    },
  ]);

  return (
    <section className='pb-2 pt-10 md:py-[3rem]'>
      <div className={`${styles.maxWidth}`}>
        <div className='mx-auto px-4'>
          <h2 className='text-center text-2xl font-medium mb-4'>
            Contact Information
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='bg-primary p-4 md:p-8 rounded-lg shadow-lg text-white'>
              <h3 className='text-lg font-medium'>Address</h3>
              <p className=''>
                433 Callan Avenue Suite 200, San Leandro, Carlifornia 94577,
                United State of America.
              </p>
            </div>
            <div className='bg-primary p-4 md:p-8 rounded-lg shadow-lg text-white'>
              <h3 className='text-lg font-medium'>Phone</h3>
              <p className=''>(510) 706 1906</p>
            </div>
            <div className='bg-primary p-4 md:p-8 rounded-lg shadow-lg text-white'>
              <h3 className='text-lg font-medium'>Email</h3>
              <p className=''>info@guardenforcement.com</p>
            </div>
          </div>
        </div>
        <div className='mx-auto px-4 mt-[4rem]  md:mt-[6rem]'>
          <h2 className='text-center text-2xl font-medium mb-4'>Careers</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {careers.map((career, index) => (
              <div
                key={index}
                className='bg-white p-4 md:p-8 rounded-lg shadow-lg'
              >
                <h3 className='text-lg font-medium'>{career.title}</h3>
                <p className='text-gray-700'>
                  Responsibilities: {career.responsibilities}
                </p>
                <p className='text-gray-700'>
                  Requirements: {career.requirements}
                </p>
                <button className='bg-primary text-white py-2 px-4 rounded-lg hover:bg-primaryAlt mt-2'>
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className='mx-auto px-4 mt-[4rem]  md:mt-[6rem]'>
          <h2 className='text-center text-2xl font-medium mb-4'>
            Testimonials
          </h2>
          <div className=''>
            <div className='md:w-[60%] md:h-[300px] mx-auto bg-white p-4 md:p-8 rounded-lg shadow-lg'>
              <p className='text-gray-700 mb-4'>
                "{testimonials[currentIndex].text}"
              </p>
              <p className='text-gray-700 font-medium'>
                {testimonials[currentIndex].name} -{' '}
                {testimonials[currentIndex].title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
