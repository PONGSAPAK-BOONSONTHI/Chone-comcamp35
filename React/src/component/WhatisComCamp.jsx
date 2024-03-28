import React from 'react'
import { PcImage } from '../utils'

const WhatisComCamp = () => {
  return (
    <section>
      <div className='flex-center flex-col-reverse min-h-[100dvh] px-[10%] gap-[22.8px] max- lg:justify-center lg:flex-row lg:gap-[60.8px]'>
        
        <div>
          <h1 className='titleMainA lg:titleMainB lg:text-left'>What is ComCamp?</h1>
          <p className='text-center textN text-2base font-normal text-[#edeef0] max-lg:text-base max-lg:indent-0 lg:text-left lg:indent-[50px]'>
            โครงการฝึกอบรมเชิงปฏิบัติการคอมพิวเตอร์เบื้องต้น หรือ “ComCamp” คือค่ายที่ทางภาควิชาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรีได้จัดขึ้น โดยภายในค่ายจะมีทั้งการแนะแนวการศึกษาต่อและกิจกรรมต่าง ๆ เพื่อให้น้อง ๆ ได้เข้ามารู้จักกับภาควิชาวิศวกรรมคอมพิวเตอร์มากขึ้น ซึ่งจะทำให้น้อง ๆ ได้รับความรู้และแรงบันดาลใจ พร้อมกับความสนุกสนานจากกิจกรรมสันทนาการสุดพิเศษจากพี่ ๆ CPE อีกด้วย
          </p>
        </div>

        <div className='relative select-none duration-200 hover:scale-[1.02]'>
          <div className='shadowWCC'></div>
          <img className='isolate min-w-full max-w-none' width={350} src={PcImage} alt="PcImage" />
        </div>

      </div>
    </section>
  )
}

export default WhatisComCamp