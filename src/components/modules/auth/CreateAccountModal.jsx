"use client"
import React, { useState } from "react";
import ModalUI from "@/components/common/ModalUI";
import InputUI from "@/components/common/InputUI";
import ButtonUI from "@/components/common/ButtonUI";
import { useDisclosure } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "@/redux/store";
import { signUp } from "@/redux/slices/user";
import { toast } from 'react-toastify';

const CreateAccountModal = ({ opncreate, setOpncreate }) => {
  const [restaurantId, setRestaurantId] = useState(8);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [rcode, setRcode] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const { isOpen, onClose, onOpenChange } = useDisclosure({
    defaultOpen: false,
  });
  const validateEmail = (value) => {
    // Add your email validation logic here
    // Example: Check if the email is valid using a regular expression
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };
  
  const validateMobile = (value) => {
    // Add your mobile validation logic here
    // Example: Check if the mobile number has a valid format
    setMobile(value);
    const mobileRegex = /^[+]?[0-9()-\s]*$/;
    return mobileRegex.test(value);
  };
  
  const validatePassword = (value) => {
    setPassword(value);
    // Add your password validation logic here
    // Example: Check if the password meets certain criteria (length, complexity, etc.)
    return value.length >= 6; // Adjust the criteria as needed
  };
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.isLoading);
  const data = {
    f_name:fname,
    l_name:lname,
    email:email,
    phone:mobile,
    restaurant_id:restaurantId,
    password:password,
    referral_code:rcode
  }
  const handleSignup = async () => {
    
    try {
         // Perform input validations
    if (!validateEmail(email)) {
      toast.error('Invalid email format');
      return;
    }

    if (!validateMobile(mobile)) {
      toast.error('Invalid mobile number format');
      return;
    }

    if (!validatePassword(password)) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

      const response = dispatch(signUp(data));
      console.log("🚀 ~ handleSignup ~ response:", response)
      toast.success('Account Created successful!', { position: 'top-center' });

      setopenR(false);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };
  const handleclose = () => {
    setOpncreate(false);
  }
  return (
    <>
      <ModalUI
        isOpen={opncreate}
        onOpenChange={onOpenChange}
        isDismissable={false}
        backdrop="blur"
        // onClose={handleclose}
        hideCloseButton={true}
      >
        <div className="pt-5 pb-10">
        <ButtonUI
            isIconOnly
            color="default"
            className="absolute rounded-none top-1 right-5"
            onClick={handleclose}
          >
            <X />
          </ButtonUI>
          <div className=" border-b border-gray-500">
            <h3 className="text-xl font-semibold">Create Account</h3>
          </div>
          <form className="mt-10 space-y-8">
            <InputUI
              onChange={setFname}
              name="fname"
              label="First Name"
              placeholder="Enter First Name"
              placement="outside"
            />
            <InputUI
            onChange={setLname}
              name="lname"
              label="Last Name"
              placeholder="Enter FLast Name"
              placement="outside"
            />
            <InputUI
             onChange={(value) => { validateEmail(value); }}
              name="email"
              label="Email"
              placeholder="Enter Email"
              placement="outside"
            />
            <InputUI
             onChange={(value) => { validateMobile(value); }}
              name="mobile"
              label="Mobile Number"
              placeholder="+1(111) 111-1111"
              placement="outside"
            />
            <InputUI
             onChange={setRcode}
              name="rcode"
              label="Refer Code (Optional)"
              placeholder="Refrel Code"
              placement="outside"
            />
            <InputUI
             onChange={(value) => { validatePassword(value); }}
              name="password"
              label="Password"
              placeholder="Enter Password"
              type='pasword'
              placement="outside"
            />
            <InputUI
             onChange={setCpassword}
              name="cpassword"
              label="Confirm Password"
              placeholder="Enter Confirm Password"
              type='pasword'
              placement="outside"
            />
            <ButtonUI isLoading={loading} onClick={handleSignup} variant="bordered" size="lg" className="w-full">
              Continue
            </ButtonUI>
          </form>
          {/* <h6 className="text-center text-[#828282] mt-5">
            Don’t have an account yet?&nbsp;
            <span className="text-primary">Log In</span>
          </h6> */}
        </div>
      </ModalUI>
    </>
  );
};

export default CreateAccountModal;
