import React from 'react'
import contact from '../data/contact.json'
import { Facebook, iG, Tiktok } from '../utils'

const Contact = () => {
  return (
    <section id="section5">
      <div className='flex-center flex-col px-[10%] mb-[42px]'>

        <h1 className='titleMainA lg:titleMainB'>CONTACT</h1>

        <div className='w-full flex flex-row justify-center mt-6 gap-6 max-768:flex-col'>
          
          <div className='flex flex-col justify-center rounded-2xl border-[1px] bg-[#1a408d40] border-[#505050]/[0.314] gap-6 p-6 duration-300 hover:shadow'>
            {contact.map((contact, id) => (
              <div key={id}>
                <h1 className='text-sm leading-[20.9px] font-bold text-[#edeef0] fontN'>{contact.name}</h1>
                <p className='text-sm pl-3 text-[#edeef0] fontN'>{contact.number}</p>
                <p className='text-sm pl-3 text-[#edeef0] fontN'>{contact.email}</p>
              </div>
            ))}
          </div>

          <div className='w-full flex flex-col justify-between gap-6'>
            
            <div className='flex-center flex-row rounded-2xl border-[1px] bg-[#1a408d40] border-[#505050]/[0.314] gap-9 py-6 duration-300 hover:shadow'>
              <a href="https://www.facebook.com/KMUTTcomcamp"><img className='w-[50px] h-[50px] duration-200 hover:sectionBig' src={Facebook} alt="Facebook" /></a>
              <a href="https://www.instagram.com/comcamp.kmutt"><img className='w-[50px] h-[50px] duration-200 hover:sectionBig' src={iG} alt="iG" /></a>
              <a href="https://www.tiktok.com/@comcamp.kmutt"><img className='w-[50px] h-[50px] duration-200 hover:sectionBig' src={Tiktok} alt="Tiktok" /></a>
            </div>

            <div className='h-full flex-center flex-col rounded-2xl border-[1px] bg-[#1a408d40] border-[#505050]/[0.314] p-6 duration-300 hover:shadow'>
              <h1 className='mb-[15.2px] text-center text-[22.8px] leading-[28.5px] tracking-[-0.1425px] font-bold text-[#edeef0] textN lg:Address'>Address</h1>
              <span className='text-sm leading-[22.8px] text-[#edeef0] textN'>ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</span>
              <span className='text-sm leading-[22.8px] text-[#edeef0] textN'>ชั้น 10 อาคารวิศววัฒนะ เลขที่ 126 ถ.ประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140</span>
              <div className='register1'><a>ดูในแผนที่</a></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact