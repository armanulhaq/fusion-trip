import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useState } from "react";
import { Input } from "@/components/ui/input";
const CreateTrip = () => {
    const [place, setPlace] = useState();
    return (
        // default padding-5 and margin-top-10
        <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
            <h2 className="font-bold text-3xl">
                Tell us your travel preferences
            </h2>
            <p className="mt-3 text-gray-500 text-xl">
                Just provide some basic information, and our trip planner will
                generate a customized itinerary based on your preferences.
            </p>
            <div className="mt-20 flex flex-col gap-10">
                <div>
                    <h2 className="text-xl my-3 font-normal">
                        What is your destination of choice?
                    </h2>
                    <GooglePlacesAutocomplete
                        apiKey={import.meta.env.VITE_GOOGLE_PLACES_API}
                        selectProps={{
                            place,
                            onChange: (value) => {
                                setPlace(value);
                                console.log(value);
                            },
                        }}
                    />
                </div>
                <div>
                    <h2 className="text-xl my-3 font-normal">
                        How many days are you planning your trip?
                    </h2>
                    <Input placeholder={"Example: 2"} type="number" />
                </div>
            </div>
        </div>
    );
};

export default CreateTrip;
