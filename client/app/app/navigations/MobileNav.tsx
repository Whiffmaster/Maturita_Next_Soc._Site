import {User} from "../../../types";
import MobileNavButton from "./MobileNavButton";
import {useUserContext} from "../../../supp/components/UserContext";


const MobileNav = () => {
    const {data, setData} = useUserContext()
    return (
        <div className={"mobile:hidden fixed flex flex-row w-full h-[40px] bg-slate-300 justify-between rounded-b-xl"}>
            <h2 className={"relative self-center ml-4 text-xl text-slate-700"}>Logged as: {data.username || ""}</h2>
            <MobileNavButton>
                <h2 className={""}>Logout</h2>
            </MobileNavButton>

        </div>
    )
}

export default MobileNav