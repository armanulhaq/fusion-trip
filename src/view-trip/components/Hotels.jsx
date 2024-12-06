import { Link } from "react-router-dom";

const Hotels = ({ trip }) => {
    const parsedTripData = trip?.tripData ? JSON.parse(trip.tripData) : null;
    return (
        <div>
            <h2 className="font-bold text-xl mt-5 mb-5">
                Hotel Recommendations
            </h2>
            <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {parsedTripData?.HotelOptions?.map((hotel, index) => (
                    <Link
                        key={index}
                        to={
                            "https://google.com/maps/search/?api=1&query=" +
                            hotel.HotelName +
                            "," +
                            hotel.HotelAddress
                        }
                        target="_blank"
                    >
                        <div className="rounded-xl shadow-md hover:scale-105 transition-all cursor-pointer">
                            <img className="rounded-xl" src="/hotel.jpg" />
                            <div className="p-5 my-2 flex flex-col gap-2">
                                <h2 className="font-medium">
                                    {hotel.HotelName}
                                </h2>
                                <h2 className="text-xs text-gray-400 truncate">
                                    📍{hotel.Description}
                                </h2>
                                <div className="flex justify-between">
                                    <h2 className="text-sm">{hotel?.Price}</h2>
                                    <h2 className="text-sm">
                                        ⭐️{hotel?.Rating}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Hotels;
