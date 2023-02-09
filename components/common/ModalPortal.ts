import { ReactNode } from 'react';
import ReactDom from 'react-dom';

interface Props {
    children: ReactNode;
}

const ModalPortal = ({ children }: Props) => {
    if(typeof window === "undefined") return undefined;

    const el = document.getElementById('modal-root') as HTMLElement;

    return ReactDom.createPortal(children, el);
};

export default ModalPortal;