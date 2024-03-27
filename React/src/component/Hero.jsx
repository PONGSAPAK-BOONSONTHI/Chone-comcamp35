import React from 'react'
import { logoImage } from '../utils'


const Hero = () => {
  return (
    <section className='flex-center hero flex-col bg-bottom bg-cover'>
      
      <div className='hero-image relative pointer-events-none select-none'>
        <div className='shadow absolute rounded-[50%] z-0 w-[320px] h-[320px]' ></div>
        <img className='isolate z-10' src={logoImage} width={640} alt="logoImage" />
        <div className='KMUTT absolute textZ text-2xl bottom-[50px] right-[20px] text-[#ffd541]'>KMUTT</div>
      </div>

      <h1 className='title relative whitespace-nowrap'>7-11 April 2024</h1>

      <span class="w-[548px] textN text-xl font-normal text-center leading-[30px] text-[#edeef0] mb-6">
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