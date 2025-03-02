import { useCallback, useMemo, useState } from 'react';

export const useSelectUsers = (usersIds) => {
    const [selectedUsers, setSelectedUsers] = useState([]);

    const isAllUsersSelected = useMemo(
        () => usersIds.every((userId) => selectedUsers.includes(userId)),
        [usersIds, selectedUsers],
    );

    const isUserSelected = useCallback(
        (userId) => {
            return selectedUsers.includes(userId);
        },
        [selectedUsers],
    );

    const handleToggleUserSelect = useCallback((userId) => {
        setSelectedUsers((curUsers) =>
            curUsers.includes(userId)
                ? curUsers.filter((id) => id !== userId)
                : [...curUsers, userId],
        );
    }, []);

    const handleToggleAllUsersSelect = useCallback(() => {
        setSelectedUsers(isAllUsersSelected ? [] : [...usersIds]);
    }, [isAllUsersSelected, usersIds]);

    const clearUsersSelections = useCallback(() => {
        setSelectedUsers([]);
    }, []);

    return {
        toggleUserSelect: handleToggleUserSelect,
        toggleAllUsersSelect: handleToggleAllUsersSelect,
        isAllUsersSelected,
        isUserSelected,
        selectedUsers,
        clearUsersSelections,
    };
};
