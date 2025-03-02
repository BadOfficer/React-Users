import { motion } from 'motion/react';

const SelectList = ({ children }) => {
    return (
        <motion.ul
            className='flex flex-col absolute top-full bg-white w-full rounded-lg shadow-2xl border border-stone-200 mt-2 overflow-hidden'
            initial={{
                height: 0,
            }}
            animate={{
                height: 'auto',
            }}
            exit={{ height: 0 }}
        >
            {children}
        </motion.ul>
    );
};

export default SelectList;
