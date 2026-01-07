import React from 'react'

function Socialmedia() {
    return (
        <div className="flex flex-col items-center gap-4 ">
            {/* <p className="text-lg font-medium">Connect with me!</p> */}
            <div className="flex gap-3">
                {/* Instagram */}
                <div className="relative group flex flex-col items-center">
                    <span className="hidden group-hover:block absolute -top-10 px-2 py-1 bg-gray-800 text-slate-50 text-sm rounded">
                        Instagram
                    </span>
                    <a 
                        href="https://www.instagram.com/sky7.insta/?next=%2F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#e4405f] cursor-pointer text-2xl"
                    >
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </div>

                {/* Facebook */}
                <div className="relative group flex flex-col items-center">
                    <span className="hidden group-hover:block absolute -top-10 px-2 py-1 bg-gray-800 text-slate-50 text-sm rounded">
                        Facebook
                    </span>
                    <a 
                        href="https://www.facebook.com/profile.php?id=100024249859890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3474fd] cursor-pointer text-2xl"
                    >
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </div>

                {/* LinkedIn */}
                <div className="relative group flex flex-col items-center">
                    <span className="hidden group-hover:block absolute -top-10 px-2 py-1 bg-gray-800 text-slate-50 text-sm rounded">
                        LinkedIn
                    </span>
                    <a 
                        href="https://www.linkedin.com/in/web-akash-pawar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0077b5] cursor-pointer text-2xl"
                    >
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </div>

                {/* GitHub */}
                <div className="relative group flex flex-col items-center">
                    <span className="hidden group-hover:block absolute -top-10 px-2 py-1 bg-gray-800 text-slate-50 text-sm rounded" >
                        GitHub
                    </span>
                    <a 
                        href="https://github.com/akashpawar07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2c083d] dark:text-[#09040e]  cursor-pointer text-2xl"
                    >
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Socialmedia