import React, { useState } from 'react'
import Button from '../button/button'
import { clsx } from '@/utils/clsx'
import { CopyIcon, TickIcon } from '@/assets/icons/icons'

type PropTypes = {
    className?: string,
    text?: string,
}

const CopyBtn = ({ className, text }: PropTypes) => {
    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = () => {
        if (text) {
            navigator.clipboard.writeText(text)
            setIsCopied(true)
            setTimeout(() => {
                setIsCopied(false)
            }, 2000) // Show the tick icon for 2 seconds
        }
    }

    return (
        <Button
            className={clsx("copy_btn", "secondary-btn", className)}
            onClick={handleCopy}
        >
            {isCopied ? <TickIcon /> : <CopyIcon />}
        </Button>
    )
}

export default CopyBtn
