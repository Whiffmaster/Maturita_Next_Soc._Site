import {Spinner} from "@nextui-org/react";

export default function Loading() {

  return (
    <div className={"w-screen h-screen bg-black flex items-center"}>
      <div className={"m-auto flex flex-row justify-around items-center w-[200px]"}>
        <Spinner color="primary" className={""} size={"lg"}/>
        <h2 className={"text-xl"}>Loading...</h2>
      </div>
    </div>
  )
}