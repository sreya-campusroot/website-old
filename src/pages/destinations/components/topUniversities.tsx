import React, { FC } from "react";
import { getCountryPicture } from "../../../services";
import { SectionHeading } from "../../../assets/texts";
import DragableCarousal from "../../../components/elements/dragableCarousal";
import Images from "../../../assets";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CustomLink } from "../../../components/elements/actions";
import NoData from "../../../components/layouts/noData";

interface locationProps {
    country: string,
    state: string,
    city: string
}
interface topUniversityProps {
    location: locationProps,
    _id: string,
    name: string,
    logoSrc: string,
    type: string,
    establishedYear: number,
    ranking: [],
    graduationRate: number,
    acceptanceRate: number
}

interface Props {
    data: topUniversityProps[];
    destinationName: string
}



const TopUniversities: FC<Props> = ({ data, destinationName }) => {
    const navigate = useNavigate()

    const getTopUniversitiesCards = () => {
        return data?.map((item: any, i: number) => {
            return (
                <div key={i} className=" max-w-[100%] sm:max-w-[100%] md:mx-w-[100%] xl:max-w-[100%]  p-4">
                    <div className="flex justify-center">
                        <button className=" -mb-[20%]"
                            onClick={() => {
                                localStorage.setItem('universityId', item._id)
                                navigate('/destinations/country/university-details')
                            }}>
                            {item.logoSrc ? <img src={item.logoSrc} alt="university-logo" className="w-40 h-40" /> : <div className=" rounded-full w-40 h-40 flex justify-center items-center bg-[var(--beinge-shade-light)]" >
                                <img src={Images.universityLogo} alt="university-logo" />
                            </div>}
                        </button>
                    </div>
                    <div className="pt-[20%] p-4 border border-1 border-[var(--tail-shade-dark)] rounded-2xl">
                        <h1 className="text-xl text-center font-bold">
                            {item.name}
                        </h1>
                        <p className="text-lg text-center py-1">{destinationName}</p>

                        <p className="text-[10px] text-center">{item.type} | Estd {item.establishedYear}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <div className="flex items-center w-full">
                                <img
                                    src={Images.rankingIcon}
                                    alt=""
                                    className="w-20 h-20"
                                />
                                <div className="">
                                    <p className="text-sm text-center font-semibold">116</p>
                                    <p className="text-sm text-center">QS Ranking</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">

                                <div className="w-10 h-10 flex justify-center items-center rounded-full border boder-2 border-[var(--beinge)]">
                                    <p className=" text-sm text-center font-semibold">{item.acceptanceRate + '%'}</p>
                                </div>

                                <div className="">
                                    <p className="text-sm text-center">Acceptance Rate</p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            );
        });
    };
    const topUniversities = getTopUniversitiesCards();

    return (
        <>
            <SectionHeading>Top Universities</SectionHeading>

            {data?.length ? <>
                <DragableCarousal items={topUniversities} />
                <div className="flex">
                    <CustomLink label="Explore More" path="/destinations/country/universities" />
                </div>
            </> : <><NoData img={Images.universityLogo} heading={'Data not available'} text={`Top Universities present in ${destinationName} are shown here`} /></>}
        </>
    );
};

export default TopUniversities;
