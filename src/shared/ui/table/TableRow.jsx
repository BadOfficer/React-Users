import { twMerge } from 'tailwind-merge';

const TableRow = ({ children, isHeaderRow, onRowClick, className }) => {
    return (
        <tr
            onClick={isHeaderRow ? null : onRowClick}
            className={twMerge(
                `text-center ${
                    !isHeaderRow
                        ? 'hover:bg-sky-100 cursor-pointer border-b border-blue-100'
                        : 'bg-blue-400 text-amber-50'
                }`,
                className,
            )}
        >
            {children}
        </tr>
    );
};

export default TableRow;
