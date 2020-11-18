import React, { Component } from 'react';
import Footer from "../../footer/Footer";
import LandingNav from "../../navigation/LandingNav";

interface IState {
    discordMembers: number;
}

class Landing extends Component {

    state:IState = {
        discordMembers: 0
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

        const { discordMembers } = this.state;

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
                            <i className="fas fa-angle-double-down" />
                            <span className="font-semibold">Scroll to Apply</span>
                        </a>
                    </div>
                </div>

                <div id="apply" className="bg-gray-900 bg-opacity-50">
                    <div className="py-16 w-10/12 lg:w-2/5 mx-auto">
                        <div className="text-center">
                            <div
                                className="uppercase text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold tracking-widest reveal">Closed
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
                                <a href="https://forms.gle/YmNJfKTJVuaof3J16" rel="noopener noreferrer" target="_blank"
                                   className="px-6 py-2 border-b-2 bg-black bg-opacity-25 hover:bg-opacity-50 border-red-800 text-red-800 uppercase font-semibold tracking-wider transition ease-in-out duration-200 reveal">Apply
                                    Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="faq" className="bg-gray-900 bg-opacity-75">
                    <div className="py-16 w-10/12 md:w-8/12 lg:w-6/12 xl:w-2/5 mx-auto">
                        <div className="text-center">
                            <div
                                className="uppercase text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold tracking-widest reveal">Frequently
                                Asked Questions
                            </div>
                            <div className="my-6 border-b border-gray-300 w-32 mx-auto reveal" />
                        </div>
                        <div>
                            <div className="flex flex-wrap reveal">
                                <div className="w-full p-2">
                                    <div className="p-4 text-sm bg-black bg-opacity-25">
                                        <div className="font-semibold text-white tracking-wide pb-1">How can I use the
                                            HD client?
                                        </div>
                                        <div className="text-white">Currently, the client is in closed beta, meaning
                                            only a limited amount of people may use it. We are seeking dedicated users
                                            that understand there will be some issues and not only take the time to
                                            report them but assist in reproducing and resolving them. If you would like
                                            a chance, submit an application today!
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full p-2">
                                    <div className="p-4 text-sm bg-black bg-opacity-25">
                                        <div className="font-semibold text-white tracking-wide pb-1">Will this client
                                            have plugins like RuneLite?
                                        </div>
                                        <div className="text-white">Yes, once most of the graphical bugs are cleaned up,
                                            and we have spent some time cleaning up the client code. Then we will be
                                            able to wrap this in RuneLite, and offer all of the plugins that are known,
                                            and loved.
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full p-2">
                                    <div className="p-4 text-sm bg-black bg-opacity-25">
                                        <div className="font-semibold text-white tracking-wide pb-1">Will it have the
                                            plugins from their hub?
                                        </div>
                                        <div className="text-white">There will be no external plugins to start, or
                                            possibly ever. If a plugin is deemed needed by the community, we could
                                            always add it.
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full p-2">
                                    <div className="p-4 text-sm bg-black bg-opacity-25">
                                        <div className="font-semibold text-white tracking-wide pb-1">Why is the client
                                            closed source?
                                        </div>
                                        <div className="text-white">Due to methods used to communicate with servers we
                                            can assume Jagex would prefer our client be closed until they make contact
                                            with us. We are willing to provide binaries or information to anyone wishing
                                            to audit.
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full p-2">
                                    <div className="p-4 text-sm bg-black bg-opacity-25">
                                        <div className="font-semibold text-white tracking-wide pb-1">Will I get banned
                                            for using this client?
                                        </div>
                                        <div className="text-white">The safe answer is, we don’t know. So far, there
                                            have been no bans in over 5 months. We’re confident there will not be any,
                                            but the only way to know for sure is to have rigorous testing by our beta
                                            users.
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full p-2">
                                    <div className="p-4 text-sm bg-black bg-opacity-25">
                                        <div className="font-semibold text-white tracking-wide pb-1">Have you contacted
                                            Jagex?
                                        </div>
                                        <div className="text-white">Yes, sadly with no reply just yet.</div>
                                    </div>
                                </div>

                                <div className="w-full p-2">
                                    <div className="p-4 text-sm bg-black bg-opacity-25">
                                        <div className="font-semibold text-white tracking-wide pb-1">You’re using
                                            ‘stolen assets’ surely Jagex will shut this down like other HD clients?
                                        </div>
                                        <div className="text-white">The only other ‘HD’ client to get taken down to our
                                            knowledge was ‘OSHD’. We can only speculate but believe it was shut down due
                                            to the developers not willing to comply with Jagex and releasing their code
                                            to them. That project also communicated with Jagex servers in a different
                                            manner to ours which we believe resulted in a number of bans. At the end of
                                            the day, we’re working on this project, this question is based from
                                            assumptions, and nobody will know until Jagex get in touch.
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full p-2">
                                    <div className="p-4 text-sm bg-black bg-opacity-25">
                                        <div className="font-semibold text-white tracking-wide pb-1">Is there a release
                                            date for HDOS?
                                        </div>
                                        <div className="text-white">Not currently, we are in closed beta for testing. If
                                            all goes well, we are looking at mid 2021.
                                        </div>
                                    </div>
                                </div>

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
                                <div className="w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                                    <img
                                        src="https://media.discordapp.net/attachments/771547475969835008/778300988867870740/Capture.PNG"
                                        className="w-full h-auto border-4 border-gray-700" alt="gallery"/>
                                </div>
                                <div className="w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                                    <img
                                        src="https://cdn.discordapp.com/attachments/733501465989218395/777388145528012820/4e05da1e2504b43946eec836335dd5b2.jpg"
                                        className="w-full h-auto border-4 border-gray-700" alt="gallery"/>
                                </div>
                                <div className="w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                                    <img
                                        src="https://cdn.discordapp.com/attachments/733501465989218395/769826743968071700/bDcpFo9KL.gif"
                                        className="w-full h-auto border-4 border-gray-700" alt="gallery"/>
                                </div>
                                <div className="w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                                    <img src="https://i.imgur.com/MWQpBqi.jpg"
                                         className="w-full h-auto border-4 border-gray-700" alt="gallery"/>
                                </div>
                                <div className="w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                                    <img
                                        src="https://cdn.discordapp.com/attachments/733501465989218395/752461375229657088/lO6cNqwSIw.gif"
                                        className="w-full h-auto border-4 border-gray-700" alt="gallery"/>
                                </div>
                                <div className="w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                                    <img src="https://i.imgur.com/i6wDxqn.jpg"
                                         className="w-full h-auto border-4 border-gray-700" alt="gallery"/>
                                </div>
                                <div className="w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                                    <img
                                        src="https://cdn.discordapp.com/attachments/733501465989218395/733505142225109022/unknown.png"
                                        className="w-full h-auto border-4 border-gray-700" alt="gallery"/>
                                </div>
                                <div className="w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                                    <img
                                        src="https://cdn.discordapp.com/attachments/733501465989218395/739752763247951932/XLXrX3V.png"
                                        className="w-full h-auto border-4 border-gray-700" alt="gallery"/>
                                </div>
                                <div className="w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                                    <img
                                        src="https://media.discordapp.net/attachments/771547475969835008/778300988867870740/Capture.PNG"
                                        className="w-full h-auto border-4 border-gray-700" alt="gallery"/>
                                </div>
                                <div className="w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                                    <img
                                        src="https://cdn.discordapp.com/attachments/733501465989218395/777388145528012820/4e05da1e2504b43946eec836335dd5b2.jpg"
                                        className="w-full h-auto border-4 border-gray-700" alt="gallery"/>
                                </div>
                                <div className="w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                                    <img
                                        src="https://cdn.discordapp.com/attachments/733501465989218395/769826743968071700/bDcpFo9KL.gif"
                                        className="w-full h-auto border-4 border-gray-700" alt="gallery"/>
                                </div>
                                <div className="w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                                    <img src="https://i.imgur.com/MWQpBqi.jpg"
                                         className="w-full h-auto border-4 border-gray-700" alt="gallery"/>
                                </div>
                                <div className="w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                                    <img
                                        src="https://cdn.discordapp.com/attachments/733501465989218395/752461375229657088/lO6cNqwSIw.gif"
                                        className="w-full h-auto border-4 border-gray-700" alt="gallery"/>
                                </div>
                                <div className="w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                                    <img src="https://i.imgur.com/i6wDxqn.jpg"
                                         className="w-full h-auto border-4 border-gray-700" alt="gallery"/>
                                </div>
                                <div className="w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                                    <img
                                        src="https://cdn.discordapp.com/attachments/733501465989218395/733505142225109022/unknown.png"
                                        className="w-full h-auto border-4 border-gray-700" alt="gallery"/>
                                </div>
                                <div className="w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                                    <img
                                        src="https://cdn.discordapp.com/attachments/733501465989218395/739752763247951932/XLXrX3V.png"
                                        className="w-full h-auto border-4 border-gray-700" alt="gallery"/>
                                </div>
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