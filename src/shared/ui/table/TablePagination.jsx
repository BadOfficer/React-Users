import { MdArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';

const TablePagination = ({
    startElement,
    endElement,
    totalRows,
    totalPages,
    currentPage,
    handleNextPage,
    handlePrevPage,
}) => {
    const arrowBtnStyles = `disabled:text-stone-300 cursor-pointer disabled:cursor-default`;

    return (
        <nav className='flex justify-end w-full px-3 items-center gap-2'>
            <span>
                {startElement} - {endElement} of {totalRows}
            </span>
            <button
                onClick={handlePrevPage}
                className={arrowBtnStyles}
                disabled={currentPage === startElement}
            >
                <MdOutlineArrowBackIos />
            </button>
            <button
                onClick={handleNextPage}
                className={arrowBtnStyles}
                disabled={currentPage === totalPages}
            >
                <MdArrowForwardIos />
            </button>
        </nav>
    );
};

export default TablePagination;
