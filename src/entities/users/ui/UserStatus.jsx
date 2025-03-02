import Status from '../../../shared/ui/status/Status';

const UserStatus = ({ userStatus }) => {
    const userStatuses = {
        active: {
            textColor: 'text-emerald-700',
            bgColor: 'bg-emerald-200 ',
        },
        inactive: {
            textColor: 'text-red-600',
            bgColor: 'bg-red-200',
        },
    };

    const status = userStatus[0].toUpperCase() + userStatus.slice(1);

    return (
        <Status
            bgColor={userStatuses[userStatus.toLowerCase()].bgColor}
            textColor={userStatuses[userStatus.toLowerCase()].textColor}
        >
            {status}
        </Status>
    );
};

export default UserStatus;
