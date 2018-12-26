import React from 'react';
import EditProfile from './pages/EditProfile';
import FollowingList from './pages/FollowingList';
import Login from './pages/Login';
import NewFeed from './pages/NewFeed';
import ProFile from './pages/Profile';
import NotFound from './pages/NotFound';
import Wallet from './pages/Wallet';
import Register from './pages/Register'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Login />
    },
    {
        path: '/register',
        exact: true,
        main: () => <Register />
    },
    {
        path: '/newsfeed',
        exact: true,
        main: () => <NewFeed />
    },
    {
        path: '/:id',
        exact: true,
        main: () => <ProFile />
    },
    {
        path: '/:id/edit',
        exact: true,
        main: ({match}) => <EditProfile match={match}/>
    },
    {
        path: '/:id/following',
        exact: true,
        main: () => <FollowingList />
    },
    {
        path: '/:id/wallet',
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