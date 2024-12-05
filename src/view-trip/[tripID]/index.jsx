import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";

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
            console.log("Document: ", docSnap.data());
            setTrip(docSnap.data());
        } else {
            console.log("No such document exists");
            toast("No trip found");
        }
    };
    return (
        <div className="p-10 md:px-20 lg:pd-44 xl:pd-56">
            {/* Information Section */}
            <InfoSection trip={trip} />
            {/* Recommended Hotels */}
            <Hotels trip={trip} />
            {/* Daily Plans */}
            {/* Footer */}
        </div>
    );
};

export default ViewTrip;
