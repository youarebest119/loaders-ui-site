import { CodeIcon } from '@/assets/icons/icons';
import ColorPicker from '@/components/color-picker/color-picker';
import { clsx } from "@/utils/clsx";
import { Spinner } from "loaders-ui";
import Link from 'next/link';
import { useRef, useState } from 'react';
import Button from '../../button/button';
import RangeSlider from '../../range-slider/range-slider';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { AnimatePresence, motion } from 'framer-motion';
import { EXTRA } from '@/utils/constant';
import { showCode } from '@/components/modals/code/code';

const BannerRight = () => {
    const [speed, setSpeed] = useState([1]);
    const [stroke, setStroke] = useState([60]);
    const [color, setColor] = useState("#007BFF");
    const [activeLoader, setActiveLoader] = useState("spinner");

    const ref = useRef(null);

    // Loaders can be added dynamically to this array without changing other logic
    const loaders = [
        {
            key: "spinner",
            label: "Spinner",
            component: (props: { speed?: number, color?: string, size?: number }) => <Spinner {...props} />,
            size: true,
        },
        // Add more loaders here
    ];

    useGSAP(() => {
        let tl = gsap.timeline();
        tl.from(".banner_loaders", {
            scale: 0,
            opacity: 0,
            ease: "back",
            duration: 0.8,
            transformOrigin: "center center",
        });
        tl.from(
            ".banner_loaders_sidebar li",
            {
                yPercent: 100,
                opacity: 0,
                ease: "back",
                duration: 0.8,
                stagger: 0.1,
            },
            "-=0.6"
        );
        tl.from(
            ".banner_loaders_content_preview",
            {
                scale: 0,
                opacity: 0,
                ease: "back",
                duration: 0.8,
                stagger: 0.1,
            },
            "-=0.6"
        );
        tl.from(
            ".banner_loaders_controls",
            {
                yPercent: 100,
                opacity: 0,
                ease: "back",
                duration: 0.8,
                stagger: 0.1,
            },
            "-=0.6"
        );
    }, { scope: ref });

    // Find the currently active loader object from the loaders array
    const activeLoaderObj = loaders.find(loader => loader.key === activeLoader);

    return (
        <div ref={ref} className="banner_right">
            <div className="banner_loaders">
                <div className="banner_loaders_sidebar">
                    <ul>
                        {loaders.map((item) => (
                            <li key={item.key}>
                                <Link
                                    onClick={() => setActiveLoader(item.key)}
                                    className={clsx(item.key === activeLoader && "active")}
                                    href="#"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        {EXTRA.MORE_BTN && (
                            <li className="mt-auto">
                                <Button fluid className="secondary-btn">
                                    More
                                </Button>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="banner_loaders_content">
                    <div className="banner_loaders_content_preview">
                        <Button onClick={() => showCode({ name: activeLoaderObj?.label, size: stroke[0], color: color, speed: speed[0], stroke: stroke[0], })} className="secondary-btn code_btn">
                            <CodeIcon />
                        </Button>
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={activeLoader}
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
                                {activeLoaderObj?.component({
                                    speed: speed[0],
                                    color: color,
                                    size: stroke[0],
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="banner_loaders_controls">
                        <ul>
                            <li>
                                <h4>Speed</h4>
                                <RangeSlider
                                    step={0.1}
                                    min={0.1}
                                    max={5}
                                    values={speed}
                                    onChange={(values) => setSpeed(values)}
                                />
                            </li>
                            <li>
                                <h4>Color</h4>
                                <ColorPicker
                                    color={color}
                                    onChange={(color) => setColor(color.hex)}
                                />
                            </li>
                            <li>
                                <h4>{activeLoaderObj?.size ? "Size" : "Stroke"}</h4>
                                <RangeSlider
                                    step={10}
                                    min={10}
                                    max={100}
                                    values={stroke}
                                    onChange={(values) => setStroke(values)}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerRight;
