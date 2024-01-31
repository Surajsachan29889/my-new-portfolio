// 'use client';

import React,{useEffect} from 'react'
import Cards from './cards'
import Checkpoints from './timelinecheckpoints';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCarSide } from '@fortawesome/free-solid-svg-icons'
import { FaNodeJs, FaReact, } from 'react-icons/fa';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function Timeline() {
    useEffect(()=>{
    
      gsap.fromTo(".card1",{
        x:-100,
        opacity:0,
      },{
          x:0,
          opacity:1,
          duration:2.5,
          ease: "elastic.out(1,0.3)",
          scrollTrigger:{
            trigger:".card1",
            start:"top 50%",
            end:"top 70%",
            markers:false,
            toggleActions:"play none none reverse"
          },
      });
      gsap.fromTo(".card3",{
        x:-100,
        opacity:0,
      },{
          x:0,
          opacity:1,
          duration:2.5,
          ease: "elastic.out(1,0.3)",
          scrollTrigger:{
            trigger:".card3",
            start:"top 50%",
            end:"top 70%",
            markers:false,
            toggleActions:"play none none reverse"
          },
      });

      gsap.fromTo(".card2",{
        x:100,
        opacity:0
        
      },{
          x:0,
          opacity:1,
          duration:2.5,
          ease: "elastic.out(1,0.3)",
          scrollTrigger:{
            trigger:".card2",
            start:"top 60%",
            end:"top 40%",
            markers:false,
            toggleActions:"play none none reverse"
          }
    
      });
      gsap.fromTo(".card4",{
        x:100,
        opacity:0
        
      },{
          x:0,
          opacity:1,
          duration:2.5,
          ease: "elastic.out(1,0.3)",
          scrollTrigger:{
            trigger:".card4",
            start:"top 60%",
            end:"top 40%",
            markers:false,
            toggleActions:"play none none reverse"
          }
    
      });
      gsap.fromTo(".check1",{
        scale:0,
        
      },{
          scale:1,   
          duration:2.5,
          ease: "elastic.out(1,0.3)",
          scrollTrigger:{
            trigger:".check1",
            start:"top 50%",
            end:"top 70%",
            markers:false,
            toggleActions:"play none none reverse"
          }
    
      });
      gsap.fromTo(".check2",{
        scale:0,
      
        
      },{
          scale:1,
          duration:2.5,
          ease: "elastic.out(1,0.3)",
          scrollTrigger:{
            trigger:".check2",
            start:"top 60%",
            end:"top 40%",
            markers:false,
            toggleActions:"play none none reverse"
          }
    
      });
      gsap.fromTo(".check3",{
        scale:0,
      
        
      },{
          scale:1,  
          duration:2.5,
          ease: "elastic.out(1,0.3)",
          scrollTrigger:{
            trigger:".check3",
            start:"top 50%",
            end:"top 70%",
            markers:false,
            toggleActions:"play none none reverse"
          }
    
      });
      gsap.fromTo(".check4",{
        scale:0,
        
      },{
          scale:1,
          duration:2.5,
          ease: "elastic.out(1,0.3)",
          scrollTrigger:{
            trigger:".check4",
            start:"top 60%",
            end:"top 40%",
            markers:false,
            toggleActions:"play none none reverse"
          }
    
      });

    },[])
  return (
    <div className='h-[200vh] relative overflow-hidden' >
      <div className='flex justify-center items-center'>
        <h1 className=' font-extrabold text-6xl text-four '> <span className='text-pri'>P</span>rojects</h1>
      </div>
      <div className='sm:w-[.5%] w-[2%] h-[190vh] absolute top-[15vh] left-[50%]  bg-tri'></div>
      <div className=' timeline flex flex-col'>
        <div className='absolute flex sm:left-[9%] left-[9.5%] w-[100%] sm:top-[14%] top-[10%] '>
          <div className='sm:w-[41%] w-[80%]  card1'>

          <Cards
            alignment='right'
            projectname='Task Reminder through WhatsApp'
            skills={["EJS", "NodeJS"]}
            desp='to do list task remider through whatsapp in given time'
            link='https://github.com/Surajsachan29889/taskReminderApp'
            img="ToDoimg.png"
            btncolor='#FF7BA9'
          />
          </div>
          <div className='ml-[3%] w-[70%] sm:block hidden'>

            <Checkpoints
              icon={<FaNodeJs />}
              color='pri'
              size='8.5%'
              className='check1'
            />
          </div>
        </div>
        <div className='absolute flex sm:left-[46.5%] left-[0%] w-[100%] sm:top-[36%] top-[32%] '>


          <div className='pl-[0.8%] w-[10%] '>

            <Checkpoints
              icon={<FaReact />}
              color='four'
              size='60.5%'
              className='check2'
            />
          </div>
          <div className='sm:w-[38%] w-[80%] card2'>

          <Cards
            alignment='left'
            projectname='CLOUDY AI story genreator'
            skills={["React", "NodeJS"]}
            desp='Short Story Genterator based on User prompt with Leaderboard'
            link='https://github.com/Surajsachan29889/ShortStoryGenratorWithAI'
            img="CLOUDY.png"
            btncolor='#65C18C'
          />
          </div>

        </div>
        <div className='absolute flex sm:left-[9%] left-[9.5%] w-[100%] sm:top-[56%] top-[54%] '>
          <div className='sm:w-[41%] w-[80%] card3'>

          <Cards
            alignment='right'
            projectname='FitnessPal Clone'
            skills={["Redux", "Mongo"]}
            desp='Clone of FitnessPal with login Signup and individual Diet Chart'
            link='https://github.com/Surajsachan29889/fitnesspalmain'
            img="fitnesspal.webp"
            btncolor='#FF7BA9'
          />
          </div>
          <div className='ml-[3%] w-[70%] sm:block hidden'>

            <Checkpoints
              icon={<FontAwesomeIcon icon={faCoffee} />}
              color='pri'
              size='8.5%'
              className='check3'
            />
          </div>
        </div>
        <div className='absolute flex sm:left-[46.5%] left-[0%] w-[100%] sm:top-[76%] top-[76%] '>


          <div className='pl-[0.8%] w-[10%]'>

            <Checkpoints
              icon={<FontAwesomeIcon icon={faCarSide} />}
              color='four'
              size='60.5%'
              className='check4'
            />
          </div>
          <div className=' sm:w-[38%] w-[80%] card4 '>

          <Cards
            alignment='left'
            projectname='Car Price Prediction With ML'
            skills={["FLASK", "ML"]}
            desp='Predict Accurate Price for Resale Car using the Power of Machine Learning'
            link='https://github.com/Surajsachan29889/machinelerningbackend'
            img="ML.png"
            btncolor='#65C18C'
          />
          </div>

        </div>
      </div>


    </div>
  )
}

export default Timeline