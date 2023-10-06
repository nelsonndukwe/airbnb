"use client";

import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avater from "../Avater";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import useRentModal from "@/app/hooks/useRentModal";

interface userMenuprops {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<userMenuprops> = ({ currentUser }) => {
  const regsitermodal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal()

  const [open, setOpen] = useState(false);

  const toogle = useCallback(() => {
    setOpen((value) => !value);
  }, [open]);

const onRent = useCallback(
  () => {
    if(!currentUser){
      return loginModal.onOpen()
    }

    // Open Rent Modal
rentModal.onOpen()

  },
  [currentUser, loginModal, rentModal],
)


  return (
    <div className="relative gap-3 ">
      <div className="flex flex-row items-center ">
        <div
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer "
          onClick={onRent}
        >
          Airbnb Your Home
        </div>
        <div
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center rounded-full cursor-pointer hover:shadow-md transition"
          onClick={toogle}
        >
          <AiOutlineMenu />
          <div className="hidden md:block ml-3">
            <Avater src={currentUser?.image}/>
          </div>
        </div>
      </div>

      {open && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm ">
          <div className="flex flex-col cursor-pointer ">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="My Trips" />

                <MenuItem onClick={() => {}} label="My Favorites" />

                <MenuItem onClick={() => {}} label="My Reservations" />

                <MenuItem onClick={() => {}} label="My Properties" />

                <MenuItem onClick={rentModal.onOpen} label="airbnb My Home" />
                <MenuItem onClick={() => signOut()} label="Sign Out" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="login" />

                <MenuItem onClick={regsitermodal.onOpen} label="Sign Up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
