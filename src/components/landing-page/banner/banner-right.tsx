import { CodeIcon, DownloadIcon, EyeOpen } from '@/assets/icons/icons';
import ColorPicker from '@/components/color-picker/color-picker';
import { clsx } from "@/utils/clsx";
import { BouncingBalls, ExpandingRing, FlashingDots, Infinite, Spinner } from "loaders-ui";
import Link from 'next/link';
import { useRef, useState } from 'react';
import Button from '../../button/button';
import RangeSlider from '../../range-slider/range-slider';
import { showModal } from '../../modals/modal/show-modal';
import Code, { showCode } from '../../modals/code/code';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { AnimatePresence, motion } from 'framer-motion';
import { EXTRA } from '@/utils/constant';

const BannerRight = () => {
    const loaders = [
        {
            key: "infinite",
            label: "Infinite",
            component: <Infinite />,
        },
        {
            key: "bouncing-balls",
            label: "Bouncing Balls",
            component: <BouncingBalls />,
        },
        {
            key: "expanding-ring",
            label: "Expanding Ring",
            component: <ExpandingRing />,
        },
        {
            key: "flashing-dots",
            label: "Flashing Dots",
            component: <FlashingDots />,
        },
    ]

    const [speed, setSpeed] = useState([1]);
    const [stroke, setStroke] = useState([4]);
    const [color, setColor] = useState("#007BFF");
    const [activeLoader, setActiveLoader] = useState(loaders[0].key);
    const ref = useRef(null);


    useGSAP(() => {
        let tl = gsap.timeline();
        tl.from(".banner_loaders", {
            scale: 0,
            opacity: 0,
            ease: "back",
            duration: 0.8,
            transformOrigin: "center center",
        });
        tl.from(".banner_loaders_sidebar li", {
            yPercent: 100,
            opacity: 0,
            ease: "back",
            duration: 0.8,
            stagger: 0.1,
        }, "-=0.6");
        tl.from(".banner_loaders_content_preview", {
            scale: 0,
            opacity: 0,
            ease: "back",
            duration: 0.8,
            stagger: 0.1,
        }, "-=0.6");
        tl.from(".banner_loaders_controls", {
            yPercent: 100,
            opacity: 0,
            ease: "back",
            duration: 0.8,
            stagger: 0.1,
        }, "-=0.6");
    }, { scope: ref })

    return (
        <div ref={ref} className="banner_right">
            <div className="banner_loaders">
                <div className="banner_loaders_sidebar">
                    <ul>
                        {
                            loaders.map((item, index) => {
                                return (
                                    <li key={item.key}>
                                        <Link onClick={() => setActiveLoader(item.key)} className={clsx(item.key === activeLoader && "active")} href="#">{item.label}</Link>
                                    </li>
                                )
                            })
                        }
                        {EXTRA.MORE_BTN && <li className='mt-auto'>
                            <Button fluid className="secondary-btn">More</Button>
                        </li>}
                    </ul>
                </div>
                <div className="banner_loaders_content">
                    <div className="banner_loaders_content_preview">
                        <Button onClick={() => showCode()} className="secondary-btn code_btn"><CodeIcon /></Button>
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={loaders.find(item => item.key === activeLoader)?.key}
                                initial={{
                                    opacity: 0,
                                    scale: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0,
                                }}
                                transition={{
                                    type: "spring",
                                }}
                            >
                                {loaders.find(item => item.key === activeLoader)?.component}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="banner_loaders_controls">
                        <ul>
                            <li>
                                <h4>Speed</h4>
                                <RangeSlider
                                    step={1}
                                    min={1}
                                    max={10}
                                    values={speed}
                                    onChange={(values) => setSpeed(values)}
                                />
                            </li>
                            <li>
                                <h4>Color</h4>
                                <ColorPicker color={color} onChange={color => setColor(color.hex)} />
                            </li>
                            <li>
                                <h4>Stroke</h4>
                                <RangeSlider
                                    step={4}
                                    min={4}
                                    max={20}
                                    values={stroke}
                                    onChange={(values) => setStroke(values)}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerRight
