import React from 'react';
import User from '../User/User';
const UsersList = ({ users, follow, unfollow, followingInProgress }) => {
    return (
        <div>
            {users.map((u) => {
                return (
                    <User
                        userId={u.id}
                        userPhoto={u.photos.small}
                        userName={u.name}
                        userStatus={u.status}
                        followed={u.followed}
                        followingInProgress={followingInProgress}
                        follow={follow}
                        unfollow={unfollow}
                        key={u.id}
                    />
                );
            })}
        </div>
    );
};

export default UsersList;
