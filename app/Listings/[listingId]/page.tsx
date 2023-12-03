import React from 'react' 
import getListingById from '@/app/Actions/getListingById'
import ClinetOnly from '@/app/componets/ClinetOnly'
import EmptyState from '@/app/EmptyState'
import { getCurrentUser } from '@/app/Actions/getCurrentUser'
import ListingClient from './ListingClient'


interface IParams {
  listingId?: string
}
const page = async ({params}:{params: IParams}) => {

  const listing = await getListingById(params)
  const currentUser = await getCurrentUser()

  
if(!listing){
  return (
    <ClinetOnly>
      <EmptyState />
    </ClinetOnly>
  )
}


  return (
    <ClinetOnly>
    <ListingClient
    listing={listing}
    currentUser={currentUser}
    />

   
  </ClinetOnly>
  )
}

export default page