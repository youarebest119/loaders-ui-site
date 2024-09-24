import CopyBtn from '@/components/copy-btn/copy-btn'
import React from 'react'
import { showModal } from '../modal/show-modal'

const Code = () => {
    return (
        <div className="modal_content">
            <ul>
                <li>
                    <h4>Final Code</h4>
                    <div className="code_text">
                        <pre>
                            1. import {"{ Infinite }"} from "loaders-ui" <br /> <br />
                            2. {"const InfiniteLoader = () => {"}  <br /> <br />
                            3. {"    "}return (   <br /> <br />
                            4. {"    "} {"    "}{"<Infinite />"}   <br /> <br />
                            5. {"    "}) <br /> <br />
                            6. {"}"} <br /> <br />
                            6. export default InfiniteLoader;
                        </pre>
                        <CopyBtn text={
                            `
import { Infinite } from "loaders-ui"

const InfiniteLoader = () => {  
    return (   
        <Infinite />   
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

export const showCode = () => showModal(<Code />, { className: "code_modal" })

export default Code
