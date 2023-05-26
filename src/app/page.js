"use client";
import Image from 'next/image'
import Head from 'next/head'
import React, {useEffect, useRef, useState} from "react"
import { Link } from "react-scroll"
import './globals.css'
import styles from './orientation.module.css'

import sutd_logo from "../../public/images/logo/sutd_logo.svg"
import obsida_logo from "../../public/images/logo/blacksmith house no text 1.svg"
import andesa_logo from "../../public/images/logo/IMG_0398 1.svg"
import perida_logo from "../../public/images/logo/healing house no text (2) 1.svg"
import lazura_logo from "../../public/images/logo/artist house no text 1.svg"
import sutd_map from "../../public/images/sutd_map.svg"
const house_logos = [obsida_logo, andesa_logo, perida_logo, lazura_logo]

export default function Orientation() {
    const [show, setShow] = useState(false)
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    sectionRef.current.classList.add(`${styles.fadeIn1}`);
                    observer.disconnect()
                }
            },
            {threshold: 0.5} // intersection threshold
        )

        return () => observer.disconnect();
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
                <section id='navi-bar' className='bg-white'>
                     <a href="https://www.sutd.edu.sg" target="_blank" className='absolute hidden md:block left-10 top-4 w-[7.5vw]'>
                        <Image layout='responsive' id="sutd-logo" src={sutd_logo} alt="SUTD" />
                    </a>
                    <nav className="w-full md:space-x-0 lg:space-x-4 lg:mr-8 invisible md:visible md:flex md:justify-end">
                      {[
                        ['STORYLINE', 'storyline'],
                        ['GETTING HERE', 'navigation'],
                        ['FAQ', 'faq'],
                        ['SPONSORS', 'sponsors'],
                      ].map(([title, url]) => (
                          // eslint-disable-next-line react/jsx-key
                        <Link to={url} smooth={true} style={{cursor: 'pointer'}} className="rounded-lg md:px-5 mx-0 py-7 font-yatraone text-black"><u>{title}</u></Link>
                      ))}
                    </nav>
                </section>
                <section id='header' className='bg-[#EBC89F] pb-4 text-center'>
                    <h1 className='text-[6vw] -mb-4'>LUMINO</h1>
                    <h2>@sutdlife</h2>
                    <h2>orientation@studentgov.sutd.edu.sg</h2>
                </section>
                <section id='countdown' className='bg-[#EBC89F] text-center pt-6 h-fit'>
                    <div className={`${styles.shape} ${show ? styles.rect : ""}`}>
                        <div className={`${show ? styles.fadeIn : "invisible"}`}>
                            <h1 className='text-[2.5vw] mt-20'>SUTD FRESHMAN ORIENTATION 2023</h1>
                            <table className='inline-block mt-16 text-white'>
                                <tr className='text-lg md:text-[4.5vw]'>
                                    <td className='px-4'>00</td>
                                    <td className='px-4'>00</td>
                                    <td className='px-4'>00</td>
                                    <td className='px-4'>00</td>
                                </tr>
                                <tr className='text-lg md:text-xl'>
                                    <td className='px-4'>DAYS</td>
                                    <td className='px-4'>HOURS</td>
                                    <td className='px-4'>MINUTES</td>
                                    <td className='px-4'>SECONDS</td>
                                </tr>
                            </table>
                            <h1 className='text-[2vw] mt-6'>7-9 SEPTEMBER 2023</h1>
                        </div>
                    </div>
                </section>
                <section id='storyline' className='bg-[#EBC89F] pb-2 text-center'>
                    <h1 className='text-[4vw] pb-2'>Storyline</h1>
                    <div className='rounded-3xl bg-white w-11/12 mx-auto'>
                        <h1 className='text-xl p-6'>
                            A long time ago, the ancient civilisation of Lumino thrived under the magnificent crystal blessings of the Great Guardians. It was led by the four esteemed houses: Obsida, Andesa, Perida, and Lazura. One fateful day, the supply of crystals, the lifeblood of Lumino, came to an abrupt halt, plunging the houses into a state of confusion and worry. Years passed, and just as hope waned, in a moment of miraculous wonder, a giant crystal plummeted from the sky, shattering into four uneven fragments. The four great houses each laid claim to the largest fragment, convinced that they alone held the key to Lumino's survival. With tensions rising, each house must now vie fiercely and prove their worth to secure the largest share of the precious crystal. Time is of the essence, and the battle for glory has begun. Will you heed the call and join the fight to etch your name in history?
                        </h1>
                    </div>
                    <div className='flex md:flex-row flex-col w-full md:w-11/12 md:gap-4 lg:gap-8 xl:gap-12 2xl:gap-16 md:justify-center
                     gap-10 pt-16 mx-auto'>
                        {house_logos.map(logo => (
                            // eslint-disable-next-line react/jsx-key
                        <Image alt='highlights' className='object-scale-down w-full md:w-1/6 mx-auto' src={logo}/>
                            ))}
                    </div>
                </section>
                <section id='navigation' className='bg-white text-center pt-28'>
                    <h1 className='md:text-[3vw] text-[5vw]'>GETTING HERE </h1>
                    <div className='flex flex-col-reverse md:flex-row  md:justify-around gap-2 px-12 pt-10'>
                        <div className='md:w-5/12 w-11/12 text-left text-[#6B0B0B] tracking-wider text-[2.5vw] pt-10 md:pt-0 md:text-[1.4vw]'>
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
                        <div className='md:w-6/12 w-11/12 h-[38vw] mx-auto md:my-auto'>
                            <iframe className="responsive-iframe"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7249803314576!2d103.96114931399768!3d1.3413700619781364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3cd899f260cb%3A0x99becabc6d025518!2sSingapore%20University%20of%20Technology%20%26%20Design%20(SUTD)!5e0!3m2!1sen!2ssg!4v1653292770304!5m2!1sen!2ssg"
                                    width="100%" height="100%" allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className='text-black text-[2vw] pt-20 text-left'>
                        <h1 className='pl-20 pb-14'>Need help navigating around SUTD? We got you.</h1>
                        <div className='w-7/12 mx-auto'>
                            <Image layout='responsive' id='sutd-map' alt='sutd map' src={sutd_map}></Image>
                        </div>
                    </div>
                </section>
                <section id='faq' className='bg-[#EBC89F] text-center'>
                     <h1 className='text-[3.2vw] text-black pb-2 pt-20 pb-4'>FAQ</h1>
                     <div className='rounded-3xl bg-white w-11/12 mx-auto'>
                         <ol className='list-decimal text-left px-20 py-10 text-lg'>
                             <li className='text-[#6B0B0B] pt-8'>"Can I come for orientation if I missed the sign-ups?"</li>
                             <h1>Please sign up during the sign-up period as these numbers are taken into account for planning purposes, such as food and T-shirts. We cannot guarantee that you can still attend orientation if you miss the sign-ups.</h1>
                             <li className='text-[#6B0B0B] pt-8'>"Do I have to pay for orientation?"</li>
                             <h1>Yes. Further instructions will be provided on how to make payment.</h1>
                             <li className='text-[#6B0B0B] pt-8'>"Can I leave orientation mid-way?"</li>
                             <h1>We highly encourage you to participate all the way as it is a full 3-day experience!</h1>
                             <li className='text-[#6B0B0B] pt-8'>"Do I have to stay overnight during orientation?"</li>
                             <h1>You will have checked-in to your room prior to orientation. Staying in your allocated room would be recommended as it would be more convenient for the 3 full days of activity.</h1>
                             <li className='text-[#6B0B0B] pt-8'>"Will food be provided?"</li>
                             <h1>Lunch and dinner will be provided for Day 1 and Day 3. Only lunch will be provided on Day 2.</h1>
                             <li className='text-[#6B0B0B] pt-8'>"Will vegetarian food / food with dietary restrictions be provided?"</li>
                             <h1>We will be collecting your dietary preferences and meals will be catered for accordingly.</h1>
                             <li className='text-[#6B0B0B] pt-8'>"Can I be in the same group as my friend?"</li>
                             <h1>You will be grouped with your soon-to-be Term 1 and 2 classmates! 😀</h1>
                             <li className='text-[#6B0B0B] pt-8'>"What will I be doing during orientation?"</li>
                             <h1>Be orientated around the campus that is SUTD, have fun-filled activities and interactions, as well as experience the force and capabilities of SUTD. (and us seniors!)</h1>
                             <li className='text-[#6B0B0B] pt-8'>"When will I know that I have successfully registered for orientation?"</li>
                             <h1>You will receive an email confirmation after registration. Your Orientation Group Leaders will also be adding you to a group chat within 2 weeks of the start of orientation!</h1>
                             <li className='text-[#6B0B0B] pt-8'>"I have some physical issues with moving from point to point, will I still be able to take part in orientation?"</li>
                             <h1>We encourage you to participate anyways to interact and mingle within your abilities! Do let your OGLs know if you have any difficulties, and we will try to arrange a solution for you :)</h1>
                             <li className='text-[#6B0B0B] pt-8'>"I will not be able to make it during one of the orientation days, will I still be able to take part?"</li>
                             <h1>We encourage you to attend all 3 days of orientation as it will be counted inside the orientation fee, but if you have to miss one or two days of the event, we would still like you to take part for you to make friends and create core memories through shared experiences.</h1>
                         </ol>
                     </div>
                </section>
                <section id='sponsors' className='bg-[#EBC89F] text-center pt-36'>
                    <h1 className='text-[3vw] pb-14'>SPONSORS</h1>
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