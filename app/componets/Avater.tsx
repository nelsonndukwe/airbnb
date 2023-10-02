'use client'
import React from 'react'
import Image from 'next/image'

interface AvaterProps{
  src?: string | undefined | null
}

const Avater:React.FC<AvaterProps> = ({src}) => {
  return (
    <Image 
    className='rounded-full'
    height='30'
    width='30'
    alt='avater'
    src={src || '/images/placeholder.png'}
    />
  )
}

export default Avater