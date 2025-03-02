import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { useUsersStore } from '../../../entities/users/model/useUsersStore';
import Button from '../../../shared/ui/button/Button';
import Input from '../../../shared/ui/input/Input';
import Select from '../../../shared/ui/select/Select';
import { useToast } from '../../../shared/ui/toast/hooks/useToast';
import { addUserSchema } from '../model/addUser.schema';

const SELECT_OPTIONS = ['Active', 'Inactive'];

const AddUserForm = ({ handleCancel, onSubmitEvent }) => {
    const { addUser, error } = useUsersStore();
    const { toast } = useToast();

    const {
        register,
        formState: { errors },
        control,
        handleSubmit,
    } = useForm({
        resolver: yupResolver(addUserSchema),
    });

    const onSubmit = (data) => {
        addUser(data);
        onSubmitEvent();

        if (error) {
            toast.error('Adding user failed');
            return;
        }

        toast.success('User added successfully');
    };

    const onCancel = (e) => {
        e.preventDefault();
        handleCancel();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col items-center gap-4 h-full'
        >
            <div className='grid grid-cols-2 gap-3 relative w-full flex-1'>
                <Input
                    label='Name'
                    placeholder='User name...'
                    error={errors.name?.message}
                    {...register('name')}
                    id='name'
                />
                <Input
                    label='Lastname'
                    placeholder='User lastname...'
                    error={errors.lastname?.message}
                    {...register('lastname')}
                    id='lastname'
                />
                <Controller
                    name='status'
                    control={control}
                    render={({ field }) => (
                        <Select
                            label='Status'
                            placeholder='Select option'
                            id='user status'
                            options={SELECT_OPTIONS}
                            error={errors.status?.message}
                            {...field}
                        />
                    )}
                />
                <Input
                    type='date'
                    label='Date'
                    id='date'
                    error={errors.date?.message}
                    {...register('date')}
                />
            </div>
            <div className='flex gap-4'>
                <Button
                    type='button'
                    intent='outline'
                    className='border-2'
                    onClick={onCancel}
                >
                    Cancel
                </Button>
                <Button type='submit'>Submit</Button>
            </div>
        </form>
    );
};

export default AddUserForm;
