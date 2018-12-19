import React from 'react';
import EditProfile from './pages/EditProfile';
import FollowerList from './pages/FollowerList';
import FollowingList from './pages/FollowingList';
import Login from './pages/Login';
import NewFeed from './pages/NewFeed';
import ProFile from './pages/Profile';
import Test from './pages/Test'
import NotFound from './pages/NotFound'

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
        exact: true,
        main: () => <ProFile />
    },
    {
        path: '/edit',
        exact: false,
        main: () => <EditProfile />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    },
];

export default routes;