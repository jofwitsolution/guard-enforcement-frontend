import React, { useRef, useEffect } from 'react';
// import styles from './../styles/tailwind/index';

const FullPageCarousel = () => {
  const item_1 = useRef();
  // const item_2 = useRef();
  // const item_3 = useRef();

  const carouselItems = [item_1];

  let intervalId = 0;
  let count = 0;

  function playCarousel() {
    for (let i = 0; i < carouselItems.length; i++) {
      if (true) {
        carouselItems[i].current.style.opacity = '1';
        carouselItems[i].current.style.transform = 'scale(1)';
        continue;
      }
      carouselItems[i].current.style.transform = 'scale(0)';
      carouselItems[i].current.style.opacity = '0';
    }

    count = count + 1;
    count = count === 3 ? 0 : count;
  }

  intervalId = setInterval(playCarousel, 15000);

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <div
      className='h-[40vh] md:h-screen landscape:h-screen fullpage-carousel__wrapper '
      id='top'
    >
      <div
        ref={item_1}
        className='h-[40vh] md:h-screen landscape:h-screen fullpage-carousel__item fullpage-carousel__item-1'
      >
        <div className='text-white md:w-[70%] lg:w-[55%] mx-auto px-4 flex flex-col items-start justify-items-end'>
          <span
            className={`text-[2rem] md:text-[4rem] text-start leading-[1.2] font-bold md:mb-8`}
          >
            Your Safety is Our Priority
          </span>
          <span className='hidden md:inline'>
            Security cultivates situational awareness and maintains balance.
            Without security, individuals often become complacent and miss
            unusual behavior of civilians, employees and others around them.
            Awareness is an ongoing activity, and people want to do the right
            thing, so security guides a positive and proactive culture.{' '}
          </span>
        </div>
      </div>
      {/* <div
        ref={item_2}
        className='fullpage-carousel__item fullpage-carousel__item-2 h-[40vh] md:h-screen landscape:h-screen'
      >
        <div className='text-white w-[96%] md:w-[70%] lg:w-[55%] mx-auto flex flex-col items-start'>
          <span
            className={`text-[2rem] md:text-[4rem] leading-[1.2] font-bold md:mb-8`}
          >
            Your Safety is Our Priority
          </span>
          <span className='hidden md:inline'>
            Security officers offer a physical visual deterrent from crime. The
            presence of even one officer will dramatically reduce the rates of
            crime and prevent the likelihood of an assailant inflicting harm.
            When security personnel catch someone causing trouble on your
            property, they can intercept and stop the perpetrator immediately.
          </span>
        </div>
      </div>
      <div
        ref={item_3}
        className='fullpage-carousel__item fullpage-carousel__item-3 h-[40vh] md:h-screen landscape:h-screen'
      >
        <div className='text-white w-[96%] md:w-[70%] lg:w-[55%] mx-auto flex flex-col items-start'>
          <span
            className={`text-[2rem] md:text-[4rem] leading-[1.2] font-bold md:mb-8`}
          >
            Your Safety is Our Priority
          </span>
          <span className='hidden md:inline'>
            The reaction of security is immediate; every second counts when it
            comes to incident response. It is paramount that the threat is
            discovered and remediated as quickly as possible. Security is
            crucial in gaining control of a situation while awaiting the arrival
            of the police or emergency medical services.
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default FullPageCarousel;
