'use client';
import dynamic from 'next/dynamic'
import Loading from "./loading";
import {NextUIProvider} from "@nextui-org/react";
import Stickysocail from '@/components/utils/stickysocail';
import ThemeSwitch from '@/components/utils/theme-btn';
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
const Skills = dynamic(() => import('@/components/skills'),
    {
        loading: ()=> <Loading/>
    }
)
const Contact = dynamic(() => import('@/components/contact'),
    {
        loading: ()=> <Loading/>
    }
)
export default function Home() {
  return (
   <div className="min-h-screen w-full">
    <NextUIProvider>
      <Navbar/>
      <Stickysocail/>
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
    </NextUIProvider>
   </div>
  );
}
