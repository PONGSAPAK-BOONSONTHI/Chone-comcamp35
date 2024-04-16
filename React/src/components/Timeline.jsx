import React from 'react';
import timeline from '../data/timeline.json';

const Timeline = () => {
  return (
    <section id="section3">
      <div className='flex-center flex-col min-h-[100dvh] mt-[60px] px-[10%]'>

        <h1 className='titleMainA lg:titleMainB'>timeline</h1>

        <div className='w-full grid flex-col mt-6 gap-6 768:grid-col-2 lg:grid-col-4 lg:mt-40'>
          {timeline.map((timeline, id) => (
            <div key={id} className='relative flex-center flex-col border-[1px] pt-12 pb-6 px-6 mt-12 rounded-[10px] bg-[#1a408d40] border-[#505050]/[0.314] duration-200 hover:shadowLearning'>
              <img className='absolute top-[-90px]' width={120} height={120} src={timeline.imageSrc} alt="icon" style={id >= 0 && id <= 2 ? {filter: 'grayscale(100%)'} : {}} />
              <span className='text-center text-sm text-[#edeef0] font-normal leading-6 textN'>{timeline.title}</span>
              <h1 className='text-center text-[19px] text-[#edeef0] font-bold leading-6 textPR'>{timeline.description}</h1>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Timeline;







