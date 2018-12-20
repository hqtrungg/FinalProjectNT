import React from 'react';
import EditProfile from './pages/EditProfile';
import FollowerList from './pages/FollowerList';
import FollowingList from './pages/FollowingList';
import Login from './pages/Login';
import NewFeed from './pages/NewFeed';
import ProFile from './pages/Profile';
import NotFound from './pages/NotFound';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Login />
    },
    {
        path: '/newfeed',
        exact: false,
        main: () => <NewFeed />
    },
    {
        path: '/profile',
        exact: false,
        main: () => <ProFile />
    },
    {
        path: "/profile/edit",
        exact: false,
        main: ({match}) => <EditProfile match={match}/>
    },
    {
        path: 'profile/followers',
        exact: false,
        main: () => <FollowerList />
    },
    {
        path: '/profile/following',
        exact: false,
        main: () => <FollowingList />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    },
];

export default routes;