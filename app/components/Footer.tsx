"use client"

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const socialLinks = [
    {
        href: "https://github.com/greatefekodo",
        Icon: AiFillGithub,
        label: "GitHub"
    },

    {
        href: "https://www.linkedin.com/in/greatefekodo/",
        Icon: AiFillLinkedin,
        label: "Linkedin"
    }
]


export const Footer = () => {


    return (
        <footer className="relative py-8 max-w-[1200px] mx-auto px-4">
            

            <div className="hidden md:block absolute inset-0 overflow-hidden">
                <div className="absolute top-[40%] left-[20%] w-[95px] h-[95px] bg-purple-300 rounded-full opacity-40 transform translate-x-[-50%] translate-y-[-50%]"></div>
                <div className="absolute top-[45%] left-[60%] w-[200px] h-[100px] bg-purple-200 rounded-full opacity-20 transform translate-x-[-50%] translate-y-[-50%]"></div>
                <div className="absolute top-[60%] left-[49%] w-[200px] h-[100px] bg-purple-600 rounded-full opacity-30 transform translate-x-[-50%] translate-y-[-50%]"></div>
            </div>

          

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-gray-200 mt-2">

                {/* <div className="space-y-2">
                    <h3 className="font-bold">Useful links</h3>
                    <ul>
                        <li>
                            <a href="#" className="hover:underline">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">404 Page</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Licensing</a>
                        </li>
                    </ul>
                </div> */}

                </div>
            <div className="mt-12 flex  sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="text-gray-200">
                    © 2026. All right reserved.
                </p>

                <ul className="flex gap-5 flex-wrap">
                    {socialLinks.map(({ href, Icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full
                                        hover:text-gray-400 transition-colors"       
                        >
                            <Icon size={30} />
                        </a>
                    ))}
                </ul>
            </div>




        </footer>
    )
}