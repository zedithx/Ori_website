import Image from "next/image";
import NaviBar from "@/components/NaviBar";
import React, {Component, useEffect, useRef} from "react";
import Swipe from "react-easy-swipe";
import {Link} from "react-scroll";
import styles from "@/app/orientation.module.css";

import sutd_logo from "../../public/images/logo/sutd_logo.png";
import instagram_icon from "../../public/images/logo/instagram-icon.png";
import scroll from "../../public/images/backgrounds/scroll.png";
import totem from "../../public/images/icon/totem.png"
import obsida_logo from "../../public/images/logo/obsida.png"
import andesa_logo from "../../public/images/logo/andesa.png"
import perida_logo from "../../public/images/logo/perida.png"
import lazura_logo from "../../public/images/logo/lazura.png"
import {TbSquareArrowLeft, TbSquareArrowRight} from "react-icons/tb";
import sutd_map from "../../public/images/sutd_map.png";


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

export default class Carousel extends Component {
    constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
        previousSlide: null,
    };
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === 7
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? 7
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
  this.setState((prevState) => ({
      currentSlide: index,
      previousSlide: prevState.currentSlide
  }));
};
    render() {
        return (
        <>
        <nav className="w-full md:space-x-10 pt-6 md:pt-10 text-[3.5vw] space-x-4 md:text-[2.5vw] lg:space-x-28 font-lookmum text-white md:visible flex justify-center">
          {[
            ['STORYLINE', 0],
              ['HOUSES', 1],
            ['GETTING HERE', 5],
            ['FAQ', 7],
            ['SPONSORS', 8]
          ].map(([title, index]) => (
              // eslint-disable-next-line react/jsx-key
              <div className={`${(this.state.currentSlide === index) ? 'underline opacity-100' : 'opacity-20'}`}>
            <Link className='hover:opacity-100 hover:underline' onClick={() => {
                    this.setCurrentSlide(index);
                  }} smooth={true} style={{cursor: 'pointer'}}>{title}</Link>
                  </div>
          ))}
        </nav>
            {/*Storyline slide*/}
            {(this.state.currentSlide === 0) ? (
                <>
                <div className='md:pt-[5vw] pt-[25vw] h-auto mx-auto' data-aos='fade-right'>
                    <div className='inline-block md:w-2/3 w-screen relative'>
                        <div className='rotate-90 md:rotate-0'>
                            <Image src={scroll} layout='responsive'/>
                        </div>
                        <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:w-2/3 w-1/2 md:text-[1.3vw] text-[2.5vw] text-black font-carvedwood'>
                            <p>A long time ago, the ancient civilisation of Lumino thrived under the magnificent crystal blessings of the Great Guardians. It was led by the four esteemed houses: <span className='text-[#561D89]'><u>Obsida</u></span>, <span className='text-[#6C3100]'><u>Andesa</u></span>, <span className='text-[#306A42]'><u>Perida</u></span>, and <span className='text-[#461BD1]'><u>Lazura</u></span>.<br></br><br></br> One fateful day, the supply of crystals, the lifeblood of Lumino, came to an abrupt halt, plunging the houses into a state of confusion and worry. <br></br><br></br>Years passed, and just as hope waned, in a moment of miraculous wonder, a giant crystal plummeted from the sky, shattering into four uneven fragments. The four great houses each laid claim to the largest fragment, convinced that they alone held the key to Lumino&apos;s survival. <br></br><br></br>With tensions rising, each house must now vie fiercely and prove their worth to secure the largest share of the precious crystal. Time is of the essence, and the battle for glory has begun. Will you heed the call and join the fight to etch your name in history?</p>
                        </div>
                        <div className='absolute md:bottom-0 md:right-0 -bottom-10 right-8 md:w-[12vw] w-[20vw]'>
                        <Image src={totem} layout='responsive'/>
                    </div>
                    </div>
                </div>
                    </>
                ): null}

            {/*Houses slide*/}
            {(this.state.currentSlide < 5 && this.state.currentSlide > 0) ? (
            <div className='md:h-screen h-auto pt-[8vw] pb-[4vw] text-white' data-aos={`${(this.state.previousSlide > 1) ? 'fade-right' : "fade-left"}`}>
                {/*Navigation Bar for Houses*/}
                <div className='flex md:flex-col flex-row md:float-left md:pl-20 pl-10 md:text-[5vw] text-[7.5vw] text-white gap-4'>
                    <div className={`${(this.state.currentSlide === 1) ? 'underline opacity-100' : 'opacity-20'}`}>
                        <Link className='hover:opacity-100 hover:underline' onClick={() => {
                this.setCurrentSlide(1);
              }} smooth={true} style={{cursor: 'pointer'}}>Obsida</Link>
                    </div>
                    <div className={`${(this.state.currentSlide === 2) ? 'underline opacity-100' : 'opacity-20'}`}>
                        <Link className='hover:opacity-100 hover:underline' onClick={() => {
                this.setCurrentSlide(2);
              }} smooth={true} style={{cursor: 'pointer'}}>Andesa</Link>
                    </div>
                    <div className={`${(this.state.currentSlide === 3) ? 'underline opacity-100' : 'opacity-20'}`}>
                        <Link className='hover:opacity-100 hover:underline' onClick={() => {
                this.setCurrentSlide(3);
              }} smooth={true} style={{cursor: 'pointer'}}>Perida</Link>
                    </div>
                    <div className={`${(this.state.currentSlide === 4) ? 'underline opacity-100' : 'opacity-20'}`}>
                        <Link className='hover:opacity-100 hover:underline' onClick={() => {
                this.setCurrentSlide(4);
              }} smooth={true} style={{cursor: 'pointer'}}>Lazura</Link>
                    </div>
                </div>
                {/*content to display based on house selected*/}
                    {(this.state.currentSlide === 1) ? (
                    <div className='flex flex-wrap justify-center pt-10 md:pt-0' data-aos='zoom-in'>
                        <div className='md:w-1/4 w-1/2'>
                            <Image loading="eager" src={obsida_logo}/>
                        </div>
                        <div className='text-[#561D89] pr-6 md:pr-0'>
                            <h1 className='md:text-[7.5vw] text-[17vw] pt-10 md:pt-20'>OBSIDA</h1>
                            <br></br>
                                    <h1 className='md:text-[3vw] text-[6vw]'>AKA THE BLACKSMITHS</h1>
                        </div>
                    </div>
                        ): null}
                    {(this.state.currentSlide === 2) ? (
                        <div className='flex flex-wrap justify-center pt-10 md:pt-0' data-aos='zoom-in'>
                            <div className='md:w-1/4 w-1/2'>
                                <Image loading="eager" src={andesa_logo}/>
                            </div>
                            <div className='text-[#6C3100] md:pl-10 pl-2 pr-6 md:pr-0'>
                                <h1 className='md:text-[7.5vw] text-[17vw] pt-10 md:pt-20'>ANDESA</h1>
                                <br></br>
                                    <h1 className='md:text-[3vw] text-[6vw]'>AKA THE ARCHITECTS</h1>
                            </div>
                        </div>
                        ): null}
                    {(this.state.currentSlide === 3) ? (
                        <div className='flex flex-wrap justify-center pt-10 md:pt-0' data-aos='zoom-in'>
                            <div className='md:w-1/4 w-1/2'>
                                <Image loading="eager" src={perida_logo}/>
                            </div>
                            <div className='text-[#306A42] pr-6 md:pr-0'>
                                <h1 className='md:text-[7.5vw] text-[17vw] pt-10 md:pt-20'>PERIDA</h1>
                                <br></br>
                                    <h1 className='md:text-[3vw] text-[6vw]'>AKA THE HEALERS</h1>
                            </div>
                        </div>
                    ): null}
                    {(this.state.currentSlide === 4) ? (
                        <div className='flex flex-wrap justify-center pt-10 md:pt-0' data-aos='zoom-in'>
                            <div className='md:w-1/4 w-1/2'>
                                <Image loading="eager" src={lazura_logo}/>
                            </div>
                            <div className='text-[#461BD1] pr-6 md:pr-0'>
                                <h1 className='md:text-[7.5vw] text-[17vw] pt-10 md:pt-20'>LAZURA</h1>
                                <br></br>
                                    <h1 className='md:text-[3vw] text-[6vw]'>AKA THE ARTISTS</h1>
                            </div>
                        </div>
                    ): null}
            </div>
            ): null}

            {/*Navigation Slide*/}
            {(this.state.currentSlide > 4 && this.state.currentSlide < 7) ? (
                <section id='navigation' className='text-center'>
                    {(this.state.currentSlide === 5) ? (
                        <>
                            <div
                                className='rounded-3xl md:h-auto h-[100vw] mt-10 bg-white w-11/12 backdrop-blur mx-auto overflow-auto bg-opacity-25' data-aos='fade-right'>
                                <div
                                    className='flex flex-col-reverse md:flex-row  md:justify-around gap-2 md:px-12 px-4 pt-10'>
                                    <div
                                        className='md:w-5/12 w-11/12 font-yatraone text-left text-black tracking-wider text-[4vw] pt-10 md:pt-0 ml-4 md:ml-0 md:text-[1.1vw]'>
                                        <h1>We are at 8 Somapah Road, Singapore 487372</h1>
                                        <br/>
                                        <h1 className='text-[#6B0B0B]'><u>By Train</u></h1>
                                        <h1>Alight at:</h1>
                                        <ol className='list-decimal pl-8'>
                                            <li>Upper Changi MRT Station (DT34) and take Exit E – you will be led directly
                                                into our campus
                                            </li>
                                            <li>Expo MRT Station (DT35 / CG1) and walk to our campus – along Changi South
                                                Avenue 1 in the direction of Max Pavilion/Somapah Road
                                            </li>
                                        </ol>
                                        <br/>
                                        <h1 className='text-[#6B0B0B]'><u>By Bus</u></h1>
                                        <h1>Alight at one of the bus stops along Somapah Road and walk to our Campus:</h1>
                                        <ul className='list-disc pl-8'>
                                            <li>B96449: SUTD. Service No: 20</li>
                                            <li>B96441: Opposite SUTD. Service No: 20</li>
                                        </ul>
                                        <h1>Alight at one of the bus stops along Upper Changi Road East and walk to our
                                            Campus:</h1>
                                        <ul className='list-disc pl-8'>
                                            <li>B96041: Upper Changi Station/Opp SUTD. Service No: 2, 5, 24</li>
                                            <li>B96049: Upper Changi Station/SUTD. Service No: 2, 5, 24</li>
                                        </ul>
                                        <h1>Alight at Changi Business Park Terrace (Bus Terminal) and walk to our
                                            Campus:</h1>
                                        <ul className='list-disc pl-8'>
                                            <li>Service No: 47, 118</li>
                                        </ul>
                                    </div>
                                    <div className='md:w-6/12 w-11/12 md:h-[38vw] h-[50vw] mx-auto md:my-auto'>
                                        <iframe className="responsive-iframe"
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7249803314576!2d103.96114931399768!3d1.3413700619781364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3cd899f260cb%3A0x99becabc6d025518!2sSingapore%20University%20of%20Technology%20%26%20Design%20(SUTD)!5e0!3m2!1sen!2ssg!4v1653292770304!5m2!1sen!2ssg"
                                                width="100%" height="100%" allowFullScreen="" loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                                <table className='mx-auto mt-4 hidden md:inline-block'>
                                <tr>
                                    <td>
                                        <TbSquareArrowRight className='text-white text-[6vw] pr-4 hover:text-black' onClick={this.nextSlide}/>
                                    </td>
                                    <td>
                                        <h1 className='text-[2vw] text-white'> Click here to see the map of SUTD </h1>
                                    </td>
                                </tr>
                                </table>
                            </div>
                            <table className='mx-auto mt-2 md:hidden'>
                                    <tr>
                                        <td>
                                            <TbSquareArrowRight className='text-white text-[16vw] pr-4 hover:text-black' onClick={this.nextSlide}/>
                                        </td>
                                        <td>
                                            <h1 className='text-[6vw] text-white'> Click here to see the map of SUTD </h1>
                                        </td>
                                    </tr>
                            </table>
                            </>
                        ) : null}
                    {(this.state.currentSlide === 6) ? (
                        <>
                        <div
                            className='rounded-3xl md:h-auto h-[100vw] mt-10 bg-white w-11/12 backdrop-blur mx-auto bg-opacity-25 overflow-auto' data-aos={`${(this.state.previousSlide > 5) ? 'fade-right' : "fade-left"}`}>
                            <div
                                className='text-black px-2 pt-20 text-center md:text-left pb-10'>
                                <div className='w-full md:w-7/12 mx-auto pb-10 md:pb-0 '>
                                    <Image id='sutd-map' alt='sutd map' src={sutd_map}></Image>
                                </div>
                            </div>
                            <table className='mx-auto mt-4 hidden md:inline-block'>
                                <tr>
                                    <td>
                                        <TbSquareArrowLeft className='text-white text-[6vw] pr-6 hover:text-black' onClick={this.prevSlide}/>
                                    </td>
                                    <td>
                                        <h1 className='text-[2vw] text-white'> Click here to go back to the previous page</h1>
                                    </td>
                                </tr>
                                </table>
                        </div>
                        <table className='mx-auto mt-2 md:hidden'>
                            <tr>
                                <td>
                                    <TbSquareArrowLeft className='text-white text-[16vw] pr-2' onClick={this.prevSlide}/>
                                </td>
                                <td>
                                    <h1 className='text-[5.5vw] text-white'> Click here to return to the previous page</h1>
                                </td>
                            </tr>
                        </table>
                        </>
                        ):null}
                    </section>
                ): null}

            {/* FAQ Slide */}
            {(this.state.currentSlide === 7) ? (
                <section id='faq' className='text-center' data-aos={`${(this.state.previousSlide > 6) ? 'fade-right' : "fade-left"}`}>
                         <div className='rounded-3xl md:h-screen h-[120vw] mt-10 bg-white w-11/12 backdrop-blur mx-auto bg-opacity-25 overflow-auto'>
                             <ol className='list-decimal text-black font-yatraone text-left md:px-20 px-14 py-4 md:text-lg text-sm'>
                                 {questions.map((question) => {
                                     return(
                                         <div key={question.question}>
                                             <li className='text-[#6B0B0B] pt-8'>{question.question}</li>
                                             <h1> {question.answer}</h1>
                                         </div>
                                    )
                                 })}
                             </ol>
                         </div>
                    </section>
                ): null}
             {(this.state.currentSlide === 8) ? (
                <div className='md:h-screen h-auto' data-aos='fade-left'>
                {/*    To put sponsors*/}
                </div>
                ): null}
            </>
            );
            }}

