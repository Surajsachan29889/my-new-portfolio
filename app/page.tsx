'use client';
import Image from "next/image";
import dynamic from 'next/dynamic'
import Loading from "./loading";
import {NextUIProvider} from "@nextui-org/react";

const Navbar = dynamic(() => import('@/components/utils/navbar'),
    {
        loading: ()=> <Loading/> 
    }

)
const Hero = dynamic(() => import('@/components/hero'),
    {
        loading: ()=> <Loading/> 
    }

)
const About = dynamic(() => import('@/components/about'),
    {
        loading: ()=> <Loading/> 
    }

)
const Project = dynamic(() => import('@/components/project'),
    {
        loading: ()=> <Loading/> 
    }

)

export default function Home() {
  return (
   <div className="min-h-screen w-full">
    <NextUIProvider>

      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
    </NextUIProvider>
   </div>
  );
}
