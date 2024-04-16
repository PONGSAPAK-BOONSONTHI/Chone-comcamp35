import React from 'react'
import { logoImage } from '../utils'


const Hero = () => {
  return (
    <section id='logoImage' className='flex-center hero flex-col bg-bottom bg-cover'>
      
      <div className='hero-image relative pointer-events-none select-none'>
        <div className='shadowHero absolute rounded-[50%] z-0 w-[320px] h-[320px]' ></div>
        <img className='isolate z-10 max-mb2:w-[300px]' src={logoImage} width={640} alt="logoImage" />
        <div className='KMUTT absolute textZ text-2xl bottom-[30px] right-[20px] text-[#ffd541]  max-mb:hidden'>KMUTT</div>
      </div>

      <h1 className='title relative whitespace-nowrap mb-3 max-mb:text-[40px] max-mb:mb-0'>7-11 April 2024</h1>

      <span class="w-[548px] textN text-xl font-normal text-center leading-[30px] text-[#edeef0] mb-6 max-mb2:text-base  max-mb2:w-full max-mb2:px-[25px] max-mb2:leading-6">
        เมื่อโลกโปรเเกรมมอนกำลังจะล่มสลาย
        <br />
        เหล่าหัวหน้ากิลด์จึงได้ทำการรวบรวมบรรดาเด็กน้อยผู้มีพรสวรรค์ที่ซ่อนเร้นเพื่อทำการฝึกฝนและปลุกทักษะที่หลับใหลให้ตื่นขึ้น !
        <br />
        พร้อมรวมพลังกันกอบกู้โลกใบนี้เอาไว้ !!
      </span>

      <div>
        <a className='cursor-pointer register hover:-register'>ลงทะเบียน</a>
      </div>

    </section>
  )
}

export default Hero