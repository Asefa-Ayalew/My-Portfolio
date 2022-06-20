import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {GiTie} from 'react-icons/gi'
import Image from 'next/image'
import React from 'react'
import {Button} from '@mantine/core';

function Sidebar() {
  return (
    <>
    <Image 
    src='/images/celinedion.PNG'
    alt='ase'
    height={128}
    width={128} 
    className="mx-auto rounded-full"
    />
    <h3 className='my-4 text-3xl font-medium tracking-wider'>
        <span>Asefa </span>
        Ayalew
    </h3>
    <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>Frontened web developer</p>
    <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full'
    href=''
    download='name'>
      <GiTie className='w-6 h-6'/>download resume</a>
    <div className='flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full'>
      <a href=''>
        <AiFillYoutube className='w-8 h-8 cursor-pointer' />
      </a>
      <a href=''>
        <AiFillGithub className='w-8 h-8 cursor-pointer' />
      </a>
      <a href=''>
        <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
      </a>
    </div>
    <div className='py-4 my-5 bg-gray-200' style={{marginLeft:'-1rem', marginRight: '-1rem'}}>
      <div className='flex items-center justify-center space-x-2'>
        <GoLocation />
        <span>Addis Ababa, Ethiopia</span>
        <p className='my-2'>asefa12a19@gmail.com</p>
        <p className='my-2'>+251961445484</p>
      </div>
      <Button className='bg-gradient-to-r'>Email me</Button>
      <Button className='bg-gradient-to-r'>Toggle theme</Button>
    </div>
    </>
  )
}

export default Sidebar