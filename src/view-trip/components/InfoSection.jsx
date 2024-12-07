import { useEffect, useState } from "react";

const InfoSection = ({ trip }) => {
    const [photoURL, setPhotoURL] = useState("");

    useEffect(() => {
        const fetchImage = async () => {
            const API_KEY =
                "rinOroAxkFsvc7nJ0idPzdTaLjSCZwnkOpTpobcY9eXTy4ytFolH3lhE";
            const query = trip?.userSelection?.location?.label;

            try {
                const response = await fetch(
                    `https://api.pexels.com/v1/search?query=${query}&per_page=1`,
                    {
                        headers: {
                            Authorization: API_KEY,
                        },
                    }
                );

                const data = await response.json();

                if (data.photos && data.photos.length > 0) {
                    setPhotoURL(data.photos[0].src.original);
                } else {
                    console.error("No images found for Kerala");
                }
            } catch (error) {
                console.error("Error fetching image from Pexels:", error);
            }
        };

        fetchImage();
    }, []);
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
