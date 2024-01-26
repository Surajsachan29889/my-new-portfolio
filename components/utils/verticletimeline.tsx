'use client';

import React from 'react'
import Cards from './cards'
import Checkpoints from './timelinecheckpoints';
import { BsGithub } from 'react-icons/bs';

function Timeline() {
  return (
    <div className='h-[200vh] relative overflow-hidden' >
      <div className='flex justify-center items-center'>
        <h1 className=' font-extrabold text-6xl text-four '> <span className='text-pri'>P</span>rojects <span className='text-pri'>:</span></h1>
      </div>
      <div className='w-[.5%] h-[190vh] absolute top-[15vh] left-[50%] bg-tri'></div>
      <div className='flex flex-col'>
        <div className='absolute flex left-[9%] w-[100%] top-[14%] '>

          <Cards
            alignment='right'
            projectname='Task Reminder through WhatsApp'
            skills={["EJS", "NodeJS"]}
            desp='to do list task remider through whatsapp in given time'
            link='https://github.com/Surajsachan29889/taskReminderApp'
            img="ToDoimg.png"
          />
          <div className='ml-[3%] w-[70%]'>

            <Checkpoints
              icon={<BsGithub />}
              color='pri'
              size='8.5%'
            />
          </div>
        </div>
        <div className='absolute flex left-[46.5%] w-[100%] top-[44%] '>


          <div className='pl-[0.8%] w-[10%]'>

            <Checkpoints
              icon={<BsGithub />}
              color='four'
              size='60.5%'
            />
          </div>
          <Cards
            alignment='left'
            projectname='CLOUDY AI story genreator'
            skills={["React", "NodeJS"]}
            desp='Short Story Genterator based on User prompt with Leaderboard'
            link='https://github.com/Surajsachan29889/ShortStoryGenratorWithAI'
            img="CLOUDY.png"
          />

        </div>
        <div className='absolute flex left-[9%] w-[100%] top-[74%] '>

          <Cards
            alignment='right'
            projectname='FitnessPal Clone'
            skills={["Redux", "MongoDB"]}
            desp='Clone of FitnessPal with login Signup and individual Diet Chart'
            link='https://github.com/Surajsachan29889/fitnesspalmain'
            img="fitnesspal.webp"
          />
          <div className='ml-[3%] w-[70%]'>

            <Checkpoints
              icon={<BsGithub />}
              color='pri'
              size='8.5%'
            />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Timeline