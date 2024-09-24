import CopyBtn from '@/components/copy-btn/copy-btn';
import { showModal } from '../modal/show-modal';

const Installation = () => {
    return (
        <div className="modal_content">
            <ul>
                <li>
                    <h4>1. Install</h4>
                    <div className="code_text">
                        <p>npm i loaders-ui</p>
                        <CopyBtn text="npm i loaders-ui" />
                    </div>
                </li>
                <li>
                    <h4>2. Css</h4>
                    <div className="code_text">
                        <p>import 'loaders-ui/dist/main/index.min.css';</p>
                        <CopyBtn text='import "loaders-ui/dist/main/index.min.css";' />
                    </div>
                </li>
                <li>
                    <h4>3. Import</h4>
                    <div className="code_text">
                        <p>import {"{ Infinite }"} from "loaders-ui"</p>
                        <CopyBtn text='import { Infinite } from "loaders-ui"' />
                    </div>
                </li>
                <li>
                    <h4>4. Implementation</h4>
                    <div className="code_text">
                        {"<Infinite />"}
                        <CopyBtn text="<Infinite />" />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export const showInstallation = () => showModal(<Installation />, { className: "installation_modal" })

export default Installation
