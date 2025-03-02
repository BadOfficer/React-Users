import { useEffect } from 'react';
import { useUsersStore } from '../entities/users/model/useUsersStore';
import UsersTable from '../entities/users/ui/UsersTable';
import Header from '../widgets/header/Header';

function App() {
    const { getUsers } = useUsersStore();

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return (
        <>
            <Header />
            <main className=' px-52 py-10'>
                <UsersTable />
            </main>
        </>
    );
}

export default App;
