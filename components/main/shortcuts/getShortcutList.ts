import {useQuery} from "react-query";
import axios from "axios";

let param;

const getTopShortcutList = async () => {
    const {data} = await axios.get(
        `http://localhost:4000/getTopShortcutList`
    );
    console.log("getTopList");
    console.log(data);
    return data;
};

const getBrandFocusList = async () => {
    const {data} = await axios.get(
        `http://localhost:4000/getBrandFocusList`
    );
    console.log("getBrandFocusList");
    console.log(data);
    return data;
}

export default (theme:string) => {
    let res;
    if(theme == "topList") {
        res = useQuery(theme, getTopShortcutList);
        console.log("get shortcut res >>>> ");
        console.log(res);
    } else if(theme == "brandFocus") {
        res = useQuery(theme, getBrandFocusList);
        console.log("get shortcut res >>>> ");
        console.log(res);
    } else {
        return {data: "nodata"};
    }

    const {status, data, error} = res;
    console.log("status, data, error >>>> ");
    console.log(status);
    console.log(data);
    console.log(error);

    return {status, data, error};
}