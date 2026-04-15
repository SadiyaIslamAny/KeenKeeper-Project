import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Shared/Navbar';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
            <h1>Footer</h1>
        </div>
    );
};

export default RootLayout;