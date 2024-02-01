import React,{useEffect} from 'react'
import { skills } from '@/lib/data'
import Image from 'next/image'
import back from '@/public/back.jpg'
import { useSectionInView } from "@/lib/hooks";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Skills() {
    const { ref } = useSectionInView("Skills", 0.5);
    useEffect(()=>{
        gsap.fromTo(".back",{
            scale:8
        },{
            scale:1,
            scrollTrigger:{
                trigger:".back",
                scrub:2,
                // start:"70%",
                // markers: true

            }
        })
    },[])
    return (
        <section className='min-h-[100vh] w-full relative overflow-hidden'  ref={ref} id='skills' >
            {/* <Image src={back} alt="skill-background" className='absolute back z-[-100] top-0 h-[100%] w-full ' /> */}
            <div className='sm:h-[20vh] h-[10vh] sm:block hidden sm:w-[10%] w-[15%] bg-pri rounded-lg bigblock absolute top-[50%] left-[80%] '></div>
            <div className='h-[5vh] w-[2.5%] sm:block hidden bg-four midblock absolute top-[30%] left-[90%] '></div>
            <div className='h-[2vh] w-[1%] sm:block hidden bg-black dark:bg-white smallblock absolute top-[70%] left-[90%] '></div>
            <div className='sm:h-[30vh] h-[15vh] sm:block hidden sm:w-[15%] w-[25%] bg-four rounded-full bigcircle  absolute top-[10%] left-[10%] '></div>
            <div className='h-[2vh] w-[1%] sm:block hidden bg-pri smallblock rounded-full absolute top-[30%] left-[10%] '></div>
            <div className='h-[5vh] w-[2.5%] sm:block hidden bg-tri rounded-full midblock absolute top-[10%] left-[28%] '></div>
            <div className='flex flex-col'>
                <div className='flex justify-center  items-center h-[15vh] '>
                    <div className='sm:w-[20%] w-[40%] h-[12vh] bg-[#ffffff52] backdrop-blur-[2px] rounded-xl icon flex justify-center items-center'>
                        <h1 className='text-6xl text-four font-bold '> <span className='text-pri'>S</span>kills</h1>
                    </div>
                </div>
                <div className='h-[80vh] flex justify-center items-center '>
                    <div className='h-[70vh] w-[70%] flex justify-center sm:pl-0  items-center backdrop-blur-[10px] border-[1px] border-white rounded-xl bg-[#ffffff22] ' >
                        <div className=' h-[55vh] w-[70%] grid sm:grid-rows-3 sm:gap-5 gap-4 grid-rows-5 grid-flow-col g'>
                            {                               
                                skills.map((skill,idx)=>{
                                    return(
                                            <div className='flex flex-col gap-2 items-center justify-center'>
                                                <div className=' icon rounded-full backdrop-blur-[5px] icon-shadow shadow-sm bg-[#ffffff24] sm:w-[5.5rem] w-[3.5rem] flex justify-center items-center sm:h-[5.5rem] h-[3.5rem] '>
                                                    <img src={skill.icon} alt='skill-icon'/>
                                                </div>
                                                <span className='font-bold sm:block hidden'>{skill.name}</span>
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