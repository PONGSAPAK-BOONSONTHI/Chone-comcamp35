import React, { useState } from 'react';
import faq from '../data/faq.json';

const FAQ = () => {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleAccordion = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter(expandedId => expandedId !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  return (
    <section id="section4">
      <div className='flex-center flex-col min-h-[100dvh] px-[10%] gap-6'>

        <h1 className='titleMainA'>FAQ</h1>

        <div className='w-full flex flex-col gap-6'>
          {faq.map((faq, id) => (
            <div
              className={`overflow-hidden rounded-2xl border-[1px] bg-[#1a408d40] border-[#505050]/[0.314] duration-200 hover:shadow
              ${expandedIds.includes(id) ? 'active' : ''}`}
              key={id}>
              <button className='flex items-center justify-between w-full textPB text-[18px] text-white text-left py-4 px-7 bg-transparent '
                id={`accordion-button-${id}`}
                aria-controls={`accordion-content-${id}`}
                aria-expanded={expandedIds.includes(id)}
                onClick={() => toggleAccordion(id)}
              >
                {faq.Question}
                <svg
                  width={15}
                  height={15}
                  className={expandedIds.includes(id) ? 'rotate-icon rotate180' : 'rotate-icon'}
                  aria-hidden='true'
                >
                  <path d={faq.button} fill='currentColor' fillRule='evenodd' clipRule='evenodd' />

                </svg>
              </button>

              <div
                id={`accordion-content-${id}`}
                className={`accordion-content max-h-0 overflow-hidden transition-max-height duration-300 ${expandedIds.includes(id) ? 'active' : ''}`}
                aria-hidden={!expandedIds.includes(id)}
              >
                <div className='mx-7 mb-3 pt-3 border-t-[1px] border-[#505050]/[0.314] textN text-base leading-6 text-white'>{faq.Answer}</div>

              </div>
            </div>
          ))}
        </div>

        <a className='cursor-pointer px-3 py-[6px] textN text-sm font-normal text-white duration-200 hover:a'>คำถามเพิ่มเติม</a>

      </div>
    </section>
  );
}

export default FAQ;








