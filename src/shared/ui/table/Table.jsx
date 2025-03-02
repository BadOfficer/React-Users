import TableBody from './TableBody';
import TableCell from './TableCell';
import TableHeadCell from './TableHeadCell';
import TableHeader from './TableHeader';
import TablePagination from './TablePagination';
import TableRow from './TableRow';

const Table = ({ children }) => {
    return <table className='w-full'>{children}</table>;
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.HeadCell = TableHeadCell;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Pagination = TablePagination;

export default Table;
