import React from 'react';
import profilePicture from '../assets/profilePicture.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className="pt-20 w-full h-full mb-20">
            <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div>
                    <img
                        src={profilePicture}
                        alt="profile avatar"
                        className="rounded-full mx-auto md:w-4/5 w-2/5 p-2"
                    />
                </div>
                <div className="text-white text-center">
                    <div className="mb-10">
                        <h2 className="text-4xl md:text-6xl font-medium inline border-b-4 border-gray-500">
                            Full Stack Developer
                        </h2>
                    </div>
                    <p className="text-gray-400 text-left text-lg p-4">
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
            </div>
        </div>
    );
};

export default Home;
