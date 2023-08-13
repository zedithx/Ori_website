"use client";
import Image from 'next/image'
import Head from 'next/head'
import React, {useEffect, useRef, useState} from "react"
import './globals.css'
import styles from './orientation.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import sutd_logo from "../../public/images/logo/sutd_logo.png"
import obsida_logo from "../../public/images/logo/obsida.png"
import andesa_logo from "../../public/images/logo/andesa.png"
import perida_logo from "../../public/images/logo/perida.png"
import lazura_logo from "../../public/images/logo/lazura.png"
import {CountdownTimer} from "@/components/CountDownTimer";
import NaviBar from "@/components/NaviBar";
import scroll from "../../public/images/backgrounds/scroll.png"
import BaseContent from "@/components/BaseContent";
import {Link} from "react-scroll";
import {SlArrowDown, SlArrowUp} from 'react-icons/sl'
import {IoMdMail} from 'react-icons/io'
import {AiOutlineInstagram} from "react-icons/ai";

const ORI_DATE = new Date("2023-09-07")

// commenting to push -ashley
// mapping
const house_logos = [obsida_logo, andesa_logo, perida_logo, lazura_logo]

export default function Orientation() {
    const [show, setShow] = useState(false)

    useEffect(() => {
            AOS.init();
          }, [])


  return (
      <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width; initial-scale=1.0"/>
            <title>Orientation 2023</title>
            <link rel="icon" href="../../public/favicon.ico" />
            <link rel="canonical" href="http://orientation.sutd.edu.sg"/>
        </Head>
            <body className="container-fluid font-yatraone">
                {/*Display division when show variable is false and on load display animation in a fade*/}
                <div className={`${show ? "hidden" : styles.fadeInBottom}`}>
                {/*countdown section uses the image civilisation(new).jpg as background scaling the image to cover the container without letting the image repeat filling the entire screen and placing the image at the center*/}
                <section id='countdown' className='font-carvedwood text-white text-center bg-[url("../../public/images/backgrounds/civilisation(new).png")] bg-cover bg-no-repeat h-screen bg-center'>
                    {/*div places SUTD logo at top left corner 4px to the right and 4px down which directs to SUTD website when clicked */}
                    <div className='absolute left-4 top-4 md:w-[12vw] w-[30vw]'>
                        <a href='https://www.sutd.edu.sg/' target='_blank' rel="noopener noreferrer"><Image alt='sutdlogo' src={sutd_logo}/></a>
                    </div>
                    {/*div places instagram redirect and orientation email redirect at the top right 4px to the left and 4px down with flex across row to give gap of 2px between each cell*/}
                    <div className='absolute right-4 top-4'>
                        <div className='flex flex-row md:gap-2'>
                            {/*Cell 1 -> insta logo + insta redirect to sutdlife acc*/}
                            <a href='https://www.instagram.com/sutdlife/' target='_blank' rel="noopener noreferrer">
                                <AiOutlineInstagram className='text-[12vw] md:text-[2vw]'/>
                            </a>
                            {/*Cell 2(mobile) -> mail logo + mail redirect for mobile only*/}
                            <a className='md:hidden align-middle pl-2' href="mailto: orientation@studentgov.sutd.edu.sg">
                                <IoMdMail className='text-[12vw]'/>
                            </a>
                            {/*Cell 2(desktop) -> insta handle name + redirect to insta acc*/}
                            <a className='my-auto hidden md:block font-sans text-sm' href='https://www.instagram.com/sutdlife/' target='_blank' rel="noopener noreferrer"><h1>sutdlife</h1></a>
                            {/*Cell 3(desktop) -> visual seperator '|'*/}
                            <h1 className='font-sans hidden md:block'> | </h1>
                            {/*Cell 4(desktop) -> orientation email + redirect to email*/}
                            <h1 className='my-auto hidden md:block font-sans text-sm'><a href="mailto: orientation@studentgov.sutd.edu.sg">orientation@studentgov.sutd.edu.sg</a></h1>
                        </div>
                    </div>
                     {/*div performs animation where the letter appear to fall down into place letter by letter*/}
                    <div className='md:pt-24 pt-36'>
                        <div className='md:text-[10vw] text-[25vw]'>
                            {/*First letter will fall into place with letter L coming down 500mS after page is loaded followed by 200mS for every next letter and text size of 10*/}
                            <h1 className="inline-block" data-aos="fade-down" data-aos-delay="500">L</h1>
                            <h1 className="inline-block" data-aos="fade-down" data-aos-delay="700">U</h1>
                            <h1 className="inline-block" data-aos="fade-down" data-aos-delay="900">M</h1>
                            <h1 className="inline-block" data-aos="fade-down" data-aos-delay="1100">i</h1>
                            <h1 className="inline-block" data-aos="fade-down" data-aos-delay="1300">N</h1>
                            <h1 className="inline-block" data-aos="fade-down" data-aos-delay="1500">O</h1>
                        </div>
                        {/*Display text with h1 heading and text size of 4*/}
                        <h1 className='md:text-[4vw] text-[8vw]'>SUTD FRESHMEN ORIENTATION 2023</h1>
                    </div>
                    <table className='inline-block text-[#4B2B2B] pt-6 md:pt-7'>
                        {/*Table head to display remaining time to orientation date*/}
                        <thead>
                            {/*Using CountDownTimer.js to get the countdown time*/}
                            <CountdownTimer targetDate={ORI_DATE} suppressHydrationWarning={true}/>
                        </thead>
                        <tbody>
                            {/*Table body to show what the cells represent*/}
                            <tr className='text-[6vw] md:text-5xl'>
                                <td className='px-4 md:px-8'>DAY</td>
                                <td className='px-4 md:px-8'>HOUR</td>
                                <td className='px-4 md:px-8'>MIN</td>
                                <td className='px-4 md:px-8'>SEC</td>
                            </tr>
                        </tbody>
                    </table>
                    {/*Division contain a down arrow icon where upon click uses setShow to toggle show variable from false to true which will hide main division*/}
                    <div className='mt-[4vw] pb-[2vw] md:w-[4vw] w-[8vw] mx-auto flex items-center'>
                        <SlArrowDown className='cursor-pointer md:text-[4vw] text-[12vw] text-black' onClick={() => setShow(true)}/>
                    </div>
                </section>
                </div>
                {/*Display division when show is true*/}
                <div className={`${show ? styles.fadeInTop : "hidden"}`}>
                    <section id='content' className='font-carvedwood text-center text-white bg-[url("../../public/images/backgrounds/civilisation(new).png")] bg-cover bg-no-repeat h-screen bg-center overflow-hidden'>
                        <div className='pt-2 pb-2 md:pb-0'>
                        {/*(mobile) Division contain a up arrow icon where upon click uses setShow to toggle show variable from false to false which will hide main division*/}
                        <div className='w-[8vw] mx-auto flex items-center md:hidden'>
                            <SlArrowUp className='cursor-pointer md:text-[4vw] text-[12vw] text-white' onClick={() => setShow(false)}/>
                        </div>
                        {/*div places SUTD logo at top left corner 4px to the right and 4px down which directs to SUTD website when clicked */}
                        <div className='absolute left-4 top-4 md:w-[12vw] w-[30vw]'>
                            <a href='https://www.sutd.edu.sg/' target='_blank' rel="noopener noreferrer"><Image alt='sutdlogo' src={sutd_logo}/></a>
                        </div>
                        {/*(desktop) Division contain a up arrow icon where upon click uses setShow to toggle show variable from false to false which will hide main division*/}
                        <div className='w-[4vw] hidden mx-auto items-center md:flex'>
                            <SlArrowUp className='cursor-pointer md:text-[4vw] text-[12vw] text-white' onClick={() => setShow(false)}/>
                        </div>
                            <div className='absolute top-4 right-4'>
                                <div className='flex flex-row md:gap-2'>
                                    {/*mobile version*/}
                                    <a href='https://www.instagram.com/sutdlife/' target='_blank' rel="noopener noreferrer">
                                        <AiOutlineInstagram className='text-[12vw] md:text-[2vw]'/>
                                    </a>
                                    <a className='md:hidden align-middle pl-2' href="mailto:orientation@studentgov.sutd.edu.sg">
                                        <IoMdMail className='text-[12vw]'/>
                                    </a>
                                    {/*desktop version*/}
                                    <a className='my-auto hidden md:block font-sans text-[1vw]' href='https://www.instagram.com/sutdlife/' target='_blank' rel="noopener noreferrer"><h1>sutdlife</h1></a>
                                    <h1 className='font-sans hidden text-[1vw] md:block my-auto'> | </h1>
                                    <h1 className='my-auto hidden md:block font-sans text-[1vw]'><a href="mailto: orientation@studentgov.sutd.edu.sg">orientation@studentgov.sutd.edu.sg</a></h1>
                                </div>
                            </div>
                        </div>
                        <BaseContent/>
                    </section>
                </div>
            </body>
      </>
  )
}
