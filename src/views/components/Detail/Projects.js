import React, { useState } from "react";
import { Icon } from '@iconify/react';

const Projects = () => {
    return (
        <div className="bg-[#ffffff15] rounded-xl p-4">
            <p className="text-md italic bg-violet-600 p-1 font-medium w-1/2 rounded-xl text-center">Education</p>
            <div className="flex items-start">
                <div className="ml-10 mr-3 mt-3 w-full">
                    <p className="text-xl text-green-500">University of Quebec at Chicoutimi</p>
                    <div className="flex items-center justify-between">
                        <p className="text-md italic text-gray-400">Computer Science</p>
                        <p className="text-md italic text-gray-400">2012.2 - 2016.4</p>
                    </div>
                    <ul className="list-disc ml-5 mt-1">
                        <li className="text-sm">Computer Engineering</li>
                        <li className="text-sm">UI / UX Design</li>
                        <li className="text-sm">Information Security</li>
                        <li className="text-sm">Information Technology</li>
                    </ul>
                </div>
            </div>
            <p className="text-md italic bg-pink-600 p-1 font-medium w-1/2 rounded-xl text-center mt-5">Experience</p>
        </div>
    )
}

export default Projects