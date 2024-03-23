import {useFeedContext} from "../../../supp/components/FeedContext";

const searchThing = () => {
    const {feed, setFeed} = useFeedContext()
    return (
        <div className={"absolute px-2 shadow-md text-center py-1 bg-gray-800 text-slate-500 min-w-[90px] h-fit w-fit rounded-full top-[10vh] self-center"}>
            <h2 className={"text-xl "}>{feed.search}</h2>
        </div>
    )
}
export default searchThing