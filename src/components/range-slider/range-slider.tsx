import { clsx } from '@/utils/clsx'
import React from 'react'
import { Range } from 'react-range'

const RangeSlider = ({ values, step, min, max, onChange }: { step: number, max: number, min: number, values: number[], onChange: (values: number[]) => void }) => {
    return (
        <div className="range_slider">
            <Range
                label="Select your value"
                step={step}
                min={min}
                max={max}
                values={values}
                onChange={onChange}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        className="range_slider_track"
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props, value, isDragged, }) => {
                    return <div
                        {...props}
                        style={{
                            ...props.style,
                            transform: props.style.transform,
                        }}
                        key={props.key}
                        className={clsx("range_slider_thumb", isDragged && "grabbing")}
                    >
                        <p>
                            {value}
                        </p>
                    </div>
                }
                }
            />
        </div>
    )
}

export default RangeSlider
