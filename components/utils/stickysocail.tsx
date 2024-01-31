import React from 'react'
import { social } from '@/lib/data'
import Link from 'next/link'


function Stickysocail() {
  return (
    <div className='h-[35vh] w-[5%] z-[10000] gap-6 shadow sm:flex hidden  rounded-full justify-center items-center bg-white shadow-lg sticky top-[33%] left-8  flex-col' >
        {
            social.map((handels,idx)=>{
                return(
                    <div key={idx} className=''>
                        <div className='bg-white hover:translate-x-10 duration-[.5s]  icon-shadow p-4 rounded-full '>
                            <Link href={handels.links}>
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