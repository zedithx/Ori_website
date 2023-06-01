import Image from "next/image";
import sutd_logo from "../../public/images/logo/sutd_logo.svg";
import {Link} from "react-scroll";
import React, { useState } from "react"
import styles from "../app/orientation.module.css"


export default function NaviBar() {
    const [navState, setNavState] = useState(false)
    return (
    <>
        <button
            className="md:hidden absolute right-1 top-1/2 -translate-y-1/2 text-black cursor-pointer pr-2"
            onClick={() => setNavState(!navState)}
          >
              <div className={`${navState ? styles.change: ""}`}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
             </div>
          </button>
        {navState && (
            <div className="w-5/12 absolute top-10 right-0 z-50">
                <div className={`${navState ? styles.fadeInNavi: ""}`}>
                    <ul className="pl-2 py-3 mt-4 text-black bg-[url('../../public/images/backgrounds/civilisation-navi.jpeg')] rounded-2xl text-left">
                        {[
                        ['STORYLINE', 'storyline'],
                        ['GETTING HERE', 'navigation'],
                        ['FAQ', 'faq'],
                        ['SPONSORS', 'sponsors']
                      ].map(([title, url]) => (
                            // eslint-disable-next-line react/jsx-key
                        <div className={`${navState ? styles.fadeInRight: ""}`}>
                            <li className='pb-2'>
                                <Link onClick={() => setNavState(!navState)} to={url} smooth={true} className="pl-4 py-5">{title}</Link>
                            </li>
                        </div>
                        ))}
                    </ul>
                </div>
            </div>
        )}

        <div className='md:w-[8.5vw] w-[23vw] absolute left-4 top-1/2 -translate-y-1/2'>
            <a href='https://www.sutd.edu.sg/' target='_blank' rel="noopener noreferrer"><Image src={sutd_logo}/></a>
        </div>
        <nav className="w-full md:space-x-0 lg:space-x-4 lg:mr-8 text-black invisible md:visible md:flex md:justify-end">
          {[
            ['STORYLINE', 'storyline'],
            ['GETTING HERE', 'navigation'],
            ['FAQ', 'faq'],
            ['SPONSORS', 'sponsors']
          ].map(([title, url]) => (
              // eslint-disable-next-line react/jsx-key
            <Link to={url} smooth={true} style={{cursor: 'pointer'}} className="rounded-lg md:px-5 mx-0 py-5 font-bold"><u>{title}</u></Link>
          ))}
        </nav>
        </>
    )
}

