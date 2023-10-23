"use client";

import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  guestCount: number;
  bathroomCount: number;
  roomCount: number;
  category: {
    icon: IconType;
    label: string;
    description: string | undefined;
  };
  locationValue: string;
}

const ListingInfo = () => {
  return <div>ListingInfo</div>;
};

export default ListingInfo;
