"use client"
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";

const MobileNavButton = ({children}:{children:any}) => {
    const nav = useRouter()
    return (
        <button className="bg-gray-200 mr-6 rounded-md shadow-inner w-[20%] self-center hover:bg-slate-400 hover:text-slate-100 px-2 py-1 " onClick={()=>{
            Cookies.set("token", "")
            nav.replace("/auth")
        }}>
            {children}
        </button>
    )
}

export default MobileNavButton