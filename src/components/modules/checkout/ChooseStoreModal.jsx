import ButtonUI from '@/components/common/ButtonUI'
import React from 'react'
import { MapIcon } from '@/config/data/Icons'
import Image from 'next/image'

const ChooseStoreModal = () => {
  const dynamicData = [
    { city: 'Lahore', status: 'Closed', location: '97 SW 8th St, Miami, FL 33130, USA' },
    { city: 'Karachi', status: 'Closed', location: '97 SW 8th St, Miami, FL 33130, USA' },
    { city: 'Multan', status: 'Closed', location: '97 SW 8th St, Miami, FL 33130, USA' },
    { city: 'Murree', status: 'Opened', location: '97 SW 8th St, Miami, FL 33130, USA' },
  ]
  return (
    <div className='p-2'>
      <div className='text-3xl text-[#FFFFFF] mb-2'>
        Select a location
      </div>
      {dynamicData.map((item) => {
        return (
          <>
            <div className='flex justify-between items-center mt-4'>
              <div className='flex flex-col'>
                <div className='font-bold text-lg'>{item.city}</div>
                <div className='flex'>
                  <Image src='/images/timeIcon.png' className='mr-2' height={24} width={16} alt='location' />
                  <div className='text-[16px]'>
                    {item.status}
                  </div>
                </div>
                <div className='flex'>
                  <Image src='/images/location.png' className='mr-2' height={24} width={16} alt='location' />
                  <div className='text-[16px]'>
                    {item.location}
                  </div>
                </div>
              </div>
              <div>
                <ButtonUI className='rounded'>Order</ButtonUI>
              </div>
            </div>
            <div className='border mt-4 w-full border-[#5E5E5E]'> </div>
          </>
        )
      })
      }
    </div>
  )
}

export default ChooseStoreModal