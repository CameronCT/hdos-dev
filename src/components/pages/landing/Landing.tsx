import React, { Component } from 'react';
import Footer from "../../footer/Footer";
import LandingNav from "../../navigation/LandingNav";
import FAQJson from "../../../data/faq.json";
import GalleryJson from "../../../data/gallery.json";
import { Fade } from "react-awesome-reveal";

interface IState {
    discordMembers: number;
    carousel: string | null;
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
        carousel: null,
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
        const { faq, gallery, carousel } = this.state;
        return (
            <div>
                {carousel && carousel !== 'null' && (
                    <div style={{ zIndex: 100 }} className={"fixed z-50 flex w-full h-screen m-auto bg-black bg-opacity-75"}>
                        <div className={"max-w-screen-md m-auto"}>
                            <div className={"relative"}>
                                <img src={carousel} className="border-8 border-gray-600" alt={"carousel zoom"} />
                                <button type={"button"} className={"absolute top-0 right-0 mt-4 mr-4 py-1 px-3 bg-red-900 hover:bg-opacity-75 transtion ease-in-out duration-200 text-white rounded"} onClick={() => { this.setState({ carousel: null }) }}>
                                    <i className={"fas fa-times"} /> <span className={"uppercase font-medium"}>Close</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <LandingNav />
                <div id="home" className="cover-bg flex h-screen">
                    <div className="container m-auto">
                        <div className="flex justify-center">
                            <div className="w-full lg:w-10/12 xl:w-7/12">
                                <div className="text-center">
                                    <Fade>
                                        <div
                                            className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-white">The <span
                                            className="text-red-700">Nostalgia</span> Awaits
                                        </div>
                                    </Fade>
                                    <Fade>
                                        <div
                                            className="text-sm xl:text-base leading-loose pt-6 px-6 md:px-12 lg:px-24 font-semibold text-white uppercase">
                                            HDOS is a community project that is restoring the high detail graphics of
                                            Runescape while maintaining its original charm.
                                        </div>
                                    </Fade>
                                    <Fade>
                                        <div className="mt-16">
                                            <a href="https://discord.com/invite/Bw2WVFK" rel="noopener noreferrer"
                                               target="_blank"
                                               className="border-indigo-500 border-2 p-3 text-indigo-500 hover:bg-indigo-500 hover:text-white uppercase tracking-wide rounded transition ease-in-out duration-200">
                                                <i className="fab fa-discord mr-2" />
                                                <span className="font-semibold">
                                                Join our Discord
                                            </span>
                                            </a>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-full bottom-0 pb-10 text-center uppercase tracking-widest text-lg">
                        <Fade>
                            <a href="#apply"
                               className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-200">
                                <i className="fas fa-angle-double-down mr-2" />
                                <span className="font-semibold">Scroll to Apply</span>
                            </a>
                        </Fade>
                    </div>

                </div>

                <div id="apply" className="bg-gray-900 bg-opacity-50">
                    <div className="py-16 w-10/12 lg:w-2/5 mx-auto">
                        <div className="text-center">
                            <Fade>
                                <div className="uppercase text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold tracking-widest">Closed
                                    Beta
                                </div>
                            </Fade>
                            <Fade>
                                <div className="my-6 border-b border-gray-300 w-32 mx-auto" />
                            </Fade>
                            <Fade>
                                <div className="text-sm lg:text-base text-gray-300 tracking-wider leading-relaxed">
                                    We are looking for a small group of dedicated and passionate scapers to battle test our
                                    client! If you are interested in helping us get to the next step of our goal, you can
                                    apply to be a beta tester! Your goal will be to break things and find any
                                    inconsistencies in the games mechanics. Bugs and problems you find now are things other
                                    people will not have to experience.
                                </div>
                            </Fade>
                            <Fade>
                                <div className="text-center mt-8">
                                    <a href="https://forms.gle/YmNJfKTJVuaof3J16" rel="noopener noreferrer" target="_blank" className="px-6 py-2 border-b-2 bg-red-900 bg-opacity-15 hover:bg-opacity-35 border-red-800 text-red-200 uppercase font-semibold tracking-wider transition ease-in-out duration-200 reveal">
                                        Apply Now
                                    </a>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>

                <div id="faq" className="bg-gray-900 bg-opacity-75">
                    <div className="py-16 w-10/12 md:w-8/12 lg:w-6/12 xl:w-2/5 mx-auto">
                        <div className="text-center">
                            <Fade>
                                <div className="uppercase text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold tracking-widest">
                                    Frequently Asked Questions
                                </div>
                            </Fade>
                            <Fade>
                                <div className="my-6 border-b border-gray-300 w-32 mx-auto" />
                            </Fade>
                        </div>
                        <Fade>
                            <div className="flex flex-wrap">
                                {faq.map((item) => (
                                    <div key={item.question} className="w-full p-2">
                                        <Fade>
                                            <div className="p-4 text-sm bg-black bg-opacity-25">
                                                <div className="font-semibold text-white tracking-wide pb-1">{item.question}</div>
                                                <div className="text-white">{item.answer}</div>
                                            </div>
                                        </Fade>
                                    </div>
                                ))}
                                <Fade>
                                    <div className="w-full p-2">
                                        <div className="text-gray-300 text-sm uppercase font-semibold">Have any more
                                            questions? Let us know on Discord.
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </Fade>
                    </div>
                </div>

                <div id="gallery" className="bg-gray-900">
                    <div className="py-16 w-8/12 mx-auto">
                        <div className="text-center">
                            <Fade>
                                <div
                                    className="uppercase text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold tracking-widest">Gallery
                                </div>
                            </Fade>
                            <Fade>
                                <div className="my-6 border-b border-gray-300 w-32 mx-auto" />
                            </Fade>
                        </div>
                        <div>
                            <div className="flex flex-wrap">
                                {gallery.map((item) => (
                                    <div key={item.name} className="w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                                        <Fade>
                                            <button type={"button"} className={"focus:outline-none"} onClick={() => this.setState({ carousel: item.source })}>
                                                <img src={item.source} className="w-full h-auto border-4 border-gray-700" alt={item.name} />
                                            </button>
                                        </Fade>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div id="follow" className="bg-gray-900 bg-opacity-50">
                    <div className="py-16 w-3/4 lg:w-1/2 mx-auto">
                        <div className="text-center">
                            <Fade>
                                <div
                                    className="uppercase text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold tracking-widest">Follow
                                    Us
                                </div>
                            </Fade>
                            <Fade>
                                <div className="my-6 border-b border-gray-300 w-32 mx-auto" />
                            </Fade>
                            <Fade>
                                <div className="flex flex-wrap py-8">
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
                            </Fade>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

}
export default Landing;