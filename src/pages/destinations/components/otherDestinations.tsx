import React, { FC } from "react";
import { getCountryPicture } from "../../../services";
import { SectionHeading } from "../../../assets/texts";
import DragableCarousal from "../../../components/elements/dragableCarousal";
import Images from "../../../assets";
import { Link, useNavigate } from "react-router-dom";

interface destinationProps {
    climate: any;
    _id: string;
    destinationName: string;
    flagSrc: string;
    capitalCity: string;
    currency: string;
    about: string;
    popularPrograms: any;
    createdAt: any;
    updatedAt: any;
    __v: number;
    callingCode: number;
}

interface Props {
    data: destinationProps[];
    destinationPageRef: any
}

const OtherDestinations: FC<Props> = ({ data, destinationPageRef }) => {
    const navigate = useNavigate()
    const getOtherDestinationsCards = () => {
        return data.map((item: any, i: number) => {
            return (
                <Link
                    key={i} className=" w-full" onClick={() => {
                        localStorage.setItem('destinationName', item.destinationName);

                        if (destinationPageRef.current) {
                            destinationPageRef?.current.scrollIntoView({ scroll: 'smooth' });
                        }
                        // navigate(`/destinations/:${item.destinationName}`);
                    }} to={`/destinations/:${item.destinationName}`}>
                    <div className="m-4 relative h-64">
                        <img
                            src={getCountryPicture(item.destinationName)}
                            alt=""
                            className="h-full w-full rounded-lg object-cover"
                        />
                        <p className="absolute bottom-2 left-4 text-white font-bold">
                            {item.destinationName}
                        </p>
                    </div>
                </Link>
            );
        });
    };
    const otherDestinations = getOtherDestinationsCards();
    return (
        <>
            <SectionHeading>Other Destinations</SectionHeading>

            <DragableCarousal items={otherDestinations} />
        </>
    );
};

export default OtherDestinations;
