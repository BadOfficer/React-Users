import AddUserModal from '../../features/add-user/ui/AddUserModal';
import { useModal } from '../../shared/hooks/useModal';
import Button from '../../shared/ui/button/Button';

const Header = () => {
    const { handleOpen, handleClose, isOpen } = useModal();

    return (
        <>
            <header className='w-full top-0 bg-blue-400 px-3 py-3 flex justify-between items-center'>
                <h1 className='text-xl font-medium uppercase text-amber-50'>
                    Users Table
                </h1>
                <Button
                    intent='outline'
                    className='border-amber-50 border-2 text-amber-50 font-medium px-3 py-1 hover:bg-amber-50 hover:text-blue-400'
                    onClick={handleOpen}
                >
                    Add User
                </Button>
            </header>
            <AddUserModal isOpen={isOpen} close={handleClose} />
        </>
    );
};

export default Header;
