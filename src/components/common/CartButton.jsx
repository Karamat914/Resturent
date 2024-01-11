import React from "react";
import { Button } from "@nextui-org/react";
import { Minus, Plus } from "lucide-react";

const CartButton = ({ size, quantity }) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <Button size={size ?? "sm"} variant="light" color="primary" isIconOnly>
          <Minus size={16} />
        </Button>
        <div>{quantity}</div>
        <Button size={size ?? "sm"} variant="light" color="primary" isIconOnly>
          <Plus size={16} />
        </Button>
      </div>
    </>
  );
};

export default CartButton;
