import React from 'react'
import Socialmedia from './Socialmedia'
import logo from '/favIcon.svg'
import navlogo from '../assets/logo/logo3.png'

function Footer() {
    return (
        <footer className="bg-gray-800 dark:bg-gray-100 text-gray-200 dark:text-gray-800 border-t border-gray-700 dark:border-gray-300 rounded-lg">
            
            <div className="max-w-6xl mx-auto px-6 py-12">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center gap-6 mb-6">
                        <img 
                            src={logo} 
                            alt="Akash S Pawar" 
                            className="w-16 h-16 rounded-lg object-contain"
                        />
                        <div className="w-px h-12 bg-gray-600 dark:bg-gray-400"></div>
                        <img 
                            src={navlogo} 
                            alt="Portfolio Logo" 
                            className="w-16 h-16 rounded-lg object-cover"
                        />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-100 dark:text-gray-900 mb-2">
                        Let's Build Something Amazing
                    </h2>
                    <p className="text-gray-400 dark:text-gray-600">
                        Passionate Backend Developer and MERN-Stack developer ready to turn ideas into reality
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    
                    {/* Current Focus */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-200 dark:text-gray-800 mb-4">
                            Current Focus
                        </h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400 dark:text-gray-600">Backend Development</li>
                            <li className="text-gray-400 dark:text-gray-600">Full-stack Web Apps</li>
                            <li className="text-gray-400 dark:text-gray-600">Modern Frameworks</li>
                        </ul>
                    </div>

                    {/* Available For */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-200 dark:text-gray-800 mb-4">
                            Available For
                        </h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400 dark:text-gray-600">Internships</li>
                            <li className="text-gray-400 dark:text-gray-600">Full-time Roles</li>
                            <li className="text-gray-400 dark:text-gray-600">Freelance Projects</li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-200 dark:text-gray-800 mb-4">
                            Connect
                        </h3>
                        <div className="flex gap-4 [&_svg]:w-5 [&_svg]:h-5 [&_svg]:fill-gray-400 [&_svg]:stroke-gray-400 dark:[&_svg]:fill-gray-600 dark:[&_svg]:stroke-gray-600 [&_a]:p-2 [&_a]:rounded-md [&_a]:transition-colors [&_a:hover]:bg-gray-700 dark:[&_a:hover]:bg-gray-300 [&_a:hover_svg]:fill-gray-200 dark:[&_a:hover_svg]:fill-gray-800 [&_a:hover_svg]:stroke-gray-200 dark:[&_a:hover_svg]:stroke-gray-800">
                            <Socialmedia />
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer Bottom */}
            <div className="bg-gray-900 dark:bg-gray-200 border-t border-gray-700 dark:border-gray-300">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 text-sm">
                        <div className="text-gray-400 dark:text-gray-600">
                            © {new Date().getFullYear()} <span className="text-gray-200 dark:text-gray-800">akashpawar07.github.io/portfolio</span>. All rights reserved.
                        </div>
                        <div className="text-gray-400 dark:text-gray-600">
                           Built with ♥ using Node.js, React, and Tailwind CSS.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer