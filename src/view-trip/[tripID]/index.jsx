import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";
import Footer from "../components/Footer";

const ViewTrip = () => {
    const { tripID } = useParams();
    const [trip, setTrip] = useState([]);
    useEffect(() => {
        tripID && getTripData(); //Run this only when tripID is available
    }, [tripID]);

    const getTripData = async () => {
        const docRef = doc(db, "AITrips", tripID);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists) {
            setTrip(docSnap.data());
        } else {
            toast("No trip found");
        }
    };
    console.log(trip);
    return (
        <div className="p-10 md:px-20 lg:pd-44 xl:pd-56">
            {/* Information Section */}
            <InfoSection trip={trip} />
            <Hotels trip={trip} />
            {/* Daily Plans */}
            {/* <Itinerary trip={trip} />  */}
            {/* Footer */}
            <Footer trip={trip} />
        </div>
    );
};

export default ViewTrip;
