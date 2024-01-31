'use client';
import Link from 'next/link';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { Button } from "@nextui-org/react";


interface Props {
    alignment: 'right' | 'left';
    skills: string[];
    projectname: string;
    desp: string;
    link: string;
    img:string;
    btncolor:string;
}

const Cards: React.FC<Props> = ({ alignment, skills, projectname, desp, link,img, btncolor }) => {
    return (
        <div className={`h-[40vh] relative w-[100%] card  flex flex-col gap-2 bg-tri rounded-lg ${alignment === "right" ? "border-pri" : "border-four"} border-t-[4px] px-[2rem] py-[1.5rem]  `}>
            <div className='flex gap-5'>
                {skills.map((sk, idx) => {
                    return (
                        <div key={idx} className={`shadow text-white dark:text-black  font-bold sm:h-[2.5rem] px-[1rem] sm:px-[2rem] flex justify-center items-center rounded-full ${alignment !== "right" ? "bg-four" : "bg-pri"}`} >{sk}</div>
                    )
                })}
            </div>
            <div>
                <h1 className='text-[1.5rem] dark:text-black sm:w-[50%] w-[100%] font-bold'>{projectname}</h1>
            </div>
            <div className='sm:w-[50%] w-[100%] h-[20vh] overflow-hidden '>
                <p className='sm:text-[1vw]  text-[.8rem] dark:text-black font-medium '>{desp}</p>
            </div>
            <div>
                <Link href={link}>
                    <Button color="danger" className='dark:text-black' style={{backgroundColor:btncolor}}>
                        <span><BsGithub /></span> View Source Code
                    </Button>
                </Link>
            </div>

            <div className={` ${alignment == "right" ? "right-[-3%] arrow h-[6vh] absolute w-[2.5rem] bg-tri" : "left-[-3%] arrow h-[6vh] absolute w-[2.5rem] bg-tri"} sm:block hidden `}></div>
            
                <img src={img} alt="project Image" className='absolute sm:block hidden h-[35vh] w-[45%] border-[10px] border-white shadow-lg rounded-xl botton-[-1%] img right-[0%]' />
        </div>
    );
};

export default Cards;
