import { ButtonProps } from '@/types'
import { clsx } from '@/utils/clsx'
import React from 'react'
import Spinner from '../spinner/spinner'

const Button = ({ children, className, text, loading, fluid, ...rest }: ButtonProps) => {
    return (
        <button
            {...rest}
            className={clsx("custom-btn", className, fluid && "w-100")}
        >
            {
                loading ?
                    <Spinner />
                    :
                    text || children
            }
        </button>
    )
}

export default Button
