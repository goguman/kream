import {useQuery} from "react-query";
import axios from "axios";

const getProduct = async (modelCode) => {
    const {data} = await axios.get(
        `http://localhost:4000/getProduct?modelCode=${modelCode}`
    );
    return data;
};

export default (modelCode:number) => {
    const {status, data, error} =
        useQuery("getWishModel", ()=>getProduct(modelCode));

    console.log("get Product : ");
    console.log(data);
    return {status, data, error};
}