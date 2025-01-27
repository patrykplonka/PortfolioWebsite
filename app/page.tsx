"use client"

import Image from 'next/image';
import pp from '../public/pp.png';
import ThemeToggle from '../components/ui/theme-toggle';
import {Button} from '../components/ui/button';
import {motion} from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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
              from-blue-200 via-red-600 to-green-500 bg-clip-text 
              text-transparent inline-block">Patryk Płonka</h1>
              <p className="text-gray-600 dark:text-gray-400">IT Student</p>
              <p className="text-gray-600 dark:text-gray-400">Bielany, Poland</p>
            </motion.div>

            <motion.div
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
            className='space-y-3'>
            <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2x1">Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Dolorem inventore perspiciatis quisquam totam dolor, velit animi exercitationem dolores soluta, 
              esse natus suscipit repellendus fugit, sit officiis! Placeat dolores non culpa.</p>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2x1">Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Dolorem inventore perspiciatis quisquam totam dolor, velit animi exercitationem dolores soluta, 
              esse natus suscipit repellendus fugit, sit officiis! Placeat dolores non culpa.</p>  
            </motion.div>

            <motion.div
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
            className="flex items-center gap-3"
            >
              <Button className="rounded-full bg-gradient-to-r bg-gradient-to-r 
              from-blue-200 via-red-600 to-green-500
              text-white transition-transform hover:scale-105">Resume</Button>

              <Link href="#" className='text-gray-600 dark:text-gray-400
              hover:text-black dark:hover:text-white transition-colors'>
                <FaGithub className="w-6 h-6"></FaGithub>
              </Link>

              <Link href="#" className='text-gray-600 dark:text-gray-400
              hover:text-black dark:hover:text-white transition-colors'>
                <FaLinkedin className="w-6 h-6"></FaLinkedin>
              </Link>
            </motion.div>
            </section>
            </main>
        </div>
    </div>
  );
}
