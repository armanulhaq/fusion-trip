import { Link } from "react-router-dom";
const Itinerary = ({ trip }) => {
    console.log(trip);
    //Parse the trip data safely
    const parseTripData = () => {
        try {
            return trip?.tripData ? JSON.parse(trip.tripData) : null;
        } catch (error) {
            console.error("Error parsing trip data:", error);
            return null;
        }
    };

    const tripData = parseTripData();
    const itinerary = tripData?.Itinerary || [];
    console.log(itinerary);

    return (
        <div className="container mx-auto px-4">
            <h2 className="font-bold text-xl mt-5 mb-4">Places to Visit</h2>
            {itinerary.map((dayPlan, dayIndex) => (
                <div key={dayIndex} className="mb-6">
                    <h3 className="font-semibold text-lg mb-3">
                        {dayPlan.Day}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {dayPlan.Plan.map((place, placeIndex) => (
                            <Link
                                key={placeIndex}
                                to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                    place.placeName
                                )}`}
                                target="_blank"
                                className="block"
                            >
                                <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    <img
                                        src={
                                            place.PlaceImageUrl || "/places.jpg"
                                        }
                                        alt={place.placeName}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h4 className="font-medium text-lg mb-2 truncate">
                                            {place.placeName}
                                        </h4>
                                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                                            {place.PlaceDetails}
                                        </p>
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center">
                                                <span className="mr-1">
                                                    ⭐️
                                                </span>
                                                <span>{place.Rating}</span>
                                            </div>
                                            <div className="text-sm">
                                                <span className="text-gray-500 mr-2">
                                                    Travel Time:
                                                </span>
                                                {place.TimeTravel}
                                            </div>
                                        </div>
                                        <div className="text-sm">
                                            <span className="text-gray-500 mr-2">
                                                Ticket Price:
                                            </span>
                                            {place.TicketPricing}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Itinerary;
