import {useState} from "react";
import MainTopBar from "../components/main/MainTopBar";
import Recommendation from "../components/main/pages/Recommendation";
import Men from "../components/main/pages/Men";

// const PAGE_SIZE = 4;

export default function Home() {
    const [currentTab, setCurrentTab] = useState(0);
    const components = [
        <Recommendation key={"recommendation"}/>,
        <Men key={"men"}/>
    ];

    return (
        <div className="break-keep pt-[64px] md:pt-[88px] w-full">
            <MainTopBar currentTab={currentTab} setCurrentTab={setCurrentTab}/>
            {
                <div className={"pt-10"}>
                    {components[currentTab]}
                </div>
            }
        </div>
    )
}
