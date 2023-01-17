import {useQuery} from "react-query";
import axios from "axios";

let param;

const getJustDroppedList = async () => {
    const {data} = await axios.get(
        `http://localhost:4000/justDroppedList`
    );
    // console.log("getJustDroppedList");
    // console.log(data);
    return data;
}

export default (theme:string) => {
    let res;
    if(theme == "justDropped") {
        res = useQuery(theme, getJustDroppedList);
    }

    const {status, data, error} = res;

    return {status, data, error};
}