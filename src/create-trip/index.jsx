import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
    AI_Prompt,
    SelectBudgetOptions,
    SelectTravelList,
} from "@/constants/options";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { chatSession } from "@/service/ai";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const CreateTrip = () => {
    const [place, setPlace] = useState();
    const [formData, setFormData] = useState({});

    const [openDialogue, setOpenDialogue] = useState(false);

    const handleInput = (name, value) => {
        if (name === "location" && value?.label) {
            setFormData((prev) => ({
                ...prev,
                location: {
                    label: value.label,
                    value: value.value,
                },
            }));
            return;
        }
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const login = useGoogleLogin({
        onSuccess: (codeResp) => GetUserProfile(codeResp),
        onError: (error) => console.log(error),
    });

    const onGenerateTrip = async () => {
        const user = localStorage.getItem("user");
        if (!user) {
            setOpenDialogue(true);
            return;
        }

        if (
            formData?.noOfDays > 5 ||
            !formData?.location ||
            !formData.budget ||
            !formData.traveller
        ) {
            toast.error("Please fill all required fields correctly.");
            return;
        }

        const FINAL_PROMPT = AI_Prompt.replace(
            "{location}",
            formData?.location.label
        )
            .replace("{totalDays}", formData?.noOfDays)
            .replace("{traveller}", formData.traveller)
            .replace("{budget}", formData?.budget)
            .replace("{totalDays}", formData?.noOfDays);

        console.log(FINAL_PROMPT);

        const result = await chatSession.sendMessage(FINAL_PROMPT);
        console.log(result?.response?.text());
    };
    const GetUserProfile = (tokenInfo) => {
        axios
            .get(
                `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
                {
                    headers: {
                        Authorization: `Bearer ${tokenInfo.access_token}`,
                        Accept: "Application/json",
                    },
                }
            )
            .then((resp) => {
                console.log(resp);
                localStorage.setItem("user", JSON.stringify(resp.data));
                setOpenDialogue(false);
                onGenerateTrip();
            });
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
                        apiKey="AIzaSyAsiu-PZRr7Mi2Ec1GidLo9vMpGMKpZv5I"
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
                        placeholder={"Less than 6"}
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
            <Dialog open={openDialogue}>
                <DialogContent>
                    <DialogHeader>
                        <DialogDescription>
                            <img className="w-10 h-10" src="/logo.png" alt="" />
                            <h2 className="font-bold text-lg mt-7">
                                Sign in with Google
                            </h2>
                            <p>
                                Sign in to the app using Google Authentication
                                Security
                            </p>
                            <Button
                                onClick={login}
                                className="w-full mt-5 flex gap-4 items-center"
                                variant="outline"
                            >
                                <FcGoogle />
                                Sign in with Google
                            </Button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default CreateTrip;
