import React from 'react';
import profilePicture from '../assets/profilePicture.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className="pt-20 h-screen w-full">
            <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="pt-20 text-white text-center">
                    <h2 className="text-4xl md:text-6xl font-medium p-4">
                        Full Stack Developer
                    </h2>
                    <p className="text-gray-400 text-left p-4">
                        I have 1 year of experience building websites and
                        applications, and love creating projects from scratch
                        using React and Tailwind!
                    </p>

                    <div className="my-5">
                        <Link
                            to="projects"
                            smooth
                            duration={500}
                            className="mx-auto group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Projects
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight
                                    size={25}
                                    className="ml-1"
                                />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img
                        src={profilePicture}
                        alt="profile avatar"
                        className="rounded-full mx-auto w-2/3 md:1/3 p-2"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
