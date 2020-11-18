import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="bg-gray-900 bg-opacity-25">
                <div className="container mx-auto py-4">
                    <div className="flex uppercase text-sm text-white font-semibold tracking-wide">
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            &copy; HDOS 2020 - Runescape is a registered trademark of Jagex Games Ltd.
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-right">
                            Crafted with <i className="fas fa-heart text-red-500"/> by <a
                            href="https://cameronct.com/"
                            className="text-gray-400 hover:text-red-500 transition ease-in-out duration-200">CameronCT</a>.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;