import {nanoid} from "@reduxjs/toolkit";

const MainTopBar = (props) => {
    const tabs = [
        {
            name: "추천",
            url: "#"
        }, {
            name: "남성",
            url: "#"
        }, {
            name: "여성",
            url: "#"
        }, {
            name: "기획전",
            url: "#"
        },
    ];
    function clickTab(index) {
        props.setCurrentTab(index);
    }

    return (
        <ul className="ul_tab h-10 w-full flex space-x-6 px-4 md:px-8 fixed z-40 bg-white border border-b-gray-200">
            {
                tabs.map((tab, index) =>
                    <li key={nanoid()} onClick={()=>clickTab(index)}
                        className={`li_tab flex items-center ${index==props.currentTab?"border-b-black border-b-[2px] pt-[2px] font-bold":""}`}>
                        <a className={"tab"} href={tab.url}>
                            <span className={"tab_name"}>{tab.name}</span>
                        </a>
                    </li>
                )
            }
        </ul>
    )
}
export default MainTopBar;