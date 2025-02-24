import React from 'react'

function Row({ data, isActive, onClick }) { 
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col w-[90%]'>
        <div onClick={onClick} className='h-[72px] bg-[#2d2d2d] hover:bg-[#414141] cursor-pointer flex flex-row justify-between items-center px-7'>
          <p className='text-white text-2xl'>{data.question}</p>
          <p className='text-white text-3xl'>{isActive ? '-' : '+'}</p> 
        </div>
        {isActive && (
          <div className='bg-[#2d2d2d] px-7 py-3 mt-1'>
            <p className='text-gray-200 text-xl'>{data.answer}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Row
