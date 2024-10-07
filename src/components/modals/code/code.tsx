import CopyBtn from '@/components/copy-btn/copy-btn'
import React from 'react'
import { showModal } from '../modal/show-modal'

type PropTypes = {
    size?: number,
    stroke?: number,
    color?: string,
    speed?: number,
    name?: string,
}

const Code = ({ size, stroke, color, speed, name }: PropTypes) => {
    console.log({ name });
    return (
        <div className="modal_content">
            <ul>
                <li>
                    <h4>Final Code - {name}</h4>
                    <div className="code_text">
                        <pre>
                            1. import {`{ ${name} }`} from "loaders-ui" <br /> <br />
                            2. {`const ${name}Loader = () => {`}  <br /> <br />
                            3. {"    "}return (   <br /> <br />
                            4. {"    "} {"    "}{`<${name} ${size && `size={ ${size} }`} ${speed && `speed={ ${speed} }`} ${color && `color={ "${color}" }`} />`}   <br /> <br />
                            5. {"    "}) <br /> <br />
                            6. {"}"} <br /> <br />
                            7. export default {name}Loader;
                        </pre>
                        <CopyBtn text={
                            `
import { Infinite } from "loaders-ui"

const InfiniteLoader = () => {  
    return (   
        <${name}
            ${size && `size={ ${size} }`}
            ${speed && `speed={ ${speed} }`}
            ${color && `color={ "${color}" }`}
        />   
    )    
}
export default InfiniteLoader;
                            `
                        } />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export const showCode = (props: PropTypes) => showModal(<Code {...props} />, { className: "code_modal" })

export default Code
