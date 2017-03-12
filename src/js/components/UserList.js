import React, {
    PropTypes,
} from 'react';
import UserInfo from './UserInfo';

function UserList({users, onEdit, onDelete}) {
    return (
        <div>
            {users.map((user,i)=> (
                <UserInfo
                    key={`user-${i}`}
                    user={user}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

UserList.propTypes    = {
    users   : PropTypes.array.isRequired,
    onEdit  : PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};
UserList.defaultProps = {};

export default UserList;
