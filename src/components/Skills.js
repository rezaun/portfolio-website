import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import FireBase from '../assets/firebase.png'
import GitHub from '../assets/github.png'
import JavaScript from '../assets/javascript.png'
import Mongo from '../assets/mongo.png'
import Node from '../assets/node.png'
import AWS from '../assets/aws.png'
import react from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen text-gray-300 bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>// These are the technologies i've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 text-center'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="" />
                    <p className='my-4'>Html</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="" />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="" />
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="" />
                    <p className='my-4'>Mongo</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={FireBase} alt="" />
                    <p className='my-4'>FireBase</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="" />
                    <p className='my-4'>Node</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="" />
                    <p className='my-4'>TailWind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={AWS} alt="" />
                    <p className='my-4'>AWS</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills