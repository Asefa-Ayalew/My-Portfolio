import Link from 'next/link';
import React, { useState } from 'react'
import { string } from 'yup';

function Navbar() {
    const [activeItem, setActiveItem] = useState<string>('');
  return (
    <div>
        <span className='font-bold text-green-400'>{activeItem}</span>
        <div className='text-red font-lg'>
            {activeItem!=='About' && (
                    <Link href='/'>
                <a>
                    <span onClick={()=>setA}>
                        About
                    </span>
                </a>
            </Link>
                )}
            {activeItem!=='Projects' && (
                    <Link href='/projects'>
                <a>
                    <span onClick={()=>setA}>
                        Projects
                    </span>
                </a>
            </Link>
                )}
            {activeItem!=='Resume' && (
                    <Link href='/resume'>
                <a>
                    <span onClick={()=>setA}>
                        Resume
                    </span>
                </a>
            </Link>
                )}
            
        </div>
    </div>
  )
}

export default Navbar