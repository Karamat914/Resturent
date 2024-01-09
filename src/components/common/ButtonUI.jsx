"use client";

import { Button } from "@nextui-org/button";

const ButtonUI = ({
  children,
  color,
  variant,
  startContent,
  endContent,
  isIconOnly,
  size,
  onClick,
  className,
  type,
  isLoading,
  fullWidth,
  disabled,
}) => {
  return (
    <>
      <Button
        color={color ?? "primary"}
        variant={variant ?? "solid"}
        startContent={startContent}
        endContent={endContent}
        isIconOnly={isIconOnly ?? false}
        size={size ?? "md"}
        radius="sm"
        onClick={onClick}
        className={`${className} font-bold`}
        type={type ?? "button"}
        isLoading={isLoading}
        fullWidth={fullWidth}
        disabled={disabled}
      >
        {children}
      </Button>
    </>
  );
};

export default ButtonUI;
