import { Button } from "@/components/ui/button";
import { FaShareAlt } from "react-icons/fa";

const InfoSection = ({ trip }) => {
    return (
        <div>
            <img
                className="h-[340px] w-full object-cover rounded-s"
                src="/placeholder.jpg"
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
                <Button variant="outline">
                    <FaShareAlt />
                </Button>
            </div>
        </div>
    );
};

export default InfoSection;
