"use client";

import Container from "@/app/componets/Container";
import ListingHead from "@/app/componets/Listings/ListingHead";
import ListingInfo from "@/app/componets/Listings/ListingInfo";
import { categories } from "@/app/componets/Navbar/Categories";
import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeListing, SafeUser } from "@/app/types";
import { Reservation } from "@prisma/client";
import { differenceInCalendarDays, eachDayOfInterval } from "date-fns";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ListingReservation from "@/app/componets/Listings/ListingReservation";

const initialDateRange = {
  start: new Date(),
  end: new Date(),
  key: "selection",
};
interface ListingClientProps {
  reservations?: Reservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  reservations = [],
  listing,
  currentUser,
}) => {
  const loginModal = useLoginModal();
  const router = useRouter();
  const disabledDates = useMemo(() => {
    let dates: Date[] = [];

    reservations.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });

      dates = [...dates, ...range];
    });

    return dates;
  }, [reservations]);

  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(listing.price);
  const [dateRange, setDateRange] = useState(initialDateRange);

  const onCreateReservation = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();

      setIsLoading(true);

      axios
        .post("/api/reservations", {
          totalPrice,
          startDate: dateRange.start,
          endDate: dateRange.end,
          listingid: listing?.id,
        })
        .then(() => {
          toast.success("Listing Reserved");
          setDateRange(initialDateRange);

          /////// redirect to /trips ///

          router.refresh();
        })
        .catch((error) => {
          toast.error("Something Went Wrong");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [totalPrice, dateRange, listing?.id, router, currentUser, loginModal]);

  useEffect(() => {
    if (dateRange.key && dateRange.end) {
      const dayCount = differenceInCalendarDays(dateRange.end, dateRange.start);

if(dayCount && listing.price)
setTotalPrice(dayCount * listing.price)
    }else{
      setTotalPrice(listing.price)
    }
  }, [dateRange, listing.price]);

  const category: any = useMemo(() => {
    return categories.find((item) => item.label == listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            currentUser={currentUser}
            id={listing.id}
          />

          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />

            <div className="order-first mb-10 md:order-last md:col-span-3">
              <ListingReservation
              price={listing.price}
              totalPrice={totalPrice}
              dateRange={dateRange}
              onChangeDate={(value) => setDateRange(value)}
              onSubmit={onCreateReservation}
              disabled={isLoading}
              disabledDates={disabledDates}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
