import { useUsersStore } from '../../../entities/users/model/useUsersStore';
import Button from '../../../shared/ui/button/Button';
import { useToast } from '../../../shared/ui/toast/hooks/useToast';

const DeleteUsersPanel = ({ users, onDeleteUsers }) => {
    const { deleteUsers, error } = useUsersStore();
    const { toast } = useToast();

    const lengthOfSelectedUsers = users.length;
    const userCountLabel = lengthOfSelectedUsers === 1 ? 'user' : 'users';

    const handleDeleteUsers = () => {
        onDeleteUsers();
        deleteUsers(users);

        if (error) {
            toast.error('Users deleting failed');
            return;
        }

        toast.success('Users delete successfully');
    };

    if (lengthOfSelectedUsers === 0) return null;

    return (
        <div className='flex justify-between items-center pl-3'>
            <p>
                {lengthOfSelectedUsers} {userCountLabel} selected
            </p>
            <Button onClick={handleDeleteUsers}>Delete</Button>
        </div>
    );
};

export default DeleteUsersPanel;
