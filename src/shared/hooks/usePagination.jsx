import { useCallback, useEffect, useMemo, useState } from 'react';

const usePagination = ({
    initialPage = 1,
    totalElements,
    elementsPerPage = 10,
}) => {
    const [page, setPage] = useState(initialPage);

    const totalPages = useMemo(
        () => Math.ceil(totalElements / elementsPerPage),
        [totalElements, elementsPerPage],
    );

    const handleNextPage = useCallback(() => {
        setPage((curPage) => Math.min(totalPages, (curPage += 1)));
    }, [totalPages]);

    const handlePrevPage = useCallback(() => {
        setPage((curPage) => Math.max(initialPage, (curPage -= 1)));
    }, [initialPage]);

    const startElement = useMemo(
        () => (page - initialPage) * elementsPerPage,
        [page, initialPage, elementsPerPage],
    );

    useEffect(() => {
        if (page > totalPages) {
            setPage(totalPages);
        }
    }, [totalPages, page, initialPage]);

    const endElement = useMemo(
        () => Math.min(startElement + elementsPerPage, totalElements),
        [startElement, elementsPerPage, totalElements],
    );

    return {
        currentPage: page,
        setCurrentPage: setPage,
        handleNextPage,
        handlePrevPage,
        startElement,
        endElement,
        totalPages,
    };
};

export default usePagination;
