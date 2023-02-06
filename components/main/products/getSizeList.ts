import {useQuery} from "react-query";
import axios from "axios";

const getSizeList = async (modelCode) => {
    const {data} = await axios.get(
        `http://localhost:4000/getSizeList?modelCode=${modelCode}`
    );
    return data;
};

export default (modelCode:number) => {
    const {status, data, error} =
        useQuery("getSizeList", ()=>getSizeList(modelCode));
    console.log("get ProductSizeList : ");
    console.log(data);
    return {status, data, error};
}