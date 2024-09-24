import { createRoot } from 'react-dom/client';
import Modal, { propTypes } from './modal';
import { ReactNode } from 'react';

const showModal = (children: ReactNode, rest?: Omit<propTypes, "onClose">) => {
    const modalElement = document.createElement('div');
    modalElement.className = "modal-outer";
    document.body.appendChild(modalElement);
    const root = createRoot(modalElement);
    const hideModal = () => {
        root.unmount();
        document.body.removeChild(modalElement);
    };

    root.render(
        <Modal onClose={hideModal} {...rest} >
            {children}
        </Modal>
    );
};

export { showModal };
