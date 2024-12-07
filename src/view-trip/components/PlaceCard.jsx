import { Link } from "react-router-dom";

const PlaceCard = ({ place }) => {
    return (
        <Link
            to={
                "https://google.com/maps/search/?api=1&query=" + place.PlaceName
            }
            target="_blank"
        >
            <div className="flex-col rounded-xl p-3 mt-3 flex gap-2 hover:scale-105 transition-all shadow-md cursor-pointer">
                <div className="flex gap-5 flex-col sm:flex-row">
                    <img
                        src="/places.jpg"
                        alt=""
                        className="w-100 h-[130px] sm:w-[180px] sm:h-[180px] rounded-xl"
                    />
                    <div className="flex flex-col justify-center truncate">
                        <div className="flex justify-between">
                            <div className="font-bold text-lg truncate">
                                {place?.PlaceName || place?.placeName}
                            </div>
                            <div className="text-sm mt-3 sm:mt-0 text-end">
                                ⭐️{place.Rating}
                            </div>
                        </div>

                        <p className="text-sm text-gray-400 truncate sm:whitespace-normal break-words whitespace-normal">
                            {place.PlaceDetails}
                        </p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <h2 className="text-sm text-orange-400">
                        {place.TimeTravel}
                    </h2>
                    <h2 className="text-sm text-green-500">
                        💲{" "}
                        {place.TicketPricing.toLowerCase().includes("varies")
                            ? "Varies"
                            : place.TicketPricing}
                    </h2>
                </div>
            </div>
        </Link>
    );
};

export default PlaceCard;
