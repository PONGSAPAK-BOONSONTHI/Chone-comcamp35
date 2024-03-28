import React from 'react'
import {HTNL, C, Reactimg, Python, Figma, Rocket} from '../utils'
import learning from '../data/learning.json'

const Learning = () => {
  return (
    <section id="section1">
      <div> 

        <h1 className='titleMainA lg:titleMainB'>Learning</h1>

        <div className='grid w-auto mt-6 px-[10%] gap-6'>
          {learning.map((item, id) => (
            <div key={id} className='px-[45px] py-[24px] border-[1px] border-[#505050]/[0.314] rounded-2xl bg-[#1a408d40] hover:shadowLearning'>
              <div className='flex items-center justify-start gap-[10px] max-768:grid max-768:justify-items-center'>
                <img src={item.imageSrc} className='w-[100px] h-[100px] select-none pointer-events-none' alt="imageSrc" />
                <div className='grid gap-3'>
                  <span className='text1Learning 520:text1Learning520 768:text1Learning768 max-768:text-center'>{item.title}</span>
                  <span className='text2Learning max-768:text-center'>{item.description}</span>
                </div>  
              </div>
            </div>
          ))}
          </div>

      </div>
    </section>
  )
}

export default Learning
