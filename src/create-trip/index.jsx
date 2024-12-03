import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelList } from "@/constants/options";
import { Button } from "@/components/ui/button";

const CreateTrip = () => {
    const [place, setPlace] = useState();
    const [formData, setFormData] = useState([]);
    const handleInput = (name, value) => {
        if (name === "noOfDays" && value > 5) {
            console.log("Please enter trip days less than 5");
            return;
        }
        setFormData({ ...formData, [name]: value });
    };
    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const onGenerateTrip = () => {
        if (formData?.noOfDays > 5) {
            console.log("Please enter trip days less than 5");
            return;
        }
    };
    return (
        // default padding-5 and margin-top-10
        <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
            <h2 className="font-bold text-3xl">
                Tell us your travel preferences 🏕️
            </h2>
            <p className="mt-3 text-gray-500 text-xl">
                Just provide some basic information, and our trip planner will
                generate a customized itinerary based on your preferences.
            </p>
            <div className="mt-20 flex flex-col gap-10">
                <div>
                    <h2 className="text-xl my-3 font-bold">
                        What is your destination of choice?
                    </h2>
                    <GooglePlacesAutocomplete
                        apiKey="AIzaSyCJTgyCmWak8D_UUHh7NwjeD_y-ARiNaIQ"
                        selectProps={{
                            place,
                            onChange: (value) => {
                                setPlace(value);
                                handleInput("location", value);
                            },
                        }}
                    />
                </div>
                <div>
                    <h2 className="text-xl my-3 font-bold">
                        How many days are you planning your trip?
                    </h2>
                    <Input
                        placeholder={"Example: 2"}
                        type="number"
                        onChange={(e) =>
                            handleInput("noOfDays", e.target.value)
                        }
                    />
                </div>
            </div>
            <div>
                <h2 className="text-xl my-3 font-bold">What is your Budget?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                    {SelectBudgetOptions.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleInput("budget", item.title)}
                            className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                                formData?.budget == item.title &&
                                "shadow-lg border-black"
                            }`}
                            // The ?. (optional chaining) ensures no error occurs if formData is undefined.
                        >
                            <h2 className="4xl">{item.icon}</h2>
                            <h2 className="font-bold text-lg">{item.title}</h2>
                            <h2 className="text-sm text-gray-500">
                                {item.desc}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-xl my-3 font-bold">
                    Who do you plan on traveling with on your next adventure?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                    {SelectTravelList.map((item, index) => (
                        <div
                            key={index}
                            onClick={() =>
                                handleInput("traveller", item.people)
                            }
                            className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                                formData?.traveller == item.people &&
                                "shadow-lg border-black"
                            }`}
                        >
                            <h2 className="4xl">{item.icon}</h2>
                            <h2 className="font-bold text-lg">{item.title}</h2>
                            <h2 className="text-sm text-gray-500">
                                {item.desc}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>

            <div className="my-10 justify-end flex">
                <Button onClick={onGenerateTrip}>Generate Trip</Button>
            </div>
        </div>
    );
};

export default CreateTrip;
