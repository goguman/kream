import {useQuery} from "react-query";
import axios from "axios";

let param;

const getTopList = async () => {
    const {data} = await axios.get(
        `http://localhost:4000/getShortcutList`
    );
    console.log("getShortcutList");
    console.log(data);
    return data;
}

export default (theme:string) => {
    let res;
    if(theme == "topList") {
        res = useQuery(theme, getTopList);
    }

    const {status, data, error} = res;

    return {status, data, error};
}