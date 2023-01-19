import React from 'react';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className='mb-4'>
        <label className='block text-gray-700 font-medium mb-2' htmlFor='name'>
          Full Name
        </label>
        <input
          className='bg-white border border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
          type='text'
          id='name'
          name='name'
          placeholder='Enter your full name'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700 font-medium mb-2' htmlFor='email'>
          Email
        </label>
        <input
          className='bg-white border border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
          type='email'
          id='email'
          name='email'
          placeholder='Enter your email address'
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 font-medium mb-2'
          htmlFor='subject'
        >
          Subject
        </label>
        <input
          className='bg-white border border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
          type='text'
          id='subject'
          name='subject'
          placeholder='Enter the subject'
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 font-medium mb-2'
          htmlFor='location'
        >
          Location
        </label>
        <input
          className='bg-white border border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
          type='text'
          id='location'
          name='location'
          placeholder='Enter your location'
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 font-medium mb-2'
          htmlFor='message'
        >
          Message
        </label>
        <textarea
          className='bg-white border border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
          id='message'
          name='message'
          placeholder='Enter your message'
        ></textarea>
      </div>
      <div className='text-center'>
        <button className='bg-primary hover:bg-primaryAlt text-white font-medium py-2 px-4 rounded-lg'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
