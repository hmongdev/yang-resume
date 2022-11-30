import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Socials = () => {
    const socials = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/steve-avery-yang-94397a220/',
            style: 'rounded-tr-md',
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/yang2674',
        },
        {
            id: 3,
            child: (
                <>
                    Gmail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:averyyang2674@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/SteveYang_Resume.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ];
    return (
        <div className="hidden md:flex flex-col top-[12%] left-0 fixed">
            <ul>
                {socials.map(({ id, child, href, style, download }) => (
                    <li
                        key={id}
                        className={`flex justify-evenly items-center w-40 h-12 px-4 hover:ml-[-10px] ml-[-100px] bg-slate-500 duration-300 text-white ${style}`}
                    >
                        <a
                            href={href}
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                            className="flex justify-between items-center w-full"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Socials;
