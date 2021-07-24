import React from 'react';
import './UserTodos.css';

const UserToDos = ({
    currentUser,
    userTodos
}) => {
    return (
        <div className="user-todos">
            <h2>Todos By { currentUser.username }</h2>
            {userTodos.map(({ id, title, completed }) => (
                <div key = { id } className="todo">
                    <h3 style={{
                        textDecoration: completed ? 'line-through' : 'none'
                    }}> { title }</h3>
                    </div>
            ))}
        </div>
    );
}

export default UserToDos;