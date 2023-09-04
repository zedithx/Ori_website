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
import nav_logo from "../../public/images/logo/nav_logo.png"
import {TbSquareArrowLeft, TbSquareArrowRight} from "react-icons/tb";
import sutd_map from "../../public/images/sutd_map.png";
import {AiOutlineInstagram} from "react-icons/ai";
import {IoMdMail} from "react-icons/io";
import {SlArrowUp} from "react-icons/sl";
import setShow from "../app/page"
import artfriend from "../../public/images/logo/sponsors/artfriend.jpg";
import eltelierworks from "../../public/images/logo/sponsors/eltelierworks.jpg";
import holoetechnik from "../../public/images/logo/sponsors/holoetechnik.png";
import huion from "../../public/images/logo/sponsors/huion.png";
import kimkbbq from "../../public/images/logo/sponsors/kimkbbq.png";
import milksha from "../../public/images/logo/sponsors/milksha.png";
import pilot from "../../public/images/logo/sponsors/pilot.jpg";
import stives from "../../public/images/logo/sponsors/stives.jpg";


const questions = [
    {
        question:"How do I sign up for orientation?",
        //{image} to be swapped with the nav image when generating to display the list of FAQ
        answer: "To submit orientation eform, please proceed to MyPortal, click {image} at the top right-hand bar and look for Self Service > Forms Download > OMEx Forms.",
    },
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
        answer: 'You will have checked-in to your room prior to Orientation. Staying in your allocated room would be recommended as it would be more convenient for the 3 full days of activity.'
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
        answer: 'You will receive an email confirmation shortly after registration closes'
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
        <nav className="w-full md:space-x-10 pt-6 md:pb-0 md:pt-10 text-[3.5vw] space-x-4 md:text-[2.5vw] lg:space-x-28 font-lookmum text-white md:visible flex justify-center">
          {[
            ['STORYLINE', [0]],
            ['HOUSES', [1,2,3,4]],
            ['GETTING HERE', [5, 6]],
            ['FAQ', [7]],
            ['SPONSORS', [8]]
          ].map(([title, index]) => (
              // eslint-disable-next-line react/jsx-key
              <div className={`${index.includes(this.state.currentSlide) ? 'underline opacity-100' : 'opacity-20'}`}>
            <Link className='hover:opacity-100 hover:underline' onClick={() => {
                    this.setCurrentSlide(index[0]);
                  }} smooth={true} style={{cursor: 'pointer'}}>{title}</Link>
                  </div>
          ))}
        </nav>
            {/*Storyline slide*/}
            {(this.state.currentSlide === 0) ? (
                <>
                <div className='pt-[35vw] md:pt-[3vw] flex justify-center' data-aos='fade-right'>
                    <div className='inline-block md:w-6/12 relative'>
                        <div className='rotate-90 w-[120vw] md:w-full md:rotate-0'>
                            <Image src={scroll} alt='storyline background' layout='responsive'/>
                        </div>
                        <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:w-2/3 w-1/2 md:text-[1vw] text-[2.8vw] text-black font-carvedwood'>
                            <p>A long time ago, the ancient civilisation of Lumino thrived under the magnificent crystal blessings of the Great Guardians. It was led by the four esteemed houses: <span className='text-[#561D89]'><u>Obsida</u></span>, <span className='text-[#6C3100]'><u>Andesa</u></span>, <span className='text-[#306A42]'><u>Perida</u></span>, and <span className='text-[#461BD1]'><u>Lazura</u></span>.<br></br><br></br> One fateful day, the supply of crystals, the lifeblood of Lumino, came to an abrupt halt, plunging the houses into a state of confusion and worry. <br></br><br></br>Years passed, and just as hope waned, in a moment of miraculous wonder, a giant crystal plummeted from the sky, shattering into four uneven fragments. The four great houses each laid claim to the largest fragment, convinced that they alone held the key to Lumino&apos;s survival. <br></br><br></br>With tensions rising, each house must now vie fiercely and prove their worth to secure the largest share of the precious crystal. Time is of the essence, and the battle for glory has begun. Will you heed the call and join the fight to etch your name in history?</p>
                        </div>
                        <div className='absolute md:bottom-0 md:right-0 -bottom-10 right-8 md:w-[12vw] w-[20vw]'>
                        <Image src={totem} alt='totem' layout='responsive'/>
                    </div>
                    </div>
                </div>
                    </>
                ): null}

            {/*Houses slide*/}
            {(this.state.currentSlide < 5 && this.state.currentSlide > 0) ? (
            <div className='md:pt-[4vw] py-[10vw] md:backdrop-blur-sm h-full text-white' data-aos={`${(this.state.previousSlide > 1) ? 'fade-right' : "fade-left"}`}>
                {/*Navigation Bar for Houses*/}
                <div className='flex md:flex-col flex-row md:float-left justify-center pb-[4vw] md:pb-0 md:text-[5vw] text-[7.5vw] gap-6 md:pl-24'>
                    <div className={`${(this.state.currentSlide === 1) ? 'underline opacity-100' : 'opacity-20'}`}>
                        <Link className='text-[#561D89] hover:opacity-100 hover:underline' onClick={() => {
                this.setCurrentSlide(1);
              }} smooth={true} style={{cursor: 'pointer'}}>Obsida</Link>
                    </div>
                    <div className={`${(this.state.currentSlide === 2) ? 'underline opacity-100' : 'opacity-20'}`}>
                        <Link className='text-[#6C3100] hover:opacity-100 hover:underline' onClick={() => {
                this.setCurrentSlide(2);
              }} smooth={true} style={{cursor: 'pointer'}}>Andesa</Link>
                    </div>
                    <div className={`${(this.state.currentSlide === 3) ? 'underline opacity-100' : 'opacity-20'}`}>
                        <Link className='text-[#306A42] hover:opacity-100 hover:underline' onClick={() => {
                this.setCurrentSlide(3);
              }} smooth={true} style={{cursor: 'pointer'}}>Perida</Link>
                    </div>
                    <div className={`${(this.state.currentSlide === 4) ? 'underline opacity-100' : 'opacity-20'}`}>
                        <Link className='text-[#461BD1] hover:opacity-100 hover:underline' onClick={() => {
                this.setCurrentSlide(4);
              }} smooth={true} style={{cursor: 'pointer'}}>Lazura</Link>
                    </div>
                </div>
                {/*content to display based on house selected*/}
                    {/*Obsida House*/}
                    {(this.state.currentSlide === 1) ? (
                    <div className='flex flex backdrop-blur-sm h-full' data-aos='zoom-in'>
                        {/*Blur background to make text easier to see*/}
                        {/*Desktop Version*/}
                        {/*Create 1 row and create right padding*/}
                        <div className='flex flex-row md:float left md:pr-20'>
                            {/*House logo image takes up 25% width of the row*/}
                            <div className='md:w-1/4 hidden md:block'>
                                <Image class="object-fit: cover" loading="eager" alt='obsida logo' src={obsida_logo}/>
                            </div>
                            {/*For 2nd coloumn in the row create 6 rows occupying 75% of the parent row*/}
                            <div className='flex flex-col text-left md:w-3/4 hidden md:block'>
                                <h1 className='md:text-[5vw] text-[#561D89] text-center md:pt-5'>💜 House of OBSIDA 💜</h1>
                                <h3 className='text-[#561D89] text-center md:text-[3vw]'>AKA THE BLACKSMITHS</h3>
                                <br></br>
                                <h2 className='md:text-[1.75vw] text-[#7627bc]'>It is the house that provides defence against threats for ✨ LUMINO ✨ and supplies powerful, indestructible weapons ⚔️🛡️. They rely on the crystal to craft these armaments. Without them, ✨ LUMINO ✨ will be vulnerable and incapable of fending for themselves. It is said that the weapons they forge are even fit for gods 💪! Want to be part of this amazing and powerful house?</h2>
                                <br></br><br></br>
                                <h2 className='text-center text-[4vw]'>Sign up for the Freshmen Orientation 2023!</h2>
                            </div>
                        </div>
                        {/*Mobile Version*/}
                        <div className='flew flex-row pr-6 md:hidden'>
                            {/*Create 2 rows*/}
                            <div className='flex flex-row'>
                                {/*House logo image takes up 33.333% width of the row*/}
                                <div className='w-1/3'>
                                    <Image class="object-fit: cover" loading="eager" alt='obsida logo' src={obsida_logo}/>
                                </div>
                                {/*For 2nd coloumn in the row create 2 rows occupying 66.667% of the parent row*/}
                                <div className='flex flex-col w-2/3 justify-center'>
                                    <h1 className='text-[#561D89] text-center text-[7.5vw] '>💜 House of OBSIDA 💜</h1>
                                    <h3 className='text-[#561D89] text-center text-[5vw]'>AKA THE BLACKSMITHS</h3>
                                </div>
                            </div>
                            <div className='pl-8'>
                                <h2 className='text-[4vw] text-[#7627bc] text-left'>It is the house that provides defence against threats for ✨ LUMINO ✨ and supplies powerful, indestructible weapons ⚔️🛡️. They rely on the crystal to craft these armaments. Without them, ✨ LUMINO ✨ will be vulnerable and incapable of fending for themselves. It is said that the weapons they forge are even fit for gods 💪! Want to be part of this amazing and powerful house?</h2>
                                <br></br>
                                <h2 className='text-center text-[10vw]'>Sign up for the Freshmen Orientation 2023!</h2>
                            </div>
                        </div>
                    </div>
                        ): null}
                    {/*Andesa House*/}
                    {(this.state.currentSlide === 2) ? (
                    <div className='flex flex backdrop-blur-sm h-full' data-aos='zoom-in'>
                        {/*Blur background to make text easier to see*/}
                        {/*Desktop Version*/}
                        {/*Create 1 row and create right padding*/}
                        <div className='flex flex-row md:float left md:pr-20'>
                            {/*House logo image takes up 25% width of the row*/}
                            <div className='md:w-1/4 hidden md:block'>
                                <Image class="object-fit: cover" loading="eager" alt='andesa logo' src={andesa_logo}/>
                            </div>
                            {/*For 2nd coloumn in the row create 6 rows occupying 75% of the parent row*/}
                            <div className='flex flex-col text-left md:w-3/4 hidden md:block'>
                                <h1 className='md:text-[5vw] text-[#6C3100] text-center md:pt-5'>🧡 House of ANDESA 🧡</h1>
                                <h3 className='text-[#6C3100] text-center md:text-[3vw]'>AKA THE ARCHITECTS</h3>
                                <br></br>
                                <h2 className='md:text-[1.75vw] text-[#924200]'>Cosy houses 🏠, eye-catching skyscrapers 🏙️, magnificent castles 🏰,... they are responsible for them all. Skilled in architecture 🛠️ and masters in the laws of physics ⚙️, they are able to build strong and stable buildings. Together with the use of the crystals, the buildings they build are so strong that they are able to withstand all forms of natural disasters 🌊☄️⚡️. Want to be part of this amazing and powerful house?</h2>
                                <br></br><br></br>
                                <h2 className='text-center text-[4vw]'>Sign up for the Freshmen Orientation 2023!</h2>
                            </div>
                        </div>
                        {/*Mobile Version*/}
                        <div className='flew flex-row pr-6 md:hidden'>
                            {/*Create 2 rows*/}
                            <div className='flex flex-row'>
                                {/*House logo image takes up 33.333% width of the row*/}
                                <div className='w-1/3'>
                                    <Image class="object-fit: cover" loading="eager" alt='andesa logo' src={andesa_logo}/>
                                </div>
                                {/*For 2nd coloumn in the row create 2 rows occupying 66.667% of the parent row*/}
                                <div className='flex flex-col w-2/3 justify-center'>
                                    <h1 className='text-[#6C3100] text-center text-[7.5vw] '>🧡 House of ANDESA 🧡</h1>
                                    <h3 className='text-[#6C3100] text-center text-[5vw]'>AKA THE ARCHITECTS</h3>
                                </div>
                            </div>
                            <div className='pl-8'>
                                <h2 className='text-[4vw] text-[#924200] text-left'>Cosy houses 🏠, eye-catching skyscrapers 🏙️, magnificent castles 🏰,... they are responsible for them all. Skilled in architecture 🛠️ and masters in the laws of physics ⚙️, they are able to build strong and stable buildings. Together with the use of the crystals, the buildings they build are so strong that they are able to withstand all forms of natural disasters 🌊☄️⚡️. Want to be part of this amazing and powerful house?</h2>
                                <br></br>
                                <h2 className='text-center text-[10vw]'>Sign up for the Freshmen Orientation 2023!</h2>
                            </div>
                        </div>
                    </div>
                        ): null}
                    {/*Perida House*/}    
                    {(this.state.currentSlide === 3) ? (
                    <div className='flex flex backdrop-blur-sm h-full' data-aos='zoom-in'>
                        {/*Blur background to make text easier to see*/}
                        {/*Desktop Version*/}
                        {/*Create 1 row and create right padding*/}
                        <div className='flex flex-row md:float left md:pr-20'>
                            {/*House logo image takes up 25% width of the row*/}
                            <div className='md:w-1/4 hidden md:block'>
                                <Image class="object-fit: cover" loading="eager" alt='perida logo' src={perida_logo}/>
                            </div>
                            {/*For 2nd coloumn in the row create 6 rows occupying 75% of the parent row*/}
                            <div className='flex flex-col text-left md:w-3/4 hidden md:block'>
                                <h1 className='md:text-[5vw] text-[#306A42] text-center md:pt-5'>💚 House of PERIDA 💚</h1>
                                <h3 className='text-[#306A42] text-center md:text-[3vw]'>AKA THE HEALERS</h3>
                                <br></br>
                                <h2 className='md:text-[1.75vw] text-[#377b4c]'>Fallen sick 🤒 ? Do not fear for these healers are able to cure any illness and ailment that exists in the world 🌎🦠. There has even been a rumour that says that with the power of the crystals, they are able to revive the dead💀 and make one live on for all eternity🍀. However, no one knows how true these rumours are… 🧪🩺🧬 Want to be part of this amazing and powerful house?</h2>
                                <br></br><br></br>
                                <h2 className='text-center text-[4vw]'>Sign up for the Freshmen Orientation 2023!</h2>
                            </div>
                        </div>
                        {/*Mobile Version*/}
                        <div className='flew flex-row pr-6 md:hidden'>
                            {/*Create 2 rows*/}
                            <div className='flex flex-row'>
                                {/*House logo image takes up 33.333% width of the row*/}
                                <div className='w-1/3'>
                                    <Image class="object-fit: cover" loading="eager" alt='perida logo' src={perida_logo}/>
                                </div>
                                {/*For 2nd coloumn in the row create 2 rows occupying 66.667% of the parent row*/}
                                <div className='flex flex-col w-2/3 justify-center'>
                                    <h1 className='text-[#306A42] text-center text-[7.5vw] '>💚 House of PERIDA 💚</h1>
                                    <h3 className='text-[#306A42] text-center text-[5vw]'>AKA THE HEALERS</h3>
                                </div>
                            </div>
                            <div className='pl-8'>
                                <h2 className='text-[4vw] text-[#377b4c] text-left'>Fallen sick 🤒 ? Do not fear for these healers are able to cure any illness and ailment that exists in the world 🌎🦠. There has even been a rumour that says that with the power of the crystals, they are able to revive the dead💀 and make one live on for all eternity🍀. However, no one knows how true these rumours are… 🧪🩺🧬 Want to be part of this amazing and powerful house?</h2>
                                <br></br>
                                <h2 className='text-center text-[10vw]'>Sign up for the Freshmen Orientation 2023!</h2>
                            </div>
                        </div>
                    </div>
                    ): null}
                    {/*Lazura House*/}
                    {(this.state.currentSlide === 4) ? (
                    <div className='flex flex backdrop-blur-sm h-full' data-aos='zoom-in'>
                        {/*Blur background to make text easier to see*/}
                        {/*Desktop Version*/}
                        {/*Create 1 row and create right padding*/}
                        <div className='flex flex-row md:float left md:pr-20'>
                            {/*House logo image takes up 25% width of the row*/}
                            <div className='md:w-1/4 hidden md:block'>
                                <Image class="object-fit: cover" loading="eager" alt='lazura logo' src={lazura_logo}/>
                            </div>
                            {/*For 2nd coloumn in the row create 6 rows occupying 75% of the parent row*/}
                            <div className='flex flex-col text-left md:w-3/4 hidden md:block'>
                                <h1 className='md:text-[5vw] text-[#461BD1] text-center md:pt-5'>💙 House of LAZURA 💙</h1>
                                <h3 className='text-[#461BD1] text-center md:text-[3vw]'>AKA THE ARTISTS</h3>
                                <br></br>
                                <h2 className='md:text-[1.75vw] text-[#5529e3]'>You are able to identify them from a mile away as they pride themselves for having the best aesthetics 🌟 and fashion taste  👔👗. They decorate ✨ LUMINO ✨ with their brilliant artworks 🎨, creating an uplifting and colourful place for all civilians to live 🌈. Artworks made with the crystals are especially striking, glittering like stars in daylight, and may even contain magical powers 💫 if the artist poured out their heart and soul into making them.🔮 Want to be part of this amazing and powerful house?</h2>
                                <br></br><br></br>
                                <h2 className='text-center text-[4vw]'>Sign up for the Freshmen Orientation 2023!</h2>
                            </div>
                        </div>
                        {/*Mobile Version*/}
                        <div className='flew flex-row pr-6 md:hidden'>
                            {/*Create 2 rows*/}
                            <div className='flex flex-row'>
                                {/*House logo image takes up 33.333% width of the row*/}
                                <div className='w-1/3'>
                                    <Image class="object-fit: cover" loading="eager" alt='lazura logo' src={lazura_logo}/>
                                </div>
                                {/*House logo image takes up 33.333% width of the row*/}
                                <div className='flex flex-col w-2/3 justify-center'>
                                    <h1 className='text-[#461BD1] text-center text-[7.5vw] '>💙 House of LAZURA 💙</h1>
                                    <h3 className='text-[#461BD1] text-center text-[5vw]'>AKA THE ARTISTS</h3>
                                </div>
                            </div>
                            <div className='pl-8'>
                                <h2 className='text-[4vw] text-[#5529e3] text-left'>You are able to identify them from a mile away as they pride themselves for having the best aesthetics 🌟 and fashion taste  👔👗. They decorate ✨ LUMINO ✨ with their brilliant artworks 🎨, creating an uplifting and colourful place for all civilians to live 🌈. Artworks made with the crystals are especially striking, glittering like stars in daylight, and may even contain magical powers 💫 if the artist poured out their heart and soul into making them.🔮 Want to be part of this amazing and powerful house?</h2>
                                <h2 className='text-center text-[10vw]'>Sign up for the Freshmen Orientation 2023!</h2>
                            </div>
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
                                className='rounded-3xl mt-10 bg-white h-[100vw] md:h-auto w-11/12 backdrop-blur mx-auto overflow-auto bg-opacity-25' data-aos={`${(this.state.previousSlide > 5) ? 'fade-left' : "fade-right"}`}>
                                <div
                                    className='flex flex-col-reverse md:flex-row md:justify-around gap-2 md:px-12 px-4 pt-10'>
                                    <div
                                        className='md:w-5/12 w-11/12 font-yatraone text-left text-black tracking-wider text-[4vw] pt-10 md:pt-0 ml-4 md:ml-0 md:text-[0.8vw]'>
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
                                    <div className='md:w-6/12 w-11/12 md:h-[25vw] h-[50vw] mx-auto md:my-auto'>
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
                            className='rounded-3xl mt-10 h-[98vw] py-6 md:h-auto bg-white w-11/12 backdrop-blur mx-auto bg-opacity-25 overflow-auto' data-aos={`${(this.state.previousSlide > 6) ? 'fade-right' : "fade-left"}`}>
                            <div
                                className='text-black px-2 pt-10 md:py-20 text-center md:text-left'>
                                <div className='w-full inline-block md:w-5/12 md:float-right md:pr-20'>
                                    <Image id='sutd-map' alt='sutd map' src={sutd_map}></Image>
                                </div>
                            </div>
                            <table className='md:float-left pl-10 hidden md:inline-block'>
                                <tr>
                                    <td>
                                        <TbSquareArrowLeft className='text-white text-[11vw] pl-20 hover:text-black' onClick={this.prevSlide}/>
                                    </td>
                                    <td>
                                        <h1 className='text-[2.5vw] pl-10 text-white'> Click here to go<br></br> back to the previous page</h1>
                                    </td>
                                </tr>
                                </table>
                        </div>
                        <table className='mx-auto md:hidden'>
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
                         <div className='rounded-3xl mt-10 md:h-[35vw] h-[120vw] bg-white w-11/12 backdrop-blur mx-auto bg-opacity-25 overflow-scroll'>
                             <ol className='list-decimal text-black font-yatraone text-left md:px-20 px-14 py-4 md:text-lg text-sm'>
                                 {questions.map((question, index) => {
                                     return(
                                         <div key={index}>
                                            <li className='text-[#6B0B0B] pt-8'>{question.question}</li>
                                            <div>
                                                {/*Check if it is the first element to add in the nav image else just display the answer*/
                                                (index === 0) ? (
                                                    <h1 className="flex-1 justify-center align-item-center">
                                                        {/*Find out the index of { and } to add in the nav image and create 2 substrings 1 before where the nav image should go and 1 after then insert the image inbetween*/}
                                                        {question.answer.substring(0, question.answer.search("{"))}
                                                        <Image className='inline-block object-cover h-5 w-5 md:h-7 md:w-7' id='nav_logo' alt='eager' src={nav_logo}></Image>
                                                        {question.answer.substring(question.answer.search("}")+1)}
                                                    </h1>
                                                ):<h1>{question.answer}</h1>}
                                            </div>
                                         </div>
                                    )
                                 })}
                             </ol>
                         </div>
                    </section>
                ): null}
             {(this.state.currentSlide === 8) ? (
                <div className='text-center' data-aos='fade-up' data-aos-duration="1000">
                {/*    To put sponsors*/}
                     <div className='flex flex-wrap justify-center overflow-auto bg-white w-11/12 gap-10 rounded-lg mx-auto my-10 p-10'>
                    <div className='md:w-1/6 w-1/4'>
                        <Image src={artfriend} layout='responsive'/>
                    </div>
                    <div className='md:w-1/6 w-1/4'>
                        <Image src={eltelierworks} layout='responsive'/>
                    </div>
                    <div className='md:w-1/6 w-1/4'>
                        <Image src={holoetechnik} layout='responsive'/>
                    </div>
                    <div className='md:w-1/6 w-1/4'>
                        <Image src={huion} layout='responsive'/>
                    </div>
                    <div className='md:w-1/6 w-1/4'>
                        <Image src={kimkbbq} layout='responsive'/>
                    </div>
                    <div className='md:w-1/6 w-1/4'>
                        <Image src={milksha} layout='responsive'/>
                    </div>
                    <div className='md:w-1/6 w-1/4'>
                        <Image src={pilot} layout='responsive'/>
                    </div>
                    <div className='md:w-1/6 w-1/4'>
                        <Image src={stives} layout='responsive'/>
                    </div>
                    </div>
                </div>
                ): null}
            </>
            );
            }}

