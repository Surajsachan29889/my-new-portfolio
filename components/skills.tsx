import React from 'react'
import { skills } from '@/lib/data'
import { useSectionInView } from "@/lib/hooks";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Skills() {
    const { ref } = useSectionInView("Skills", 0.5);
    return (
        <section className='min-h-[100vh] w-full relative overflow-hidden'  ref={ref} id='skills' >
            <div className='flex flex-col'>
                <div className='flex justify-center  items-center h-[15vh] '>
                    <div className='sm:w-[20%] w-[40%] h-[12vh] bg-transparent  dark:border-black/40 dark:bg-opacity-75 rounded-xl icon flex justify-center items-center'>
                        <h1 className='text-6xl text-four font-bold '> <span className='text-pri'>S</span>kills</h1>
                    </div>
                </div>
                <div className='h-[80vh] flex justify-center items-center '>
                    <div className='h-[70vh] w-[70%] flex justify-center sm:pl-0  items-center' >
                        <div className=' h-[55vh] w-[70%] grid sm:grid-rows-3 sm:gap-5 gap-4 grid-rows-5 grid-flow-col g'>
                            {                               
                                skills.map((skill,idx)=>{
                                    return(
                                            <div className='flex flex-col  items-center justify-center h-[7rem] w-[7rem] bg-tri dark:bg-tri dark:border-black/40 dark:bg-opacity-75 rounded-xl shadow-xl '>
                                                <div className=' sm:-[5.5rem] w-[3.5rem] flex justify-center items-center sm:h-[5.5rem] h-[3.5rem] '>
                                                    <img src={skill.icon} alt='skill-icon'/>
                                                </div>
                                                <span className='font-bold sm:block hidden dark:text-[black]'>{skill.name}</span>
                                            </div>
                                        
                                    )
                                })                            
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills