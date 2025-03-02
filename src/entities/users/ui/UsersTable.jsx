import DeleteUsersPanel from '../../../features/delete-users/ui/DeleteUsersPanel';
import { dateFormat } from '../../../shared/helpers/dateFormat';
import usePagination from '../../../shared/hooks/usePagination';
import Checkbox from '../../../shared/ui/checkbox/Checkbox';
import Loader from '../../../shared/ui/loader/Loader';
import Table from '../../../shared/ui/table/Table';
import TableContainer from '../../../shared/ui/table/TableContainer';
import { useSelectUsers } from '../hooks/useSelectUsers';
import { useUsersStore } from '../model/useUsersStore';
import UserStatus from './UserStatus';

const columnsKeys = ['id', 'name', 'lastname', 'status', 'date'];

const UsersTable = () => {
    const { users, isLoading } = useUsersStore();

    const {
        isAllUsersSelected,
        isUserSelected,
        toggleAllUsersSelect,
        toggleUserSelect,
        selectedUsers,
        clearUsersSelections,
    } = useSelectUsers(users.map((user) => user.id));

    const {
        startElement,
        endElement,
        handleNextPage,
        handlePrevPage,
        currentPage,
        totalPages,
    } = usePagination({ totalElements: users.length || 10 });

    if (isLoading) {
        return (
            <div className='w-full flex items-center justify-center'>
                <Loader />
            </div>
        );
    }

    return (
        <div className='flex gap-3 flex-col'>
            <DeleteUsersPanel
                onDeleteUsers={clearUsersSelections}
                users={selectedUsers}
            />
            <TableContainer>
                <Table>
                    <Table.Header>
                        <Table.Row isHeaderRow>
                            <Table.HeadCell className='w-1'>
                                <Checkbox
                                    checked={isAllUsersSelected}
                                    id='all-users-select'
                                    name='all-users-select'
                                    onChange={toggleAllUsersSelect}
                                />
                            </Table.HeadCell>
                            {columnsKeys.map((columnKey, index) => (
                                <Table.HeadCell key={index}>
                                    {columnKey}
                                </Table.HeadCell>
                            ))}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {users.slice(startElement, endElement).map((user) => (
                            <Table.Row key={user.id}>
                                <Table.Cell>
                                    <Checkbox
                                        checked={isUserSelected(user.id)}
                                        id={user.id}
                                        name={user.id}
                                        onChange={() =>
                                            toggleUserSelect(user.id)
                                        }
                                    />
                                </Table.Cell>
                                <Table.Cell>{user.id}</Table.Cell>
                                <Table.Cell>{user.name}</Table.Cell>
                                <Table.Cell>{user.lastname}</Table.Cell>
                                <Table.Cell>
                                    <UserStatus userStatus={user.status} />
                                </Table.Cell>
                                <Table.Cell>{dateFormat(user.date)}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
                {users.length > 0 && (
                    <Table.Pagination
                        startElement={startElement + 1}
                        endElement={endElement}
                        handleNextPage={handleNextPage}
                        handlePrevPage={handlePrevPage}
                        totalRows={users.length}
                        currentPage={currentPage}
                        totalPages={totalPages}
                    />
                )}
            </TableContainer>
        </div>
    );
};

export default UsersTable;
