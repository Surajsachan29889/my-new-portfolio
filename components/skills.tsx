import React from 'react';
import { skills } from '@/lib/data';
import { useSectionInView } from "@/lib/hooks";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Skills() {
    const { ref } = useSectionInView("Skills", 0.5);

    // Handle mouse movement for tilt effect
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
        const card = document.getElementById(`skill-card-${idx}`);
        if (card) {
            const rect = card.getBoundingClientRect();
            const cardX = rect.left + rect.width / 2;
            const cardY = rect.top + rect.height / 2;
            const mouseX = e.clientX - cardX;
            const mouseY = e.clientY - cardY;
            const rotateX = (mouseY / rect.height) * 50;
            const rotateY = -(mouseX / rect.width) * 50;

            gsap.to(card, {
                rotationX: rotateY,
                rotationY: rotateX,
                transformPerspective: 500, // Ensure perspective is applied
                ease: "power1.out",
            });
        }
    };

    // Reset card position on mouse leave
    const handleMouseLeave = (idx: number) => {
        const card = document.getElementById(`skill-card-${idx}`);
        if (card) {
            gsap.to(card, {
                rotationX: 0,
                rotationY: 0,
                ease: "power1.out",
            });
        }
    };

    return (
        <section className='min-h-[100vh] w-full relative overflow-hidden' ref={ref} id='skills'>
            <div className='flex flex-col'>
                <div className='flex justify-center items-center h-[15vh]'>
                    <div className='sm:w-[20%] w-[40%] h-[12vh] bg-transparent dark:border-black/40 dark:bg-opacity-75 rounded-xl icon flex justify-center items-center'>
                        <h1 className='text-6xl text-four font-bold'><span className='text-pri'>S</span>kills</h1>
                    </div>
                </div>
                <div className='h-[80vh] flex justify-center items-center'>
                    <div className='h-[70vh] w-[70%] flex justify-center sm:pl-0 items-center'>
                        <div className='h-[55vh] w-[70%] justify-center items-center grid sm:grid-rows-3 sm:gap-5 gap-4 grid-rows-5 grid-flow-col' style={{ perspective: '1000px' }}>
                            {
                                skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        id={`skill-card-${idx}`}
                                        className='flex flex-col skill items-center justify-center lg:h-[7rem] h-[2rem] lg:w-[7rem] bg-tri dark:bg-tri border-[1.5px] border-black/40 dark:bg-opacity-75 lg:rounded-xl rounded-3xl shadow-xl'
                                        onMouseMove={(e) => handleMouseMove(e, idx)}
                                        onMouseLeave={() => handleMouseLeave(idx)}
                                        style={{ transformStyle: 'preserve-3d' }} // Ensure 3D transform style is preserved
                                    >
                                        <div className='sm:-[5.5rem] w-[3.5rem] justify-center items-center sm:h-[5.5rem] h-[3.5rem] lg:flex hidden'>
                                            <img src={skill.icon} alt='skill-icon' />
                                        </div>
                                        <span className='font-bold sm:text-[1rem] text-[.8rem] p-[10px] dark:text-[black]'>{skill.name}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
