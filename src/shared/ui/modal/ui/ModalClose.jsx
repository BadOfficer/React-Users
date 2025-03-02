import { IoMdClose } from 'react-icons/io';
import { useModalContext } from '../context/useModalContext';

const ModalClose = () => {
    const { close } = useModalContext();

    return (
        <button
            className='absolute right-3 top-3 text-xl cursor-pointer p-2 hover:bg-stone-300/25 duration-200 rounded-full'
            onClick={close}
        >
            <IoMdClose />
        </button>
    );
};

export default ModalClose;
