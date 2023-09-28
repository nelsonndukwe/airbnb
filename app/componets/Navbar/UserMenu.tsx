"use client";

import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avater from "../Avater";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";



const UserMenu = () => {
  const regsitermodal = useRegisterModal()

  const [open, setOpen] = useState(false);


  const toogle = useCallback(() => {
    setOpen((value) => !value);
  }, [open]);


  
  return (
    <div className="relative gap-3 ">
      <div className="flex flex-row items-center ">
        <div
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer "
          onClick={() => {}}
        >
          Airbnb Your Home
        </div>
        <div
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center rounded-full cursor-pointer hover:shadow-md transition"
          onClick={toogle}
        >
          <AiOutlineMenu />
          <div className="hidden md:block ml-3">
            <Avater />
          </div>
        </div>
      </div>

      {open && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm ">
          <div className="flex flex-col cursor-pointer ">
            <>
              <MenuItem onClick={regsitermodal.onOpen} label="login" />

              <MenuItem onClick={regsitermodal.onOpen} label="Sign Up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
