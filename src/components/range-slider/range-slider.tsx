import { clsx } from '@/utils/clsx'
import React, { useEffect, useState } from 'react'
import { Range } from 'react-range'

const RangeSlider = ({ values, step, min, max, onChange, className, }: { className?: string, step: number, max: number, min: number, values: number[], onChange: (values: number[]) => void }) => {
    const [initial, setInitial] = useState(true);
    const handleChange = (values: number[]) => {
        onChange(values);
    }
    useEffect(() => {
        setTimeout(() => {
            setInitial(false);
        }, 800);
    }, [])
    return !initial ? (
        <div className={clsx("range_slider", className, initial && "initial")}>
            <Range
                label="Select your value"
                step={step}
                min={min}
                max={max}
                values={values}
                onChange={handleChange}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                        }}
                        className='range_slider_track'
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props, value, isDragged }) => (
                    <div
                        {...props}
                        key={props.key}
                        style={{
                            ...props.style,
                        }}
                        className={clsx("range_slider_thumb", isDragged && "grabbing")}
                    >
                        <p>{value}</p>
                    </div>
                )}
            />
        </div>
    )
        :
        null
}

export default RangeSlider
