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
    img:string
}

const Cards: React.FC<Props> = ({ alignment, skills, projectname, desp, link,img }) => {
    return (
        <div className={`h-[40vh] relative w-[40%] card  flex flex-col gap-2 bg-tri rounded-lg ${alignment === "right" ? "border-pri" : "border-four"} border-t-[4px] px-[2rem] py-[1.5rem]  `}>
            <div className='flex gap-5'>
                {skills.map((sk, idx) => {
                    return (
                        <div key={idx} className={`shadow text-white  font-bold h-[2.5rem] px-[2rem] flex justify-center items-center rounded-full ${alignment === "right" ? "bg-four" : "bg-pri"}`} >{sk}</div>
                    )
                })}
            </div>
            <div>
                <h1 className='text-[1.5rem] w-[50%] font-bold'>{projectname}</h1>
            </div>
            <div className='w-[50%] h-[20vh] overflow-hidden '>
                <p className='text-[1vw] font-medium'>{desp}</p>
            </div>
            <div>
                <Link href={link}>
                    <Button color="danger">
                        <span><BsGithub /></span> View Source Code
                    </Button>
                </Link>
            </div>

            <div className={` ${alignment == "right" ? "right-[-3%] arrow h-[6vh] absolute w-[2.5rem] bg-tri" : "left-[-3%] arrow h-[6vh] absolute w-[2.5rem] bg-tri"}`}></div>
            
                <img src={img} alt="project Image" className='absolute h-[35vh] w-[45%] border-[10px] border-white shadow-lg rounded-xl botton-[-1%] img right-[0%]' />
        </div>
    );
};

export default Cards;
