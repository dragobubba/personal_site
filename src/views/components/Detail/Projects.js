import React, { useState } from "react";
import { Icon } from '@iconify/react';

const Projects = () => {
    return (
        <div className="flex flex-col">
            <p className="text-2xl font-semibold bg-[#ffffff15] mt-2 mb-4 p-5 rounded-xl flex items-center">
                <lottie-player
                    autoplay
                    loop
                    src="https://assets2.lottiefiles.com/packages/lf20_9e8yoqkm.json"
                    style={{ height: '40px', width: '40px' }}
                />
                My Projects
            </p>
            <div className="grid grid-cols-2 grid-rows-none gap-2">
                <div>
                    <div className="flex items-center cursor-pointer" onClick={() => window.open("https://app.croxswap.com", "_blank")}>
                        <p className="text-sm italic text-blue-400">Croxswap</p>
                        <Icon icon="ci:external-link" width="20" height="20" color="#60a5fa" />
                    </div>
                    <img alt="crox-image1" src="/images/works/crox/croxswap-1.png" className="mt-2 cursor-pointer" />
                    <div className="flex items-center cursor-pointer mt-5" onClick={() => window.open("https://www.cosmicvoyagerscollective.io/", "_blank")}>
                        <p className="text-sm italic text-blue-400">CosmicVoyagersCollective</p>
                        <Icon icon="ci:external-link" width="20" height="20" color="#60a5fa" />
                    </div>
                    <img alt="crox-image1" src="/images/works/cosmic/cosmic-1.png" className="mt-2" />
                </div>
                <div>
                    <div className="flex items-center cursor-pointer" onClick={() => window.open("https://app.formation.fi", "_blank")}>
                        <p className="text-sm italic text-blue-400">Formation Finance</p>
                        <Icon icon="ci:external-link" width="20" height="20" color="#60a5fa" />
                    </div>
                    <img alt="crox-image1" src="/images/works/formation/formation-1.png" className="mt-2" />
                    <div className="flex items-center cursor-pointer mt-5" onClick={() => window.open("https://healer-game.vercel.app/", "_blank")}>
                        <p className="text-sm italic text-blue-400">NFT Game DIY project</p>
                        <Icon icon="ci:external-link" width="20" height="20" color="#60a5fa" />
                    </div>
                    <img alt="crox-image1" src="/images/works/healer/healer-1.png" className="mt-2" />
                    <div className="flex items-center cursor-pointer mt-5" onClick={() => window.open("https://www.theuncanny.io/", "_blank")}>
                        <p className="text-sm italic text-blue-400">TheUncannyCountryClub</p>
                        <Icon icon="ci:external-link" width="20" height="20" color="#60a5fa" />
                    </div>
                    <img alt="crox-image1" src="/images/works/uncanny/uncanny-1.png" className="mt-2" />
                </div>
            </div>
            <p className="text-2xl font-semibold bg-[#ffffff15] mt-10 p-5 rounded-xl text-center">More in the future</p>
        </div>
    )
}

export default Projects