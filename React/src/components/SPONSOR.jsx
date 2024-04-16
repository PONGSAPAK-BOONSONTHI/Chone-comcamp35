import React from 'react'
import { KMUTT, Coe, Advice, Thaidata, Applicad } from '../utils'
import LDA from '../data/LDA.json'

const SPONSOR = () => {
  return (
    <section>
      <div className='flex-center flex-col px-[10%] mb-[160px]'>

        <div className='flex items-end justify-center flex-row w-auto m-6 gap-6'>
          <img className='SponCol1 h-[140px]' src={KMUTT} alt="KMUTT" />
          <img className='SponCol1 h-[120px]' src={Coe} alt="Coe" />
        </div>

        <h1 className='titleMainA lg:titleMainB'>SPOMSOR</h1>
        
        <div className='grid flex-col-reverse w-[80%]'>

          <div className='mt-[34px] gap-6 duration-200 hover:shadowLearning'>
            <div className='w-full h-full flex-center flex-col LogoSpon'>
              <img className='max-w-full max-h-full h-[160px] object-contain' src={Advice} alt="Advice" />
            </div>
          </div>

          <div className='mt-[34px] gap-6 duration-200 hover:shadowLearning'>
            <div className='w-full h-full flex-center flex-col LogoSpon'>
              {LDA.map((LDA, id) => (<img className='max-w-full max-h-full h-[100px]' key={id} src={LDA.image} alt="LDA" />))}
            </div>
          </div>

          <div className='grid flex-col mt-[34px] gap-6 grid-col-2'> 
            <div className='flex-center flex-col LogoSpon duration-200 hover:shadowLearning'>
              <img className='max-w-full max-h-full w-[200px] h-[60px] object-contain' src={Thaidata} alt="Thaidata" />
            </div>
            <div className='flex-center flex-col LogoSpon duration-200 hover:shadowLearning'>
              <img className='max-w-full max-h-full w-[200px] h-[60px] object-contain' src={Applicad} alt="Applicad" />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default SPONSOR