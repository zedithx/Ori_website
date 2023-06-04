import Image from "next/image";
import sutd_logo from "../../public/images/logo/sutd_logo.svg";
import {Link} from "react-scroll";
import React, { useState } from "react"
import styles from "../app/orientation.module.css"


export default function NaviBar() {
    const [navState, setNavState] = useState(false)
    return (
    <>
        {/*<button*/}
        {/*    className="md:hidden absolute right-1 top-1/2 -translate-y-1/2 text-black cursor-pointer pr-2"*/}
        {/*    onClick={() => setNavState(!navState)}*/}
        {/*  >*/}
        {/*      <div className={`${navState ? styles.change: ""}`}>*/}
        {/*        <div className={styles.bar1}></div>*/}
        {/*        <div className={styles.bar2}></div>*/}
        {/*        <div className={styles.bar3}></div>*/}
        {/*     </div>*/}
        {/*  </button>*/}
        {/*{navState && (*/}
        {/*    <div className="w-5/12 absolute top-10 right-0 z-50">*/}
        {/*        <div className={`${navState ? styles.fadeInNavi: ""}`}>*/}
        {/*            <ul className="mt-4 p-3 text-black bg-[url('../../public/images/backgrounds/civilisation-navi.jpeg')] rounded-2xl text-left">*/}
        {/*                {[*/}
        {/*                ['STORYLINE', 'storyline'],*/}
        {/*                ['HOUSES', 'houses'],*/}
        {/*                ['GETTING HERE', 'navigation'],*/}
        {/*                ['FAQ', 'faq'],*/}
        {/*                ['SPONSORS', 'sponsors']*/}
        {/*              ].map(([title, url]) => (*/}
        {/*                    // eslint-disable-next-line react/jsx-key*/}
        {/*                <div className={`${navState ? styles.fadeInRight: ""}`}>*/}
        {/*                    <li className='py-2'>*/}
        {/*                        <Link onClick={() => setNavState(!navState)} to={url} smooth={true}>{title}</Link>*/}
        {/*                    </li>*/}
        {/*                </div>*/}
        {/*                ))}*/}
        {/*            </ul>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*)}*/}
        <nav className="w-full md:space-x-10 text-[2.5vw] lg:space-x-28 font-lookmum text-white invisible md:visible md:flex md:justify-center">
          {[
            ['STORYLINE', 1],
              ['HOUSES', 2],
            ['GETTING HERE', 3],
            ['FAQ', 4],
            ['SPONSORS', 5]
          ].map(([title, index]) => (
              // eslint-disable-next-line react/jsx-key
            <Link class='opacity-20 hover:opacity-100 hover:underline' onClick={this.set} smooth={true} style={{cursor: 'pointer'}}>{title}</Link>
          ))}
        </nav>
        </>
    )
}

