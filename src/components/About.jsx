import React from 'react';

const About = () => {
    return (
        <div name="about" className="w-full h-full text-white pb-20 my-20">
            <div className="text-center mb-10">
                <h2 className="text-4xl md:text-6xl font-medium inline border-b-4 border-gray-500">
                    About
                </h2>
            </div>
            <div className="flex flex-col justify-center items-center text-gray-400 text-md p-4">
                <ul>
                    <li>1st-Gen College Student</li>
                    <li>2nd-Gen Immigrant</li>
                    <li>Hmong-American</li>
                    <li>Aspiring Philanthropist</li>
                </ul>
                <br />
            </div>
            <div className="max-w-screen-sm p-10 mx-auto text-gray-400">
                <li>
                    <span className="text-white">Nov 2021</span>
                    <p>
                        I started my tech journey after learning about
                        cryptocurrency and the exciting (albeit terrifying)
                        promise of AI and machine learning.
                    </p>
                </li>
                <br />
                <li>
                    <span className="text-white">Sep 2022</span>
                    <p>
                        I graduated from <i>Prime Digital Academy</i> with a
                        Full Stack Engineering Certification and am looking for
                        my first software job.
                    </p>
                </li>
                <br />
                <li>
                    <span className="text-white">Present</span>
                    <p>
                        In my free time, I'm building small projects to hone my
                        skills. I find the most joy bringing ideas to life,
                        refactoring, and solving problems!
                    </p>
                </li>
            </div>
        </div>
    );
};

export default About;
