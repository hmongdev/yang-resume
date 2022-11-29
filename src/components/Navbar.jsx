import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'projects',
        },
        {
            id: 4,
            link: 'experience',
        },
        {
            id: 5,
            link: 'contact',
        },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed">
            <h1 className="text-5xl font-signature pl-4">Yang</h1>

            <ul className="hidden md:flex">
                {links.map(({ link, id }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200 hover:text-gray-100"
                    >
                        {link}
                    </li>
                ))}
            </ul>

            <div>
                <FaTimes size={30} />
                <FaBars size={30} />
            </div>
        </div>
    );
};

export default Navbar;
