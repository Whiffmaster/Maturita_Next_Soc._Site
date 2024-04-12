import {Card} from "@nextui-org/react";
import {useState} from "react";


const MobileSocial = () => {
  const [active, setActive] = useState<boolean>(false)
  return (
    <div
      className={`w-full h-[95%] bottom-[60px] absolute z-20 bg-black sm:hidden transition-all ${active ? "left-0" : "left-[100%]"}`}>
      <p className={"mx-auto text-grad font-bold"}>Friends</p>



      {active ? <div className={"w-[20px] h-[50px] absolute my-auto bg-white/10 left-0 rounded-r bottom-[70px]"}
                     onClick={() => setActive(false)}></div> :
        <div className={"w-[20px] h-[50px] absolute my-auto bg-white/10 -left-[20px] rounded-l bottom-[70px]"}
             onClick={() => setActive(true)}></div>
      }
    </div>
  );
}

export default MobileSocial;