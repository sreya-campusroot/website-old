import React, { FC, ReactNode } from 'react'
import AliceCarousel from 'react-alice-carousel';

interface carouselProps {
    items: any
}
const CustomCarousal: FC<carouselProps> = ({ items }) => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    return (
        <div className='custom-carousal'>
            <AliceCarousel

                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"


            />
        </div>
    )
}

export default CustomCarousal