
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCounsellors } from '../../services';

import api from '../../services/baseUrl';
import { allDestinationsEndPoint } from '../../services/endPoints';
import { useDispatch } from 'react-redux';
import types from '../../redux/types';
import { CustomFlowbiteTheme, Dropdown } from 'flowbite-react';
import Images from '../../assets';
const Navbar: React.FC = () => {
    const dispatch = useDispatch()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [allCountries, setAllCountries] = useState([])


    const dropDownTheme: CustomFlowbiteTheme['dropdown'] = {
        inlineWrapper: "flex items-center text-black text-[16px] font-semibold"

    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    let CountriesList

    const getAllCountries = async () => {

        try {
            const { data } = await api.get(allDestinationsEndPoint())

            if (data.success) {
                dispatch({ type: types.ALL_DESTINATIONS_SUCCESS, payload: data.data })
                CountriesList = data.data.map((item: any) => {
                    return {
                        destinationName: item.destinationName,
                        id: item._id
                    }
                })
                setAllCountries(CountriesList)
            }

        }
        catch {

        }

    }
    useEffect(() => {
        getAllCountries()
        getCounsellors()
    }, [])



    return (
        <nav className="bg-white-800 p-4 xs:bg-tail">
            <div className="container mx-auto">
                <div className="flex justify-between items-center ">
                    <div>
                        <Link to="/" className="font-['praise'] text-tail text-4xl ">Campus Root</Link>
                    </div>
                    <div className="hidden lg:flex md:items-center space-x-4 text-white">
                        <Link to="/" className='text-black font-semibold hover:text-tail active:text-tail px-4'>Home</Link>
                        <form>

                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border-2 border-tail rounded-lg bg-white-50   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " placeholder="Search" required />

                            </div>
                        </form>




                        <Dropdown
                            inline
                            label="Destinations"
                            className='text-[var(--tail-shade-dark)] p-4'
                            theme={dropDownTheme}

                        >
                            {allCountries.map((item: any, i: number) => {
                                return <Dropdown.Item key={i} className='w-full p-0 m-0 hover:bg-[var(--grey-shade-light)]'>
                                    <Link to={`/destinations/:${item.destinationName}`} className="p-2  w-full flex justify-center  border-b border-b-1 border-b-[#ccc] text-gray-500 dark:text-gray-400 hover:text-[var(--tail-shade-dark)] dark:hover:text-blue-500" onClick={() => {
                                        localStorage.setItem('destinationName', item.destinationName)
                                    }}>
                                        {item.destinationName}
                                    </Link>
                                </Dropdown.Item>
                            })}

                        </Dropdown>




                        <Link to="/careers" className='text-black font-semibold hover:text-tail active:text-tail px-4'>Careers</Link>
                        <Link to="/chats" className='text-black font-semibold hover:text-tail active:text-tail px-4'>Community</Link>
                        <Link to="/counsellors" className='text-black font-semibold hover:text-tail active:text-tail px-4'>Counsellor</Link>
                        <Link to='/my-account/dashboard'>

                            <img className="w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 object-cover" src={Images.person} alt="profile" />

                        </Link>

                    </div>
                    <div className="lg:hidden">
                        <button
                            className="text-black focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-2 bg-tail">
                        <Link
                            to="/"
                            className="block text-white text-center py-2 px-4 hover:bg-gray-700"
                        >
                            Home
                        </Link>



                        <Link
                            to="/destinations/country/overview"
                            className="block text-white text-center py-2 px-4 hover:bg-gray-700"
                        >
                            Destinations
                        </Link>
                        <Link
                            to="/contact"
                            className="block text-white text-center py-2 px-4 hover:bg-gray-700"
                        >
                            Careers
                        </Link>
                        <Link
                            to="/"
                            className="block text-white text-center py-2 px-4 hover:bg-gray-700"
                        >
                            Community
                        </Link>
                        <Link
                            to="/counsellors"
                            className="block text-white text-center py-2 px-4 hover:bg-gray-700"
                        >
                            Counsellors
                        </Link>

                    </div>
                )}
            </div>
        </nav >
    );
};

export default Navbar;

