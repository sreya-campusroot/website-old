import React from 'react'
import CartItem from './cartItem'
import Images from '../../../assets'
import { CustomButton } from '../../../components/elements/actions'
import { useSelector } from 'react-redux'
import { AppState } from '../../../redux/appState'
import { cartItemProps } from '../../interfaces'
import NoData from '../../../components/layouts/noData'

const Cart = () => {
    const dashboard = useSelector((state: AppState) => state.dashboardReducer)
    console.log('dashboard', dashboard)
    const cart = dashboard?.data?.activity?.cart
    return (
        <div className='grid grid-cols-12 gap-4'>
            <div className="col-span-8">
                {cart?.length > 0 ? <> {cart?.map((item: cartItemProps) => {
                    return <CartItem item={item} />
                })}</> : <div className='h-[500px]'><NoData heading="There is Nothing to show here" text="You have'nt added any course in the Cart" /></div>}
            </div>
            <div className="col-span-4">
                <div className='rounded-lg bg-[var(--grey-shade-medium)] p-10 '>
                    <p className="text-xl font-bold text-center">
                        Subtotal ({cart?.length > 0 ? cart?.length : '0'} applications)
                    </p>
                    <div className="flex justify-center items-center my-4">
                        <img src={Images.rupeeIcon} alt="rupee-icon" className='me-1 w-4 h-4 object-contain' />
                        <p className="text-lg text-center font-semibold">
                            3000

                        </p>
                    </div>
                    <CustomButton handleSubmit={() => {

                    }}>
                        Apply all
                    </CustomButton>

                </div>
            </div>
        </div>
    )
}

export default Cart