import { twMerge } from 'tailwind-merge';

const TableCell = ({ children, onCellClick, className, colSpan }) => {
    return (
        <td
            className={twMerge('py-2 px-2', className)}
            onClick={onCellClick}
            colSpan={colSpan}
        >
            {children}
        </td>
    );
};

export default TableCell;
