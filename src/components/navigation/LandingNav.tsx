import React, { Component } from 'react';
import logo from '../../assets/logo.png';

interface IState {
    toggleNav: boolean;
}

class LandingNav extends Component {

    state:IState = {
        toggleNav: false
    }

    toggleNavigation = () => {
        const { toggleNav } = this.state;
        if (toggleNav)
            this.setState({ 'toggleNav': false });
        else
            this.setState({ 'toggleNav': true });
    }

    render() {

        const { toggleNav } = this.state;

        return (
            <div id="navigationMenu"
                 className="z-50 fixed top-0 w-full bg-opacity-75 transition ease-in-out duration-200">
                <div className="container mx-auto">
                    <div className="hidden md:flex flex-wrap">
                        <div className="ml-auto w-40 my-auto text-center">
                            <a href="#apply"
                               className="uppercase font-medium tracking-widest text-base text-white hover:text-gray-400 transition ease-in-out duration-200">Apply
                                Now</a>
                        </div>
                        <div className="ml-auto w-40 my-auto text-center">
                            <a href="#faq"
                               className="uppercase font-medium tracking-widest text-base text-white hover:text-gray-400 transition ease-in-out duration-200">FAQ</a>
                        </div>
                        <div className="w-32 mx-auto text-center">
                            <a href="#home">
                                <img src={logo} alt="hdos logo" className="w-full h-auto"/>
                            </a>
                        </div>
                        <div className="mr-auto w-40 my-auto text-center">
                            <a href="#gallery"
                               className="uppercase font-medium tracking-widest text-base text-white hover:text-gray-400 transition ease-in-out duration-200">Gallery</a>
                        </div>
                        <div className="mr-auto w-40 my-auto text-center">
                            <a href="#follow"
                               className="uppercase font-medium tracking-widest text-base text-white hover:text-gray-400 transition ease-in-out duration-200">Follow
                                Us</a>
                        </div>
                    </div>
                    <div className="md:hidden flex py-2 bg-black bg-opacity-75">
                        <div className="w-auto px-3 mr-auto">
                            <a href="#home">
                                <img src={logo} alt="hdos logo" className="w-16 h-auto"/>
                            </a>
                        </div>
                        <div className="w-16 ml-auto text-white my-auto text-xl">
                            <button type="button" className="focus:outline-none" onClick={this.toggleNavigation}>
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>
                    </div>
                    {toggleNav && (
                        <div
                            className="block md:hidden bg-black bg-opacity-75 text-sm font-medium tracking-wide">
                            <a href="#apply"
                               className="block w-full p-2 text-white bg-black bg-opacity-0 hover:bg-red-900 hover:bg-opacity-25 uppercase transition ease-in-out duration-200">
                                Apply Now
                            </a>
                            <a href="#faq"
                               className="block w-full p-2 text-white bg-black bg-opacity-0 hover:bg-red-900 hover:bg-opacity-25 uppercase transition ease-in-out duration-200">
                                FAQ
                            </a>
                            <a href="#gallery"
                               className="block w-full p-2 text-white bg-black bg-opacity-0 hover:bg-red-900 hover:bg-opacity-25 uppercase transition ease-in-out duration-200">
                                Gallery
                            </a>
                            <a href="#follow"
                               className="block w-full p-2 text-white bg-black bg-opacity-0 hover:bg-red-900 hover:bg-opacity-25 uppercase transition ease-in-out duration-200">
                                Follow Us
                            </a>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default LandingNav;