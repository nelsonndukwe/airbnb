"use client";

import React from "react";
import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBoatFishing,
  GiIsland,
  GiWindmill,
  GiCastle,
  GiForestCamp,
  GiCaveEntrance,
  GiCactus,
  GiBarn,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import CategoryBox from "../CategoryBox";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close eto the beach",
  },

  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills",
  },

  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property modern",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the country sides",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property has a pool",
  },

  {
    label: "islands",
    icon: GiIsland,
    description: "This property is on an island",
  },

  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is close to a lake",
  },

  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activities",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is in a castle",
  },

  {
    label: "Castles",
    icon: GiForestCamp,
    description: "This property has camping activities",
  },

  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in a snow enviromrnt",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This property is in a Cave",
  },

  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in a Desert",
  },

  {
    label: "Barn",
    icon: GiBarn,
    description: "This property is in a Barn",
  },

  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is Luxurious",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");

  const pathName = usePathname();

  const isMainPage = pathName === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto scroll	">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;