"use client"
import React, { useState } from 'react'
import GoogleMap from '@/components/modules/checkout/Map'
import ButtonUI from '@/components/common/ButtonUI'
import AddressCard from '@/components/modules/address/AddressCard'
import { Plus } from "lucide-react";
import Payment from '@/components/modules/checkout/Payment'
import ModalUI from '@/components/common/ModalUI'
import ChooseStoreModal from '@/components/modules/checkout/ChooseStoreModal'
import { useDisclosure } from '@nextui-org/react'

const Checkout = () => {
  const [showModal, setShowModal] = useState(false)
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure({
    defaultOpen: false,
  });
  // const onOpenChange = () => {

  // }
  return (
    <div className='container flex flex-col md:flex-row gap-x-3 justify-between pt-12 pb-6'>
      <ModalUI
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        backdrop="blur"
        onClose={onClose}
      >
        <ChooseStoreModal />
      </ModalUI>
      <div className='bg-[#232323] py-6 pl-6 rounded-lg md:w-2/3 w-full'>
        <div className='pr-6 relative'>
          <GoogleMap />
          <ButtonUI onClick={onOpen} className='absolute top-2 right-8'>Choose store</ButtonUI>
        </div>
        <div className='flex flex-col md:flex-row justify-between my-6 pr-6'>
          <div className='text-2xl font-bold md:mb-0 mb-2'>
            Delivery Address
          </div>
          <div>
            <ButtonUI startContent={<Plus />}>
              Add New
            </ButtonUI>
          </div>
        </div>
        <div className='flex flex-row nowrap gap-3 overflow-x-auto mb-6 pb-7'>
          <AddressCard isShowAction={false} />
          <AddressCard isShowAction={false} />
          <AddressCard isShowAction={false} />
          <AddressCard isShowAction={false} />
          <AddressCard isShowAction={false} />
        </div>
        <div className='font-bold text-2xl text-[#FFFFFF'>
          Preference Time
        </div>
        <div className='flex flex-row gap-x-2 my-2'>
          <ButtonUI className='min-w-[130px]'>
            Today
          </ButtonUI>
          <ButtonUI variant='bordered' className='rounded border-[#909090] text-[#FFFFFF] min-w-[130px]'>
            Tomorrow
          </ButtonUI>
        </div>
        <div className='flex flex-row nowrap overflow-hidden gap-x-2 mt-3 mb-6'>
          <ButtonUI className='min-w-[130px]'>
            Now
          </ButtonUI>
          <ButtonUI variant='bordered' className='rounded border-[#909090] text-[#FFFFFF] min-w-[130px]'>
            16:02 - 16:04
          </ButtonUI>
          <ButtonUI variant='bordered' className='rounded border-[#909090] text-[#FFFFFF] min-w-[130px]'>
            16:02 - 16:04
          </ButtonUI>
          <ButtonUI variant='bordered' className='rounded border-[#909090] text-[#FFFFFF] min-w-[130px]'>
            16:02 - 16:04
          </ButtonUI>
          <ButtonUI variant='bordered' className='rounded border-[#909090] text-[#FFFFFF] min-w-[130px]'>
            16:02 - 16:04
          </ButtonUI>
        </div>
      </div>
      <div className='w-full md:w-1/3 '>
        <Payment />
      </div>
    </div>
  )
}

export default Checkout