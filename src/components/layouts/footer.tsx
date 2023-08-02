import React from 'react'

import Images from '../../assets'

const Footer = () => {
    return (


        <footer className="footer">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5">
                    <div>
                        <h2 className="mb-6 text-lg font-semibold text-white dark:text-white">Company</h2>
                        <ul className="text-white dark:text-white-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">About</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Careers</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Brand Center</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-lg font-semibold text-white  dark:text-white">Help center</h2>
                        <ul className="text-white dark:text-white-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Discord Server</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Twitter</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Facebook</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-lg font-semibold text-white  dark:text-white">Legal</h2>
                        <ul className="text-white dark:text-white-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Licensing</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-lg font-semibold text-white  dark:text-white">Download</h2>
                        <ul className="text-white dark:text-white-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">iOS</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Android</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Windows</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">MacOS</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-lg font-semibold text-white  dark:text-white">Install App</h2>
                        <ul className="text-white dark:text-white-400 font-medium">
                            <li className="mb-4">
                                <img src={Images.googlePlay} alt='google-play-store' />
                            </li>
                            <li className="mb-4">
                                <img src={Images.appStore} alt='app-store' />
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="px-4 py-6 border-t-2 border-t-[var(--tail-shade-dark)] flex flex-col items-center  md:flex md:flex-row md:items-center md:justify-between">
                    <span className="text-xs text-black sm:text-center">© Copyright 2023, All copy rights
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center  bg-white rounded-lg p-2 w-auto">
                        <a href="#" className="text-white-400 hover:text-white dark:hover:text-white">
                            <img src={Images.facebookIcon} alt='facebook' className='w-[20px] h-[20px] object-cover' />
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-white-400 hover:text-white dark:hover:text-white">
                            <img src={Images.twitterIcon} alt='twitter' className='w-[20px] h-[20px] object-cover' />
                            <span className="sr-only">Discord community</span>
                        </a>
                        <a href="#" className="text-white-400 hover:text-white dark:hover:text-white">
                            <img src={Images.linkedInIcon} alt='linked-in' className='w-[20px] h-[20px] object-cover' />
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="text-white-400 hover:text-white dark:hover:text-white">
                            <img src={Images.youtubeIcon} alt='youtube' className='w-[20px] h-[20px] object-cover' />
                            <span className="sr-only">GitHub account</span>
                        </a>
                        <a href="#" className="text-white-400 hover:text-white dark:hover:text-white">
                            <img src={Images.instagramIcon} alt='instagram' className='w-[20px] h-[20px] object-cover' />
                            <span className="sr-only">Dribbble account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )

}

export default Footer