import { FC, useEffect, useState } from "react";
import { SectionHeading } from "../../assets/texts";
import Images from "../../assets";
import { CustomLink } from "../../components/elements/actions";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../redux/appState";
import { getCountryPicture } from "../../services";
import api from "../../services/baseUrl";
import { allUniveristiesByDestinationEndpoint, topUniveristiesByDestinationEndpoint } from "../../services/endPoints";
import types from "../../redux/types";
import DragableCarousal from "../../components/elements/dragableCarousal";
import getOtherDestinationCards from "./components/otherDestinations";
import OtherDestinationsCard from "./components/otherDestinations";
import TestimonialCard from "../home/components/testimonialCard";
import OtherDestinations from "./components/otherDestinations";
import TopUniversities from "./components/topUniversities";
import NoData from "../../components/layouts/noData";

interface Props {
    destinationPageRef?: any
}
const Overview: FC<Props> = ({ destinationPageRef }) => {
    const dispatch = useDispatch()
    const allDestinations = useSelector((state: AppState) => state.allDestinationsReducer)

    const [topUniveristiesData, setTopUniveristiesData] = useState([])


    const { data } = allDestinations


    const destinationName = window.location.pathname.split(':')[1].replace('%20', ' ')

    const singleDestination = data?.filter((item: any) => {
        return item.destinationName === destinationName
    })[0]



    const getTopUniversitiesByDestination = async (country: string) => {

        try {

            const { data } = await api.get(topUniveristiesByDestinationEndpoint(country))

            setTopUniveristiesData(data.data)
            dispatch({ type: types.TOP_UNIVERSITIES_SUCCESS, payload: data.data })

        }
        catch {

        }

    }


    useEffect(() => {
        if (destinationName) {
            getTopUniversitiesByDestination(destinationName)
        }
    }, [destinationName])




    const info = [
        {
            img: Images.capital,
            label: "Capital",
            value: singleDestination?.capitalCity,
        },
        {
            img: Images.temperature,
            label: "Temperature",
            value: `${singleDestination?.climate.min} to ${singleDestination?.climate.max} C`,
        },
        {
            img: Images.dialingCode,
            label: "Dialing Code",
            value: singleDestination?.callingCode,
        },
        {
            img: Images.currency,
            label: "Currency",
            value: singleDestination?.currency,
        },
    ];
    const programImages = [
        {
            img: Images.computerProgram,

        },
        {
            img: Images.engineeringProgram,

        },
        {
            img: Images.scienceProgram,

        },
        {
            img: Images.managementProgram,

        },
    ];




    const programsLength = singleDestination?.popularPrograms.length





    const testimonials = [
        <TestimonialCard />,
        <TestimonialCard />,
        <TestimonialCard />,
        <TestimonialCard />,
        <TestimonialCard />,
        <TestimonialCard />

    ];

    return (
        <div>
            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {info.map((item, i) => {
                    return (
                        <div key={i} className="info-card rounded-lg p-4 w-full flex flex-col justify-center items-center">
                            <img src={item.img} alt="" className="rounded-lg" />
                            <p className="text-center font-semibold pt-3 pb-2">
                                {item.value}
                            </p>
                            <p className="text-sm text-[#9b9b9b] p-0">{item.label}</p>
                        </div>
                    );
                })}
            </div>
            <SectionHeading>About</SectionHeading>
            <p className="text-lg">
                {singleDestination?.about}
            </p>
            <SectionHeading>Popular Programs</SectionHeading>
            {singleDestination?.popularPrograms.length ? <> <div className={`grid grid-cols-1 sm:grid-cols-2 justify-center  ${programsLength === 3 ? 'md:grid-cols-3' : programsLength === 2 ? 'md:grid-cols-2' : programsLength === 1 ? 'md:grid-cols-1' : 'md:grid-cols-4'} gap-4 sm:gap-20 xl:gap-40 sm:mx-10 md:mx-20`}>


                {singleDestination?.popularPrograms.map((program: any, index: number) => {
                    return (
                        <>
                            {program ? <div key={index} className="h-full w-40 mx-auto flex flex-col justify-between">
                                <img
                                    src={programImages[index].img}
                                    alt="program-img"
                                    className="h-full object-contain"
                                />
                                <p className="text-center font-semibold">{program}</p>
                            </div> : <div className="d-none"></div>}
                        </>
                    );
                })
                }
            </div></> : <div>
                <NoData heading={'Data not available'} text={`Popular cources present to study in ${destinationName} are shown here`} />
            </div>}


            <TopUniversities data={topUniveristiesData} destinationName={destinationName} />

            {/* <SectionHeading>Required Documents</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2">
                {docsRequired.map((item) => {
                    return (
                        <div className="flex items-center">
                            <img
                                src={Images.checkList}
                                alt="check-gif-icon"
                                className="w-20 sm:w-30"
                            />
                            <p>{item.value}</p>
                        </div>
                    );
                })}
            </div> */}
            <OtherDestinations data={data} destinationPageRef={destinationPageRef} />
        </div>
    );
};

export default Overview;
