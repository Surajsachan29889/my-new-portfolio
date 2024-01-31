import React from 'react'
import { social } from '@/lib/data'
import Link from 'next/link'


function Stickysocail() {
  return (
    <div className='h-[35vh] w-[5%] z-[10000] gap-6 dark:border-[2px] dark:border-[grey]  sm:flex hidden  rounded-full justify-center items-center bg-white dark:bg-black shadow-lg sticky top-[33%] left-8  flex-col' >
        {
            social.map((handels,idx)=>{
                return(
                    <div key={idx} className=''>
                        <div className='bg-white  hover:bg-[#b9b8b8] duration-100   p-4 rounded-full '>
                            <Link href={handels.links} target='_blank' rel="noopener noreferrer">
                                <img src={handels.icon}  alt={handels.name}/>
                            </Link>
                        </div>
                       
                    </div>

                )
            })
        }

    </div>
  )
}

export default Stickysocail