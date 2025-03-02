import { twMerge } from 'tailwind-merge';

const TableHeadCell = ({ children, className, onCellClick, colSpan }) => {
    return (
        <th
            className={twMerge(
                'py-3 uppercase px-2 first:rounded-l-lg last:rounded-r-lg',
                className,
            )}
            onClick={onCellClick}
            colSpan={colSpan}
        >
            {children}
        </th>
    );
};

export default TableHeadCell;
