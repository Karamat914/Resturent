import React from "react";
import ButtonUI from "@/components/common/ButtonUI";
import { HomeIcon, HorizontalMenuIcon, MapIcon } from "@/config/data/Icons";

const AddressCard = ({ isShowAction = true }) => {
  return (
    <>
      <div className="flex items-center justify-between px-8 bg-[#383535] py-4 rounded-lg max-h-[101px] min-w-[355px]">
        <div className="flex flex-row items-center gap-5">
          <div>
            <HomeIcon />
          </div>
          <div className='flex flex-col'>
            <h2 className="text-sm font-medium text-gray-400">Home</h2>
            <h3 className='text-[12px]'>931 SW 2nd Ave, Gainesville. FL 32601, USA</h3>
          </div>
          {
            isShowAction ?
              <div className="flex items-center gap-4">
                <MapIcon />
                <ButtonUI isIconOnly size="lg" variant="light">
                  <HorizontalMenuIcon />
                </ButtonUI>
              </div>
              : ''
          }
        </div>
      </div>
    </>
  );
};

export default AddressCard;
