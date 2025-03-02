import { IoMdCheckmark, IoMdClose } from 'react-icons/io';

const ToastIcon = ({ type }) => {
    const icons = {
        success: <IoMdCheckmark />,
        error: <IoMdClose />,
    };

    const typesStyle = {
        success: 'bg-emerald-300',
        error: 'bg-red-600',
    };

    return (
        <div
            className={`p-1.5 text-xl rounded-full ${typesStyle[type]} text-white`}
        >
            {icons[type]}
        </div>
    );
};

export default ToastIcon;
