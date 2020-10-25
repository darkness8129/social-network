import React from 'react';
import { useState, useEffect } from 'react';

const Status = ({ userStatus, updateUserStatus }) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(userStatus);

    useEffect(() => {
        setStatus(userStatus);
    }, [userStatus]);

    const activeEditMode = () => {
        setEditMode(true);
    };

    const deactiveEditMode = () => {
        setEditMode(false);
        updateUserStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.target.value);
    };

    return (
        <div>
            Status:
            {!editMode ? (
                <div>
                    <span onDoubleClick={activeEditMode}>
                        {userStatus ? userStatus : '---'}
                    </span>
                </div>
            ) : (
                <div>
                    <input
                        autoFocus={true}
                        type='text'
                        onBlur={deactiveEditMode}
                        onChange={onStatusChange}
                        value={status}
                    />
                </div>
            )}
        </div>
    );
};

export default Status;
