"use client"

const MobileNav = ({active}:{active:string}) => {
    return (
        <div className={"sm:hidden flex flex-row w-full h-[50px] bottom-0 justify-between"}>
            <h2 className={"text-grad font-bold text-xl my-auto mx-auto"}>{active}</h2>
        </div>
    )
}

export default MobileNav