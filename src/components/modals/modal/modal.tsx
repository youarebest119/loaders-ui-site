import { createContext, MouseEvent, ReactNode, useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CancelIcon } from '@/assets/icons/icons';
import Button from '@/components/button/button';

// Create a context to hold the handleClose function
const ModalContext = createContext<() => void>(() => { });

export const useModalClose = () => useContext(ModalContext);

export type propTypes = {
    onClose: () => void,
    handleOverlay?: (e: MouseEvent<HTMLDivElement>) => void,
    overlayClassName?: string,
    className?: string,
    children?: ReactNode,
}

const Modal = ({ onClose, children, handleOverlay, overlayClassName, className, ...rest }: propTypes) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            if (modalRef.current) {
                modalRef.current.classList.add('show');
            }
        }, 0);
    }, []);

    const handleClose = () => {
        if (modalRef.current) {
            modalRef.current.classList.remove('show');
            modalRef.current.addEventListener('transitionend', onClose, { once: true });
        }
    };

    type ClassValue = string | number | boolean | undefined | null;

    const clsx = (...args: ClassValue[]): string => {
        return args
            .filter(Boolean)
            .map(arg => String(arg))
            .join(' ');
    }
    const modalouter = document.querySelectorAll(".modal-outer");
    return ReactDOM.createPortal(
        <ModalContext.Provider value={handleClose}>
            <div
                className={clsx("modal-overlay", overlayClassName)}
                ref={modalRef}
                onClick={e => {
                    e.target === modalRef.current && handleClose();
                    handleOverlay && handleOverlay(e);
                }}
            >
                <AnimatePresence>
                    <motion.div
                        className={clsx("modal", className)}
                        initial={{
                            opacity: 0,
                            scale: 0,
                            y: -10,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0,
                            y: -100,
                        }}
                        transition={{ type: 'spring', stiffness: 80, damping: 12, }}
                        {...rest}
                    >
                        {children}
                        <Button className="secondary-btn close_btn" onClick={handleClose}>
                            <CancelIcon />
                        </Button>
                    </motion.div>
                </AnimatePresence>
            </div>
        </ModalContext.Provider>,
        modalouter[modalouter.length - 1],
    );
};

export default Modal;