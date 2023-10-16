import prisma from "@/app/Libs/PrismaDb";

export default async function getListings() {
  try {
    const listings = await prisma.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

const SafeListing = listings.map((listing)=> ({
  ...listing,
  createdAt: listing.createdAt.toISOString()
}))

return SafeListing
  } catch (error: any) {
    throw new Error(error);
  }
}
