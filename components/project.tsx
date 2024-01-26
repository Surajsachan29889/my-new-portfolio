'use client';
import React from 'react'
import Timeline from '@/components/utils/verticletimeline'
import { useSectionInView } from "@/lib/hooks";


function Project() {
    const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section className='min-h-[200vh] w-full px-[2rem]' id='projects' ref={ref}>
        <Timeline/>

    </section>
  )
}

export default Project