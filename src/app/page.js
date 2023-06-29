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
                <div className={`${show ? "hidden" : styles.fadeInBottom}`}>
                <section id='countdown' className='font-carvedwood text-white text-center bg-[url("../../public/images/backgrounds/civilisation(new).png")] bg-cover bg-no-repeat h-screen bg-center'>
                    <div className='absolute left-4 top-4 md:w-[12vw] w-[30vw]'>
                        <a href='https://www.sutd.edu.sg/' target='_blank' rel="noopener noreferrer"><Image src={sutd_logo}/></a>
                    </div>
                    <div className='absolute right-4 top-4'>
                        <div className='flex flex-row md:gap-2'>
                            <a href='https://www.instagram.com/sutdlife/' target='_blank' rel="noopener noreferrer">
                                <AiOutlineInstagram className='text-[12vw] md:text-[2vw]'/>
                            </a>
                            <a className='md:hidden align-middle pl-2' href="mailto: orientation@studentgov.sutd.edu.sg">
                                <IoMdMail className='text-[12vw]'/>
                            </a>
                            <a className='my-auto hidden md:block font-sans text-sm' href='https://www.instagram.com/sutdlife/' target='_blank' rel="noopener noreferrer"><h1>sutdlife</h1></a>
                            <h1 className='font-sans hidden md:block'> | </h1>
                            <h1 className='my-auto hidden md:block font-sans text-sm'><a href="mailto: orientation@studentgov.sutd.edu.sg">orientation@studentgov.sutd.edu.sg</a></h1>
                        </div>
                    </div>
                    <div className='md:pt-24 pt-36'>
                        <div className='md:text-[10vw] text-[25vw]'>
                            <h1 className="inline-block" data-aos="fade-down" data-aos-delay="500">L</h1>
                            <h1 className="inline-block" data-aos="fade-down" data-aos-delay="700">U</h1>
                            <h1 className="inline-block" data-aos="fade-down" data-aos-delay="900">M</h1>
                            <h1 className="inline-block" data-aos="fade-down" data-aos-delay="1100">i</h1>
                            <h1 className="inline-block" data-aos="fade-down" data-aos-delay="1300">N</h1>
                            <h1 className="inline-block" data-aos="fade-down" data-aos-delay="1500">O</h1>
                        </div>
                        <h1 className='md:text-[4vw] text-[8vw]'>SUTD FRESHMEN ORIENTATION 2023</h1>
                    </div>
                    <table className='inline-block text-[#4B2B2B] pt-6 md:pt-7'>
                        <thead>
                            <CountdownTimer targetDate={ORI_DATE} suppressHydrationWarning={true}/>
                        {/*<tr className='text-lg md:text-[4.5vw]'>*/}
                        {/*    <td className='px-4'>00</td>*/}
                        {/*    <td className='px-4'>00</td>*/}
                        {/*    <td className='px-4'>00</td>*/}
                        {/*    <td className='px-4'>00</td>*/}
                        {/*</tr>*/}
                        </thead>
                        <tbody>
                            <tr className='text-[6vw] md:text-5xl'>
                                <td className='px-4 md:px-8'>DAY</td>
                                <td className='px-4 md:px-8'>HOUR</td>
                                <td className='px-4 md:px-8'>MIN</td>
                                <td className='px-4 md:px-8'>SEC</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='mt-[4vw] pb-[2vw] md:w-[4vw] w-[8vw] mx-auto flex items-center'>
                        <SlArrowDown className='cursor-pointer md:text-[4vw] text-[12vw]' onClick={() => setShow(true)}/>
                    </div>
                </section>
                </div>
                <div className={`${show ? styles.fadeInTop : "hidden"}`}>
                    <section id='content' className='font-carvedwood text-center text-white bg-[url("../../public/images/backgrounds/civilisation(new).png")] bg-cover bg-no-repeat h-screen bg-center overflow-hidden'>
                        <div className='pt-2 pb-2 md:pb-0'>
                        <div className='w-[8vw] mx-auto flex items-center md:hidden'>
                            <SlArrowUp className='cursor-pointer md:text-[4vw] text-[12vw] text-white' onClick={() => setShow(false)}/>
                        </div>
                        <div className='absolute left-4 top-4 md:w-[12vw] w-[30vw]'>
                            <a href='https://www.sutd.edu.sg/' target='_blank' rel="noopener noreferrer"><Image src={sutd_logo}/></a>
                        </div>
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
