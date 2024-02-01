'use client';
import dynamic from 'next/dynamic'
import Loading from "./loading";
import {NextUIProvider} from "@nextui-org/react";
import Stickysocail from '@/components/utils/stickysocail';
import ThemeSwitch from '@/components/utils/theme-btn';
import Footer from '@/components/footer';
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false,
});
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
      <AnimatedCursor
       innerSize={10}
       outerSize={45}
       innerScale={1}
       outerScale={2}
       outerAlpha={0}
       showSystemCursor={false}
       outerStyle={{
         border: '3px solid #65C18C'
       }}
       innerStyle={{
         backgroundColor: ' #FF7BA9'
       }}
       
       />
      <Navbar/>
      <Stickysocail/>
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
      <Footer/>
    </NextUIProvider>
   </div>
  );
}
