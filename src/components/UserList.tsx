import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/user';import type {} from 'redux-thunk/extend-redux';
import { useActions } from '../hooks/useActions';

const UserList: FC = () => {

    const { users, error, loading } = useTypedSelector(state => state.user)

const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user =>
                <div>{user.name}</div>
            )}
        </div>
    );
};

export default UserList;
