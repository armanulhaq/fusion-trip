const Hotels = ({ trip }) => {
    // Get hotels from either structure

    const hotels = trip?.tripData ? JSON.parse(trip.tripData).HotelOptions : [];

    return (
        <div className="gap-15">
            <h2 className="font-bold text-xl mt-5">Recommended Hotels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {hotels?.map((item, index) => (
                    <div
                        key={index}
                        className="hover:scale-105 transition-all shadow-md rounded-lg p-3 cursor-pointer"
                    >
                        <img
                            src={item.hotelImageUrl || "/hotel.jpg"}
                            alt={item.hotelName || item.HotelName}
                            className="rounded-lg w-full h-48 object-cover"
                        />
                        <div className="my-3 space-y-2">
                            <h2 className="font-medium">
                                {item.hotelName || item.HotelName}
                            </h2>
                            <p className="text-sm text-gray-600">
                                {item.description || item.Description}
                            </p>
                            <div className="flex justify-between gap-2">
                                <span className="text-sm">
                                    ⭐️ {item.rating || item.Rating}
                                </span>
                                <span className="text-sm">
                                    {item.price || item.Price}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hotels;
