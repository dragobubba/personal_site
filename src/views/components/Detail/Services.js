import React from "react";

const Services = () => {
    return (
        <div className="flex flex-col">
            <p className="text-2xl font-semibold bg-[#ffffff15] mt-2 mb-4 p-5 rounded-xl flex items-center">
                <lottie-player
                    autoplay
                    loop
                    src="https://assets3.lottiefiles.com/packages/lf20_qo07xg45.json"
                    style={{ height: '40px', width: '40px' }}
                />
                My Services
            </p>
            <div>
                <p className="text-xl font-bold italic text-gray-400 underline">Blockchain Development</p>
                <p className="p-2">As the owner of a wealth of experience that cannot be ignored, we will fill your wallet with money in the field of blockchain development.</p>
                <p className="text-xl font-bold italic text-gray-400 underline">Web Development</p>
                <p className="p-2">With many years of experience in website development, I can make your dream come true. Arbitrary languages and frameworks are available.</p>
                <p className="text-xl font-bold italic text-gray-400 underline">Web Design</p>
                <p className="p-2">I can make your website more beautiful and smart with an extraordinary eye for design. Properly animation combinations will make your website even better.</p>
                <p className="text-xl font-bold italic text-gray-400 underline">Quick Support</p>
                <p className="p-2">I can take over some parts of your website to make changes and show you how to do things quickly and accurately. In a word, part-time also available.</p>
            </div>
        </div>
    )
}

export default Services