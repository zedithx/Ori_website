"use client";
import Image from 'next/image'
import Head from 'next/head'
import React, {useEffect, useRef, useState} from "react"
import { Link } from "react-scroll"
import './globals.css'
import styles from './orientation.module.css'

import sutd_logo from "../../public/images/logo/sutd_logo.svg"
import obsida_logo from "../../public/images/logo/obsida.png"
import andesa_logo from "../../public/images/logo/andesa.png"
import perida_logo from "../../public/images/logo/perida.png"
import lazura_logo from "../../public/images/logo/lazura.png"
import sutd_map from "../../public/images/sutd_map.svg"
import {CountdownTimer} from "@/components/CountDownTimer";
import NaviBar from "@/components/NaviBar";

const ORI_DATE = new Date("2023-09-07")

// mapping
const house_logos = [obsida_logo, andesa_logo, perida_logo, lazura_logo]
const questions = [
    {
        question: "Can I come for orientation if I missed the sign-ups?",
        answer: 'Please sign up during the sign-up period as these numbers are taken into account for planning purposes, such as food and T-shirts. We cannot guarantee that you can still attend orientation if you miss the sign-ups.'
    },
    {
        question: "Do I have to pay for orientation?" ,
        answer: 'Yes. Further instructions will be provided on how to make payment.'
    },
    {
        question: "Can I leave orientation mid-way?" ,
        answer: 'We highly encourage you to participate all the way as it is a full 3-day experience!'
    },
    {
        question: "Do I have to stay overnight during orientation?",
        answer: 'You will have checked-in to your room prior to orientation. Staying in your allocated room would be recommended as it would be more convenient for the 3 full days of activity.'
    },
    {
        question: "Will food be provided?",
        answer: 'Lunch and dinner will be provided for Day 1 and Day 3. Only lunch will be provided on Day 2.'
    },
    {
        question: "Will vegetarian food / food with dietary restrictions be provided?",
        answer: 'We will be collecting your dietary preferences and meals will be catered for accordingly.'
    },
    {
        question: "Can I be in the same group as my friend?",
        answer: 'You will be grouped with your soon-to-be Term 1 and 2 classmates! 😀'
    },
    {
        question: "What will I be doing during orientation?",
        answer: 'Be orientated around the campus that is SUTD, have fun-filled activities and interactions, as well as experience the force and capabilities of SUTD. (and us seniors!)'
    },
    {
        question: "When will I know that I have successfully registered for orientation?",
        answer: 'You will receive an email confirmation after registration. Your Orientation Group Leaders will also be adding you to a group chat within 2 weeks of the start of orientation!'
    },
    {
        question: "I have some physical issues with moving from point to point, will I still be able to take part in orientation?",
        answer: 'We encourage you to participate anyways to interact and mingle within your abilities! Do let your OGLs know if you have any difficulties, and we will try to arrange a solution for you :)'
    },
    {
        question: "I will not be able to make it during one of the orientation days, will I still be able to take part?",
        answer: 'We encourage you to attend all 3 days of orientation as it will be counted inside the orientation fee, but if you have to miss one or two days of the event, we would still like you to take part for you to make friends and create core memories through shared experiences.'
    }
]

export default function Orientation() {
    const [show, setShow] = useState(false)
    const sectionTopRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    const sectionBottomRefs = [useRef(null), useRef(null)];
    const sectionLeftRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
    useRef(null), useRef(null), useRef(null), useRef(null),];
    const sectionRightRefs = [useRef(null)];

  useEffect(() => {
    const topObservers = sectionTopRefs.map((ref) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
                  ref.current.classList.add(`${styles.fadeInTop}`);
          }
        },
        { threshold: 1.0 } // intersection threshold
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

    useEffect(() => {
    setShow(true);
  }, []);

  return (
      <>
        <Head>
            <meta charSet="utf-8" />
            <title>Orientation 2023</title>
            <link rel="icon" href="../../public/favicon.ico" />
            <link rel="canonical" href="http://orientation.sutd.edu.sg"/>
        </Head>
            <body className="bg-white container-fluid font-yatraone">
                <section id='navi-bar' className='bg-white p-6 md:p-2'>
                    <NaviBar/>
                </section>
                <section id='header' className='bg-[#EBC89F] pb-4 pt-10 text-center'>
                    <div className={`${show ? styles.fadeIn : "invisible"}`}>
                        <h1 className='text-[6vw] -mb-4'>LUMINO</h1>
                        <h2>@sutdlife</h2>
                        <h2>orientation@studentgov.sutd.edu.sg</h2>
                    </div>
                </section>
                <section id='countdown' className='bg-[#EBC89F] text-center pt-6 h-fit'>
                    <div className={`${styles.shape} ${show ? styles.rect : ""}`}>
                        <div className={`${show ? styles.fadeIn : "invisible"}`}>
                            <h1 className='text-[2.5vw] mt-20'>SUTD FRESHMAN ORIENTATION 2023</h1>
                            <table className='inline-block mt-16 text-white'>
                                <CountdownTimer targetDate={ORI_DATE}/>
                                {/*<tr className='text-lg md:text-[4.5vw]'>*/}
                                {/*    <td className='px-4'>00</td>*/}
                                {/*    <td className='px-4'>00</td>*/}
                                {/*    <td className='px-4'>00</td>*/}
                                {/*    <td className='px-4'>00</td>*/}
                                {/*</tr>*/}
                                <tr className='text-lg md:text-xl'>
                                    <td className='px-4 pt-4'>DAYS</td>
                                    <td className='px-4 pt-4'>HOURS</td>
                                    <td className='px-4 pt-4'>MINUTES</td>
                                    <td className='px-4 pt-4'>SECONDS</td>
                                </tr>
                            </table>
                            <h1 className='text-[2vw] mt-6'>7-9 SEPTEMBER 2023</h1>
                        </div>
                    </div>
                </section>
                <section id='storyline' className='bg-[#EBC89F] pt-10 pb-20 text-center'>
                    <h1 className='text-[8vw] md:text-[4vw] pb-2 opacity-0' ref={sectionTopRefs[0]}>Storyline</h1>
                    <div className='rounded-3xl bg-white w-11/12 mx-auto opacity-0' ref={sectionTopRefs[1]}>
                        <h1 className='text-xl p-6'>
                            A long time ago, the ancient civilisation of Lumino thrived under the magnificent crystal blessings of the Great Guardians. It was led by the four esteemed houses: Obsida, Andesa, Perida, and Lazura. One fateful day, the supply of crystals, the lifeblood of Lumino, came to an abrupt halt, plunging the houses into a state of confusion and worry. Years passed, and just as hope waned, in a moment of miraculous wonder, a giant crystal plummeted from the sky, shattering into four uneven fragments. The four great houses each laid claim to the largest fragment, convinced that they alone held the key to Lumino's survival. With tensions rising, each house must now vie fiercely and prove their worth to secure the largest share of the precious crystal. Time is of the essence, and the battle for glory has begun. Will you heed the call and join the fight to etch your name in history?
                        </h1>
                    </div>
                    <div className='opacity-0 flex md:flex-row flex-wrap w-full md:w-11/12 md:gap-4 lg:gap-8 xl:gap-12 2xl:gap-16 md:justify-center
                     gap-10 pt-16 mx-auto' ref={sectionBottomRefs[0]}>
                        {house_logos.map(logo => (
                            // eslint-disable-next-line react/jsx-key
                        <Image alt='highlights' className='object-scale-down w-1/3 md:w-1/6 mx-auto' src={logo}/>
                            ))}
                    </div>
                </section>
                <section id='navigation' className='bg-white text-center pt-28'>
                    <h1 className='md:text-[3vw] text-[5vw] opacity-0' ref={sectionTopRefs[2]}>GETTING HERE </h1>
                    <div className='flex flex-col-reverse md:flex-row  md:justify-around gap-2 px-12 pt-10'>
                        <div className='md:w-5/12 w-11/12 text-left text-[#6B0B0B] tracking-wider text-[2.5vw] pt-10 md:pt-0 md:text-[1.4vw] opacity-0' ref={sectionLeftRefs[0]}>
                            <h1>We are at 8 Somapah Road, Singapore 487372</h1>
                            <br/>
                            <h1><u>By Train</u></h1>
                            <h1>Alight at:</h1>
                            <ol className='list-decimal pl-8'>
                                <li>Upper Changi MRT Station (DT34) and take Exit E – you will be led directly into our campus</li>
                                <li>Expo MRT Station (DT35 / CG1) and walk to our campus – along Changi South Avenue 1 in the direction of Max Pavilion/Somapah Road</li>
                            </ol>
                            <br/>
                            <h1><u>By Bus</u></h1>
                            <h1>Alight at one of the bus stops along Somapah Road and walk to our Campus:</h1>
                            <ul className='list-disc pl-8'>
                                <li>B96449: SUTD. Service No: 20</li>
                                <li>B96441: Opposite SUTD. Service No: 20</li>
                            </ul>
                            <h1>Alight at one of the bus stops along Upper Changi Road East and walk to our Campus:</h1>
                            <ul className='list-disc pl-8'>
                                <li>B96041: Upper Changi Station/Opp SUTD. Service No: 2, 5, 24</li>
                                <li>B96049: Upper Changi Station/SUTD. Service No: 2, 5, 24</li>
                            </ul>
                            <h1>Alight at Changi Business Park Terrace (Bus Terminal) and walk to our Campus:</h1>
                            <ul className='list-disc pl-8'>
                                <li>Service No: 47, 118</li>
                            </ul>

                        </div>
                        <div className='md:w-6/12 w-11/12 h-[38vw] mx-auto md:my-auto opacity-0' ref={sectionRightRefs[0]}>
                            <iframe className="responsive-iframe"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7249803314576!2d103.96114931399768!3d1.3413700619781364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3cd899f260cb%3A0x99becabc6d025518!2sSingapore%20University%20of%20Technology%20%26%20Design%20(SUTD)!5e0!3m2!1sen!2ssg!4v1653292770304!5m2!1sen!2ssg"
                                    width="100%" height="100%" allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className='text-black text-[3.5vw] md:text-[2vw] pt-20 text-center md:text-left pb-10'>
                        <h1 className='md:pl-20 pb-14 opacity-0' ref={sectionTopRefs[4]}>Need help navigating around SUTD? We got you.</h1>
                        <div className='w-full md:w-7/12 mx-auto opacity-0' ref={sectionBottomRefs[1]}>
                            <Image layout='responsive' id='sutd-map' alt='sutd map' src={sutd_map}></Image>
                        </div>
                    </div>
                </section>
                <section id='faq' className='bg-[#EBC89F] text-center'>
                     <h1 className='text-[3.2vw] text-black pb-2 pt-20 pb-4 opacity-0' ref={sectionTopRefs[5]}>FAQ</h1>
                     <div className='rounded-3xl bg-white w-11/12 mx-auto'>
                         <ol className='list-decimal text-left px-20 py-10 text-lg'>
                             {questions.map((question, index) => {
                                 return(
                                     <div className='opacity-0' ref={sectionLeftRefs[index+1]}>
                                         <li className='text-[#6B0B0B] pt-8'>{question.question}</li>
                                         <h1> {question.answer}</h1>
                                     </div>
                                )
                             })}
                         </ol>
                     </div>
                </section>
                <section id='sponsors' className='bg-[#EBC89F] text-center pt-36'>
                    <h1 className='text-[3vw] pb-14 opacity-0' ref={sectionTopRefs[6]}>SPONSORS</h1>
                    <div className='hidden md:block bg-white w-11/12 rounded-lg mx-auto p-10'>
                    {/*    insert compiled image here */}
                    </div>
                     <div className='md:hidden bg-white w-11/12 rounded-lg pb-0 mx-auto p-4 mt-6'>
                    {/*    insert compiled mobile image here
                    */}
                    </div>
                </section>
            </body>
      </>
  )
}