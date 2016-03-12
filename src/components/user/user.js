import React from 'react';

export default function User({ user }) {
    return (
        <div className="user">
            <div className="user-avatar">
                <img src={user.avatar_url} className="user-image"/>
            </div>
            <div className="user-profile">
                <a href={user.html_url}>{user.login}</a>
            </div>
        </div>
    );
}
