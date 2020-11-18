import React, { Component } from 'react';
import Footer from "../../footer/Footer";
import LandingNav from "../../navigation/LandingNav";
import FAQJson from "../../../data/faq.json";
import GalleryJson from "../../../data/gallery.json";

interface IState {
    discordMembers: number;
    faq: FAQData[];
    gallery: GalleryData[];
}

interface FAQData {
    question: string;
    answer: string;
}

interface GalleryData {
    name: string;
    source: string;
}

class Landing extends Component {

    state:IState = {
        discordMembers: 0,
        faq: FAQJson,
        gallery: GalleryJson
    }

    componentDidMount() {
        this.getDiscordMembers();
    }

    getDiscordMembers = () => {
        fetch('https://discordapp.com/api/guilds/710260015914680350/widget.json')
            .then(response => response.json())
            .then(response => {
                this.setState({ discordMembers: response.presence_count });
            })
    }

    render() {

        const { discordMembers, faq, gallery } = this.state;

        return (
            <div>
                <LandingNav />
                <div id="home" className="cover-bg flex h-screen">
                    <div className="container m-auto">
                        <div className="flex justify-center">
                            <div className="w-full lg:w-10/12 xl:w-7/12">
                                <div className="text-center">
                                    <div
                                        className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-white">The <span
                                        className="text-red-700">Nostalgia</span> Awaits
                                    </div>
                                    <div
                                        className="text-sm xl:text-base leading-loose pt-6 px-6 md:px-12 lg:px-24 font-semibold text-white uppercase">
                                        HDOS is a community project that is restoring the high detail graphics of
                                        Runescape while maintaining its original charm.
                                    </div>

                                    <div className="mt-16">
                                        <a href="https://discord.com/invite/Bw2WVFK" rel="noopener noreferrer"
                                           target="_blank"
                                           className="border-indigo-500 border-2 p-3 text-indigo-500 hover:bg-indigo-500 hover:text-white uppercase tracking-wide rounded transition ease-in-out duration-200">
                                            <i className="fab fa-discord mx-1" />
                                            <span className="font-semibold">
                                        Join Discord
                                        <span className="hidden lg:inline pl-1">
                                            ({discordMembers} members)
                                        </span>
                                    </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-full bottom-0 pb-10 text-center uppercase tracking-widest text-lg">
                        <a href="#apply"
                           className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-200">
                            <i className="fas fa-angle-double-down mr-2" />
                            <span className="font-semibold">Scroll to Apply</span>
                        </a>
                    </div>
                </div>

                <div id="apply" className="bg-gray-900 bg-opacity-50">
                    <div className="py-16 w-10/12 lg:w-2/5 mx-auto">
                        <div className="text-center">
                            <div className="uppercase text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold tracking-widest reveal">Closed
                                Beta
                            </div>
                            <div className="my-6 border-b border-gray-300 w-32 mx-auto reveal"></div>
                            <div className="text-sm lg:text-base text-gray-300 tracking-wider leading-relaxed reveal">
                                We are looking for a small group of dedicated and passionate scapers to battle test our
                                client! If you are interested in helping us get to the next step of our goal, you can
                                apply to be a beta tester! Your goal will be to break things and find any
                                inconsistencies in the games mechanics. Bugs and problems you find now are things other
                                people will not have to experience.
                            </div>
                            <div className="text-center mt-8 reveal">
                                <a href="https://forms.gle/YmNJfKTJVuaof3J16" rel="noopener noreferrer" target="_blank" className="px-6 py-2 border-b-2 bg-black bg-opacity-25 hover:bg-opacity-50 border-red-800 text-red-800 uppercase font-semibold tracking-wider transition ease-in-out duration-200 reveal">
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="faq" className="bg-gray-900 bg-opacity-75">
                    <div className="py-16 w-10/12 md:w-8/12 lg:w-6/12 xl:w-2/5 mx-auto">
                        <div className="text-center">
                            <div className="uppercase text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold tracking-widest reveal">
                                Frequently Asked Questions
                            </div>
                            <div className="my-6 border-b border-gray-300 w-32 mx-auto reveal" />
                        </div>
                        <div>
                            <div className="flex flex-wrap reveal">
                                {faq.map((item) => (
                                    <div key={item.question} className="w-full p-2">
                                        <div className="p-4 text-sm bg-black bg-opacity-25">
                                            <div className="font-semibold text-white tracking-wide pb-1">{item.question}</div>
                                            <div className="text-white">{item.answer}</div>
                                        </div>
                                    </div>
                                ))}
                                <div className="w-full p-2">
                                    <div className="text-gray-300 text-sm uppercase font-semibold">Have any more
                                        questions? Let us know on Discord.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="gallery" className="bg-gray-900">
                    <div className="py-16 w-8/12 mx-auto">
                        <div className="text-center">
                            <div
                                className="uppercase text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold tracking-widest reveal">Gallery
                            </div>
                            <div className="my-6 border-b border-gray-300 w-32 mx-auto reveal"></div>
                        </div>
                        <div>
                            <div className="flex flex-wrap reveal">
                                {gallery.map((item) => (
                                    <div className="w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                                        <img src={item.source} className="w-full h-auto border-4 border-gray-700" alt={item.name} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div id="follow" className="bg-gray-900 bg-opacity-50">
                    <div className="py-16 w-3/4 lg:w-1/2 mx-auto">
                        <div className="text-center">
                            <div
                                className="uppercase text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold tracking-widest reveal">Follow
                                Us
                            </div>
                            <div className="my-6 border-b border-gray-300 w-32 mx-auto reveal"></div>
                            <div className="flex flex-wrap py-8 reveal">
                                <div className="w-1/2 lg:w-1/4 py-4">
                                    <a href="https://discord.gg/Bw2WVFK" target={"_blank"} rel="noopener noreferrer"
                                       className="text-white hover:text-indigo-500 transition ease-in-out duration-200">
                                        <i className="fab fa-discord fa-3x" />
                                    </a>
                                </div>
                                <div className="w-1/2 lg:w-1/4 py-4">
                                    <a href="https://twitter.com/HDOSdev" target={"_blank"} rel="noopener noreferrer"
                                       className="text-white hover:text-blue-700 transition ease-in-out duration-200">
                                        <i className="fab fa-twitter fa-3x"/>
                                    </a>
                                </div>
                                <div className="w-1/2 lg:w-1/4 py-4">
                                    <a href="https://www.twitch.tv/hdos_dev" target={"_blank"} rel="noopener noreferrer"
                                       className="text-white hover:text-purple-500 transition ease-in-out duration-200">
                                        <i className="fab fa-twitch fa-3x" />
                                    </a>
                                </div>
                                <div className="w-1/2 lg:w-1/4 py-4">
                                    <a href="https://www.youtube.com/channel/UCp9BYa5niyOMWcKthO9dR0A" target={"_blank"} rel="noopener noreferrer"
                                       className="text-white hover:text-red-700 transition ease-in-out duration-200">
                                        <i className="fab fa-youtube fa-3x" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

}
export default Landing;