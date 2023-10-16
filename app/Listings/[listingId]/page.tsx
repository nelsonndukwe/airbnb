import React from 'react' 
import getListingById from '@/app/Actions/getListing'


interface IParams {
  listingId?: string
}
const page = async ({params}:{params: IParams}) => {

  const listing = await getListingById(params)
  return (
    <div>{listing?.title}</div>
  )
}

export default page