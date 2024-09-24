import { useOutsideClick } from '@/hooks/useOutsideClick';
import { clsx } from '@/utils/clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ColorPickerr, { ColorObject } from 'react-pick-color';

const ColorPicker = ({ color, onChange }: { color: string, onChange: (color: ColorObject) => void, }) => {
    const [show, setShow] = useState(false);
    const ref = useOutsideClick<HTMLDivElement>(() => setShow(false))
    return (
        <div className="color_picker">
            <button onClick={() => !show && setShow(true)} className="color_picker_toggle" style={{ backgroundColor: color }}></button>
            {/* <div
                ref={ref}
                className={clsx("color_picker_dropdown", show && "show")}
            >
                <ColorPickerr color={color} onChange={onChange} />
            </div> */}
            <AnimatePresence mode="sync">
                {
                    show &&
                    <motion.div
                        ref={ref}
                        className={clsx("color_picker_dropdown", show && "show")}
                        initial={{
                            opacity: 0,
                            visibility: "hidden",
                            width: 0,
                            height: 0,
                        }}
                        animate={{
                            opacity: 1,
                            visibility: "visible",
                            width: "280px",
                            height: "290px",
                            transition: {
                                type: "spring",
                            }
                        }}
                        exit={{
                            opacity: 0,
                            visibility: "hidden",
                            width: 0,
                            height: 0,
                        }}
                    >
                        <ColorPickerr className='color_picker_' color={color} onChange={onChange} />
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default ColorPicker
