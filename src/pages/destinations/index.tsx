import { FC, useEffect, useState } from 'react'
import '../../styles/pages/destinations.scss'

import { Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/appState'
import { getCountryPicture } from '../../services'
import { getTopUniversitiesByDestination } from '../../services'
import { allUniveristiesByDestinationEndpoint } from '../../services/endPoints'
import api from '../../services/baseUrl'
interface Props {
    destinationPageRef?: any
}
const Destinations: FC<Props> = ({ destinationPageRef }) => {
    const allDestinations = useSelector((state: AppState) => state.allDestinationsReducer)
    const [tab, setTab] = useState<string>('overview')

    const { data } = allDestinations

    const [allUniversities, setAllUniversities] = useState([])

    // const destinationName = window.location.pathname.split(':')[1].replace('%20', ' ')
    let destinationName = localStorage.getItem('destinationName')
    const singleDestination = data?.filter((item: any) => {

        return item.destinationName === destinationName
    })[0]





    const getAllUniveristiesByDestination = async (country: string) => {

        try {
            const { data } = await api.get(allUniveristiesByDestinationEndpoint(country))

            setAllUniversities(data.data)

        }
        catch {

        }

    }

    useEffect(() => {
        if (window.location.pathname.includes(':')) {
            //    localStorage.removeItem('destinationName')
        }


    }, [window.location.pathname])

    useEffect(() => {

        if (destinationName) {

            getTopUniversitiesByDestination(destinationName)
        }
    }, [destinationName])

    useEffect(() => {
        if (destinationName) {
            getAllUniveristiesByDestination(destinationName)
        }
    }, [])

    return (
        <div className='destinations-container'>
            <div className="container mx-auto">
                <div className={`destination-banner p-4 rounded-lg`} style={{ background: `url(${getCountryPicture(singleDestination?.destinationName)})` }}>
                    <div className="grid grid-cols-2">
                        <div className="col-span-1">
                            <div className='bg-white p-4 rounded-lg'>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-1">
                                        <img src={singleDestination?.flagSrc} alt='country-flag' className='w-full rounded-lg' />
                                    </div>
                                    <div className="col-span-1 my-auto">
                                        <h1 className='text-4xl font-semibold'>Study in {destinationName}</h1>
                                        {allUniversities?.length > 0 && <p className='text-2xl py-4'>{allUniversities?.length} Universities</p>}
                                        {/* <p className='text-xl'>530444+ International Students</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div>
                            <h1 className='country-short-form'>US</h1>
                        </div> */}
                    </div>
                </div>
                <div>

                    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                        <ul className="flex flex-wrap -mb-px">



                        </ul>
                        <div className='grid grid-cols-2'>
                            <div>

                                <Link to={`/destinations/:${destinationName}`} className={`${tab === 'overview'}&&active w-full inline-block p-4 active:border-b-2 active:border-blue-600  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 `} onClick={() => {
                                    setTab('overview')
                                }}>Overview</Link>

                            </div>
                            <div >
                                <Link to='/destinations/country/universities' className={`${tab === 'universities'}&&active w-full inline-block p-4  active:border-b-2 active:border-blue-600 focused:border-b-2 focused:border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 `} onClick={() => {
                                    setTab('universities')
                                    if (destinationName) {
                                        localStorage.setItem('destinationName', destinationName)
                                    }
                                }}>Universities</Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container mx-auto my-6">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Destinations