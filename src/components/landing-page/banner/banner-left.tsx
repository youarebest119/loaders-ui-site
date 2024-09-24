import { DownloadIcon, EyeOpen } from '@/assets/icons/icons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import Button from '../../button/button';
import { showInstallation } from '../../modals/installation/installation';
import { EXTRA } from '@/utils/constant';

const BannerLeft = () => {
    const ref = useRef(null);
    useGSAP(() => {
        let tl = gsap.timeline();

        tl.from(["h1", "p"], {
            y: -100,
            opacity: 0,
            ease: "back",
            duration: 0.4,
            stagger: 0.1,
        });
        tl.from(".banner_action > div", {
            y: 100,
            opacity: 0,
            ease: "back",
            duration: 0.4,
            stagger: 0.06,
        }, "-=0.6");

    }, { scope: ref })
    return (
        <div ref={ref} className="banner_left">
            <h1>{EXTRA.H1}</h1>
            <p>{EXTRA.DESCRIPTION}</p>
            <div className="banner_action">
                {EXTRA.INSTALLATION_BTN && <div>
                    <Button onClick={showInstallation}><DownloadIcon /> {EXTRA.INSTALLATION_BTN}</Button>
                </div>}
                {EXTRA.PREVIEW_BTN && <div>
                    <Button className="secondary-btn"><EyeOpen /> {EXTRA.PREVIEW_BTN}</Button>
                </div>}
            </div>
        </div>
    )
}

export default BannerLeft
