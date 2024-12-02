import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Hero = () => {
    return (
        <div className="flex flex-col items-center mx-56 gap-9">
            <h1 className="font-extrabold text-[60px] text-center mt-16">
                <span className="text-[#fb8500]">
                    Discover Your Next Adventure with AI:
                </span>{" "}
                Personalised Itineraries at Your Fingertips{" "}
            </h1>
            <p className="text-xl text-gray-500 text-center">
                Your personal trip planner and travel curator, creating custom
                itineraries tailored to your interests and budget.
            </p>
            <Link to={"create-trip"}>
                <Button>Get Started, it&apos;s free</Button>
            </Link>
        </div>
    );
};

export default Hero;
