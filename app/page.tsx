import EmptyState from "./EmptyState";
import ClinetOnly from "./componets/ClinetOnly";
import Container from "./componets/Container";
import getListings from "./Actions/getListings";
import ListingCard from "./componets/Listings/ListingCard";
import { getCurrentUser } from "./Actions/getCurrentUser";

export default async function Home() {
  const isEmpty = true;
  const listings = await getListings();
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    return (
      <ClinetOnly>
        <EmptyState showReset />
      </ClinetOnly>
    );
  }
  return (
    <ClinetOnly>
      <Container>
        <div
          className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
  lg:grid-cols-4
  xl:grid-cols-5
  2xl:grid-cols-6
  gap-8
  "
        >
          {listings.map((listing: any) => {
            return <ListingCard
            key={listing.id}
            data={listing}
            currentUser={currentUser}
            />
          })}
        </div>
      </Container>
    </ClinetOnly>
  );
}
