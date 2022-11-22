import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const LoggedSideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'To-Do',
        path: '/todo',
        icon: <IoIcons.IoIosList />,
        cName: 'nav-text'
    },
    {
        title: 'Done',
        path: '/done',
        icon: <IoIcons.IoIosCheckmark />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <IoIcons.IoIosSettings />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <IoIcons.IoMdLogOut />,
        cName: 'nav-text logout'
    }
];