import React from 'react';
import reactWeather from '../assets/portfolio/react-weather-app.png';
import mindfully from '../assets/portfolio/mindfully.png';
import rochinitiative from '../assets/portfolio/rochinitiative.png';
import tindog from '../assets/portfolio/tindog.png';
import carshare from '../assets/portfolio/carshare-calculator.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            src: reactWeather,
            name: 'React Weather App',
            demo: 'https://react-weather-app-yang.netlify.app/',
            code: 'https://github.com/yang2674/react-weather-app',
        },
        {
            id: 2,
            src: mindfully,
            name: 'Mindfully',
            demo: 'https://mindfully.netlify.app/#/login',
            code: 'https://github.com/yang2674/solo-project-mindfully',
        },
        {
            id: 3,
            src: rochinitiative,
            name: 'Rochester Community Initiative',
            demo: 'https://rochinitiave.netlify.app/#/home',
            code: 'https://github.com/yang2674/rochinitiative',
        },
        {
            id: 4,
            src: tindog,
            name: 'Tindog',
            demo: 'https://react-tindog.netlify.app/',
            code: 'https://github.com/yang2674/react-tindog',
        },
        {
            id: 5,
            src: carshare,
            name: 'Evie + HOURCAR Carshare Calculator',
            demo: 'https://carshare-trip-calculator.netlify.app/',
            code: 'https://github.com/yang2674/carshare-calculator',
        },
    ];
    return (
        <div name="projects" className="w-full text-white my-20">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-medium inline border-b-4 border-gray-500">
                        Projects
                    </h2>
                </div>

                <div
                    id="grid"
                    className="grid md:grid-cols-2 gap-8 max-w-screen-lg"
                >
                    {projects.map(({ id, src, name, demo, code }) => (
                        <div
                            key={id}
                            className="shadow-md shadow-gray-600 rounded-lg pt-8"
                        >
                            <h1 className="text-center text-2xl ">{name}</h1>
                            <img
                                src={src}
                                alt=""
                                className="flex justify-center items-center duration-300 w-[85%] mx-auto rounded-t-lg"
                            />
                            <div className="flex items-center justify-center">
                                <button className="hover:bg-slate-700 w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105 rounded-lg">
                                    <a
                                        href={demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-2xl"
                                    >
                                        Demo
                                    </a>
                                </button>
                                <button className="hover:bg-slate-700 w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105 rounded-lg">
                                    <a
                                        href={code}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-2xl"
                                    >
                                        Code
                                    </a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
