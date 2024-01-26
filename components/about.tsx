'use client'

import React from 'react'
import { useSectionInView } from "@/lib/hooks";
import DotGrid from './utils/dotgrid';
import Image from 'next/image';
import myphoto from '@/public/myphoto.png'

function About() {
  const { ref } = useSectionInView("About");
  return (
    <div className='min-h-[100vh] relative w-full overflow-x-hidden bg-grey' id='about' ref={ref} >
      <DotGrid />
      <div className='absolute sm:top-[16%] top-[10%] '>
        <div className='flex sm:gap-[17%] gap-[8vh] sm:flex-row flex-col justify-center items-center '>
          <div className='sm:w-[25%] w-[50%] lg:h-[53vh] h-[30vh] bg-tri mt-[4%] shadow flex overflow-hidden rounded-xl items-center justify-center   '>
            <Image src={myphoto} alt='mypic' className='' />

          </div>
          <div className='sm:w-[40%] flex flex-col gap-5 justify-center items-start sm:text-start text-center w-[80%]'>

            <div className='w-full'>

              <h1 className='lg:text-6xl text-[2rem] text-pri  font-extrabold'><span className=' text-four '>About</span> Me <span className='text-pri'>:</span></h1>
            </div>
            <p className=' sm:font-medium font-bold sm:text-[1.2vw] text-[2.4vw] ' style={{zIndex:1}}>Hello, my name is Suraj Sachan and I am a B.Tech IT student expected to graduate in 2025. I am passionate about web development and have honed my skills in this area. I enjoy creating dynamic and user-friendly websites that engage audiences and deliver a great user experience.
            <br />
            <br />

              My goal is to work with an organization that values innovation, creativity, and collaboration. I am eager to apply my technical skills and contribute to projects that make a positive impact on society.
            <br />
            <br />
              In my free time, I enjoy staying up-to-date with the latest web development trends and technologies, and experimenting with new coding techniques. I am excited about the possibilities that lie ahead and look forward to connecting with like-minded professionals in the industry.</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About