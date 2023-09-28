'use client'
import React from 'react'
import Image from 'next/image'

const Avater = () => {
  return (
    <Image 
    className='rounded-full'
    height='30'
    width='30'
    alt='avater'
    src='/images/placeholder.png'
    />
  )
}

export default Avater