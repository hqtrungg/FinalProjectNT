import React from 'react';
import EditProfile from './pages/EditProfile';
import FollowerList from './pages/FollowerList';
import FollowingList from './pages/FollowingList';
import Login from './pages/Login';
import NewFeed from './pages/NewFeed';
import ProFile from './pages/Profile';
import NotFound from './pages/NotFound';
import Wallet from './pages/Wallet';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Login />
    },
    {
        path: '/newfeed',
        exact: true,
        main: () => <NewFeed />
    },
    {
        path: '/profile',
        exact: true,
        main: () => <ProFile />
    },
    {
        path: '/profile/edit',
        exact: true,
        main: ({match}) => <EditProfile match={match}/>
    },
    {
        path: '/profile/followers',
        exact: true,
        main: () => <FollowerList />
    },
    {
        path: '/profile/following',
        exact: true,
        main: () => <FollowingList />
    },
    {
        path: '/profile/wallet',
        exact: true,
        main: () => <Wallet />
    },
    {
        path: '',
        exact: true,
        main: () => <NotFound />
    },
];

export default routes;