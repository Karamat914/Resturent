"use client"
import React, { useEffect, useState } from "react";
import CartItemsCard from "@/components/modules/cart/CartItemsCard";
import RecommendedMenuCard from "@/components/modules/menu/RecommendedMenuCard";
import ButtonUI from "@/components/common/ButtonUI";
import { Checkbox, Chip, RadioGroup, Radio } from "@nextui-org/react";
import {  useSelector } from "@/redux/store";
import Link from "next/link";

const CartMain = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartitem = useSelector(state => state.cart?.cartitem);
  const calculateTotalPrice = (cartitem) => {
    return cartitem.reduce((total, item) => total + item.price, 0);
  };
  console.log("🚀 ~ CartMain ~ cartitemkkkkkkkkkkkkkkkkkkkkkkkkkkkc:", cartitem)
  const uniqueItems = Array.from(new Set(cartitem.map((item) => item.id))).map((id) => ({
    item: cartitem.find((item) => item.id === id),
    quantity: cartitem.filter((item) => item.id === id).length,
  }));
  useEffect(()=>{
  const res =  calculateTotalPrice(cartitem);
  setTotalPrice(res);
  },[cartitem]);
  return (
    <>
      <div className="container mt-10">
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-5">
          {uniqueItems.map(({ item, quantity }) => (
              <CartItemsCard key={item.id} obj={item} quantity={quantity} />
            ))}
            {/* <CartItemsCard />
            <CartItemsCard /> */}
          </div>
          <div className="rounded-2xl bg-[#232323] p-6">
            {/* <h2 className="text-2xl font-semibold">People Also Like</h2> */}
            {/* <div className="grid grid-cols-3 gap-4 mt-8">
              <RecommendedMenuCard className="bg-[#161616]" />
              <RecommendedMenuCard className="bg-[#161616]" />
              <RecommendedMenuCard className="bg-[#161616]" />
            </div> */}
            <div className="flex items-center justify-between mt-7">
              <h2 className="text-2xl font-semibold">Enter Promo Code</h2>
              <ButtonUI className="px-10">Apply</ButtonUI>
            </div>
            <div className="mt-14">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold">Tip the Crew</h2>
                <div className="flex flex-col md:flex-row gap-4">
  <Chip
    size="sm"
    radius="sm"
    className="p-6 text-xl font-semibold"
  >
    10%
  </Chip>
  <Chip
    size="sm"
    radius="sm"
    className="p-6 text-xl font-semibold"
  >
    20%
  </Chip>
  <Chip
    size="sm"
    radius="sm"
    className="p-6 text-xl font-semibold"
  >
    30%
  </Chip>
  <Chip
    size="sm"
    radius="sm"
    className="p-6 text-xl font-semibold"
  >
    40%
  </Chip>
</div>

                <Checkbox>I don’t want to pay tip.</Checkbox>
              </div>
              <div className="mt-8">
                <h2 className="text-2xl font-semibold">Delivery Option</h2>
                <RadioGroup orientation="horizontal" className="mt-2">
                  <Radio value="delivery">Delivery</Radio>
                  <Radio value="pickUp">Pick up</Radio>
                </RadioGroup>
              </div>
              <ul className="mt-10 space-y-5">
                <li className="flex items-center justify-between text-xl font-semibold">
                  <span>Items Price</span>
                  <span>$ {totalPrice}</span>
                </li>
                <li className="flex items-center justify-between text-xl font-semibold">
                  <span>Fee & Estimated Tax</span>
                  <span>$ 33.98</span>
                </li>
                <li className="flex items-center justify-between text-xl font-semibold">
                  <span>Staff Tip</span>
                  <span>$ 33.98</span>
                </li>
                <li className="flex items-center justify-between text-xl font-semibold">
                  <span>Delivery Fee</span>
                  <span>$ 33.98</span>
                </li>
                <div className="border border-dashed border-primary" />
                <li className="flex items-center justify-between text-xl font-semibold text-primary">
                  <span>Total Amount</span>
                  <span>$55.59</span>
                </li>
                <ButtonUI fullWidth>
                  <Link href='/checkout'> 
                    Continue Checkout
                  </Link>
                </ButtonUI>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartMain;
