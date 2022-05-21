import React from "react";
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'swiper/css';
import 'swiper/css/navigation';

const WorkHistory = () => {
    return (
        <div className="bg-[#ffffff15] rounded-xl p-2">
            <VerticalTimeline layout="1-column-left">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2016.5 - 2017.4"
                    iconStyle={{ background: 'white', color: '#fff', width: '60px', height: '60px', marginLeft: '-10px', border: '2px solid rgb(33, 150, 243)' }}
                    icon={<img alt="9s seafood" src="/images/works/9s/logo.png" />}
                >
                    <h3 className="font-bold text-xl italic">Full-stack Developer</h3>
                    <div className="flex justify-between">
                        <h4 className="italic text-sm text-gray-100">9s Seafood</h4>
                        <h4 className="italic text-sm text-gray-100">Remote</h4>
                    </div>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation
                        className="mt-2"
                    >
                        <SwiperSlide>I was involved in completing Frontend (PHP + Laravel) with 3 team members.</SwiperSlide>
                        <SwiperSlide>I have integrated MongoDB into backend server.</SwiperSlide>
                        <SwiperSlide>I imagined, created and implemented a new delivery system.</SwiperSlide>
                    </Swiper>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                    date="2017.2 - 2021.4"
                    iconStyle={{ background: 'white', color: '#fff', width: '60px', height: '60px', marginLeft: '-10px', border: '2px solid rgb(233, 30, 99)' }}
                    icon={<img alt="sudt" src="/images/works/sudt/logo.png" />}
                >
                    <h3 className="font-bold text-xl italic">Bachelor of Computer Science</h3>
                    <h4 className="italic text-sm text-gray-100">Singpoare University of Technology and Design</h4>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation
                        className="mt-2"
                    >
                        <SwiperSlide>Computer Engineering</SwiperSlide>
                        <SwiperSlide>UI/UX Design</SwiperSlide>
                        <SwiperSlide>Information Security</SwiperSlide>
                        <SwiperSlide>Information Technology</SwiperSlide>
                    </Swiper>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                    date="From 2019.1"
                    iconStyle={{ background: 'white', color: '#fff', width: '60px', height: '60px', marginLeft: '-10px', border: '2px solid rgb(233, 30, 99)' }}
                    icon={
                        <lottie-player
                            autoplay
                            loop
                            src="https://assets9.lottiefiles.com/packages/lf20_icohf8fe.json"
                            style={{ height: '55px', width: '55px' }}
                        />
                    }
                >
                    <h3 className="font-bold text-xl italic">Started leanring about Blockchain</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2021.2 - 2021.11"
                    iconStyle={{ background: 'white', color: '#fff', width: '60px', height: '60px', marginLeft: '-10px', border: '2px solid rgb(33, 150, 243)' }}
                    icon={<img alt="formation" src="/images/works/formation/logo.png" />}
                >
                    <h3 className="font-bold text-xl italic">Blockchain Full-stack Developer</h3>
                    <div className="flex justify-between">
                        <h4 className="italic text-sm text-gray-100">Formation Finance</h4>
                        <h4 className="italic text-sm text-gray-100">Remote</h4>
                    </div>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation
                        className="mt-2"
                    >
                        <SwiperSlide>Built out farms, pools, dark pools, swap, stable swap, bridge.</SwiperSlide>
                        <SwiperSlide>Newly created v1 ALPHA page and increased TVL.</SwiperSlide>
                        <SwiperSlide>Implemented multichain DEX platforms with ETH and BNB chain.</SwiperSlide>
                        <SwiperSlide>Led 2 newbie developers who learning about Blockchain.</SwiperSlide>
                    </Swiper>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2021.4 - 2021.11"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '60px', height: '60px', marginLeft: '-10px', border: '2px solid rgb(33, 150, 243)' }}
                    icon={<img alt="crox" src="/images/works/crox/logo.png" />}
                >
                    <h3 className="font-bold text-xl italic">Blockchain Full-stack Developer</h3>
                    <div className="flex justify-between">
                        <h4 className="italic text-sm text-gray-100">Croxswap</h4>
                        <h4 className="italic text-sm text-gray-100">Remote</h4>
                    </div>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation
                        className="mt-2"
                    >
                        <SwiperSlide>Built out farms, pools, dual-farms(only live on Croxswap), nextgen-pool, bridge, exchange.</SwiperSlide>
                        <SwiperSlide>Held out croxmas event containing 15 partners reward pools and grandpools. During this, we hit 2M total value just getting 700K more extra profit.</SwiperSlide>
                        <SwiperSlide>Implemented multichain DEX platforms with BNB and HECO chain.</SwiperSlide>
                        <SwiperSlide>Built out ICO launchpad for RxSeedCoin on Croxswap.</SwiperSlide>
                    </Swiper>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2022.3"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '60px', height: '60px', marginLeft: '-10px', border: '2px solid rgb(33, 150, 243)' }}
                    icon={<img alt="cosmic" src="/images/works/cosmic/logo.png" />}
                >
                    <h3 className="font-bold text-xl italic">NFT Co-Developer</h3>
                    <div className="flex justify-between">
                        <h4 className="italic text-sm text-gray-100">CosmicVoyagersCollective</h4>
                        <h4 className="italic text-sm text-gray-100">Remote</h4>
                    </div>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation
                        className="mt-2"
                    >
                        <SwiperSlide>Write Smart Contract for minting NFT.</SwiperSlide>
                        <SwiperSlide>Generate NFT metadata and deploy them to IPFS(pinata cloud).</SwiperSlide>
                        <SwiperSlide>I have completed a cool Minting site that will attract users.</SwiperSlide>
                        <SwiperSlide>Finally deploy their NFT to Opensea with unrevealed image.</SwiperSlide>
                    </Swiper>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2022.4"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '60px', height: '60px', marginLeft: '-10px', border: '2px solid rgb(33, 150, 243)' }}
                    icon={<img alt="uncanny" src="/images/works/uncanny/logo.png" />}
                >
                    <h3 className="font-bold text-xl italic">NFT Co-Developer</h3>
                    <div className="flex justify-between">
                        <h4 className="italic text-sm text-gray-100">The Uncanny Country Club</h4>
                        <h4 className="italic text-sm text-gray-100">Remote</h4>
                    </div>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation
                        className="mt-2"
                    >
                        <SwiperSlide>Write Smart Contract for minting NFT.</SwiperSlide>
                        <SwiperSlide>Generate NFT metadata and deploy them to IPFS(pinata cloud).</SwiperSlide>
                        <SwiperSlide>I have completed a cool Minting site that will attract users.</SwiperSlide>
                        <SwiperSlide>Finally deploy their NFT to Opensea with unrevealed image.</SwiperSlide>
                    </Swiper>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '60px', height: '60px', marginLeft: '-10px', border: '2px solid rgb(33, 150, 243)' }}
                    icon={<Icon icon="emojione:glowing-star" width="40" height="40" />}
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="More in the future"
                >
                    <h3 className="text-xl font-bold">More in the future</h3>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default WorkHistory