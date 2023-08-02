import React, { FC } from 'react'
import { SectionHeading } from '../../../assets/texts'
import Images from '../../../assets'
import { Dropdown } from 'flowbite-react'

import { DeleteIcon, EditIcon } from '../../../assets/svgIcons'
import { CustomFlowbiteTheme } from "flowbite-react";
import ShortListed from '../dashboard/shortListed'
import { cartItemProps } from '../../interfaces'

const dropDownTheme: CustomFlowbiteTheme['dropdown'] = {
    inlineWrapper: "flex items-center text-black text-[16px] font-semibold focus:outline-0 focus:bg-transparent p-4"

};

interface itemProps {
    item: cartItemProps

}


const CartItem: FC<itemProps> = ({ item }) => {
    return (
        <>





            <div className="col-span-8">

                <div className="grid grid-cols-12 relative">


                    <div className="col-span-12 md:col-span-10 xl:col-span-10">
                        <div className="relative grid grid-cols-12 gap-4 my-4 border-b border-b-2 border-b-[#aaa8a8] p-4 rounded-lg">
                            <div className='absolute top-4 right-4'>
                                <button>
                                    <DeleteIcon />
                                </button>
                            </div>
                            <div className="col-span-12">
                                <div className="flex flex-col md:flex-row gap-4">

                                    <img className="w-40 h-40  rounded-lg object-contain" src={item?.course?.schoolDetails?.schoolLogoSrc} alt="student-dp"></img>

                                    <div className="col-span-12 sm:col-span-9 lg:col-span-7 flex flex-col justify-center">
                                        <p className="text-xl text-black font-semibold">{item?.course?.name}</p>
                                        <p className="text-lg text-black py-2">{item?.course?.schoolDetails?.schoolName}</p>
                                        <p className="text-sm pb-2">{item?.course?.schoolDetails?.DepartmentName}</p>
                                        <p className="text-sm ">{item?.university?.name}</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-span-12 mt-0 mx-auto">
                                <div className="mx-auto">
                                    <button className='py-2 px-4 bg-[var(--green-shade-dark)] text-white font-medium rounded-lg min-w-[200px]' >
                                        Apply Now
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-span-12 md:col-span-2 xl:col-span-4"></div>
                </div>

            </div>

        </>
    )
}

export default CartItem