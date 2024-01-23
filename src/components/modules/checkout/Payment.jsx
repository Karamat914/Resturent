import ButtonUI from '@/components/common/ButtonUI'
import Image from 'next/image'
import React from 'react'

const Payment = () => {
  return (
    <div className='bg-[#232323] p-4 flex flex-col h-full rounded-lg w-full'>
      <div className='flex flex-row justify-between items-center mb-5'>
        <div>
          Payment Method
        </div>
        <ButtonUI className='text-[#B5B5B5] underline' variant="light">Edit</ButtonUI>
      </div>
      <div className='border border-[#06B906] pl-8 pb-6 pt-2 rounded-md pr-3 bg-[#383535]'>
        <div className='flex justify-end items-end'>
          <Image src="/images/checkIcon.png" width={18} height={18} alt="Check Icon" />
        </div>
        <div className='flex flex-row items-center justify-between'>
          <div>
            <Image src='/images/cardIcon.png' height={34} width={42} alt='card icon' />
          </div>
          <div className='flex flex-col'>
            <div className='text-[#939090] font-medium text-[20px]'>Visa</div>
            <div className='font-medium text-[16px]'>4242****4242</div>
          </div>
          <div className='text-[#B5B5B5] font-medium text-[20px]'>
            $52.58
          </div>
        </div>
      </div>
      <div className='text-[#939090] font-medium text-lg mt-6 leading-5'>
        Additional Instructions for delivery person.
        <br />
        Ex. ring the bell after drop off, call upon arrival etc.
      </div>
      <div className='mt-auto'>
        <ButtonUI size='lg' className='w-full'>
          Confirm Order
        </ButtonUI>
      </div>
    </div>
  )
}

export default Payment