import React from 'react'
import conditions from '../data/conditions.json'

const Conditions = () => {
  return (
    <section id="section2">
      <div className='flex-center flex-col min-h-[100dvh] mt-[60px] px-[10%]'>

        <h1 className='titleMainA lg:titleMainB mt-[30px]'>Conditions</h1>

        <div className=' grid w-auto leading-6 my-[30px] gap-6 768:grid-col-2 lg:grid-col-4'>
          {conditions.map((conditions, id) => (
            <div key={id} className='h-[370px] p-6 border-[2px] border-[#505050]/[0.314] rounded-2xl bg-[#1a408d40] duration-200 hover:shadowLearning'>
              <div className='flex flex-col items-center justify-between'>
                <img className='w-auto max-w-full text-center rounded-2xl' src={conditions.gif} alt="gif" />
                <span className='mt-6 text-center text-sm text-[#edeef0] textN'>{conditions.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center'>
          <span className=' text-sm leading-[22.8px] font-normal text-[#edeef0] textN'>
            คุณสมบัติเพิ่มเติม : ม.ปลาย ศึกษาเกี่ยวกับสายวิทยาศาสตร์ คณิตศาสตร์ และ คอมพิวเตอร์ (หรือสายอื่น ๆ ที่ เกี่ยวข้องกับ คอมพิวเตอร์และเทคโนโลยี)
            <br />
            หรือ ปวช. ในสาขาคอมพิวเตอร์ธุรกิจ, สาขาช่างไฟฟ้ากำลัง (อิเล็กทรอนิกส์), สาขาเมคคาทรอนิกส์ และหุ่นยนต์ (หรือสายอื่น ๆ ที่เกี่ยวข้องกับคอมพิวเตอร์และเทคโนโลยี)
          </span>
        </div>

      </div>
    </section>
  )
}

export default Conditions