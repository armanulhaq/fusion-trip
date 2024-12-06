import { GetPlaceDetails } from "@/service/GlobalAPI";
import { useEffect, useState } from "react";

const PHOTO_REF_URL =
    "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&maxWidthPx=600&key=" +
    "AIzaSyAsiu-PZRr7Mi2Ec1GidLo9vMpGMKpZv5I";

const InfoSection = ({ trip }) => {
    const [photoURL, setPhotoURL] = useState("");
    useEffect(() => {
        trip && GetPlaceImage();
    }, [trip]);

    const GetPlaceImage = async () => {
        const data = {
            textQuery: trip?.userSelection?.location?.label,
        };
        try {
            const response = await GetPlaceDetails(data);

            const photoURL = PHOTO_REF_URL.replace(
                "{NAME}",
                response.data.places[0].photos[3].name
            );
            setPhotoURL(photoURL);
        } catch (error) {
            console.error("Error fetching place image:", error);
        }
    };
    return (
        <div>
            <img
                className="h-[340px] w-full object-cover rounded-s"
                src={photoURL}
                alt=""
            />
            <div className="flex justify-between items-center">
                <div className="my-5 flex flex-col gap-2">
                    <h2 className="font-bold text-2xl">
                        {trip?.userSelection?.location?.label}
                    </h2>
                    <div className="flex gap-5">
                        <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
                            📅 {trip.userSelection?.noOfDays} day(s).
                        </h2>
                        <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
                            💲 {trip.userSelection?.budget}
                        </h2>
                        <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
                            🧍‍♂️{trip.userSelection?.traveller} traveller(s).
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
