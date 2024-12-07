import PlaceCard from "./PlaceCard";

const PlacesToVisit = ({ trip }) => {
    const parsedTripData = trip?.tripData ? JSON.parse(trip.tripData) : null;
    return (
        <div>
            <h2 className="font-bold text-xl mt-5">Places to Visit</h2>
            <div>
                {parsedTripData?.Itinerary.map((item, index) => (
                    <div key={index}>
                        <h2 className="font-bold text-lg mt-3">
                            {String(item.Day).startsWith("Day")
                                ? item.Day
                                : `Day ${item.Day}`}
                        </h2>

                        <div>
                            {item?.Plan || item?.Places ? (
                                <div className="grid md:grid-cols-3 gap-5">
                                    {item?.Plan?.map((place, index) => (
                                        <div key={index}>
                                            <PlaceCard place={place} />
                                        </div>
                                    ))}
                                    {item?.Places?.map((place, index) => (
                                        <div key={index}>
                                            <PlaceCard place={place} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>No plan or places available.</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlacesToVisit;
