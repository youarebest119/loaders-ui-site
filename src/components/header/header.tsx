import React, { useRef } from 'react'
import { ROUTES, SOCIAL_MEDIA } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import github from "../../assets/icons/github.png";
import npm from "../../assets/icons/npm.png";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ThemeBtn from './theme-btn';
import { GithubIcon } from '@/assets/icons/icons';

const Header = () => {
    const ref = useRef(null);
    useGSAP(() => {
        gsap.from([".logo", ".header_action > *"], {
            scale: 0,
            opacity: 0,
            ease: "back",
            duration: 0.3,
            stagger: 0.05,
        })
    }, { scope: ref, })
    return (
        <header ref={ref} className="header">
            <div className="container">
                <div className="header_in">
                    <Link href={ROUTES.HOME} className="logo">Loaders-ui</Link>
                    <div className="header_action">
                        <div>
                            <Link href={SOCIAL_MEDIA.GITHUB} rel="noreferrer" target="_blank" className='secondary-btn custom-btn'>
                                {/* <Image src={github} alt="github" /> */}
                                <GithubIcon />
                            </Link>
                        </div>
                        <div>
                            <Link href={SOCIAL_MEDIA.NPM} rel="noreferrer" target="_blank" className='secondary-btn custom-btn npm'>
                                <Image src={npm} alt="npm" />
                            </Link>
                        </div>
                        <div>
                            <ThemeBtn />
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header
