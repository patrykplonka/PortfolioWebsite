"use client"

import Image from 'next/image';
import pp from '../public/pp.png';
import ThemeToggle from '../components/ui/theme-toggle';
import {Button} from '../components/ui/button';
import {motion} from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Card, CardContent } from '@/components/ui/card';
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white
    transition-colors duration-300">
        <div className="mx-auto max-w-xl px-4 py-20">

          <motion.header
          initial={{opacity: 0, x: -100}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.6}}

          className="flex items-center justify-between mb-12">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <Image src={pp} alt="profile picture" className="cursor-pointer transition-all 
              duration-300 hover:scale-110"></Image>
            </div>
            <ThemeToggle></ThemeToggle>
          </motion.header>

          <main className="space-y-10">
            <section className='space-y-10'>
            <motion.div
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
            className="space-y-1"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r 
              from-blue-400 via-blue-600 to-blue-800 bg-clip-text 
              text-transparent inline-block">Patryk Płonka</h1>
              <p className="text-gray-600 dark:text-gray-400">IT Student</p>
              <p className="text-gray-600 dark:text-gray-400">Bielany, Poland</p>
            </motion.div>

            <motion.div
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
            className='space-y-3'>
            <h2 className="text-lg font-semibold">About Me
            </h2>
            <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2x1">I am a third-year Computer Science student at the University of Bielsko-Biała. Currently,
               I work as a Programming Instructor at Giganci Programowania, where I teach children and teenagers the fundamentals of programming.
           </p>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2x1">Aspiring Frontend Developer with a strong interest in React and Next.js.
                 Motivated to learn and build modern, user-friendly web applications.</p>  
            </motion.div>

            <motion.div
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
            className="flex items-center gap-3"
            >
            <Link href="F:\Aplikacje\portfolio\public\resume.pdf" passHref>
            <Button className="rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 text-white transition-transform hover:scale-105">
            Resume
            </Button>
            </Link>
             <Link href="https://github.com/patrykplonka" className='text-gray-600 dark:text-gray-400
              hover:text-black dark:hover:text-white transition-colors'>
                <FaGithub className="w-6 h-6"></FaGithub>
              </Link>

              <Link href="https://www.linkedin.com/in/patryk-p%C5%82onka-991174300/" className='text-gray-600 dark:text-gray-400
              hover:text-black dark:hover:text-white transition-colors'>
                <FaLinkedin className="w-6 h-6"></FaLinkedin>
              </Link>
            </motion.div>
            </section>
            <motion.section
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}} 
            className="space-y-6">           
            <h2 className='text-3xl font-semibold
            bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800
              bg-clip-text 
              text-transparent inline-block'>Experience</h2>

              <div className="space-y-2">
                <div className='flex items-center justify-between'>
                  <div className="space-y-1">
                    <p className='text-sm text-gray-600 dark:text-gray-400'>January 2024 - Present</p>
                    <p className='text-m'>Programming trainer</p>
                    <p className='text-blue-600 dark:text-blue-400'>Giganci Programowania</p>
                  </div>
                </div>
                <p className='text-gray-600 dark:text-gray-400 text-sm'>
                Teaching children and teenagers the basics of programming.
                </p>
                </div>
                <div className="space-y-2">
                <div className='flex items-center justify-between'>
                  <div className="space-y-1">
                    <p className='text-sm text-gray-600 dark:text-gray-400'>July 2024 - September 2024</p>
                    <p className='text-m'>IT internship</p>
                    <p className='text-blue-600 dark:text-blue-400'>Polmotors</p>
                  </div>
                </div>
                <p className='text-gray-600 dark:text-gray-400 text-sm'>
                Helpdesk, workstation updates, peripheral device servicing, and updating network infrastructure diagrams.
                </p>
                </div>

            </motion.section>

            <motion.section
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}} 
            className="space-y-6"            
            >
            <h2 className='text-3xl font-semibold
            bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text 
              text-transparent inline-block'>Education</h2>
            <div className="space-y-2">
              <div className='flex items-center justify-between'>
                <div className='space-y-1'>
                <p className='text-sm text-gray-600 dark:text-gray-400'>October 2022 - Present</p>
                    <p className='font-medium'>IT Engineer</p>
                    <p className='text-blue-600 dark:text-blue-400'>University of Bielsko-Biala</p>
                </div>
              </div>
                <p className='text-gray-600 dark:text-gray-400 text-sm'>
                The Software Engineering specialization at UBB focuses on programming, databases, system architecture, and software testing. I gain hands-on experience with Agile, Scrum, and team projects, preparing me for a career in IT, especially in web and mobile development.
                </p> 
            </div>
            <div className="space-y-2">
              <div className='flex items-center justify-between'>
                <div className='space-y-1'>
                <p className='text-sm text-gray-600 dark:text-gray-400'>September 2018 - June 2022</p>
                    <p className='font-medium'>IT Technician</p>
                    <p className='text-blue-600 dark:text-blue-400'>University of Bielsko-Biala</p>
                </div>
              </div>
                <p className='text-gray-600 dark:text-gray-400 text-sm'>
                I graduated from a technical high school specializing in IT, where I gained practical knowledge in programming, hardware, and network management. I successfully passed my vocational exams and earned the title of IT Technician.
                </p> 
            </div>

            </motion.section>
            <motion.section
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}} 
            className='space-y-6'            
            >
            <h2 className='text-3xl font-semibold
            bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text 
              text-transparent inline-block'>Projects</h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                <Card className='bg-gray-50 dark:bg-zinc-900 border-gray-200
                dark:border-zinc-800 transition-transform duration-300 hover:scale-105
                cursor-pointer'>

                  <CardContent className='p-4'>
                    <Image src={pp} alt="project 1" className='rounded-lg mb-4'></Image>
                    <div className='flex items-center justify-between'>

                      <div>
                        <h3 className='font-medium'>Project 1</h3>
                        <p className='text-sm text-gray-600 dark:text-gray-400'>Next.js, MySQL</p>
                      </div>
                      <Button variant="ghost" size="icon">→</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <p className='text-gray-500'>© 2025 Patryk Płonka</p>

            </motion.section>
            </main>
        </div>
    </div>
  );
}
