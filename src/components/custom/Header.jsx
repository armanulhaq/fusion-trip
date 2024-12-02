import { Button } from "../ui/button";

const Header = () => {
    return (
        <div className="p-3 shadow-sm flex justify-between items-center px-10">
            <div className="flex items-center gap-3">
                <img className="w-8 h-8" src="/logo.png" alt="" />
                <div className="font-bold">Fusion Trip</div>
            </div>
            <div>
                <Button>Sign In</Button>
            </div>
        </div>
    );
};

export default Header;
