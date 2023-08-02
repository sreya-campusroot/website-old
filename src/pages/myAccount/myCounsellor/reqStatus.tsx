
import { Button, Timeline } from 'flowbite-react';
import Images from '../../../assets';
import { Link } from 'react-router-dom';

const ReqStatus = () => {
    return (
        <Timeline>
            <Timeline.Item>
                <Timeline.Point icon={() => (<svg className="w-[17px] h-[17px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                </svg>)} />
                <Timeline.Content>
                    <Timeline.Time>
                        8th june 11 am
                    </Timeline.Time>

                    <Timeline.Body>
                        <div className="grid grid-cols-12 gap-4 my-4 border-b border-b-2 border-[var(--grey-shade-dark)] p-4">
                            <div className="col-span-2">
                                <img className="w-40 h-40  rounded-full object-cover" src={Images.counsellorPic} alt="Rounded avatar"></img>
                            </div>
                            <div className="col-span-8 flex flex-col justify-center">
                                <p className="text-xl text-black font-semibold">Mathew</p>
                                <p className="text-lg text-black py-2">Slot booked for 1st aug </p>
                                <p className="text-sm text-[var(--grey-shade-dark)]">11 am to 11:30 am</p>
                            </div>


                            <div className="col-span-2 flex flex-col justify-center ">
                                <button className='rounded-md w-full p-2 bg-[var(--tail-shade-dark)] text-white' onClick={() => {

                                }}>View details</button>
                            </div>
                        </div>
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point icon={() => (<svg className="w-[17px] h-[17px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                </svg>)} />
                <Timeline.Content>
                    <Timeline.Time>
                        8th june 11 am
                    </Timeline.Time>
                    {/* <Timeline.Title>
                        Marketing UI design in Figma
                    </Timeline.Title> */}
                    <Timeline.Body>
                        <div className="grid grid-cols-12 gap-4 my-4 border-b border-b-2 border-[var(--grey-shade-dark)] p-4">
                            <div className="col-span-2">
                                <img className="w-40 h-40  rounded-full object-cover" src={Images.counsellorPic} alt="Rounded avatar"></img>
                            </div>
                            <div className="col-span-8 flex flex-col justify-center">
                                <p className="text-xl text-black font-semibold">Mathew</p>
                                <p className="text-lg text-black py-2">10 years experience </p>
                                <p className="text-sm text-[var(--grey-shade-dark)]">1000+ stdentes got counselled</p>
                            </div>


                            <div className="col-span-2 flex flex-col justify-center ">
                                <Link to='/my-account/book-counsellor' className='text-center rounded-md w-full p-2 bg-[var(--tail-shade-dark)] text-white' onClick={() => {

                                }}>Book slot</Link>
                            </div>
                        </div>
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point icon={() => (<svg className="w-[17px] h-[17px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                </svg>)} />
                <Timeline.Content>
                    <Timeline.Time>
                        8th june 11 am
                    </Timeline.Time>
                    {/* <Timeline.Title>
                        Marketing UI design in Figma
                    </Timeline.Title> */}
                    <Timeline.Body>
                        <div className="grid grid-cols-12 gap-4 my-4 border-b border-b-2 border-[var(--grey-shade-dark)] p-4">
                            <div className="col-span-2">
                                <img className="w-40 h-40  rounded-full object-cover" src={Images.counsellorPic} alt="Rounded avatar"></img>
                            </div>
                            <div className="col-span-8 flex flex-col justify-center">
                                <p className="text-xl text-black font-semibold">Mathew</p>
                                <p className="text-lg text-black py-2">10 years experience </p>
                                <p className="text-sm text-[var(--grey-shade-dark)]">1000+ stdentes got counselled</p>
                            </div>
                            <div className="col-span-2 flex flex-col justify-center ">
                                <button className='rounded-md w-full p-2 border border-2 border-[var(--tail-shade-dark)] text-black' onClick={() => {

                                }}>Request Accepted</button>
                            </div>

                        </div>
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point icon={() => (<svg className="w-[17px] h-[17px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                </svg>)} />
                <Timeline.Content>
                    <Timeline.Time>
                        April 2022
                    </Timeline.Time>

                    <Timeline.Body>

                        <div className="grid grid-cols-12 gap-4 my-4 border-b border-b-2 border-[var(--grey-shade-dark)] p-4">
                            <div className="col-span-2">
                                <img className="w-40 h-40  rounded-full object-cover" src={Images.person} alt="Rounded avatar"></img>
                            </div>
                            <div className="col-span-8 flex flex-col justify-center">
                                <p className="text-xl text-black font-semibold">swathi</p>
                                <p className="text-lg text-black py-2">swathi@gmail.com </p>
                                <p className="text-sm text-[var(--grey-shade-dark)]">_91630425678</p>
                            </div>
                            <div className="col-span-2 flex flex-col justify-center ">
                                <button className='rounded-md w-full p-2 border border-2 border-[var(--tail-shade-dark)] text-black' onClick={() => {

                                }}>Request sent</button>
                            </div>

                        </div>
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
        </Timeline>
    )
}

export default ReqStatus