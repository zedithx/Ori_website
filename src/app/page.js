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
    const sectionTopRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    const sectionBottomRefs = [useRef(null), useRef(null)];
    const sectionLeftRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
    useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    const sectionRightRefs = [useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
            AOS.init();
          }, [])

  useEffect(() => {
    const topObservers = sectionTopRefs.map((ref) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
                  ref.current.classList.add(`${styles.fadeInTop}`);
          }
        },
        { threshold: 0.5 } // intersection threshold
      );
    });

    const bottomObservers = sectionBottomRefs.map((ref) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
                  ref.current.classList.add(`${styles.fadeInBottom}`);
          }
        },
        { threshold: 0.5 } // intersection threshold
      );
    });

    const leftObservers = sectionLeftRefs.map((ref) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
                  ref.current.classList.add(`${styles.fadeInLeft}`);
          }
        },
        { threshold: 0.5 } // intersection threshold
      );
    });

    const rightObservers = sectionRightRefs.map((ref) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
                  ref.current.classList.add(`${styles.fadeInRight}`);
          }
        },
        { threshold: 0.5 } // intersection threshold
      );
    });

    topObservers.forEach((observer, i) => {
        if (sectionTopRefs[i].current) {
            observer.observe(sectionTopRefs[i].current);
        }
    });

    bottomObservers.forEach((observer, i) => {
        if (sectionBottomRefs[i].current) {
            observer.observe(sectionBottomRefs[i].current);
        }
    });

    leftObservers.forEach((observer, i) => {
        if (sectionLeftRefs[i].current) {
            observer.observe(sectionLeftRefs[i].current);
        }
    });

    rightObservers.forEach((observer, i) => {
        if (sectionRightRefs[i].current) {
            observer.observe(sectionRightRefs[i].current);
        }
    });

    // cleanup function to disconnect observers on unmount
    return () => {
      topObservers.forEach((observer) => observer.disconnect());
      bottomObservers.forEach((observer) => observer.disconnect());
      leftObservers.forEach((observer) => observer.disconnect());
      rightObservers.forEach((observer) => observer.disconnect());
    };
  }, []);


  return (
      <>
        <Head>
            <meta charSet="utf-8" />
            <title>Orientation 2023</title>
            <link rel="icon" href="../../public/favicon.ico" />
            <link rel="canonical" href="http://orientation.sutd.edu.sg"/>
        </Head>
            <body className="container-fluid font-yatraone">
                <div className={`${show ? "hidden" : styles.fadeInBottom}`}>
                <section id='countdown' className='font-carvedwood text-white text-center bg-[url("../../public/images/backgrounds/civilisation(new).png")] bg-cover bg-no-repeat md:h-auto h-screen bg-center'>
                    <div className='float-left inline-block pt-8 pl-8 md:w-[12vw] w-[40vw]'>
                        <a href='https://www.sutd.edu.sg/' target='_blank' rel="noopener noreferrer"><Image src={sutd_logo} alt="logo"/></a>
                    </div>
                    <div className='float-right flex flex-row md:pr-12 pt-8 pr-4 md:gap-2'>
                        <a href='https://www.instagram.com/sutdlife/' target='_blank' rel="noopener noreferrer">
                            <AiOutlineInstagram className='text-[14vw] md:text-[2vw]'/>
                        </a>
                        <a className='md:hidden align-middle pl-2' href="mailto: orientation@studentgov.sutd.edu.sg">
                            <IoMdMail className='text-[14vw]'/>
                        </a>
                        <a className='my-auto hidden md:block font-sans text-sm' href='https://www.instagram.com/sutdlife/' target='_blank' rel="noopener noreferrer"><h1>sutdlife</h1></a>
                        <h1 className='font-sans hidden md:block'> | </h1>
                        <h1 className='my-auto hidden md:block font-sans text-sm'><a href="mailto: orientation@studentgov.sutd.edu.sg">orientation@studentgov.sutd.edu.sg</a></h1>
                    </div>
                    <div className='pt-36'>
                        <div className='md:text-[10vw] text-[20vw]'>
                            <h1 className="inline-block" data-aos="fade-down" data-aos-delay="500">L</h1>
                            <h1 className="inline-block" data-aos="fade-down" data-aos-delay="700">U</h1>
                            <h1 className="inline-block" data-aos="fade-down" data-aos-delay="900">M</h1>
                            <h1 className="inline-block" data-aos="fade-down" data-aos-delay="1100">i</h1>
                            <h1 className="inline-block" data-aos="fade-down" data-aos-delay="1300">N</h1>
                            <h1 className="inline-block" data-aos="fade-down" data-aos-delay="1500">O</h1>
                        </div>
                        <h1 className='md:text-[4vw] text-[8vw]'>SUTD FRESHMEN ORIENTATION 2023</h1>
                    </div>
                    <table className='inline-block text-[#4B2B2B] pt-10'>
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
                    <div className='mt-[12vw] pb-[4vw] w-[4vw] mx-auto pr-6 md:pr-0'>
                        <SlArrowDown className='cursor-pointer md:text-[4vw] text-[12vw]' onClick={() => setShow(true)}/>
                    </div>
                </section>
                </div>
                <div className={`${show ? styles.fadeInTop : "hidden"}`}>
                    <section id='storyline' className='font-carvedwood text-center text-white bg-[url("../../public/images/backgrounds/civilisation(new).png")] bg-cover bg-no-repeat md:h-auto h-screen bg-center'>
                         <div className='float-left inline-block md:pt-6 pt-20 md:pl-8 pl-4 md:w-[12vw] w-[40vw]'>
                        <a href='https://www.sutd.edu.sg/' target='_blank' rel="noopener noreferrer"><Image src={sutd_logo} alt="logo"/></a>
                    </div>
                        <div className='float-right flex flex-row md:pt-8 md:pr-12 pt-20 pr-4 md:gap-2'>
                            <a href='https://www.instagram.com/sutdlife/' target='_blank' rel="noopener noreferrer">
                                <AiOutlineInstagram className='text-[14vw] md:text-[2vw]'/>
                            </a>
                            <a className='md:hidden align-middle pl-2' href="mailto:orientation@studentgov.sutd.edu.sg">
                                <IoMdMail className='text-[14vw]'/>
                            </a>
                            <a className='my-auto hidden md:block font-sans text-sm' href='https://www.instagram.com/sutdlife/' target='_blank' rel="noopener noreferrer"><h1>sutdlife</h1></a>
                            <h1 className='font-sans hidden md:block'> | </h1>
                            <h1 className='my-auto hidden md:block font-sans text-sm'><a href="mailto: orientation@studentgov.sutd.edu.sg">orientation@studentgov.sutd.edu.sg</a></h1>
                        </div>
                        <div className='w-[4vw] mx-auto pt-8 pr-6 md:pr-0'>
                            <SlArrowUp className='cursor-pointer md:text-[4vw] text-[12vw] text-white' onClick={() => setShow(false)}/>
                        </div>
                        <BaseContent/>
                    </section>
                </div>
                {/*<section id='navi-bar' className='bg-white p-5 md:p-2 relative'>*/}
                {/*    <NaviBar/>*/}
                {/*</section>*/}
                {/*<div className='bg-[url("../../public/images/backgrounds/civilisation.jpg")] bg-cover bg-no-repeat'>*/}
                {/*    <section id='header' className='pt-10 text-center'>*/}
                {/*        <div className={`${show ? styles.fadeInTop : "opacity-0"}`}>*/}
                {/*            <h1 className='md:text-[6vw] text-[16vw] -mb-4 -z-50'>LUMINO</h1>*/}
                {/*            <h2>@sutdlife</h2>*/}
                {/*            <h2>orientation@studentgov.sutd.edu.sg</h2>*/}
                {/*        </div>*/}
                {/*    </section>*/}
                {/*    <section id='countdown' className='text-center pt-6 md:mb-[20vw] mb-[40vw] relative'>*/}
                {/*        <div className='relative top-20 left-1/2 -translate-x-1/2 w-11/12'>*/}
                {/*            <ul className='animate-pulse hidden md:block'>*/}
                {/*                    <li className='absolute -left-6 -top-32 w-[12vw] opacity-0' ref={sectionLeftRefs[12]}><Image alt='obsida' src={obsida_logo} layout='responsive'/></li>*/}
                {/*                /!*<div className={`${show ? styles.fadeInRight : ""}`}>*!/*/}
                {/*                    <li className='absolute -right-6 -top-32 w-[12vw] opacity-0' ref={sectionRightRefs[1]}><Image alt='andesa' src={andesa_logo} layout='responsive'/></li>*/}
                {/*                /!*</div>*!/*/}
                {/*            </ul>*/}
                {/*            <div className={`${styles.shape} ${show ? styles.rect : ""}`}>*/}
                {/*                <div className={`${show ? styles.fadeInHeader : "opacity-0"}`}>*/}
                {/*                    <h1 className='md:text-[2.5vw] text-[5.5vw] mt-20'>SUTD FRESHMAN ORIENTATION 2023</h1>*/}
                {/*                        <table className='inline-block mt-16 text-white'>*/}
                {/*                            <thead>*/}
                {/*                                <CountdownTimer targetDate={ORI_DATE} suppressHydrationWarning={true}/>*/}
                {/*                            /!*<tr className='text-lg md:text-[4.5vw]'>*!/*/}
                {/*                            /!*    <td className='px-4'>00</td>*!/*/}
                {/*                            /!*    <td className='px-4'>00</td>*!/*/}
                {/*                            /!*    <td className='px-4'>00</td>*!/*/}
                {/*                            /!*    <td className='px-4'>00</td>*!/*/}
                {/*                            /!*</tr>*!/*/}
                {/*                            </thead>*/}
                {/*                            <tbody>*/}
                {/*                                <tr className='text-[3vw] md:text-xl'>*/}
                {/*                                    <td className='px-2 md:px-4 pt-4'>DAYS</td>*/}
                {/*                                    <td className='px-2 md:px-4 pt-4'>HOURS</td>*/}
                {/*                                    <td className='px-2 md:px-4 pt-4'>MINUTES</td>*/}
                {/*                                    <td className='px-2 md:px-4 pt-4'>SECONDS</td>*/}
                {/*                                </tr>*/}
                {/*                            </tbody>*/}
                {/*                        </table>*/}
                {/*                    <h1 className='md:text-[2vw] text-[4vw] md:mt-6 mt-12'>7-9 SEPTEMBER 2023</h1>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <ul className='animate-pulse hidden md:block'>*/}
                {/*                <li className='absolute -left-6 -bottom-32 w-[12vw] opacity-0' ref={sectionLeftRefs[13]}><Image alt='lazura' src={lazura_logo} layout='responsive'/></li>*/}
                {/*                <li className='absolute -right-6 -bottom-32 w-[12vw] opacity-0' ref={sectionRightRefs[2]}><Image alt='perida' src={perida_logo} layout='responsive'/></li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}
                {/*        </section>*/}
                {/*    <section id='storyline' className='pt-10 pb-20 text-center'>*/}
                {/*        <h1 className='text-[11vw] md:text-[4vw] pb-10 md:pb-2 opacity-0' ref={sectionTopRefs[0]}>Storyline</h1>*/}
                {/*        <div className='rounded-3xl bg-white w-11/12 mx-auto opacity-0' ref={sectionTopRefs[1]}>*/}
                {/*            <h1 className='text-base text-justify md:text-xl p-6'>*/}
                                {/*A long time ago, the ancient civilisation of Lumino thrived under the magnificent crystal blessings of the Great Guardians. It was led by the four esteemed houses: Obsida, Andesa, Perida, and Lazura.<br></br><br></br> One fateful day, the supply of crystals, the lifeblood of Lumino, came to an abrupt halt, plunging the houses into a state of confusion and worry. <br></br><br></br>Years passed, and just as hope waned, in a moment of miraculous wonder, a giant crystal plummeted from the sky, shattering into four uneven fragments. The four great houses each laid claim to the largest fragment, convinced that they alone held the key to Lumino's survival. <br></br><br></br>With tensions rising, each house must now vie fiercely and prove their worth to secure the largest share of the precious crystal. Time is of the essence, and the battle for glory has begun. Will you heed the call and join the fight to etch your name in history?*/}
                            {/*</h1>*/}
                {/*        </div>*/}
                {/*        <div className='opacity-0 flex md:flex-row flex-wrap w-full md:w-11/12 md:gap-4 lg:gap-8 xl:gap-12 2xl:gap-16 md:justify-center*/}
                {/*         gap-10 pt-16 mx-auto' ref={sectionBottomRefs[0]}>*/}
                {/*            {house_logos.map(logo => (*/}
                {/*                // eslint-disable-next-line react/jsx-key*/}
                {/*            <Image alt='highlights' className='object-scale-down animate-pulse w-1/3 md:w-1/6 mx-auto' src={logo}/>*/}
                {/*                ))}*/}
                {/*        </div>*/}
                {/*    </section>*/}
                {/*</div>*/}
                {/*<section id='navigation' className='bg-[url("../../public/images/backgrounds/white-civilisation1.png")] bg-cover bg-no-repeat text-center pt-28'>*/}
                {/*    <h1 className='md:text-[3vw] text-[9vw] opacity-0' ref={sectionTopRefs[2]}>GETTING HERE </h1>*/}
                {/*    <div className='flex flex-col-reverse md:flex-row  md:justify-around gap-2 md:px-12 px-4 pt-10'>*/}
                {/*        <div className='md:w-5/12 w-11/12 text-left text-[#6B0B0B] tracking-wider text-[4vw] pt-10 md:pt-0 ml-4 md:ml-0 md:text-[1.4vw] opacity-0' ref={sectionLeftRefs[0]}>*/}
                {/*            <h1>We are at 8 Somapah Road, Singapore 487372</h1>*/}
                {/*            <br/>*/}
                {/*            <h1><u>By Train</u></h1>*/}
                {/*            <h1>Alight at:</h1>*/}
                {/*            <ol className='list-decimal pl-8'>*/}
                {/*                <li>Upper Changi MRT Station (DT34) and take Exit E – you will be led directly into our campus</li>*/}
                {/*                <li>Expo MRT Station (DT35 / CG1) and walk to our campus – along Changi South Avenue 1 in the direction of Max Pavilion/Somapah Road</li>*/}
                {/*            </ol>*/}
                {/*            <br/>*/}
                {/*            <h1><u>By Bus</u></h1>*/}
                {/*            <h1>Alight at one of the bus stops along Somapah Road and walk to our Campus:</h1>*/}
                {/*            <ul className='list-disc pl-8'>*/}
                {/*                <li>B96449: SUTD. Service No: 20</li>*/}
                {/*                <li>B96441: Opposite SUTD. Service No: 20</li>*/}
                {/*            </ul>*/}
                {/*            <h1>Alight at one of the bus stops along Upper Changi Road East and walk to our Campus:</h1>*/}
                {/*            <ul className='list-disc pl-8'>*/}
                {/*                <li>B96041: Upper Changi Station/Opp SUTD. Service No: 2, 5, 24</li>*/}
                {/*                <li>B96049: Upper Changi Station/SUTD. Service No: 2, 5, 24</li>*/}
                {/*            </ul>*/}
                {/*            <h1>Alight at Changi Business Park Terrace (Bus Terminal) and walk to our Campus:</h1>*/}
                {/*            <ul className='list-disc pl-8'>*/}
                {/*                <li>Service No: 47, 118</li>*/}
                {/*            </ul>*/}

                {/*        </div>*/}
                {/*        <div className='md:w-6/12 w-11/12 md:h-[38vw] h-[50vw] mx-auto md:my-auto opacity-0' ref={sectionRightRefs[0]}>*/}
                {/*            <iframe className="responsive-iframe"*/}
                {/*                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7249803314576!2d103.96114931399768!3d1.3413700619781364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3cd899f260cb%3A0x99becabc6d025518!2sSingapore%20University%20of%20Technology%20%26%20Design%20(SUTD)!5e0!3m2!1sen!2ssg!4v1653292770304!5m2!1sen!2ssg"*/}
                {/*                    width="100%" height="100%" allowFullScreen="" loading="lazy"*/}
                {/*                    referrerPolicy="no-referrer-when-downgrade"></iframe>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className='text-black text-[6vw] md:text-[2vw] px-2 pt-20 text-center md:text-left pb-10'>*/}
                {/*        <h1 className='md:pl-20 pb-14 opacity-0' ref={sectionTopRefs[3]}>Need help navigating around SUTD? We got you.</h1>*/}
                {/*        <div className='w-full md:w-7/12 mx-auto opacity-0 pb-10 md:pb-0 ' ref={sectionBottomRefs[1]}>*/}
                {/*            <Image id='sutd-map' alt='sutd map' src={sutd_map}></Image>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*<div className='bg-[url("../../public/images/backgrounds/civilisation.jpg")] bg-cover bg-no-repeat'>*/}
                {/*    <section id='faq' className='text-center'>*/}
                {/*         <h1 className='md:text-[3vw] text-[8vw] text-black pb-2 pt-20 pb-4 opacity-0' ref={sectionTopRefs[4]}>FAQ</h1>*/}
                {/*         <div className='rounded-3xl bg-white w-11/12 mx-auto'>*/}
                {/*             <ol className='list-decimal text-left md:px-20 px-14 py-10 md:text-lg text-md'>*/}
                {/*                 {questions.map((question, index) => {*/}
                {/*                     return(*/}
                {/*                         <div className='opacity-0' ref={sectionLeftRefs[index+1]}>*/}
                {/*                             <li className='text-[#6B0B0B] pt-8'>{question.question}</li>*/}
                {/*                             <h1> {question.answer}</h1>*/}
                {/*                         </div>*/}
                {/*                    )*/}
                {/*                 })}*/}
                {/*             </ol>*/}
                {/*         </div>*/}
                {/*    </section>*/}
                {/*    <section id='sponsors' className='text-center pt-36'>*/}
                {/*        <h1 className='md:text-[3vw] text-[8vw] pb-14 opacity-0' ref={sectionTopRefs[5]}>SPONSORS</h1>*/}
                {/*        <div className='hidden md:block bg-white w-11/12 rounded-lg mx-auto p-10'>*/}
                {/*        /!*    insert compiled image here *!/*/}
                {/*        </div>*/}
                {/*         <div className='md:hidden bg-white w-11/12 rounded-lg pb-0 mx-auto p-4 mt-6'>*/}
                {/*        /!*    insert compiled mobile image here*/}
                {/*        *!/*/}
                {/*        </div>*/}
                {/*    </section>*/}
                {/*</div>*/}
            </body>
      </>
  )
}
